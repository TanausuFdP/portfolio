"use client";
import { Button, Spacer } from "@heroui/react";
import { ArrowLongRightIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandThreads,
} from "@tabler/icons-react";

export default function Entry() {
  const { t, i18n: i18nextInstance } = useTranslation();

  return (
    <div>
      <div
        className={`${
          i18nextInstance.language === "en" ? "w-[38rem]" : "w-[41rem]"
        } max-w-full mx-auto`}
      >
        <div className="flex gap-5 items-center">
          <Button
            color="primary"
            radius="full"
            size="lg"
            startContent={<EnvelopeIcon className="w-6 h-6" />}
            variant="shadow"
            onPress={() =>
              (window.location.href = `mailto:${t("general.email")}`)
            }
          >
            {t("entry.button")}
          </Button>
          <div className="flex flex-col gap-1 font-quicksand">
            <span className="font-[500]">{t("entry.first")}</span>
            <span className="font-[500]">{t("entry.second")}</span>
          </div>
        </div>
      </div>
      <Spacer y={16} />
      <div
        className={`${
          i18nextInstance.language === "en" ? "w-[42rem]" : "w-[40rem]"
        } max-w-full mx-auto flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <span className="text-nowrap text-lg font-semibold">
            {t("entry.networks")}
          </span>
          <ArrowLongRightIcon className="w-7 h-7 animate-bounceRight" />
        </div>
        <Button
          color="primary"
          radius="full"
          size="lg"
          startContent={<IconBrandLinkedinFilled className="w-8 h-8" />}
          variant="ghost"
          onPress={() =>
            window.open("https://www.linkedin.com/in/tanausufdp/", "_blank")
          }
        >
          LinkedIn
        </Button>
        <Button
          color="primary"
          radius="full"
          size="lg"
          startContent={<IconBrandGithubFilled className="w-8 h-8" />}
          variant="ghost"
          onPress={() => window.open("https://github.com/TanausuFdP", "_blank")}
        >
          GitHub
        </Button>
        <Button
          color="primary"
          radius="full"
          size="lg"
          startContent={<IconBrandThreads className="w-8 h-8" />}
          variant="ghost"
          onPress={() =>
            window.open("https://www.threads.com/@tanausu.js", "_blank")
          }
        >
          Threads
        </Button>
      </div>
    </div>
  );
}
