import { FaAngleRight } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

export default function Herobanner() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4  tab:px-0  mob:px-0">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold" >Your cart</h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <h3 className="text-[#046E82]">Continue shopping</h3>
                        <div><FaAngleRight className="text-lg text-[#046E82]" /></div>
                    </div>
                </div>
                <div className="grid grid-cols-[1000px_1fr] tab:block my-16 gap-14">
                    <div className="bg-gray-100 p-5 mb-5 hidden tab:block">
                        <div className="flex text-sm items-center gap-1">
                            <p>Free shipping on orders over</p>
                            <p className="font-semibold my-1">Rs. 100.00!</p>
                        </div>
                        <div className="py-[2px] bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="border  text-center flex flex-col justify-center h-[350px] shadow-sm">
                        <p>Your cart is empty</p>
                        <div className="flex gap-2 items-center bg-searchbg text-white py-3 px-4 w-52 rounded-sm mx-auto my-5">
                            <div>
                                <BsCart2 className="text-xl" />
                            </div>
                            <button className="font-semibold">Continue shopping</button>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-5 tab:hidden">
                                <p>Free shipping on orders over</p>
                                <p className="font-semibold my-1">Rs. 100.00!</p>
                            <div className="py-[2px] bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="bg-gray-100 p-5 mt-5 ">
                            <p className="leading-6">Free Shipping. We Ship most products within 24 hours. Delivery usually takes 4-5 working days for most cities. You will get whatsapp / Email with tracking once product is shipped.</p>
                            <p className="font-semibold my-6 underline">Toycra Assurance -</p>
                            <p>All products are Fresh and Original only.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}