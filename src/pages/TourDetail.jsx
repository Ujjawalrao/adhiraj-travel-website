import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { DataContext } from "../context/DataContext";
import detailHeroBg from "../assets/banner-1.png";
import TravelMarquee from "../components/MarqueeItems";
import WaveBottomSVG from "../components/WaveBottomSVG";

function TourDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeTab, setActiveTab] = useState("itinerary"); // Options: 'itinerary', 'inclusions', 'packageInfo'

  // Get tour data from location state or fallback lookup by id
  let tour = location.state?.tour;
  const { domesticLocations, internationalLocations } = useContext(DataContext);

  // Fallback lookup when user navigates directly to /tour/:id without state
  if (!tour && id) {
    const allPackages = (domesticLocations || [])
      .concat(internationalLocations || [])
      .flatMap((loc) => (loc.packages || []).map((p) => ({ ...p, locationId: loc.id, locationName: loc.name })));
    tour = allPackages.find((p) => p.id === id) || null;
  }

  // Fallback if no tour data is found
  if (!tour) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center">
        <Helmet>
          <title>Tour Details | Adhiraj grand holidays</title>
        </Helmet>
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl font-semibold text-[#002F7F]">
            Tour Not Found
          </h1>
          <p className="mt-4 text-slate-600">
            The tour package you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/tours")}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#002F7F] px-6 py-3 font-semibold text-white transition hover:bg-[#00235e]"
          >
            Back to Tours
          </button>
        </div>
      </div>
    );
  }

  // Calculate percentage savings safely
  const discountPercentage = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 25;

  return (
    <>
      <Helmet>
        <title>{tour.title} | TravelVerse - Tour Details</title>
        <meta name="description" content={tour.description} />
      </Helmet>

      <div className="bg-[#fcfdfe] min-h-screen text-slate-800 font-sans pb-16">
        {/* Banner Section */}
        <section
          className="relative h-[55vh] min-h-[500px] overflow-hidden lg:h-[75vh]"
          style={{
            backgroundImage: `url(${tour.image || detailHeroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />

          {/* Decorative Blur */}
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
            {/* LEFT CONTENT */}
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
                <button
                  onClick={() => navigate("/tours")}
                  className="transition hover:text-white"
                >
                  Tours
                </button>

                <span>/</span>

                <span className="text-white">{tour.title}</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-4xl"
              >
                {tour.title}
              </motion.h1>

              <div className="my-4 flex flex-wrap gap-2">
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white">
                    ⭐ {tour.rating || "4.8"}
                  </span>
                </div>

                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white">
                    {discountPercentage}% OFF 
                  </span>
                </div>

                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white">
                    FEATURED TOUR
                  </span>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl text-lg leading-8 text-slate-200"
              >
                {tour.cities?.join(" ➔ ") || "Delhi ➔ Manali ➔ Delhi"}
              </motion.p>
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-6 top-6 z-20 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ← Back
          </button>

          <WaveBottomSVG />
        </section>

        <TravelMarquee />
        {/* Content & Booking Interface */}
        <section className="mx-auto max-w-6xl px-6 mt-12">
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {/* Left Main Viewport Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Core Attributes Highlighters Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    DURATION
                  </span>
                  <span className="text-sm font-semibold mt-1 text-slate-800">
                    {tour.duration || "4 Nights / 5 Days"}
                  </span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    CITIES
                  </span>
                  <span className="text-sm font-semibold mt-1 text-slate-800">
                    {tour.cities?.length || 3} Stops
                  </span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    GROUP
                  </span>
                  <span className="text-sm font-semibold mt-1 text-slate-800">
                    Private / Group
                  </span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    STAY
                  </span>
                  <span className="text-sm font-semibold mt-1 text-slate-800">
                    Hand-picked
                  </span>
                </div>
              </div>

              {/* Dynamic Content Tab Selector Row */}
              <div className="flex bg-slate-100/80 p-1.5 rounded-xl w-fit gap-1">
                <button
                  onClick={() => setActiveTab("itinerary")}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "itinerary"
                      ? "bg-[#002F7F] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-200/60"
                  }`}
                >
                  Tour Itinerary
                </button>
                <button
                  onClick={() => setActiveTab("inclusions")}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "inclusions"
                      ? "bg-[#002F7F] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-200/60"
                  }`}
                >
                  Inclusions
                </button>
                <button
                  onClick={() => setActiveTab("packageInfo")}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === "packageInfo"
                      ? "bg-[#002F7F] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-200/60"
                  }`}
                >
                  Package Info
                </button>
              </div>

              {/* Dynamic Rendered Canvas Card based on Tab Selection */}
              <div className="bg-white rounded-[2rem] border border-slate-100 px-2 py-6   lg:p-8 shadow-sm">
                {activeTab === "packageInfo" && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                      Package Information
                    </h2>
                    <p className="text-sm text-slate-400 mb-8">
                      Everything you need to know at a glance.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          📅
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            DURATION
                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            {tour.duration || "4 Nights / 5 Days"}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          📍
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            CITIES COVERED

                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            {tour.cities?.join(", ")}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          🏨
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            ACCOMMODATION
                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            Hand-picked hotels (3 / 4 star)
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          🍴
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            MEALS
                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            As per inclusions
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          🚖
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            TRANSPORT
                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            Private cab / Volvo / Flight
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          👥
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            GROUP SIZE
                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            {tour.groupSize || "Private or group (2-30 pax)"}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          🛡️
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            BEST TIME
                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            {tour.bestSeason ||
                              "All seasons (check with planner)"}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-100/50">
                        <div className="text-xl text-[#002F7F] font-semibold">
                          ⚙️
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            CUSTOMISABLE
                          </p>
                          <p className="text-sm font-semibold text-slate-800 mt-0.5">
                            Yes, fully personalised
                          </p>
                        </div>
                      </div>
                    </div>

                    {tour.packageInfo && (
                      <p className="mt-8 text-sm leading-relaxed text-slate-600 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        {tour.packageInfo}
                      </p>
                    )}
                  </div>
                )}

                {activeTab === "itinerary" && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                      Detailed Itinerary
                    </h2>
                    <p className="text-sm text-slate-400 mb-8">
                      Day-wise structural details of your trip plan.
                    </p>

                    <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-5 before:w-0.5 before:bg-slate-100">
                      {tour.itinerary?.map((dayPlan, idx) => (
                        <div key={idx} className="flex lg:gap-6 relative group">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#002F7F] text-white text-xs font-bold shadow-sm z-10">
                            D{dayPlan.day}
                          </div>
                          <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 w-full transition-all group-hover:bg-slate-50">
                            <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                              <h3 className="font-semibold text-slate-900 text-base">
                                {dayPlan.title}
                              </h3>
                              <span className="text-[11px] font-bold text-[#002F7F] px-2.5 py-0.5 rounded-full bg-[#002F7F]/10">
                                🍴 Meals: {dayPlan.meals}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {dayPlan.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "inclusions" && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-1">
                      Inclusions & Privileges
                    </h2>
                    <p className="text-sm text-slate-400 mb-8">
                      Services and amenities bundled inside this package.
                    </p>

                    <div className="grid gap-3">
                      {tour.inclusions?.map((inclusion, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 rounded-sm bg-slate-50/70 border border-slate-100 px-4 text-slate-700"
                        >
                          <span className="text-green-600 text-base font-bold">
                            ✓
                          </span>
                          <span className="text-sm font-medium">
                            {inclusion}
                          </span>
                        </div>
                      ))}
                    </div>

                    {tour.cancellationPolicy && (
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                          Cancellation Terms
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-500 list-disc list-inside">
                          {tour.cancellationPolicy.map((policy, pIdx) => (
                            <li key={pIdx}>{policy}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Booking Side Card Column */}
            <div className="space-y-4 lg:sticky lg:top-26">
              <div className="rounded-[1rem] bg-[#002F7F] border border-slate-100 p-8 shadow-xl shadow-slate-200/50">
                <div className="space-y-6">
                  {/* Price Block Layout */}
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-white uppercase">
                      STARTING FROM
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl font-bold text-white">
                        ₹{tour.price.toLocaleString("en-IN")}
                      </span>
                      {tour.originalPrice && (
                        <span className="text-slate-400 text-sm line-through">
                          ₹{tour.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      per person on twin sharing basis
                    </p>
                  </div>

                  {/* Micro Meta Grid */}
                  <div className="grid grid-cols-2 gap-2 border-t border-b border-slate-100 py-4 text-center">
                    <div className="border-r border-slate-100">
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        DURATION
                      </p>
                      <p className="text-xs font-semibold text-white mt-1">
                        {tour.duration || "4 Nights / 5 Days"}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        RATING
                      </p>
                      <p className="text-xs font-semibold text-white mt-1 flex items-center justify-center gap-1">
                        ⭐ {tour.rating || "4.6"}
                      </p>
                    </div>
                  </div>

                  {/* Booking Trigger CTA Actions */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowBookingModal(true)}
                      className="w-full cursor-pointer rounded-2xl bg-[#ffffff7b] text-white py-3.5 px-6 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-black-200/50 hover:bg-[#fafafa53] flex items-center justify-center gap-2"
                    >
                      Book Now ➔
                    </button>

                    <button
                      onClick={() =>
                        window.open(
                          `https://wa.me/919717324311?text=Hi, I am interested in ${tour.title}`,
                          "_blank",
                        )
                      }
                      className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white text-slate-700 py-3.5 px-6 font-semibold text-sm transition hover:bg-slate-50 flex items-center justify-center gap-2"
                    >
                      💬 Chat on WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Security Metrics Trust Elements */}
              <div className="bg-white/50 rounded-2xl border border-slate-100 p-4 space-y-2 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2.5 text-slate-600">
                  <span className="text-[#71bc42]">✔</span> 100% Safe and Secure
                  Booking
                </div>
                <div className="flex items-center gap-2.5 text-slate-600">
                  <span className="text-[#71bc42]">✔</span> Verified Hotel
                  Partners
                </div>
                <div className="flex items-center gap-2.5 text-slate-600">
                  <span className="text-[#71bc42]">✔</span> Best Price Guarantee
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Embedded Actionable Modal Element */}
      <BookingForm
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        tourTitle={tour?.title || "Tour"}
      />
    </>
  );
}

export default TourDetail;
