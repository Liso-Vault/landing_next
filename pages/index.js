import React, { useRef } from "react";
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
import { TrustedBy } from "../components/TrustedBy";
import { Testimonials } from "../components/Testimonials";

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
  const DownloadSectionRef = useRef(null);
  const FeaturesSectionRef = useRef(null);
  const PricingSectionRef = useRef(null);

  const domain = "liso.dev";
  const url = "https://" + domain;
  const title = "Liso - Encrypted Private Vault";
  const description =
    "Protect your valuable data from prying eyes. Liso's secure data vault is the perfect place to keep passwords, files, and any other data you need to keep safe.";

  return (
    <div className="bg-gradient">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href={url + "/favicon.ico"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={description} />
        <meta name="robots" content="all" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <link rel="apple-touch-icon" href={url + "/apple-touch-icon.png"} />

        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={url + "/opengraph.jpg"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={url + "/opengraph.jpg"} />

        <link rel="manifest" href={url + "/manifest.json"} />
        <title>Encrypted Private Vault | Liso</title>
      </Head>

      <NavBar refDownload={DownloadSectionRef} refPricing={PricingSectionRef} />
      <Hero refDownload={DownloadSectionRef} refFeatures={FeaturesSectionRef} />
      <Spacer classes="h-[30px]" />
      <TrustedBy />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <Mockup />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <FeatureRow
        refFeatures={FeaturesSectionRef}
        data={{
          title: "Manage Passwords & 2FA",
          body: "Stop using weak passwords. Liso generates strong credentials and stores them securely. Plus, replace your authenticator app with our built-in 2FA token generator.",
          image: Devices,
          subFeatures: [
            {
              title: "Integrated 2FA",
              body: "Generate Time-based One-Time Passwords (TOTP) directly within Liso. No need for a separate app.",
            },
          ],
        }}
      />
      <FeatureRow
        data={{
          reversed: true,
          title: "Secure Your Crypto Assets",
          body: "Safely store your recovery phrases, private keys, and cold storage backups in an encrypted vault that only you control.",
          image: Share,
          subFeatures: [
            {
              title: "Seed Phrase Storage",
              body: "Specifically designed fields for 12 and 24-word recovery phrases ensure your crypto assets are never lost.",
            },
          ],
        }}
      />
      <FeatureRow
        data={{
          title: "Built on Web3 Security",
          body: "Leveraging modern cryptographic standards to ensure your data is mathematically impossible to breach without your master key.",
          image: ShieldTick,
          subFeatures: [
            {
              title: "Zero-Knowledge",
              body: "We have zero access to your data. Your vault is decrypted only on your device.",
            },
            {
              title: "Self-Custody",
              body: "Just like a crypto wallet, you own your keys. Your data is yours and yours alone.",
            },
            {
              title: "Unified Digital Vault",
              body: "One secure location for passwords, identity, finance, and crypto.",
            },
          ],
        }}
      />
      <Spacer classes="h-[50px] md:h-[100px]" />
      <Download refDownload={DownloadSectionRef} />
      <FeatureGrid
        data={[
          {
            title: "Seamless Autofill",
            body: "Log in to your favorite apps and websites instantly without typing a thing.",
            image: RulerPen,
          },
          {
            title: "Your Data, Your Infrastructure",
            body: "Prefer to host your own data? Configure your own S3 provider for complete control.",
            image: Data,
          },
          {
            title: "Offline First",
            body: "Access your vault anytime, anywhere. No internet connection required.",
            image: Airplane,
          },
          {
            title: "Biometric Security",
            body: "Unlock your vault instantly using FaceID, TouchID, or Fingerprint.",
            image: FingerCricle,
          },
          {
            title: "Native Performance",
            body: "Built with native technologies for a blazing fast and responsive experience.",
            image: Cpu,
          },
          {
            title: "Strong Password Generator",
            body: "Create uncrackable passwords with customizable length and complexity.",
            image: Lock,
          },
          {
            title: "File Encryption",
            body: "Encrypt sensitive documents and photos before sharing them insecurely.",
            image: ShieldTick,
          },
          {
            title: "Private Cloud Storage",
            body: "Securely store photos, videos, and documents in the encrypted cloud.",
            image: DocumentCloud,
          },
          {
            title: "Auditable & Open Source",
            body: "Our code is open for anyone to inspect. Transparency breeds trust.",
            image: Code1,
          },
          {
            title: "Security Dashboard",
            body: "Identify weak or reused passwords and improve your overall security score.",
            image: Health,
          },
          {
            title: "Crypto Seed Generator",
            body: "Generate and store 12 or 24-word recovery phrases for your wallets.",
            image: Key,
          },
          {
            title: "2FA Authenticator",
            body: "Replace your separate authenticator app with Liso's built-in OTP generator.",
            image: PasswordCheck,
          },
          {
            title: "Unlimited Organization",
            body: "Create unlimited vaults to separate work, personal, and family data.",
            image: Strongbox2,
          },
          {
            title: "Personalized Experience",
            body: "Choose between Light, Dark, or System themes to match your preference.",
            image: Moon,
          },
          {
            title: "Flexible Data Structure",
            body: "Customize your items with custom fields and categories to fit your needs.",
            image: Edit,
          },
        ]}
      />
      <Testimonials />
      {/* <Spacer classes="h-[50px] md:h-[100px]" /> */}
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
