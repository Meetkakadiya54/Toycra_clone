import { FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Blogposts() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4 tab:px-0  mob:px-0">
                <h1 className="text-center font-bold text-3xl mb-10  mob:text-2xl">Blog Posts</h1>
                <div className="grid grid-cols-2 gap-5 mob:flex mob:flex-col">
                    <div className="border p-4 text-center py-20 tab:py-10 mob:py-8">
                        <p className="text-textgray text-lg mb-2">October 30 | 2023 Tanya Shah</p>
                        <h2 className="text-3xl font-bold">Discover the Magic of Magnatiles: A Versatile Investment Toy - By Tanya Shah</h2>
                        <p className="my-5">Magnatiles, the beloved magnetic building toy by Valtech USA, has been capturing the imagination of children and adults alike for years. Now, with the production transitioned to Toycra in India, Magnatiles continue to uphold their reputation as a premier investment...</p>
                        <div className="flex justify-center gap-2 items-center group">
                            <a href="" className="text-[#046E82] text-lg">Read now </a>
                            <FaChevronRight className="text-[#046E82] text-sm group-hover:hidden" />
                            <FaArrowRightLong className="text-[#046E82] text-sm hidden group-hover:block"/>

                        </div>
                    </div>
                    <div className="border p-4 text-center py-20 tab:py-10 mob:py-8">
                        <p className="text-textgray text-lg mb-2">October 30 | 2023 Tanya Shah</p>
                        <h2 className="text-3xl font-bold">Embrace the Mess: The Importance of Messy Play for Toddlers - By Tanya Shah</h2>
                        <p className="my-5">As parents, we often find ourselves caught in a constant battle between encouraging our children's creativity and keeping our homes tidy. However, what if we told you that a bit of mess can actually be incredibly beneficial for your toddler's...</p>
                        <div className="flex justify-center gap-2 items-center group">
                            <a href="" className="text-[#046E82] text-lg">Read now </a>
                            <FaChevronRight className="text-[#046E82] text-sm group-hover:hidden" />
                            <FaArrowRightLong className="text-[#046E82] text-sm hidden group-hover:block"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-2 items-center mt-5 mb-10 group">
                    <a href="" className="text-[#046E82] text-lg">See more </a>
                    <FaChevronRight className="text-[#046E82] text-sm group-hover:hidden" />
                    <FaArrowRightLong className="text-[#046E82] text-sm hidden group-hover:block"/>
                </div>
            </div>
        </>
    )
}