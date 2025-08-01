"use client";

import { useTranslation } from "react-i18next";

export default function Resume() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto">
      <div className="w-full text-center pb-20 sm:pb-24">
        <span className="opacity-50 font-semibold font-quicksand sm:text-xl">
          {t("resume.slogan")}
        </span>
      </div>
      <div className="flex flex-wrap gap-10 sm:gap-20 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary flex items-center justify-center rounded-full btn-shadow-primary">
            <span className="text-2xl font-bold text-white">
              {t("resume.years_first")}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-small sm:text-medium">
              {t("resume.years_second")}
            </span>
            <span className="font-semibold text-primary text-small sm:text-medium">
              {t("resume.years_third")}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary flex items-center justify-center rounded-full btn-shadow-primary">
            <span className="text-2xl font-bold text-white">
              {t("resume.projects_first")}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-small sm:text-medium">
              {t("resume.projects_second")}
            </span>
            <span className="font-semibold text-primary text-small sm:text-medium">
              {t("resume.projects_third")}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary flex items-center justify-center rounded-full btn-shadow-primary">
            <span className="text-4xl font-semibold text-white">
              {t("resume.users_first")}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-small sm:text-medium">
              {t("resume.users_second")}
            </span>
            <span className="font-semibold text-primary text-small sm:text-medium">
              {t("resume.users_third")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
