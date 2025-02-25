import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUp, openLogin } from "../features/auth/formSlice";

const SignUpForm = () => {
  const { isLoginOpen, isSignUpOpen } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "",
    licenseNumber: "",
    address: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    role: "",
    licenseNumber: "",
    address: "",
  });

  const validateForm = () => {
    let isValid = true;
    let newErrors = { ...errors };

    if (!formData.name.trim() || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be 10 digits";
      isValid = false;
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.password.trim() || formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    if (!formData.role) {
      newErrors.role = "Please select Admin or User";
      isValid = false;
    }

    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = "License number is required";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("SignUp Successful ✅");
    }
  };

  const handleOpenLogin = () => {
    dispatch(closeSignUp());
    dispatch(openLogin());
  };

  return isSignUpOpen ? (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
    <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-98">
        <div className="flex justify-between border-b-1 py-1 border-gray-200 my-2">
          <h2 className="text-xl font-semibold  text-gray-700 mb-4">
            Sign Up
          </h2>
          <RxCross2 size={"24px"} className="text-gray-600 cursor-pointer" onClick={() => dispatch(closeSignUp())} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 ">
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-amber-100 rounded-lg focus:ring-amber-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-amber-100 rounded-lg focus:ring-amber-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-amber-100 rounded-lg focus:ring-amber-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          </div>

          <div className="flex gap-4">
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-amber-100 rounded-lg focus:ring-amber-400"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a strong password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-amber-100 rounded-lg focus:ring-amber-400"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4 ">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Role</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Admin</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={formData.role === "user"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>User</span>
              </label>
            </div>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              License Number
            </label>
            <input
              type="text"
              name="licenseNumber"
              placeholder="Enter your license number"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-amber-100 rounded-lg focus:ring-amber-400"
            />
            {errors.licenseNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.licenseNumber}
              </p>
            )}
          </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Address</label>
            <textarea
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-amber-100 rounded-lg focus:ring-amber-400"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-amber-400 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button  className="text-blue-500 hover:underline" onClick={handleOpenLogin}>
            Login
          </button>
        </p>
      </div>
      </div>
  ): null ;
};

export default SignUpForm;
