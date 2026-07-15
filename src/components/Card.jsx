import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMapPin } from "react-icons/hi2";
import { FiArrowRight, FiClock } from "react-icons/fi";

function Card({
id,
image,
title,
description,
duration,
price,
rating,
location,
category,
}) {
const navigate = useNavigate();

const handleViewPackage = () => {
navigate(`/tour/${id}`, {
state: {
tour: {
id,
image,
title,
description,
price,
rating,
location,
duration,
category,
},
},
});
};

return (
<motion.article
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: false, amount: 0.2 }}
transition={{ duration: 0.5 }}
className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-[360px]"
>
{/* Image */} <div className="relative overflow-hidden"> <img
       src={image}
       alt={title}
       loading="lazy"
       className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
     />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#002F7F] via-[#002F7F]/20 to-transparent" />

    {/* Category */}
    {category && (
      <div className="absolute left-3 top-3">
        <span className="rounded-md bg-[#002F7F] px-2.5 py-1 text-[11px] font-semibold text-white">
          {category}
        </span>
      </div>
    )}

    {/* Rating */}
    {rating && (
      <div className="absolute right-3 top-3">
        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-slate-800 shadow">
          ⭐ {rating}
        </span>
      </div>
    )}

    {/* Title */}
    <div className="absolute bottom-0 w-full p-3">
      <h3 className="line-clamp-2 text-lg font-semibold text-white">
        {title}
      </h3>
    </div>
  </div>

  {/* Content */}
  <div className="p-3">

  <span className="flex justify-between">
    {location && (
      <div className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
        <HiMapPin className="text-[#002F7F]" />
        <span>{location}</span>
      </div>
    )}
    {duration && (
      <div className="mb-2 flex items-center gap-1.5 text-xs text-slate-500">
        <FiClock className="text-[#002F7F]" />
        <span>{duration}</span>
      </div>
    )}
</span>

    <p className="line-clamp-2 text-xs leading-5 text-slate-600">
      {description}
    </p>

    {/* Price */}
    {price && (
      <div className="mt-3 border-t border-slate-100 ">
        <span className="text-xs text-slate-500">
          Starting From
        </span>

        <h4 className="text-lg font-bold text-[#002F7F]">
          ₹{price}
        </h4>
      </div>
    )}

    {/* Button */}
    <button
      onClick={handleViewPackage}
      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#002F7F] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#0045b8]"
    >
      View Tour
      <FiArrowRight size={16} />
    </button>

  </div>
</motion.article>

);
}

export default Card;
