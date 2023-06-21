import * as React from 'react';
import SectionHeading from '../SectionHeading';
import AboutIcon2018 from '/public/about/about-2018-new.svg';
import AboutIcon2020 from '/public/about/about-2020-new.svg';
import AboutIcon2021 from '/public/about/about-2021-new.svg';
import AboutIcon2022 from '/public/about/about-2022-new.svg';
import TimeLine from '/public/about/time-line-new.svg';
import TimeItem from './TimeItem';
import BackgroundTransparent from 'public/images/backgroundTransparent.png';
import Image from 'next/image';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'next-i18next';

const TIME_LINE_LIST = [
  {
    icon: AboutIcon2018,
    content: 'Establish company. \nOpen the first office.',
    year: 2018,
  },
  {
    icon: AboutIcon2020,
    content: 'Join the in-game industry by establishing Papa Studio.',
    year: 2020,
  },
  {
    icon: AboutIcon2021,
    content:
      'Open Papa Academy to educate and training learners from both inside and outside company',
    year: 2021,
  },
  {
    icon: AboutIcon2022,
    content:
      'Establish new office in HCM city. \nDo the first steps towards becoming a global company',
    year: 2022,
  },
];

const fadeDown = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const showUp = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function AboutUs() {
  const { t, ready } = useTranslation('about');

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const animation = useAnimation();

  React.useEffect(() => {
    // console.log(inView)
    if (inView) {
      animation.start('visible');
    }
  }, [inView, animation]);

  return (
    <section
      className="mt-[97px] xl:px-10 2xl:px-[10%]"
      ref={ref}
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-4">
        <SectionHeading title={ready ? t('header') : ''} />
      </div>

      <div
        className={`no-scrollbar relative overflow-y-hidden overflow-x-scroll md:overflow-visible`}
      >
        <div className="relative mt-16 flex w-[1440px] justify-center p-0 will-change-[opacity] md:mt-8 md:w-auto md:px-5 lg:mt-10 lg:px-4 xl:mt-[95px] 2xl:mt-[100px] 2xl:px-8 3xl:mt-[120px] 3xl:space-x-12 3xl:px-16">
          {TIME_LINE_LIST.map((item, idx) => {
            return (
              <TimeItem
                key={idx}
                item={item}
                classes={`w-1/4`}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={fadeDown}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              />
            );
          })}

          <motion.div
            className="lg:shrink-1 absolute left-0 top-[200px] !ml-0 flex w-full shrink-0 items-center justify-center md:top-[140px] lg:top-[160px] lg:w-full xl:top-[189px] 2xl:top-[200px] 3xl:top-[243px]"
            initial="hidden"
            animate={animation}
            variants={showUp}
            transition={{ delay: 1, duration: 0.3 }}
          >
            <Image src={TimeLine} alt="" className="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
