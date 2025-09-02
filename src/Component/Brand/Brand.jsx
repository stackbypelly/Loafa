

const Brand = () => {

    const brands = [
        {
        id: 1,
        image: 'src/assets/Brand/brand_cib.png',
        },
        {
        id: 2,
        image: 'src/assets/brand/brand_zaper.webp',
        },
        {
        id: 3,
        image: 'src/assets/Brand/brand_cib.png',
        },
        {
        id: 4,
        image: 'src/assets/brand/brand_zaper.webp',
        },
        {
        id: 5,
        image: 'src/assets/Brand/brand_cib.png',
        },
        {
        id: 6,
        image: 'src/assets/brand/brand_zaper.webp',
        },
        {
        id: 7,
        image: 'src/assets/Brand/brand_cib.png',
        },
    ]

    return (
        <div className='lg:container mx-auto '>
            <div className="grid grid-cols-7 items-center justify-center gap-5">
                {
                brands.map((brand) => (
                    <div key={brand?.id} className="brand-item">
                        <img className="w-auto h-auto" src={brand?.image} alt="brand" />
                    </div>

                )
                )}
            </div>
        </div>
    );
};

export default Brand;