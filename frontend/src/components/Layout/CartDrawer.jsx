import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ toggleDrawerOpen, drawerOpen }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleDrawerOpen();
    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close icon */}
      <div className="flex justify-end p-4">
        <button onClick={toggleDrawerOpen}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Carts content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {/* component for cart contents */}
        <CartContents />
      </div>

      {/* checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 text-lg font-semibold hover:bg-gray-800 transition"
        >
          Checkout
        </button>

        <p className="text-sm tracking-tighter mt-2 text-center text-gray-500">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
//
