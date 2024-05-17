'use client';
import Image from "next/image";

export default function heroBanner() {
  return (
    <section className="w-full mt-6">
      <div className="grid lg:grid-cols-2 gap-3 sm:gap-5 lg:gap-6">
        <div className="shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl py-4"></div>
        <div className="text-center shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl py-24 lg:py-32">
          <span className="uppercase bg-[#111] text-[#ffca9a] py-1 px-3 rounded-md inline-block">AVAILABLE FOR WORK</span>
          <h1 className="text-6xl font-medium text-white mt-3">Web designer</h1>
          <p className="text-xl text-white opacity-40 max-w-[444px] mx-auto mt-5 mb-7">A passionate SaaS product designer based in the vibrant city of New York.</p>
          <a href="tel:12345678901" className="bg-white text-lg font-medium text-black py-3 pl-6 pr-11 rounded-full">Book a Free Call </a>
        </div>
      </div>
    </section>
  );
}
