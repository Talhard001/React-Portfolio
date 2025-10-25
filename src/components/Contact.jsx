import React, { useState } from "react";
import { motion } from "framer-motion";
import emailIcon from "/email.png";
import locationIcon from "/location.png";
import phoneIcon from "/headphone.png";
import { submitContact } from "../api"; // correct path


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await submitContact({ name, email, phone, message });
      alert(data.message || "Form submitted!");

      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="flex justify-center pl-0 md:pl-20 lg:pl-24 items-center min-h-screen bg-[#013253] text-white font-serif p-6">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-center justify-center text-center lg:text-left">
          
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="lg:w-1/2 w-full px-6"
          >
            <h1 className="text-3xl md:text-4xl pb-4">Let's talk?</h1>
            <p className="text-gray-300 pb-3">
              It's all about the humans behind a brand and those experiencing it. We're right there in the middle, making things happen.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full h-12 px-3 rounded-sm text-black"
                type="text"
                name="Name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  className="w-full md:w-1/2 h-12 px-3 rounded-sm text-black"
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="w-full md:w-1/2 h-12 px-3 rounded-sm text-black"
                  type="tel"
                  name="Phone"
                  placeholder="Phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <textarea
                className="w-full h-32 px-3 py-2 rounded-sm text-black resize-none"
                name="Message"
                placeholder="Tell Us About Your Project"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-6 py-3 hover:bg-[#FF014F] rounded-full bg-[#012B45] focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Section - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden md:hidden lg:flex flex-col gap-6 lg:w-1/2 items-center lg:items-start"
          >
            {[
              { icon: emailIcon, title: "Email", details: "talhard5994@gmail.com", bg: "bg-[#00c0ff]" },
              { icon: locationIcon, title: "Address", details: "Lahore Cantt", bg: "bg-[#ff014f]" },
              { icon: phoneIcon, title: "Phone", details: ["+92 324 4905994"], bg: "bg-[#edb846]" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className="flex items-center gap-4"
              >
                <img className={`w-12 h-12 ${item.bg} p-2 rounded`} src={item.icon} alt={item.title} />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  {item.title === "Email" ? (
                    <a href={`mailto:${item.details}`} className="text-gray-300 hover:underline">
                      {item.details}
                    </a>
                  ) : Array.isArray(item.details) ? (
                    item.details.map((line, i) => <p key={i} className="text-gray-300">{line}</p>)
                  ) : (
                    <p className="text-gray-300">{item.details}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
