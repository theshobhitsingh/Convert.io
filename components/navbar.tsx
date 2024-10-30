// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { LuMenu } from "react-icons/lu";

export default function Navbar({}): any {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className="flex items-center">
        <Image
          alt="Convert.io logo"
          className="w-32 cursor-pointer dark:invert"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F38%2FPAP_logo_variation.png&f=1&nofb=1"
          height={50}
          width={80}
        />
        <span className="ml-2 text-lg font-semibold">𝙲𝚘𝚗𝚟𝚎𝚛𝚝.𝚒𝚘</span>{" "}
        {/* Company name */}
      </Link>
      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">𝐇𝐨𝐦𝐞</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            𝐀𝐛𝐨𝐮𝐭
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            𝐏𝐫𝐢𝐯𝐚𝐜𝐲 𝐏𝐨𝐥𝐢𝐜𝐲
          </Button>
        </Link>
      </div>
      <div className="items-center hidden gap-2 md:flex">
        <ModeToggle />
        <Link href="https://github.com/theshobhitsingh">
          <Button
            variant="default"
            className="items-center hidden gap-2 bg-orange-600 rounded-full w-fit md:flex"
            size="lg"
          >
            <span>My GitHub</span>
            <span className="text-xl">
              <BsGithub />
            </span>
          </Button>
        </Link>
      </div>
      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block p-3 md:hidden">
          <span className="text-2xl text-slate-950 dark:text-slate-200">
            <LuMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col w-full h-full">
                <SheetTrigger asChild>
                  <Link href="/">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      Home
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/about">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      About
                    </Button>
                  </Link>
                </SheetTrigger>
                <SheetTrigger asChild>
                  <Link href="/privacy-policy">
                    <Button
                      variant="link"
                      className="w-full font-semibold text-md"
                    >
                      Privacy Policy
                    </Button>
                  </Link>
                </SheetTrigger>
                <ModeToggle />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
