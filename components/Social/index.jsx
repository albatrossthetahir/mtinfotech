'use client';

import Image from "next/image";

export default function socialBlock() {
    return (
        <section className="w-full mt-6 pb-10 sm:pb-14 lg:pb-16 xl:pb-20 2xl:pb-36 container mx-auto lg:px-0">
            <div className="flex flex-col justify-center gap-4 md:gap-6">
                <marquee behavior="smooth" direction="left">
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/html.svg'} width={40} height={40} className="block max-w-full h-auto" alt="html" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">HTML</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/css.svg'} width={40} height={40} className="block max-w-full h-auto" alt="css" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">CSS</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/javascript.svg'} width={40} height={40} className="block max-w-full h-auto" alt="javascript" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Javascript</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/bootstrap-icon.svg'} width={40} height={40} className="block max-w-full h-auto" alt="bootstrap" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Bootstrap</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/tailwind-css.svg'} width={40} height={40} className="block max-w-full h-auto" alt="tailwind" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Tailwind CSS</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/html.svg'} width={40} height={40} className="block max-w-full h-auto" alt="html" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">HTML</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/css.svg'} width={40} height={40} className="block max-w-full h-auto" alt="css" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">CSS</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/javascript.svg'} width={40} height={40} className="block max-w-full h-auto" alt="javascript" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Javascript</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/bootstrap-icon.svg'} width={40} height={40} className="block max-w-full h-auto" alt="bootstrap" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Bootstrap</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 inline-flex flex-wrap flex-row mr-3 md:mr-4 justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-10 lg:h-10 md:w-8 md:h-8 flex-shrink-0">
                            <Image src={'/tailwind-css.svg'} width={40} height={40} className="block max-w-full h-auto" alt="tailwind" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Tailwind CSS</h4>
                        </div>
                    </div>
                </marquee>
                <marquee behavior="smooth" direction="right">
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/twitter-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="twitter" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Twitter</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/behance-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="Behance" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Behance</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/dribbble-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="dribbble" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Dribbble</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/instagram-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="instagram" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Instagram</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/linkdin-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="linkdin" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Linkedin</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/twitter-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="twitter" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Twitter</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/behance-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="Behance" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Behance</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/dribbble-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="dribbble" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Dribbble</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/instagram-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="instagram" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Instagram</h4>
                        </div>
                    </div>
                    <div className="text-white shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)] bg-[#1b1b1b] rounded-xl lg:py-6 md:py-5 py-4 p-5 min-w-36 md:min-w-52 mr-3 md:mr-4 inline-flex flex-wrap flex-row justify-center items-center hover:bg-[#242424] cursor-pointer transition-all duration-300 ease-linear">
                        <div className="lg:w-9 lg:h-9 md:w-6 md:h-6 flex-shrink-0">
                            <Image src={'/linkdin-icon.svg'} width={40} height={40} className="block max-w-full h-auto opacity-40" alt="linkdin" />
                        </div>
                        <div className="lg:ml-4 md:ml-3">
                            <h4 className="lg:text-xl md:text-lg text-white opacity-40">Linkedin</h4>
                        </div>
                    </div>
                </marquee>
            </div>
        </section>
    );
}
