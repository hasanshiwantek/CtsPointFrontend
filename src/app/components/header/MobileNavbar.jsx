"use client";
import { useState } from "react";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { menuData } from "@/data/NavBarData"; // Import menu data
import styles from "@/style/Header/Header.module.css"; // Import module styling
import Link from "next/link";
import {
  CiHeart,
  CiUser,
  CiPhone,
  CiLinkedin,
  CiFacebook,
} from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
const MobileNavbar = ({ isOpen, setIsOpen }) => {
  const extraLinks = [
    {
      menu: [
        { title: "Home", link: "/" },
        { title: "About Us", link: "/about" },
        { title: "Warranty", link: "/warranty" },
        { title: "Shipping Policy", link: "/shipping-policy" },
        { title: "Terms And Conditions", link: "/terms-conditions" },
        { title: "Track An Order", link: "/track-order" },
        { title: "Product Conditions", link: "/product-conditions" },
        { title: "Return Policy", link: "/return-policy" },
        { title: "Refund Policy", link: "/refund-policy" },
        { title: "Privacy Policy", link: "/privacy-policy" },
        { title: "Contact Us", link: "/contact" },
        { title: "Blog", link: "/blog" },
        {
          title: "Customer Login",
          link: "/login",
          icon: <CiUser className="mr-2 text-3xl" />,
        },
        {
          title: "Wish Lists",
          link: "/wishlist",
          icon: <CiHeart className="mr-2 text-3xl" />,
        },
        {
          title: "+1 (209) 498-4198",
          link: "tel:+12094984198",
          icon: <CiPhone className="mr-2 text-3xl" />,
        },
      ],
    },
  ];

  const menuBarData = [
    {
      title: "Memory",
      subMenu: [
        { title: "Cache Memory", link: "#" },
        { title: "Desktop Memory", link: "#" },
        { title: "Flash Memory", link: "#" },
        { title: "Laptop Memory", link: "#" },
        { title: "Memory Boards", link: "#" },
        { title: "Miscellaneous", link: "#" },
        { title: "Network Memory", link: "#" },
        { title: "Printer Memory", link: "#" },
        { title: "Raid Control Memory", link: "#" },
        { title: "Rambus Memory (RDRAM)", link: "#" },
        { title: "Server Memory", link: "#" },
        { title: "Video Memory", link: "#" },
        { title: "VRM", link: "#" },
      ],
    },
  ];

  const fullMenuData = [...menuBarData, ...menuData];
  const [menuStack, setMenuStack] = useState([]); // Empty initially

  // Get the current menu based on the stack
  const currentMenu =
    menuStack.length === 0
      ? fullMenuData
      : menuStack.reduce(
          (acc, curr) => acc.find((item) => item.title === curr)?.subMenu || [],
          fullMenuData
        );
  // Get the current title for the submenu header
  const currentTitle =
    menuStack.length > 0 ? menuStack[menuStack.length - 1] : "Menu";

  return (
    <div className={styles.mobileNavbarContainer}>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
      >
        {/* Header with Back & Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          {menuStack.length > 0 ? (
            <button
              onClick={() => setMenuStack((prev) => prev.slice(0, -1))}
              className="text-xl"
            >
              <IoIosArrowBack size={24} />
            </button>
          ) : (
            <span className="font-bold text-xl">Menu</span>
          )}

          <button onClick={() => setIsOpen(false)} className="text-xl">
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Show the category name at the top of the submenu */}
        {menuStack.length > 0 && (
          <div className="p-2 text-center text-lg font-bold  border-b border-gray-200 bg-gray-100">
            <Link
              href={currentMenu.find((item) => item.link)?.link || "#"}
              className="text-lg"
            >
              All {currentTitle}
            </Link>
          </div>
        )}

        {/* Sidebar Menu Items */}
        <ul className="p-4">
          {currentMenu.length > 0 ? (
            currentMenu.map((item, index) => (
              <li key={index} className="border-b">
                {/* Click anywhere in this div to navigate */}
                <div
                  className="flex justify-between items-center p-3 cursor-pointer"
                  onClick={() => {
                    if (item.subMenu) {
                      setMenuStack((prev) => [...prev, item.title]);
                    }
                  }}
                >
                  {/* Ensure Link only wraps the text */}
                  {item.link ? (
                    <Link href={item.link} className="text-xl">
                      {item.title}
                    </Link>
                  ) : (
                    <span className="text-xl">{item.title}</span>
                  )}
                  {item.subMenu && <IoIosArrowForward size={20} />}
                </div>
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-500">No items available</li>
          )}
        </ul>
        {/* Render Extra Links ONLY when on the MAIN MENU (menuStack is empty) */}
        {menuStack.length === 0 && (
          <ul>
            {extraLinks.map((item, index) => (
              <li key={index} className=" text-gray-700">
                {item.menu.map((link, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 flex justify-between items-center p-3 ml-4 cursor-pointer "
                  >
                    <Link
                      href={link.link}
                      className="text-lg flex items-center gap-2"
                    >
                      {link.icon && link.icon}
                      {link.title}
                    </Link>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
