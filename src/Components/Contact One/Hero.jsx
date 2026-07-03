import React, { useState } from "react";
import bg from "../../assets/10- Contact One imgs/ContactUsOne.webp";

export default function Hero() {
  const data = {
    title: "Contact Us",
    formTitle: "Get in Touch",

    placeholders: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
    },

    checkboxLabel: "Save my information for next time",

    buttonText: "Send Message",

    messages: {
      required: "Please fill in required fields (Name, Email, Message)",
      success: "Message sent successfully!",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert(data.messages.required);
      return;
    }

    console.log("Submitted Data:", formData);

    alert(data.messages.success);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      saveInfo: false,
    });
  };

  return (
    <section>
      {/* HERO BACKGROUND */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-auto lg:h-[80vh] bg-cover bg-center"
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-0 h-full flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* TITLE */}
          <div className="text-white max-w-xl lg:mt-16">
            <h1 className="text-4xl md:text-6xl font-bold">{data.title}</h1>
          </div>

          {/* FORM */}
          <div className="w-full max-w-[600px] bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:ml-auto lg:mt-16">
            <h2 className="text-2xl font-bold mb-6">{data.formTitle}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={data.placeholders.name}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={data.placeholders.email}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={data.placeholders.subject}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder={data.placeholders.message}
                className="w-full border rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-black"
              />

              {/* CHECKBOX */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                />

                <label className="text-sm text-gray-600">
                  {data.checkboxLabel}
                </label>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                {data.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
