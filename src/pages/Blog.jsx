import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogText } from "../data/blogText";
import "../styles/global.css";
import "../styles/components.css";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    rtl: true,
    centerMode: true,
    centerPadding: "0px",
  };

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
      <main className="blog-section">
        <AnimatePresence>
          <motion.h1
            className="section-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            المدونة
          </motion.h1>
          <section className="blog-posts">
            {blogText.blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="blog-post card"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h2
                  className="section-subtitle"
                  variants={titleVariants}
                >
                  {post.title}
                </motion.h2>
                <motion.div className="intro-text" variants={itemVariants}>
                  {post.intro}
                </motion.div>
                <motion.div
                  className="features-images"
                  variants={containerVariants}
                >
                  <Slider {...sliderSettings}>
                    {post.images.map((image, imgIndex) => (
                      <motion.div key={imgIndex} variants={itemVariants}>
                        <motion.img
                          src={image}
                          alt={`${post.title} صورة ${imgIndex + 1}`}
                          className="blog-image"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </motion.div>
                <motion.h3 variants={titleVariants}>أهمية التمارين</motion.h3>
                <motion.ul variants={itemVariants}>
                  {post.importance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </motion.ul>
                {post.strategies.length > 0 && (
                  <>
                    <motion.h3 variants={titleVariants}>
                      استراتيجيات فعالة
                    </motion.h3>
                    <motion.ul variants={itemVariants}>
                      {post.strategies.map((strategy, idx) => (
                        <li key={idx}>{strategy}</li>
                      ))}
                    </motion.ul>
                  </>
                )}
                <motion.h3 variants={titleVariants}>أمثلة واقعية</motion.h3>
                {post.examples.map((example, exIndex) => (
                  <motion.div key={exIndex} variants={itemVariants}>
                    <motion.h4 variants={titleVariants}>
                      {example.title}
                    </motion.h4>
                    <motion.ul variants={itemVariants}>
                      {example.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </section>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
