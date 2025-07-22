"use client";

import { Squircle } from "@squircle-js/react";
import { Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Now() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto mt-20">
      <h2 className="text-xl font-semibold text-center">
        {t("now.title_first")}{" "}
        <span className="text-orange-500">{t("now.title_second")}</span>
        {t("now.title_third")}
      </h2>
      <div className="flex flex-wrap justify-center mt-5 gap-5">
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px] overflow-visible">
          <Squircle
            className="border-[0.35rem] border-white"
            cornerRadius={42}
            cornerSmoothing={1}
          >
            <Squircle
              className="w-[530px] h-[256px]"
              cornerRadius={39}
              cornerSmoothing={0.9}
            >
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="530"
              />
            </Squircle>
          </Squircle>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px] overflow-visible">
          <Squircle
            className="border-[0.35rem] border-white"
            cornerRadius={42}
            cornerSmoothing={1}
          >
            <Squircle
              className="w-[256px] h-[256px]"
              cornerRadius={39}
              cornerSmoothing={0.9}
            >
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </Squircle>
          </Squircle>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px] overflow-visible">
          <Squircle
            className="border-[0.35rem] border-white"
            cornerRadius={42}
            cornerSmoothing={1}
          >
            <Squircle
              className="w-[256px] h-[256px]"
              cornerRadius={39}
              cornerSmoothing={0.9}
            >
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </Squircle>
          </Squircle>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px] overflow-visible">
          <Squircle
            className="border-[0.35rem] border-white"
            cornerRadius={42}
            cornerSmoothing={1}
          >
            <Squircle
              className="w-[256px] h-[256px]"
              cornerRadius={39}
              cornerSmoothing={0.9}
            >
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </Squircle>
          </Squircle>
        </div>
        <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[42px] overflow-visible">
          <Squircle
            className="border-[0.35rem] border-white"
            cornerRadius={42}
            cornerSmoothing={1}
          >
            <Squircle
              className="w-[256px] h-[256px]"
              cornerRadius={39}
              cornerSmoothing={0.9}
            >
              <Image
                alt="Profile photo"
                height="256"
                radius="none"
                src="/profile.jpeg"
                width="256"
              />
            </Squircle>
          </Squircle>
        </div>
      </div>
    </div>
  );
}
