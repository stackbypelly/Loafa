import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {

    const products = [
        {
            id: 1,
            title: "Best Furniture Collection For Your Interior",
            subTitle: "Welcome to Chairs",
            image: "src/assets/Banner/banner_image.png"
        },
        {
            id: 2,
            title: "Best Furniture Collection For Your Interior",
            subTitle: "Welcome to Chairs",
            image: "src/assets/Banner/banner_image.png"
        },
        {
            id: 3,
            title: "Best Furniture Collection For Your Interior",
            subTitle: "Welcome to Chairs",
            image: "src/assets/Banner/banner_image.png"
        },
        {
            id: 4,
            title: "Best Furniture Collection For Your Interior",
            subTitle: "Welcome to Chairs",
            image: "src/assets/Banner/banner_image.png"
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='lg:container'>
            <div className="slider-container slider_container w-full h-full">
                <Slider {...settings}>
                    {
                        products.map(product => (
                            <div key={product?.id} className="banner_slide_item">

                                {/* banner text */}

                                <div className="banner_title">
                                    <p className="text-sm font-inter text-[#272343] uppercase">{product?.subTitle}</p>
                                    <h2 className="text-6xl text-[#272343] font-inter capiterlize leading-16 max-w-[671px] w-full font-bold mb-5">{product?.title}</h2>
                                    <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[52px] bg-[#029fea] rounded-lg text-white font-semibold capitalize cursor-pointer">Shop now<MoveRight /></button>
                                </div>

                                {/* banner image */}
                                <div className="banner_image  w-[40rem] h-full flex items-center justify-end">
                                    <img src={product?.image} alt={product?.name} />
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Banner;