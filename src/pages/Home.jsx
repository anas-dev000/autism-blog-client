import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { textData } from "../data/textData";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/components.css";

const ageImages = [
  "/assets/images/age/age-0.jpg",
  "/assets/images/age/age-1.jpg",
  "/assets/images/age/age-2.jpg",
  "/assets/images/age/age-3.jpg",
  "/assets/images/age/age-4.jpg",
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const adjustCardHeights = () => {
      const cards = document.querySelectorAll(".age-card");
      if (cards.length === 0) return;
      cards.forEach((card) => (card.style.height = "auto"));
      let maxHeight = Math.max(
        ...Array.from(cards).map((card) => card.offsetHeight)
      );
      cards.forEach((card) => (card.style.height = `${maxHeight}px`));
    };
    adjustCardHeights();
    window.addEventListener("resize", adjustCardHeights);
    return () => window.removeEventListener("resize", adjustCardHeights);
  }, []);

  const settings = {
    dots: true,
    rtl: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  const detailedCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div className="page">
      <Navbar />
      <AnimatePresence>
        <header className="home-header">
          <motion.div
            className="logos-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="logos">
            </div>
          </motion.div>
          <motion.h1
            className="site-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {textData.siteName}
          </motion.h1>
        </header>

        <main className="container">
          <motion.div
            className="intro-card card"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="section-title" variants={titleVariants}>
              تعريف مبدع
            </motion.h2>
            <motion.p className="intro-text" variants={itemVariants}>
              {textData.homeIntro}
            </motion.p>
          </motion.div>

          <section className="age-groups">
            <motion.h2
              className="section-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              أعمار التوحد
            </motion.h2>
            <motion.p
              className="intro-text"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {textData.ageGroupsIntro}
            </motion.p>
            <Slider className="age-carousel" {...settings}>
              {textData.ageGroups.map((group, index) => (
                <motion.div
                  key={index}
                  className="age-card card"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                >
                  <motion.img
                    src={ageImages[index]}
                    alt={group.title}
                    className="age-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h3 variants={itemVariants}>{group.title}</motion.h3>
                  <motion.ul className="age-card-list" variants={itemVariants}>
                    {group.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </Slider>
            <motion.p
              className="outro-text"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {textData.ageGroupsOutro}
            </motion.p>
          </section>

          <section className="detailed-age-groups">
            <motion.h2
              className="section-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              تفاصيل مراحل التوحد
            </motion.h2>
            <motion.div
              className="detailed-age-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {textData.detailedAgeGroups.map((group, index) => (
                <motion.div
                  key={index}
                  className="detailed-age-card card"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={detailedCardVariants}
                >
                  <motion.h3
                    className="detailed-age-title"
                    variants={itemVariants}
                  >
                    {group.title}
                  </motion.h3>
                  <motion.ul
                    className="detailed-age-list"
                    variants={itemVariants}
                  >
                    {group.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="services-section">
            <motion.h2
              className="section-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              خدماتنا
            </motion.h2>
            <motion.div
              className="services-grid grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { to: "/communication", text: "أساليب التواصل" },
                { to: "/sessions", text: "جلساتنا" },
                { to: "/podcasts", text: "البودكاست" },
                { to: "/games", text: "الألعاب" },
                { to: "/interaction", text: "التفاعل" },
                { to: "/stories", text: "القصص" },
              ].map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    to={service.to}
                    className="service-button"
                    whileHover={{ scale: 1.05, backgroundColor: "#e74c3c" }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Home;
