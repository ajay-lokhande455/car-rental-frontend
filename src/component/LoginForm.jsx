import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { closeLogin, openSignUp } from "../features/auth/formSlice"; // Import close action

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoginOpen, isSignUpOpen } = useSelector((state) => state.form);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    role: "",
  });

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: "", password: "", role: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email or Username is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.role) {
      newErrors.role = "Please select Admin or User";
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
      alert(`Login Successful ✅\nRole: ${formData.role}`);
    }
  };

  const handleOpenSignUp = () => {
    dispatch(closeLogin());
    dispatch(openSignUp()); 
  };
  
  return isLoginOpen ? (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Login to your account
          </h2>
          <RxCross2
            size={"24px"}
            className="text-gray-600 cursor-pointer"
            onClick={() => dispatch(closeLogin())}
          />
        </div>
  
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex gap-4 border-t-1 py-2 border-gray-200">
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
              Enter Email or Username <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-amber-100 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:ring-amber-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-amber-100 rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:ring-amber-400"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
  
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>
  
          <button
            type="submit"
            className="w-full bg-black text-amber-400 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
  
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <button onClick={handleOpenSignUp} className="text-blue-500 hover:underline">
            Sign up
          </button>
        </p>
      </div>
    </div>
  ) : null;
  
  
};

export default LoginForm;
