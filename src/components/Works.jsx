/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects, miniprograms, aiApplications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./ProjectCard";
import { ImageCard } from "./ImageCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <h2 className='text-white font-bold text-[32px] mt-10'>AR Application</h2>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full">
        <div className="">
          <video controls  preload="metadata">
              <source src="/ar-app.mp4" type="video/mp4" />
          </video>
        </div>
     
      <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>AR Endutainment Application</h3>
          <p className='mt-2 text-secondary text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias aliquam nobis nam expedita, voluptates fugiat dolorem natus accusamus tempora. Similique aperiam illum reprehenderit earum? Odio repudiandae corrupti architecto iure.</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {projects[0].tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>

      <h2 className='text-white font-bold text-[32px] mt-10'>AI Application</h2>
      <div className='mt-10 flex flex-wrap gap-7'>
        {aiApplications.map(aiApplication => {
          return <div className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full" key={aiApplication.id}>
                    <video controls preload="metadata">
                      <source src={aiApplication.source_code_link} type="video/mp4"/>
                    </video>
                    <div className='mt-5'>
              <h3 className='text-white font-bold text-[20px]'>{aiApplication.name}</h3>
              <p className='mt-2 text-secondary text-[14px]'>{aiApplication.description}</p>
              </div>
              <div className='mt-4 flex flex-wrap gap-2'>
              {aiApplication.tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
        </div>
        </div>
        })}
      </div>

      <h2 className='text-white font-bold text-[32px] mt-10'>Web Application</h2>
      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.slice(1, 4).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} id={project.id}/>
        ))}
      </div>
      <h2 className='text-white font-bold text-[32px] mt-10'>WeChat Mini-Program</h2>
      <div className='mt-10 flex flex-wrap gap-7'>
        {miniprograms.map((project, index) => (
          <ImageCard key={`project-${index}`} index={index} {...project} tags={project.tags}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
