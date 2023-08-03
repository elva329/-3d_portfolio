
import { miniprograms } from "../constants";
import { ImageCard } from "../components/ImageCard";

function WeChatMiniProgram() {
  return (
   <>
     <h2 className='text-white font-bold text-[32px] mt-10'>WeChat Mini-Program</h2>
      <div className='flex flex-wrap gap-7 -mt-10'>
        {miniprograms.map((project, index) => (
          <ImageCard key={`project-${index}`} index={index} {...project} tags={project.tags}/>
        ))}
      </div>
   </>
  )
}

export default WeChatMiniProgram