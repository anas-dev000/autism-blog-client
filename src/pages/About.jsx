import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/components.css";

const About = () => {
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

  const teamMembers = [
    {
      name: "اسم الشخص الاول",
      avatar: "/assets/images/avatars/avatar.jpg",
    },
    { name: "اسم الشخص الثاني", avatar: "/assets/images/avatars/avatar.jpg" },
    { name: "اسم الشخص الثالث", avatar: "/assets/images/avatars/avatar.jpg" },
  ];

  return (
    <div className="page">
      <Navbar />
      <main className="about-section">
        <AnimatePresence>
          <motion.div
            className="about-card"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="section-subtitle" variants={titleVariants}>
              من نحن
            </motion.h2>
            <motion.p className="intro-text" variants={itemVariants}>
              نحن منصة تعليمية وتفاعلية تهدف إلى دعم الأطفال ذوي اضطراب طيف
              التوحد وأسرهم من خلال توفير محتوى علمي موثوق، أدوات تعليمية
              مبتكرة، وبيئة داعمة تعزز الاندماج والتفاعل.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="section-subtitle" variants={titleVariants}>
              الأهداف
            </motion.h2>
            <motion.ol className="about-list" variants={itemVariants}>
              <li>
                توفير معلومات مثبتة بالأدلة والبراهين العلمية ومحتوى تعليمي عالي
                الجودة للأسر.
              </li>
              <li>تقديم أدوات تعليمية وسلوكية مناسبة.</li>
              <li>بناء مجتمع داعم للأهالي والمختصين.</li>
              <li>مواكبة التحول والتعلم الرقمي بجميع الأشكال بطريقة مبتكرة.</li>
              <li>تقديم الإفادة لأولياء الأمور في التعامل مع أطفال التوحد.</li>
              <li>تقديم النفع للأولاد من ذوي اضطراب التوحد.</li>
              <li>تفاعل الأولاد مع الألعاب والأدوات التعليمية.</li>
            </motion.ol>
          </motion.div>

          <motion.div
            className="about-card"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="section-subtitle" variants={titleVariants}>
              رسالة المشروع
            </motion.h2>
            <motion.p className="intro-text" variants={itemVariants}>
              نسعى من خلال هذا المشروع إلى تمكين الأهل، المعلمين، والمجتمع من
              فهم ودعم الأفراد المصابين باضطراب طيف التوحد، من خلال التوعية،
              التدريب، وخلق بيئة آمنة ومحفزة تضمن لهم الاندماج، التقدير، وفرصًا
              متكافئة للحياة والتعلم. نؤمن أن الاختلاف ليس عيبًا بل تميزًا، وأن
              لكل طفل قدراته الخاصة التي تستحق أن تُكتشف وتُحترم. رسالتنا أن
              نكون الجسر بين عالم الطفل التوحدي والعالم الخارجي، لنفتح له أبواب
              الفهم، التواصل، والحب.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-card"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="section-subtitle" variants={titleVariants}>
              نص تعريفي عن المشروع
            </motion.h2>
            <motion.p className="intro-text" variants={itemVariants}>
              يتكون هذا المشروع من ثماني صفحات، لكل صفحة عناصرها الخاصة:
            </motion.p>
            <motion.ul className="about-list" variants={itemVariants}>
              <li>
                <strong>الصفحة الرئيسية</strong>: تحتوي على محتويات المشروع
                والمنصة الأساسية.
              </li>
              <li>
                <strong>من نحن</strong>: تعرّف بالفريق الخاص بالمشروع.
              </li>
              <li>
                <strong>المدونة</strong>: تحتوي على طرق التعامل مع طيف التوحد في
                التمارين اليومية والحياتية وأساليب النفع.
              </li>
              <li>
                <strong>البودكاست</strong>: تتحدث عن مستويات التوحد، تحاكيها،
                وتعرف بكل مستوى وطريقة التعامل معه.
              </li>
              <li>
                <strong>الأدوات التعليمية</strong>: تحتوي على أدوات تعليمية
                وألعاب نفعية للفئة.
              </li>
              <li>
                <strong>القصص الرقمية</strong>: خاصة بالقصص الرقمية المنتجة
                بالذكاء الاصطناعي عن طيف التوحد.
              </li>
              <li>
                <strong>أساليب التفاعل</strong>: تحتوي على أساليب التعامل
                والتفاعل مع الأطفال.
              </li>
              <li>
                <strong>الألعاب التفاعلية</strong>: تحتوي على ألعاب يتفاعل معها
                الطلاب ويستفيدون منها.
              </li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="about-card"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className="section-subtitle" variants={titleVariants}>
              فريق العمل
            </motion.h2>
            <motion.div
              className="team-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-member card"
                  variants={itemVariants}
                >
                  <motion.img
                    src={member.avatar}
                    alt={`أفاتار ${member.name}`}
                    className="team-avatar"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.p className="team-name" variants={itemVariants}>
                    {member.name}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default About;
