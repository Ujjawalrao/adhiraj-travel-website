import React, { useState, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion } from "motion/react";
import brandLogo from "../assets/brand-logo-trans.png";
import { DataContext } from "../context/DataContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDomesticOpen, setMobileDomesticOpen] = useState(false);
  const [mobileInternationalOpen, setMobileInternationalOpen] = useState(false);

  const { domesticLocations, internationalLocations } = useContext(DataContext);

  const location = useLocation();
  const isDomesticActive = location.pathname.startsWith("/domestic-tours");
  const isInternationalActive = location.pathname.startsWith("/international-tours");

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setMobileDomesticOpen(false);
    setMobileInternationalOpen(false);
  };

  const navClass = ({ isActive }) =>
    `rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-black"
        : "text-black/70 hover:text-black/40"
    }`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 py-2"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center rounded-[10px] bg-white/65 backdrop-blur-xl px-6 py-2">

          <div className="flex flex-1 items-center gap-1">
            <NavLink to="/" onClick={handleLinkClick} className="mr-4 flex items-center">
              <img
                src={brandLogo}
                alt="logo"
                className="h-auto w-24 scale-135 object-contain"
              />
            </NavLink>
          </div>

          <div className="flex items-center justify-end gap-1">
            <NavLink to="/" end onClick={handleLinkClick} className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={handleLinkClick} className={navClass}>
              About
            </NavLink>

            {/* Domestic Tours */}
            <div className="relative group">
              <button
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  isDomesticActive
                    ? " text-black"
                    : "text-black/70 hover:text-black/40"
                }`}
              >
                Domestic Tours
                <FiChevronDown size={14} />
              </button>

              <div className="absolute left-0 top-full z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-700 bg-[#ffffff] opacity-0 invisible shadow-2xl transition-all duration-300 group-hover:opacity-100 group-hover:visible">

                {domesticLocations?.map((item) => (
                  <Link
                    key={item.id}
                    to={`/domestic-tours?location=${item.id}`}
                    onClick={handleLinkClick}
                    className="block px-5 py-2 text-sm text-black hover:bg-[#a1a1a179] hover:text-blue-900 transition"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            </div>

            {/* International Tours */}
            <div className="relative group">
              <button
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  isInternationalActive
                    ? " text-black"
                    : "text-black/70 hover:text-black/40"
                }`}
              >
                International
                <FiChevronDown size={14} />
              </button>

              <div className="absolute left-0 top-full z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-slate-700 bg-[#ffffff] opacity-0 invisible shadow-2xl transition-all duration-300 group-hover:opacity-100 group-hover:visible">

                {internationalLocations?.map((item) => (
                  <Link
                    key={item.id}
                    to={
                      item.packages?.length === 1
                        ? {
                            pathname: `/tour/${item.packages[0].id}`,
                            state: { tour: { ...item.packages[0], locationId: item.id, locationName: item.name } },
                          }
                        : `/international-tours?location=${item.id}`
                    }
                    onClick={handleLinkClick}
                    className="block px-5 py-2 text-sm text-black hover:bg-[#a1a1a179] hover:text-blue-900 transition"
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            </div>

            <NavLink to="/gallery" onClick={handleLinkClick} className={navClass}>
              Gallery
            </NavLink>

            <NavLink to="/contact" onClick={handleLinkClick} className={navClass}>
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="relative flex items-center justify-between rounded-2xl bg-white backdrop-blur-2xl px-4 py-3 shadow-sm ring-1 ring-slate-200/80 md:hidden">
          <NavLink to="/" onClick={handleLinkClick} className="flex items-center">
            <img
              src={brandLogo}
              alt="logo"
              className="h-12 w-auto object-contain"
            />
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-2 space-y-3 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-slate-200/80 md:hidden">

            <NavLink
              to="/"
              end
              onClick={handleLinkClick}
              className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:bg-[#002F7F] hover:text-white"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={handleLinkClick}
              className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:bg-[#002F7F] hover:text-white"
            >
              About
            </NavLink>

            <button
              onClick={() => setMobileDomesticOpen(!mobileDomesticOpen)}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:bg-[#002F7F] hover:text-white"
            >
              Domestic Tours
              <FiChevronDown
                className={`transition ${mobileDomesticOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileDomesticOpen && (
              <div className="space-y-1 rounded-2xl bg-slate-100 p-2">
                {domesticLocations?.map((item) => (
                  <Link
                    key={item.id}
                    to={`/domestic-tours?location=${item.id}`}
                    onClick={handleLinkClick}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-[#002F7F] hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileInternationalOpen(!mobileInternationalOpen)}
              className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:bg-[#002F7F] hover:text-white"
            >
              International Tours
              <FiChevronDown
                className={`transition ${mobileInternationalOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileInternationalOpen && (
              <div className="space-y-1 rounded-2xl bg-slate-100 p-2">
                {internationalLocations?.map((item) => (
                  <Link
                    key={item.id}
                    to={
                      item.packages?.length === 1
                        ? {
                            pathname: `/tour/${item.packages[0].id}`,
                            state: { tour: { ...item.packages[0], locationId: item.id, locationName: item.name } },
                          }
                        : `/international-tours?location=${item.id}`
                    }
                    onClick={handleLinkClick}
                    className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-[#002F7F] hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <NavLink
              to="/gallery"
              onClick={handleLinkClick}
              className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:bg-[#002F7F] hover:text-white"
            >
              Our Gallery
            </NavLink>

            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition hover:bg-[#002F7F] hover:text-white"
            >
              Contact
            </NavLink>

          </div>
        )}

      </div>
    </motion.nav>
  );
}

export default Navbar;