import Gabr from '../assets/videos/website_about.mp4'
import BGRainbow from '../assets/icons/spectrum-gradient.svg';
import CV from '../assets/simple_resume.pdf'


  
const About = () => {
   

  return (
    <section>
        <div className='min-h-screen w-full flex-col flex items-center justify-center mt-14 md:-mt-14 p-5'>
        <div className='flex items-center border md:-mt-6 mt-10 py-2 mb-8
        justify-center md:h-auto md:w-3/6 rounded-xl'>
          <video
          src={Gabr}
          className='object-cover rounded-xl inset-0 w-full h-full transition-transform duration-300 transform hover:scale-110'
          controls autoPlay
          />
        </div>
        <div className='px-4 md:px-10 flex flex-col justify-center items-center'>
          <h1 className='text-center text-xl mb-8 tracking-wider mx-4 text-greyish-100'>I truly enjoy the 
            process of getting to know my data and dig deeper until I discover what the 
            data "is telling me". My passion is data visualization and simplification of 
            complex findings and patterns in order for different stakeholders to understand 
            the data and make use of it. I flourish in an organized environment and love 
            communicating with people. What I have learned about myself during the years is 
            that I enjoy helping others and do not stop until a problem had been resolved: 
            Get things done today because tomorrow brings new challenges!</h1>
            <a className='w-64 h-10 p-0 rounded-xl relative' href={CV} target='_blank'>
              <p className='absolute z-[5000] text-ribbon-950 text-center text-bold text-4xl px-2 '>Download CV</p>
            <img src={BGRainbow} alt="rainbow" className="w-full h-full rounded-xl object-cover contrast-200" />
          </a>
        </div>
        
        </div>
    </section>
  )
}

export default About