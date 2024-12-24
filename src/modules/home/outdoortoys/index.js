import Outdoortoysweb from '../../../assets/img/Smoby_1710x570.webp';
import Outdoortoysfirst from '../../../assets/img/Play_Houses_40d4a0ed-c2d7-4919-98c6-fdd09ce538ea_404x404.webp';
import Outdoortoyssecond from '../../../assets/img/Slide_2cf92426-58b0-45d0-99e1-4b85f1c32f47_404x404.webp';
import Outdoortoysthird from '../../../assets/img/Tram_404x404.webp';
import Outdoortoysfourth from '../../../assets/img/Rolly1_74d66518-6216-4f40-8fa4-1cb5c22cc31f_404x404.webp';

export default function Outdoortoys() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4 tab:px-0  mob:px-0">
                <h1 className="text-center font-bold text-3xl mb-10  mob:text-2xl">Outdoor Toys</h1>
                <div>
                    <img src={Outdoortoysweb} alt="" />
                </div>
                <div className='grid grid-cols-4 gap-5 mt-10 tab:grid-cols-2'>
                    <div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={Outdoortoysfirst} alt="" className='rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>House</p>
                    </div>
                    <div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={Outdoortoyssecond} alt="" className='rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Slides & Play Centers</p>
                    </div>
                    <div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={Outdoortoysthird} alt="" className='rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Trampoline & Outdoor Fun</p>
                    </div>
                    <div>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={Outdoortoysfourth} alt="" className='rounded-lg w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Rides Ons</p>
                    </div>
                </div>
            </div>
        </>
    )
}