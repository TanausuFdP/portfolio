"use client";
import { useTranslation } from "react-i18next";

export default function Paragraph() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto text-center">
      <span className="opacity-50 font-[500] font-quicksand">
        {t("services.paragraph")}
      </span>
    </div>
  );
}
