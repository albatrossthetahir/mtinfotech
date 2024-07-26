'use client';
const products = [
    {
        id: 1,
        name: 'User-centered',
        imageSrc: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M18 36C16.5 36 15.25 35.5156 14.25 34.5469C13.25 33.5781 12.75 32.4063 12.75 31.0313C12.75 30.2501 12.9063 29.5468 13.2188 28.9219C13.5312 28.2969 14.0781 27.6093 14.8594 26.8594C15.6719 26.1094 16.3125 25.4063 16.7813 24.75C17.2812 24.0626 17.5312 23.4688 17.5312 22.9687V21.2812C16.8438 21.125 16.2344 20.8125 15.7031 20.3438C15.2031 19.8437 14.875 19.2499 14.7187 18.5625H13.0312C12.5 18.5625 11.875 18.8125 11.1563 19.3126C10.4375 19.8124 9.75001 20.4219 9.09374 21.1406C8.4375 21.8594 7.78126 22.3906 7.12499 22.7344C6.5 23.0782 5.78126 23.2501 4.96876 23.2501C3.56251 23.2501 2.37499 22.75 1.40625 21.7499C0.468751 20.75 0 19.4999 0 18C0 16.5 0.468751 15.25 1.40625 14.25C2.37499 13.25 3.56251 12.75 4.96876 12.75C6.28124 12.75 7.40624 13.2188 8.34376 14.1562C9.28125 15.0938 10.125 15.8906 10.875 16.5469C11.625 17.2031 12.3438 17.5312 13.0312 17.5312H14.7187C14.875 16.8125 15.2031 16.2187 15.7031 15.75C16.2344 15.25 16.8438 14.9375 17.5312 14.8125V13.125C17.5312 12.3125 16.9062 11.2812 15.6563 10.0313L14.6719 9.04687C13.3906 7.76563 12.75 6.40625 12.75 4.96876C12.75 3.56251 13.25 2.39062 14.25 1.45312C15.2812 0.484375 16.5313 0 18 0C19.4999 0 20.75 0.484375 21.7499 1.45312C22.75 2.42188 23.2501 3.59375 23.2501 4.96876C23.2501 6.56249 22.4687 8.06251 20.9063 9.46876C19.3437 10.9063 18.5625 12.125 18.5625 13.125V14.8125C19.2812 14.9375 19.8751 15.25 20.3438 15.75C20.8438 16.2187 21.1563 16.8125 21.2812 17.5312H22.9687C24.0313 17.5312 25.25 16.7344 26.6251 15.1406C28.0312 13.5469 29.5 12.75 31.0313 12.75C32.4374 12.75 33.6094 13.2656 34.5469 14.2969C35.5156 15.2969 36 16.5313 36 18C36 19.4999 35.5156 20.75 34.5469 21.7499C33.5781 22.75 32.4063 23.2501 31.0313 23.2501C29.7187 23.2501 28.6094 22.7968 27.7031 21.8907C26.797 20.9844 25.9531 20.2032 25.1719 19.5469C24.3905 18.8906 23.6563 18.5625 22.9687 18.5625H21.2812C21.0312 20.0624 20.1251 20.9687 18.5625 21.2812V22.9687C18.5625 23.9062 19.3437 25.1095 20.9063 26.5781C22.4687 28.0469 23.2501 29.5312 23.2501 31.0313C23.2501 32.4374 22.7344 33.6094 21.7031 34.5469C20.7031 35.5156 19.4688 36 18 36Z" fill="#7E43FB" />
        </svg>,
        discription: "I work closely with my clients to understand their target audience and their pain points.",
    },
    {
        id: 2,
        name: 'User-centered',
        imageSrc: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <g clipPath="url(#clip0_108_790)">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.7634 23.5411C5.06708 40.153 30.9461 40.153 21.2366 23.5411C36.0219 40.153 40.1533 36.029 23.5402 21.2375C40.1533 30.9341 40.1533 5.05399 23.5402 14.764C40.1533 -0.0276073 36.0275 -4.15342 21.2366 12.4603C30.9328 -4.15342 5.05376 -4.15342 14.7634 12.4603C-0.0276309 -4.15342 -4.15329 -0.0276073 12.4598 14.764C-4.15329 5.06731 -4.15329 30.9474 12.4598 21.2375C-4.15329 36.029 -0.0276309 40.153 14.7634 23.5411ZM18 22.5C20.4852 22.5 22.5 20.4853 22.5 18C22.5 15.5147 20.4852 13.5 18 13.5C15.5147 13.5 13.5 15.5147 13.5 18C13.5 20.4853 15.5147 22.5 18 22.5Z" fill="#00FFFF" />
            </g>
        </svg>,
        discription: "I work closely with my clients to understand their target audience and their pain points.",
    },
    {
        id: 3,
        name: 'User-centered',
        imageSrc: <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <g clipPath="url(#clip0_108_788)">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.4818 0.885083L19.044 15.4797L26.9329 2.7288C27.1773 2.3339 27.7259 2.27014 28.0543 2.5985L33.4015 7.94569C33.7298 8.27404 33.6661 8.82275 33.2712 9.06709L20.5204 16.9561L35.1149 13.5182C35.5669 13.4117 36 13.7546 36 14.219V21.7811C36 22.2455 35.5669 22.5884 35.1149 22.4818L20.5204 19.044L33.2712 26.933C33.6661 27.1773 33.7298 27.7259 33.4015 28.0544L28.0543 33.4015C27.7259 33.7298 27.1773 33.6661 26.9329 33.2712L19.044 20.5204L22.4818 35.1149C22.5884 35.5669 22.2453 36 21.7811 36H14.219C13.7546 36 13.4117 35.5669 13.5182 35.1149L16.9561 20.5204L9.06707 33.2712C8.82275 33.6661 8.27402 33.7298 7.94567 33.4015L2.5985 28.0543C2.27014 27.7259 2.3339 27.1773 2.7288 26.9329L15.4796 19.044L0.885085 22.4818C0.433091 22.5884 0 22.2455 0 21.7811V14.219C3.50845e-07 13.7546 0.433089 13.4117 0.885085 13.5182L15.4796 16.9561L2.7288 9.0671C2.3339 8.82277 2.27014 8.27404 2.5985 7.94569L7.94567 2.59852C8.27402 2.27016 8.82275 2.33392 9.06707 2.72882L16.9561 15.4797L13.5182 0.885085C13.4117 0.433091 13.7546 7.0169e-07 14.219 6.61095e-07L21.7811 0C22.2455 0 22.5884 0.433089 22.4818 0.885083ZM18 20.0572C19.1362 20.0572 20.0572 19.1362 20.0572 18C20.0572 16.8639 19.1362 15.9429 18 15.9429C16.8639 15.9429 15.9429 16.8639 15.9429 18C15.9429 19.1362 16.8639 20.0572 18 20.0572Z" fill="#FFCA9A" />
            </g>
        </svg>,
        discription: "I work closely with my clients to understand their target audience and their pain points.",
    },

]

const Services = () => {
  return (
    <section className="w-full mt-6 pb-10 sm:pb-14 lg:pb-16 xl:pb-20 2xl:pb-36">
    <div className="container mx-auto lg:px-0">
        <div className="flex flex-col gap-3 md:max-w-[50%] mx-auto">
            <span className="text-sm text-[#7e43fb] block max-w-fit font-semibold px-3 py-1 mx-auto rounded-md bg-[#111] shadow-[inset_0_1px_rgba(255,255,255,0.06)]">Work History</span>
            <h2 className="text-white text-6xl lg:text-[64px] text-center font-medium tracking-tight">Client centric Tailwind <span className="inline-block text-[#ffffff66] mt-2">product design</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-14">
            {products.map((product) => (
            <div key={product.id}
                className="group relative bg-[#1b1b1b] rounded-2xl p-5 md:p-6 lg:p-8 xl:p-10 shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.06)]">
                <div className="w-12 h-12 md:w-14 md:h-14 xl:w-20 xl:h-20 overflow-hidden rounded-full bg-[#161616] flex justify-center items-center shadow-[inset_0_1px_rgba(255,255,255,0.06)] p-2 2xl:p-5">
                    {product.imageSrc}
                </div>
                <div className="mt-3 sm:mt-4 md:mt-6 xl:mt-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white mb-2 md:mb-4 font-medium">
                        {product.name}</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-[#ffffff99]">{product.discription}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
</section>
  )
}

export default Services