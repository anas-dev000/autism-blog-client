import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/components.css";

const Communication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/assets/images/communication/image-1.jpg",
    "/assets/images/communication/image-2.jpg",
    "/assets/images/communication/image-3.jpg",
    "/assets/images/communication/image-4.jpg",
    "/assets/images/communication/image-5.jpg",
    "/assets/images/communication/image-6.jpg",
  ];

  const videos = [
    {
      title: "كيف تحسن تركيز طفل التوحد",
      embedUrl: "https://www.youtube.com/embed/4Gf5Zbbxunc",
    },
    {
      title:
        "تدريب الأطفال من ذوي التوحد على (الجلوس - التواصل البصري - التقليد - المطابقة - مهارة اللعب)",
      embedUrl: "https://www.youtube.com/embed/zIA552waea0",
    },
    {
      title: "التواصل مع الأطفال ذوي التوحد: استراتيجيات فعالة لتحسين التفاعل",
      embedUrl: "https://www.youtube.com/embed/c2aJ6chNwmA",
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
      <main className="communication-section">
        <AnimatePresence>
          <motion.h1
            className="section-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            أساليب التواصل
          </motion.h1>
          <motion.p
            className="intro-text"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            التعامل مع الأشخاص الذين يعانون من التوحد يتطلب فهمًا وتقديرًا
            لاحتياجاتهم الفريدة. نقدم هنا مجموعة من النصائح لتحسين التفاعل معهم
            بطريقة فعّالة وداعمة.
          </motion.p>

          <section className="communication-images">
            <motion.div
              className="images-grid grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="communication-image-card card"
                  variants={itemVariants}
                >
                  <motion.img
                    src={image}
                    alt={`صورة تواصل ${index + 1}`}
                    className="communication-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="communication-content">
            <motion.div
              className="communication-text-card card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="section-subtitle">قبل التفاعل</h2>
              <ol className="communication-list">
                <li>
                  تعلم عن التوحد: قبل التفاعل مع شخص يعاني من التوحد، من المهم
                  أن تتعلم عن هذا الاضطراب وتفهم احتياجاته.
                </li>
                <li>
                  تحضير البيئة: تأكد من أن البيئة خالية من المشتتات والصوت
                  العالي الذي قد يزعج الشخص.
                </li>
              </ol>
            </motion.div>

            <motion.div
              className="communication-text-card card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="section-subtitle">أثناء التفاعل</h2>
              <ol className="communication-list">
                <li>التحدث بوضوح: التحدث بوضوح وبطء لضمان فهم الشخص لك.</li>
                <li>
                  استخدام لغة بسيطة: استخدم لغة بسيطة وواضحة لتجنب الارتباك.
                </li>
                <li>
                  الاستماع النشط: استمع جيدًا لما يقوله الشخص وتأكد من فهمك لما
                  يقوله.
                </li>
                <li>
                  تجنب التلامس الجسدي: تجنب التلامس الجسدي إذا لم يكن الشخص
                  مرتاحًا له.
                </li>
                <li>
                  تقديم الخيارات: قدم للشخص خيارات لتحديد ما يريد القيام به.
                </li>
              </ol>
            </motion.div>

            <motion.div
              className="communication-text-card card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="section-subtitle">بعد التفاعل</h2>
              <ol className="communication-list">
                <li>التعليق الإيجابي: قدم تعليقات إيجابية على سلوك الشخص.</li>
                <li>تقديم الدعم: قدم الدعم والتشجيع للشخص.</li>
                <li>
                  التواصل مع العائلة: تواصل مع عائلة الشخص لتقديم الدعم
                  والمساعدة.
                </li>
              </ol>
            </motion.div>

            <motion.div
              className="communication-text-card card"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="section-subtitle">النصائح العامة</h2>
              <ol className="communication-list">
                <li>الاحترام: احترم احتياجات الشخص وحدوده.</li>
                <li>الصدق: كن صادقًا في تعاملك مع الشخص.</li>
                <li>
                  التفهم: تفهم أن الشخص يعاني من اضطراب التوحد وله احتياجات
                  فريدة.
                </li>
                <li>التواصل: تواصل مع الشخص بانتظام لضمان فهمك لاحتياجاته.</li>
                <li>تقديم المساعدة: قدم المساعدة والدعم للشخص عند الحاجة.</li>
              </ol>
            </motion.div>
          </section>

          <section className="communication-videos">
            <motion.h2
              className="videos-title"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              فيديوهات إرشادية لتحسين التواصل مع ذوي التوحد
            </motion.h2>
            <motion.div
              className="videos-grid grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  className="video-card card"
                  variants={itemVariants}
                >
                  <div className="video-container">
                    <motion.iframe
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <motion.h3 className="video-title" variants={itemVariants}>
                    {video.title}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Communication;
