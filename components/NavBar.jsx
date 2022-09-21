import Icon from "../assets/icon.png";
import Image from "next/image";

import * as ga from "../lib/ga";

export const NavBar = ({ refDownload, refPricing }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    ga.event({
      action: "scroll to download",
      params: {
        component: "navbar",
        element: "free download button",
      },
    });
  }

  function scrollToPricingSection(params) {
    refPricing.current.scrollIntoView({ behavior: "smooth", block: "start" });

    ga.event({
      action: "scroll to pricing",
      params: {
        component: "navbar",
        element: "pricing button",
      },
    });
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1300px] mx-auto px-5">
      <div className="pr-3 min-w-[50px] w-[100px]">
        <Image src={Icon} alt="Liso Password Manager" />
      </div>
      <h1 className="w-full text-3xl md:text-4xl font-bold text-gray-700">Liso</h1>
      <button className="btn-text mr-3" onClick={scrollToPricingSection}>
        Pricing
      </button>
      <button
        className="btn-elevated text-sm md:text-base min-w-[130px] md:w-[220px]"
        onClick={scrollToDownloadSection}
      >
        Free Download
      </button>
    </div>
  );
};
