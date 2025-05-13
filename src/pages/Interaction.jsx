import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "../styles/global.css";
import "../styles/components.css";

const Interaction = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="page">
      <Navbar />
      <main className="container">
        <motion.section
          className="interaction-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={titleVariants}>
            التفاعل
          </motion.h2>
          <motion.p className="intro-text" variants={itemVariants}>
            مرحبًا بكم في قسم التفاعل! هنا نقدم لعبة تفاعلية تهدف إلى تعزيز
            مهارات التعرف على المشاعر لدى الأطفال.
          </motion.p>
          <motion.div
            className="game-card"
            variants={itemVariants}
            style={{
              width: "100%", // Ensure the card takes full width
              maxWidth: "none", // Remove any max-width restrictions
              padding: "0", // Remove padding to allow iframe to stretch fully
              boxShadow: "none", // Remove shadow for a cleaner look
            }}
          >
            <h3 className="game-title">لعبة التعرف على المشاعر</h3>
            <p className="game-description">
              لعبة التعرف على المشاعر هي لعبة تساعد الطفل في التعرف ومطابقة
              الأشكال، حيث يطابق الطفل كل شكل مع الشكل المناسب له، ويتعرف على
              مشاعر الغضب والحزن والفرح. فهي تساعد الطفل على التفاعل والمطابقة.
            </p>
            <div
              className="game-container"
              style={{
                width: "100%", // Ensure container takes full width
                maxWidth: "none", // Remove any max-width restrictions
              }}
            >
              {/* Embed the game using an iframe */}
              <iframe
                src="/assets/games/interaction-game/index.html"
                title="لعبة التعرف على المشاعر"
                style={{
                  width: "100%", // Full width of the parent container
                  height: "70vh", // Use viewport height for better scaling (adjust as needed)
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  display: "block", // Ensure iframe behaves as a block element
                }}
                allowFullScreen
              ></iframe>
            </div>
            <p
              className="game-note"
              style={{
                fontSize: "0.9rem",
                color: "var(--text-color)",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
            </p>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Interaction;
