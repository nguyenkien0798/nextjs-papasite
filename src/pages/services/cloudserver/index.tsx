import React from 'react';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import TillePage from '@/components/common/TitlePage';
import BannerCloudServer from '/public/ourservices/banner-server.png';
import CardCloudServer from './components/Card';

function CloudServer() {
  const links = [
    {
      title: 'services',
      path: '/services',
    },
    {
      title: 'Cloud server',
    },
  ];

  const listOffshoreDev = [
    {
      id: 1,
      title: 'CLOUD SERVER BASIC',
      cpu: '1 Hz',
      ram: '2 GB',
      ssd: '10 GB',
      network: '300 Mbps',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 2,
      title: 'CLOUD SERVER STANDAR',
      cpu: '2 Hz',
      ram: '4 GB',
      ssd: '30 GB',
      network: '300 Mbps',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 3,
      title: 'CLOUD SERVER PROFESSIONAL',
      cpu: '3 Hz',
      ram: '6 GB',
      ssd: '50 GB',
      network: '300 Mbps',
      price: '20.000.000 - 25.000.000 VND',
    },
    {
      id: 4,
      title: 'CLOUD SERVER VIP ',
      cpu: '4 Hz',
      ram: '8 GB',
      ssd: '100 GB',
      network: '300 Mbps',
      price: '20.000.000 - 25.000.000 VND',
    },
  ];

  return (
    <div>
      <div
        className="relative min-h-[200px]"
        style={{
          backgroundImage: `url(${BannerCloudServer.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-row items-center sm:px-10 xl:px-[120px] lg:px-[90px] 2xl:px-[10%] sm:block xm:hidden">
          <div className="2xl:pb-[420px] 2xl:pt-[180px]
              xl:pb-[300px] xl:pt-[150px]
              lg:pb-[250px] lg:pt-[150px]
              md:pb-[200px] md:pt-[100px]
              sm:pb-[150px] sm:pt-[100px]
          ">
            <div className="font-montserratFontwight7 text-active
              2xl:text-[64px] 2xl:leading-[80px]
              xl:text-[32px] xl:leading-[39px]
              lg:text-[32px] lg:leading-[39px]
              md:text-[24px] md:leading-[29px]
              sm:text-[24px] sm:leading-[29px]
            ">
              Cloud Server
            </div>
            <div className="w-[80%] font-montserratRegular text-base text-white
                2xl:text-[18px] 2xl:leading-[24px] 2xl:mt-[36px]
                xl:text-[14px] xl:leading-[16px] mt-[17px]
                lg:text-[14px] lg:leading-[16px] mt-[20px]
                sm:mt-[20px]
            ">
              {`It is a staffing service divided into packages. Each position will have 3 levels`}
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
        <div className="flex flex-row items-center xl:px-10 2xl:px-[10%]">
          
          <div className="sm:hidden xm:block">
            <div className="font-montserratFontwight7 text-active text-[24px] leading-[29px]">
              Cloud Server
            </div>
            <div className="mt-[25px] w-[100%] font-montserratRegular text-[12px] text-base leading-[14px] text-white">
              {`It is a staffing service divided into packages. Each position will have 3 levels`}
            </div>
          </div>
        </div>

        <div className="xm:mt-[32px] sm:mt-[0px] text-center">
          <TillePage title={'OUR PACKAGE'} />
        </div>

        <div className="mt-10 grid grid-flow-row grid-cols-4 gap-12
                xm:grid-cols-1
                sm:grid-cols-1 
                md:grid-cols-2
                md:grid-rows-3 lg:grid-cols-2
                lg:grid-rows-3 xl:grid-cols-2
                xl:grid-rows-2 2xl:grid-cols-3
        ">
          {listOffshoreDev.map((item) => (
            item && <CardCloudServer item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CloudServer;
