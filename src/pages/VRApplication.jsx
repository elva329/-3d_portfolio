import { ProjectCard } from "../components/ProjectCard";
import { vrApplicaitions } from "../constants";

function VRApplication() {
  return (
   <>
      <h2 className='text-white font-bold text-[32px] mt-10'>VR Application</h2>
      <div className='mt-10 flex flex-wrap gap-7'>
        {vrApplicaitions.map((project, index) => (
          <ProjectCard key={project.id} index={index} {...project} id={project.id}/>
        ))}
      </div>
   </>
  )
}

export default VRApplication