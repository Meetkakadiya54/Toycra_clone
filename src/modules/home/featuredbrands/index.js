import Featurebrandsfirst from '../../../assets/img/Skillmatics_261x260_1.webp';
import Featurebrandssecond from '../../../assets/img/Shifu_261x260.webp';
import Featurebrandsthird from '../../../assets/img/Step2_260x260.webp';
import Featurebrandsfourth from '../../../assets/img/WR_261x260.webp';
import Featurebrandsfifth from '../../../assets/img/ELC_260x260.webp';
import Featurebrandsixth from '../../../assets/img/Rubabbu_261x260.webp';
import Featurebrandseventh from '../../../assets/img/Barbie_261x260.webp';
import Featurebrandseight from '../../../assets/img/Slime_260x260.webp';
import Featurebrandsninth from '../../../assets/img/IToys_261x260.webp';
import Featurebrandsten from '../../../assets/img/Go_Discover_261x260.webp';
import Featurebrandseleven from '../../../assets/img/Smartivity_261x260.webp';
import Featurebrandstwelve from '../../../assets/img/JCB_261x260.webp';

export default function Featuredbrands() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4 tab:px-0  mob:px-0">
                <h1 className="text-center font-bold text-3xl mb-10 tab:px-4 mob:px-0 mob:text-2xl">Featured Brands</h1>
                <div className='grid grid-cols-6 gap-4 mt-10 tab:grid-cols-3 mob:grid-cols-3'>
                    <div>
                        <div>
                            <img src={Featurebrandsfirst} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Skillmatics</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandssecond} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Playshifu</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandsthird} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Step2</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandsfourth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Wild Republic</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandsfifth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>ELC Toys</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandsixth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Rubbabu</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandseventh} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Barbie</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandseight} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>DIY Slime</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandsninth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>iToys</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandsten} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Go Discover</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandseleven} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Smartivity</p>
                    </div>
                    <div>
                        <div>
                            <img src={Featurebrandstwelve} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>My First JCB</p>
                    </div>
                </div>
            </div>
        </>
    )
}