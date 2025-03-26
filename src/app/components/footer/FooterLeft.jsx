import React from "react";
import styles from "@/style/Footer/Footer.module.css";
import { FaFacebookF, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import Link from "next/link";
const FooterLeft = () => {
  return (
    <>
      <div className={styles.footerMailContainer}>
        <div className={styles.footerMailSection}>
          <h1  className="mb-6 font-semibold text-[#002fe1] dark:text-white">Join in Our Mailing List</h1>
          <p>Get the latest updates on new products and upcoming sales</p>
          <div className={styles.mailForm}>
            <input type="email" name="" id="" placeholder="Your Email Address" />
            <button className="btn-primary">Subscribe</button>
          </div>
          <div className={styles.footerIcons}>
              <Link href="https://www.facebook.com" target="_blank">
                <i>
                  <FaFacebookF />
                </i>
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <i>
                  <FaLinkedinIn />
                </i>
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <i>
                  <FaPinterest />
                </i>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLeft;
