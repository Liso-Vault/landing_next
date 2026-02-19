import * as ga from "../lib/ga";

export const Hero = ({ refDownload, refFeatures }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    ga.event({
      action: "scroll to download",
      params: {
        component: "hero",
        element: "get started button",
      },
    });
  }

  function scrollToFeaturesSection(params) {
    refFeatures.current.scrollIntoView({ behavior: "smooth" });

    ga.event({
      action: "scroll to features",
      params: {
        component: "hero",
        element: "features button",
      },
    });
  }

  return (
    <div className="">
      <div className="max-w-[1000px] w-full md:mt-[100px] mt-[40px] mx-auto text-center flex flex-col px-10 space-y-5">
        <h1 className="txt-gradient md:text-7xl sm:text-5xl text-4xl font-bold ">
          The Crypto-Secured Password Manager & 2FA Authenticator
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-2xl">
          Secure your digital life with Liso's military-grade encryption.
          Manage passwords, generate 2FA tokens, and protect your crypto seeds—all in one zero-knowledge vault.
        </p>
        <p className="text-gray-700 dark:text-gray-200 font-bold text-lg">
          Your keys, your data, your fortress.
        </p>
        <div className="flex gap-2 md:gap-5 flex-wrap mx-auto">
          <button className="btn-elevated w-[200px]" onClick={scrollToDownloadSection}>
            Get Started
          </button>
          <button className="btn-outlined w-[200px]" onClick={scrollToFeaturesSection}>
            Features
          </button>
        </div>
      </div>
    </div>
  );
};