import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BookingForm from '../components/BookingForm';

function TourDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const tour = location.state?.tour;

  if (!tour) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Helmet>
          <title>Tour Details | TravelVerse</title>
        </Helmet>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-6"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#002f7f]/10 shadow-inner">
            <span className="text-4xl">🗺️</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Tour not found</h1>
          <p className="mt-3 text-slate-500">We couldn't find the tour package you're looking for.</p>
          <button
            onClick={() => navigate('/tours')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#002f7f] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#0045b8] hover:shadow-lg hover:shadow-[#002f7f]/20 active:scale-98"
          >
            ← Back to Tours
          </button>
        </motion.div>
      </div>
    );
  }

  const tabs = ['overview', 'itinerary', 'included'];

  const defaultHighlights = [
    '🏔️ Breathtaking Scenery',
    '🍽️ Local Cuisine',
    '🛏️ Comfortable Accommodation',
    '🎒 Expert Guide',
    '📸 Photo Opportunities',
    '🌅 Sunrise & Sunset Views',
  ];

  const itinerary = [
    { day: 1, title: 'Arrival & Orientation', desc: 'Check in to your hotel, welcome dinner, and orientation briefing with your guide.' },
    { day: 2, title: 'Main Activities & Exploration', desc: 'Full-day excursion to key landmarks with a seasoned local guide.' },
    { day: 3, title: 'Cultural Experience', desc: 'Immerse yourself in local traditions, crafts, and authentic cuisine.' },
    { day: 4, title: 'Adventure Activities', desc: 'Optional trekking, water sports, or wildlife safari based on your package.' },
    { day: 5, title: 'Departure', desc: 'Leisurely breakfast, last-minute shopping, and drop-off at the airport.' },
  ];

  const included = [
    { icon: '🏨', label: 'All accommodation' },
    { icon: '🧑‍🏫', label: 'Professional tour guide' },
    { icon: '🍳', label: 'Breakfast and dinner daily' },
    { icon: '🎟️', label: 'All activities & entrance fees' },
    { icon: '🚐', label: 'Transportation throughout' },
    { icon: '🛡️', label: 'Travel insurance included' },
  ];

  return (
    <>
      <Helmet>
        <title>{tour.title} | TravelVerse - Tour Details</title>
        <meta name="description" content={tour.description} />
      </Helmet>

      <div className="min-h-screen bg-slate-50 selection:bg-[#002f7f]/10 selection:text-[#002f7f]">

        {/* ── HERO SECTION ── */}
        <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden bg-slate-950">
          <motion.img
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover opacity-80"
          />
          {/* Layered corporate gradient system */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

          {/* Premium Back Button */}
          <div className="absolute top-0 inset-x-0 mx-auto max-w-7xl px-6 pt-6 md:px-8">
            <button
              onClick={() => navigate('/tours')}
              className="group flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/20 active:scale-95"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Back
            </button>
          </div>

          {/* Hero Meta Information Content */}
          <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 flex flex-wrap items-center gap-2"
              >
                {tour.category && (
                  <span className="rounded-md bg-[#C77D0F] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {tour.category}
                  </span>
                )}
                {tour.difficulty && (
                  <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                    {tour.difficulty}
                  </span>
                )}
                {tour.bestSeason && (
                  <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                    Best Season: {tour.bestSeason}
                  </span>
                )}
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl max-w-4xl"
              >
                {tour.title}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200"
              >
                {tour.location && (
                  <span className="flex items-center gap-2 bg-white/5 rounded-md px-2.5 py-1 backdrop-blur-sm">
                    <span>📍</span> {tour.location}
                  </span>
                )}
                {tour.duration && (
                  <span className="flex items-center gap-2 bg-white/5 rounded-md px-2.5 py-1 backdrop-blur-sm">
                    <span>🕐</span> {tour.duration}
                  </span>
                )}
                {tour.groupSize && (
                  <span className="flex items-center gap-2 bg-white/5 rounded-md px-2.5 py-1 backdrop-blur-sm">
                    <span>👥</span> {tour.groupSize}
                  </span>
                )}
                {tour.rating && (
                  <span className="flex items-center gap-2 bg-white/5 rounded-md px-2.5 py-1 backdrop-blur-sm">
                    <span className="text-[#C77D0F]">★</span>
                    <span className="font-bold text-white">{tour.rating}</span>
                    <span className="text-slate-400 text-xs">/ 5.0</span>
                  </span>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MAIN GRID LAYOUT ── */}
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
          <div className="grid gap-8 lg:grid-cols-3 items-start">

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-2 space-y-6">

              {/* Dynamic Interactive Tab Bar */}
              <div className="flex gap-1 rounded-xl bg-white p-1.5 shadow-sm border border-slate-200 w-fit">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`relative rounded-lg px-6 py-2.5 text-sm font-semibold capitalize transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 rounded-lg bg-[#002f7f] shadow-md shadow-[#002f7f]/10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tab}</span>
                    </button>
                  );
                })}
              </div>

              {/* TAB ANIMATION CONTAINERS */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* OVERVIEW CONTENT */}
                  {activeTab === 'overview' && (
                    <>
                      <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200/60">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">About this tour</h2>
                        <p className="text-base leading-relaxed text-slate-600 font-normal">
                          {tour.description}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200/60">
                        <h2 className="text-xl font-bold text-slate-900 mb-5">Tour highlights</h2>
                        <div className="grid gap-3.5 sm:grid-cols-2">
                          {(tour.highlights && tour.highlights.length > 0
                            ? tour.highlights
                            : defaultHighlights
                          ).map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-[#002f7f]/20 hover:bg-[#002f7f]/5 hover:-translate-y-0.5"
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#002f7f]/10 text-xs text-[#002f7f] font-bold">
                                ✓
                              </span>
                              <span className="text-sm font-semibold text-slate-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Micro Metric Grid */}
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {[
                          { label: 'Duration', value: tour.duration || '5 Days', icon: '🕐' },
                          { label: 'Group size', value: tour.groupSize || 'Max 20', icon: '👥' },
                          { label: 'Best season', value: tour.bestSeason || 'Oct – Mar', icon: '🌤️' },
                          { label: 'Difficulty', value: tour.difficulty || 'Moderate', icon: '🏔️' },
                        ].map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-2xl bg-white p-5 text-center shadow-sm border border-slate-200/60 transition-all duration-300 hover:shadow-md"
                          >
                            <span className="text-2xl">{stat.icon}</span>
                            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</p>
                            <p className="mt-1 text-sm font-bold text-slate-900">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* ITINERARY CONTENT */}
                  {activeTab === 'itinerary' && (
                    <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200/60">
                      <h2 className="text-xl font-bold text-slate-900 mb-6">Day-by-day itinerary</h2>
                      <div className="relative space-y-0 pl-2">
                        <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-slate-100" />

                        {itinerary.map((item, idx) => (
                          <div key={idx} className="relative flex gap-6 pb-8 last:pb-0 group">
                            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#002f7f] text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                              {item.day}
                            </div>
                            <div className="pt-1">
                              <h4 className="text-base font-bold text-slate-900 group-hover:text-[#002f7f] transition-colors duration-200">
                                {item.title}
                              </h4>
                              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* INCLUDED CONTENT */}
                  {activeTab === 'included' && (
                    <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200/60">
                      <h2 className="text-xl font-bold text-slate-900 mb-6">What's included</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {included.map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center gap-4 rounded-xl bg-slate-50 border border-slate-100 p-4 transition-all duration-300 hover:bg-slate-100/70"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#002f7f]/5 text-xl border border-[#002f7f]/10">
                              {item.icon}
                            </span>
                            <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-xl bg-amber-50/60 border border-amber-200/70 p-5">
                        <p className="text-sm font-bold text-amber-900 flex items-center gap-2">
                          <span>⚠️</span> Not included
                        </p>
                        <ul className="mt-3 space-y-1.5 text-sm text-amber-800 font-medium pl-1">
                          <li>• Personal expenses & tips</li>
                          <li>• Lunch (unless specified explicitly)</li>
                          <li>• Optional excursion or activity upgrades</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* STICKY BOOKING PANEL CONTAINER */}
            <div className="h-fit lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/80 border border-slate-200/80">
                
                {/* Header Section */}
                <div className="bg-[#002f7f] p-6 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Price per person</p>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">
                      ₹{tour.price?.toLocaleString?.() ?? tour.price}
                    </span>
                  </div>
                  
                  {tour.rating && (
                    <div className="mt-4 flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1.5 w-fit border border-white/10 backdrop-blur-sm">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${i < Math.round(tour.rating) ? 'text-[#C77D0F]' : 'text-white/20'}`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="ml-1.5 text-xs font-bold text-white">{tour.rating} / 5</span>
                    </div>
                  )}
                </div>

                {/* Technical Specifications Layout */}
                <div className="divide-y divide-slate-100 px-6 font-medium">
                  {[
                    { label: 'Duration', value: tour.duration || '5 Days & 4 Nights' },
                    { label: 'Group size', value: tour.groupSize || 'Max 20 persons' },
                    { label: 'Best season', value: tour.bestSeason || 'Oct – Mar' },
                    { label: 'Difficulty', value: tour.difficulty || 'Moderate' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-3.5 text-sm">
                      <span className="text-slate-400 font-normal">{row.label}</span>
                      <span className="font-semibold text-slate-800">{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Call-to-actions row */}
                <div className="space-y-2.5 px-6 pb-6 pt-4">
                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="w-full rounded-xl bg-[#C77D0F] py-3.5 text-sm font-bold text-white shadow-md shadow-[#C77D0F]/20 transition-all duration-300 hover:bg-[#a05f0b] hover:shadow-lg active:scale-[0.98]"
                  >
                    Book Now
                  </button>
                  <button className="w-full rounded-xl border border-slate-200 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:border-[#002f7f] hover:text-[#002f7f] active:scale-[0.98]">
                    Send Enquiry
                  </button>
                </div>

                {/* Dynamic Helpline Strip */}
                <div className="flex items-center justify-center gap-3 border-t border-slate-100 bg-slate-50/70 px-6 py-4">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Expert Support Assistance</p>
                    <p className="text-sm font-bold text-[#002f7f]">+1 (800) 123-4567</p>
                  </div>
                </div>
              </div>

              {/* Grid trust pillars below side card */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
                {[
                  { icon: '🔒', label: 'Secure Booking' },
                  { icon: '↩️', label: 'Free Cancel' },
                  { icon: '✅', label: 'Verified Tour' },
                ].map((badge) => (
                  <div key={badge.label} className="rounded-xl bg-white border border-slate-200/60 p-3 shadow-sm transition-all duration-300 hover:shadow">
                    <span className="text-lg">{badge.icon}</span>
                    <p className="mt-1 text-[11px] font-bold text-slate-500 tracking-tight leading-tight">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </div>

      <BookingForm
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        tourTitle={tour?.title || 'Tour'}
      />
    </>
  );
}

export default TourDetail;