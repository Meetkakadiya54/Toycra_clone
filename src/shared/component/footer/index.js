import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#f5f3ed] p-20 tab:px-4 tab:py-6 ">
                <div className="grid grid-cols-4 tab:flex flex-col gap-5 max-w-[1480px] mx-auto my-0 mob:gap-0">
                    <div className="flex flex-col gap-3 tab:border-b tab:border-gray-400">
                        <div className="flex flex-col gap-2 tab:flex-row tab:justify-between tab:py-4 tab:items-center">
                            <p className="text-xl font-extrabold">Reach Us</p>
                            <div className="flex flex-col gap-2 tab:hidden">
                                <a href="">About Us</a>
                                <a href="">Contact Us</a>
                                <a href="">Terms of Service</a>
                                <a href="">Refund policy</a>
                            </div>
                            <div className="hidden tab:flex">
                                <FaChevronDown />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 tab:border-b tab:border-gray-400">
                        <div className="flex flex-col gap-2 tab:flex-row tab:justify-between tab:py-4  tab:items-center">
                            <p className="text-xl font-extrabold">Store Policies</p>
                            <div className="flex flex-col gap-2 tab:hidden">
                                <a href="">Shipping & Returns Policy</a>
                                <a href="">Privacy Policy</a>
                                <a href="">Terms of Service</a>
                            </div>
                            <div className="hidden tab:flex">
                                <FaChevronDown />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 tab:border-b tab:border-gray-400 tab:py-5">
                        <div className="flex flex-col gap-5">
                            <p className="text-xl font-extrabold">Subscribe</p>
                            <p>Get Exclusive Deals & More!</p>
                            <div className="flex flex-col gap-5 tab:flex-row mob:gap-2">
                                <div>
                                    <input type="email" placeholder="Email address" className="w-auto py-3 px-4 rounded-md border-2 tab:w-64 mob:w-60" />
                                </div>
                                <div>
                                    <button className="bg-searchbg px-4 py-3 rounded-sm text-xl font-bold text-textwhite tab:text-lg mob:text-sm mob:py-4 hover:bg-[#ffab55]">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab:py-5 tab:border-b tab:border-gray-400">
                        <p className="text-xl font-extrabold">Follow us</p>
                        <div className="flex gap-2 mt-4 group">
                            <div>
                                <IoMdMail className="bg-gray-300 text-lg p-1 w-6 h-6 rounded-full hover:w-7 hover:h-7" />
                            </div>
                            <div>
                                <FaFacebook className="bg-gray-300 text-lg p-1 w-6 h-6 rounded-full hover:w-7 hover:h-7" />
                            </div>
                            <div>
                                <FaInstagram className="bg-gray-300 text-lg p-1 w-6 h-6 rounded-full hover:w-7 hover:h-7" />
                            </div>
                            <div>
                                <FaLinkedinIn className="bg-gray-300 text-lg p-1 w-6 h-6 rounded-full hover:w-7 hover:h-7" />
                            </div>
                            <div>
                                <FaWhatsapp className="bg-gray-300 text-lg p-1 w-6 h-6 rounded-full hover:w-7 hover:h-7" />
                            </div>
                            <div>
                                <FaYoutube className="bg-gray-300 text-lg p-1 w-6 h-6 rounded-full hover:w-7 hover:h-7" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-24 tab:text-center tab:mt-16">
                    <p className="text-xs text-gray-500">Copyright © 2024. Toycra.</p>
                </div>
            </footer>
        </>
    )
}