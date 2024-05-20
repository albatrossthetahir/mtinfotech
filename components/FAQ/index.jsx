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
                <Accordian title={'What technologies do you specialize in?'} answer={`HTML5,CSS3 (including frameworks like Tailwind, Bootstrap),JavaScript (including frameworks like Reactjs, Nextjs),Responsive design principles, andAccessibility best practices.`} />
                <Accordian title={'What are your strengths and weaknesses as a developer?'} answer={`Highlight your strengths in areas like HTML, CSS, JavaScript, specific frameworks, or communication. Be honest about areas you're working on improving.`} />
                <Accordian title={'What are your career goals?'} answer={'Briefly mention your aspirations in the field. Do you want to specialize in a particular area, work on large-scale projects, or freelance?'} />
            </div>
        </div>
    )
}
