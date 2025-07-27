"use client";

import { Card, CardFooter, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Now() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto" id={t("topbar.second")}>
      <h2 className="sm:text-xl font-semibold text-center">
        {t("now.title_first")}{" "}
        <span className="text-primary">{t("now.title_second")}</span>
        {t("now.title_third")}
      </h2>
      <div className="flex flex-wrap justify-center mt-8 gap-5">
        <div className="border-[0.25rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[30px] overflow-hidden">
          <Card
            isFooterBlurred
            className="w-full max-w-[530px] h-[256px] border-none"
          >
            <Image
              alt="XCode"
              height="256"
              radius="none"
              src="/now/XCode.png"
              width="530"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-2xl bottom-2 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
              <p className="text-tiny text-black/60 text-center">
                {t("now.descriptions.first")}
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="border-[0.25rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[30px] overflow-hidden">
          <Card
            isFooterBlurred
            className="w-full max-w-[530px] sm:max-w-[256px] h-[256px] border-none"
          >
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <Image
                alt="Piicate"
                height="256"
                radius="none"
                src="/now/piicate.jpg"
                width="530"
              />
            </div>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-2xl bottom-2 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
              <p className="text-tiny text-white/80 text-center">
                {t("now.descriptions.second")}
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="border-[0.25rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[30px] overflow-hidden">
          <Card
            isFooterBlurred
            className="w-full max-w-[530px] sm:max-w-[256px] h-[256px] border-none"
          >
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <Image
                alt="Sonia Abrante"
                height="256"
                radius="none"
                src="/now/sonia.jpeg"
                width="530"
              />
            </div>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-2xl bottom-2 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
              <p className="text-tiny text-white/80 text-center">
                {t("now.descriptions.third")}
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="border-[0.25rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[30px] overflow-hidden">
          <Card
            isFooterBlurred
            className="w-full max-w-[530px] sm:max-w-[256px] h-[256px] border-none"
          >
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <Image
                alt="Calculator"
                height="256"
                radius="none"
                src="/now/calculator.png"
                width="530"
              />
            </div>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-2xl bottom-2 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
              <p className="text-tiny text-white/80 text-center">
                {t("now.descriptions.fourth")}
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="border-[0.25rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[30px] overflow-hidden">
          <Card
            isFooterBlurred
            className="w-full max-w-[530px] sm:max-w-[256px] h-[256px] border-none"
          >
            <div className="w-full h-full overflow-hidden flex items-center justify-center">
              <Image
                alt="Book"
                className="object-cover object-center w-full h-full"
                height="256"
                radius="none"
                src="/now/book.png"
                width="530"
              />
            </div>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-2xl bottom-2 w-[calc(100%_-_24px)] shadow-small ml-3 z-10">
              <p className="text-tiny text-white/80 text-center">
                {t("now.descriptions.fifth")}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
