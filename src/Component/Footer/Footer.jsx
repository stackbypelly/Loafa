import { Armchair, Banknote, CreditCard, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router';


const Footer = () => {

    return (
        <footer>



            

            <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
                <div className="lg:container mx-auto">

                    <div className="grid grid-cols-4">

                        <div>

                            {/* footer component */}
                            <div className="logo_wrapper mb-7">
                                <Link to="/" className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"><Armchair size="2rem" color="#029fea" /> Comforty</Link>
                            </div>
                            <p className='text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad atque consequatur sed amet voluptas numquam non quis sequi aliquid minima! Officia sed tenetur necessitatibus saepe architecto fugit est reprehenderit dolorem?</p>

                            <div className="footer_social gap-4 flex items-center">

                                <Link className='p-3 rounded-full border-[#029fea] inline-block border-[1px]'><Facebook size="1.5rem" color='#029fea' /></Link>

                                <Link className='p-3  inline-block'><Twitter size="1.5rem" color='#029fea' /></Link>

                                <Link className='p-3  inline-block'><Instagram size="1.5rem" color='#029fea' /></Link>

                                <Link className='p-3  inline-block'><Youtube size="1.5rem" color='#029fea' /></Link>

                            </div>
                        </div>

                        <div className="footer_wrapper">
                            <h3 className='text-xl text-[#9a9caa] font-inter font-medium uppercase '>Category</h3>
                            <ul className='space-y-2 mt-4'>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>Furniture</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>Beds</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>Sofas</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>Armchairs</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>Dining Tables</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>Chairs</Link></li>
                            </ul>
                        </div>
                        <div className="footer_wrapper">
                            <h3 className='text-xl text-[#9a9caa] font-inter font-medium uppercase '>Support</h3>
                            <ul className='space-y-2 mt-4'>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>help & support</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>tearms and condition</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>privacy policy</Link></li>
                                <li><Link to="/" className='text-base text-[#272343] font-inter font-normal capitalize'>help</Link></li>
                            </ul>
                        </div>
                        <div className="footer_wrapper">
                            <h3 className='text-xl text-[#9a9caa] font-inter font-medium uppercase '>Newsletter</h3>
                            <form action="#" className='max-w-[424px] w-full flex items-center gap-2'>
                                <input type="text" placeholder='Your Email...' className='max-w-[285px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2' />
                                <button type="submit" className='text-base text-white font-semibold capitalize w-[127px] h-[46px] bg-[#029fea] rounded-lg cursor-pointer' >Subscribe</button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>


            <div className="footer_bottom w-full h-[75px] flex items-center justify-center  ">
                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className='text-base text-[#9a9caa] font-normal font-inter'>@ 2025 Stackedbypelly Design & Develop <span className='text-[#272343] '>Stackedbypelly</span></p>
                        </div>
                        <div className="flex items-center gap-3.5">
                            <p className='flex items-center text-[#9a9caa] gap-2 text-xl'>Bank Note <Banknote size="2rem"/></p>
                            <p className='flex items-center text-[#9a9caa] gap-2 text-xl'>Credit Card <CreditCard size="2rem"/></p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;