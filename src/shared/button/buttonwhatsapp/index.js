import { FaWhatsapp } from "react-icons/fa";
import Whatsaap from "../../dropdownmenu/whatsapp";

export default function Buttonwhatsapp() {
    return (
        <>
        <div className="whatsaap fixed bottom-4 right-4 z-20 drop-shadow-2xl cursor-pointer group">
                <FaWhatsapp className="text-4xl text-textwhite bg-green-500 rounded-full p-2 h-14 w-14" />
                <div className="hidden group-hover:block">
                    <Whatsaap/>
                </div>
            </div>
        </>
    )
}