export const Footer = () => {
  return (
    <div className="p-10 text-sm text-center text-gray-400">
      <div className="flex flex-wrap justify-center gap-5 p-10">
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
          className="text-sm text-white hover:text-green-200 hover:underline"
        >
          Contact
        </a>
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/TERMS.md",
            label: "Terms of Use",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/PRIVACY.md",
            label: "Privacy Policy",
          }}
        />
      </div>
      <p className="mx-auto">All rights reserved © 2022</p>
      <p className="mx-auto">
        Created by
        <LinkNewTab
          data={{
            url: "https://twitter.com/oliverbytes",
            label: " Oliver Martinez",
            color: "text-[#02f297]",
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
      className={`${
        data.color || "text-white"
      } hover:underline hover:text-[#02f297] text-sm`}
      target="_blank"
      rel="noreferrer"
    >
      {data.label}
    </a>
  );
};
