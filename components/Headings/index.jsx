'use client';

import { cn } from "@/lib/utils";

export default function Headings({title, subTitle, titleClassName, subTitleClassName, innerTitle}) {
  return (
    <div className="text-center">
        <span className={cn("text-sm inline-block max-w-3xl mx-auto font-semibold px-3 py-1 rounded-md bg-[#111] shadow-[inset_0_1px_rgba(255,255,255,0.06)]", subTitleClassName)}>{subTitle}</span>
        <h3 className={cn("mt-3 text-white text-2xl lg:text-4xl xl:text-5xl 2xl:text-[64px] !leading-tight text-center font-medium tracking-tight", titleClassName)}>{title} <span className="text-white/40 inline-block">{innerTitle}</span></h3>
    </div>
  );
}
