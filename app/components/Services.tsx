"use client";
import { Image } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const frontend = 6;
  const backend = 6;
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto" id={t("topbar.third")}>
      <h2 className="text-xl font-semibold text-center">
        {t("services.title_first")}{" "}
        <span className="text-primary">{t("services.title_second")}</span>
      </h2>
      <span className="opacity-50 font-semibold">
        {t("services.paragraph")}
      </span>
      <div className="flex justify-between">
        <div className="border-[0.35rem] border-white rounded-xl">
          <div className="w-[420px] h-[700px]">
            <div className="p-5">
              <div className="p-3 bg-primary w-min rounded-full mb-4 mt-5 mx-auto">
                <span className="text-6xl">🎨</span>
              </div>
              <h3 className="text-center font-semibold text-xl">
                {t("services.frontend")}
              </h3>
              <div className="flex flex-col gap-3 mt-10">
                {[...Array(frontend)].map((_, i) => {
                  const n = i + 1;

                  return (
                    <div key={i} className="flex items-center gap-5">
                      <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
                        <div className="border-[0.25rem] border-white">
                          <div className="w-[56px] h-[56px]">
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
        <div className="border-[0.35rem] border-white rounded-xl">
          <div className="w-[420px] h-[700px]">
            <div className="p-5">
              <div className="p-3 bg-primary w-min rounded-full mb-4 mt-5 mx-auto">
                <span className="text-6xl">⚙️</span>
              </div>
              <h3 className="text-center font-semibold text-xl">
                {t("services.backend")}
              </h3>
              <div className="flex flex-col gap-3 mt-10">
                {[...Array(backend)].map((_, i) => {
                  const n = i + 1;

                  return (
                    <div key={i} className="flex items-center gap-5">
                      <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
                        <div className="border-[0.25rem] border-white">
                          <div className="w-[56px] h-[56px]">
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
