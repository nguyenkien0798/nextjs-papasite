import React, { useState } from 'react';
import Image from 'next/image';
import BannerGamesConfig from '/public/ourservices/image-detail-gameconfig.png';
import ShieldTick from '/public/ourservices/shield-tick.png';
import ContactSale from './DialogContactSale';
import ErrorPage from 'next/error';
import DailogVideoMarketting from '@/components/common/DailogVideoMarketting';

interface ListDataAboutPapahub {
  id: number;
  title: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  content6: string;
  content7: string;
}

const CardGameConfig = ({ item }: { item: ListDataAboutPapahub }) => {
  const [openDialogContactSale, setOpenDialogContactSale] =
    useState<boolean>(false);

  const [openDialogHealthTechPlatform, setOpenDialogHealthTechPlatform] =
    useState<boolean>(false);

  const handleCloseDialogContactSale = () => {
    setOpenDialogContactSale(false);
  };

  const handleCloseDialogMarketting = () => {
    setOpenDialogHealthTechPlatform(false);
  };

  return !item ? (
    <></>
  ) : (
    <div className="w-[45%] rounded-[16px] bg-[linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)]">
      <div className="m-[1.5px] rounded-[16px] bg-[#0F103C]">
        <div className="rounded-[16px] bg-[#0F103C] p-[20px]">
          <div className="relative h-[300px] w-[100%]">
            <Image
              className="rounded-[16px]"
              src={BannerGamesConfig}
              layout="fill"
              alt=""
            />
          </div>
          <p className="mb-[18px] mt-[22px] text-center text-[24px] font-semibold text-active">
            {item.title}
          </p>

          <div className="px-[36px]">
            <div className="mb-[20px] mt-[20px]">
              <p className="text-[14px] font-medium text-active">Feature</p>

              <div className="relative mt-[12px] flex">
                <div className="absolute left-[-0.5%] top-[-43%]">
                  <Image
                    className=""
                    src={ShieldTick}
                    width={12}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="flex flex-[1] items-center">
                  <p className="ml-[20px] text-[14px] font-normal leading-5">
                    {item.content1}
                  </p>
                </div>
              </div>

              <div className="relative mt-[12px] flex">
                <div className="absolute left-[-0.5%] top-[-43%]">
                  <Image
                    className=""
                    src={ShieldTick}
                    width={12}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="flex flex-[1] items-center">
                  <p className="ml-[20px] text-[14px] font-normal leading-5">
                    {item.content2}
                  </p>
                </div>
              </div>

              <div className="relative mt-[12px] flex">
                <div className="absolute left-[-0.5%] top-[-43%]">
                  <Image
                    className=""
                    src={ShieldTick}
                    width={12}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="flex flex-[1] items-center">
                  <p className="ml-[20px] text-[14px] font-normal leading-5">
                    {item.content3}
                  </p>
                </div>
              </div>

              <div className="relative mt-[12px] flex">
                <div className="absolute left-[-0.5%] top-[-43%]">
                  <Image
                    className=""
                    src={ShieldTick}
                    width={12}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="flex flex-[1] items-center">
                  <p className="ml-[20px] text-[14px] font-normal leading-5">
                    {item.content4}
                  </p>
                </div>
              </div>

              <div className="relative mt-[12px] flex">
                <div className="absolute left-[-0.5%] top-[-43%]">
                  <Image
                    className=""
                    src={ShieldTick}
                    width={12}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="flex flex-[1] items-center">
                  <p className="ml-[20px] text-[14px] font-normal leading-5">
                    {item.content5}
                  </p>
                </div>
              </div>

              <div className="relative mt-[12px] flex">
                <div className="absolute left-[-0.5%] top-[-43%]">
                  <Image
                    className=""
                    src={ShieldTick}
                    width={12}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="flex flex-[1] items-center">
                  <p className="ml-[20px] text-[14px] font-normal leading-5">
                    {item.content6}
                  </p>
                </div>
              </div>

              <div className="relative mt-[12px] flex">
                <div className="absolute left-[-0.5%] top-[-43%]">
                  <Image
                    className=""
                    src={ShieldTick}
                    width={12}
                    height={13}
                    alt=""
                  />
                </div>
                <div className="flex flex-[1] items-center">
                  <p className="ml-[20px] text-[14px] font-normal leading-5">
                    {item.content7}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[32px] flex justify-between">
              <div className="rounded-[10px] border border-[#1DE9B6]">
                <button
                  className="px-[16px] py-[8px] text-[16px] font-medium text-active"
                  onClick={() => setOpenDialogHealthTechPlatform(true)}
                >
                  Video Demo
                </button>
              </div>

              <div className="rounded-[10px] border border-[#1DE9B6]">
                <button
                  className="px-[16px] py-[8px] text-[16px] font-medium text-active"
                  onClick={() => window.open('https://papahub.net/', '_blank')}
                >
                  Next Papahub
                </button>
              </div>

              <div className="">
                <button
                  className="w-[100%] rounded-[10px] bg-active px-[16px] py-[8px] text-[16px] font-medium text-navy-5"
                  onClick={() => setOpenDialogContactSale(true)}
                >
                  Contact Sale
                </button>
              </div>
            </div>
          </div>

          {openDialogContactSale && (
            <ContactSale
              open={openDialogContactSale}
              onClose={handleCloseDialogContactSale}
            />
          )}
          {openDialogHealthTechPlatform && (
            <DailogVideoMarketting
              open={openDialogHealthTechPlatform}
              onClose={handleCloseDialogMarketting}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardGameConfig;
