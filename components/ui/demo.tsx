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
              Eliminate expired kits. Simplify audits.
              <span className="block text-blue-600">Automated expiry tracking and audit-ready reports.</span>
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
