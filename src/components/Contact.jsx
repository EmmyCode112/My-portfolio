import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    success: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7xjrryr",
        "template_c9jrhme",
        e.target,
        "VYt0cSg-Mi_3xGupu"
      )
      .then(() => {
        setToast({
          show: true,
          message: "Message sent successfully!",
          success: true,
        });
      })
      .catch(() => {
        setToast({
          show: true,
          message: "Failed to send message. Try again.",
          success: false,
        });
      });

    e.target.reset();
  };

  // Toast auto-hide logic
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // Toast component
  const Toast = ({ message, success }) => (
    <div
      className={`fixed top-[10%] z-[1000] right-4 flex items-center justify-between gap-4 px-6 py-3 rounded-md shadow-md text-white font-medium min-w-[250px] ${
        success ? "bg-green-600" : "bg-red-600"
      }`}
    >
      <span>{message}</span>
      <button onClick={() => setToast((prev) => ({ ...prev, show: false }))}>
        &times;
      </button>
    </div>
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      {toast.show && <Toast message={toast.message} success={toast.success} />}
      <section
        id="contact"
        className="py-20 px-6 md:px-20 bg-[#0f0f10]"
        data-aos="fade-up"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm">
            If you have a question, idea, or just want to say hello — feel free
            to send a message. I’ll get back to you as soon as possible!
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="max-w-xl mx-auto flex flex-col gap-5 bg-[#1c1c1e] p-6 rounded-lg shadow-lg"
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 bg-transparent border border-gray-600 rounded outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            className="p-3 bg-transparent border border-gray-600 rounded outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
