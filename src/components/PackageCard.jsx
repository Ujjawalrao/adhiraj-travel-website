import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LuHotel,
  LuUtensilsCrossed,
  LuCamera,
  LuCarTaxiFront,
} from "react-icons/lu";

function PackageCard({ package: pkg, onViewDetails }) {
  const navigate = useNavigate();

  // Guard clause for safe structural rendering
  if (!pkg || !pkg.title) {
    return null;
  }

  const handleClick = () => {
    if (onViewDetails) {
      onViewDetails();
    } else {
      navigate(`/tour/${pkg.id}`, { state: { tour: pkg } });
    }
  };

  return (
   <article className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

  {/* IMAGE */}
  <div className="relative h-56 overflow-hidden">
    <img
      src={pkg.image}
      alt={pkg.title}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    {/* rating */}
    {pkg.rating && (
      <div className="absolute left-4 top-4">
        <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 backdrop-blur">
          ★ {pkg.rating}
        </span>
      </div>
    )}

    {/* title on image */}
    <div className="absolute bottom-4 left-4 right-4">
      <h3 className="line-clamp-2 text-lg font-bold text-white">
        {pkg.title}
      </h3>
    </div>
  </div>

  {/* BODY */}
  <div className="flex h-[280px] flex-col p-5">

    {/* FEATURES */}
    <div className="grid grid-cols-4 gap-2 rounded-2xl bg-slate-50 px-3">

      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
          <LuHotel className="text-lg text-[#002F7F]" />
        </div>
        <span className="mt-1 text-[10px] font-semibold text-slate-600">
          Hotel
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
          <LuUtensilsCrossed className="text-lg text-orange-500" />
        </div>
        <span className="mt-1 text-[10px] font-semibold text-slate-600">
          Meals
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100">
          <LuCamera className="text-lg text-emerald-500" />
        </div>
        <span className="mt-1 text-[10px] font-semibold text-slate-600">
          Tours
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
          <LuCarTaxiFront className="text-lg text-purple-500" />
        </div>
        <span className="mt-1 text-[10px] font-semibold text-slate-600">
          Transfer
        </span>
      </div>

    </div>

    {/* DETAILS */}
    <div className="mt-2 min-h-[70px]">

      {pkg.duration && (
        <div className="mb-1 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-1">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Duration
            </p>
            <p className="font-semibold text-slate-800">
              {pkg.duration}
            </p>
          </div>

          <div className="h-10 w-[1px] bg-slate-200" />

          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400">
              Package
            </p>
            <p className="font-semibold text-slate-800">
              Premium
            </p>
          </div>
        </div>
      )}

      <p className="line-clamp-2 text-sm text-slate-500 px-3 pt-2">
        Explore unforgettable {pkg.title} experiences, comfortable stays,
        guided sightseeing and seamless transfers.
      </p>

    </div>

    {/* FOOTER */}
    <div className="mt-auto flex items-center justify-between border-t border-slate-100 px-2 pt-5">

      <div>
        <p className="text-[10px] uppercase tracking-widest text-slate-400">
          Starting From
        </p>

        <div className="flex items-end gap-1">
          <span className="text-2xl font-black text-[#002F7F]">
            ₹{pkg.price?.toLocaleString()}
          </span>
          <span className="pb-1 text-xs text-slate-500">
            /person
          </span>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="rounded-2xl bg-gradient-to-r from-[#002F7F] to-[#004fd1] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
      >
        Explore →
      </button>

    </div>

  </div>

</article>
  );
}

export default PackageCard;
