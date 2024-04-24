import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer
      className={` footer w-full flex items-center justify-center p-8 gap-8 flex-col`}
    >
      <Image src={"/logo-white.svg"} alt={"logo"} width={130} height={40} />
      <p className={"text-xs text-center text-white font-normal"}>
        Toronto Steam N’ Clean was started in 1995 and, over the course of the
        next decade, continued to grow and thrive. Over the years, Toronto Steam
        N’ Clean, has become trained and certified in both carpet cleaning and
        water damage restoration by the Institute of Inspection, Cleaning and
        Restoration Certification (IICRC).
      </p>
      <Image
        src={"/payment-methods.png"}
        alt={"logo"}
        width={250}
        height={40}
      />
    </footer>
  );
}

export default Footer;
