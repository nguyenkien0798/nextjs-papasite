import React, { useState } from 'react';
import Image from 'next/image';
import BannerWebApp from '/public/ourservices/banner-webapp.png';
import ShieldTick from '/public/ourservices/shield-tick.png';
import ContactSale from './DialogContactSale';
import DailogVideo from '@/components/common/DailogVideo';

interface ListDataOurPackageGame {
  id: number;
  title: string;
  permission1: string;
  permission2: string;
  permission3: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  technology1: string;
  technology2: string;
  technology3: string;
  time: string;
}

const CardWebAppSystem = ({ item }: { item: ListDataOurPackageGame }) => {
  const [openDialogContactSale, setOpenDialogContactSale] =
    useState<boolean>(false);

  const handleCloseDialogContactSale = () => {
    setOpenDialogContactSale(false);
  };
  const [openDialogBookProject, setOpenDialogBookProject] =
    useState<boolean>(false);

  const handleCloseDialogBookProject = () => {
    setOpenDialogBookProject(false);
  };
  return !item ? <></> : (
    <div className="rounded-[16px] bg-[linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)]">
      <div className="m-[1.5px] rounded-[16px] bg-[#0F103C]">
        <div className="rounded-[16px] bg-[#0F103C] p-[20px]">
          <div className="relative h-[200px] w-[100%]">
            <Image
              className="rounded-[16px]"
              src={BannerWebApp}
              layout="fill"
              alt=""
            />
          </div>
          <p className="mb-[18px] mt-[22px] text-center text-[18px] font-semibold">
            {item.title}
          </p>

          <div className="mb-[20px] mt-[20px]">
            <p className="text-[14px] font-medium text-active">Permission</p>

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
                  {item.permission1}
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
                  {item.permission2}
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
                  {item.permission3}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[100%] bg-[#167C79]" />

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
                  {item.feature1}
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
                  {item.feature2}
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
                  {item.feature3}
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
                  {item.feature4}
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

          <div className="h-[1px] w-[100%] bg-[#167C79]" />

          <div className="mb-[20px] mt-[20px]">
            <p className="text-[14px] font-medium text-active">Technology</p>

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
                  {item.technology1}
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
                  {item.technology2}
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
                  {item.technology3}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[10px] bg-[linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)]">
            <button
              className="m-[1px] w-[99.5%] rounded-[10px] bg-[#0F103C] py-[8px] text-[16px] font-medium text-active"
              onClick={() => {
                setOpenDialogBookProject(true);
              }}
            >
              Video Demo
            </button>
          </div>
          {openDialogBookProject && (
            <DailogVideo
              open={openDialogBookProject}
              onClose={handleCloseDialogBookProject}
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

export default CardWebAppSystem;
