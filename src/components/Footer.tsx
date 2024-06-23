import LinkEd from '../assets/icons/linkedin_icon.png'
import Tableu from '../assets/icons/tableau_icon.png'
import Github from '../assets/icons/github_icon.png'


const Footer = () => {
  return (
    <div className="w-full h-auto bg-ribbon-950">
     <div className="flex items-center justify-between p-10">
     <p className="md:text-xl text-ribbon-600 text-xs px-4">
    © {new Date().getFullYear()}. All rights reserved.
     </p>
     <a href="" className="md:text-2xl text-center mr-2 text-sm md:tracking-widest">
        Made with Love By <span className="text-lime-500">Ali.F</span>
     </a>
     <div className='flex space-x-2 md:space-x-5 md:px-6 md:mr-4'>
        <a href="">
            <img src={LinkEd} alt="icon" width={38} height={38}/>
        </a>
        <a href="">
            <img src={Github} alt="icon" width={38} height={38}/>
        </a>
        <a href="">
            <img src={Tableu} alt="icon" width={38} height={38} className='bg-white rounded-full'/>
        </a>
     </div>
     </div>
    </div>
  )
}

export default Footer