import React, { useContext, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DataContext } from "../context/DataContext";
import PackageCard from "../components/PackageCard";
import heroBg from "../assets/banner-3.png";
import TravelMarquee from "../components/MarqueeItems";
import WaveBottomSVG from "../components/WaveBottomSVG";

export default function DomesticTours() {
  const { domesticLocations } = useContext(DataContext);
  const [searchParams] = useSearchParams();
  const [showAll, setShowAll] = useState(true);

  const selectedLocationId = searchParams.get("location") || "all";

  const selectedLocation = domesticLocations?.find(
    (loc) => loc.id === selectedLocationId,
  );

  const locationImage = selectedLocation?.image || heroBg;

  const allPackages = useMemo(() => {
    return (domesticLocations || []).flatMap((loc) =>
      (loc.packages || []).map((p) => ({
        ...p,
        locationId: loc.id,
        locationName: loc.name,
        locationImage: loc.image,
      })),
    );
  }, [domesticLocations]);

  const filtered = useMemo(() => {
    if (selectedLocationId === "all") return allPackages;
    return allPackages.filter((p) => p.locationId === selectedLocationId);
  }, [allPackages, selectedLocationId]);

  // Handle auto-resetting showAll toggle if filters change and count drops below threshold
  const displayPackages = showAll ? filtered : filtered.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-[#002F7F]/10 selection:text-[#002F7F]">
      <Helmet>
        <title>Domestic Tours | Adhiraj grand holidays</title>
      </Helmet>

      {/* ── HEADER HERO STRIP ── */}
     <section
  className="relative h-[50vh] min-h-[500px] overflow-hidden lg:h-[75vh]"
  style={{
    backgroundImage: `url(${locationImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

  {/* Decorative Blur */}
  <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
  <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />

  <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
    <div className="max-w-3xl">

      {/* Breadcrumb */}
      <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
        <Link
          to="/"
          className="transition hover:text-white"
        >
          Home
        </Link>

        <span>/</span>

        <span className="text-white">
          Domestic Tours
        </span>
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-4xl"
      >
        {selectedLocation?.name || "Explore Incredible India"}
      </motion.h1>

      {/* Badge */}
      <div className="my-2 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
        <span className="mr-2 h-2 w-2 rounded-full bg-orange-400" />

        <span className="text-xs font-semibold uppercase tracking-widest text-white">
          Premium Domestic Packages
        </span>
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl text-lg leading-8 text-slate-200"
      >
        {selectedLocation?.description ||
          "Explore breathtaking mountains, pristine beaches, spiritual destinations, wildlife adventures and unforgettable journeys across India."}
      </motion.p>

    </div>
  </div>

  <WaveBottomSVG />
</section>
      <TravelMarquee />
      {/* ── MAIN FILTER & PACKAGES SECTION ── */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        {/* Dynamic Pagination Action Trigger */}
        <div className="shrink-0">
          {filtered.length > 4 && (
            <button
              onClick={() => setShowAll((s) => !s)}
              className="w-full sm:w-auto rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all duration-200 hover:border-[#002F7F] hover:text-[#002F7F]"
            >
              {showAll ? "Show Less" : `Show All (${filtered.length})`}
            </button>
          )}
        </div>

        {/* ── INTERACTIVE GRID SPACE ── */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                🔍
              </div>
              <h3 className="text-base font-bold text-slate-900">
                No Packages Found
              </h3>
              <p className="mt-1 text-sm text-slate-500 font-normal">
                We couldn't find any packages matching this category right now.
                Please check back later.
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {displayPackages.map((pkg, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={pkg.id}
                  className="h-full"
                >
                  <PackageCard package={pkg} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTTOM EXTRA SHOW ALL ACCORDION TRIGGER */}
        {!showAll && filtered.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll(true)}
              className="rounded-xl bg-[#002F7F] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#002F7F]/10 transition-all duration-300 hover:bg-[#0045b8] hover:shadow-lg hover:shadow-[#002F7F]/20 active:scale-[0.98]"
            >
              View All {filtered.length} Packages
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
