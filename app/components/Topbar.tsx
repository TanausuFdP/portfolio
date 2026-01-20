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
import { Button, Link } from "@heroui/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Topbar() {
  const { t, i18n: i18nextInstance } = useTranslation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = [
      t("topbar.first"),
      t("topbar.second"),
      t("topbar.third"),
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
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [t]);

  return (
    <>
      <Navbar
        className="hidden md:flex !bg-transparent"
        isBlurred={false}
        maxWidth="full"
        shouldHideOnScroll={false}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarBrand className="hidden md:flex">
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-inherit text-xl tracking-[-0.08rem]">
              {t("general.name")}
            </p>
          </div>
        </NavbarBrand>

        <NavbarContent className="gap-6 hidden md:flex" justify="end">
          {[t("topbar.first"), t("topbar.second"), t("topbar.third")].map(
            (item, index) => (
              <NavbarItem key={`${item}-${index}`}>
                <Link
                  className={
                    activeSection === item
                      ? "uppercase text-foreground font-semibold text-lg"
                      : "uppercase text-foreground font-semibold text-lg"
                  }
                  color="foreground"
                  href={"#" + item}
                >
                  {item}
                </Link>
              </NavbarItem>
            ),
          )}
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
                  "/cv/CV-" + i18nextInstance.language + "_v5.pdf",
                  "_blank",
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
