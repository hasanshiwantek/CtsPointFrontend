"use client";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import styles from "@/style/Footer/Footer.module.css";
import Link from "next/link";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return isMobile;
};

const FooterRight = () => {
  const isMobile = useIsMobile();

  const sections = [
    {
      title: "Shop",
      items: [
        "Memory",
        "Motherboards",
        "Networking",
        "PC & Servers",
        "Power Supplies",
        "Printers & Cartridges",
        "Processors",
        "Storage Devices",
      ],
    },
    {
      title: "Pages",
      items: [
        "Billing Terms and Conditions",
        "Privacy Policy",
        "Product Condition",
        "Return Policy",
        "Refund Policy",
        "Shipping Policy",
        "Warranty",
        "Sitemap",
      ],
    },
    {
      title: "Customer Service",
      items: ["About Us", "Contact Us"],
    },
    {
      title: "Brands",
      items: [
        "HP",
        "Dell",
        "IBM",
        "Seagate",
        "Cisco",
        "Supermicro",
        "Lenovo",
        "Samsung",
        "View All Brands",
      ],
    },
  ];

  const contactSection = (
    <div>
      <h2 className="mb-6 font-bold text-[#002fe1] dark:text-white">
        Get In Touch
      </h2>
      <ul className="text-[#323232] dark:text-gray-400 font-medium">
        <div className="flex gap-2 mb-4">
          <FaLocationDot size={15} />
          <li>440 N Barranca Ave, Suite 1032 Covina, CA 91723</li>
        </div>
        <div className="flex gap-2 mb-4">
          <IoIosCall size={15} />
          <li>
            Call +1 (209)-498 4198 <br />
            International +1 (209)-498 4198
          </li>
        </div>
        <div className="flex gap-2 mb-4">
          <MdAlternateEmail size={15} />
          <li>sales@ctspoint.com</li>
        </div>
        <button className="btn-primary whitespace-nowrap ">
          ASK AN EXPERT
        </button>
 
      </ul>
    </div>
  );

  return (
    <footer className={`${styles.footerRightSec} dark:bg-gray-900`}>
      <div className="mx-auto w-full max-w-screen-xl px-4 py-1 lg:py-8">
        {isMobile ? (
          <>
            <Accordion type="single" collapsible className="w-full mb-6">
              {sections.map(({ title, items }) => (
                <AccordionItem value={title.toLowerCase()} key={title}>
                  <AccordionTrigger >
                    <h2 className="text-[#002fe1] mt-[2rem] ">
                    {title}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-[#323232] dark:text-gray-400 ">
                      {items.map((item) => (
                        <li key={item} className="mb-8">
                          <Link href="#" className="hover:underline">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Static Contact Section below accordion */}
            <div className="mt-6">{contactSection}</div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {sections.map(({ title, items }) => (
              <div key={title}>
                <h2 className="mb-6 font-bold text-[#002fe1] dark:text-white">
                  {title}
                </h2>
                <ul className="text-[#323232] dark:text-gray-400 font-medium">
                  {items.map((item) => (
                    <li key={item} className="mb-2">
                      <Link href="# ">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {contactSection}
          </div>
        )}
      </div>
    </footer>
  );
};

export default FooterRight;
