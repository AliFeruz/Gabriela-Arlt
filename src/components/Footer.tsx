import LinkEd from '../assets/icons/linkedin_icon.png'
import Github from '../assets/icons/github_icon.png'
import { IoLogoTableau } from 'react-icons/io5'


const Footer = () => {
  return (
    <div className="w-full h-auto bg-ribbon-950">
     <div className="flex items-center justify-between p-10">
     <p className="md:text-xl text-ribbon-600 text-xs px-4">
    © {new Date().getFullYear()}. All rights reserved.
     </p>
     <a href="https://webdevali.vercel.app/" target='_blank' rel='noreferrer' 
     className="md:text-2xl text-center mr-2 text-sm md:tracking-widest">
        Made with Love By <span className="text-lime-500">Ali.F</span>
     </a>
     <div className='flex space-x-2 md:space-x-5 md:px-6 md:mr-4'>
        <a href="https://www.linkedin.com/in/gabriela-arlt-a9695782/" target='_blank'
              rel='noreferrer'>
            <img src={LinkEd} alt="icon" width={38} height={38}/>
        </a>
        <a href="https://github.com/gabriela-arlt" target='_blank'
              rel='noreferrer'>
            <img src={Github} alt="icon" width={38} height={38}/>
        </a>
        <a href="https://public.tableau.com/app/profile/gabriela.arlt/vizzes" target='_blank'
              rel='noreferrer'>
        <IoLogoTableau className='w-10 h-10'/>
        </a>
     </div>
     </div>
    </div>
  )
}

export default Footer