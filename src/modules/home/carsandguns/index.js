import Carsandgunsbabyfirst from '../../../assets/img/Nerf_260x260.webp';
import Carsandgunsbabysecond from '../../../assets/img/Toy_880-05_260x260.webp';
import Carsandgunsbabythird from '../../../assets/img/Marvel_9b7a91f4-e6e1-44b0-a1ec-a32add46fb9b_260x260.webp';
import Carsandgunsbabyfourth from '../../../assets/img/Beyblade_260x260.webp';
import Carsandgunsbabyfifth from '../../../assets/img/HW_261x260.webp';
import Carsandgunsbabysixth from '../../../assets/img/Majorette_260x260.webp';

export default function Carsandguns() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4 tab:px-0  mob:px-0">
                <h1 className="text-center font-bold text-3xl mb-10 tab:px-4 mob:px-0 mob:text-2xl">Cars, Guns & Action Figures</h1>
                <div className='grid grid-cols-6 gap-4 mt-10 tab:grid-cols-3'>
                    <div>
                        <div>
                            <img src={Carsandgunsbabyfirst} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Nerf</p>
                    </div>
                    <div>
                        <div>
                            <img src={Carsandgunsbabysecond} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Transformers</p>
                    </div>
                    <div>
                        <div>
                            <img src={Carsandgunsbabythird} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Marvel</p>
                    </div><div>
                        <div>
                            <img src={Carsandgunsbabyfourth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Beyblade</p>
                    </div><div>
                        <div>
                            <img src={Carsandgunsbabyfifth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Hot Wheels</p>
                    </div><div>
                        <div>
                            <img src={Carsandgunsbabysixth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Majorette</p>
                    </div>
                </div>
            </div>
        </>
    )
}