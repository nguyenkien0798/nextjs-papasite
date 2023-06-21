import styles from './Card.module.css';
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';

function Card({ imagen }: { imagen: any }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    borderRadius: '50%',
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  });

  return (
    <animated.div
      className={styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className={`${styles.cardImage} relative sm:w-[400px] sm:h-[400px] ms:w-[450px] ms:h-[450px]`}>
        <Image
          src={imagen}
          alt="card"
          style={{ borderRadius: '50%' }}
          layout='fill'
        />
      </div>
    </animated.div>
  );
}

Card.displayName = 'Card';

export default Card;
