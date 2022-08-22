import ImgMockup from "../assets/mockup.png";
import Image from "next/image";

export const Mockup = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-10">
      <Image src={ImgMockup} alt="Liso Password Manager" />
    </div>
  );
};
