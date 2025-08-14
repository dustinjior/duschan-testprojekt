import Image from "next/image";
import NavTopComponent from "./NavTopComponent";
import Logo from "@/public/Logo/MCI_Isoliertechnik_Logo.webp";
import Link from "next/link";
import NavBarMobileContainer from "./NavBarMobileContainer";

interface INavBarContainerProps {}

const links = [
  { label: "ÜBER UNS", href: "about" },
  { label: "LEISTUNGEN", href: "leistungen" },
  { label: "ANSPRECHPARTNER", href: "team" },
  { label: "REFERENZEN", href: "referzen" },
  { label: "STANDORT", href: "kontakt" },
];

function NavBarContainer(props: INavBarContainerProps) {
  return (
    <section>
      <NavTopComponent></NavTopComponent>

      <MobileNavBar></MobileNavBar>
      <DesktopNavBar></DesktopNavBar>
    </section>
  );
}

function MobileNavBar() {
  return (
    <nav className="lg:hidden pt-5 gap-5 flex mx-auto justify-center items-center">
      <div className="relative w-[30dvw] aspect-[1275/470]">
        <Image
          sizes="30dvw"
          fill
          src={Logo}
          alt="MCI Isoliertechnik Logo"
        ></Image>
      </div>
      <NavBarMobileContainer></NavBarMobileContainer>
    </nav>
  );
}

function DesktopNavBar() {
  return (
    <nav className="hidden lg:flex pt-3">
      {" "}
      <div className="max-w-[70dvw] gap-4 mx-auto flex items-center justify-center">
        {" "}
        <div className="relative w-[10dvw] aspect-[1275/470]">
          <Image
            sizes="10dvw"
            fill
            src={Logo}
            alt="MCI Isoliertechnik Logo"
          ></Image>
        </div>
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default NavBarContainer;
