import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from "lucide-react";
import {  useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const [heartActive, setHeartActive] = useState(false);

    const handleClick = () => {
        setHeartActive(!heartActive);
        console.log('clicked');
    }

    return (
        <div>
            <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full">


                <div className="lg:container flex items-center justify-between">

                    <p className="flex items-center justify-items-center  gap-2 text-sm font-inter font-normal text-white capitalize "><Check />Free on All order over $50</p>

                    <div className="navbar_to_right flex items-center gap-4">
                        <select defaultValue="Server location" className="bg-[#272343]  h-[30px] w-[70px] text-white text-sm font-inter font-normal capitalize">
                            <option >Eng</option>
                            <option >Fr</option>

                        </select>

                        <button><Link className="text-sm text-white font-inter font-normal capitalize ">Faqs</Link></button>
                        <button><Link className="flex items-center gap-1 text-sm text-white font-inter font-normal capitalize "><Info /> need help</Link></button>


                    </div>




                </div>
            </div>

            {/* navbar_middle */}

            <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] h-[84px] w-full">
                <div className="lg:container grid grid-cols-3  items-center ">

                    <div className="logo_wrapper ">
                        <Link to="/" className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"><Armchair size="2rem" color="#029fea" /> Comforty</Link>
                    </div>

                    <div className="search_box">
                        <form action="#" className="max-w-[443px] h-[44px] relative">
                            <input type="text" placeholder="Search here.... " className="max-w-[443px] w-full h-full bg-white text-black rounded-lg pl-2" />

                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size="22px" color="#272343" /></button>
                        </form>
                    </div>

                    {/* navbar middle right */}

                    <div className="navbar_middle_right flex items-center gap-4">
                        <button className="btn capitalize">
                            <ShoppingCart />Cart <div className="badge badge-sm bg-[#029fea] text-white">2</div>
                        </button>
                        <button className="btn capitalize" onClick={handleClick}>
                            <Heart color={heartActive ? "red" : "currentColor"}/>
                        </button>


                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a><Link to="/auth/register" >Account</Link></a></li>
                                <li><a><Link to="/auth/login">Login</Link></a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            {/* navbar bottom */}

            <div className="navbar_bottom flex items-center justify-center w-full bg-white h-[75px] border-b-[1px] border-[#e1e3e5]">
                <div className="lg:container flex items-center justify-between">
                    <div className="navbar_bottom_left flex items-center gap-8">

                        <div className="dropdown dropdown-start">
                            <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"><Menu/>All Categories</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Chair</a></li>
                                <li><a>Table</a></li>
                                <li><a>Bed</a></li>
                                <li><a>Lighting</a></li>
                            </ul>
                        </div>
                        <nav className="flex items-center gap-8">
                            <NavLink to="/" className="text-sm text-[#029fea] font-inter font-medium capiterlize">Home</NavLink>
                            <NavLink className="text-sm text-[#626370] font-inter font-medium capiterlize">Shop</NavLink>
                            <NavLink className="text-sm text-[#626370] font-inter font-medium capiterlize">Product</NavLink>
                            <NavLink className="text-sm text-[#626370] font-inter font-medium capiterlize">Pages</NavLink>
                            <NavLink className="text-sm text-[#626370] font-inter font-medium capiterlize">About</NavLink>
                        </nav>
                    </div>


                    <div className="navbar_bottom_right">
                        <p className="text-sm text-[#636270] font-inter font-normal capitalize">Contact:<span className="text-[#272343]">(234)813-582-9683</span></p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Navbar;