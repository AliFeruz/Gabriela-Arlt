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
        <img src={BGRainbow} alt="bg" className="w-full h-full rounded-xl object-cover contrast-100" />
      </div>
      <div className='relative w-full h-full overflow-hidden p-0.5'>
        {project.img && (
          <img
            src={project.img}
            alt={project.title}
            className='object-fill rounded-xl inset-0 w-full h-full transition-transform duration-300 transform hover:scale-110'
          />
        )}
        {project.video && (
          <video
            src={project.video}
            className='object-cover rounded-xl inset-0 w-full h-full transition-transform duration-300 transform hover:scale-110'
            controls autoPlay
          />
          
        )}
        <div className='absolute inset-0 bg-black/30 flex z-10
        items-end justify-center rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 p-4'>
          <h3 className='text-white text-4xl mb-10 text-center'>{project.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
