import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <footer className="flex flex-col sm:flex-row justify-between py-6 px-10 space-y-6 sm:space-y-0 sm:space-x-10 bg-[#233a66] text-white">
        <div className="w-full sm:w-1/3">
          <h1 className="font-bold text-lg">About Company</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            cumque nam rerum at, eos eius, ea dolorem porro laborum ratione
            maxime hic maiores voluptates a corrupti explicabo, culpa suscipit
            quam.
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <h1 className="font-bold text-lg">Contact Info</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            alias, impedit eum quod totam maiores corrupti iste laborum id quae
            nulla animi omnis expedita consequatur esse, quia veritatis, soluta
            fugit!
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.5613307818!2d71.46529137383361!3d30.25621210850926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3384ea0ada53%3A0x9d5ef81258a21868!2sNawabpur%20Rd%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e1!3m2!1sen!2s!4v1730613690379!5m2!1sen!2s"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Scroll to Top
        </button>
      )}
      <div className="flex justify-center text-white py-4 bg-[#233a66]">
        © {new Date().getFullYear()} Hamza. All Rights Reserved.
      </div>
    </>
  );
};
export default Footer;
