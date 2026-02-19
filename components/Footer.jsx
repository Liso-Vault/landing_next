import Link from "next/link";

export const Footer = () => {
  return (
    <div className="p-10 text-sm text-center text-gray-400">
      <div className="flex flex-wrap justify-center gap-5 p-10">
        <LinkNewTab
          data={{
            url: "https://liso.super.site/giveaway",
            label: "Free PRO",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app",
            label: "GitHub",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://discord.com/invite/d4EehG5qr3",
            label: "Discord",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/FAQS.md",
            label: "FAQs",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/CHANGELOG.md",
            label: "Changelog",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/ROADMAP.md",
            label: "Roadmap",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/SECURITY.md",
            label: "Security",
          }}
        />
        <a
          href="mailto:dev@liso.dev"
          className="text-sm text-gray-700 dark:text-gray-300 hover:text-[#02f297] hover:underline"
        >
          Contact
        </a>
        <Link href="/terms" className="text-gray-700 dark:text-gray-300 hover:underline hover:text-[#02f297] text-sm">
          Terms of Use
        </Link>
        <Link href="/privacy" className="text-gray-700 dark:text-gray-300 hover:underline hover:text-[#02f297] text-sm">
          Privacy Policy
        </Link>
      </div>
      <p className="mx-auto">All rights reserved © 2022</p>
      <p className="mx-auto">
        Created by
        <LinkNewTab
          data={{
            url: "https://twitter.com/oliverbytes",
            label: " Oliver Martinez",
            color: "text-gray-700 dark:text-white",
          }}
        />
      </p>
    </div>
  );
};

export const LinkNewTab = ({ data }) => {
  return (
    <a
      href={data.url}
      className={`${data.color || "text-gray-700 dark:text-gray-300"
        } hover:underline hover:text-[#02f297] text-sm`}
      target="_blank"
      rel="noreferrer"
    >
      {data.label}
    </a>
  );
};
