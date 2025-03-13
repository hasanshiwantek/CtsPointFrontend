import React from "react";
import styles from "@/style/Header.module.css";
import Link from "next/link";
const TopHeader = () => {
  return (
    <>
      <div id={styles.container}>
        <div className={styles.headerSec}>
          <div className={styles.headerContactSec}>
            <ul>
              <li>
                <Link href={"/"}>Call +1 (209)-498 4198 </Link>
              </li>
              <li>
                <Link href={"/"}>sales@ctspoint.com</Link>
              </li>
            </ul>
          </div>
          <div className={styles.headerText}>
            <span>USA Stock and most items are ready to ship*</span>
          </div>
          <div className={styles.contactSec}>
            <ul>
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/"}>About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
