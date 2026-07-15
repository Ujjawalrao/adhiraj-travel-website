import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ override: true });

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

const loadMailConfig = () => {
  dotenv.config({ override: true });

  return {
    smtpHost: process.env.SMTP_HOST,
    smtpPort: Number(process.env.SMTP_PORT || 587),
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    emailFrom: (process.env.EMAIL_FROM || process.env.SMTP_USER || "").trim(),
    emailTo: (process.env.EMAIL_TO || "").trim(),
  };
};

const createTransporter = (config) => {
  const port = Number(config.smtpPort || 587);
  const secure = port === 465;

  return nodemailer.createTransport({
    host: config.smtpHost || "smtp.gmail.com",
    port,
    secure,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

const verifyTransport = async () => {
  const config = loadMailConfig();

  if (!config.smtpHost || !config.smtpUser || !config.smtpPass || !config.emailTo) {
    console.warn(
      "⚠️ SMTP is not configured. Email sending will fail until SMTP_HOST, SMTP_USER, SMTP_PASS, and EMAIL_TO are set."
    );
    return;
  }

  try {
    const transporter = createTransporter(config);
    await transporter.verify();
    console.log("✅ SMTP transporter is ready");
  } catch (error) {
    console.error(
      "❌ SMTP transporter verification failed. If you are using Gmail, make sure you are using an App Password and not your regular account password."
    );
    console.error(error);
  }
};

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

verifyTransport();

app.post("/api/enquiry", async (req, res) => {
  const { name, phone, email, destination, tourDetails } = req.body;

  if (!name || !phone || !email || !destination || !tourDetails) {
    return res.status(400).json({
      error: "Missing required enquiry fields. Please provide name, phone, email, destination, and tourDetails.",
    });
  }

  const htmlContent = `
    <div style="font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif; color: #111827; line-height: 1.6;">
      <h2 style="color: #0f172a;">New Travel Enquiry</h2>
      <p style="margin-bottom: 24px; font-size: 15px; color: #475569;">A new enquiry has been submitted from the website. The details are below.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 700; color: #0f172a; width: 160px;">Name</td>
            <td style="padding: 12px 0; color: #334155;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 700; color: #0f172a;">Phone</td>
            <td style="padding: 12px 0; color: #334155;">${phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 700; color: #0f172a;">Email</td>
            <td style="padding: 12px 0; color: #334155;">${email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 0; font-weight: 700; color: #0f172a;">Destination</td>
            <td style="padding: 12px 0; color: #334155;">${destination}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 700; color: #0f172a; vertical-align: top;">Tour Details</td>
            <td style="padding: 12px 0; color: #334155; white-space: pre-wrap;">${tourDetails}</td>
          </tr>
        </tbody>
      </table>
      <p style="margin-top: 28px; color: #64748b; font-size: 14px;">This enquiry was collected from the website enquiry form.</p>
    </div>
  `;

  const config = loadMailConfig();
  const transporter = createTransporter(config);

  const mailOptions = {
    from: config.emailFrom || config.smtpUser,
    to: config.emailTo,
    subject: `New Travel Enquiry from ${name}`,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return res.status(500).json({
      error: "Unable to send your enquiry at the moment. Please try again later.",
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.use((error, req, res, next) => {
  console.error("Internal server error:", error);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
