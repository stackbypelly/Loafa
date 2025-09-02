import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";


const Product = () => {

    const [active, setActive] = useState({
        id: 0,
        product: "all"
    });


    const productTitle = [

        {
            id: 0,
            title: "all",
            product: "all"
        },
        {
            id: 1,
            title: "newest",
            product: "N ewest"
        },
        {
            id: 2,
            title: "trending",
            product: "trending"
        },
        {
            id: 3,
            title: "best seller",
            product: "best seller"
        },
    ]

     const product = [
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "Newest",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "Newest"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "trending",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "trending"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "best seller",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "best seller"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
        {
            title: "Library stool",
            status: "all",
            price: "$250",
            image: "src/assets/features/stool.jpg",
            currentPrice: "$200",
            product: "all"
        },
       

    ]

    const productfiltered = product.filter(product => product.product === active?.product);
    console.log(productfiltered);

    



    return (
        <div className="lg:container mx-auto">
            <div className="flex flex-col items-center justify-center ">
                <SectionTitle title={'Our Product'} texlAlign={'center'} mb={'mb-5'}   ></SectionTitle>

                <div className=" flex items-center justify-center gap-6 mb-11 ">
                    {
                        productTitle?.map((title, index) => (
                            <button key={title?.id}

                                onClick={() => setActive({
                                    id: title?.id,
                                    product: title?.product
                                })}

                                className={`text-base font-inter font-black uppercase cursor-pointer ${active?.id === index ? 'text-[#029fea]' : 'text-[#272343]'
                                    }`}>
                                {title?.title}
                            </button>
                        ))
                    }
                </div>

                <div className="grid grid-cols-4 items-center gap-6">
                    {
                        productfiltered?.map((product, index) => (
                            <div key={index} className='p-4'>
                                <div className="feature_image mb-4 relative">
                                <img className='w-full max-h-[312px] rounded-lg object-cover' src={product?.image} alt={product?.title} />
                                {
                                    product?.status && (
                                        <div className='absolute top-4 left-4 bg-[#029fea] text-white  px-2 py-1 rounded-lg'>
                                            <button className='text-sm font-inter font-normal'>{product?.status}</button>
                                        </div>
                                    )
                                }

                                </div>
                                <div className="feature_content">
                                    <div className="flex items_center justify-between">
                                        <h4 className="text-base text-[#029fea] capitalize font-inter font-normal mb-4" >{product?.title}</h4>
                                        <span className='bg-[#029fea] h-[44px] w-[44px] rounded-lg flex items-center justify-center'><ShoppingCart size='1.5rem' color='#fff'/></span>
                                    </div>
                                    <p className='text-xl flex items-center gap-2 text-[#272343] font-semibold font-inter'>
                                        {product?.price}
                                        {
                                            product?.currentPrice && (
                                                <span className='text-sm text-[#9a9caa] font-inter font-normal'>{product?.currentPrice} </span>
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Product;