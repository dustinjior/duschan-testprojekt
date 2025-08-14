import Image from "next/image";
import Icon3 from "@/public/Icons/Measure.png";
import Icon2 from "@/public/Icons/austriaflag.png";
import Icon1 from "@/public/Icons/monitoring.webp";

interface INavTopComponentProps {}

function NavTopComponent(props: INavTopComponentProps) {
  return (
    <section className="bg-secColor  ">
      <div className="max-w-[70dvw] overflow-x-clip py-3 font-[500] mx-auto flex items-center justify-between">
        <div className="items-center gap-2 flex justify-center">
          <Image
            className="w-[2rem] h-[2rem]"
            alt="MCI - Icon Professionelle Fernwärmeisolierung"
            src={Icon1}
          ></Image>{" "}
          <span>Professionelle Fernwärmeisolierung</span>
        </div>{" "}
        <div className="items-center gap-2 flex justify-center">
          <Image
            className="w-[2rem] h-[2rem]"
            alt="MCI - Icon Österreichisches Unternehmen"
            src={Icon2}
          ></Image>{" "}
          <span>Österreichisches Unternehmen</span>
        </div>{" "}
        <div className="items-center gap-2 flex justify-center">
          <Image
            className="w-[2rem] h-[2rem]"
            alt="MCI - Icon Professionelle Leckwarnmessungen"
            src={Icon3}
          ></Image>{" "}
          <span>Professionelle Leckwarnmessungen</span>
        </div>
      </div>
    </section>
  );
}

export default NavTopComponent;
