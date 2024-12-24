import logo from '../../../assets/logo/Toycra_Logo-01_5e134934-c608-4d7f-948b-1a51215cabbb_741x200.webp';
import { IoIosSearch } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Brands from '../../dropdownmenu/brands';
import Category from '../../dropdownmenu/category';
import Agewise from '../../dropdownmenu/agewise';
import Books from '../../dropdownmenu/books';

export default function Header() {
    return (
        <>
            <header className='sticky top-0 z-20 bg-white mob:pb-1'>
                <div>
                    <div className="bg-bgtomato py-3">
                        <p className="text-textwhite text-center font-extrabold font-nunito tab:text-sm mob:px-5 mob:text-xs">We are accepting only prepaid orders currently. Free Shipping.</p>
                    </div>

                    <div className='py-4 mx-6 tab:mx-0 grid grid-cols-[200px_1fr_150px] gap-8 tab:grid-cols-[20px_200px_1fr_30px] mob:grid-cols-[60px_1fr_30px] items-center tab:px-4 tab:gap-5 tab:py-3'>

                        <div className='hidden tab:block'>
                            <GiHamburgerMenu className='text-2xl' />
                        </div>
                        <div>
                            <img src={logo} alt="logo" className='w-64 tab:w-80 mob:w-52 cursor-pointer' />
                        </div>
                        <div className='w-full flex items-center mob:hidden cursor-pointer hover:shadow-md'>
                            <input type="text" placeholder="What are you looking for?" className="border border-gray-300 rounded-md px-4 py-2 w-full rounded-br-none rounded-tr-none h-12 tab:w-full " />
                            <div className='bg-searchbg p-2 rounded-br-md rounded-tr-md h-12 w-16 flex items-center '>
                                <IoIosSearch className='text-2xl mx-auto' fill='#ffffff' />
                            </div>
                        </div>

                        <div className='flex gap-8'>
                            <div className='flex gap-2 tab:hidden'>
                                <LuUser2 className='text-2xl cursor-pointer' stroke='#000000' />
                                <a href="" className='text-md font-semibold cursor-pointer'>Login</a>
                            </div>
                            <div>
                                <FiShoppingCart className='text-2xl cursor-pointer' stroke='#000000' />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-wrap gap-7 mx-6 pb-4 text-lg font-semibold text-headerpage tab:hidden ' >
                        <a href="" className='hover:text-gray-800'>Home</a>
                        <a href="" className='hover:text-gray-800'>Upto 70% items</a>
                        <a href="" className='hover:text-gray-800'>All Toys</a>

                        <div className='flex items-center gap-2 group hover:flex'>
                            <a href="">Brands</a>
                            <FaAngleDown className='text-xs' />
                            <div className='hidden group-hover:block absolute hover:block'>
                                <Brands />
                            </div>
                        </div>

                        <div className='flex items-center gap-2 group hover:flex'>
                            <a href="">Category</a>
                            <FaAngleDown className='text-xs' />
                            <div className='hidden group-hover:block absolute hover:block'>
                                <Category />
                            </div>
                        </div>
                        <div className='flex items-center gap-2 group hover:flex'>
                            <a href="">Age Wise</a>
                            <FaAngleDown className='text-xs' />
                            <div className='hidden group-hover:block'>
                                <Agewise />
                            </div>
                        </div>
                        <a href="" className='hover:text-gray-800'>Baby & Toddler</a>
                        <div className='flex items-center gap-2 group hover:flex'>
                            <a href="" className='hover:text-gray-800'>Books</a>
                            <FaAngleDown className='text-xs' />
                            <div className='hidden group-hover:block absolute hover:block'>
                                <Books/>
                            </div>
                        </div>
                        <a href="" className='hover:text-gray-800'>Bulk Order</a>
                        <a href="" className='hover:text-gray-800'>Gift Card</a>
                        <a href="" className='hover:text-gray-800'>About Us</a>
                        <a href="" className='hover:text-gray-800'>Contact Us</a>
                    </div>

                    <div className='my-0 mx-6 py-4 text-lg font-semibold text-headerpage tab:hidden'>
                        <a href="" className='hover:text-gray-800'>Toycra's Winter Wonderland (23&24 Dec) Ticket - Ahmedabad Only</a>
                    </div>

                    <div className='w-full hidden items-center tab:hidden mob:flex mb-2 px-2'>
                        <input type="text" placeholder="What are you looking for?" className="border border-gray-300 rounded-md px-4 py-2 w-[950px] rounded-br-none rounded-tr-none h-12 tab:w-full" />
                        <div className='bg-searchbg p-2 rounded-br-md rounded-tr-md h-12 w-16 flex items-center '>
                            <IoIosSearch className='text-2xl mx-auto' fill='#ffffff' />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}