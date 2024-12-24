import Gamescornerfirst from '../../../assets/img/PK30-15_843x422.webp';
import Gamescornesecond from '../../../assets/img/BO-05-06_1264x422.webp';

export default function Gamescorner() {
    return (
        <>
            <div className="max-w-[1480px] mx-auto my-20 px-16 tab:mx-4 tab:px-0  mob:px-0">
                <h1 className="text-center font-bold text-3xl mb-10  mob:text-2xl">Games Corner</h1>
                <div className='grid grid-cols-2 gap-5 mob:flex flex-col'>
                    <div>
                        <img src={Gamescornerfirst} alt="" className='h-80 object-cover tab:h-48'/>
                    </div>
                    <div>
                        <img src={Gamescornesecond} alt="" className='h-80 object-cover tab:h-48 mob:h-auto'/>
                    </div>
                </div>
            </div>
        </>
    )
}