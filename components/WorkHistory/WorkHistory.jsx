'use client';

import Image from "next/image";
import Headings from "../Headings";
import Tabs from "./Tabs";


const WorkHistory = () => {
  return (
    <div className="lg:pb-28 2xl:pb-36">
        <div className="container mx-auto lg:px-0">
            <div className="max-w-[60%] mx-auto flex flex-col gap-3 mb-14">
                <Headings subTitleClassName={"text-[#ffca9a]"} subTitle={"Work History"} title={"Pioneering Web Designer excellence"} innerTitle={"since 2020"} />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#1b1b1b] rounded-2xl p-10 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)]">
                <Tabs />
                </div>
                <div className="rounded-3xl overflow-hidden">
                    <Image src="/history-work.jpg" alt="History Work" width={800} height={600} className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkHistory