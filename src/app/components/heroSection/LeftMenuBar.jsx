"use client";
import { React, useState, useEffect } from "react";
import styles from "@/style/Home/Home.module.css";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { menuData } from "@/data/NavBarData";
const LeftMenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track submenu state

  return (
    <>
      <div className={`${styles.leftMenuBarContainer} `}>
        <div className={styles.categoriesText}>
          <div className="flex justify-start items-center  mb-6 ">
            <span className="font-semibold text-lg p-2">
              Shop All Categories
            </span>
            <i className="text-[1.5rem]">
              <IoIosArrowDown />
            </i>
          </div>
        </div>
        <div className={styles.menuBar}>
          <ul>
            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Memory")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li>
                <Link href="#">Memory</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "Memory" && (
                <div className={`${styles.subMenu} !p-0 mt-[-4px] `}>
                  <ul className="!grid !grid-cols-5 !gap-4 !w-[80vw] bg-white shadow-2xl border border-[#f0f0f0] !p-10  transition z-10 h-96">
                    <li>
                      <Link href="#">Cache Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Desktop Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Flash Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Laptop Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Memory Boards</Link>
                    </li>
                    <li>
                      <Link href="#">Miscellaneous</Link>
                    </li>
                    <li>
                      <Link href="#">Network Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Printer Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Raid Control Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Rambus Memory (RDRAM)</Link>
                    </li>
                    <li>
                      <Link href="#">Server Memory</Link>
                    </li>
                    <li>
                      <Link href="#">Video Memory</Link>
                    </li>
                    <li>
                      <Link href="#">VRM</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              {menuData.map((menu, index) => (
                <div
                  key={index}
                  className={styles.menuBarLink}
                  onMouseEnter={() => setActiveMenu(menu.title)}
                  onMouseLeave={() => {
                    setActiveMenu(null);
                    setActiveSubMenu(null);
                  }}
                >
                  <li>
                    <Link href="#" className="flex items-center ">
                      {menu.title}
                      <i>
                        <IoIosArrowForward />
                      </i>
                    </Link>
                  </li>

                  {activeMenu === menu.title && (
                    <div className={styles.subMenu}>
                      <ul>
                        {menu.subMenu.map((sub, subIndex) => (
                          <li
                            key={subIndex}
                            className={
                              sub.subMenu ? styles.menuItemWithSubmenu : ""
                            }
                            onMouseEnter={() =>
                              sub.subMenu ? setActiveSubMenu(sub.title) : null
                            }
                            onMouseLeave={() => setActiveSubMenu(null)}
                          >
                            <Link href="#" className="flex items-center">
                              {sub.title}
                              <i>{sub.subMenu && <IoIosArrowForward />}</i>
                            </Link>

                            {activeSubMenu === sub.title && sub.subMenu && (
                              <div className={styles.nestedSubMenu}>
                                <ul>
                                  {sub.subMenu.map((nested, nestedIndex) => (
                                    <li key={nestedIndex}>
                                      <Link href={nested.link}>
                                        {nested.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftMenuBar;
