import React, { useState } from 'react';
import Image from 'next/image';
import BannerCloudServer from '/public/ourservices/banner-server.png';
import ShieldTick from '/public/ourservices/shield-tick.png';
import ContactSale from './DialogContactSale';

interface ListDataOffshore {
  id: number;
  title: string;
  cpu: string;
  ram: string;
  ssd: string;
  network: string;
  price: string;
}

const CardCloudServer = ({ item }: { item: ListDataOffshore }) => {
  const [openDialogContactSale, setOpenDialogContactSale] =
    useState<boolean>(false);

  const handleCloseDialogContactSale = () => {
    setOpenDialogContactSale(false);
  };

  return !item ? <></> : (
    <div className="rounded-[16px] bg-[linear-gradient(to_bottom,_#1DE9B6,_#124F5F_100%)]">
      <div className="m-[1.5px] rounded-[16px] bg-[#0F103C]">
        <div className="rounded-[16px] bg-[#0F103C] p-[20px]">
          <div className="relative h-[200px] w-[100%]">
            <Image
              className="rounded-[16px]"
              src={BannerCloudServer}
              layout="fill"
              alt=""
            />
          </div>
          <p className="mb-[18px] mt-[22px] text-center text-[18px] font-semibold">
            {item.title}
          </p>

          <div className="mb-[20px] mt-[20px]">
            <p className="text-[14px] font-medium text-active">Time</p>
            <fieldset>
              <div className="grid grid-cols-2 grid-rows-2">
                <div>
                  <input
                    className="cursor-pointer accent-active"
                    name="drone"
                    type="radio"
                    id="1"
                    value="1 month"
                  />
                  <label className="ml-[8px] text-[15px]" htmlFor="1">
                    1 month
                  </label>
                </div>
                <div>
                  <input
                    className="cursor-pointer accent-active"
                    name="drone"
                    type="radio"
                    id="6"
                    value="6 month"
                  />
                  <label className="ml-[8px] text-[15px]" htmlFor="6">
                    6 month
                  </label>
                </div>
                <div>
                  <input
                    className="cursor-pointer accent-active"
                    name="drone"
                    type="radio"
                    id="12"
                    value="12 month"
                  />
                  <label className="ml-[8px] text-[15px]" htmlFor="12">
                    12 month
                  </label>
                </div>
                <div>
                  <input
                    className="cursor-pointer accent-active"
                    name="drone"
                    type="radio"
                    id="other"
                    value="other"
                  />
                  <label className="ml-[8px] text-[15px]" htmlFor="other">
                    other
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="h-[1px] w-[100%] bg-[#167C79]" />

          <div className="mb-[20px] mt-[20px]">
            <p className="text-[14px] font-medium text-active">Benefit</p>

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
                  CPU:
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-medium leading-5">{item.cpu}</p>
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
                  RAM:
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-medium leading-5">{item.ram}</p>
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
                  SSD SAN:
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-medium leading-5">{item.ssd}</p>
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
                  Network/VM:
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-medium leading-5">
                  {item.network}
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[100%] bg-[#167C79]" />

          <div className="mb-[20px] mt-[20px]">
            <p className="mb-[12px] text-[14px] font-medium text-active">
              Price
            </p>
            <p className="mb-[20px] text-[14px]">{item.price}</p>
          </div>

          <div>
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

export default CardCloudServer;
