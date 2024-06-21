import { useState } from "react";
import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { SelectedPage } from "../types/index";
import useMediaQuery from "../hooks";
import Link from "../utils/Link";
import Logo from '../assets/Apriori and FP-Growth (2).gif'

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    
  return (
    <nav>
        <div className="flex items-center justify-between border-b-2 border-ribbon-800
        fixed top-0 z-30 w-full drop-shadow bg-gradient-to-r from-ribbon-200/50 to-ribbon-500 py-6">
            <div className="flex items-center justify-between mx-auto md:w-4/6 w-full">
                <img src={Logo} alt="logo"  width={120} height={80} className="ml-20"/>
                { isAboveMediumScreens ?(<div className="flex items-center justify-between gap-9">
                       <Link page= "About"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Projects"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Contact"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                </div>)
                : (
                <button className="rounded-full bg-ribbon-400 p-2 border-2 border-ribbon-900 mr-8"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <TbMenu className="h-[30px] w-[30px] text-ribbon-900"/>
                </button>)}
                
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 
                 h-full w-[300px] bg-gradient-to-b from-ribbon-200 via-ribbon-600 to-ribbon-950 drop-shadow-xl">
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <IoMdClose className="h-8 w-8 text-ribbon-950"/>
                </button>
            </div>
            <div className="ml-[10%] flex flex-col justify-center items-center gap-10 text-2xl">
                <button onClick={() => setIsMenuToggled(false)}>
                <Link page= "About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                </button>
                <button onClick={() => setIsMenuToggled(false)}>
                <Link page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                </button>
                <button onClick={() => setIsMenuToggled(false)}>
                <Link page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                </button>
            </div>
            </div>
        )}
    </nav>
  )
}

export default NavBar