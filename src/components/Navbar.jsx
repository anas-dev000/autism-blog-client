import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" title="الانتقال إلى الصفحة الرئيسية">
          <img
            src="/assets/images/logo/edraak-logo.png"
            alt="شعار مبدع"
            className="edraak-logo"
            style={{
              width: "150px", 
              height: "auto",
            }}
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/blog">المدونة</Link>
        </li>
        <li>
          <Link to="/about">من نحن</Link>
        </li>
        <li>
          <Link to="/communication">أساليب التواصل</Link>
        </li>
        <li>
          <Link to="/sessions">الجلسات</Link>
        </li>
        <li>
          <Link to="/podcasts">البودكاست</Link>
        </li>
        <li>
          <Link to="/games">الألعاب</Link>
        </li>
        <li>
          <Link to="/interaction">التفاعل</Link>
        </li>
        <li>
          <Link to="/stories">القصص</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
