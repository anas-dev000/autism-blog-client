import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import games from "../data/gamesData";
import "../styles/global.css";
import "../styles/components.css";

const Games = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="page">
      <Navbar />
      <main>
        <section className="games-section">
          <AnimatePresence>
            <motion.h1
              className="section-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              الألعاب التفاعلية للأطفال ذوي التوحد
            </motion.h1>
            <motion.p
              className="intro-text"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              نقدم مجموعة من الألعاب التعليمية والتفاعلية المصممة خصيصًا لدعم
              الأطفال ذوي اضطراب طيف التوحد. تهدف هذه الألعاب إلى تعزيز المهارات
              الحسية، اللغوية، الاجتماعية، والإبداعية بطريقة ممتعة وجذابة.
            </motion.p>
            <motion.div
              className="games-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="games-grid grid">
                {games.map((game, index) => (
                  <motion.div
                    key={index}
                    className="game-card card"
                    variants={itemVariants}
                  >
                    <a
                      href={game.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={game.link ? "" : "disabled-link"}
                    >
                      <motion.img
                        src={game.image}
                        alt={game.title}
                        className="game-image"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </a>
                    <motion.h2 className="game-title" variants={itemVariants}>
                      {game.title}
                    </motion.h2>
                    <motion.p
                      className="game-description"
                      variants={itemVariants}
                    >
                      {game.description}
                    </motion.p>
                    <motion.a
                      href={game.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`game-link ${game.link ? "" : "disabled"}`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, backgroundColor: "#e74c3c" }}
                      transition={{ duration: 0.3 }}
                    >
                      {game.link ? "زيارة الموقع" : "غير متوفر"}
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
