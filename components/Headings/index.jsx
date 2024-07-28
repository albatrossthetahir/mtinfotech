'use client';
export default function Headings({title, subTitle, titleClassName, subTitleClassName}) {
  return (
    <div>
        <span className={`text-white text-sm block max-w-3xl mx-auto font-semibold px-3 py-1 rounded-md bg-[#111] shadow-[inset_0_1px_rgba(255,255,255,0.06)] ${subTitleClassName}`}>{subTitle}</span>
        <h3 className={`text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px] text-center font-medium tracking-tight ${titleClassName}`}>{title}</h3>
    </div>
  );
}
