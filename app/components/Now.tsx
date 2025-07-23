"use client";

import { Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Now() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto" id={t("topbar.second")}>
      <h2 className="text-xl font-semibold text-center">
        {t("now.title_first")}{" "}
        <span className="text-primary">{t("now.title_second")}</span>
        {t("now.title_third")}
      </h2>
      <div className="flex flex-wrap justify-center mt-5 gap-5">
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px]">
          <div className="border-[0.35rem] border-white">
            <div className="w-[530px] h-[256px] relative overflow-hidden">
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="530"
              />
            </div>
          </div>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px]">
          <div className="border-[0.35rem] border-white">
            <div className="w-[256px] h-[256px]">
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </div>
          </div>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px]">
          <div className="border-[0.35rem] border-white">
            <div className="w-[256px] h-[256px]">
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </div>
          </div>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px]">
          <div className="border-[0.35rem] border-white">
            <div className="w-[256px] h-[256px]">
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </div>
          </div>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px]">
          <div className="border-[0.35rem] border-white">
            <div className="w-[256px] h-[256px]">
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
