import ImgMockup from "../assets/mockup.jpg";
import Image from "next/image";

export const Mockup = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <Image src={ImgMockup} alt="Liso - Encrypted & Private Vault" />
    </div>
  );
};
