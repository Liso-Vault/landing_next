import React, { useEffect, useRef } from "react";
import Head from "next/head";

// COMPONENTS
import { FeatureRow } from "../components/FeatureRow";
import { Hero } from "../components/Hero";
import { Mockup } from "../components/Mockup";
import { NavBar } from "../components/NavBar";
import { Spacer } from "../components/Spacer";
import { Download } from "../components/Download";
import { Footer } from "../components/Footer";
import { FeatureGrid } from "../components/FeatureGrid";
import { CallToAction } from "../components/CallToAction";
import { Pricing } from "../components/Pricing";

// ICONS
import {
  Airplane,
  Code1,
  Cpu,
  Data,
  Devices,
  DocumentCloud,
  Edit,
  FingerCricle,
  Health,
  Key,
  Lock,
  Moon,
  PasswordCheck,
  RulerPen,
  Share,
  ShieldTick,
  Strongbox2,
} from "iconsax-react";

export default function Home() {
  // Google Analytics
  useEffect(() => {
    // ReactGA.initialize("UA-184101390-1");
  }, []);

  const DownloadSectionRef = useRef(null);
  const FeaturesSectionRef = useRef(null);
  const PricingSectionRef = useRef(null);

  const title = "Liso Password Manager";
  const description =
    "Liso is an open-source and encrypted password manager, digital vault, and form filler that's designed to secure your data using modern Web3 technologies. Available on iPhone, iPad, Mac, Android, and Windows.";

  return (
    <div className="bg-gradient">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta name="description" content={description} />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/opengraph.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="liso.dev" />
        <meta property="twitter:url" content="https://liso.dev/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/opengraph.jpg" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Open Source & Encrypted Password Manager | Liso</title>
      </Head>

      <NavBar refDownload={DownloadSectionRef} refPricing={PricingSectionRef} />
      <Hero refDownload={DownloadSectionRef} refFeatures={FeaturesSectionRef} />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <Mockup />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <FeatureRow
        refFeatures={FeaturesSectionRef}
        data={{
          title: "Access and manage your passwords on any device",
          body: "Liso is available for download on iPhone, iPad, Android, Mac, and Windows. Access everything on the go, even when you're offline.",
          image: Devices,
          subFeatures: [
            {
              title: "Fast & Reliable Syncing",
              body: "Liso automatically syncs your vault. Or manually sync with a single click of a button.",
            },
          ],
        }}
      />
      <FeatureRow
        data={{
          reversed: true,
          title: "Secure and easy sharing",
          body: "Conveniently share your vault and files with your friends, colleagues, or family. Worry free.",
          image: Share,
          subFeatures: [
            {
              title: "AES-256 Encryption",
              body: "Liso uses the Advanced Encryption Standard + CBC with PKCS7 Padding to protect your vault and files. It means your data is always safe and accessible only by you.",
            },
          ],
        }}
      />
      <FeatureRow
        data={{
          title: "Powered by Web3 Technology",
          body: "Liso is designed and built with modern Web3 technology. It is the 3rd generation of the evolution of web technologies. It also allows your vault to be bullet-proof from hackers' data leakage.",
          image: ShieldTick,
          subFeatures: [
            {
              title: "Zero Sign-Up with Zero-Knowledge",
              body: "Emails, Phone Numbers, and even Usernames are a thing of the past with Liso. None of that is required to get set up.",
            },
            {
              title: "Trustless & Censorship Resistant",
              body: "There's no central authority that you need to trust your data. Not even us developers. Only you and yourself have the key to decrypt and access your vault.",
            },
            {
              title: "Crypto Wallet - Built-in",
              body: "Conveniently store and manage supported cryptocurrencies and NFTs. All secured and built-in to Liso.",
            },
          ],
        }}
      />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <Download refDownload={DownloadSectionRef} />
      <FeatureGrid
        data={[
          {
            title: "Autofill",
            body: "Conveniently autofill and save your credentials effortlessly (Android).",
            image: RulerPen,
          },
          {
            title: "Self Hostable",
            body: "Use your S3 provider config to self-host syncing of your vaults.",
            image: Data,
          },
          {
            title: "Works Offline",
            body: "Whether you're connected or not to the internet. Liso just works out of the box.",
            image: Airplane,
          },
          {
            title: "Biometric Auth",
            body: "Fast and secure access to your vault with Fingerprint or Face biometrics support.",
            image: FingerCricle,
          },
          // {
          //   title: "Sync Devices",
          //   body: "Enjoy automatic syncing between all your devices",
          //   image: Refresh,
          // },
          {
            title: "Native App",
            body: "Liso is not just another web app. It's built with native technologies to make it super-fast and efficient.",
            image: Cpu,
          },
          {
            title: "Generate Passwords",
            body: "Quickly generate long and strong passwords that no one can easily guess.",
            image: Lock,
          },

          // {
          //   title: "Shared Vaults",
          //   body: "Effortlessly share your items with other people",
          //   image: Share,
          // },
          {
            title: "Encryption Tool",
            body: "Protect files with military-grade encryption before sending them to friends or co-workers.",
            image: ShieldTick,
          },
          {
            title: "Decentralized Storage",
            body: "Upload photos, videos, documents, and files with automatic encryption to our secure & decentralized cloud storage.",
            image: DocumentCloud,
          },
          // {
          //   title: "Zero-Knowledge",
          //   body: "No phone numbers, emails, or personal identifiable information is required to sign up",
          //   image: Book,
          // },
          {
            title: "Open Source",
            body: "Ensure the integrity and security by self-auditing and verifying the code.",
            image: Code1,
          },
          // {
          //   title: "Cross Platform",
          //   body: "Available on iPhone, iPad, MacOS, Android, and Windows",
          //   image: Devices,
          // },
          {
            title: "Password Health",
            body: "Monitor and update weak/re-used passwords.",
            image: Health,
          },
          {
            title: "Passphrase Generator",
            body: "Generate a 12 or 24-word mnemonic seed phrase for your Crypto Wallets.",
            image: Key,
          },
          {
            title: "OTP Authenticator",
            body: "Securely store and generate 2FA codes for your accounts, apps, and websites.",
            image: PasswordCheck,
          },
          // {
          //   title: "Crypto Wallet",
          //   body: "Securely store supported cryptocurrencies and NFTs with our built-in wallet",
          //   image: Wallet,
          // },
          {
            title: "Unlimited Vaults",
            body: "Keep everything organized with separate vaults for work, personal, or family.",
            image: Strongbox2,
          },
          {
            title: "Themes",
            body: "Switch to Dark or Light mode or let the system choose automatically.",
            image: Moon,
          },
          {
            title: "Customizable",
            body: "Create custom fields, categories, and vaults for better organization. Liso also supports the re-ordering of Form Fields for more flexibility.",
            image: Edit,
          },
        ]}
      />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <Pricing
        refPricing={PricingSectionRef}
        refDownload={DownloadSectionRef}
      />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <CallToAction refDownload={DownloadSectionRef} />
      <Spacer classes="h-[20px]" />
      <Footer />
    </div>
  );
}
