/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import {styles} from '../styles';
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";
import email from '../assets/icon/email.png';
import phone from '../assets/icon/phone.png';
const Contact = () => { 
  return (
    <>
      <div className="text-right">&#128161; Move the visual earth to play around &#128515;</div>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
          <label className='flex flex-col'>
            <div className='text-white font-medium mb-4 flex items-center'><img src={email} alt="email" className="w-4 h-4 mr-5" loading="lazy"/> jia.shen.job@gmail.com</div>
          </label>
          <label className='flex flex-col'>
            <div className='text-white font-medium mb-4 flex items-center'><img src={phone} alt="phone" className="w-4 h-4 mr-5" loading="lazy"/> (+86)15021893526</div>
          </label>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </>
    
  )
}

export default SectionWrapper(Contact, 'contact')