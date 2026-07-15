import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import PackageCard from '../components/PackageCard';
import { DataContext } from '../context/DataContext';
import { motion, AnimatePresence } from 'motion/react';
import { HiMapPin } from "react-icons/hi2";
import TravelMarquee from '../components/MarqueeItems';
import { FaQuoteLeft, FaGlobeAsia,
  FaUsers,
  FaSuitcaseRolling,
  FaStar, } from "react-icons/fa";
  import { FaPlus, FaMinus } from "react-icons/fa";
  import Shuffle from '../components/Shuffle';
  import WaveBottomSVG from '../components/WaveBottomSVG';
  import CountUp from '../components/CountUp'
// imgs
  import himachalImg from '../assets/himachal.webp';
  import singaporeImg from '../assets/singapore.webp';



function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { heroSlides, featuredTours, domesticLocations, internationalLocations } = useContext(DataContext);
  const navigate = useNavigate();
   const [visibleCount, setVisibleCount] = useState(8);
   const [active, setActive] = useState(0);

   const stats = [
  {
    icon: FaGlobeAsia,
    number: "150+",
    label: "Destinations",
  },
  {
    icon: FaUsers,
    number: "10K+",
    label: "Happy Travelers",
  },
  {
    icon: FaSuitcaseRolling,
    number: "500+",
    label: "Tour Packages",
  },
  {
    icon: FaStar,
    number: "4.9",
    label: "Average Rating",
  },
];
const faqs = [
  {
    question: "How do I book a tour package?",
    answer:
      "Simply browse our tour packages, choose your preferred destination, and contact our team to confirm your booking.",
  },
  {
    question: "Can I customize my travel itinerary?",
    answer:
      "Yes, we offer fully customized travel packages based on your budget, interests, and travel preferences.",
  },
  {
    question: "Do you provide hotel and flight bookings?",
    answer:
      "Absolutely. We can arrange hotels, flights, transportation, sightseeing, and complete travel assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, UPI, credit cards, debit cards, and other secure payment methods.",
  },
  {
    question: "Is customer support available during the trip?",
    answer:
      "Yes, our travel experts are available 24/7 to assist you throughout your journey.",
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
  };

  return (
    <>
      <Helmet>
        <title>Adhiraj grand holidays</title>
        <meta name="description" content="Explore amazing travel destinations with TravelVerse. Book tours, discover adventures, and create unforgettable memories." />
        <meta name="keywords" content="travel, tours, vacation, adventure, destinations" />
        <meta property="og:description" content="Discover amazing travel destinations and book your next adventure" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ── HERO SLIDER ── */}
<section className="relative h-[40vh] lg:h-[75vh] w-full overflow-hidden bg-slate-950 text-white">
    {/* ── CINEMATIC BACKGROUND IMAGE CAROUSEL ── */}
    <AnimatePresence mode="popLayout">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
      />
    </AnimatePresence>

    {/* ── FLOATING / TEXT CONTENT ── */}
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
            }}
          >

            {/* Heading - Rises elegantly from a clipping mask */}
            {/* <div className="overflow-hidden py-2">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                {heroSlides[currentSlide].heading}
              </motion.h1>
            </div> */}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>

    {/* ── MODERN MINIMALIST SLIDER DOTS ── */}
    <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
      {heroSlides.map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            index === currentSlide ? "w-8 bg-white" : "w-1.5 bg-white/40"
          }`}
        />
      ))}
    </div>
    {/* ── WAVE DIVIDER ── */}
      <WaveBottomSVG />
  </section>
<TravelMarquee />
           
{/* ── POPULAR DOMESTIC DESTINATIONS ── */}
<section id="package" className="bg-slate-50 py-10">
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <div className="mb-14 text-center">

      <Shuffle
        text={"Popular Domestic Destinations"}
        tag="h1"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold"
      />

      <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-4 max-w-2xl text-slate-600">
        Discover India's most loved travel destinations with carefully
        crafted tour packages and unforgettable travel experiences.
      </motion.p>
    </div>

    {/* Destination Cards */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {domesticLocations?.slice(0, visibleCount).map((location, index) => (
  
        <motion.div
          key={location.id}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
        >
          <Link
            to={`/domestic-tours?location=${location.id}`}
            className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002F7F] via-[#002F7F]/30 to-transparent" />

              {/* Badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-[#002F7F] shadow">
                  Featured Destination
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-2xl font-bold text-white">
                  {location.name}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  Explore Amazing Packages
                </p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5">

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-[#002F7F]/10 px-3 py-1 text-xs font-semibold text-[#002F7F]">
                  Domestic Tour
                </span>

                <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Best Seller
                </span>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Discover Packages
                    </p>

                    <h4 className="font-semibold text-slate-800">
                      View Details
                    </h4>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#002F7F] text-lg font-bold text-white transition-all duration-300 group-hover:bg-[#0045b8]">
                    →
                  </div>

                </div>
              </div>

            </div>

          </Link>
        </motion.div>
    
      ))}

    </div>

    {/* View More */}
    {visibleCount < domesticLocations?.length && (
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setVisibleCount((prev) => prev + 8)}
          className="rounded-lg bg-[#002F7F] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0045b8]"
        >
          View More Destinations
        </button>
      </div>
    )}

    {/* Show Less */}
    {visibleCount >= domesticLocations?.length &&
      domesticLocations?.length > 8 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisibleCount(8)}
            className="rounded-lg border border-[#002F7F] bg-white px-8 py-3 font-semibold text-[#002F7F] transition-all duration-300 hover:bg-[#002F7F] hover:text-white"
          >
            Show Less
          </button>
        </div>
      )}
  </div>
</section>

{/* ── POPULAR INTERNATIONAL DESTINATIONS ── */}
<section className="bg-slate-50 py-10">
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <Shuffle
        text={"Popular International Destinations"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold"
      />

      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        Explore top international tour packages selected for unforgettable global travel experiences.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {internationalLocations?.slice(0, 4).map((location, index) => (
        <motion.div
          key={location.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
        >
          <div
            onClick={() => {
              if ((location.packages || []).length === 1) {
                const pkg = location.packages[0];
                navigate(`/tour/${pkg.id}`, { state: { tour: { ...pkg, locationId: location.id, locationName: location.name } } });
              } else {
                navigate(`/international-tours?location=${location.id}`);
              }
            }}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if ((location.packages || []).length === 1) {
                  const pkg = location.packages[0];
                  navigate(`/tour/${pkg.id}`, { state: { tour: { ...pkg, locationId: location.id, locationName: location.name } } });
                } else {
                  navigate(`/international-tours?location=${location.id}`);
                }
              }
            }}
            className="group block cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={location.image}
                alt={location.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002F7F] via-[#002F7F]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-2xl font-bold text-white">
                  {location.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  Discover exclusive tours
                </p>
              </div>
            </div>
            <div className="p-5">
              <span className="rounded-md bg-[#002F7F]/10 px-3 py-1 text-xs font-semibold text-[#002F7F]">
                International Tour
              </span>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">{location.packages?.length || 1} Packages</p>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {location.name.split(' ')[0]}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <Link
        to="/international-tours"
        className="inline-flex items-center gap-2 rounded-lg bg-[#002F7F] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#0045b8]"
      >
        View All International Tours
        <span>→</span>
      </Link>
    </div>
  </div>
</section>

{/* ── FEATURED TOURS ── */}
<section className="bg-gradient-to-b from-slate-50 to-white py-10">
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
  
  <Shuffle
        text={"Featured Tours"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold"
      />


      <p className="mx-auto mt-4 max-w-2xl text-slate-600">
        Discover our most popular travel experiences carefully crafted
        for families, couples, groups, and adventure seekers.
      </p>
    </motion.div>

    {/* Cards Grid */}
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {featuredTours.map((tour, index) => (
        <motion.div
          key={tour.id}
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
        >
          <Card {...tour} />
        </motion.div>
      ))}
    </div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="mt-14 text-center"
    >
      <Link
        to="/domestic-tours"
        className="inline-flex items-center gap-2 rounded-lg bg-[#002F7F] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#0045b8]"
      >
        View All Tours
        <span>→</span>
      </Link>
    </motion.div>

  </div>
</section>

      {/* ── TOUR EXPERIENCE ── */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <motion.div 
              initial={{
                opacity: 0,
                x: -150,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            className="overflow-hidden rounded-[1rem]">
           <img
                src="https://i.pinimg.com/1200x/1a/4f/b3/1a4fb3695d6864effd380a65f9d4ce6f.jpg"
                alt="Tour Experience"
                className="h-90 w-full object-cover transition duration-700 hover:scale-105"
              />
            </motion.div>
            <div className="space-y-6">
              <div>

           <Shuffle
        text={"Unforgettable Tour Experiences"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold"
      />
              </div>
              <motion.p 
                initial={{
                  opacity:0,
                  y:50
                }}
                transition={{
                  duration:.4,
                  delay:.3
                }}
                  whileInView={{

                    opacity:1,
                    y:0
                  }}
                className="text-lg leading-relaxed text-slate-700">
                We believe every journey tells a story. Our carefully curated tour packages combine
                adventure, culture, and relaxation to create memories that last a lifetime.
              </motion.p>
              <ul className="space-y-3">
                {[
                  'Personalized itineraries tailored to your preferences',
                  'Expert local guides with deep destination knowledge',
                  'Comfortable accommodations and premium services',
                  'Flexible booking and free cancellation up to 30 days',
                ].map((item, idx) => (
                  <motion.li 
                     initial={{
                opacity: 0,
                x: -150,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
                    key={idx} className="flex items-center gap-3 text-slate-700">
                    <span className="text-[#002f7f] font-bold">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

           {/* ── WHY CHOOSE US ── */}
<section className="relative overflow-hidden bg-gradient-to-br from-[#002f7f] via-[#003d9f] to-[#002f7f] py-16">
  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
      className="mb-12 text-center"
    >
      
        <Shuffle
        text={"Trusted By Thousands Of Travelers"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold text-white"
      />


      <p className="mx-auto mt-4 max-w-2xl text-white/70">
        We create unforgettable journeys across India with carefully
        curated experiences, expert planning, and exceptional support.
      </p>
    </motion.div>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl text-white">
              <Icon />
            </div>

            <h3 className="text-4xl font-bold text-white">
              <CountUp
  from={0}
  to={item.number}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
  delay={0}
/>
            </h3>

            <p className="mt-2 text-white/70">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

     {/* ── DISCOVER INDIA ── */}
<section className="overflow-hidden bg-slate-50 py-10">
  <div className="mx-auto max-w-6xl px-6">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6"
      >
        <div>


                  <Shuffle
        text={"Discover India Like Never Before"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold"
      />

        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg leading-relaxed text-slate-700"
        >
          India is a land of diversity, culture, and breathtaking
          landscapes. From the majestic Himalayas to the serene backwaters
          of Kerala, each destination offers unique experiences and
          unforgettable adventures.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg leading-relaxed text-slate-600"
        >
          Whether you're interested in exploring ancient temples, enjoying
          pristine beaches, trekking through mountain trails, or
          experiencing vibrant local culture, we have the perfect tour
          package for you.
        </motion.p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="overflow-hidden rounded-[1rem] shadow-2xl"
      >
        <motion.img
          src={himachalImg}
          alt="India Destinations"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="h-90 w-full object-cover"
        />
      </motion.div>

    </div>
  </div>
</section>

      {/* ── TRAVEL CTA ── */}
<section className="bg-slate-50 py-10 overflow-hidden">
  <div className="mx-auto max-w-6xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#002f7f] via-[#003d9f] to-[#002f7f] px-8 py-16 text-center shadow-2xl"
    >
      {/* Animated Background Circles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/5"
      />


      {/* Title */}
      <Shuffle
        text={"Ready For Your Next Adventure?"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold text-white"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75"
      >
        Discover handpicked tour packages across Kashmir, Himachal,
        Kerala, Rajasthan, Goa, Andaman, Ladakh, Uttarakhand and more.
        Let us help you create unforgettable travel experiences at the
        best prices.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#package"
          className="rounded-full bg-black/50 hover:bg-black/30 px-8 py-3 text-sm font-semibold text-white shadow-lg transition"
        >
          Explore Packages
        </motion.a>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Plan Your Trip
          </Link>
        </motion.div>
      </motion.div>

      {/* Features */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {[
          "Best Price Guarantee",
          "Customized Itineraries",
          "24/7 Travel Support",
          "Trusted Travel Experts",
        ].map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6 + index * 0.1,
              duration: 0.4,
            }}
            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* ── FAQ (NEW) ── */}
<section className="bg-slate-50 py-10 overflow-hidden">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left — Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <img
          src={singaporeImg}
          alt="Travel FAQ"
          className="h-[520px] w-full rounded-[2rem] object-cover"
        />

        {/* bottom-left stat card */}
        <div className="absolute bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-lg border border-slate-100">
          <p className="text-2xl font-semibold text-[#002f7f]">10,000+</p>
          <p className="mt-0.5 text-sm text-slate-500">Happy travelers</p>
        </div>

        {/* top-right badge */}
        <div className="absolute top-5 right-5 rounded-full bg-[#002f7f] px-4 py-1.5 text-xs font-semibold text-white">
          Est. 2015
        </div>
      </motion.div>

      {/* Right — FAQ */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >

              <Shuffle
        text={" Frequently asked questions"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold text-start"
      />

        <p className="mt-3 mb-8 text-slate-500 leading-relaxed">
          Find answers to the most common questions about our packages, bookings, and services.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                active === index
                  ? 'border-[#002f7f]/25'
                  : 'border-slate-200'
              }`}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-semibold text-slate-900">
                  {faq.question}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    active === index
                      ? 'rotate-45 border-[#002f7f] bg-[#002f7f] text-white'
                      : 'border-slate-300 text-[#002f7f]'
                  }`}
                >
                  <FaPlus className="h-3 w-3" />
                </span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: active === index ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
</section>

    </>
  );
}

export default Home;