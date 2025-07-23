"use client";
import { ScrollShadow } from "@heroui/react";
import { IconPointFilled } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Career() {
  const careers = 7;
  const { t } = useTranslation();

  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  });

  return (
    <div className="max-w-[48rem] mx-auto" id={t("topbar.fourth")}>
      <div className="border-[0.35rem] border-white">
        <div className="w-[48rem] h-[400px] relative">
          <div className="absolute top-5 left-5 font-semibold text-xl px-3 py-2 rounded-full bg-white z-10">
            <span>{t("career.title_first")}</span>{" "}
            <span className="text-primary">{t("career.title_second")}</span>
          </div>
          <ScrollShadow ref={bodyRef} hideScrollBar className="w-full h-full">
            <div className="p-5">
              <div className="relative flex flex-col gap-8 mx-auto w-fit pl-6">
                <div className="absolute left-[2.425rem] top-4 bottom-4 w-[2px] bg-gray-500" />
                {[...Array(careers)].map((_, i) => {
                  const n = i + 1;

                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="relative z-10">
                        <IconPointFilled className="w-8 h-8" />
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="text-lg font-semibold">
                          {t("career.list." + n + "_title")}
                        </span>
                        <span className="opacity-50">
                          {t("career.list." + n + "_subtitle")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollShadow>
        </div>
      </div>
    </div>
  );
}
