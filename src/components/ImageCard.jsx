/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { fadeIn } from "../utils/motion";

export const ImageCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <div className='mt-2 text-secondary text-[14px]'>{description}</div>
        </div>

        <div className='relative mt-5 mb-5 flex items-center'>
          <img
            src={image}
            alt='project_image'
            className='relative w-[100px] h-[100px]'
            loading="lazy"
          />
          <p className="text-secondary text-[14px] ml-5">Scan this QRcode using 【WeChat】 to have a try</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={tag.id}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};