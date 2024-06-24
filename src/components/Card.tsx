import { ProjectType } from '../types'; 
import BGRainbow from '../assets/icons/spectrum-gradient.svg';

type Props = {
  project: ProjectType;
  className?: string; 
};

const Card = ({ project, className = '' }: Props) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank'); 
    } 
  };

  return (
    <div
      onClick={handleClick}
      className={`relative flex flex-col cursor-pointer items-center rounded-xl 
      justify-center hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className="absolute w-full h-full">
        <img src={BGRainbow} alt="bg" className="w-full h-full rounded-xl object-cover contrast-200" />
      </div>
      <div className='relative w-full h-full overflow-hidden p-0.5'>
        {project.img && (
          <img
            src={project.img}
            alt={project.title}
            className='object-cover rounded-xl inset-0 w-full h-full transition-transform duration-300 transform hover:scale-110'
          />
        )}
        {project.video && (
          <video
            src={project.video}
            className='object-cover rounded-xl inset-0 w-full h-full transition-transform duration-300 transform hover:scale-110'
            controls autoPlay
          />
          
        )}
        <div className='absolute inset-0 bg-gradient-to-t from-ribbon-900 to-transparent flex 
        items-end justify-center rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 p-4'>
          <h3 className='text-greyish-300 text-4xl mb-10 text-center'>{project.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
