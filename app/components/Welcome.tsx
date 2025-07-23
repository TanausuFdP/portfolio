"use client";
import { Chip, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[40rem] mx-auto" id={t("topbar.first")}>
      <div className="font-semibold text-[2.5rem]">
        <div className="flex flex-wrap items-center gap-2 max-w-[42rem]">
          <span className="opacity-30">{t("welcome.first")}</span>
          <div className="shadow-[rgba(0,_0,_0,_0.2)_0px_0px_50px] rounded-[20px] overflow-visible">
            <div className="border-[0.25rem] border-white">
              <div className="w-[56px] h-[56px]">
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
          <span>{t("welcome.second")}</span>
          <span className="opacity-30">{t("welcome.third")}</span>
          <span className="ml-2">{t("welcome.fourth")}</span>
          <span className="opacity-30">{t("welcome.fifth")}</span>
          <span className="text-primary ml-2">{t("welcome.sixth")}</span>
          <div className="pl-5 flex items-center">
            <Chip
              color="success"
              size="lg"
              startContent={
                <div className="mr-2 ">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-success" />
                  </span>
                </div>
              }
              variant="faded"
            >
              <span className="font-[500]">{t("welcome.open_to_work")}</span>
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
}
