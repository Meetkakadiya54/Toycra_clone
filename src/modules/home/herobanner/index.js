import Slider from "react-slick";
import herobannersliderfirst from '../../../assets/img/WW_Ticket1_1901x634.webp';
import herobannerslidertwo from '../../../assets/img/Web_Banner_6822d4a3-e5c6-4692-90bd-9f626224479d_1902x634.webp';
import herobannersliderthree from '../../../assets/img/toyshop_main_banner_1902x634.webp';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import herobannersliderfirsttab from '../../../assets/img/herobannerTab.webp';
import herobannerslidertwoTab from '../../../assets/img/herobbaner2Tab.webp';
import herobannersliderthreeTab from '../../../assets/img/herobbaner3Tab.webp';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-60 right-12 z-10 cursor-pointer tab:top-48'
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <div>
                <AiOutlineRight className="text-5xl" fill="white" />
            </div>
        </div>

    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='absolute top-60 left-12 z-10 cursor-pointer tab:top-48'
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <div >
                <AiOutlineLeft className="text-5xl" fill="white" />
            </div>
        </div>
    );
}
export default function HeroBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };
    return (
        <>
            <div className="">
                <Slider {...settings}>
                    <div>
                        <div className=" tab:hidden block">
                            <img src={herobannersliderfirst} alt="" />
                        </div>
                        <div className="hidden tab:block">
                            <img src={herobannersliderfirsttab} alt="" />
                        </div>
                    </div>

                    <div>
                        <div className=" tab:hidden block">
                            <img src={herobannerslidertwo} alt="" />
                        </div>
                        <div className="hidden tab:block">
                            <img src={herobannerslidertwoTab} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className=" tab:hidden block">
                            <img src={herobannersliderthree} alt="" />
                        </div>
                        <div className="hidden tab:block">
                            <img src={herobannersliderthreeTab} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}