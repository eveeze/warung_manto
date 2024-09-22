"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="mb-4 last:mb-0"
    >
      <button
        className={`flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none rounded-lg transition-all duration-300 ${
          isOpen
            ? "bg-green-600 text-white"
            : "bg-green-100 text-green-800 hover:bg-green-200"
        }`}
        onClick={onClick}
      >
        <span className="font-medium">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown
            className={`w-5 h-5 ${isOpen ? "text-white" : "text-green-600"}`}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-white text-green-800 border border-green-200 rounded-b-lg shadow-inner">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Accordion = () => {
  const [openItems, setOpenItems] = useState([]);

  const faqData = [
    {
      title: "Apakah semua produk yang dijual di Toko Mbah Manto terjangkau?",
      content:
        "Ya, kami selalu berkomitmen untuk menawarkan produk dengan harga yang kompetitif sehingga terjangkau oleh semua pelanggan.",
    },
    {
      title: "Bagaimana kualitas pelayanan di Toko Mbah Manto?",
      content:
        "Kami berfokus pada kepuasan pelanggan. Staf kami dilatih untuk memberikan pelayanan yang ramah dan cepat demi pengalaman berbelanja yang menyenangkan.",
    },
    {
      title: "Apakah produk di Toko Mbah Manto berkualitas?",
      content:
        "Tentu saja! Semua produk kami dipilih dengan teliti untuk memastikan kualitas terbaik bagi pelanggan kami.",
    },
    {
      title: "Bagaimana cara memesan produk melalui WhatsApp?",
      content:
        'Anda dapat memesan produk melalui tombol "Hubungi Kami di WhatsApp" di halaman utama. Setelah itu, Anda akan diarahkan ke aplikasi WhatsApp untuk melakukan pemesanan langsung.',
    },
    {
      title: "Apakah Toko Mbah Manto menyediakan layanan pengiriman?",
      content:
        "Ya, kami menyediakan layanan pengiriman untuk memudahkan pelanggan yang tidak dapat datang langsung ke toko.",
    },
    {
      title: "Bagaimana cara mengetahui produk terbaru yang tersedia di toko?",
      content:
        'Anda bisa melihat katalog produk terbaru melalui halaman "Product Catalog" di website kami atau mengikuti pembaruan melalui WhatsApp dan media sosial kami.',
    },
  ];

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div
      id="faq"
      className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-4xl font-bold text-green-800 mb-8 text-center">
        Pertanyaan yang Sering Ditanyakan.
      </h2>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openItems.includes(index)}
                onClick={() => toggleItem(index)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <motion.img
            src="/images/faq.jpg"
            alt="FAQ Illustration"
            className="w-full max-w-md h-auto rounded-2xl shadow-md hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
