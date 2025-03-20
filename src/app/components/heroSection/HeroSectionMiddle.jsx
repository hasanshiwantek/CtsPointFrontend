import React from "react";
import styles from "@/style/Home/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../../../public/heroImage.jpg";
const HeroSectionMiddle = () => {
  return (
    <>
      <div className={`${styles.heroSectionContainer}`}>
        <div className={styles.heroSecMid}>
          <nav className={styles.heroNavBar}>
            <ul>
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>About Us</Link>
              </li>
              <li>
                <Link href={"#"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"#"}>Blog</Link>
              </li>
            </ul>
          </nav>
          <div className={`${styles.heroImageSec} w-full`}>
            <Image
              src={heroImage}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionMiddle;
