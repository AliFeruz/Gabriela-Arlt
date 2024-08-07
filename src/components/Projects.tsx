import Card from "./Card";
import { ProjectCard } from "../constants";
import useMediaQuery from "../hooks";
import BGRainbow from '../assets/icons/spectrum-gradient.svg';

const Projects = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="w-full h-auto flex items-center justify-center container mx-auto px-8 sm:px-16 md:px-32">
      {isAboveMediumScreens ? (
        <div className="pb-5 flex flex-col sm:mt-20 gap-3">
          <div className="w-full  h-[75vh] flex items-center justify-center mb-10 relative rounded-xl">
          <div className="absolute bottom-0 w-full h-full">
            <img src={BGRainbow} alt="bg" className="w-full h-full object-cover contrast-100 rounded-xl" />
          </div>
          <iframe className='w-full h-full p-0.5 z-20 rounded-xl' src="https://www.youtube.com/embed/QU3SPdAyBxQ?si=bcl2B8zBmscE8wlt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className="flex -mx-2 mb-6 gap-3 px-2">
              <Card project={ProjectCard[17]} />
              <Card project={ProjectCard[16]} />  
          </div>
          <div className="flex -mx-2 mb-6 gap-3">
            <div className="w-2/3 px-2">
              <Card project={ProjectCard[1]} className="h-full" />
            </div>
            <div className="w-1/3 px-2 flex flex-col space-y-4">
              <Card project={ProjectCard[2]} />
              <Card project={ProjectCard[3]} />
            </div>
          </div>
          <div className="flex -mx-2 mb-6 gap-3">
            <div className="w-1/3 px-2 flex flex-col space-y-4">
              <Card project={ProjectCard[5]} />
              <Card project={ProjectCard[6]} />
            </div>
            <div className="w-2/3 px-2">
              <Card project={ProjectCard[7]} className="h-full" />
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center mb-6">
            <Card project={ProjectCard[4]} className="w-full" />
          </div>
          <div className="flex -mx-2 mb-6 gap-3">
            <div className="w-1/2 px-2 flex flex-col space-y-4">
              <Card project={ProjectCard[8]} />
            </div>
            <div className="w-1/2 px-2">
              <Card project={ProjectCard[9]} className="h-full" />
            </div>
          </div>
          <div className="w-full  h-full flex items-center justify-center mb-6">
            
          </div>
          <div className="flex -mx-2 mb-6 gap-3">
            <div className="w-2/3 px-2">
              <Card project={ProjectCard[11]} className="h-full" />
            </div>
            <div className="w-1/3 px-2 flex flex-col items-cent space-y-4">
              <Card project={ProjectCard[12]} />
              <Card project={ProjectCard[13]} />
              <Card project={ProjectCard[14]} />
            </div>
          </div>
          <div className="flex -mx-2 gap-3 px-2">
              <Card project={ProjectCard[15]} />
              <Card project={ProjectCard[10]} />  
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 w-full mt-16">
          <div className="w-full  h-full flex items-center justify-center mb-10 relative rounded-xl">
          <div className="absolute bottom-0 w-full h-full">
            <img src={BGRainbow} alt="bg" className="w-full h-full object-cover contrast-100 rounded-xl" />
          </div>
          <iframe className='w-full h-full p-0.5 z-20 rounded-xl' src="https://www.youtube.com/embed/QU3SPdAyBxQ?si=bcl2B8zBmscE8wlt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          {ProjectCard.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
