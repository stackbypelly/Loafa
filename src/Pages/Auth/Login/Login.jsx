import { MoveRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className="lg:container mx-auto p-[80px]">

            <div className="max-w-[648px] mx-auto w-full min-h-[328px] p-[31px] rounded-lg border-[1px] border-[#9a9caa] flex items-center justify-center flex-col">
                <h3 className='text-3xl text-[#272343] font-semibold font-inter mb-5 captipalize '>Login</h3>

                <form action="#" onSubmit={submitHandle} className="flex flex-col items-center w-full space-y-4 mb-4">
                    <input type="text" placeholder='Your Name' className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5  " />
                    <input type="email" placeholder='Your Email' className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5 " />

                    <button type="submit" className="w-full h-[50px] bg-[#029fea] rounded-lg pl-4 text-base text-white font-semibold font-inter capitalize flex items-center justify-center gap-2.5 cursor-pointer ">Login<MoveRight /></button>
                </form>

                <p className='text-base text-[272343] font-inter font-normal flex items-center justify-center gap-2.5 mt-4'>Don't have account <Link to={'/auth/register'} className='text-[#029fea]' >Register</Link> </p>
            </div>

        </div>
    );
};

export default Login;