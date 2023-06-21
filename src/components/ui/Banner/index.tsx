import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import StyleBanner from '@/styles/Banner.module.css';
import BackgroundSlider from 'public/images/backgroudSlider.png';
import EllipseSlider from 'public/images/ellipseSlider-papa.png';
import Image from 'next/image';
import stylesAnimation from '@/styles/animation.module.css';
import BackgroundTransparent from 'public/images/backgroundTransparent.png';
import styled from 'styled-components';
import ImageOffshore from '/public/banner/offshore.png';
import ImageGame from '/public/banner/game.png';
import ImageGameConfig from '/public/banner/game-config.png';
import ImageCloud from '/public/banner/cloud.png';
import ImagePgo from '/public/banner/pgo.png';
import ImageWebApp from '/public/banner/webapp.png';
import ImageHoverWebApp from '/public/banner/hover-webapp.png';
import ImageHoverCloud from '/public/banner/hover-cloud.png';
import ImageHoverGame from '/public/banner/hover-game.png';
import ImageHoverGameConfig from '/public/banner/hover-game-config.png';
import ImageHoverOffshore from '/public/banner/hover-offshore.png';
import ImageHoverPgo from '/public/banner/hover-pgo.png';

const Banner = () => {
  const router = useRouter();
  const [value, setValue] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoverItem, setHoverItem] = useState<boolean>();
  const [selectedOdc, setSelectedOdc] = useState<boolean>();
  const [selectedGameConfig, setSelectedGameConfig] = useState<boolean>();
  const [selectedGame, setSelectedGame] = useState<boolean>();
  const [selectedWebApp, setSelectedWebApp] = useState<boolean>();
  const [selectedCloud, setSelectedCloud] = useState<boolean>();
  const [selectedHealTech, setSelectedHealTech] = useState<boolean>();

  const objectSize = 120;
  const spacing = 50;
  const overlap = true;
  const offset = 20;
  const d = objectSize + spacing * 2.3;
  const r = objectSize / 2 + spacing / 1;

  const CurvedTextOdc = styled.div`
    position: absolute;
    top: 3%;
    left: -2%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 200px;
    height: 200px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1360px) {
      width: 150px;
      top: 4%;
      left: 1%;
    }

    @media (min-width: 1000px) and (max-width: 1024px) {
      top: 3%;
      left: 1%;
      width: 150px;
    }

    @media (max-width: 1000px) {
      top: 3%;
      left: 2%;
      width: 110px;
    }

    @media (max-width: 768px) {
      top: 2%;
      left: 2%;
      width: 110px;
    }

    @media (max-width: 639px) {
      top: 3%;
      left: 3%;
      width: 90px;
    }
  `;

  const CurvedTextOdcHover = styled.div`
    position: absolute;
    top: 4%;
    left: 0%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 150px;
    height: 0px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 4%;
      left: 1%;
      width: 130px;
    }

    @media (max-width: 1360px) {
      top: 3%;
      left: 1%;
      width: 120px;
    }

    @media (max-width: 1000px) {
      top:2%;
      left: 2%;
      width: 80px;
    }

    @media (max-width: 400px) {
      top:2%;
      left: 2%;
      width: 55px;
    }
  `;

  const CurvedTextGame = styled.div`
    position: absolute;
    top: 4%;
    left: -3%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 200px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1360px) {
      width: 130px;
      top: 5%;
      left: 1%;
    }

    @media (min-width: 1000px) and (max-width: 1024px) {
      top: 3%;
      left: 1%;
      width: 130px;
    }

    @media (max-width: 1000px) {
      top: 3%;
      left: 2%;
      width: 110px;
    }

    @media (max-width: 639px) {
      top: 3%;
      left: -2%;
      width: 100px;
    }
  `;

  const CurvedTextGameHover = styled.div`
    position: absolute;
    top: 4%;
    left: -2%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 160px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 4%;
      left: 1%;
      width: 130px;
    }

    @media (max-width: 1360px) {
      top: 4%;
      left: 1%;
      width: 120px;
    }

    @media (max-width: 1000px) {
      top: 3%;
      left: 0%;
      width: 90px;
    }

    @media (max-width: 500px) {
      top: 4%;
      left: 6%;
      width: 65px;
    }

    @media (max-width: 400px) {
      top: 3%;
      left: 5%;
      width: 50px;
    }
  `;

  const CurvedTextGameConfig = styled.div`
    position: absolute;
    top: 4%;
    left: 4%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 190px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 4%;
      left: 7%;
      width: 180px;
    }

    @media (max-width: 1360px) {
      top: 4%;
      left: 6%;
      width: 130px;
    }

    @media (min-width: 1000px) and (max-width: 1024px) {
      top: 4%;
      left: 6%;
      width: 120px;
    }

    @media (max-width: 1000px) {
      top: 4%;
      left: 6%;
      width: 110px;
    }

    @media (max-width: 950px) {
      top: 3%;
      left: 7%;
      width: 80px;
    }

    @media (max-width: 850px) {
      top: 3%;
      left: 6%;
      width: 75px;
    }

    @media (max-width: 768px) {
      top: 4%;
      left: 6%;
      width: 110px;
    }

    @media (max-width: 639px) {
      top: 4%;
      left: 7%;
      width: 90px;
    }
  `;

  const CurvedTextGameConfigHover = styled.div`
    position: absolute;
    top: 4%;
    left: 5%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 150px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 4%;
      left: 6%;
      width: 130px;
    }

    
    @media (max-width: 1360px) {
      top: 4%;
      left: 6%;
      width: 120px;
    }

    @media (max-width: 1280px) {
      top: 4%;
      left: 7%;
      width: 90px;
    }

    @media (max-width: 1000px) {
      top: 4%;
      left: 7%;
      width: 80px;
    }

    @media (max-width: 950px) {
      top: 4%;
      left: 6%;
      width: 65px;
    }

    @media (max-width: 850px) {
      top: 5%;
      left: 8.5%;
      width: 65px;
    }

    @media (max-width: 400px) {
      top: 5%;
      left: 7%;
      width: 65px;
    }

    @media (max-width: 500px) {
      top: 5%;
      left: 6%;
      width: 65px;
    }
  `;

  const CurvedTextWebApp = styled.div`
    position: absolute;
    top: 4%;
    left: 12%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 170px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1360px) {
      top: 3%;
      left: 12%;
      width: 120px;
    }

    @media (min-width: 1000px) and (max-width: 1024px) {
      top: 4%;
      left: 11%;
      width: 120px;
    }

    @media (max-width: 1000px) {
      top: 4%;
      left: 15%;
      width: 70px;
    }

    @media (max-width: 950px) {
      top: 5%;
      left: 15%;
      width: 70px;
    }

    @media (max-width: 639px) {
      top: 5%;
      left: 10%;
      width: 90px;
    }
  `;

  const CurvedTextWebAppHover = styled.div`
    position: absolute;
    top: 4%;
    left: 12%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 140px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 4%;
      left: 12%;
      width: 120px;
    }

    @media (max-width: 1360px) {
      top: 4%;
      left: 12%;
      width: 110px;
    }

    @media (max-width: 1280px) {
      top: 4%;
      left: 12%;
      width: 100px;
    }

    @media (max-width: 1000px) {
      top: 4%;
      left: 12%;
      width: 80px;
    }

    @media (max-width: 950px) {
      top: 4%;
      left: 12%;
      width: 70px;
    }

    @media (max-width: 850px) {
      top: 3%;
      left: 16%;
      width: 70px;
    }

    @media (max-width: 500px) {
      top: 3%;
      left: 14%;
      width: 60px;
    }
  `;

  const CurvedTextHealTech = styled.div`
    position: absolute;
    top: 13%;
    left: 0%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 200px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 13%;
      left: 0%;
      width: 200px;
    }

    @media (max-width: 1360px) {
      top: 14%;
      left: 0%;
      width: 140px;
    }

    @media (min-width: 1000px) and (max-width: 1024px) {
      top: 12%;
      left: 0%;
      width: 140px;
    }

    @media (max-width: 1000px) {
      top: 13%;
      left: 1%;
      width: 120px;
    }

    @media (max-width: 639px) {
      top: 13%;
      left: 1%;
      width: 100px;
    }
  `;

  const CurvedTextHealTechHover = styled.div`
    position: absolute;
    top: 14%;
    left: 0%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 160px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 14%;
      left: -3%;
      width: 150px;
    }

    @media (max-width: 1360px) {
      top: 14%;
      left: -3%;
      width: 140px;
    }

    @media (max-width: 1000px) {
      top: 14%;
      left: 0%;
      width: 90px;
    }

    @media (max-width: 500px) {
      top: 14%;
      left: 0%;
      width: 70px;
    }
  `;

  const CurvedTextCloud = styled.div`
    position: absolute;
    top: 8%;
    left: 4%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 190px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 9%;
      left: 9%;
      width: 160px;
    }

    @media (max-width: 1360px) {
      top: 9%;
      left: 6%;
      width: 120px;
    }

    @media (min-width: 1000px) and (max-width: 1024px) {
      top: 8%;
      left: 6%;
      width: 120px;
    }

    @media (max-width: 1000px) {
      top: 8%;
      left: 4%;
      width: 110px;
    }

    @media (max-width: 639px) {
      top: 8%;
      left: 6%;
      width: 90px;
    }
  `;

  const CurvedTextCloudHover = styled.div`
    position: absolute;
    top: 8%;
    left: 8%;
    z-index: 9999;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: 130px;
    height: 100px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }

    @media (max-width: 1440px) {
      top: 8%;
      left: 2%;
      width: 140px;
    }

    @media (max-width: 1360px) {
      top: 8%;
      left: 4%;
      width: 120px;
    }

    @media (max-width: 1000px) {
      top: 8%;
      left: 4%;
      width: 85px;
    }

    @media (max-width: 500px) {
      top: 8%;
      left: 4%;
      width: 70px;
    }
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v === 8) {
          setSelectedIndex((i) => {
            return i === 5 ? 0 : i + 1;
          });
        }
        return v === 8 ? 0 : v + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-[200px]"
      style={{
        backgroundImage: `url(${BackgroundSlider.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="flex flex-row 
        md:px-[32px]
        lg:px-[32px]
        xl:px-10
        2xl:px-[10%]"
      >
        <div
          className={`${StyleBanner.contentBanner} md:py-[200px] lg:py-[300px] xl:py-[350px] 2xl:py-[400px]`}
        >
          <div
            className="font-montserrat font-bold text-[#1DE9B6]
            md:text-[24px] md:leading-[30px] 
            xl:text-[32px] xl:leading-[40px]
            2xl:text-[64px] 2xl:leading-[80px]
          "
          >
            <p className="">Patience</p>
            <p className="">on the path</p>
          </div>
          <div
            className="mt-[36px] font-montserratRegular text-base leading-6 tracking-[0.2em] text-white
              md:mr-[36px] md:mt-[20px] md:text-[12px]
              xl:text-[14px] xl:leading-[17px]
              2xl:text-[16px] 2xl:leading-[24px]
          "
          >
            <p className="">
              PAPAGROUP is a technology company on cross-platform application
              for both outsourcing and production by delivering software
              applications contributing to build the life to be better.
            </p>
          </div>
        </div>
        <div
          className="flex w-full items-center justify-center">
          <div
            className={`relative ${StyleBanner.imageBanner}
              sm:mb-[100px] sm:mt-[130px]
              sm:h-[250px] sm:w-[250px]
              md:h-[300px] md:w-[300px]
              lg:h-[400px] lg:w-[400px]
              xl:h-[450px] xl:w-[450px]
              2xl:h-[550px] 2xl:w-[550px]
            `}
            style={{
              backgroundImage: `url(${EllipseSlider.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {selectedIndex === 0 && !hoverItem ? (
              <div>
                <div
                  className={`absolute hover:cursor-pointer ${stylesAnimation.zoomIn}
                    ${StyleBanner.positionAnimationOdc}
                    sm:left-[-85px] sm:top-[-50px] sm:h-[120px] sm:w-[120px]
                    md:left-[-80px] md:top-[-40px] md:h-[120px] md:w-[120px]
                    lg:left-[-100px] lg:top-[-40px] lg:h-[160px] lg:w-[160px]
                    xl:left-[-160px] xl:top-[-40px] xl:h-[200px] xl:w-[200px]
                    2xl:left-[-140px] 2xl:top-[-40px] 2xl:h-[200px] 2xl:w-[200px]
                  `}
                  onClick={() => router.push('/services/offshore')}
                >
                  <Image
                    layout="fill"
                    src={ImageHoverOffshore}
                    alt="introduce"
                  />
                  <CurvedTextOdc className="curved-text">
                    <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                      <path
                        id="curve"
                        d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                          d + offset
                        },${r + offset}`}
                      />
                      <text>
                        <textPath
                          xlinkHref="#curve"
                          startOffset="50%"
                          fontSize={14}
                        >
                          {'OFFSHORE DEVELOPMENT CENTER'}
                        </textPath>
                      </text>
                    </svg>
                  </CurvedTextOdc>
                </div>
                <div
                  className={`absolute ${stylesAnimation.zoomOut}
                    ${StyleBanner.animationOdc}
                    sm:left-[0px] sm:top-[30px] sm:h-[60px] sm:w-[60px]
                    md:left-[10px] md:top-[40px] md:h-[60px] md:w-[60px]
                    lg:left-[10px] lg:top-[60px] lg:h-[80px] lg:w-[80px]
                    xl:left-[-10px] xl:top-[90px] xl:h-[100px] xl:w-[100px]
                    2xl:h-[130px] 2xl:w-[130px]
                  `}
                >
                  <Image src={ImageOffshore} layout="fill" alt="introduce" />
                </div>
              </div>
            ) : (
              <div
                className={`absolute left-[-30px] top-[140px] hover:cursor-pointer 
                  ${StyleBanner.animationOdc}
                  sm:left-[0px] sm:top-[30px] sm:h-[60px] sm:w-[60px]
                  md:left-[10px] md:top-[40px] md:h-[60px] md:w-[60px]
                  lg:left-[10px] lg:top-[60px] lg:h-[80px] lg:w-[80px]
                  xl:left-[-10px] xl:top-[90px] xl:h-[100px] xl:w-[100px]
                  2xl:h-[130px] 2xl:w-[130px]
              `}
                onClick={() => router.push('/services/offshore')}
                onMouseOver={() => {
                  setHoverItem(true);
                  setSelectedOdc(true);
                }}
                onMouseOut={() => {
                  setHoverItem(false);
                  setSelectedOdc(false);
                }}
              >
                <Image src={ImageOffshore} layout="fill" alt="introduce" />
                {selectedOdc && (
                  <div
                    className={`absolute left-[-100px] top-[-140px] hover:cursor-pointer ${stylesAnimation.hover}
                      xm:left-[-40px] xm:top-[-45px] xm:h-[60px] xm:w-[60px]
                      sd:left-[-85px] sd:top-[-50px] sd:h-[90px] sd:w-[90px]
                      md:left-[-70px] md:top-[-70px] md:h-[90px] md:w-[90px]
                      lg:left-[-100px] lg:top-[-120px] lg:h-[130px] lg:w-[130px]
                      xl:left-[-100px] xl:top-[-120px] xl:h-[140px] xl:w-[140px]
                      2xl:left-[-100px] 2xl:top-[-140px] 2xl:h-[160px] 2xl:w-[160px]
                    `}
                    onClick={() => router.push('/services/offshore')}
                  >
                    <CurvedTextOdcHover className="curved-text">
                      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                        <path
                          id="curve"
                          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                            d + offset
                          },${r + offset}`}
                        />
                        <text>
                          <textPath
                            xlinkHref="#curve"
                            startOffset="40%"
                            fontSize={14}
                          >
                            {'OFFSHORE DEVELOPMENT CENTER'}
                          </textPath>
                        </text>
                      </svg>
                    </CurvedTextOdcHover>
                    <Image
                      width={200}
                      height={200}
                      src={ImageHoverOffshore}
                      alt="introduce"
                    />
                  </div>
                )}
              </div>
            )}

            {selectedIndex === 1 && !hoverItem ? (
              <div>
                <div
                  className={`absolute hover:cursor-pointer ${stylesAnimation.zoomIn}
                    ${StyleBanner.positionAnimationGame}
                    sm:left-[60px] sm:top-[-110px] sm:h-[120px] sm:w-[120px]
                    md:left-[90px] md:top-[-110px] md:h-[120px] md:w-[120px]
                    lg:left-[130px] lg:top-[-120px] lg:h-[140px] lg:w-[140px]
                    xl:left-[130px] xl:top-[-180px] xl:h-[200px] xl:w-[200px]
                    2xl:left-[180px] 2xl:top-[-180px] 2xl:h-[200px] 2xl:w-[200px]
                  `}
                  onClick={() => router.push('/services/gameservice/detail')}
                >
                  <Image layout="fill" src={ImageHoverGame} alt="introduce" />
                  <CurvedTextGame className="curved-text">
                    <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                      <path
                        id="curve"
                        d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                          d + offset
                        },${r + offset}`}
                      />
                      <text>
                        <textPath
                          xlinkHref="#curve"
                          startOffset="50%"
                          fontSize={14}
                        >
                          {'2D/3D/AR/VR GAME'}
                        </textPath>
                      </text>
                    </svg>
                  </CurvedTextGame>
                </div>
                <div
                  className={`absolute ${stylesAnimation.zoomOut}
                    ${StyleBanner.animationGame}
                    sm:left-[90px] sm:top-[-20px] sm:h-[60px] sm:w-[60px]
                    md:left-[120px] md:top-[-20px] md:h-[60px] md:w-[60px]
                    lg:left-[160px] lg:top-[-25px] lg:h-[80px] lg:w-[80px]
                    xl:left-[175px] xl:top-[-40px] xl:h-[100px] xl:w-[100px]
                    2xl:left-[210px] 2xl:top-[-50px] 2xl:h-[130px] 2xl:w-[130px]
                  `}
                >
                  <Image layout="fill" src={ImageGame} alt="introduce" />
                </div>
              </div>
            ) : (
              <div
                className={`absolute left-[260px] top-[-50px] hover:cursor-pointer
                  ${StyleBanner.animationGame}
                  sm:left-[90px] sm:top-[-20px] sm:h-[60px] sm:w-[60px]
                  md:left-[120px] md:top-[-20px] md:h-[60px] md:w-[60px]
                  lg:left-[160px] lg:top-[-25px] lg:h-[80px] lg:w-[80px]
                  xl:left-[175px] xl:top-[-40px] xl:h-[100px] xl:w-[100px]
                  2xl:left-[210px] 2xl:top-[-50px] 2xl:h-[130px] 2xl:w-[130px]
                `}
                onClick={() => router.push('/services/gameservice/detail')}
                onMouseOver={() => {
                  setHoverItem(true);
                  setSelectedGame(true);
                }}
                onMouseOut={() => {
                  setHoverItem(false);
                  setSelectedGame(false);
                }}
              >
                <Image layout="fill" src={ImageGame} alt="introduce" />
                {selectedGame && (
                  <div
                    className={`absolute left-[-10px] top-[-150px] hover:cursor-pointer ${stylesAnimation.hover}
                      xm:left-[5px] xm:top-[-60px] xm:h-[60px] xm:w-[60px]
                      sd:left-[-10px] sd:top-[-75px] sd:h-[80px] sd:w-[80px]
                      md:left-[-15px] md:top-[-90px] md:h-[90px] md:w-[90px]
                      lg:left-[-25px] lg:top-[-130px] lg:h-[130px] lg:w-[130px]
                      xl:left-[-15px] xl:top-[-140px] xl:h-[140px] xl:w-[140px]
                      2xl:left-[-10px] 2xl:top-[-150px] 2xl:h-[160px] 2xl:w-[160px]
                    `}
                    onClick={() => router.push('/services/gameservice/detail')}
                  >
                    <Image layout="fill" src={ImageHoverGame} alt="introduce" />
                    <CurvedTextGameHover className="curved-text">
                      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                        <path
                          id="curve"
                          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                            d + offset
                          },${r + offset}`}
                        />
                        <text>
                          <textPath
                            xlinkHref="#curve"
                            startOffset="40%"
                            fontSize={14}
                          >
                            {'2D/3D/AR/VR GAME'}
                          </textPath>
                        </text>
                      </svg>
                    </CurvedTextGameHover>
                  </div>
                )}
              </div>
            )}

            {selectedIndex === 2 && !hoverItem ? (
              <div>
                <div
                  className={`absolute hover:cursor-pointer ${stylesAnimation.zoomIn}
                    ${StyleBanner.positionAnimationGameConfig}
                    sm:right-[-90px] sm:top-[-40px] sm:h-[90px] sm:w-[90px]
                    ms:right-[-40px] ms:top-[-40px] ms:h-[90px] ms:w-[90px]
                    md:right-[-35px] md:top-[-20px] md:h-[80px] md:w-[80px]
                    lg:right-[-60px] lg:top-[-35px] lg:h-[130px] lg:w-[130px]
                    xl:right-[-165px] xl:top-[-10px] xl:h-[200px] xl:w-[200px]
                    2xl:right-[-150px] 2xl:top-[-10px] 2xl:h-[200px] 2xl:w-[200px]
                  `}
                  onClick={() => router.push('/services/gameconfig')}
                >
                  <Image
                    layout="fill"
                    src={ImageHoverGameConfig}
                    alt="introduce"
                  />
                  <CurvedTextGameConfig className="curved-text">
                    <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                      <path
                        id="curve"
                        d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                          d + offset
                        },${r + offset}`}
                      />
                      <text>
                        <textPath
                          xlinkHref="#curve"
                          startOffset="55%"
                          fontSize={16}
                        >
                          {'GAMIFICATION MARKETING PLATFORM'}
                        </textPath>
                      </text>
                    </svg>
                  </CurvedTextGameConfig>
                </div>
                <div
                  className={`absolute ${stylesAnimation.zoomOut}
                    ${StyleBanner.animationGameConfig}
                    sm:right-[5px] sm:top-[25px] sm:h-[60px] sm:w-[60px]
                    md:right-[5px] md:top-[40px] md:h-[60px] md:w-[60px]
                    lg:right-[0px] lg:top-[60px] lg:h-[80px] lg:w-[80px]
                    xl:right-[-20px] xl:top-[90px] xl:h-[100px] xl:w-[100px]
                    2xl:right-[-30px] 2xl:top-[90px] 2xl:h-[130px] 2xl:w-[130px]
                  `}
                >
                  <Image layout="fill" src={ImageGameConfig} alt="introduce" />
                </div>
              </div>
            ) : (
              <div
                className={`absolute right-[-30px] top-[140px] hover:cursor-pointer
                  ${StyleBanner.animationGameConfig}
                  sm:right-[5px] sm:top-[25px] sm:h-[60px] sm:w-[60px]
                  md:right-[5px] md:top-[40px] md:h-[60px] md:w-[60px]
                  lg:right-[0px] lg:top-[60px] lg:h-[80px] lg:w-[80px]
                  xl:right-[-20px] xl:top-[90px] xl:h-[100px] xl:w-[100px]
                  2xl:right-[-30px] 2xl:top-[90px] 2xl:h-[130px] 2xl:w-[130px]
                `}
                onClick={() => router.push('/services/gameconfig')}
                onMouseOver={() => {
                  setHoverItem(true);
                  setSelectedGameConfig(true);
                }}
                onMouseOut={() => {
                  setHoverItem(false);
                  setSelectedGameConfig(false);
                }}
              >
                <Image layout="fill" src={ImageGameConfig} alt="introduce" />
                {selectedGameConfig && (
                  <div
                    className={`absolute hover:cursor-pointer ${stylesAnimation.hover}
                      xm:right-[-30px] xm:top-[-60px] xm:h-[70px] xm:w-[70px]
                      sd:right-[-30px] sd:top-[-60px] sd:h-[70px] sd:w-[70px]
                      ms:right-[-35px] ms:top-[-60px] ms:h-[70px] ms:w-[70px]
                      md:right-[-35px] md:top-[-65px] md:h-[75px] md:w-[75px]
                      lg:right-[-60px] lg:top-[-90px] lg:h-[100px] lg:w-[100px]
                      lx:right-[-120px] lx:top-[-100px] lx:h-[130px] lx:w-[130px]
                      xl:right-[-120px] xl:top-[-100px] xl:h-[140px] xl:w-[140px]
                      2xl:right-[-100px] 2xl:top-[-130px] 2xl:h-[160px] 2xl:w-[160px]
                    `}
                    onClick={() => router.push('/services/gameconfig')}
                  >
                    <Image
                      layout="fill"
                      src={ImageHoverGameConfig}
                      alt="introduce"
                    />
                    <CurvedTextGameConfigHover className="curved-text">
                      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                        <path
                          id="curve"
                          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                            d + offset
                          },${r + offset}`}
                        />
                        <text>
                          <textPath
                            xlinkHref="#curve"
                            startOffset="55%"
                            fontSize={14}
                          >
                            {'GAMECONFICATION MARKETING PLATFORM'}
                          </textPath>
                        </text>
                      </svg>
                    </CurvedTextGameConfigHover>
                  </div>
                )}
              </div>
            )}

            {selectedIndex === 3 && !hoverItem ? (
              <div>
                <div
                  className={`absolute hover:cursor-pointer ${stylesAnimation.zoomIn}
                    ${StyleBanner.positionAnimationWebApp}
                    sm:bottom-[-40px] sm:right-[-90px] sm:h-[120px] sm:w-[120px]
                    ms:bottom-[-20px] ms:right-[-30px] ms:h-[90px] ms:w-[90px]
                    md:bottom-[-20px] md:right-[-35px] md:h-[90px] md:w-[90px]
                    lg:bottom-[-40px] lg:right-[-60px] lg:h-[140px] lg:w-[140px]
                    xl:bottom-[-50px] xl:right-[-150px] xl:h-[200px] xl:w-[200px]
                    2xl:bottom-[-10px] 2xl:right-[-150px] 2xl:h-[200px] 2xl:w-[200px]
                  `}
                  onClick={() => router.push('/services/webappsystem')}
                >
                  <Image layout="fill" src={ImageHoverWebApp} alt="introduce" />
                  <CurvedTextWebApp className="curved-text">
                    <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                      <path
                        id="curve"
                        d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                          d + offset
                        },${r + offset}`}
                      />
                      <text>
                        <textPath
                          xlinkHref="#curve"
                          startOffset="50%"
                          fontSize={16}
                        >
                          {'WEB & APP SYSTEM'}
                        </textPath>
                      </text>
                    </svg>
                  </CurvedTextWebApp>
                </div>
                <div
                  className={`absolute ${stylesAnimation.zoomOut}
                    ${StyleBanner.animationWebApp}
                    sm:bottom-[30px] sm:right-[0px] sm:h-[60px] sm:w-[60px]
                    md:bottom-[30px] md:right-[10px] md:h-[60px] md:w-[60px]
                    lg:bottom-[60px] lg:right-[0px] lg:h-[80px] lg:w-[80px]
                    xl:bottom-[90px] xl:right-[-20px] xl:h-[100px] xl:w-[100px]
                    2xl:bottom-[70px] 2xl:right-[-20px] 2xl:h-[130px] 2xl:w-[130px]
                  `}
                >
                  <Image layout="fill" src={ImageWebApp} alt="introduce" />
                </div>
              </div>
            ) : (
              <div
                className={`absolute bottom-[100px] right-[-20px] hover:cursor-pointer
                  ${StyleBanner.animationWebApp}
                  sm:bottom-[30px] sm:right-[0px] sm:h-[60px] sm:w-[60px]
                  md:bottom-[30px] md:right-[10px] md:h-[60px] md:w-[60px]
                  lg:bottom-[60px] lg:right-[0px] lg:h-[80px] lg:w-[80px]
                  xl:bottom-[90px] xl:right-[-20px] xl:h-[100px] xl:w-[100px]
                  2xl:bottom-[70px] 2xl:right-[-20px] 2xl:h-[130px] 2xl:w-[130px]
                `}
                onClick={() => router.push('/services/webappsystem')}
                onMouseOver={() => {
                  setHoverItem(true);
                  setSelectedWebApp(true);
                }}
                onMouseOut={() => {
                  setHoverItem(false);
                  setSelectedWebApp(false);
                }}
              >
                <Image
                  width={130}
                  height={130}
                  src={ImageWebApp}
                  alt="introduce"
                />
                {selectedWebApp && (
                  <div
                    className={`absolute bottom-[-120px] right-[-90px] h-[150px] w-[150px] hover:cursor-pointer ${stylesAnimation.hover} z-[9999]
                      xm:bottom-[-65px] xm:right-[-40px] xm:h-[70px] xm:w-[70px]
                      sd:bottom-[-60px] sd:right-[-40px] sd:h-[70px] sd:w-[70px]
                      ms:bottom-[-65px] ms:right-[-40px] ms:h-[80px] ms:w-[80px]
                      md:bottom-[-80px] md:right-[-40px] md:h-[90px] md:w-[90px]
                      lg:bottom-[-110px] lg:right-[-50px] lg:h-[120px] lg:w-[120px]
                      lx:bottom-[-120px] lx:right-[-110px] lx:h-[130px] lx:w-[130px]
                      xl:bottom-[-120px] xl:right-[-110px] xl:h-[140px] xl:w-[140px]
                      2xl:bottom-[-130px] 2xl:right-[-100px] 2xl:h-[160px] 2xl:w-[160px]
                    `}
                    onClick={() => router.push('/services/gameconfig')}
                  >
                    <Image
                      src={ImageHoverWebApp}
                      layout="fill"
                      alt="introduce"
                    />
                    <CurvedTextWebAppHover className="curved-text">
                      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                        <path
                          id="curve"
                          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                            d + offset
                          },${r + offset}`}
                        />
                        <text>
                          <textPath
                            xlinkHref="#curve"
                            startOffset="50%"
                            fontSize={14}
                          >
                            {'WEB & APP SYSTEM'}
                          </textPath>
                        </text>
                      </svg>
                    </CurvedTextWebAppHover>
                  </div>
                )}
              </div>
            )}

            {selectedIndex === 4 && !hoverItem ? (
              <div>
                <div
                  className={`absolute hover:cursor-pointer ${stylesAnimation.zoomIn}
                    ${StyleBanner.positionAnimationHealTech}
                    sm:bottom-[-110px] sm:right-[65px] sm:h-[120px] sm:w-[120px]
                    md:bottom-[-110px] md:right-[90px] md:h-[120px] md:w-[120px]
                    lg:bottom-[-130px] lg:right-[130px] lg:h-[140px] lg:w-[140px]
                    xl:bottom-[-190px] xl:right-[130px] xl:h-[200px] xl:w-[200px]
                    2xl:bottom-[-200px] 2xl:right-[190px] 2xl:h-[200px] 2xl:w-[200px]
                  `}
                  onClick={() => router.push('/services/healthtech')}
                >
                  <Image layout="fill" src={ImageHoverPgo} alt="introduce" />
                  <CurvedTextHealTech className="curved-text">
                    <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                      <path
                        id="curve"
                        d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                          d + offset
                        },${r + offset}`}
                      />
                      <text>
                        <textPath
                          xlinkHref="#curve"
                          startOffset="50%"
                          fontSize={14}
                        >
                          {'HEALTH TECH PLATFORM'}
                        </textPath>
                      </text>
                    </svg>
                  </CurvedTextHealTech>
                </div>
                <div
                  className={`absolute ${stylesAnimation.zoomOut}
                    ${StyleBanner.animationHealTech}
                    sm:bottom-[-20px] sm:right-[95px] sm:h-[60px] sm:w-[60px]
                    md:bottom-[-20px] md:right-[120px] md:h-[60px] md:w-[60px]
                    lg:bottom-[-25px] lg:right-[160px] lg:h-[80px] lg:w-[80px]
                    xl:bottom-[-40px] xl:right-[180px] xl:h-[100px] xl:w-[100px]
                    2xl:bottom-[-60px] 2xl:right-[220px] 2xl:h-[130px] 2xl:w-[130px]
                  `}
                >
                  <Image layout="fill" src={ImagePgo} alt="introduce" />
                </div>
              </div>
            ) : (
              <div
                className={`absolute bottom-[-60px] right-[270px] hover:cursor-pointer
                  ${StyleBanner.animationHealTech}
                  sm:bottom-[-20px] sm:right-[95px] sm:h-[60px] sm:w-[60px]
                  md:bottom-[-20px] md:right-[120px] md:h-[60px] md:w-[60px]
                  lg:bottom-[-25px] lg:right-[160px] lg:h-[80px] lg:w-[80px]
                  xl:bottom-[-40px] xl:right-[180px] xl:h-[100px] xl:w-[100px]
                  2xl:bottom-[-60px] 2xl:right-[220px] 2xl:h-[130px] 2xl:w-[130px]
                `}
                onClick={() => router.push('/services/healthtech')}
                onMouseOver={() => {
                  setHoverItem(true);
                  setSelectedHealTech(true);
                }}
                onMouseOut={() => {
                  setHoverItem(false);
                  setSelectedHealTech(false);
                }}
              >
                <Image
                  width={130}
                  height={130}
                  src={ImagePgo}
                  alt="introduce"
                />
                {selectedHealTech && (
                  <div
                    className={`absolute bottom-[-145px] right-[-10px] w-[190px] hover:cursor-pointer ${stylesAnimation.hover}
                      xm:bottom-[-70px] xm:right-[-5px] xm:h-[70px] xm:w-[70px]
                      sd:bottom-[-70px] sd:right-[-5px] sd:h-[70px] sd:w-[70px]
                      md:bottom-[-90px] md:right-[-15px] md:h-[90px] md:w-[90px]
                      lg:bottom-[-130px] lg:right-[-25px] lg:h-[130px] lg:w-[130px]
                      xl:bottom-[-145px] xl:right-[-20px] xl:h-[140px] xl:w-[140px]
                      2xl:bottom-[-150px] 2xl:right-[-10px] 2xl:h-[160px] 2xl:w-[160px]
                    `}
                    onClick={() => router.push('/services/gameconfig')}
                  >
                    <Image layout="fill" src={ImageHoverPgo} alt="introduce" />
                    <CurvedTextHealTechHover className="curved-text">
                      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                        <path
                          id="curve"
                          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                            d + offset
                          },${r + offset}`}
                        />
                        <text>
                          <textPath
                            xlinkHref="#curve"
                            startOffset="50%"
                            fontSize={14}
                          >
                            {'HEALTH TECH PLATFORM'}
                          </textPath>
                        </text>
                      </svg>
                    </CurvedTextHealTechHover>
                  </div>
                )}
              </div>
            )}
            {selectedIndex === 5 && !hoverItem ? (
              <div>
                <div
                  className={`absolute hover:cursor-pointer ${stylesAnimation.zoomIn}
                    ${StyleBanner.positionAnimationCloud}
                    sm:bottom-[-50px] sm:left-[-80px] sm:h-[120px] sm:w-[120px]
                    md:bottom-[-50px] md:left-[-60px] md:h-[120px] md:w-[120px]
                    lg:bottom-[-20px] lg:left-[-90px] lg:h-[140px] lg:w-[140px]
                    xl:bottom-[-40px] xl:left-[-150px] xl:h-[200px] xl:w-[200px]
                    2xl:bottom-[-60px] 2xl:left-[-120px] 2xl:h-[200px] 2xl:w-[200px]
                  `}
                  onClick={() => router.push('/services/cloudserver')}
                >
                  <Image layout="fill" src={ImageHoverCloud} alt="introduce" />
                  <CurvedTextCloud className="curved-text">
                    <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                      <path
                        id="curve"
                        d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                          d + offset
                        },${r + offset}`}
                      />
                      <text>
                        <textPath
                          xlinkHref="#curve"
                          startOffset="40%"
                          fontSize={14}
                        >
                          {'CLOUD SERVER'}
                        </textPath>
                      </text>
                    </svg>
                  </CurvedTextCloud>
                </div>
                <div
                  className={`absolute ${stylesAnimation.zoomOut}
                    ${StyleBanner.animationCloud}
                    sm:bottom-[30px] sm:left-[0px] sm:h-[60px] sm:w-[60px]
                    md:bottom-[30px] md:left-[20px] md:h-[60px] md:w-[60px]
                    lg:bottom-[60px] lg:left-[5px] lg:h-[80px] lg:w-[80px]
                    xl:bottom-[85px] xl:left-[-10px] xl:h-[100px] xl:w-[100px]
                    2xl:bottom-[70px] 2xl:left-[-10px] 2xl:h-[130px] 2xl:w-[130px]
                  `}
                >
                  <Image layout="fill" src={ImageCloud} alt="introduce" />
                </div>
              </div>
            ) : (
              <div
                className={`absolute bottom-[100px] left-[-20px] hover:cursor-pointer
                  ${StyleBanner.animationCloud}
                  sm:bottom-[30px] sm:left-[0px] sm:h-[60px] sm:w-[60px]
                  md:bottom-[30px] md:left-[20px] md:h-[60px] md:w-[60px]
                  lg:bottom-[60px] lg:left-[5px] lg:h-[80px] lg:w-[80px]
                  xl:bottom-[85px] xl:left-[-10px] xl:h-[100px] xl:w-[100px]
                  2xl:bottom-[70px] 2xl:left-[-10px] 2xl:h-[130px] 2xl:w-[130px]
                `}
                onClick={() => router.push('/services/cloudserver')}
                onMouseOver={() => {
                  setHoverItem(true);
                  setSelectedCloud(true);
                }}
                onMouseOut={() => {
                  setHoverItem(false);
                  setSelectedCloud(false);
                }}
              >
                <Image
                  width={130}
                  height={130}
                  src={ImageCloud}
                  alt="introduce"
                />
                {selectedCloud && (
                  <div
                    className={`absolute bottom-[-120px] left-[-120px] hover:cursor-pointer ${stylesAnimation.hover}
                      xm:bottom-[-65px] xm:left-[-30px] xm:h-[70px] xm:w-[70px]
                      sd:bottom-[-50px] sd:left-[-55px] sd:h-[70px] sd:w-[70px]
                      md:bottom-[-70px] md:left-[-75px] md:h-[90px] md:w-[90px]
                      lg:bottom-[-100px] lg:left-[-100px] lg:h-[130px] lg:w-[130px]
                      xl:bottom-[-110px] xl:left-[-110px] xl:h-[140px] xl:w-[140px]
                      2xl:bottom-[-120px] 2xl:left-[-120px] 2xl:h-[160px] 2xl:w-[160px]
                    `}
                    onClick={() => router.push('/services/gameconfig')}
                  >
                    <Image
                      layout="fill"
                      src={ImageHoverCloud}
                      alt="introduce"
                    />
                    <CurvedTextCloudHover className="curved-text">
                      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
                        <path
                          id="curve"
                          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${
                            d + offset
                          },${r + offset}`}
                        />
                        <text>
                          <textPath
                            xlinkHref="#curve"
                            startOffset="40%"
                            fontSize={14}
                          >
                            {'CLOUD SERVER'}
                          </textPath>
                        </text>
                      </svg>
                    </CurvedTextCloudHover>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${StyleBanner.contentBannerFooter} sm:mb-[100px] sm:px-[16px] md:hidden`}
      >
        <div
          className={`${StyleBanner.contentTitle} font-montserrat font-bold text-[#1DE9B6]
          sm:text-[24px] sm:leading-[30px]
        `}
        >
          <p className="">Patience</p>
          <p className="">on the path</p>
        </div>
        <div
          className={`${StyleBanner.contentDescription} font-montserratRegular text-base leading-6 tracking-[0.2em] text-white
            sm:mt-[20px] sm:text-[14px]
        `}
        >
          <p className="">
            PAPAGROUP is a technology company on cross-platform application for
            both outsourcing and production by delivering software applications
            contributing to build the life to be better.
          </p>
        </div>
      </div>
      {/* <div className={`absolute bottom-0 h-[200px] w-full`}>
        <Image
          src={BackgroundTransparent}
          alt="background"
          objectFit="cover"
          layout="fill"
        />
      </div> */}
    </div>
  );
};

export default React.memo(Banner);
