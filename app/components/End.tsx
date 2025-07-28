"use client";
import { useTranslation } from "react-i18next";

export default function End() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[56rem] mx-auto">
      <div className="text-center flex justify-center w-full">
        <span className="font-semibold opacity-80">{t("general.email")}</span>
      </div>
      <div className="hidden sm:block relative w-full h-36">
        <div className="absolute right-72 bottom-20 z-10 bg-primary animate-floatFirst w-4 h-4" />
        <div className="absolute -right-5 bottom-60 z-10 bg-primary animate-floatThird w-8 h-8" />
        <div className="absolute right-8 bottom-32 z-10 bg-primary animate-floatFifth w-12 h-12" />
        <div className="absolute right-24 bottom-6 z-10 bg-primary animate-floatFirst w-16 h-16" />
        <div className="absolute -right-5 bottom-0 z-10 bg-primary animate-floatThird w-24 h-24" />
        <div className="absolute right-48 bottom-8 z-10 bg-primary animate-floatFirst w-6 h-6" />
        <div className="absolute right-40 bottom-32 z-10 bg-primary animate-floatThird w-7 h-7" />
        <div className="absolute right-64 bottom-6 z-10 bg-primary animate-floatFifth w-10 h-10" />
        <div className="absolute left-72 bottom-20 z-10 bg-primary animate-floatFirst w-4 h-4" />
        <div className="absolute -left-5 bottom-60 z-10 bg-primary animate-floatThird w-8 h-8" />
        <div className="absolute left-8 bottom-32 z-10 bg-primary animate-floatFifth w-12 h-12" />
        <div className="absolute left-24 bottom-6 z-10 bg-primary animate-floatFirst w-16 h-16" />
        <div className="absolute -left-5 bottom-0 z-10 bg-primary animate-floatThird w-24 h-24" />
        <div className="absolute left-48 bottom-8 z-10 bg-primary animate-floatFirst w-6 h-6" />
        <div className="absolute left-40 bottom-32 z-10 bg-primary animate-floatThird w-7 h-7" />
        <div className="absolute left-64 bottom-6 z-10 bg-primary animate-floatFifth w-10 h-10" />
      </div>
    </div>
  );
}
