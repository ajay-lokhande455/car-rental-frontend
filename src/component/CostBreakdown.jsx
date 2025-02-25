import React, { useState } from "react";
import { FaGift } from "react-icons/fa";

const CostBreakdown = () => {
    const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <div className="bg-white p-2 rounded-lg shadow-md max-w-sm mx-auto">
        <h2 className="text-lg font-semibold mb-4">Cost Breakdown</h2>

        {/* Rental Costs */}
        <div className="flex justify-between text-gray-700 mb-5">
          <p>Vehicle Rental Cost</p>
          <p className="font-semibold">₹ 907</p>
        </div>
        <div className="flex justify-between text-gray-700 mb-5">
          <p>Total Booking Amount</p>
          <p className="font-semibold">₹ 907</p>
        </div>

        {/* Apply Coupon Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 font-semibold py-2 rounded-md mb-4">
          <FaGift />
          Apply Coupon
        </button>

        {/* IGST */}
        <div className="flex justify-between text-gray-700 text-sm mb-2">
          <p>
            IGST <span className="text-gray-500">(28% applied)</span>
          </p>
          <p className="font-semibold">₹ 254</p>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-2" />

        {/* Payable Amount */}
        <div className="flex justify-between text-gray-900 text-lg font-semibold">
          <p>Payable Amount</p>
          <p>₹ 1,161</p>
        </div>

        {/* Extra Charges Section */}
        <div className="bg-[#FEEEB9] p-4 mt-4 rounded-md">
          <label className="flex items-start gap-2 text-gray-900">
            <input type="checkbox" className="mt-1" />
            <span>
              <strong>Need Mobile Holder</strong>
              <p className="text-sm text-gray-600">
                Extra cost ₹ 0 will apply for mobile holder.
              </p>
            </span>
          </label>

          <label className="flex items-center gap-2 text-gray-900 mt-3">
            <input type="checkbox" />
            <strong>Delivery charges is ₹ 499</strong>
          </label>
        </div>
      </div>

      <div className="max-w-md mx-auto py-5">
        {/* Checkbox Section */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            className="mt-1"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="terms" className="text-gray-700">
            Confirm that you are above 18 years of age and you agree to all{" "}
            <a href="#" className="font-semibold text-black underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        {/* Proceed Button */}
        <button
          className={`w-full mt-4 py-2 rounded-lg font-semibold ${
            isChecked
              ? "bg-black text-amber-400 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isChecked}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default CostBreakdown;
