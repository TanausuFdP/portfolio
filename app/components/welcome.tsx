"use client";
import { Chip, Image } from "@heroui/react";
import { Squircle } from "@squircle-js/react";

export default function Welcome() {
  return (
    <div className="max-w-[56rem] mx-auto">
      <div className="font-semibold text-[2.5rem]">
        <div className="flex flex-wrap items-center gap-2 max-w-[42rem]">
          <span className="opacity-30">¡Hola!, soy</span>
          <div className="shadow-[rgba(0,_0,_0,_0.2)_0px_0px_50px] rounded-[20px] overflow-visible">
            <Squircle
              className="border-[0.25rem] border-white"
              cornerRadius={18}
              cornerSmoothing={1}
            >
              <Squircle
                className="w-[56px] h-[56px]"
                cornerRadius={14}
                cornerSmoothing={0.8}
              >
                <Image
                  alt="Profile photo"
                  height="56"
                  radius="none"
                  src="/profile.jpeg"
                  width="56"
                />
              </Squircle>
            </Squircle>
          </div>
          <span>Tanausú Fernández</span>
          <span className="opacity-30">Soy</span>
          <span className="ml-2">Desarrollador Full Stack</span>
          <span className="opacity-30">con</span>
          <span className="text-orange-500 ml-2">4 años de experiencia.</span>
          <div className="pl-5 flex items-center">
            <Chip
              color="success"
              size="lg"
              startContent={
                <div className="mr-2">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-success" />
                  </span>
                </div>
              }
              variant="faded"
            >
              <span className="font-[500]">Open to work</span>
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
}
