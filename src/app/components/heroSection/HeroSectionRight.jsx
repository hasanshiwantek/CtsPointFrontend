import React from "react";
import styles from "@/style/Home/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import productImg1 from "../../../../public/DellProduct1.jpg";
import productImg2 from "../../../../public/DellProduct2.jpg";

const HeroSectionRight = () => {
  return (
    <>
      <div className={`${styles.heroRightContainer}`}>
        <div className={styles.rightHeroSec}>
          <h1 className="text-[#323232]">Special Offers</h1>
          <div className={styles.productCard}>
            <Link href={"#"}>
            <Image src={productImg1} width={200} height={200} alt="productImage"/>
            </Link>
            <h2>DELL</h2>
            <Link href={"#"}>
              Y4C5N2048NZ - Dell - N2048 48-Port + 2-Port SFP+ Layer 2 Switch
            </Link>
            <span>$562.07</span>
          </div>
          <div className={styles.productCard}>
            <Link href={"#"}>
            <Image src={productImg2} width={200} height={200} alt="productImage"/>
            </Link>
            <h2>DELL</h2>
            <Link href={"#"}>
              Y05NF - Dell - N2248X-ON 48-Port + 6-Port SFP28 QSFP+ Layer 3
            </Link>
            <span>$3,248.97</span>
          </div>
          <span><Link href={"#"}> View More </Link></span>
        </div>
      </div>
    </>
  );
};

export default HeroSectionRight;
