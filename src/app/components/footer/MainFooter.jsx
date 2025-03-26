import React from "react";
import FooterRight from "./FooterRight";
import FooterLeft from "./FooterLeft";
import FooterBottom from "./FooterBottom";
import styles from "@/style/Footer/Footer.module.css";

const MainFooter = () => {
  return (
    <>
      <main
        className={`${styles.mainFooterContainer}  bg-[#c6c6c6]  p-[3rem] `}
      >
        <FooterLeft />
        <FooterRight />
      </main>
      <FooterBottom />
    </>
  );
};

export default MainFooter;
