import { GoDotFill } from "react-icons/go";
import { IoIosClose } from "react-icons/io";
import spiderman from '../../../assets/img/spider_message.webp';
import { BiMessageRoundedDots } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { GiPaperClip } from "react-icons/gi";

export default function Message() {
    return (
        <>
            <div className="fixed bottom-[-65px] right-16 z-30 ">
                <div className="bg-bgwhite w-[410px] rounded-xl shadow-xl">
                    <div className="flex justify-between items-center p-4 ">
                        <div className="flex gap-2 items-center">
                            <div>
                                <GoDotFill className="text-[#1f89f8]" />
                            </div>
                            <p>Message us</p>
                        </div>
                        <div>
                            <IoIosClose className="text-xl" />
                        </div>
                    </div>
                    <div className="mt-28">
                        <div>
                            <img src={spiderman} alt="" className="w-24 h-24 mx-auto" />
                        </div>
                        <p className="w-32 mx-auto text-center my-1">Spidey-The Toy Specialist</p>
                        <p className="w-32 mx-auto text-center text-sm italic my-1 text-zinc-400 font-light">Active 1 hour ago</p>
                    </div>
                    <p className="w-[340px] mx-auto text-center mt-12">Ask us anything – we’ll get back to you here or by email.</p>
                    <div className="flex mt-28 items-center gap-2 mx-[138px] mb-2">
                        <BiMessageRoundedDots className="text-4xl text-gray-300 h-7 w-7" />
                        <p className="text-xs text-gray-400 ">We run on chatra</p>
                    </div>
                    <div className="border-t-2 flex py-2 px-4 items-center">
                        <input type="text" className="w-full mx-auto my-2 rounded-md  placeholder:text-gray-400 placeholder:font-light" placeholder="Message..." />
                        <div>
                            <CiFaceSmile className="text-2xl text-gray-300 mr-2"/>
                        </div>
                        <div>
                            <GiPaperClip className="text-2xl text-gray-300"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}