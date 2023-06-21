import React, { useState } from 'react';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import TillePage from '@/components/common/TitlePage';
import BannerOffshore from '/public/ourservices/banner-offshore.png';
import CardOffshore from '../offshore/components/Card';

function OffshoreDevelopmentCenter() {
  const [active, setActive] = useState(1);

  const links = [
    {
      title: 'services',
      path: '/services',
    },
    {
      title: 'Offshore Development Center',
    },
  ];

  const listTag = [
    {
      categoryName: 'All',
      categoryId: 1,
    },
    {
      categoryName: 'Game Development',
      categoryId: 2,
    },
    {
      categoryName: 'Web & App Development',
      categoryId: 3,
    },
    {
      categoryName: 'BA & Design',
      categoryId: 4,
    },
    {
      categoryName: 'QA',
      categoryId: 5,
    },
  ];

  const listOffshoreDev = [
    {
      id: 1,
      title: 'GAME DEVELOPER',
      level: 'Junior',
      exp: '1 - 2 year',
      tool: 'ReactJS/UnityNodeJS/NodeJS',
      transfer: 'Product',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 2,
      title: 'WEB DEVELOPMENT',
      level: 'Junior',
      exp: '1 - 2 year',
      tool: 'ReactJS/UnityNodeJS/NodeJS',
      transfer: 'Product',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 3,
      title: 'UI/UX DESIGN',
      level: 'Junior',
      exp: '1 - 2 year',
      tool: 'ReactJS/UnityNodeJS/NodeJS',
      transfer: 'Product',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 4,
      title: 'QA/TESTER',
      level: 'Junior',
      exp: '1 - 2 year',
      tool: 'ReactJS/UnityNodeJS/NodeJS',
      transfer: 'Product',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 5,
      title: 'BA',
      level: 'Junior',
      exp: '1 - 2 year',
      tool: 'ReactJS/UnityNodeJS/NodeJS',
      transfer: 'Product',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 6,
      title: 'DEVOPS',
      level: 'Junior',
      exp: '1 - 2 year',
      tool: 'ReactJS/UnityNodeJS/NodeJS',
      transfer: 'Product',
      price: '20.000.000 - 25.000.000 VND',
    },
  ];

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <div>
      <div
        className="relative min-h-[200px]"
        style={{
          backgroundImage: `url(${BannerOffshore.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-row items-center xl:px-10 2xl:px-[10%]
            sm:block
            xm:hidden
        ">
          <div className="2xl:pb-[450px] 2xl:pt-[150px] 2xl:pl-[0px]
                xl:pb-[350px] xl:pt-[150px] xl:pl-[120px]
                lg:pb-[200px] lg:pt-[100px] lg:pl-[90px]
                md:pb-[150px] md:pt-[80px] md:pl-[48px]
                sm:pb-[150px] sm:pt-[50px] sm:pl-[48px]
          ">
            <div className="font-montserratFontwight7 text-active
                2xl:text-[64px] 2xl:leading-[80px]
                xl:text-[32px] xl:leading-[40px]
                lg:text-[32px] lg:leading-[40px]
                md:text-[24px] md:leading-[29px]
                sm:text-[24px] sm:leading-[29px]
            ">
              Offshore Development Center
            </div>
            <div className="w-[50%] font-montserratRegular text-base text-white
                2xl:text-[18px] 2xl:leading-[24px] 2xl:mt-[36px]
                xl:text-[14px] xl:leading-[16px] mt-[17px]
                lg:text-[14px] lg:leading-[16px] mt-[20px]
                sm:mt-[20px]
            ">
              {`It is a staffing service divided into packages. Each position will have 3 
              levels: Junior, Middle, and Senior. Each level will have a different description and price.`}
            </div>
            <div className="absolute bottom-[80px]">
              <BreadCrumbs links={links} />
            </div>
          </div>
        </div>
      </div>
      <div className="xm:pt-[24px] xm:pb-[80px] sm:pb-[80px] sm:pt-[80px] xl:px-10 2xl:px-[10%] sm:px-[32px] xm:px-[16px]">
        <div className="pb-[24px] sm:hidden xm:block">
          <BreadCrumbs links={links} />
        </div>
        <div className="flex flex-row items-center
              sm:hidden
              xm:block
        ">
          <div className="2xl:pb-[450px] 2xl:pt-[150px] 2xl:pl-[0px]
          ">
            <div className="font-montserratFontwight7 text-active
                xm:text-[24px] xm:leading-[29px]
            ">
              Offshore Development Center
            </div>
            <div className="mt-[25px] w-[100%] font-montserratRegular text-[12px] text-base leading-[14px] text-white">
              {`It is a staffing service divided into packages. Each position will have 3 
              levels: Junior, Middle, and Senior. Each level will have a different description and price.`}
            </div>
          </div>
        </div>


        <div className="xm:mt-[32px] sm:mt-[0px] text-center">
          <TillePage title={'OUR PACKAGE'} />
        </div>

        <div className="mt-4">
          <ul className="flex flex-wrap items-center xm:justify-start sm:justify-center pt-[15px] lg:pt-0">
            {listTag.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`mb-2 mr-2 rounded-lg border border-navy-2 px-4 py-2 font-montserrat text-[14px] font-semibold leading-[17px] text-BodyTextColor md:text-[18px] md:leading-[22px] 
              ${active === item.categoryId ? 'bg-active text-navy-4' : null}

            `}
                  onClick={() => {
                    handleClick(item.categoryId);
                  }}
                >
                  {item.categoryName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-12
              xm:grid-cols-1
              sm:grid-cols-1 
              md:grid-cols-2
              md:grid-rows-3 lg:grid-cols-2
              lg:grid-rows-3 xl:grid-cols-2
              xl:grid-rows-2 2xl:grid-cols-3
        ">
          {listOffshoreDev.map((item) => (
            item && <CardOffshore item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffshoreDevelopmentCenter;
