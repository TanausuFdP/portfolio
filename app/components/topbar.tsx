"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Squircle } from "@squircle-js/react";
import { Button, Image, Link } from "@heroui/react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Topbar() {
  const { t } = useTranslation();

  return (
    <Navbar>
      <NavbarBrand>
        <div className="flex gap-2 items-center">
          <div className="shadow-[rgba(0,_0,_0,_0.2)_0px_0px_50px] rounded-[15px] overflow-visible">
            <Squircle
              className="border-[0.15rem] border-white"
              cornerRadius={14}
              cornerSmoothing={1}
            >
              <Squircle
                className="w-[32px] h-[32px]"
                cornerRadius={12}
                cornerSmoothing={0.8}
              >
                <Image
                  alt="Profile photo"
                  height="56"
                  radius="none"
                  src="/profile.jpeg"
                  width="56"
                />
              </Squircle>
            </Squircle>
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
        <NavbarItem>
          <Link color="foreground" href="#">
            {t("topbar.fifth")}
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
          >
            {t("general.cv")}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
