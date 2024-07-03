import LinkEd from '../assets/icons/linkedin_icon.png'
import Github from '../assets/icons/github_icon.png'
import { IoLogoTableau } from 'react-icons/io5'
import BGRainbow from '../assets/icons/spectrum-gradient.svg';


const Footer = () => {
  return (
    <div className="w-full h-auto fixed bottom-0">
      <div className="absolute top-0 w-full h-0.5">
            <img src={BGRainbow} alt="bg" className="w-full h-full object-cover contrast-200" />
        </div>
     <div className="flex items-center justify-between md:p-10 p-3">
     <p className="md:text-xl text-gray-300 font-thin text-xs md:px-4">
    © {new Date().getFullYear()}. All rights reserved.
     </p>
     <a href="https://webdevali.vercel.app/" target='_blank' rel='noreferrer' 
     className="md:text-xl text-center font-thin mr-4 text-xs md:tracking-widest">
        Made with Love By <span className="text-lime-500">Ali.F</span>
     </a>
     <div className='flex space-x-2 md:space-x-5 md:px-6 md:mr-4'>
        <a href="https://www.linkedin.com/in/gabriela-arlt-a9695782/" target='_blank'
              rel='noreferrer'>
            <img src={LinkEd} alt="icon" className='md:w-10 md:h-10 w-5 h-5'/>
        </a>
        <a href="https://github.com/gabriela-arlt" target='_blank'
              rel='noreferrer'>
            <img src={Github} alt="icon" className='md:w-10 md:h-10 w-5 h-5'/>
        </a>
        <a href="https://public.tableau.com/app/profile/gabriela.arlt/vizzes" target='_blank'
              rel='noreferrer'>
        <IoLogoTableau className='md:w-10 md:h-10 w-5 h-5'/>
        </a>
     </div>
     </div>
    </div>
  )
}

export default Footer