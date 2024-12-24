import { GoDash } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import Productcard from "../../../shared/productcard";
import { BiSortAlt2 } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";

export default function Products() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4  tab:px-0  mob:px-0">
                <div className="grid grid-cols-[180px_1fr] gap-4 tab:block">
                    <div className="filter tab:hidden  ">
                        <h3 className="font-extrabold text-xl">Filters</h3>
                        <div className="price border-t border-b mt-5 py-5">
                            <div className="price-item flex justify-between items-center" >
                                <p className="font-semibold text-lg">Price</p>
                                <div>
                                    <GoDash />
                                </div>
                            </div>
                            <div className="price-range pt-4">
                                <div className="price-item-start flex items-center">
                                    <div>
                                        <LuIndianRupee />
                                    </div>
                                    <input type="text" className="w-full border py-3 px-1 rounded-md" placeholder="From" />
                                </div>
                                <div className="price-item-end flex items-center">
                                    <div>
                                        <LuIndianRupee />
                                    </div>
                                    <input type="text" className="w-full border py-3 px-1 mt-1 rounded-md" placeholder="To" />
                                </div>
                            </div>
                        </div>
                        <div className="brand flex justify-between items-center border-b py-3">
                            <p className="font-semibold text-lg">Brand</p>
                            <div>
                                <FaAngleDown />
                            </div>
                        </div>
                        <div className="product_type  flex justify-between items-center border-b py-3">
                            <p className="font-semibold text-lg">Product Type</p>
                            <div>
                                <FaAngleDown />
                            </div>
                        </div>
                        <div className="availability  flex justify-between items-center border-b py-3">
                            <p className="font-semibold text-lg">Availability</p>
                            <div>
                                <FaAngleDown />
                            </div>
                        </div>
                        <div className="age flex justify-between items-center border-b py-3">
                            <p className="font-semibold text-lg">Age</p>
                            <div>
                                <FaAngleDown />
                            </div>
                        </div>
                    </div>
                    <div className="hidden tab:flex items-center gap-6 mb-14">
                        <div className="flex gap-1 items-center">
                            <div>
                                <IoFilter className="text-2xl text-[#046e82]" />
                            </div>
                            <p className="text-[#046e82] font-semibold">Filters</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div>
                                <BiSortAlt2 className="text-2xl text-[#046e82]" />
                            </div>
                            <p className="text-[#046e82] font-semibold">Sort by</p>
                        </div>
                    </div>
                    <div className='products grid grid-cols-4 gap-4 tab:grid-cols-3 mob:grid-cols-2'>
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                    </div>
                </div>
            </div>
        </>
    )
}