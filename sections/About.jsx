'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|| About SpaceVerse" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        SpaceVerse is a community of people who are passionate about space and space exploration.
        <span className="font-extrabold text-white">Curiosity</span> drives our passion and mission.
        <span className="font-extrabold text-white">We are on a mission</span> to ensure that the drive for human curiosity and space exploration
        stays <span className="font-extrabold text-white">alive and well.</span>
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

    </motion.div>
  </section>
);

export default About;
