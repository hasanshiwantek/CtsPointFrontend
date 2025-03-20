import React from "react";
import FooterRight from "./FooterRight";
import FooterLeft from "./FooterLeft";
import FooterBottom from "./FooterBottom";

const MainFooter = () => {
  return (
    <>
      <main className="lg:flex-row justify-around flex-col bg-[#c6c6c6] p-[3rem] sm:flex-wrap lg:flex-nowrap lg:flex ">
        <FooterLeft />
        <FooterRight />
      </main>
      <FooterBottom/>
    </>
  );
};

export default MainFooter;
