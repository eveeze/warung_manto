"use client";

import React from "react";
import { motion } from "framer-motion";

const MapComponent = () => {
  return (
    <motion.section
      className="bg-gray-50 p-10 rounded-2xl shadow-xl max-w-6xl mx-auto"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.h2
        className="text-4xl font-bold text-green-800 mb-8 text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        Lokasi Toko Spesial
      </motion.h2>

      <motion.div
        className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.7701241667872!2d110.66981575083445!3d-7.566202850000308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6bf494fa9605%3A0xc51786e26590c1de!2sWarung%20Mbah%20Manto!5e0!3m2!1sid!2sid!4v1726978924335!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location of Toko Spesial"
          aria-label="Embedded Google Map showing the location of Toko Spesial"
        ></iframe>
      </motion.div>
    </motion.section>
  );
};

export default MapComponent;
