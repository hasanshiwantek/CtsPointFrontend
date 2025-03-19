"use client";
import { React, useState,useEffect } from "react";
import styles from "@/style/Home/Home.module.css";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const LeftMenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track submenu state


  return (
    <>
      <div className={`${styles.leftMenuBarContainer} `}>
        <div className={styles.categoriesText}>
          <div className="flex justify-start items-center gap-[12rem] mb-6 ">
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

            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Motherboards")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li>
                <Link href="#">Motherboards</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "Motherboards" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li>
                      <Link href="#">Backplane Board</Link>
                    </li>
                    <li>
                      <Link href="#">Desktop Motherboards</Link>
                    </li>
                    <li>
                      <Link href="#">Laptop Motherboards</Link>
                    </li>
                    <li>
                      <Link href="#">Miscellaneous</Link>
                    </li>
                    <li>
                      <Link href="#">Motherboard Accessories</Link>
                    </li>
                    <li>
                      <Link href="#">Server Motherboards</Link>
                    </li>
                    <li>
                      <Link href="#">System Motherboards</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Networking")}
              onMouseLeave={() => {
                setActiveMenu(null);
                setActiveSubMenu(null);
              }}
            >
              <li>
                <Link href="#">Networking</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>

              {activeMenu === "Networking" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Bridges & Routers")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center ">
                        Bridges & Routers
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Bridges & Routers" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Bridges</Link>
                            </li>
                            <li>
                              <Link href="#">Router Chassis & Modules</Link>
                            </li>
                            <li>
                              <Link href="#">Routers</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link href="#">Door Access</Link>
                    </li>
                    <li>
                      <Link href="#">Gateways</Link>
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Hubs & Switches ")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center ">
                        Hubs & Switches
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Hubs & Switches " && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Hubs</Link>
                            </li>
                            <li>
                              <Link href="#">KVM Switches</Link>
                            </li>
                            <li>
                              <Link href="#">Network Switches</Link>
                            </li>

                            <li>
                              <Link href="#">Switch Modules</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("LAN & WAN Modules")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        LAN & WAN Modules
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "LAN & WAN Modules" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">LAN & WAN Modules</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link href="#">Multiplexers</Link>
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() =>
                        setActiveSubMenu("Network Accessories")
                      }
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Network Accessories
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Network Accessories" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">GPS Devices</Link>
                            </li>

                            <li>
                              <Link href="#">Media Converter</Link>
                            </li>
                            <li>
                              <Link href="#">Miscallaneous</Link>
                            </li>
                            <li>
                              <Link href="#">Modem</Link>
                            </li>
                            <li>
                              <Link href="#">Network Adapter</Link>
                            </li>
                            <li>
                              <Link href="#">VPN Encrypt Module</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li>
                      <Link href="#">Network Print Servers</Link>
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Security")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Security
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Security" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Appliance</Link>
                            </li>

                            <li>
                              <Link href="#">Firewalls</Link>
                            </li>
                            <li>
                              <Link href="#">Network Management Devices</Link>
                            </li>
                            <li>
                              <Link href="#">Network Monitoring</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link href="#">Transceiver</Link>
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Wireless Products")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Wireless Products
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Wireless Products" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Wireless Access Points</Link>
                            </li>

                            <li>
                              <Link href="#">Wireless Accessories</Link>
                            </li>
                            <li>
                              <Link href="#">Wireless LAN Card</Link>
                            </li>
                            <li>
                              <Link href="#">Wirelss LAN Controllers</Link>
                            </li>

                            <li>
                              <Link href="#">Wirelss Router</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("PC & Servers")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li>
                <Link href="#">PC & Servers</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "PC & Servers" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Desktops")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Desktops
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Desktops" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Desktop Systems</Link>
                            </li>

                            <li>
                              <Link href="#">Desktop Systems Accessories</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Laptops")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Laptops
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Laptops" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">
                                Desktop Stations & Replicators
                              </Link>
                            </li>

                            <li>
                              <Link href="#">Hinge</Link>
                            </li>

                            <li>
                              <Link href="#">Laptop Covers</Link>
                            </li>

                            <li>
                              <Link href="#">Laptop Systems</Link>
                            </li>

                            <li>
                              <Link href="#">Miscallaneous</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Notebook")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Notebook
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Notebook" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Batteries</Link>
                            </li>

                            <li>
                              <Link href="#">Chargers & Adapters</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("POS System")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        POS System
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "POS System" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Interfaces</Link>
                            </li>

                            <li>
                              <Link href="#">Miscellaneous</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Server")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Server
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Server" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Chassis & Cabinets</Link>
                            </li>

                            <li>
                              <Link href="#">NAS Servers</Link>
                            </li>

                            <li>
                              <Link href="#">Server Accessories</Link>
                            </li>

                            <li>
                              <Link href="#">Server Barebones</Link>
                            </li>

                            <li>
                              <Link href="#">Server Chassis</Link>
                            </li>

                            <li>
                              <Link href="#">Server Racks & Cabinets</Link>
                            </li>

                            <li>
                              <Link href="#">Server Systems</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Software")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Software
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Software" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Operating System</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Workstations")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Workstations
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Workstations" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Workstation Accessories</Link>
                            </li>

                            <li>
                              <Link href="#">Workstation Systems</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Power Supplies")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li>
                <Link href="#">Power Supplies</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "Power Supplies" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Power Devices")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Power Devices
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Power Devices" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Battery Charges</Link>
                            </li>

                            <li>
                              <Link href="#">Other</Link>
                            </li>

                            <li>
                              <Link href="#">Power Distribution Unit PDU</Link>
                            </li>

                            <li>
                              <Link href="#">Power Injectors</Link>
                            </li>

                            <li>
                              <Link href="#">Power Inverters</Link>
                            </li>

                            <li>
                              <Link href="#">Power Supplies</Link>
                            </li>

                            <li>
                              <Link href="#">Surge Suppressors</Link>
                            </li>

                            <li>
                              <Link href="#">UPS</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Printers & Cartridges")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li>
                <Link href="#">Printers & Cartridges</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "Printers & Cartridges" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Printer")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Printer
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Printer" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">All-In-one Printers</Link>
                            </li>

                            <li>
                              <Link href="#">Barcode Printer</Link>
                            </li>

                            <li>
                              <Link href="#">Dot Matrix Printers</Link>
                            </li>

                            <li>
                              <Link href="#">InkJet Printers</Link>
                            </li>

                            <li>
                              <Link href="#">Label Printer</Link>
                            </li>

                            <li>
                              <Link href="#">Laser Printers</Link>
                            </li>

                            <li>
                              <Link href="#">Multifunction Printers</Link>
                            </li>

                            <li>
                              <Link href="#">Plotters</Link>
                            </li>
                            <li>
                              <Link href="#">Receipt Printer</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() =>
                        setActiveSubMenu("Printer Accessories")
                      }
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Printer Accessories
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Printer Accessories" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">
                                Automatic Document Feeder (ADF)
                              </Link>
                            </li>

                            <li>
                              <Link href="#">Duplexer</Link>
                            </li>

                            <li>
                              <Link href="#">Formatter Board</Link>
                            </li>

                            <li>
                              <Link href="#">Fuser</Link>
                            </li>

                            <li>
                              <Link href="#">Ink Cartidges</Link>
                            </li>

                            <li>
                              <Link href="#">Maintenance Kits</Link>
                            </li>

                            <li>
                              <Link href="#">Miscallaneous</Link>
                            </li>

                            <li>
                              <Link href="#">Paper Tray</Link>
                            </li>
                            <li>
                              <Link href="#">Rollers</Link>
                            </li>

                            <li>
                              <Link href="#">Thermal Printers</Link>
                            </li>

                            <li>
                              <Link href="#">Toner Cartridges</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Scanner")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center  ">
                        Scanner
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Scanner" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Scanner & Fax Accessories</Link>
                            </li>

                            <li>
                              <Link href="#">
                                Scanner Faxes & Copiers Miscellaneous
                              </Link>
                            </li>

                            <li>
                              <Link href="#">Scanners</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Processors")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li>
                <Link href="#">Processors</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "Processors" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li>
                      <Link href="#">Boards</Link>
                    </li>
                    <li>
                      <Link href="#">Miscellaneous</Link>
                    </li>
                    <li>
                      <Link href="#">Processor</Link>
                    </li>
                    <li>
                      <Link href="#">VRM</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Storage Devices")}
              onMouseLeave={() => {
                setActiveMenu(null);
                setActiveSubMenu(null);
              }}
            >
              <li>
                <Link href="#">Storage Devices</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>

              {activeMenu === "Storage Devices" && (
                <div className={styles.subMenu}>
                  <ul>
                    {/* External Hard Drives */}
                    <li>
                      <Link href="#">External Hard Drives</Link>
                    </li>

                    {/* Internal Hard Drives Submenu */}
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() =>
                        setActiveSubMenu("Internal Hard Drives")
                      }
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Internal Hard Drives
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Internal Hard Drives" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Desktop Hard Drive</Link>
                            </li>
                            <li>
                              <Link href="#">Laptop Hard Drive</Link>
                            </li>
                            <li>
                              <Link href="#">Miscellaneous</Link>
                            </li>
                            <li>
                              <Link href="#">Printer Hard Drive</Link>
                            </li>
                            <li>
                              <Link href="#">Server Hard Drive</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* Multimedia Submenu */}
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Multimedia")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Multimedia
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Multimedia" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Firewire Devices</Link>
                            </li>
                            <li>
                              <Link href="#">Floppy Drives</Link>
                            </li>
                            <li>
                              <Link href="#">Optical Drives & Burners</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* Network Storage Devices */}
                    <li>
                      <Link href="#">Network Storage Devices</Link>
                    </li>

                    {/* Raid Controllers Submenu */}
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Raid Controllers")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Raid Controllers
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Raid Controllers" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Cache Battery</Link>
                            </li>
                            <li>
                              <Link href="#">Controller</Link>
                            </li>
                            <li>
                              <Link href="#">Fiber Channel Controller</Link>
                            </li>
                            <li>
                              <Link href="#">Miscellaneous</Link>
                            </li>
                            <li>
                              <Link href="#">SAS & SATA Controller</Link>
                            </li>
                            <li>
                              <Link href="#">SCSI Controller</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* Server Hard Drives */}
                    <li>
                      <Link href="#">Server Hard Drives</Link>
                    </li>

                    {/* SSDs Submenu */}
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("SSDs")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        SSDs
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "SSDs" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Fiber Channel</Link>
                            </li>
                            <li>
                              <Link href="#">I-O Accelerator Card</Link>
                            </li>
                            <li>
                              <Link href="#">Solid State Drives</Link>
                            </li>
                            <li>
                              <Link href="#">SSD & HDD Accessories</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* Storage Array */}
                    <li>
                      <Link href="#">Storage Array</Link>
                    </li>

                    {/* Tape Submenu */}
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Tape")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Tape
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>

                      {activeSubMenu === "Tape" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Miscellaneous</Link>
                            </li>
                            <li>
                              <Link href="#">Tape Drive</Link>
                            </li>
                            <li>
                              <Link href="#">Tape Libraries & Autoloaders</Link>
                            </li>
                            <li>
                              <Link href="#">Tape Media</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    {/* USB Flash Drive */}
                    <li>
                      <Link href="#">USB Flash Drive</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Audio-Video Devices")}
              onMouseLeave={() => {
                setActiveMenu(null);
                setActiveSubMenu(null);
              }}
            >
              <li>
                <Link href="#">Audio-Video Devices</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "Audio-Video Devices" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() =>
                        setActiveSubMenu("Audio & Video Conferencing")
                      }
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Audio & Video Conferencing
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>
                      {activeSubMenu === "Audio & Video Conferencing" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Camera Miscellaneous</Link>
                            </li>
                            <li>
                              <Link href="#">Web Cams</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Headphone")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Headphone
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>
                      {activeSubMenu === "Headphone" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Headsets & Earbuds</Link>
                            </li>
                            <li>
                              <Link href="#">Microphones</Link>
                            </li>
                            <li>
                              <Link href="#">Speakers</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Monitor")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Monitor
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>
                      {activeSubMenu === "Monitor" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">KVM LCD & Keyboard Combo</Link>
                            </li>
                            <li>
                              <Link href="#">Laptop LCD & LED Screen</Link>
                            </li>
                            <li>
                              <Link href="#">LCD & LED Monitor</Link>
                            </li>
                            <li>
                              <Link href="#">LCD Monitor</Link>
                            </li>
                            <li>
                              <Link href="#">LED Monitor</Link>
                            </li>
                            <li>
                              <Link href="#">Monitor Accessories</Link>
                            </li>
                            <li>
                              <Link href="#">Touch Screen LCD & LED</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Sound Card")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Sound Card
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>
                      {activeSubMenu === "Sound Card" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Sound Cards</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() =>
                        setActiveSubMenu("Video And Graphics")
                      }
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">
                        Video And Graphics
                        <i>
                          <IoIosArrowForward />
                        </i>
                      </Link>
                      {activeSubMenu === "Video And Graphics" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">USB Display Adapters</Link>
                            </li>
                            <li>
                              <Link href="#">Video Card</Link>
                            </li>
                            <li>
                              <Link href="#">Video Card Accessories</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className={styles.menuBarLink}
              onMouseEnter={() => setActiveMenu("Accessories")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <li>
                <Link href="#">Accessories</Link>
              </li>
              <i>
                <IoIosArrowForward />
              </i>
              {activeMenu === "Accessories" && (
                <div className={styles.subMenu}>
                  <ul>
                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() =>
                        setActiveSubMenu("PC Tools & Testers")
                      }
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#">PC Tools & Testers</Link>
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Cables")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">Cables
                      <i>
                        <IoIosArrowForward />
                      </i>
                      </Link>
                      {activeSubMenu === "Cables" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Attach Cable</Link>
                            </li>
                            <li>
                              <Link href="#">Cable Management Arm</Link>
                            </li>
                            <li>
                              <Link href="#">D-SUB Cables</Link>
                            </li>
                            <li>
                              <Link href="#">DisplayPort Cables</Link>
                            </li>
                            <li>
                              <Link href="#">DVI Cables</Link>
                            </li>
                            <li>
                              <Link href="#">Fiber Optic Cables</Link>
                            </li>
                            <li>
                              <Link href="#">HDMI Cables</Link>
                            </li>
                            <li>
                              <Link href="#">IDE Cables</Link>
                            </li>
                            <li>
                              <Link href="#">KVM Cables</Link>
                            </li>
                            <li>
                              <Link href="#">Miscellaneous</Link>
                            </li>
                            <li>
                              <Link href="#">Network Ethernet Cables</Link>
                            </li>
                            <li>
                              <Link href="#">Phone Cables</Link>
                            </li>
                            <li>
                              <Link href="#">Power Cables</Link>
                            </li>
                            <li>
                              <Link href="#">Printer Cables</Link>
                            </li>
                            <li>
                              <Link href="#">SAS Cables</Link>
                            </li>
                            <li>
                              <Link href="#">SATA Cables</Link>
                            </li>
                            <li>
                              <Link href="#">SCSI Cables</Link>
                            </li>
                            <li>
                              <Link href="#">USB Cables</Link>
                            </li>
                            <li>
                              <Link href="#">Video Cables</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() =>
                        setActiveSubMenu("Cooling Fans & Heat Sinks")
                      }
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">Cooling Fans & Heat Sinks
                      <i>
                        <IoIosArrowForward />
                      </i>
                      </Link>
                      {activeSubMenu === "Cooling Fans & Heat Sinks" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Cooling Fans</Link>
                            </li>
                            <li>
                              <Link href="#">Fans & Heatsinks Combo</Link>
                            </li>
                            <li>
                              <Link href="#">Heatsinks</Link>
                            </li>
                            <li>
                              <Link href="#">Thermal Compound Grease</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Battery")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">Battery
                      <i>
                        <IoIosArrowForward />
                      </i>
                      </Link>
                      {activeSubMenu === "Battery" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Laptop Battery</Link>
                            </li>
                            <li>
                              <Link href="#">Miscellaneous</Link>
                            </li>
                            <li>
                              <Link href="#">UPS Battery</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Adapters")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">Adapters
                      <i>
                        <IoIosArrowForward />
                      </i></Link>

                      {activeSubMenu === "Adapters" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Connectors</Link>
                            </li>
                            <li>
                              <Link href="#">Interposer</Link>
                            </li>
                            <li>
                              <Link href="#">Miscellaneous</Link>
                            </li>
                            <li>
                              <Link href="#">Power Adapter</Link>
                            </li>
                            <li>
                              <Link href="#">USB Converters</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Input Devices")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">Input Devices
                      <i>
                        <IoIosArrowForward />
                      </i></Link>
                      {activeSubMenu === "Input Devices" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">Desktop & Laptop Keyboard</Link>
                            </li>
                            <li>
                              <Link href="#">Desktop Keyboard</Link>
                            </li>
                            <li>
                              <Link href="#">Laptop Keyboard</Link>
                            </li>
                            <li>
                              <Link href="#">Misc Input Devices</Link>
                            </li>
                            <li>
                              <Link href="#">Mouse</Link>
                            </li>
                            <li>
                              <Link href="#">Wireless Keyboard</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li
                      className={styles.menuItemWithSubmenu}
                      onMouseEnter={() => setActiveSubMenu("Phones")}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link href="#" className="flex items-center">Phones
                      <i>
                        <IoIosArrowForward />
                      </i>
                      </Link>
                      {activeSubMenu === "Phones" && (
                        <div className={styles.nestedSubMenu}>
                          <ul>
                            <li>
                              <Link href="#">IP Phones</Link>
                            </li>
                            <li>
                              <Link href="#">Phones Accessories</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftMenuBar;
