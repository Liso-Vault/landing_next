import { useRouter } from "next/router";
import Icon from "../assets/icon.png";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

import * as ga from "../lib/ga";

export const NavBar = ({ refDownload, refPricing }) => {
  const router = useRouter();

  function scrollToDownloadSection(params) {
    if (refDownload?.current) {
      refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      router.push("/#download");
    }

    ga.event({
      action: "scroll to download",
      params: {
        component: "navbar",
        element: "free download button",
      },
    });
  }

  function scrollToPricingSection(params) {
    if (refPricing?.current) {
      refPricing.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/#pricing");
    }

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
      <Link href="/" className="flex items-center cursor-pointer">
        <div className="pr-3 min-w-[50px] w-[100px] cursor-pointer">
          <Image src={Icon} alt="Open Source Encrypted & Private Vault" />
        </div>
        <h2 className="w-full text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 cursor-pointer">Liso</h2>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <ThemeSwitch />
        <button className="btn-text text-sm md:text-base px-2 md:px-4 hidden sm:block" onClick={scrollToPricingSection}>
          Pricing
        </button>
        <button
          className="btn-elevated text-xs md:text-base min-w-[100px] md:min-w-[130px] w-auto md:w-[220px] px-3 md:px-6 py-2"
          onClick={scrollToDownloadSection}
        >
          Free Download
        </button>
      </div>
    </div>
  );
};
