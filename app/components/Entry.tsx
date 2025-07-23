"use client";
import { Button } from "@heroui/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

export default function Entry() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto mt-16 ">
      <div className="flex gap-5 items-center">
        <Button
          className="bg-black text-white"
          radius="full"
          size="lg"
          startContent={<EnvelopeIcon className="w-6 h-6" />}
          onPress={() =>
            (window.location.href = `mailto:${t("general.email")}`)
          }
        >
          {t("entry.button")}
        </Button>
        <div className="flex flex-col gap-1">
          <span className="font-[500]">{t("entry.first")}</span>
          <span className="font-[500]">{t("entry.second")}</span>
        </div>
      </div>
    </div>
  );
}
