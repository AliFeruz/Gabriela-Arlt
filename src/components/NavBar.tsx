import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import useMediaQuery from "../hooks";
import Logo from '../assets/icons/gabriela.png';
import Projects from '../assets/icons/projects.png';
import About from '../assets/icons/about.png';
import BGRainbow from '../assets/icons/spectrum-gradient.svg';
import { Link } from "react-router-dom";

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className="!fixed left-0 top-0 block w-full z-[100] bg-[#0a011d]">
        <div className="absolute bottom-0 w-full h-0.5">
            <img src={BGRainbow} alt="bg" className="w-full h-full object-cover contrast-100" />
        </div>
        <div className="flex items-center justify-between py-4 sm:py-6">
            <div className="flex items-center justify-between mx-auto md:px-20 px-4 w-full">
                <Link to={'/'}>
                <img src={Logo} alt="logo"  className="md:ml-20 h-16 sm:h-36 w-full object-fill px-4"/>
                </Link>
                
                {isAboveMediumScreens ? (
                    <div className="flex items-center justify-between gap-9">
                        <Link to="/" >
                            <img src={Projects} alt="link" className="h-12 w-full cursor-pointer hover:scale-125 ease-in transition-all" />
                        </Link>
                        <Link to="/about" >
                            <img src={About} alt="link" className="h-12 w-full cursor-pointer hover:scale-125 ease-in transition-all" />
                        </Link>
                    </div>
                ) : (
                    <button className="rounded-full  p-2 border-2 border-gray-50 mr-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <TbMenu className="h-[24px] w-[24px] text-gray-50"/>
                    </button>
                )}
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 top-0 z-40 min-h-screen w-[300px] bg-slate-950">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <IoMdClose className="h-8 w-8 text-gray-300 rounded-full"/>
                    </button>
                </div>
                <div className="ml-[10%] flex flex-col justify-center items-center gap-10">
                    <button onClick={() => setIsMenuToggled(false)}>
                        <Link to="/" >
                            <img src={Projects} alt="a" className="h-14 w-30 cursor-pointer" />
                        </Link>
                    </button>
                    <button onClick={() => setIsMenuToggled(false)}>
                        <Link to="/about" >
                            <img src={About} alt="a" className="h-14 w-30 cursor-pointer" />
                        </Link>
                    </button>
                </div>
            </div>
        )}
    </nav>
  );
}

export default NavBar;
