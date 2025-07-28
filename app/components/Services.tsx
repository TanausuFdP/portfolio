"use client";
import { Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const frontend = 6;
  const backend = 6;
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto" id={t("topbar.third")}>
      <h2 className="sm:text-xl font-semibold text-center">
        {t("services.title_first")}{" "}
        <span className="text-primary">{t("services.title_second")}</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between mt-8">
        <div className="border-[0.25rem] border-white dark:border-zinc-700 dark:bg-zinc-900 rounded-[2rem] shadow-[rgba(0,_0,_0,_0.1)_0px_0px_40px] overflow-hidden">
          <div className="w-full md:w-[420px] md:h-[700px]">
            <div className="p-5">
              <div className="p-3 bg-primary w-14 flex items-center justify-center sm:w-min rounded-full mb-2 sm:mb-4 mt-5 mx-auto btn-shadow-primary">
                <span className="text-2xl sm:text-6xl">🎨</span>
              </div>
              <h3 className="text-center font-semibold sm:text-xl">
                {t("services.frontend")}
              </h3>
              <div className="flex flex-col gap-3 mt-10">
                {[...Array(frontend)].map((_, i) => {
                  const n = i + 1;

                  return (
                    <div key={i} className="flex items-center gap-5">
                      <div className="border-[0.2rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.2)_0px_0px_20px] rounded-[20px] overflow-hidden">
                        <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
                          <Image
                            alt="Profile photo"
                            height="56"
                            radius="none"
                            src={
                              "/services/" +
                              t("services.frontend_list." + n + "_img")
                            }
                            width="56"
                          />
                        </div>
                      </div>
                      <span className="text-lg">
                        {t("services.frontend_list." + n + "_name")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="border-[0.25rem] border-white dark:border-zinc-700  dark:bg-zinc-900 rounded-[2rem] shadow-[rgba(0,_0,_0,_0.1)_0px_0px_40px] overflow-hidden">
          <div className="w-full md:w-[420px] md:h-[700px]">
            <div className="p-5">
              <div className="p-3 bg-primary w-14 flex items-center justify-center sm:w-min rounded-full mb-2 sm:mb-4 mt-5 mx-auto btn-shadow-primary">
                <span className="text-2xl sm:text-6xl">⚙️</span>
              </div>
              <h3 className="text-center font-semibold sm:text-xl">
                {t("services.backend")}
              </h3>
              <div className="flex flex-col gap-3 mt-10">
                {[...Array(backend)].map((_, i) => {
                  const n = i + 1;

                  return (
                    <div key={i} className="flex items-center gap-5">
                      <div className="border-[0.2rem] border-white dark:border-zinc-700 shadow-[rgba(0,_0,_0,_0.2)_0px_0px_20px] rounded-[20px] overflow-hidden">
                        <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]">
                          <Image
                            alt="Profile photo"
                            height="56"
                            radius="none"
                            src={
                              "/services/" +
                              t("services.backend_list." + n + "_img")
                            }
                            width="56"
                          />
                        </div>
                      </div>
                      <span className="text-lg">
                        {t("services.backend_list." + n + "_name")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
