"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-0">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-black dark:text-white">
              Eliminate expired kits
              <span className="block text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600">
                Unleash SafetyKit
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="hero.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
