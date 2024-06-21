import { SelectedPage } from '../types';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import { ProjectCard } from '../constants';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}


const Projects = ({setSelectedPage}: Props) => {
  const { ref } = useInView({
    threshold: 0.1, // Triggers element when 10% of the section is in view
    onChange: (inView) => {
      if (inView) {
        setSelectedPage(SelectedPage.Projects);
      }
    },
  });
  return (
    <div id='projects' ref={ref}>
      <div className='w-full flex flex-col items-center justify-center p-4 md:p-10'>
        <div>
          <h1 className='text-start text-2xl uppercase text-ribbon-950 font-bold tracking-wider'>Projects</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-3 auto-rows-auto'>
      {ProjectCard.map((project, index) => (
        <Card
          key={project.id}
          project={project}
          className={`${
            index % 2 === 0 ? 'row-span-2' : 'row-span-1'
          } ${index % 3 === 0 ? 'col-span-2' : 'col-span-1'}`}
        />
      ))}
    </div>
      </div>
    </div>
  )
}

export default Projects
