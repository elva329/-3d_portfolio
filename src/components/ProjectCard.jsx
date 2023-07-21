import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { fadeIn } from "../utils/motion";

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  id,
}) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full'
      >
        <div className='relative w-full h-auto'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-contain'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className={id !== 1 ? 'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer': 'hidden'}
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div> */}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='flex items-center'>
          <div className="flex flex-1 gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
          </div>
         
           <button className="bg-orange-300 p-2 rounded-2xl text-[15px]" onClick={() => window.open('https://elva-shen-avoid-the-iceburg-vr.glitch.me/', '')}>Live Demo</button>
        </div>
       
      </Tilt>
    </motion.div>
  );
};