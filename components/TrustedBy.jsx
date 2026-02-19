import { Cloud, Cup, Like1, Unlimited, Wallet } from "iconsax-react";

export const TrustedBy = () => {
    return (
        <div className="py-10 text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                Trusted by top companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center px-5 opacity-70 grayscale transition-all duration-300 hover:grayscale-0">
                <CompanyLogo icon={Cloud} name="Skyvault" />
                <CompanyLogo icon={Unlimited} name="Infinitech" />
                <CompanyLogo icon={Wallet} name="CryptoGuard" />
                <CompanyLogo icon={Cup} name="BrewSecure" />
                <CompanyLogo icon={Like1} name="SocialSafe" />
            </div>
        </div>
    );
};

const CompanyLogo = ({ icon: Icon, name }) => {
    return (
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Icon variant="Bold" className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl font-bold font-sans">{name}</span>
        </div>
    );
};
