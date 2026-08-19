import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { MdOutlineContactMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import BookingForm from "./components/BookingForm";
import Home from "./pages/Home";
import About from "./pages/About";
import TourDetail from "./pages/TourDetail";
import DomesticTours from "./pages/DomesticToursNew";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import InternationalTours from "./pages/InternationalTours";
import { DataProvider } from "./context/DataContext";
import brandLogo from "./assets/brand-logo.png";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-slate-900">
          <Navbar />
          <main className="min-h-[calc(100vh-5rem)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/domestic-tours" element={<DomesticTours />} />
              <Route
                path="/international-tours"
                element={<InternationalTours />}
              />
              <Route path="/tour/:id" element={<TourDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <GlobalContactButtons onOpenEnquiry={() => setIsEnquiryOpen(true)} />
          <Footer />
          <BookingForm
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
          />
        </div>
      </Router>
    </DataProvider>
  );
}

function GlobalContactButtons({ onOpenEnquiry }) {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+919217664311"
          className="inline-flex items-center justify-center rounded-full bg-[#002f7f] text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-[#C77D0F]/20 transition hover:bg-[#C77D0F]"
        >
          <FiPhone className="mr-2 h-4 w-4" />
          Call Us
        </a>
        <a
          href="https://wa.me/919217664311"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
        >
          <FaWhatsapp className="mr-2 h-4 w-4 text-emerald-400" />
          WhatsApp
        </a>
      </div>
      <button
        onClick={onOpenEnquiry}
        className="group fixed right-6 bottom-36 z-50"
      >
        <div className="absolute inset-0 animate-ping rounded-full bg-black opacity-20" />

        <div className="relative flex h-10 w-16 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xl transition-all duration-300 hover:scale-110">
          <MdOutlineContactMail size={24} />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900 hover:bg-slate-800/80 px-4 py-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          Enquiry Now
        </div>
      </button>
    </>
  );
}

function Footer() {

  const socialLinks = [
  {
    name: "Facebook",
    url: "#",
  },
  {
    name: "Twitter",
    url: "#",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/adhirajgrandholidays",
  },
  {
    name: "LinkedIn",
    url: "#",
  },
];


  return (
    <footer className="border-t border-slate-300/60 bg-[#011D4F] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img
            src={brandLogo}
            alt="brand logo"
            className="h-20 w-auto rounded-lg"
          />
          <p className="text-sm leading-6 text-white/80">
            Your gateway to unforgettable travel experiences around the world.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["/", "/about", "/gallery", "/contact"].map((path) => (
              <li key={path}>
                <Link className="transition hover:text-[#C77D0F]" to={path}>
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <a
            href="mailto:adhirajgrandholidays@gmail.com"
            className="block text-sm leading-6 hover:underline"
          >
            Email: adhirajgrandholidays@gmail.com
          </a>

          <a
            href="tel:+919217664311"
            className="block text-sm leading-6 hover:underline"
          >
            Phone: +91 92176 64311
          </a>
          <p className="text-sm leading-6">
            Address: Office No 32, Shamli Road, Near Budhana Mod Muzaffarnagar,
            Uttar Pradesh - 251001
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
         <div className="flex flex-wrap gap-3 text-sm">
  {socialLinks.map((network) => (
    <a
      key={network.name}
      href={network.url}
      target={network.name === "Instagram" ? "_blank" : undefined}
      rel={network.name === "Instagram" ? "noopener noreferrer" : undefined}
      className="rounded-full bg-slate-200/80 px-4 py-2 text-slate-900 transition hover:bg-[#C77D0F] hover:text-slate-950"
    >
      {network.name}
    </a>
  ))}
</div>
        </div>
      </div>
      <div className="border-t border-slate-300/60 py-6 text-center text-sm text-slate-600">
        &copy; 2026 Adhiraj. All rights reserved.
      </div>
    </footer>
  );
}

export default App;
