import HeroBanner from "@/public/HeroImage/Hero_Banner_MCI_Isoliertechnik.webp";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import HeroButton from "./HeroButton";
interface IHeroSectionContainerProps {}

function HeroSectionContainer(props: IHeroSectionContainerProps) {
  return (
    <main className="flex w-full min-h-[50dvh]  ">
      <div className="flex items-center justify-center w-full xl:w-1/2 px-4  pt-4">
        <div className="flex flex-col items-start justify-center max-w-xl xl:max-w-[70%]   w-full">
          <div className="flex flex-col xl:flex-row  items-start gap-y-2 xl:items-center  gap-2 mb-2">
            <div className="text-yellow-500 text-2xl flex">
              <FaStar className="w-5 h-5"></FaStar>{" "}
              <FaStar className="w-5 h-5"></FaStar>{" "}
              <FaStar className="w-5 h-5"></FaStar>{" "}
              <FaStar className="w-5 h-5"></FaStar>{" "}
              <FaStar className="w-5 h-5"></FaStar>
            </div>
            <p className="text-lg md:text-xl lg:whitespace-nowrap">
              Über 25 Projekte erfolgreich abgeschlossen{" "}
              <strong>(DE, AT)</strong>
            </p>
          </div>
          <h1 className="text-3xl md:text-5xl 2xl:leading-[3.5rem] xl:text-5xl lg:text-4xl font-bold mb-4">
            Fernwärme perfekt isoliert.
          </h1>
          <p className="text-lg md:text-xl    mb-6">
            Professionelle <strong>Fernwärmeisolierung</strong> und{" "}
            <strong>Leckwarnmessungen</strong> aus einer Hand.
          </p>
          <HeroButton></HeroButton>
        </div>
      </div>{" "}
      <div className="w-[50%] flex">
        <div className=" w-full h-full relative">
          <Image
            src={HeroBanner}
            alt="Hero Banner"
            layout="fill"
            objectFit="cover"
          />{" "}
        </div>
      </div>
    </main>
  );
}

export default HeroSectionContainer;
