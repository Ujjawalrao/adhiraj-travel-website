import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiUsers,
  FiAward,
  FiHeadphones,
  FiArrowRight,
} from "react-icons/fi";
import TravelMarquee from '../components/MarqueeItems';
import ScrollReveal from '../components/ScrollReveal';
  import Shuffle from '../components/Shuffle';
  import WaveBottomSVG from '../components/WaveBottomSVG';
  import banner from '../assets/rajasthan.webp'
  import goldentempleImg from '../assets/goldentemple.webp'
  import thailandImg from '../assets/thailand.webp'
  import utrakhandImg from '../assets/utrakhand.webp'
  


function About() {

    const navigate = useNavigate();

    const handleExplore = () => {
    navigate("/#package");
  };
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stats = [
    {
      number: "5000+",
      title: "Happy Travelers",
    },
    {
      number: "100+",
      title: "Destinations",
    },
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "98%",
      title: "Customer Satisfaction",
    },
  ];

  const features = [
    {
      icon: <FiUsers />,
      title: "Expert Planning",
      text: "Personalized itineraries crafted for your travel needs.",
    },
    {
      icon: <FiMapPin />,
      title: "Top Destinations",
      text: "Explore the most loved destinations across India.",
    },
    {
      icon: <FiAward />,
      title: "Best Value",
      text: "Premium travel experiences at competitive prices.",
    },
    {
      icon: <FiHeadphones />,
      title: "24/7 Support",
      text: "Dedicated support throughout your journey.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
        Adhiraj grand holidays | About 
        </title>

        <meta
          name="description"
          content="Discover TravelVerse, your trusted travel partner offering unforgettable journeys, personalized experiences, and premium travel services across India."
        />
      </Helmet>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative h-[45vh] lg:h-[55vh] overflow-hidden">
          <img
            src={banner}
            alt="TravelVerse"
            className="h-full w-full object-cover object-top"
          />


          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-center text-white"
            >
              <h1 className="rounded-md bg-white/10 px-5 py-3 text-sm uppercase tracking-[4px] backdrop-blur">
               Explore The World With Us
              </h1>
            </motion.div>
          </div>
          <WaveBottomSVG />
        </section>
<TravelMarquee />

        {/* Story Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >

              <Shuffle
        text={" Explore A Different Way To Travel"}
        tag="h2"
        shuffleDirection="right"
        duration={0.5}
        stagger={0.04}
        triggerOnce={true}
        triggerOnHover={true}
        className="font-bold text-start"
      />
  
                <ScrollReveal
  baseOpacity={0.1}
  enableBlur
  baseRotation={3}
  blurStrength={4}
>
 Adhiraj grand Holidays was founded with one simple vision — to make
                  travel more meaningful, accessible, and memorable for every
                  traveler.
                   We believe travel is more than reaching a destination. It is
                  about discovering cultures, creating memories, and
                  experiencing the beauty of the world in unique ways.
                    Whether you dream of exploring snow-capped mountains, pristine
                  beaches, historical cities, or hidden gems, our team creates
                  journeys tailored to your travel style.
</ScrollReveal>

              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative h-[500px]"
              >
                <motion.img
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  viewport={{ once: true }}
                  src={goldentempleImg}
                  alt=""
                  className="absolute left-0 top-0 h-72 w-64 rounded-xl object-cover shadow-xl"
                />

                <motion.img
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  src={thailandImg}
                  alt=""
                  className="absolute right-0 top-16 h-80 w-72 rounded-xl object-cover shadow-xl"
                />

                <motion.img
                  initial={{
                    opacity: 0,
                    x: -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                  src={utrakhandImg}
                  alt=""
                  className="absolute bottom-0 left-20 h-52 w-60 rounded-xl object-cover shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-[#dceffd] p-8 md:p-12"
            >
              <p className="max-w-4xl text-xl leading-9 text-slate-700 md:text-2xl">
                “Travel is not just about seeing new places. It is about
                understanding different cultures, broadening your perspective,
                and creating unforgettable experiences that stay with you
                forever.”
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-[#002F7F] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 text-center text-white sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <h3 className="text-5xl font-bold">{item.number}</h3>

                  <p className="mt-3 text-blue-100">{item.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-14 text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-[4px] text-[#002F7F]">
                Why Choose Us
              </span>

              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                Travel With Confidence
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {features.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="rounded-xl border border-slate-200 p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#002F7F]/10 text-2xl text-[#002F7F]">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-r from-[#002F7F] to-[#0045b8] p-10 text-center text-white md:p-16"
            >
              <h2 className="text-4xl font-bold md:text-5xl">
                Ready For Your Next Adventure?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-blue-100">
                Discover breathtaking destinations and create unforgettable
                memories with TravelVerse.
              </p>
    <motion.button
      onClick={handleExplore}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-[#002F7F] shadow-lg"
    >
      Explore Packages
      <FiArrowRight />
    </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;