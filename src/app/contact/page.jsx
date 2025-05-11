import Image from "next/image";
import Headings from "../../../components/Headings";
import Link from "next/link";

export default function Contact() {
  return (
    <>
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <Headings title="Contact"  innerTitle="me" subTitle="Contact" subTitleClassName="text-[#ffca9a]" />
            <div className="max-w-3xl w-full mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-6 mt-6 md:mt-8 xl:mt-10 2xl:mt-14">
                <Link href={'#'} className="p-8 no-underline flex flex-wrap items-center rounded-2xl gap-6 bg-[#1b1b1b] shadow-card-shadow">
                  <div className="size-20 rounded-full bg-[#161616] flex items-center justify-center shadow-card-shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M29.75 6.375H4.25C3.96821 6.375 3.69796 6.48694 3.4987 6.6862C3.29944 6.88546 3.1875 7.15571 3.1875 7.4375V25.5C3.1875 26.0636 3.41138 26.6041 3.8099 27.0026C4.20841 27.4011 4.74891 27.625 5.3125 27.625H28.6875C29.2511 27.625 29.7916 27.4011 30.1901 27.0026C30.5886 26.6041 30.8125 26.0636 30.8125 25.5V7.4375C30.8125 7.15571 30.7006 6.88546 30.5013 6.6862C30.302 6.48694 30.0318 6.375 29.75 6.375ZM13.1086 17L5.3125 24.1453V9.85469L13.1086 17ZM14.6758 18.4477L16.2828 19.9086C16.4787 20.0878 16.7345 20.1872 17 20.1872C17.2655 20.1872 17.5213 20.0878 17.7172 19.9086L19.3242 18.4477L27.0141 25.5H6.98594L14.6758 18.4477ZM20.8914 17L28.6875 9.85469V24.1453L20.8914 17Z" fill="#7E43FB"/>
                    </svg>
                  </div>
                  <div className="w-2/4 grow">
                    <h4 className="text-white text-xl mb-2">Mail</h4>
                    <span className="text-[#6f6f72] text-base">Basecom78@gmail.com</span>
                  </div>
                </Link>
                <Link href={'#'} className="p-8 no-underline flex flex-wrap items-center rounded-2xl gap-6 bg-[#1b1b1b] shadow-card-shadow">
                  <div className="size-20 rounded-full bg-[#161616] flex items-center justify-center shadow-card-shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M29.75 23.2617V28.2711C29.75 29.0149 29.175 29.632 28.4332 29.6844C27.8136 29.7282 27.3081 29.75 26.9167 29.75C14.3981 29.75 4.25 19.6018 4.25 7.08333C4.25 6.69192 4.27189 6.1864 4.31566 5.56679C4.36811 4.825 4.98516 4.25 5.7288 4.25H10.7385C11.1021 4.25 11.4067 4.52543 11.4432 4.88722C11.4759 5.21202 11.5064 5.47278 11.5346 5.66953C11.8212 7.67085 12.4065 9.57576 13.244 11.3376C13.3784 11.6204 13.2908 11.9589 13.036 12.1409L9.97836 14.3251C11.8398 18.6732 15.3268 22.1602 19.6749 24.0217L21.8551 20.9694C22.0394 20.7115 22.3819 20.6228 22.6681 20.7587C24.4298 21.5955 26.3346 22.1802 28.3356 22.4661C28.5311 22.4941 28.7902 22.5243 29.1128 22.5569C29.4746 22.5934 29.75 22.898 29.75 23.2617Z" fill="#FFCA9A"/>
                    </svg>
                  </div>
                  <div className="w-2/4 grow">
                    <h4 className="text-white text-xl mb-2">Call</h4>
                    <span className="text-[#6f6f72] text-base">+0923 9722 643 123</span>
                  </div>
                </Link>
                <div className="p-8 col-span-full rounded-2xl shadow-card-shadow-xl bg-[#1b1b1b]">
                  <h4 className="text-xl text-white font-medium font-inter mb-6">Get in Touch</h4>
                  <form action="">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <input type="text" placeholder="Your full name..." className="h-12 text-white shadow-card-shadow bg-no-repeat bg-auto pl-14 rounded-lg w-full block" name="name" id="" />
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
