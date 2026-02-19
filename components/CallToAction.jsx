import * as ga from "../lib/ga";

import Image from "next/image";
import Logo from "../assets/logo.png";

export const CallToAction = ({ refDownload }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    ga.event({
      action: "scroll to download",
      params: {
        component: "call to action",
        element: "download button",
      },
    });
  }

  return (
    <div className="p-10 max-w-[800px] mx-8 md:mx-20 lg:mx-auto space-y-5 card bg-black text-center">
      <div className="pr-3 w-[200px] mx-auto">
        <Image src={Logo} alt="Liso - Encrypted & Private Vault" />
      </div>
      <h2 className="text-3xl font-bold text-center txt-gradient-2">
        Take Control of Your Digital Privacy
      </h2>
      <h3 className="text-xl text-center text-gray-200">
        Join thousands of users who trust Liso with their most sensitive data.
        Start your journey to total internet security today.
      </h3>
      <button
        className="btn-elevated w-[200px] md:w-[250px]"
        onClick={scrollToDownloadSection}
      >
        Free Download
      </button>
    </div>
  );
};
