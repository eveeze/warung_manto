"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="lg:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-800 leading-tight mb-6">
              Selamat Datang di
              <br />
              Toko Mbah Manto
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Toko kelontong terpercaya yang menyediakan berbagai kebutuhan
              pokok sehari-hari Anda. Dari bahan makanan segar hingga produk
              rumah tangga, kami hadir untuk memenuhi kebutuhan Anda dengan
              kualitas terbaik dan harga terjangkau.
            </p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://wa.me/+62882003310360"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-700 text-white border-none px-8 py-3 rounded-full text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Kami di WhatsApp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#products"
                className="btn bg-white text-green-600 border-green-600 hover:bg-green-100 px-8 py-3 rounded-full text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
              >
                Lihat Produk Kami
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center justify-items-center "
          >
            <Image
              src="/images/hero.png"
              alt="Ilustrasi Warung Mbah Manto"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
