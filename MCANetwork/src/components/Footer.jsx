import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="bg-blue-50 mt-16 py-12 px-6 md:px-16" id="contact">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-xl mb-2">MCA Department</h3>
                <p>
                  Madan Mohan Malaviya University of Technology,
                  <br />
                  Gorakhpur, Uttar Pradesh, India
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Email:</span> mca@mmmut.ac.in
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +91 12345 67890
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700 text-2xl">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-900 text-2xl">
                  <i className="ri-github-line"></i>
                </a>
              </div>
            </div>

            <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 p-3 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-10">
            <iframe
              className="w-full h-[450px] rounded-lg shadow-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.4054633525798!2d83.43055267488877!3d26.731434267858592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMMM%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1746211920728!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
