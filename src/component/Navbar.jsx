import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import logo from "../assets/selfspin-logo.svg";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm"; // Import SignUpForm
import { useDispatch, useSelector } from "react-redux";
import { openLogin } from "../features/auth/formSlice";

const Navbar = () => {
  const { isLoginOpen, isSignUpOpen } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleOpenLogin = () => {
    dispatch(openLogin()); // Open login form
  };

  const handleIsLoginOpen = () => {
    dispatch(openLogin()); // Ensure only LoginForm opens
  };
  

  return (
    <div className="relative">
      <div className="flex gap-5 bg-amber-300 justify-end px-10 py-1">
        <div className="flex justify-center items-center gap-2">
          <FaWhatsapp size={"20px"} />
          <p>+91 7499385295</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaPhoneAlt size={"20px"} />
          <p>+91 7499385295</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <IoMdMail size={"20px"} />
          <p>info@example.com</p>
        </div>
      </div>

      <div className="flex justify-between px-10 py-2 items-center">
        <div>
          <img src={logo} alt="logo" className="w-[120px]" />
        </div>

        <div className="flex">
          <ul className="flex font-semibold gap-5 px-9">
            <li className="py-3 px-4 rounded-sm hover:bg-yellow-400 cursor-pointer">Home</li>
            <li className="py-3 px-4 rounded-sm hover:bg-yellow-400 cursor-pointer">FAQs</li>
            <li className="py-3 px-4 rounded-sm hover:bg-yellow-400 cursor-pointer">Contact Us</li>
            <li className="py-3 px-4 rounded-sm hover:bg-yellow-400 cursor-pointer">Blogs</li>
            <li className="py-3 px-4 rounded-sm hover:bg-yellow-400 cursor-pointer">Book Now</li>
          </ul>

          <button className="flex justify-center items-center gap-2 font-semibold hover:bg-gray-800 cursor-pointer bg-black text-yellow-400 px-4 py-2 rounded-lg" onClick={handleOpenLogin}>
            <IoExitOutline size={"20px"} />
            <p>Login or SignUp</p>
          </button>
        </div>
      </div>

      {/* Show Login Form if open */}
      {isLoginOpen && <LoginForm />}
      
      {/* Show SignUp Form if open */}
      {isSignUpOpen && <SignUpForm />}
    </div>
  );
};

export default Navbar;
