import Artandcraftsweb from '../../../assets/img/33-01_1515x505.webp';
import Artandcraftbabyfirst from '../../../assets/img/Avenir_229x229.webp';
import Artandcraftbabysecond from '../../../assets/img/Jarmelo_229x229.webp';
import Artandcraftbabythird from '../../../assets/img/Crayola_99fbc6b3-42f2-45f3-ad17-88606b43d5e4_229x229.webp';
import Artandcraftbabyforth from '../../../assets/img/Toy_875-05_229x229.webp';
import Artandcraftbabyfive from '../../../assets/img/Toy_875-06_229x229.webp';
import Artandcraftbabysix from '../../../assets/img/Toy_875-08_d3b74846-a25e-4870-9af0-f562f9968de9_229x229.webp';

export default function Artandcrafts() {
    return (
        <>
        <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4 tab:px-0  mob:px-0">
            <h1 className="text-center font-bold text-3xl mb-10 tab:px-4 mob:px-0 mob:text-2xl">Arts, Crafts and DIY</h1>
            <div>
                <img src={Artandcraftsweb} alt="" />
            </div>
            <div className='grid grid-cols-6 gap-4 mt-10 tab:grid-cols-3'>
                    <div>
                        <div>
                            <img src={Artandcraftbabyfirst} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Avenir</p>
                    </div>
                    <div>
                        <div>
                            <img src={Artandcraftbabysecond} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Jaramelo</p>
                    </div>
                    <div>
                        <div>
                            <img src={Artandcraftbabythird} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Crayola</p>
                    </div><div>
                        <div>
                            <img src={Artandcraftbabyforth} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Perplay</p>
                    </div><div>
                        <div>
                            <img src={Artandcraftbabyfive} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Doodle Hog</p>
                    </div><div>
                        <div>
                            <img src={Artandcraftbabysix} alt="" className='w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'/>
                        </div>
                        <p className='text-center mt-7 text-[#046E82] font-semibold text-lg mob:text-sm'>Imagimake</p>
                    </div>
                </div>
        </div>
        </>
    )
}