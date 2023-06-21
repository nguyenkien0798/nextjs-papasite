import React, { useEffect, useState } from 'react';
import { Else, If, Then } from 'react-if'
import BannerProject from 'public/images/services/bannerProject.png';
import { CardProps } from '@/types';
import Card from '@/components/common/Card';
import dynamic from 'next/dynamic';
import SlideImage from '@public/images/slide.png';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import TillePage from '@/components/common/TitlePage';
import CardService from './components/Card';
import StyleServices from '@/styles/Services.module.css';

const Carroussel = dynamic(() => import('@/components/common/Carousel'), {
  ssr: false,
});

const servicesData: string[] = [
  "OFFSHORE DEVELOPMENT CENTER",
  "CLOUD SERVER",
  "Web & App system",
  "2D/3D/AR/VR GAME",
  "Health Tech Platform",
  "Gamification Marketing Platform",
]

function Service() {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const links = [
    {
      title: 'services',
    },
  ];
  const cards: CardProps[] = [
    {
      key: 1,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 2,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 3,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 4,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 5,
      content: <Card imagen={SlideImage} />,
    },
  ];

  return (
    <div>
      <If condition={width && width >= 1024}>
        <Then>
          <div
            className="relative min-h-[200px]"
            style={{
              backgroundImage: `url(${BannerProject.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-row items-center sm:px-[30px] md:px-[30px] lg:px-[32px] xl:px-10 2xl:px-[10%]">
              <div
                className="flex sm:flex-[0.5] md:flex-[0.5] lg:flex-[0.6] xl:flex-1 py-[300px] 
                  xm:hidden 
                  sm:block"
              >
                <div
                  className="font-montserratFontwight7 text-[64px] leading-[75px] text-[#1DE9B6]
                    sm:text-[24px] sm:leading-[29px]
                    md:text-[24px] md:leading-[29px]
                    lg:text-[24px] lg:leading-[29px]
                    xl:text-[32px] xl:leading-[39px]
                    2xl:text-[64px] 2xl:leading-[80px]
            "
                >
                  Service
                </div>
                <div
                  className="mt-[20px] font-montserratRegular text-base leading-6 tracking-[0.2em] text-white
                    sm:text-[12px] sm:leading-[14px]
                    md:text-[12px] md:leading-[14px]
                    lg:text-[12px] lg:leading-[14px] 
                    xl:text-[14px] xl:leading-[16px]
                    2xl:text-[18px] 2xl:leading-[24px]
            "
                >
                  {`Products are applications designed to improve people's quality of life`}
                </div>
                <div className="absolute bottom-[80px]">
                  <BreadCrumbs links={links} />
                </div>
              </div>
              <div className="flex flex-1 xm:py-[100px] md:w-[70%]">
                <Carroussel
                  cards={cards}
                  height="400px"
                  width="400px"
                  margin="0 auto"
                  offset={2}
                  showArrows={false}
                />
              </div>
            </div>
          </div>
          <div className="py-[80px] xl:px-10 2xl:px-[10%]">
            <div className="text-center">
              <TillePage title={'OUR SERVICE'} />
            </div>
            <div
              className={`mt-10 grid gap-12
                ${StyleServices.cardService}
                sm:grid-cols-1 sm:grid-rows-6
                sm:px-[64px] md:grid-cols-2
                md:grid-rows-3 md:px-[32px] lg:grid-cols-2
                lg:grid-rows-3 lg:px-[120px] xl:grid-cols-2
                xl:grid-rows-2 2xl:grid-cols-3
        `}
            >
              {servicesData.map((item: string) => (
                <CardService item={item} key={item} />
              ))}
            </div>
          </div>
        </Then>
        <Else>
          <div
            className="relative min-h-[200px]"
            style={{
              backgroundImage: `url(${BannerProject.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-row items-center sm:px-[30px] md:px-[30px] lg:px-[32px] xl:px-10 2xl:px-[10%]">
              <div
                className="flex md:flex-[0.5] py-[300px] 
                  xm:hidden 
                  sm:hidden
                  md:block
                ">
                <div
                  className="font-montserratFontwight7 text-[64px] leading-[75px] text-[#1DE9B6]
                    sm:text-[24px] sm:leading-[29px]
                    md:text-[24px] md:leading-[29px]
                    lg:text-[24px] lg:leading-[29px]
                    xl:text-[32px] xl:leading-[39px]
                    2xl:text-[64px] 2xl:leading-[80px]
            "
                >
                  Service
                </div>
                <div
                  className="mt-[20px] font-montserratRegular text-base leading-6 tracking-[0.2em] text-white
                    sm:text-[12px] sm:leading-[14px]
                    md:text-[12px] md:leading-[14px]
                    lg:text-[12px] lg:leading-[14px] 
                    xl:text-[14px] xl:leading-[16px]
                    2xl:text-[18px] 2xl:leading-[24px]
            "
                >
                  {`Products are applications designed to improve people's quality of life`}
                </div>
                <div className="absolute bottom-[80px]">
                  <BreadCrumbs links={links} />
                </div>
              </div>
              <div className="flex flex-1 xm:py-[100px]">
                <Carroussel
                  cards={cards}
                  height="400px"
                  width="250px"
                  margin="0 auto"
                  offset={2}
                  showArrows={false}
                />
              </div>
            </div>
          </div>
          <div className="xm:pt-[40px] xm:pb-[80px] sm:pt-[80px] sm:pb-[80px] xl:px-10 2xl:px-[10%]">
            <div className="px-[15px] pb-[24px] md:hidden">
              <BreadCrumbs links={links} />
            </div>
            <div className="text-center">
              <TillePage title={'OUR SERVICE'} />
            </div>
            <div
              className={`mt-10 grid gap-12
                ${StyleServices.cardService}
                2 sm:grid-cols-1 sm:grid-rows-6
                sm:px-[64px] md:grid-cols-2
                md:grid-rows-3 md:px-[32px] lg:grid-cols-2
                lg:grid-rows-3  lg:px-[120px] xl:grid-cols-2
                xl:grid-rows-2  xl:grid-rows-3 2xl:grid-cols-3
              `}
            >
              {servicesData.map((item: string) => (
                <CardService item={item} key={item} />
              ))}
            </div>
          </div>
        </Else>
      </If>
    </div>
  );
}

export default Service;
