import Kindercraftfirst from '../../../assets/img/Toycra_Kindcraft-03_1709x570.webp';
import woodenbabycraftfirst from '../../../assets/img/Toy_764-01_260x260.webp';
import woodenbabycraftsecond from '../../../assets/img/Stroller_Pushchair_260x260.webp';
import woodenbabycraftthird from '../../../assets/img/High_Chair_260x260.webp';
import woodenbabycraftfourth from '../../../assets/img/Car_Seats_260x260.webp';
import woodenbabycraftfifth from '../../../assets/img/Playgym_Floor_mats_260x260.webp';
import woodenbabycraftsixth from '../../../assets/img/Bouncer_Rocker_Swing_261x260.webp';

export default function Kinderkraft() {
    return (
        <>
        <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4  tab:px-0  mob:px-0">
            <h1 className="text-center font-bold text-3xl mb-10 tab:px-4 mob:px-0 mob:text-2xl">Kinderkraft - Modern, Stylish and Functional Baby Gears</h1>
            <div>
                <img src={Kindercraftfirst} alt="" />
            </div>
            <div className='grid grid-cols-6 gap-4 mt-10 tab:grid-cols-3 mob:text-sm'>
                    <div>
                        <div>
                            <img src={woodenbabycraftfirst} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Cribs & Cots</p>
                    </div>
                    <div>
                        <div>
                            <img src={woodenbabycraftsecond} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Bouncer, Rocker & Swing</p>
                    </div>
                    <div>
                        <div>
                            <img src={woodenbabycraftthird} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Stroller & Pushchair</p>
                    </div><div>
                        <div>
                            <img src={woodenbabycraftfourth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>High Chair</p>
                    </div><div>
                        <div>
                            <img src={woodenbabycraftfifth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Car Seats</p>
                    </div><div>
                        <div>
                            <img src={woodenbabycraftsixth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Playgym & Floor mats</p>
                    </div>
                </div>
        </div>
        </>
    )
}