import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import logo from "../assets/selfspin-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-t-2 border-gray-500 py-8">
        {/* Left Section - Company Info */}
        <div>
          <img src={logo} alt="logo" className="w-[120px] pb-7" />
          <p className="text-sm">
            Experience the self-drive vehicle rental service from hourly to
            yearly basis that too anytime around the city. #HIRE. TRAVEL. ENJOY
            Rent like it's your own!
          </p>
          <h3 className="mt-6 font-bold">FOLLOW US ON</h3>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="text-2xl cursor-pointer" />
            <FaLinkedinIn className="text-2xl cursor-pointer" />
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaXTwitter className="text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold border-b-2 border-yellow-500 inline-block mb-3">
            QUICK LINKS
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Customer Reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                List & Earn
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold border-b-2 border-yellow-500 inline-block mb-3">
            POLICIES
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rental Agreement
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund and Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Heading Outstation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms And Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Damage/Penalties
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Locations
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold border-b-2 border-yellow-500 inline-block mb-3">
            CONTACT US
          </h3>
          <p className="text-sm">JS SELFSPIN</p>
          <p className="text-sm">
            Ground Floor, Rear Wing, 56/3, Vakil Square, Bannerghatta Main Road,
            Bengaluru, Karnataka, 560029.
          </p>
          <div className="mt-3 space-y-2">
            <p className="flex items-center space-x-2">
              <FaEnvelope />{" "}
              <a href="mailto:support@selfspin.com" className="hover:underline">
                support@selfspin.com
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone />{" "}
              <a href="tel:+919764442140" className="hover:underline">
                +91 9764442140
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <FaWhatsapp />{" "}
              <a href="https://wa.me/919764442140" className="hover:underline">
                +91 9764442140
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm">&copy; 2025 Selfspin</div>
    </footer>
  );
};

export default Footer;
