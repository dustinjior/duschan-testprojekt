"use client";
import { MdKeyboardArrowRight } from "react-icons/md";

interface IHeroButtonProps {}

function HeroButton(props: IHeroButtonProps) {
  const handleScroll = () => {
    const el = document.getElementById("leistungen");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={handleScroll}
      className="cursor-pointer justify-center flex items-center bg-primaryColor w-full lg:w-fit text-white font-[500] px-8 py-4 lg:px-20 text-lg md:text-xl rounded-full transition-colors hover:bg-primaryColor/90"
    >
      Unsere Leistungen <MdKeyboardArrowRight className="w-[2rem] h-[2rem]" />
    </button>
  );
}

export default HeroButton;
