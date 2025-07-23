"use client";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Button } from "@heroui/react";
import {
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Bottombar() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 p-10 flex gap-3 z-40 transition-all duration-300 ${
        visible ? "bottom-0" : "-bottom-28"
      }`}
    >
      <Button
        isIconOnly
        color="primary"
        radius="full"
        startContent={<EnvelopeIcon className="w-5 h-5" />}
        onPress={() => (window.location.href = `mailto:${t("general.email")}`)}
      />
      <Button
        isIconOnly
        className="bg-background"
        color="primary"
        radius="full"
        startContent={<IconBrandLinkedinFilled className="w-5 h-5" />}
        variant="ghost"
        onPress={() =>
          window.open("https://www.linkedin.com/in/tanausufdp/", "_blank")
        }
      />
      <Button
        isIconOnly
        className="bg-background"
        color="primary"
        radius="full"
        startContent={<IconBrandGithubFilled className="w-5 h-5" />}
        variant="ghost"
        onPress={() => window.open("https://github.com/TanausuFdP", "_blank")}
      />
    </div>
  );
}
