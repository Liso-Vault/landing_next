import * as ga from "../lib/ga";

import { Apple, GooglePlay, Windows } from "iconsax-react";

function gaTrackEvent(data) {
  ga.event({
    action: "initiate download",
    params: {
      component: "download",
      element: data,
    },
  });
}

export const Download = ({ refDownload }) => {
  return (
    <div
      className="p-10 max-w-[1000px] mx-8 md:mx-20 lg:mx-auto space-y-5 bg-black card"
      ref={refDownload}
    >
      <h2 className="text-3xl font-bold text-center txt-gradient-2">
        Download Now
      </h2>
      <h3 className="text-xl text-center text-gray-300">
        No credit card or sign up is required to get started. free.
      </h3>
      <div className="flex flex-wrap items-center gap-5 text-white">
        <a
          href="https://apps.apple.com/us/app/liso-password-manager/id1621225567"
          onClick={gaTrackEvent("apple")}
          className="btn-elevated flex justify-center w-[250px]"
          target="_blank"
          rel="noreferrer"
        >
          <Apple variant="Bold" className="mr-2" /> iPhone / iPad / Mac
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.liso.app"
          onClick={gaTrackEvent("android")}
          className="btn-elevated flex justify-center w-[250px]"
          target="_blank"
          rel="noreferrer"
        >
          <GooglePlay variant="Bold" className="mr-2" /> Android
        </a>
        <a
          href="https://github.com/Liso-Vault/app/releases/download/1.0.0%2B42/Liso_v1.0.0+42-Windows.exe"
          onClick={gaTrackEvent("windows")}
          className="btn-elevated flex justify-center w-[250px]"
          target="_blank"
          rel="noreferrer"
        >
          <Windows variant="Bold" className="mr-2" /> Windows
        </a>
      </div>
    </div>
  );
};
