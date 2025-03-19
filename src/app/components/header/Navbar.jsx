"use client";
import { useState } from "react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import styles from "@/style/Header/Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar() {
  // const [cartCount, setCartCount] = useState(0);

  return (
    <nav className={`${styles.navBarContainer} `}>
      <div className={styles.logo}>
        <Image src="/Logo.webp" alt="Logo" width={180} height={300} />
      </div>

      <div className={`${styles.navBarCategoriesSec} shadow `}>
        <select name="category" id="search_cate">
          <option value="">All Categories</option>
          <option value="33">Memory</option>
          <option value="64"> Cache Memory</option>
          <option value="174"> Desktop memory</option>
          <option value="113"> Flash Memory</option>
          <option value="114"> Laptop memory</option>
          <option value="93"> Memory Boards</option>
          <option value="171"> Miscellaneous</option>
          <option value="235"> Network Memory</option>
          <option value="175"> Printer Memory</option>
          <option value="233"> RAID Controller Memory</option>
          <option value="181"> Rambus Memory (RDRAM)</option>
          <option value="34"> Server Memory</option>
          <option value="240"> Video Memory</option>
          <option value="277"> VRM</option>
          <option value="35">Motherboards</option>
          <option value="216"> Backplane Board</option>
          <option value="36"> Desktop Motherboards</option>
          <option value="62"> Laptop Motherboards</option>
          <option value="97"> Miscellaneous</option>
          <option value="131"> Motherboard Accessories</option>
          <option value="53"> Server Motherboards</option>
          <option value="81"> System Motherboards</option>
          <option value="24">Networking</option>
          <option value="91"> Bridges &amp; Routers</option>
          <option value="283">  Bridges</option>
          <option value="208">  Router Chassis &amp; Modules</option>
          <option value="92">  Routers</option>
          <option value="285"> Door Access</option>
          <option value="249"> Gateways</option>
          <option value="25"> Hubs &amp; Switches</option>
          <option value="129">  Hubs</option>
          <option value="27">  KVM Switches</option>
          <option value="86">  Network Switches</option>
          <option value="26">  Switch Modules</option>
          <option value="89"> LAN &amp; WAN Modules</option>
          <option value="90">  LAN &amp; WAN Modules</option>
          <option value="247"> Multiplexers</option>
          <option value="75"> Network Accessories</option>
          <option value="224">  GPS Devies</option>
          <option value="120">  Media Converter</option>
          <option value="88">  Miscellaneous</option>
          <option value="217">  Modem</option>
          <option value="76">  Network Adapter</option>
          <option value="248">  VPN Encrypt Module</option>
          <option value="150"> Networking Print Servers</option>
          <option value="56"> Security</option>
          <option value="57">  Appliance</option>
          <option value="184">  Firewalls</option>
          <option value="165">  Network Management Devices</option>
          <option value="284">  Network Monitoring</option>
          <option value="85"> Transceiver</option>
          <option value="83"> Wireless Products</option>
          <option value="133">  Wireless Access Points</option>
          <option value="84">  Wireless Accessories</option>
          <option value="169">  Wireless LAN Card</option>
          <option value="166">  Wireless LAN Controllers</option>
          <option value="221">  Wireless Router</option>
          <option value="66">PC &amp; Servers</option>
          <option value="176"> Desktops</option>
          <option value="215">  Desktop Systems</option>
          <option value="177">  Desktop Systems Accessories</option>
          <option value="121"> Laptops</option>
          <option value="122">  Docking Stations &amp; Replicators</option>
          <option value="138">  Hinge</option>
          <option value="134">  Laptop Covers</option>
          <option value="246">  Laptop Systems</option>
          <option value="182">  Miscellaneous</option>
          <option value="219"> Notebook</option>
          <option value="236">  Batteries</option>
          <option value="220">  Chargers &amp; Adapters</option>
          <option value="226"> POS System</option>
          <option value="227">  Interfaces</option>
          <option value="250">  Miscellaneous</option>
          <option value="67"> Server</option>
          <option value="201">  Chassis &amp; Cabinets</option>
          <option value="173">  NAS Servers</option>
          <option value="68">  Server Accessories</option>
          <option value="126">  Server Barebones</option>
          <option value="87">  Server Chassis</option>
          <option value="140">  Server Racks &amp; Cabinets</option>
          <option value="130">  Server Systems</option>
          <option value="230"> Software</option>
          <option value="231">  Operating System</option>
          <option value="211"> Workstations</option>
          <option value="212">  Workstation Accessories</option>
          <option value="225">  Workstation Systems</option>
          <option value="28">Power Supplies</option>
          <option value="29"> Power Devices</option>
          <option value="157">  Battery Chargers</option>
          <option value="118">  Other</option>
          <option value="100">  Power Distribution Unit PDU</option>
          <option value="260">  Power Injectors</option>
          <option value="252">  Power Inverters</option>
          <option value="30">  Power Supplies</option>
          <option value="286">  Surge Suppressors</option>
          <option value="229">  UPS</option>
          <option value="46">Printers &amp; Cartridges</option>
          <option value="49"> Printer</option>
          <option value="206">  All-in-One Printers</option>
          <option value="222">  Barcode Printer</option>
          <option value="149">  Dot Matrix Printers</option>
          <option value="51">  InkJet Printers</option>
          <option value="199">  Label Printer</option>
          <option value="52">  Laser Printers</option>
          <option value="50">  Multifunction Printers</option>
          <option value="164">  Plotters</option>
          <option value="213">  Receipt Printer</option>
          <option value="47"> Printer Accessories</option>
          <option value="190">  Automatic Document Feeder (ADF)</option>
          <option value="48">  Duplexer</option>
          <option value="151">  Formatter Board</option>
          <option value="94">  Fuser</option>
          <option value="127">  Ink Cartridges</option>
          <option value="104">  Maintenance Kits</option>
          <option value="101">  Miscellaneous</option>
          <option value="137">  Paper Tray</option>
          <option value="123">  Rollers</option>
          <option value="228">  Thermal Printers</option>
          <option value="128">  Toner Cartridges</option>
          <option value="191"> Scanner</option>
          <option value="202">  Scanner &amp; Fax Accessories</option>
          <option value="207">
              Scanner Faxes &amp; Copiers Miscellaneous
          </option>
          <option value="192">  Scanners</option>
          <option value="31">Processors</option>
          <option value="82"> Boards</option>
          <option value="255"> Miscellaneous</option>
          <option value="32"> Processor</option>
          <option value="98"> VRM</option>
          <option value="37">Storage Devices</option>
          <option value="159"> External Hard Drives</option>
          <option value="60"> Internal Hard Drives</option>
          <option value="63">  Desktop Hard Drive</option>
          <option value="65">  Laptop Hard Drive</option>
          <option value="117">  Miscellaneous</option>
          <option value="132">  Printer Hard Drive</option>
          <option value="61">  Server Hard Drive</option>
          <option value="105"> Multimedia</option>
          <option value="188">  Firewire Devices</option>
          <option value="178">  Floppy Drives</option>
          <option value="106">  Optical Drives &amp; Burners</option>
          <option value="69"> Network Storage Devices</option>
          <option value="38"> Raid Controllers</option>
          <option value="108">  Cache Battery</option>
          <option value="77">  Controller</option>
          <option value="73">  Fiber Channel Controller</option>
          <option value="205">  Miscellaneous</option>
          <option value="74">  SAS &amp; SATA Controller</option>
          <option value="39">  SCSI Controller</option>
          <option value="281"> Server Hard Drives</option>
          <option value="58"> SSDs</option>
          <option value="274">  Fiber Channel</option>
          <option value="172">  I-O Accelerator Card</option>
          <option value="59">  Solid State Drives</option>
          <option value="70">  SSD &amp; HDD Accessories</option>
          <option value="54"> Storage Array</option>
          <option value="55">  Storage Array</option>
          <option value="71"> Tape</option>
          <option value="264">  Miscellaneous</option>
          <option value="72">  Tape Drive</option>
          <option value="124">  Tape Libraries &amp; Autoloaders</option>
          <option value="78">  Tape Media</option>
          <option value="185"> USB Flash drive</option>
          <option value="44">Audio-Video Devices</option>
          <option value="45"> Audio &amp; Video Conferencing</option>
          <option value="197"> Camera</option>
          <option value="198">  Camera Miscellaneous</option>
          <option value="243">  Web Cams</option>
          <option value="268"> Headphone</option>
          <option value="269">  Headsets &amp; Earbuds</option>
          <option value="276">  Microphones</option>
          <option value="282">  Speakers</option>
          <option value="135"> Monitor</option>
          <option value="273">  KVM LCD &amp; Keyboard Combo</option>
          <option value="136">  Laptop LCD &amp; LED Screen</option>
          <option value="238">  LCD &amp; LED Monitor</option>
          <option value="141">  LCD Monitor</option>
          <option value="162">  LED Monitor</option>
          <option value="156">  Monitor Accessories</option>
          <option value="272">  Touch Screen LCD &amp; LED</option>
          <option value="241"> Sound Card</option>
          <option value="242">  Sound Cards</option>
          <option value="95"> Video and Graphics</option>
          <option value="119">  Others</option>
          <option value="239">  USB Display Adapters</option>
          <option value="96">  Video Card</option>
          <option value="187">  Video Card Accessories</option>
          <option value="40">Accessories</option>
          <option value="278"> PC Tools &amp; Testers</option>
          <option value="41"> Cables</option>
          <option value="200">  Attach Cable</option>
          <option value="125">  Cable Management Arm</option>
          <option value="267">  D-SUB Cables</option>
          <option value="258">  DisplayPort Cables</option>
          <option value="161">  DVI Cables</option>
          <option value="146">  Fiber Optic Cables</option>
          <option value="256">  HDMI Cables</option>
          <option value="261">  IDE Cables</option>
          <option value="42">  KVM Cables</option>
          <option value="158">  Miscellaneous</option>
          <option value="112">  Network Ethernet Cables</option>
          <option value="254">  Phone Cables</option>
          <option value="43">  Power Cables</option>
          <option value="244">  Printer Cables</option>
          <option value="109">  SAS Cables</option>
          <option value="147">  SATA Cables</option>
          <option value="168">  SCSI Cables</option>
          <option value="139">  USB Cables</option>
          <option value="259">  Video Cables</option>
          <option value="79"> Cooling Fans &amp; Heat Sinks</option>
          <option value="209">  Accessories</option>
          <option value="99">  Cooling Fans</option>
          <option value="80">  Fans &amp; Heatsinks Combo</option>
          <option value="154">  Heatsinks</option>
          <option value="237">  Thermal Compund Grease</option>
          <option value="110"> Battery</option>
          <option value="203">  Batteries</option>
          <option value="111">  Laptop Battery</option>
          <option value="160">  Miscellaneous</option>
          <option value="163">  UPS Battery</option>
          <option value="102"> Adapters</option>
          <option value="189">  Connectors</option>
          <option value="170">  Interposer</option>
          <option value="194">  Miscellaneous</option>
          <option value="103">  Power Adapter</option>
          <option value="245">  USB Converters</option>
          <option value="152"> Input Devices</option>
          <option value="210">  Desktop &amp; Laptop Keyboard</option>
          <option value="186">  Desktop Keyboard</option>
          <option value="193">  Laptop Keyboard</option>
          <option value="265">  Misc Input Devices</option>
          <option value="153">  Mouse</option>
          <option value="271">  Wireless Keyboard</option>
          <option value="204"> Miscellaneous</option>
          <option value="183"> External Enclosures</option>
          <option value="214"> Add-On Cards</option>
          <option value="234"> Memory Card</option>
          <option value="155"> Card Reader</option>
          <option value="167"> Covers</option>
          <option value="148"> Controller Panels</option>
          <option value="115"> Phones</option>
          <option value="116">  IP Phones</option>
          <option value="263">  Phones Accessories</option>
        </select>
        <input type="text" placeholder="Search for a product" />
        <button>
          <FiSearch />
        </button>
      </div>

      <div className={styles.navBarLeft}>
        <div className={styles.navBarLeftReviewSec}>
          <h3 className="text-center ">Excellent</h3>
          <Image
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            alt="Reviews"
            width={100}
            height={100}
          />
          <span>
            Based on
            <a href="#" className="border-b">
              18 Reviews
            </a>
          </span>
        </div>
        <div className={`${styles.navBarLeftContactSec}  `}>
          <FiUser size={20} />
          <div>
            <span>
              <a href="#">SignIn</a>
            </span>
            |
            <span>
              <a href="#">Join</a>
            </span>
          </div>
        </div>
        <div className={styles.navBarLeftCartSec}>
          <FiShoppingCart size={20} />
          <span > 
            <a href="#">My Cart</a>
          </span>
          {/* {cartCount === 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          )} */}
        </div>
      </div>
    </nav>
  );
}
