import React from "react";
import styles from "@/style/Footer/Footer.module.css";
import americanExpress from "../../../../public/american-express.png"
import discoverIcon from "../../../../public/discover.svg"
import gPay from "../../../../public/google-pay.svg"
import masterCard from "../../../../public/master-card.svg"
import visaIcon from "../../../../public/visa.svg"

import Image from "next/image";
const FooterBottom = () => {
  return (
    <>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerBottemSec}>
          <div className={styles.copyRightSec}>
            <p className="font-bold">© 2025 CTS Point, Inc.</p>
          </div>
          <div className={styles.paymentSec}>
            <i>
              <Image src={americanExpress} width={50} height={50} alt="paymentIcon"/>
            </i>
            <i>
              <Image src={discoverIcon} width={50} height={50} alt="paymentIcon"/>
            </i>
            <i>
              <Image src={gPay} width={50} height={50} alt="paymentIcon"/>
            </i>
            <i>
              <Image src={masterCard} width={50} height={50} alt="paymentIcon"/>
            </i>
            <i>
              <Image src={visaIcon} width={50} height={50} alt="paymentIcon"/>
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
