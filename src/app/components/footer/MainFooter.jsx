import React from "react";
import FooterRight from "./FooterRight";
import FooterLeft from "./FooterLeft";
import FooterBottom from "./FooterBottom";

const MainFooter = () => {
  return (
    <>
      <main className="flex justify-around flex-col bg-[#c6c6c6]  p-[3rem] sm:flex-wrap sm:flex-row md:flex-wrap md:flex-row   lg:flex-nowrap ">
        <FooterLeft />
        <FooterRight />
      </main>
      <FooterBottom />
    </>
  );
};

export default MainFooter;
