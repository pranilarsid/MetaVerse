'use client';

import {motion, MotionConfigContext} from'framer-motion';
import {TypingText} from '../components';

import styles from '../styles';

import {fadeIn, staggerContainer} from '../utils/motion'; 

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/> 
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center"/> 

      <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1)} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      > 
        <span className='font-extrabold text-white'> Metaverse </span>
        is a thing of the future where you can enjoy the virtual world while under the impression that it's actually real. The feeling of the real world is replicated in this virtual reality. It's the
        <span className='font-extrabold text-white'> madness of the metaverse </span> 
        of today's age. Using only 
        <span className='font-extrabold text-white'> VR </span>
        devices and platforms, you can explore the metaverse worlds of your choosing, and turn your dreams into a reality. Let's 
        <span className='font-extrabold text-white'> explore </span>
        the madness of the metaverse by scrolling down.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className='w-[18px] h-[28px] object-contain mt-[28px]'/>
    </motion.div>
  </section>
);

export default About;