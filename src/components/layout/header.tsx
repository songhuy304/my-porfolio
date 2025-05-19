"use client";

import {
  IconArrowUp,
  IconBrandGithub,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Logo } from "../svg/logo";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const links = [
  {
    title: "All",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Projects",
    href: "/projects",
    isComingSoon: true,
  },
  {
    title: "About",
    href: "/about",
    isComingSoon: true,
  },
];

const pathNameDisableHeaderScroll = [""];

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pathname = usePathname();

  const isDisableHeaderScroll = pathNameDisableHeaderScroll.includes(pathname);

  return (
    <>
      <nav className="animate-fadeInDownNO fixed inset-x-0 top-2.5 z-5000 mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pr-4 lg:top-4 lg:px-0">
        <Link
          className="animate-fadeInLeft size-8 p-1 z-5000 delay-200 md:size-9"
          href="/"
        >
          <Image src={"/logo.svg"} alt="" width={24} height={24} />
        </Link>
        <nav className="group/navigation-menu flex-1 items-center justify-center absolute top-1/2 left-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 rounded-full  md:flex">
          <div className="relative">
            <ul className="group backdrop-blur-md flex-1 list-none items-center justify-center gap-1 relative hidden rounded-full border border-white/10 bg-white/5 px-1.5 py-1 md:flex">
              {links.map((link) => (
                <HeaderLink
                  key={link.title}
                  title={link.title}
                  href={link.href}
                />
              ))}

              <li data-slot="navigation-menu-item" className="relative">
                <button
                  data-slot="button"
                  className="items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs has-[>svg]:px-3 relative inline-block h-full cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-light whitespace-nowrap text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white/90"
                >
                  Contact me
                  <div className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white opacity-30 blur-sm"></div>
                </button>
              </li>
            </ul>
          </div>
          <div className="absolute top-full left-0 isolate z-50 flex justify-center"></div>
        </nav>
        <div className="flex items-center gap-2 z-5000">
          <a
            href={"https://github.com/huydev24"}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <IconBrandGithub />
          </a>
          <ModeToggle />

          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border size-10 rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 sm:hidden"
              >
                <IconMenu2 />
                <span className="sr-only">Menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="min-h-dvh">
              <DrawerHeader className="flex justify-between">
                <DrawerTitle className="flex items-center gap-2">
                  <Logo className="size-14" />
                  huydev.id.vn
                </DrawerTitle>
                <DrawerClose asChild className="self-end -translate-y-14 z-50">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="size-8"
                  >
                    <IconX />
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              <div className="px-6 flex flex-col gap-4 z-5000">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="flex items-center gap-2 font-medium text-xl"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    {link.title}
                    {link.isComingSoon && (
                      <span className="text-sm bg-blue-300/10 text-blue-500 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>

      {isDisableHeaderScroll && <ScrollToTopButton />}
    </>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-10 !bg-zinc-900/80 backdrop-blur-md rounded-xl p-2 hover:scale-110 duration-300 fixed bottom-4 right-8 md:right-20 z-[9999]"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <IconArrowUp className="text-white" />
    </Button>
  );
};

const HeaderLink = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname() || "/";
  const isActive = href === pathname;
  return (
    <li data-slot="navigation-menu-item" className="relative">
      <Link
        className="focus:text-accent-foreground data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4 inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
        href={href}
      >
        {title}
      </Link>

      {isActive && (
        <div className="absolute -z-10 inset-0 w-full rounded-full bg-white/10">
          <div className="bg-white absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
            <div className="bg-white/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
            <div className="bg-white/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
            <div className="bg-white/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"></div>
          </div>
        </div>
      )}
    </li>
  );
};
