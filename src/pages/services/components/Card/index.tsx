import React, { useState } from 'react';
import Image from '@/components/common/Image';
import { useSpring, animated } from '@react-spring/web';
import styles from '@/styles/Common.module.css';
import Link from 'next/link';

const CardService = React.memo(({ item }: { item: string }) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    zIndex: 10,
    borderRadius: '50%',
    transform: show ? 'scale(1.08)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  }); 

  const redirectService = (item: string) => {
    switch (item) {
      case 'OFFSHORE DEVELOPMENT CENTER':
        return '/services/offshore';
      case '2D/3D/AR/VR GAME':
        return '/services/gameservice';
      case 'CLOUD SERVER':
        return '/services/cloudserver';
      case 'Web & App system':
        return '/services/webappsystem';
      case 'Gamification Marketing Platform':
        return '/services/gameconfig';
      case 'Health Tech Platform':
        return '/services/healthtech'
      default:
        return '';
    }
  };

  const imageCard = (item: string) => {
    switch (item) {
      case 'OFFSHORE DEVELOPMENT CENTER':
        return '/images/services/serviceExample.png';
      case '2D/3D/AR/VR GAME':
        return '/images/services/servicesGame.png';
      case 'CLOUD SERVER':
        return '/images/services/servicesCloud.png';
      case 'Web & App system':
        return '/images/services/servicesWebApp.png';
      case 'Gamification Marketing Platform':
        return '/images/services/servicesGameConfig.png';
      case 'Health Tech Platform':
        return '/images/services/servicesHealthTech.png';
      default:
        return '';
    }
  };

  return (
    <Link href={redirectService(item)}>
      <animated.div
        key={item}
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <div
          className={`${show ? styles.outerCircleHover : styles.outerCircle} h-full cursor-pointer p-[50px] text-center rounded-[20px]`}
        >
          <Image src={imageCard(item)} width={300} height={300}/>
          <p className="mt-4 text-center text-2xl font-semibold uppercase leading-7 text-white">
            {item}
          </p>
        </div>
      </animated.div>
    </Link>
  );
});

CardService.displayName = 'CardService';

export default CardService;
