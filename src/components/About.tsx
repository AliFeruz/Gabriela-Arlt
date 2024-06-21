import { SelectedPage } from '../types';
import { useInView } from 'react-intersection-observer';
import Logo from '../assets/Apriori and FP-Growth (2).gif'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  }
  

  
const About = ({setSelectedPage}: Props) => {
    const { ref } = useInView({
        threshold: 0.1,  // Triggers element when 10% of the section is in view
        onChange: (inView) => {
          if (inView) {
            setSelectedPage(SelectedPage.About);
          }
        },
      });

  return (
    <div id='about' ref={ref}>
        <div className='container md:mt-24 p-5'>
        <div>
          <h1 className='text-start uppercase text-ribbon-950 font-bold tracking-wider'>About</h1>
        </div>
        <div className='w-5/6 flex items-center justify-center'>
            <img src={Logo} alt="logo" />
        </div>
        </div>
    </div>
  )
}

export default About