import Gabr from '../assets/videos/website_about.mp4'
import BGRainbow from '../assets/icons/spectrum-gradient.svg';


  
const About = () => {
   

  return (
    <section>
        <div className='min-h-screen md:flex items-center justify-center p-5'>
        <div className='w-1/2 px-4 flex flex-col justify-center items-start'>
          <h1 className='text-start text-3xl tracking-wider mx-4 text-greyish-100'>I truly enjoy the 
            process of getting to know my data and dig deeper until I discover what the 
            data "is telling me". My passion is data visualization and simplification of 
            complex findings and patterns in order for different stakeholders to understand 
            the data and make use of it. I flourish in an organized environment and love 
            communicating with people. What I have learned about myself during the years is 
            that I enjoy helping others and do not stop until a problem had been resolved: 
            Get things done today because tomorrow brings new challenges!</h1>
            <button className='w-60 h-12 p-0 rounded-xl relative'>
              <p className='absolute z-10 text-ribbon-950 text-center text-bold text-4xl px-6 '>Download CV</p>
            <img src={BGRainbow} alt="rainbow" className="w-full h-full rounded-xl object-cover contrast-200" />
          </button>
        </div>
        <div className='flex items-center shadow-lg shadow-greyish-200 justify-center h-[60vh] w-[40vw] rounded-xl'>
          <video
          src={Gabr}
          className='object-cover rounded-xl inset-0 w-full h-full transition-transform duration-300 transform hover:scale-110'
          controls autoPlay
          />
        </div>
        </div>
    </section>
  )
}

export default About