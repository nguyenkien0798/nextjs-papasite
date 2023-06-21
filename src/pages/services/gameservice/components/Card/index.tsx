import React, { useState } from 'react';
import Image from 'next/image';
import BannerGames from '/public/ourservices/banner-games.png';
import ShieldTick from '/public/ourservices/shield-tick.png';
import ContactSale from './DialogContactSale';
import DailogVideo from '@/components/common/DailogVideo';

interface ListDataOurPackageGame {
  id: number;
  title: string;
  project1: string;
  project2: string;
  project3: string;
  project4: string;
  project5: string;
  graphic: string;
  time: string;
}

const CardGameService = ({ item }: { item: ListDataOurPackageGame }) => {
  const [openDialogContactSale, setOpenDialogContactSale] =
    useState<boolean>(false);

  const handleCloseDialogContactSale = () => {
    setOpenDialogContactSale(false);
  };

  const [openDialogOpenVideoGame, setOpenDialogOpenVideoGame] =
    useState<boolean>(false);

  const handleCloseDialogVideoGame = () => {
    setOpenDialogOpenVideoGame(false);
  };
  return !item ? (
    <></>
  ) : (
    <div className="rounded-[16px] bg-[linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)]">
      <div className="m-[1.5px] rounded-[16px] bg-[#0F103C]">
        <div className="rounded-[16px] bg-[#0F103C] p-[20px]">
          <div className="relative h-[200px] w-[100%]">
            <Image
              className="rounded-[16px]"
              src={BannerGames}
              layout="fill"
              alt=""
            />
          </div>
          <p className="mb-[18px] mt-[22px] text-center text-[18px] font-semibold">
            {item.title}
          </p>

          <div className="mb-[20px] mt-[20px]">
            <p className="text-[14px] font-medium text-active">
              Project includes
            </p>

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
                  {item.project1}
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
                  {item.project2}
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
                  {item.project3}
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
                  {item.project4}
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
                  {item.project5}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[100%] bg-[#167C79]" />

          <div className="mb-[20px] mt-[20px]">
            <p className="text-[14px] font-medium text-active">Graphic</p>

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
                  {item.graphic}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[100%] bg-[#167C79]" />

          <div className="mb-[20px] mt-[20px]">
            <p className="mb-[12px] text-[14px] font-medium text-active">
              Time
            </p>
            <p className="mb-[20px] text-[14px]">{item.time}</p>
          </div>

          <div className="p-[1px] rounded-[10px] bg-[linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)]">
            <div className="rounded-[10px] bg-[#0F103C]">
              <button
                className="w-[99.5%] rounded-[10px] bg-[#0F103C] py-[8px] text-[16px] font-medium text-active"
                onClick={() => {
                  setOpenDialogOpenVideoGame(true);
                }}
              >
                Video Demo
              </button>
            </div>
          </div>
          {openDialogOpenVideoGame && (
            <DailogVideo
              open={openDialogOpenVideoGame}
              onClose={handleCloseDialogVideoGame}
            />
          )}

          <div className="mt-[24px]">
            <button
              className="w-[100%] rounded-[10px] bg-active py-[8px] text-[16px] font-medium text-navy-5"
              onClick={() => setOpenDialogContactSale(true)}
            >
              Contact Sale
            </button>
          </div>

          {openDialogContactSale && (
            <ContactSale
              open={openDialogContactSale}
              onClose={handleCloseDialogContactSale}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardGameService;
