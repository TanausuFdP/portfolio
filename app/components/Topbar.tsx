"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button, Image, Link } from "@heroui/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Topbar() {
  const { t, i18n: i18nextInstance } = useTranslation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [topOffset, setTopOffset] = useState(120);

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
      const newOffset = Math.max(0, 120 - scrollY);

      setTopOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      classNames={{ wrapper: "max-w-[1200px]" }}
      isBordered={topOffset === 0}
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
      <NavbarBrand>
        <div className="flex gap-2 items-center">
          <div className="border-[2px] border-white shadow-[rgba(0,_0,_0,_0.2)_0px_0px_20px] rounded-[10px]">
            <div className="w-[32px] h-[32px] rounded-[8px] overflow-hidden">
              <Image
                alt="Profile photo"
                height="56"
                radius="none"
                src="/profile.jpeg"
                width="56"
              />
            </div>
          </div>
          <p className="font-bold text-inherit text-2xl">{t("general.name")}</p>
        </div>
      </NavbarBrand>
      <NavbarContent className="gap-6" justify="center">
        <NavbarItem>
          <Link
            className={
              activeSection === t("topbar.first")
                ? "text-primary font-semibold underline underline-offset-4 text-lg"
                : "text-foreground font-[500] text-lg"
            }
            color="foreground"
            href={"#" + t("topbar.first")}
          >
            {t("topbar.first")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={
              activeSection === t("topbar.second")
                ? "text-primary font-semibold underline underline-offset-4 text-lg"
                : "text-foreground font-[500] text-lg"
            }
            color="foreground"
            href={"#" + t("topbar.second")}
          >
            {t("topbar.second")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={
              activeSection === t("topbar.third")
                ? "text-primary font-semibold underline underline-offset-4 text-lg"
                : "text-foreground font-[500] text-lg"
            }
            color="foreground"
            href={"#" + t("topbar.third")}
          >
            {t("topbar.third")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={
              activeSection === t("topbar.fourth")
                ? "text-primary font-semibold underline underline-offset-4 text-lg"
                : "text-foreground font-[500] text-lg"
            }
            color="foreground"
            href={"#" + t("topbar.fourth")}
          >
            {t("topbar.fourth")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <LanguageSwitcher />
        <NavbarItem>
          <Button
            className="text-md gap-1"
            color="primary"
            radius="full"
            size="sm"
            startContent={<ArrowDownCircleIcon className="w-5 h-5 stroke-2" />}
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
  );
}
