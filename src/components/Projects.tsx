import Card from './Card';
import { ProjectCard } from '../constants';
import useMediaQuery from '../hooks';


const Projects = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <div className='w-full h-auto flex items-center justify-center p-4 md:p-10'>
      <div className='md:mx-10 mx-2'>  
      {isAboveMediumScreens ? (
        <div className='mb-10 flex flex-col'>
        <div className='w-full min-h-screen -mt-20 flex items-center justify-center'>
        <Card project={ProjectCard[0]} className='w-full h-[75vh]'/>
        </div>
        <div className='flex -mx-2 mb-6 gap-3'>
        <div className='w-2/3 px-2'>
        <Card project={ProjectCard[1]} className='h-full'/>
        </div>
        <div className='w-1/3 px-2 flex flex-col space-y-4'>
        <Card project={ProjectCard[2]} />
        <Card project={ProjectCard[3]} />
        </div>
        </div>
        <div className='w-full h-full flex items-center justify-center mb-6'>
        <Card project={ProjectCard[4]} className='w-full'/>
        </div>
        <div className='flex -mx-2 mb-6 gap-3'>
        <div className='w-1/3 px-2 flex flex-col space-y-4'>
        <Card project={ProjectCard[5]} />
        <Card project={ProjectCard[6]} />
        </div>
        <div className='w-2/3 px-2'>
        <Card project={ProjectCard[7]} className='h-full'/>
        </div>
        </div>
        <div className='flex -mx-2 mb-6 gap-3'>
        <div className='w-1/2 px-2 flex flex-col space-y-4'>
        <Card project={ProjectCard[8]} />
        </div>
        <div className='w-1/2 px-2'>
        <Card project={ProjectCard[9]} className='h-full'/>
        </div>
        </div>
        <div className='w-full h-full flex items-center justify-center mb-6'>
        <Card project={ProjectCard[10]} className='w-full'/>
        </div>
        <div className='flex -mx-2 mb-6 gap-3'>
        <div className='w-2/3 px-2'>
        <Card project={ProjectCard[11]} className='h-full'/>
        </div>
        <div className='w-1/3 px-2 flex flex-col items-cent space-y-4'>
        <Card project={ProjectCard[12]} />
        <Card project={ProjectCard[13]} />
        <Card project={ProjectCard[14]} />
        </div>
        </div>
        <div className='flex -mx-2 mb-6 gap-3'>
        <div className='w-1/3 px-2 flex flex-col items-cent space-y-4'>
        <Card project={ProjectCard[15]} />
        <Card project={ProjectCard[16]} />
        <Card project={ProjectCard[14]} />
        </div>
        <div className='w-2/3 px-2'>
        <Card project={ProjectCard[11]} className='h-full'/>
        </div>
        </div>
    </div>   
      ) : (
        <div className='grid grid-cols-1 gap-6 w-full mt-16'>
          {ProjectCard.map((project, index) => (
            <Card key={index} project={project}/>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default Projects;
