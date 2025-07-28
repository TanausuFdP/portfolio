"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Button, Image, Link } from "@heroui/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Topbar() {
  const { t, i18n: i18nextInstance } = useTranslation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [topOffset, setTopOffset] = useState(80);

  useEffect(() => {
    const sectionIds = [
      t("topbar.first"),
      t("topbar.second"),
      t("topbar.third"),
      t("topbar.fourth"),
    ];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [t]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffset = Math.max(0, 80 - scrollY);

      setTopOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className="hidden md:flex"
        classNames={{ wrapper: "max-w-[1200px]" }}
        isBordered={topOffset === 0}
        shouldHideOnScroll={false}
        style={{
          position: "fixed",
          paddingTop: `${topOffset}px`,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: topOffset > 0 ? "1024px" : undefined,
          maxWidth: "100vw",
          transition: "padding-top, width 0.3s ease",
        }}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarBrand className="hidden md:flex">
          <div className="flex gap-2 items-center">
            <div className="border-[2px] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.2)_0px_0px_20px] rounded-[13px] overflow-hidden">
              <div className="w-[32px] h-[32px]">
                <Image
                  alt="Profile photo"
                  height="56"
                  radius="none"
                  src="/profile.jpeg"
                  width="56"
                />
              </div>
            </div>
            <p className="font-bold text-inherit text-2xl">
              {t("general.name")}
            </p>
          </div>
        </NavbarBrand>

        <NavbarContent
          className="gap-6 font-quicksand hidden md:flex"
          justify="center"
        >
          {[
            t("topbar.first"),
            t("topbar.second"),
            t("topbar.third"),
            t("topbar.fourth"),
          ].map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link
                className={
                  activeSection === item
                    ? "text-primary font-semibold underline underline-offset-[6px] text-lg"
                    : "text-foreground font-[500] text-lg"
                }
                color="foreground"
                href={"#" + item}
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <LanguageSwitcher />
          <NavbarItem>
            <Button
              className="text-md gap-1"
              color="primary"
              radius="full"
              size="sm"
              startContent={
                <ArrowDownCircleIcon className="w-5 h-5 stroke-2" />
              }
              variant="shadow"
              onPress={() =>
                window.open(
                  "/cv/CV-" + i18nextInstance.language + "_v2.pdf",
                  "_blank"
                )
              }
            >
              {t("general.cv")}
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Navbar isBordered className="md:hidden">
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="md:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit text-lg">
              {t("general.name")}
            </p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="gap-1" justify="end">
          <NavbarItem>
            <Button
              className="text-md gap-1"
              color="primary"
              radius="full"
              size="sm"
              startContent={
                <ArrowDownCircleIcon className="w-5 h-5 stroke-2" />
              }
              variant="shadow"
              onPress={() =>
                window.open(
                  "/cv/CV-" + i18nextInstance.language + "_v2.pdf",
                  "_blank"
                )
              }
            >
              {t("general.cv")}
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="gap-8 font-poppins">
          {[
            t("topbar.first"),
            t("topbar.second"),
            t("topbar.third"),
            t("topbar.fourth"),
          ].map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={
                  activeSection === item
                    ? "text-primary font-semibold underline underline-offset-[6px] text-lg"
                    : "text-foreground font-[500] text-lg"
                }
                color="foreground"
                href={"#" + item}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="font-500 absolute bottom-10 left-0 w-full px-5">
            <LanguageSwitcher />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
