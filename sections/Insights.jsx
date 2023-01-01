'use client';

import {motion} from'framer-motion';

import {TitleText, TypingText, InsightCard} from '../components';

import styles from '../styles';

import {staggerContainer} from '../utils/motion'; 

import {insights, newFeatures} from '../constants';

const Insights = () => (
  <section>
    <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Insight about the Metaverse'
      textStyles='text-center'/>
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1}/>
        ))} 
      </div>
    </motion.div>
  </section>
);

export default Insights;
