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
          Your encrypted, private, and hackproof vault
        </h1>
        <p className="text-gray-600 text-lg md:text-2xl">
          Protect your valuable data from prying eyes. Liso`s secure data vault
          is the perfect place to keep passwords, files, and any other
          information you need to keep safe from unwanted people, hackers, and
          data leaks.
        </p>
        <p className="text-gray-700 font-bold text-lg">Liso is not just a vault but also a superior Password Manager.</p>
        <div className="flex gap-2 md:gap-5 flex-wrap mx-auto">
          <button className="btn-elevated" onClick={scrollToDownloadSection}>
            Get Started
          </button>
          <button className="btn-outlined" onClick={scrollToFeaturesSection}>
            Features
          </button>
        </div>
      </div>
    </div>
  );
};
