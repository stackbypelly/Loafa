import { Section, User } from 'lucide-react';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Client = () => {

    const clientsays = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu ",
            name: "Sarah Smith",
            position: "CEO, Company",
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu ",
            name: "Sarah Smith",
            position: "CEO, Company",
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu  ",
            name: "Sarah Smith",
            position: "CEO, Company",
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu ",
            name: "Sarah Smith",
            position: "CEO, Company",
        },
    ]

    const settings = {
       dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
    };
    return (
        <div className='lg:container mx-auto'>
            <SectionTitle title="What is Client Says about us" mb='mb-11' textAlign={'center'} ></SectionTitle>

            <div className="slider-container w-full h-full">
                <Slider {...settings}>
                    {
                        clientsays?.map((client, index) => (
                            <div key={index} className='p-12 border border-[#e1e1e3] rounded-lg '>
                                <p className='text-2xl mb-4 text-[#636270] font-inter font-normal client_say_description'>{client?.description} </p>
                                <div className="flex items-center">
                                    <h4><User size="4rem" /></h4>
                                    <div>
                                        <h4 className='text-2xl text-[#272343] font-inter font-medium capitalize mb-1.5'>{client?.name}</h4>
                                        <p className='text-base text-[#9a9caa] font-inter font-nomal capitalize'>{client?.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Client;