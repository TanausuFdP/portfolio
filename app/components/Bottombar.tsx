"use client";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/react";
import { useTranslation } from "react-i18next";

export default function Bottombar() {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-0 right-0 p-10 flex gap-4 ">
      <Button
        className="bg-white border border-orange-500 text-orange-500 font-semibold shadow-orange-500"
        radius="full"
        size="lg"
        startContent={<DocumentArrowDownIcon className="w-6 h-6 stroke-2" />}
      >
        {t("general.cv")}
      </Button>
      <Button
        isIconOnly
        className="bg-orange-500 text-white"
        radius="full"
        size="lg"
        startContent={<EnvelopeIcon className="w-6 h-6" />}
      />
    </div>
  );
}
