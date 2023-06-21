import React from 'react';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import TillePage from '@/components/common/TitlePage';
import BannerGames from '/public/ourservices/banner-games.png';
import CardGameService from './components/Card';

function GameService() {
  const links = [
    {
      title: 'services',
      path: '/services',
    },
    {
      title: 'Our package',
    },
  ];

  const listOurPackageGame = [
    {
      id: 1,
      title: 'AR GAME',
      project1: 'Document',
      project2: 'Game play',
      project3: 'Game Page',
      project4: 'Admin Page',
      project5: 'Platform',
      graphic: '2D',
      time: 'Contact us',
    },
    {
      id: 2,
      title: 'MOBA GAME',
      project1: 'Document',
      project2: 'Game play',
      project3: 'Game Page',
      project4: 'Admin Page',
      project5: 'Platform',
      graphic: '2D',
      time: 'Contact us',
    },
    {
      id: 3,
      title: 'FARMER GAME',
      project1: 'Game client',
      project2: 'Game play',
      project3: 'Game Page',
      project4: 'Admin Page',
      project5: 'Platform',
      graphic: '2D',
      time: 'Contact us',
    },
  ];

  return (
    <div>
      <div
        className="relative min-h-[200px]"
        style={{
          backgroundImage: `url(${BannerGames.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="flex flex-row items-center xm:hidden sm:block
            xl:px-10
            2xl:px-[10%]
        "
        >
          <div
            className="sm:pb-[150px] sm:pl-[48px] sm:pt-[50px]
                md:pb-[150px] md:pl-[48px] md:pt-[80px]
                lg:pb-[200px] lg:pl-[90px] lg:pt-[100px]
                xl:pb-[350px] xl:pl-[120px] xl:pt-[150px]
                2xl:pb-[450px] 2xl:pl-[0px] 2xl:pt-[150px]
          "
          >
            <div
              className="font-montserratFontwight7 text-active
                sm:text-[24px] sm:leading-[29px]
                md:text-[24px] md:leading-[29px]
                lg:text-[32px] lg:leading-[40px]
                xl:text-[32px] xl:leading-[40px]
                2xl:text-[64px] 2xl:leading-[80px]
            "
            >
              2D/3D/AR/VR Games
            </div>
            <div
              className="mt-[17px] mt-[20px] w-[50%] font-montserratRegular
                text-base text-white sm:mt-[20px]
                lg:text-[14px] lg:leading-[16px] xl:text-[14px]
                xl:leading-[16px] 2xl:mt-[36px] 2xl:text-[18px]
                2xl:leading-[24px]
            "
            >
              {`It is a staffing service divided into packages. Each position will have 3 levels: Junior, Middle, and Senior. 
                Each level will have a different description and price.`}
            </div>
            <div className="absolute bottom-[80px]">
              <BreadCrumbs links={links} />
            </div>
          </div>
        </div>
      </div>
      <div className="xm:px-[16px] xm:pb-[80px] xm:pt-[24px] sm:px-[32px] sm:pb-[80px] sm:pt-[80px] xl:px-10 2xl:px-[10%]">
        <div className="pb-[24px] xm:block sm:hidden">
          <BreadCrumbs links={links} />
        </div>
        <div
          className="flex flex-row items-center
              xm:block
              sm:hidden
        "
        >
          <div>
            <div
              className="font-montserratFontwight7 text-active
                xm:text-[24px] xm:leading-[29px]
            "
            >
              2D/3D/AR/VR Games
            </div>
            <div className="mt-[25px] w-[100%] font-montserratRegular text-[12px] text-base leading-[14px] text-white">
              {`It is a staffing service divided into packages. Each position will have 3 levels: Junior, Middle, and Senior. 
                Each level will have a different description and price.`}
            </div>
          </div>
        </div>

        <div className="text-center xm:mt-[32px] sm:mt-[0px]">
          <TillePage title={'OUR PACKAGE'} />
        </div>

        <div
          className="mt-10 grid gap-12
              xm:grid-cols-1
              sm:grid-cols-1 
              md:grid-cols-2
              md:grid-rows-2 lg:grid-cols-2
              lg:grid-rows-2 xl:grid-cols-2
              xl:grid-rows-1 2xl:grid-cols-3
        "
        >
          {listOurPackageGame.map(
            (item) => item && <CardGameService item={item} key={item.id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default GameService;
