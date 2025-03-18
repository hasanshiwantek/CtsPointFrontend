import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import styles from "@/style/Footer/Footer.module.css";

const FooterRight = () => {
  return (
    <footer className={`${styles.footerRightSec} dark:bg-gray-900`}>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          {/** Company Section */}
          <div>
            <h2 className="mb-6 font-bold text-[#002fe1]  dark:text-white">
              Shop
            </h2>
            <ul className="text-[#323232] dark:text-gray-400 font-medium">
              {[
                "Memory",
                "Motherboards",
                "Networking",
                "PC & Servers",
                "Power Supplies",
                "Printers & Cartridges",
                "Processors",
                "Storage Devices",
              ].map((item) => (
                <li key={item} className="mb-4">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/** Help Center Section */}
          <div>
            <h2 className="mb-6 font-bold text-[#002fe1] dark:text-white">
              Pages
            </h2>
            <ul className="text-[#323232] dark:text-gray-400 font-medium">
              {[
                "Billing Terms and Conditions",
                "Privacy Policy",
                "Product Condition",
                "Return Policy",
                "Refund Policy",
                "Shipping Policy",
                "Warranty",
                "Sitemap",
              ].map((item) => (
                <li key={item} className="mb-4">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/** Legal Section */}
          <div>
            <h2 className="mb-6 font-bold text-[#002fe1] dark:text-white">
              Customer Service
            </h2>
            <ul className="text-[#323232] dark:text-gray-400 font-medium">
              {["About Us", "Contact Us"].map((item) => (
                <li key={item} className="mb-4">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-bold text-[#002fe1] dark:text-white">
              Brands
            </h2>
            <ul className="text-[#323232] dark:text-gray-400 font-medium">
              {[
                "HP",
                "Dell",
                "IBM",
                "Seagate",
                "Cisco",
                "Supermicro",
                "Lenovo",
                "Samsung",
                "View All Brands",
              ].map((item) => (
                <li key={item} className="mb-4">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-bold text-[#002fe1] dark:text-white">
              Get In Touch
            </h2>
            <ul className="text-[#323232] dark:text-gray-400 font-medium">
              <div className="flex  gap-2">
                <i>
                <FaLocationDot/>
                </i>
                <li className="mb-4">
                  440 N Barranca Ave, Suite 1032 Covina, CA 91723
                </li>
              </div>
              <div  className="flex  gap-2">
                <i>
                <IoIosCall/>
                </i>
                <li className="mb-4">
                Call +1 (209)-498 4198<br/>
                International +1 (209)-498 4198
                </li>
              </div>
              <button className="text-white p-4 rounded-lg border border-white text-lg ml-8 mb-6 hover:text-[#323232] transition font-semibold text-center w-56">ASK AN EXPERT</button>
              <div  className="flex  gap-2">
                <i>
                < MdAlternateEmail/>
                </i>
                <li className="mb-4">
                sales@ctspoint.com
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/** Footer Bottom Section */}
        {/* <div className="px-4 py-6  dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {[
              { name: "Facebook", path: "M6.135 3H8V0H6.135..." },
              { name: "Discord", path: "M16.942 1.556a16.3 16.3 0..." },
              { name: "Twitter", path: "M20 1.892a8.178 8.178 0..." },
              { name: "GitHub", path: "M10 .333A9.911 9.911 0..." },
              { name: "Dribbble", path: "M10 0a10 10 0 1 0 10 10..." },
            ].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d={icon.path} clipRule="evenodd" />
                </svg>
                <span className="sr-only">{icon.name} page</span>
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterRight;
