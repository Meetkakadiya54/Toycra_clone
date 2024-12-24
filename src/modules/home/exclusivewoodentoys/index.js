import Exclusivewiidebtoys from '../../../assets/img/Wooden_Toys_1710x570.webp';
import Exclusivewoodentoysfirst from '../../../assets/img/Open_Endeded_261x260.webp';
import Exclusivewoodentoyssecond from '../../../assets/img/Curious_Cub_261x260.webp';
import Exclusivewoodentoysthird from '../../../assets/img/Toy_879-02_261x260.webp';
import Exclusivewoodentoysfourth from '../../../assets/img/Toy_879-03_260x260.webp';
import Exclusivewoodentoysixth from '../../../assets/img/Toy_879-05_261x260.webp';
import Exclusivewoodentoysseventh from '../../../assets/img/Toy_879-06_260x260.webp';

export default function Exclusivewoodentoys() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4 tab:px-0  mob:px-0">
                <h1 className="text-center font-bold text-3xl mb-10 tab:px-4 mob:px-0 mob:text-2xl">Exclusive Wooden Toys</h1>
                <div>
                    <img src={Exclusivewiidebtoys} alt="" />
                </div>
                <div className='grid grid-cols-6 gap-4 mt-10 tab:grid-cols-3'>
                    <div>
                        <div>
                            <img src={Exclusivewoodentoysfirst} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Open Ended</p>
                    </div>
                    <div>
                        <div>
                            <img src={Exclusivewoodentoyssecond} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Curious Club</p>
                    </div>
                    <div>
                        <div>
                            <img src={Exclusivewoodentoysthird} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Viga</p>
                    </div><div>
                        <div>
                            <img src={Exclusivewoodentoysfourth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Tooky</p>
                    </div><div>
                        <div>
                            <img src={Exclusivewoodentoysixth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Eduedge</p>
                    </div><div>
                        <div>
                            <img src={Exclusivewoodentoysseventh} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Hilife</p>
                    </div>
                </div>
            </div>
        </>
    )
}