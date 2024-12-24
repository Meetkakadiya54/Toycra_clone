import { BiMessageRoundedDots } from "react-icons/bi";
import Message from "../../dropdownmenu/message";

export default function Buttonmessage() {
    return (
        <>
            <div className="message fixed bottom-20 right-4 z-20 drop-shadow-2xl cursor-pointer group">
                <BiMessageRoundedDots className="text-4xl text-textwhite bg-cyan-600 rounded-full p-2 h-14 w-14" />
                <div className="hidden group-hover:block">
                    <Message />
                </div>
            </div>
        </>
    )
}