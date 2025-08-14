"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { RiMenu2Fill } from "react-icons/ri";
import MenuBanner from "@/public/HeroImage/MenuBanner.webp";
import { IoChevronForward } from "react-icons/io5";

interface INavBarMobileContainerProps {}
const links = [
  { label: "ÜBER UNS", href: "about" },
  { label: "LEISTUNGEN", href: "leistungen" },
  { label: "ANSPRECHPARTNER", href: "team" },
  { label: "REFERENZEN", href: "referzen" },
  { label: "STANDORT", href: "kontakt" },
];
function NavBarMobileContainer(props: INavBarMobileContainerProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu2Fill className="w-[2rem] h-[2rem]" />
      </SheetTrigger>
      <SheetContent className="[&>button]:hidden border-none bg-white p-3 text-black w-[100dvw] overflow-y-auto sm:min-w-[60dvw] 2xl:min-w-[25%]">
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}

        <div>
          <Image
            alt="Menu Banner - MCI"
            className="w-[90dvw] aspect-auto rounded"
            src={MenuBanner}
          ></Image>
        </div>
        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <Link
              className="py-5 text-center border-b flex justify-between p-3 items-center   text-xl"
              href={link.href}
              key={index}
            >
              {link.label}
              <IoChevronForward className="w-5 h-5"></IoChevronForward>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default NavBarMobileContainer;
