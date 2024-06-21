import { ProjectType } from '../types'; 

type Props = {
  project: ProjectType;
  className?: string; 
};

const Card = ({ project, className = '' }: Props) => {
  const handleClick = () => {
    window.open(project.link, '_blank'); 
  };

  return (
    <div
      onClick={handleClick}
      className={`relative flex flex-col cursor-pointer items-center 
      justify-center hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <div className='relative w-full h-full overflow-hidden'>
        <img
          src={project.img}
          alt={project.title}
          className='object-cover w-full h-full transition-transform duration-300 transform hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-ribbon-950 to-transparent flex 
        items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4'>
          <h3 className='font-bold text-greyish-100 text-2xl text-center'>{project.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
