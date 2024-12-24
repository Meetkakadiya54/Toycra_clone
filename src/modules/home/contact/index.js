import { PiTruck } from "react-icons/pi";
import { MdPhonelinkRing } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { CiFaceSmile } from "react-icons/ci";
import Slider from "react-slick";

export default function Contact() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4.2,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },    
            {
                breakpoint: 768,
                settings: { 
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1 
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="">
                <div className=" mx-20 tab:mx-0 mt-16 ">
                    <Slider {...settings}>
                        <div className="text-center ">
                            <PiTruck className="text-5xl text-icon-color mx-auto" />
                            <p className="font-extrabold text-xl my-2">Free Shipping</p>
                            <p>On everything</p>
                        </div>
                        <div className="text-center ">
                            <MdPhonelinkRing className="text-5xl text-icon-color mx-auto" />
                            <p className="font-extrabold text-xl my-2">Give Us A Call</p>
                            <p>Or Whatsapp on - 9638993429</p>
                        </div>
                        <div className="text-center ">
                            <TfiEmail className="text-5xl text-icon-color mx-auto" />
                            <p className="font-extrabold text-xl my-2">Bulk Inquiry</p>
                            <p>Email - Toycra@gmail.com</p>
                        </div>
                        <div className="text-center  tab:hidden">
                            <CiFaceSmile className="text-5xl text-icon-color mx-auto" />
                            <p className="font-extrabold text-xl my-2 mx-10">Toycra's Quality Assurance</p>
                            <p className=" mx-5">Every product is original, fresh and of high quality</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </>

    )
}