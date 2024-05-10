'use client';
import Accordian from "./Accordian";

export default function FAQaq() {
    return (
        <div className="pb-36">
            <div className="flex flex-col gap-3 justify-center">
                <span className="text-sm text-[#7e43fb] block max-w-fit font-semibold px-3 py-1 mx-auto rounded-md bg-[#111] shadow-[inset_0_1px_rgba(255,255,255,0.06)]">FAQ</span>
                <h2 className="text-white text-6xl lg:text-[64px] text-center font-medium tracking-tight">Frequently asked <span className="inline-block text-[#ffffff66] mt-2">questions</span></h2>
            </div>
            <div className="flex flex-col gap-4 mt-14">
                <Accordian title={'Questions 01 ?'} answer={'This is answer 01.'} />
                <Accordian title={'Questions 02 ?'} answer={'This is answer 02.'} />
                <Accordian title={'Questions 03 ?'} answer={'This is answer 03.'} />
                <Accordian title={'Questions 04 ?'} answer={'This is answer 04.'} />
            </div>
        </div>
    )
}
