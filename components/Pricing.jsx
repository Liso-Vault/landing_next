import React from "react";
import * as ga from "../lib/ga";

// ICONS
import { BsCheck2, BsCheck2Circle } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

import {
  Airplane,
  Box,
  Box1,
  BoxTick,
  Category,
  Data,
  Devices,
  Document,
  DocumentCloud,
  DocumentUpload,
  Driver,
  FingerCricle,
  Health,
  Lock,
  MessageQuestion,
  PasswordCheck,
  RulerPen,
  Share,
  ShieldSecurity,
  ShieldTick,
  Trash,
} from "iconsax-react";

export const Pricing = ({ refPricing, refDownload }) => {
  const proFeatures = [
    {
      icon: Document,
      feature: "Items",
      value: "Unlimited",
    },
    {
      icon: Devices,
      feature: "Devices",
      value: "Unlimited",
    },
    {
      icon: DocumentCloud,
      feature: "Encrypted Files",
      value: "Unlimited",
    },
    {
      icon: Driver,
      feature: "Cloud Storage",
      value: "1GB",
    },
    {
      icon: PasswordCheck,
      feature: "OTP Authenticator",
      value: "included",
    },
    {
      icon: Health,
      feature: "Password Health Monitor",
      value: "included",
    },
    {
      icon: ShieldTick,
      feature: "Protected Items",
      value: "Unlimited",
    },
    {
      icon: Share,
      feature: "Shared Members",
      value: "Unlimited",
    },
    {
      icon: ShieldSecurity,
      feature: "File Encryption Tool",
      value: "included",
    },
    {
      icon: BoxTick,
      feature: "Vault Backups",
      value: "200",
    },
    {
      icon: MessageQuestion,
      feature: "Priority Support",
      value: "included",
    },
    {
      icon: Box1,
      feature: "Custom Vaults",
      value: "Unlimited",
    },
    {
      icon: Category,
      feature: "Custom Categories",
      value: "Unlimited",
    },
    {
      icon: Trash,
      feature: "Undo Trash",
      value: "365 Days",
    },
    {
      icon: DocumentUpload,
      feature: "Max Upload Size",
      value: "800MB",
    },
    {
      icon: RulerPen,
      feature: "Autosave + Autofill",
      value: "included",
    },
    {
      icon: Lock,
      feature: "Generate Passwords",
      value: "included",
    },
    {
      icon: FingerCricle,
      feature: "Biometric Auth",
      value: "included",
    },
    {
      icon: Airplane,
      feature: "Offline Mode",
      value: "included",
    },
    {
      icon: Data,
      feature: "Self Hostable",
      value: "included",
    },
  ];

  const freeFeatures = [
    {
      icon: Document,
      feature: "Items",
      value: "100",
    },
    {
      icon: Devices,
      feature: "Devices",
      value: "2",
    },
    {
      icon: DocumentCloud,
      feature: "Encrypted Files",
      value: "5",
    },
    {
      icon: Driver,
      feature: "Cloud Storage",
      value: "100MB",
    },
    {
      icon: PasswordCheck,
      feature: "OTP Authenticator",
      value: "excluded",
    },
    {
      icon: Health,
      feature: "Password Health Monitor",
      value: "excluded",
    },
    {
      icon: ShieldTick,
      feature: "Protected Items",
      value: "5",
    },
    {
      icon: Share,
      feature: "Shared Members",
      value: "2",
    },
    {
      icon: ShieldSecurity,
      feature: "File Encryption Tool",
      value: "excluded",
    },
    {
      icon: BoxTick,
      feature: "Vault Backups",
      value: "2",
    },
    {
      icon: MessageQuestion,
      feature: "Priority Support",
      value: "excluded",
    },
    {
      icon: Box1,
      feature: "Custom Vaults",
      value: "5",
    },
    {
      icon: Category,
      feature: "Custom Categories",
      value: "5",
    },
    {
      icon: Trash,
      feature: "Undo Trash",
      value: "5 Days",
    },
    {
      icon: DocumentUpload,
      feature: "Max Upload File Size",
      value: "80MB",
    },
    {
      icon: RulerPen,
      feature: "Autosave + Autofill",
      value: "included",
    },
    {
      icon: Lock,
      feature: "Generate Passwords",
      value: "included",
    },
    {
      icon: FingerCricle,
      feature: "Biometric Auth",
      value: "included",
    },
    {
      icon: Airplane,
      feature: "Offline Mode",
      value: "included",
    },
    {
      icon: Data,
      feature: "Self Hostable",
      value: "included",
    },
  ];

  return (
    <div ref={refPricing} className="">
      <h2 className="text-4xl md:text-5xl font-bold text-center txt-gradient-3 mb-3 pt-20">
        Simple Pricing
      </h2>
      <h2 className="text-1xl md:text-2xl font-semibold text-center text-gray-700 mb-10 flex justify-center">
        <span>The most affordable price guaranteed</span>
        <BsCheck2Circle color="#27be84" className="w-6 h-6 ml-2 my-auto" />
      </h2>
      <div className="flex gap-10 flex-wrap mx-auto w-fit text-gray-700 justify-center">
        {/* FREE */}
        <PricingHeader
          refDownload={refDownload}
          data={{
            title: "Free",
            subTitle: "No Credit Card Required",
            subTitle2: "NO SIGN-UP REQUIRED",
            price: "$0.0 Forever",
            features: freeFeatures,
          }}
        />
        {/* PRO */}
        <PricingHeader
          refDownload={refDownload}
          data={{
            title: "Liso Pro",
            subTitle: "7 Days Free Trial",
            subTitle2: "30-DAY MONEY-BACK GUARANTEE",
            price: "$0.8 / Month",
            features: proFeatures,
            highlighted: true,
          }}
        />
      </div>
    </div>
  );
};

export const PricingHeader = ({ data, refDownload }) => {
  function scrollToDownloadSection() {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    ga.event({
      action: "scroll to download",
      params: {
        component: "pricing",
        element: data.highlighted ? "pro" : "free" + " button",
      },
    });
  }

  return (
    <div
      className={`${
        data.highlighted
          ? "border-4 border-[#27be84]"
          : "border border-gray-500"
      } rounded-[20px] p-5 space-y-2`}
    >
      <h3 className={`font-bold text-2xl text-[#27be84]`}>{data.title}</h3>
      <h3 className="font-bold text-4xl">{data.price}</h3>
      <h6 className="font-bold text-white card bg-gray-500 w-fit px-5 py-1">
        {data.subTitle}
      </h6>
      <h6 className="text-xs font-semibold text-gray-700">{data.subTitle2}</h6>
      <ul className="space-y-2 py-5">
        {data.features.map((e, i) => (
          <FeatureItem data={e} key={i} />
        ))}
      </ul>
      <button
        className={`${
          data.highlighted ? "btn-elevated" : "btn-outlined"
        } w-full`}
        onClick={scrollToDownloadSection}
      >
        {data.highlighted ? "Redeem your FREE Pro Trial" : "Get Started"}
      </button>
    </div>
  );
};

export const FeatureItem = ({ data }) => {
  var value = data.value;

  if (data.value == "excluded") {
    value = <CgClose color="white" className="w-5 h-5" />;
  } else if (data.value == "included") {
    value = <BsCheck2 color="#27be84" className="w-6 h-6" />;
  }

  return (
    <div className="flex text-sm md:text-base">
      <data.icon size={25} color="#27be84" />
      <span className="ml-5 min-w-[190px] text-gray-700">{data.feature}</span>
      <span className="text-[#27be84] font-semibold mx-auto">{value}</span>
    </div>
  );
};
