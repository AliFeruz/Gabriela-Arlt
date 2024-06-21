import { SelectedPage } from '../types';
import { useInView } from 'react-intersection-observer';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}


const Contact = ({setSelectedPage}: Props) => {
  const { ref } = useInView({
    threshold: 0.1, // Triggers element when 10% of the section is in view
    onChange: (inView) => {
      if (inView) {
        setSelectedPage(SelectedPage.Contact);
      }
    },
  });
  return (
    <div id='contact' ref={ref}>
      <div className='container'>
        <div>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
