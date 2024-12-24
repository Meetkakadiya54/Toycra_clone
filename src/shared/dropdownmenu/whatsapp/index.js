import { FaWhatsapp } from "react-icons/fa";


export default function Whatsaap() {
    return (
        <>
            <div className="fixed bottom-0 right-16 z-20 ">
                <div className="w-[270px] border rounded-3xl px-4 py-6 text-center flex flex-col gap-5 bg-white">
                    <h3 className="font-bold text-2xl">Hi!</h3>
                    <p className="text-sm">We are here to help you! Chat with us on WhatsApp for any queries.</p>
                    <button className="flex bg-green-500 text-md items-center text-white w-full font-extrabold tracking-widest rounded-full px-7 py-1">
                        <FaWhatsapp className="text-4xl text-textwhite bg-green-500 rounded-full p-2 h-10 w-10" />
                        START CHAT
                    </button>
                    <a className="text-xs">Powered by interakt.shop</a>
                </div>
            </div>
        </>
    )
}