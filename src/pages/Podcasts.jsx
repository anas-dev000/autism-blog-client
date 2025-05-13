import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/components.css";

const Podcasts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const podcasts = [
    {
      title: "البودكاست الأول",
      description:
        "التوحد الخفيف هو نوع من اضطراب طيف التوحد يتميز بصعوبات بسيطة في التواصل الاجتماعي والسلوك، ويكون الشخص قادرًا على التعلم والتحدث والتفاعل لكن بشكل مختلف قليلاً عن الآخرين.",
      videoUrl: "https://www.youtube.com/embed/s3Lgh7ZFUe8",
    },
    {
      title: "البودكاست الثاني",
      description:
        "التوحد المتوسط هو مستوى من اضطراب طيف التوحد يُظهر فيه الشخص صعوبات واضحة في التواصل والتفاعل الاجتماعي، مع وجود سلوكيات متكررة واحتياجات لدعم أكبر من التوحد الخفيف.",
      videoUrl: "https://www.youtube.com/embed/5OeBFPuHITk",
    },
    {
      title: "البودكاست الثالث",
      description:
        "التوحد الشديد هو أعلى درجات اضطراب طيف التوحد، ويتميز بصعوبات كبيرة في التواصل والسلوك، مع اعتماد كبير على الدعم والمساعدة في الحياة اليومية.",
      videoUrl: "https://www.youtube.com/embed/fh5_q36ffB8",
    },
  ];

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
        <section className="podcasts-intro">
          <AnimatePresence>
            <motion.h1
              className="section-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              البودكاست
            </motion.h1>
            <motion.p
              className="intro-text"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              نقدم سلسلة من البودكاست التعليمية التي تهدف إلى توعية الأفراد
              وأسرهم حول اضطراب طيف التوحد. كل بودكاست يركز على مستوى مختلف من
              التوحد، مع شرح مبسط وفيديوهات توضيحية لتعزيز الفهم والدعم.
            </motion.p>
          </AnimatePresence>
        </section>

        <section className="podcasts-container">
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {podcasts.map((podcast, index) => (
                <motion.div
                  key={index}
                  className="podcast-card card"
                  variants={itemVariants}
                >
                  <motion.h2 className="podcast-title" variants={itemVariants}>
                    {podcast.title}
                  </motion.h2>
                  <motion.p
                    className="podcast-description"
                    variants={itemVariants}
                  >
                    {podcast.description}
                  </motion.p>
                  <motion.div
                    className="podcast-video"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe
                      src={podcast.videoUrl}
                      title={podcast.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Podcasts;
