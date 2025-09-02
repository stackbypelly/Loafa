import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Delivery from '../../Component/Delivery/Delivery';
import Brand from '../../Component/Brand/Brand';
import Features from '../../Component/Features/Features';
import Categories from '../../Component/Categories/Categories';
import Product from '../../Component/Product/Product';
import Client from '../../Component/Client/Client';
import Recent from '../../Component/Recent/Recent';


const Home = () => {
    return (
        <div>
            {/* banner component */}

            <div className="w-full min-h-[850px] bg-[#f0f2f3] text-[#000] flex items-center justify-center rounded-4xl">
                <Banner></Banner>
            </div>

            {/* banner component end */}

            {/* Delivery Component  */}

            <div className="deilivery_component w-full ">
                <Delivery></Delivery>
            </div>

            {/* brand component */}
            <div className="brand flex items-center justify-center h-[171px] w-full mt-8 mb-8">
                <Brand></Brand>
            </div>

            {/* Features component */}

            <div className="w-full flex items-center justify-center mb-[80px]">
                <Features></Features>
            </div>

            {/* Categories Component  */}

            <div className="w-full flex items-center justify-center mb-[80px]">
                <Categories></Categories>
            </div>

            {/* Product Component */}

            <div className="w-full flex items-center justify-center pb-[80px]">
                <Product></Product>
            </div>

            {/* Client component */}

            <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pt-[80px] pb-[80px]">
                <Client></Client>
            </div>

            {/* Recent Component */}
            <div className="w-full flex items-center justify-center pt-[80px] pb-[80px]">
                <Recent></Recent>
            </div>


        </div>
    );
};

export default Home;