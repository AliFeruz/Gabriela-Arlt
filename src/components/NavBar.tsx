import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import useMediaQuery from "../hooks";
import Logo from '../assets/icons/gabriela.png';
import Projects from '../assets/icons/projects.png';
import About from '../assets/icons/about.png';
import Contact from '../assets/icons/contact.png';
import BGRainbow from '../assets/icons/spectrum-gradient.svg';
import { Link } from "react-router-dom";

const NavBar = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-bl from-ribbon-900 to-black">
        <div className="absolute bottom-0 w-full h-0.5">
            <img src={BGRainbow} alt="bg" className="w-full h-full object-cover contrast-200" />
        </div>
        <div className="flex items-center justify-between contrast-75 py-6">
            <div className="flex items-center justify-between mx-auto md:px-20 px-10 w-full">
                <img src={Logo} alt="logo" width={280} height={220} className="md:ml-20 px-4"/>
                {isAboveMediumScreens ? (
                    <div className="flex items-center justify-between gap-9">
                        <Link to="/" >
                            <img src={Projects} alt="link" className="h-12 w-22" />
                        </Link>
                        <Link to="/about" >
                            <img src={About} alt="link" className="h-12 w-22" />
                        </Link>
                        <Link to="/contact" >
                            <img src={Contact} alt="link" className="h-12 w-22"/>
                        </Link>
                    </div>
                ) : (
                    <button className="rounded-full bg-ribbon-950 p-2 border-2 border-greyish-400 mr-8" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <TbMenu className="h-[30px] w-[30px] text-greyish-400"/>
                    </button>
                )}
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gradient-to-b from-ribbon-800 via-ribbon-950 to-black drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <IoMdClose className="h-8 w-8 text-ribbon-500"/>
                    </button>
                </div>
                <div className="ml-[10%] flex flex-col justify-center items-center gap-10">
                    <button onClick={() => setIsMenuToggled(false)}>
                        <Link to="/" >
                            <img src={Projects} alt="a" className="h-14 w-30" />
                        </Link>
                    </button>
                    <button onClick={() => setIsMenuToggled(false)}>
                        <Link to="/about" >
                            <img src={About} alt="a" className="h-14 w-30" />
                        </Link>
                    </button>
                    <button onClick={() => setIsMenuToggled(false)}>
                        <Link to="/contact" >
                            <img src={Contact} alt="a" className="h-14 w-30"/>
                        </Link>
                    </button>
                </div>
            </div>
        )}
    </nav>
  );
}

export default NavBar;
