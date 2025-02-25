import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when typing
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required!";
    if (!formData.email) tempErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Enter a valid email!";
    if (!formData.mobile) tempErrors.mobile = "Mobile number is required!";
    else if (!/^\d{10}$/.test(formData.mobile))
      tempErrors.mobile = "Enter a valid 10-digit mobile number!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", mobile: "", comment: "" }); // Reset form
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-4xl text-center pt-6">Contact Us</h1>
      <div className="w-20 mx-auto h-1 bg-yellow-500 my-2 mb-6"></div>
    <div className="flex gap-2 p-20">
      <div className="w-[50%]">
        <img src="https://imgs.search.brave.com/ho69UF6gX3FpFZ8wHLUN0Tvnm6dXk2cRfTWySHE1LJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29udGFjdC11/cy1wbmctdXR6aWJz/Zm05NDdiZmEzNi5w/bmc" alt="" className="w-[90%]" />
      </div>
    <div className="min-w-xl p-6">
      <h2 className="text-xl font-semibold mb-4">You can find us here</h2>
      <p className="text-gray-600 mb-6">Find help for your queries here:</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name*"
            className="w-full px-2 py-3 border border-gray-300 rounded-lg"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address*"
            className="w-full p-2 py-3 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter your mobile number*"
            className="w-full p-2 py-3 border border-gray-300 rounded"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>
        <div>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Enter your comment"
            className="w-full p-2 py-3 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full p-2 py-3 rounded text-white ${Object.keys(errors).length ? "bg-black text-amber-400" : "bg-gray-400"}`}
          disabled={Object.keys(errors).length > 0}
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ContactPage;
