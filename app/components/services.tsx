"use client";

import { Squircle } from "@squircle-js/react";
import { Image } from "@heroui/react";

export default function Services() {
  return (
    <div className="max-w-[56rem] mx-auto mt-20">
      <h2 className="text-xl font-semibold text-center">
        Mis <span className="text-orange-500">servicios</span>
      </h2>
      <span className="opacity-50 font-semibold">
        Como Full Stack Developer graduado en Ingeniería Informática por la
        Universidad de Las Palmas de Gran Canaria, disfruto creando soluciones
        completas, tanto en el lado del servidor como en el cliente. Aunque
        domino todo el stack, me apasiona especialmente el desarrollo Frontend,
        donde puedo combinar lógica, diseño y experiencia de usuario.
      </span>
      <div className="flex justify-between">
        <Squircle
          className="border-[0.35rem] border-white"
          cornerRadius={42}
          cornerSmoothing={1}
        >
          <Squircle
            className="w-[420px] h-[700px]"
            cornerRadius={39}
            cornerSmoothing={0.9}
          >
            <div className="p-5">
              <div className="p-3 bg-orange-500 w-min rounded-full mb-4 mt-5 mx-auto">
                <span className="text-6xl">🎨</span>
              </div>
              <h3 className="text-center font-semibold text-xl">
                Front End Developer
              </h3>
              <div className="flex flex-col gap-3 mt-10">
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/react.png"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">React</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/NodeJS.png"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">NodeJS</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/NextJS.jpeg"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">NextJS</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/Playwright.png"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">Playwright</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/Jest.svg"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">Jest</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/Vitest.jpg"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">Vitest</span>
                </div>
              </div>
            </div>
          </Squircle>
        </Squircle>
        <Squircle
          className="border-[0.35rem] border-white"
          cornerRadius={42}
          cornerSmoothing={1}
        >
          <Squircle
            className="w-[420px] h-[700px]"
            cornerRadius={39}
            cornerSmoothing={0.9}
          >
            <div className="p-5">
              <div className="p-3 bg-orange-500 w-min rounded-full mb-4 mt-5 mx-auto">
                <span className="text-6xl">⚙️</span>
              </div>
              <h3 className="text-center font-semibold text-xl">
                Back End Developer
              </h3>
              <div className="flex flex-col gap-3 mt-10">
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/PHP.jpg"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">PHP</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/Java.png"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">Java</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/Sequelize.png"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">Sequelize</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/PostgreSQL.png"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/MySQL.avif"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">MySQL</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="shadow-[rgba(0,_0,_0,_0.1)_0px_0px_50px] rounded-[20px] overflow-visible">
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
                          src="/services/MariaDB.png"
                          width="56"
                        />
                      </Squircle>
                    </Squircle>
                  </div>
                  <span className="text-lg">MariaDB</span>
                </div>
              </div>
            </div>
          </Squircle>
        </Squircle>
      </div>
    </div>
  );
}
