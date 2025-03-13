"use client"
import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow bg-white">
      <div className="flex items-center space-x-2">
        <Image src="/Logo.webp" alt="Logo"  width={150} height={300} />
      </div>

      <div className="flex items-center border rounded-md overflow-hidden">
        <select className="px-3 py-2 border-r bg-gray-100 text-sm">
          <option>All Categories</option>
          <option>Computers</option>
          <option>Mobiles</option>
        </select>
        <input
          type="text"
          placeholder="Search for a product"
          className="px-3 py-2 w-64 outline-none"
        />
        <button className="px-4 py-2 bg-black text-white">
          <FiSearch size={18} />
        </button>
      </div>

      <div className="hidden lg:flex items-center space-x-1">
        <span className="text-sm font-medium">Excellent</span>
        <img src="/trustpilot.png" alt="Trustpilot" className="h-5" />
        <span className="text-xs text-gray-600">Based on <a href="#" className="underline">18 Reviews</a></span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-center">
          <FiUser size={20} />
          <div className="text-xs">
            <a href="#" className="text-gray-700">Sign In</a> | 
            <a href="#" className="text-gray-700"> Join</a>
          </div>
        </div>

        <div className="relative">
          <FiShoppingCart size={24} />
          {cartCount === 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">0</span>
          )}
        </div>
      </div>
    </nav>
  );
}
