'use client';

import Image from "next/image";
import Headings from "../Headings";
import Tabs from "./Tabs";


const WorkHistory = () => {
  return (
    <div className="lg:pb-28 2xl:pb-36">
        <div className="container max-[1680px]:max-w-[1160px] mx-auto lg:px-0">
            <div className="max-w-[60%] mx-auto flex flex-col gap-3 mb-14">
                <Headings subTitleClassName={"text-[#ffca9a]"} subTitle={"Work History"} title={"Pioneering Web Designer excellence"} innerTitle={"since 2020"} />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4 2xl:gap-6">
                    <div className="bg-[#1b1b1b] rounded-2xl p-10 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] grow">
                        <Tabs />
                    </div>
                    <div className="flex flex-col gap-4 2xl:gap-6 justify-start [&>div]:text-left">
                        <Headings subTitleClassName={"text-[#ffca9a]"} subTitle={"Available for work"} />
                        <div className="grid grid-cols-4 gap-4 2xl:gap-6">
                            <div className="bg-[#1b1b1b] rounded-2xl p-4 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] aspect-square">
                                <svg viewBox="0 0 129.9 81" xmlns="http://www.w3.org/2000/svg" className="size-full">
                                    <path fill="#146EF5" fillRule="evenodd" clipRule="evenodd" d="M129.9 0 88.4 81H49.5l17.3-33.6h-.8C51.8 66 30.4 78.2 0 81V47.9s19.5-1.1 30.9-13.2H0V0h34.7v28.6l.8 0L49.7 0h26.3v28.4l.8 0L91.4 0h38.5z" />
                                </svg>
                            </div>
                            <div className="bg-[#1b1b1b] rounded-2xl p-4 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] aspect-square">
                                <svg viewBox="0 0 288 432" xmlns="http://www.w3.org/2000/svg" className="size-full">
                                    <path d="M144 216C144 176.641 175.907 144.733 215.267 144.733C254.626 144.733 286.534 176.641 286.534 216C286.534 255.36 254.626 287.267 215.267 287.267C175.907 287.267 144 255.36 144 216Z" fill="#1ABCFE" />
                                    <path d="M1.46603 358.534C1.46603 319.175 33.3733 287.267 72.733 287.267H144V358.534C144 397.894 112.093 429.801 72.733 429.801C33.3733 429.801 1.46603 397.894 1.46603 358.534Z" fill="#0ACF83" />
                                    <path d="M144 2.19946V144.733H215.267C254.627 144.733 286.534 112.826 286.534 73.4664C286.534 34.1068 254.627 2.19946 215.267 2.19946H144Z" fill="#FF7262" />
                                    <path d="M1.46603 73.4664C1.46603 112.826 33.3733 144.733 72.733 144.733H144V2.19941H72.733C33.3733 2.19941 1.46603 34.1067 1.46603 73.4664Z" fill="#F24E1E" />
                                    <path d="M1.46603 216C1.46603 255.36 33.3733 287.267 72.733 287.267H144V144.733H72.733C33.3733 144.733 1.46603 176.641 1.46603 216Z" fill="#A259FF" />
                                </svg>
                            </div>
                            <div className="bg-[#1b1b1b] rounded-2xl p-4 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] aspect-square">
                                  <svg
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-auto h-auto"
                                >
                                    <path
                                    d="M462.1 27H49.9c-12.676 0-22.898 10.223-22.898 22.899V462.1c0 12.677 10.223 22.899 22.898 22.899H462.1c12.677 0 22.898-10.223 22.898-22.899V49.9c0-12.676-10.222-22.899-22.898-22.899"
                                    fill="#D63362"
                                    />
                                    <path
                                    d="M462.1 495H49.9c-18.14 0-32.898-14.759-32.898-32.899V49.9c0-18.141 14.758-32.899 32.898-32.899H462.1c18.141 0 32.898 14.759 32.898 32.899V462.1c0 18.14-14.758 32.899-32.898 32.899zM49.9 37c-7.112 0-12.898 5.787-12.898 12.899V462.1c0 7.112 5.786 12.899 12.898 12.899H462.1c7.112 0 12.898-5.787 12.898-12.899V49.9c0-7.113-5.786-12.899-12.898-12.899H49.9z"
                                    fill="#A1264A"
                                    />
                                    <rect x="238.553" y="151.314" width="119.27" height="43.552" fill="#fff" />
                                    <rect x="238.553" y="227.647" width="119.27" height="43.551" fill="#fff" />
                                    <rect x="238.553" y="303.981" width="119.27" height="43.551" fill="#fff" />
                                    <rect x="162.219" y="151.314" width="43.619" height="196.286" fill="#fff" />
                                </svg>
                            </div>
                            <div className="bg-[#1b1b1b] rounded-2xl p-4 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] aspect-square">
                                <svg
                                    viewBox="0 0 128 128"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-full"
                                    role="img"
                                    aria-label="JavaScript logo"
                                >
                                    <rect width="128" height="128" rx="8" ry="8" fill="#F7DF1E" />
                                    <text
                                    x="50%"
                                    y="56%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    fontFamily="Segoe UI, Roboto, Helvetica, Arial, sans-serif"
                                    fontWeight="700"
                                    fontSize="64"
                                    fill="#000"
                                    >
                                    JS
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-3xl overflow-hidden">
                    <Image src="/history-work.jpg" alt="History Work" width={800} height={600} className="max-w-full h-auto object-cover object-center" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkHistory