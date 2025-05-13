import React from "react";
import "../styles/components.css";

const BookingForm = () => {
  return (
    <form className="booking-form">
      <h2>حجز جلسة</h2>
      <input type="text" placeholder="الاسم" />
      <input type="email" placeholder="البريد الإلكتروني" />
      <button type="submit">إرسال</button>
    </form>
  );
};

export default BookingForm;
