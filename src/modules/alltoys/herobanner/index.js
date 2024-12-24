import { FaAngleRight } from "react-icons/fa";  

export default function Herobanner() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4  tab:px-0  mob:px-0">
                <div className="flex gap-2 items-center">
                    <h3 className="text-[#046E82]">Home</h3>
                    <div><FaAngleRight className="text-sm text-gray-400" /></div>
                    <h3 className="text-gray-400">All Toys</h3>
                </div>
                <h1 className="font-extrabold text-5xl my-9 ">All Toys</h1>
                <p className=" text-lg max-w-[1200px]"><span className="font-semibold">Play To Grow </span>- this was the mantra that kickstarted a passionate dream called Toycra. A dream to ensure every child gets access to the most mindblowing, quality educational toys & games that are both developmental & super fun!</p>
                <p className="text-lg max-w-[1200px] my-8">For the last 11 years, we have been carefully selecting the best, most unique toys and games from all corners of the world. We are proud of our toys of unparalleled quality and innovative concepts, games that challenge and entertain, and books that stay with you forever.</p>

                
            </div>
        </>
    )
}