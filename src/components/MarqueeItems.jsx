import { motion } from "motion/react";
import {
  Plane,
  Mountain,
  Palmtree,
  MapPin,
  Hotel,
  BadgePercent,
} from "lucide-react";

const marqueeItems = [
  { icon: Plane, text: "Flight Booking" },
  { icon: Hotel, text: "Luxury Hotels" },
  { icon: Mountain, text: "Kashmir Packages" },
  { icon: Palmtree, text: "Goa Holidays" },
  { icon: MapPin, text: "Amarnath Yatra" },
  { icon: BadgePercent, text: "Up To 40% OFF" },
];

export default function TravelMarquee() {
  return (
    <div className="overflow-hidden bg-white py-3">
      <motion.div
        className="flex w-max"
        animate={{ x: [0, -1200] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
          ({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="mx-8 flex items-center gap-3 rounded-full bg-slate-100 px-5 py-2"
            >
              <Icon size={18} />
              <span className="font-medium">{text}</span>
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}