import { Clock3, Percent, ShieldCheck, Truck } from 'lucide-react';
import React from 'react';

const Delivery = () => {
    return (
        <div className='lg:container mx-auto shadow-md p-7 rounded-2xl bg-white'>
            <div className="grid grid-cols-4 ">
                <div className="delivery_wrapper text-black">
                    <div className="flex items-center gap-4">
                        <p><Percent size='3rem' /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Discount</h4>
                            <p className="text-sm text-[#9a9caa]font-inter font-normal">every week new sales</p>
                        </div>
                    </div>
                </div>
                <div className="delivery_wrapper text-black">
                    <div className="flex items-center gap-4">
                        <p><Truck size='3rem'/></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Free Dilivery </h4>
                            <p className="text-sm text-[#9a9caa]font-inter font-normal">100% Free for all orders</p>
                        </div>
                    </div>
                </div>
                <div className="delivery_wrapper text-black">
                    <div className="flex items-center gap-4">
                        <p><Clock3 size='3rem'/></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Great Suport 24/7 </h4>
                            <p className="text-sm text-[#9a9caa]font-inter font-normal">We care your experinces </p>
                        </div>
                    </div>
                </div>
                <div className="delivery_wrapper text-black">
                    <div className="flex items-center gap-4">
                        <p><ShieldCheck size='3rem'/></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Secure Payment </h4>
                            <p className="text-sm text-[#9a9caa]font-inter font-normal">100% Secure Payment Method</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Delivery;