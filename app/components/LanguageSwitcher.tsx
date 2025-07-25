"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";

import i18n from "../../i18n";

export default function LanguageSwitcher() {
  const { i18n: i18nextInstance } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18nextInstance.language === "es" ? "en" : "es";

    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      className="p-2 text-md font-semibold"
      radius="full"
      size="sm"
      variant="faded"
      onPress={toggleLanguage}
    >
      {i18nextInstance.language === "en" ? "🇪🇸 ES" : "🇬🇧 EN"}
    </Button>
  );
}
