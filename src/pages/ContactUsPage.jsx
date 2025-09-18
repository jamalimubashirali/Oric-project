import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaExclamationCircle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPaperPlane,
  FaLinkedin,
} from "react-icons/fa";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#0A192F] to-[#112240] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out through any of these channels
            or send us a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaPaperPlane className="mr-2" /> Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white opacity-80 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 w-full px-4 py-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 border border-white/30 transition duration-300"
                  placeholder="Moon"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white opacity-80 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 w-full px-4 py-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 border border-white/30 transition duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white opacity-80 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/10 w-full px-4 py-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 border border-white/30 transition duration-300"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white opacity-80 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 w-full px-4 py-3 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 border border-white/30 transition duration-300"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-cyan-600 font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              >
                Send Message
                <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 overflow-hidden h-64">
              {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.041560323882!2d68.26372231500917!3d25.21242598389611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394e6f3a1a1f5c5f%3A0x7a5a1a1f1a1f1a1f!2sMehran%20University%20of%20Engineering%20and%20Technology%20(MUET)%2C%20Office%20of%20Research%2C%20Innovation%20and%20Commercialization%20(ORIC)%2C%20Jamshoro!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
                className="filter brightness(90%)"
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14415.533639019666!2d68.263074!3d25.408713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7960a341b7d9%3A0x5d6b29c80bc1f179!2sOffice%20of%20Research%2C%20Innovation%20%26%20Commercialization%2C%20Mehran%20University%20Jamshoro!5e0!3m2!1sen!2sus!4v1744432179951!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
                className="filter brightness(90%)"
              ></iframe>
            </div>

            {/* Contact Methods */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Other Ways to Connect
              </h2>

              <div className="space-y-4">
                {/* WhatsApp */}
                <div className="flex items-center p-3 hover:bg-white/5 rounded-lg transition duration-300">
                  <div className="bg-green-500 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white opacity-80 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.me/1234567890"
                      className="text-white font-medium hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      03168832427
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center p-3 hover:bg-white/5 rounded-lg transition duration-300">
                  <div className="bg-blue-400 p-3 rounded-full mr-4">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white opacity-80 text-sm">Call Us</p>
                    <a
                      href="tel:+1234567890"
                      className="text-white font-medium hover:underline"
                    >
                      (022) 2772280
                    </a>
                  </div>
                </div>

                {/* Help Message */}
                <div className="flex items-start p-3 hover:bg-white/5 rounded-lg transition duration-300">
                  <div className="bg-amber-400 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white opacity-80 text-sm">
                      oric@admin.muet.edu.pk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="backdrop-blur-md bg-white/10 rounded-2xl shadow-xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
              <div className="flex flex-wrap gap-3">
                {/* <a 
                  href="#" 
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-white text-xl" />
                </a> */}
                <a
                  href="https://www.linkedin.com/company/107967911/admin/dashboard/"
                  target="_blank"
                  className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>
                {/* <a 
                  href="#" 
                  className="bg-gradient-to-r from-pink-500 to-pink-600 p-3 rounded-full hover:to-pink-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-white text-xl" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-3 rounded-full hover:bg-gray-900 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-xl" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
