"use client";
import { Button } from "@heroui/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Entry() {
  return (
    <div className="max-w-[56rem] mx-auto mt-16">
      <div className="flex gap-5 items-center">
        <Button
          className="bg-black text-white"
          radius="full"
          size="lg"
          startContent={<EnvelopeIcon className="w-6 h-6" />}
        >
          Contáctame
        </Button>
        <div className="flex flex-col gap-1">
          <span className="font-[500]">
            No dudes en navegar por mi portfolio y ver lo que ofrezco
          </span>
          <span className="font-[500]">— ¡Me encantaría saber tu opinión!</span>
        </div>
      </div>
    </div>
  );
}
