# My React Travel Web

A modern travel agency website built with React, Vite, Tailwind CSS, and Express. This project includes a responsive front-end with routing, destination pages, an enquiry form, and a small Node.js backend for email enquiries via SMTP.

## Features

- React + Vite frontend with client-side routing using `react-router-dom`
- Tailwind CSS styling for responsive layout
- Smooth scrolling via `lenis`
- Booking/enquiry form that sends enquiry emails through the Express backend
- Contact and gallery pages with reusable components
- Configurable SMTP backend using `nodemailer`

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- Express
- Nodemailer
- Axios
- React Router DOM
- GSAP and Lenis for animation

## Getting started

```bash
cd d:\Ujjawal\travel-web\my-react-app
npm install
```

### Run frontend

```bash
npm run dev
```

### Run backend server

```bash
npm run server
```

The frontend will typically run at `http://localhost:5173` and the backend server will run at `http://localhost:5000` by default.

## Environment variables

Create a `.env` file in the project root with the following values:

```env
PORT=5000
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
EMAIL_FROM=from@example.com
EMAIL_TO=to@example.com
# Optional values
ADMIN_EMAIL=to@example.com
CORS_ORIGIN=*
```

> `EMAIL_TO` or `ADMIN_EMAIL` must be set for enquiry emails to be delivered.

## Available scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the production app
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint across the project
- `npm run server` - Start the Express enquiry backend

## API

The backend exposes one endpoint:

- `POST /api/enquiry`
  - accepts `name`, `phone`, `email`, `destination`, and `tourDetails`
  - sends an email to the configured SMTP destination

## Notes

- The app uses environment variables for SMTP configuration and CORS origin.
- If SMTP settings are missing or incorrect, the server logs a warning and email delivery will fail.
- Adjust `CORS_ORIGIN` to your frontend URL for production deployments.

## License

This project is currently private and can be adapted for travel or booking websites.
