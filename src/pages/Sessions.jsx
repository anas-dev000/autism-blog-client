import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import "../styles/components.css";

const Sessions = () => {
  return (
    <div className="page">
      <Navbar />
      <main>
        <section className="sessions-section">
          <div className="sessions-card">
            <h1 className="sessions-message">
              انتظرونا قريبا لتقديم الجلسات والاستشارات
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sessions;
