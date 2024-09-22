"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceIcon = ({ icon, isExpanded }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isExpanded) {
      controls.start({
        scale: [1, 1.2, 1],
        rotate: [0, 360, 360],
        transition: { duration: 0.5 },
      });
    }
  }, [isExpanded, controls]);

  return (
    <motion.div
      className="text-6xl mb-4 text-green-600"
      animate={controls}
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.div>
  );
};

const ServiceCard = ({ icon, title, description, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setIsExpanded(!isExpanded)}
        layout
      >
        <ServiceIcon icon={icon} isExpanded={isExpanded} />
        <motion.h3
          className="text-2xl font-semibold mb-2 text-green-700"
          layout
        >
          {title}
        </motion.h3>
        <AnimatePresence>
          {isExpanded && (
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
        <motion.button
          className="mt-4 text-green-600 hover:text-green-800 focus:outline-none"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? "▲" : "▼"}
        </motion.button>
        <motion.div
          className="absolute inset-0 bg-green-100 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isExpanded ? 1 : 0, opacity: isExpanded ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Service = () => {
  const services = [
    {
      icon: "💰",
      title: "Harga Terjangkau",
      description:
        "Kami menawarkan berbagai produk dengan harga yang bersaing untuk memenuhi kebutuhan harian Anda tanpa menguras kantong.",
    },
    {
      icon: "🛍️",
      title: "Pelayanan yang Baik",
      description:
        "Staf kami siap melayani dengan ramah dan cepat, memastikan pengalaman belanja Anda selalu menyenangkan.",
    },
    {
      icon: "⭐",
      title: "Produk Berkualitas",
      description:
        "Semua produk yang kami tawarkan sudah melalui proses seleksi untuk memastikan Anda mendapatkan yang terbaik setiap saat.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 w-full">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-green-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Layanan Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
