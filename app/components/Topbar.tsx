"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button, Image, Link } from "@heroui/react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Topbar() {
  const { t, i18n: i18nextInstance } = useTranslation();

  return (
    <Navbar>
      <NavbarBrand>
        <div className="flex gap-2 items-center">
          <div className="shadow-[rgba(0,_0,_0,_0.2)_0px_0px_50px] rounded-[15px]">
            <div className="border-[0.15rem] border-white">
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
          </div>
          <p className="font-bold text-inherit text-2xl">{t("general.name")}</p>
          <LanguageSwitcher />
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            {t("topbar.first")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {t("topbar.second")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {t("topbar.third")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            {t("topbar.fourth")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="bg-orange-500 text-white"
            radius="full"
            startContent={
              <DocumentArrowDownIcon className="w-5 h-5 stroke-2" />
            }
            onPress={() =>
              window.open(
                "/cv/CV-" + i18nextInstance.language + "_v2.pdf",
                "_blank",
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
