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
    <motion.div>
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
            loading="lazy"
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='flex items-center'>
          <div className="flex flex-1 gap-2">
          {tags.map((tag) => (
            <p
              key={tag.id}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
          </div>
           <button className="bg-orange-300 p-2 rounded-2xl text-[15px]" onClick={() => window.open(source_code_link, '')}>Live Demo</button>
        </div>
      </Tilt>
    </motion.div>
  );
};