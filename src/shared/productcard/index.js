import Originalsecond from '../../assets/img/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra_900c419b-c0c0-41d4-865f-4d69874aa8f4_277x277.webp';
import Originalsecondbehind from '../../assets/img/Magna-Tiles-Clear-Colors-100-Piece-Set-Construction-Magna-Tiles-Toycra-2_994x994.webp';

export default function Productcard() {
    return (
        <>
            <div>
                <div className='itembox1 border p-4 group hover:shadow-xl '>
                    <div className='group-hover:hidden'>
                        <img src={Originalsecond} alt="" className='w-56 mob:w-full h-full ' />
                    </div>
                    <div className='hidden group-hover:block'>
                        <img src={Originalsecondbehind} alt="" className='w-56 mob:w-full ' />
                    </div>
                    <div className='flex flex-col gap-1 mt-[-20px]'>
                        <p className='bg-[#f04f36] text-white w-20 text-center text-sm font-medium'>Save 33%</p>
                        <div>
                            <p className='text-xs text-gray-400'><del> Rs. 8,999.00</del></p>
                            <p className='text-[#f04f36] text-2xl'>Rs. 5,999.00</p>
                        </div>
                        <div>
                            <p className=' mob:text-sm'>Manga Tiles Clear Colors</p>
                            <p className=' mob:text-sm'>100 Piece Set</p>
                        </div>
                        <p className='text-gray-400 text-sm'>Manga-Tiles</p>
                        <p className='text-green-700 text-sm'>In stock</p>

                        <div className='hidden group-hover:grid  group-hover:grid-cols-2 group-hover:gap-2 tab:grid'>
                            <button className='border border-searchbg rounded-sm py-2 text-bgtomato font-semibold tab:mb-2 mob:text-sm'>Quick shop</button>
                            <button className='bg-searchbg rounded-sm py-2 font-semibold text-textwhite  mob:text-sm'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}