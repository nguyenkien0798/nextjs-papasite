import Carousel from 'react-spring-3d-carousel';
import { useState, useEffect } from 'react';
import { config } from '@react-spring/web';
import { CardProps } from '@/types';
import styles from './Carousel.module.css'

interface CarouselProps {
  cards: CardProps[];
  height: string;
  width: string;
  margin: string;
  offset: number;
  showArrows: boolean;
}

export default function Carroussel(props: CarouselProps) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState<any>(null);
  const [cards] = useState(table);

  useEffect(() => {
    if ( props.cards.length > 0 ) {
      setGoToSlide(Math.round(cards.length/2)) 
    }
  }, [props.cards])

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
      <div className={styles.paginationWrapper}>
        <div className={styles.pagination}>
          {cards.map((card: CardProps, i: number) => (
            <span key={i} className={goToSlide - 1 === i || (goToSlide === 0 && i === cards.length - 1 ) ? styles.active : ''}></span>
          ))}
        </div>
      </div>
    </div>
  );
}
