"use client";
import { Chip, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t, i18n: i18nextInstance } = useTranslation();

  return (
    <div
      className={`${
        i18nextInstance.language === "en" ? "w-[40rem]" : "w-[43rem]"
      } max-w-full mx-auto`}
      id={t("topbar.first")}
    >
      <div className="font-semibold text-[1.25rem] sm:text-[2.5rem]">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1 sm:gap-2">
          <span className="opacity-30">{t("welcome.first")}</span>
          <div className="border-[0.2rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.25)_0px_0px_30px] rounded-[22px] overflow-hidden hidden sm:block">
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
          <span>{t("welcome.second")}</span>
          <span className="opacity-30">{t("welcome.third")}</span>
          <span className="ml-2">{t("welcome.fourth")}</span>
          <span className="opacity-30">{t("welcome.fifth")}</span>
          <span className="text-primary ml-2">{t("welcome.sixth")}</span>
          <div className="sm:pl-5 flex items-center pt-5 sm:pt-0">
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
