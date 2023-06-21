import React from 'react';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import TillePage from '@/components/common/TitlePage';
import BannerHealthTech from '/public/ourservices/banner-papahub.png';
import CardHealthTech from './components/Card';

function HealthTech() {
  const links = [
    {
      title: 'services',
      path: '/services',
    },
    {
      title: 'Health Tech Platform',
    },
  ];

  const listWebAppSystem = [
    {
      id: 1,
      title: 'PGO',
      content1: 'Many desktop publishing packages',
      content2: 'Web page editors now',
      content3: 'Their default model text and a search',
      content4: 'Many desktop publishing packages',
      content5: 'Web page editors now',
      content6: 'Smart gift management',
      content7: 'Role: Admin, Business, Staff, Customer',
    },
  ];

  return (
    <div>
      <div
        className="relative min-h-[200px]"
        style={{
          backgroundImage: `url(${BannerHealthTech.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-row items-center bg-[#07081E] opacity-95 xl:px-10 2xl:px-[10%]">
          <div className="pb-[250px] pt-[150px]">
            <div className="text-center font-montserratFontwight7 text-[64px] leading-[75px] text-active">
              Health Tech Platform
            </div>
            <div className="mx-auto mt-[36px] w-[70%] text-center font-montserratRegular text-base leading-6 tracking-[0.2em] text-white">
              {`It is a staffing service divided into packages. Each position will have 3 levels: Junior, Middle, and Senior. 
              Each level will have a different description and price.`}
            </div>
            <div className="absolute bottom-[80px]">
              <BreadCrumbs links={links} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[80px] xl:px-10 2xl:px-[10%]">
        <div className="text-center">
          <TillePage title={'About PGO'} />
        </div>

        <div className="mt-10 flex justify-center">
          {listWebAppSystem.map((item) => (
            item && <CardHealthTech item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthTech;
