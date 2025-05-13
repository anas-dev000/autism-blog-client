import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/components.css";

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      title: "القصة الأولى",
      description: "",
      videoUrl: "https://www.youtube.com/embed/rO2xFOVkhTM",
    },
    {
      title: "القصة الثانية",
      description: "",
      videoUrl: "https://www.youtube.com/embed/vTNuaztbv_U",
    },
    {
      title: "القصة الثالثة",
      description: "",
      videoUrl: "https://www.youtube.com/embed/CtLnxzBB4bQ",
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
              القصص
            </motion.h1>
            <motion.h2
              className="section-subtitle"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              مرحبًا بكم في قسم القصص!
            </motion.h2>
            <motion.p
              className="intro-text"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              هنا نقدم مجموعة من القصص المصورة التي تساعد الأطفال على التعلم
              والتفاعل من خلال الفيديوهات.
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
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  className="podcast-card card"
                  variants={itemVariants}
                >
                  <motion.h2 className="podcast-title" variants={itemVariants}>
                    {video.title}
                  </motion.h2>
                  <motion.p
                    className="podcast-description"
                    variants={itemVariants}
                  >
                    {video.description}
                  </motion.p>
                  <motion.div
                    className="podcast-video"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
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

export default Stories;
