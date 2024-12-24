import Buttonmessage from "../../shared/button/buttonmessage";
import Buttonwhatsapp from "../../shared/button/buttonwhatsapp";

export default function Contactus() {
    return (
        <>
        <Buttonmessage />
        <Buttonwhatsapp />
            <div className=" max-w-[650px] mx-auto my-20 mob:mx-3">
                <h1 className="font-extrabold text-4xl text-center">Contact Us</h1>
                <p className=" my-10 font-medium text-lg mob:text-sm mob:leading-6">We are an extremely customer centric organization and our primary goal is to ensure that every Toycra customer has a wonderful experience while using our products. Any feedback, be it a compliment or a complaint, is much appreciated. Please feel free to get in touch with us and we will get back to you immediately!</p>
                <h1 className="font-extrabold text-4xl">Contact Us at :</h1>
                <div className="font-medium text-lg flex flex-col gap-1 mt-5">
                    <p>Call / Whatsapp - 09638993429</p>
                    <p>Email - Help@toycra.com</p>
                    <p>Or fill below form -</p>
                </div>
                <div className="mt-10 flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-5 mob:block">
                        <input type="text" className="border w-full px-2 py-3 mob:mb-5" placeholder="Name"/>
                        <input type="text" className="border w-full px-2 py-3" placeholder="Email"/>
                    </div>
                    <input type="phone" className="border w-full px-2 py-3" placeholder="Phone Nummber"/>
                    <textarea name="message" className="border w-full px-2 py-14 placeholder:flex" placeholder="Message">Message</textarea>
                    <div>
                        <button className="bg-searchbg text-white px-6 py-2 font-semibold text-lg rounded-sm">Send</button>
                    </div>
                </div>
            </div>

        </>
    )
}