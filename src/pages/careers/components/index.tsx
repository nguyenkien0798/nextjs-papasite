import stylesCommon from '@/styles/Common.module.css';
import { animated, useSpring } from '@react-spring/web';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const CardCareers = React.memo(() => {
  const [show, setShown] = useState(false);
  const router = useRouter();

  const props3 = useSpring({
    zIndex: 10,
    borderRadius: '50%',
    transform: show ? 'scale(1.08)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
    paddingBottom: '30px',
  });

  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div
        className={`${stylesCommon.outerCircle} pt-30 h-full cursor-pointer px-[20px] py-[20px]`}
        onClick={() =>
          router.push(`/careers/1`, '', {
            scroll: false,
          })
        }
      >
        <div
          className={`relative flex items-center justify-between px-[18px] py-[20px] `}
        >
          <div>
            <div className="flex gap-6">
              <div className="mt-[4px]">
                <p className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                  Junior Devops
                </p>
              </div>
              <div className="group relative inline-flex h-8 items-center justify-start overflow-hidden rounded-xl border-2 border-red-500 px-6 py-3 font-medium transition-all">
                <span className="relative w-full text-left text-sm text-[#F8F8F8] transition-colors duration-200 ease-in-out ">
                  Urgent
                </span>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="mt-2">
                <p className="text-base font-normal leading-6 text-[#B7B7C4]">{`Working Address:`}</p>
              </div>
              <div className="mt-2">
                <p className="text-base font-normal leading-6 text-[#F8F8F8]">{`Văn phòng Papagroup tại Đà Nẵng, Tầng 6 toà nhà Quốc Bảo, Trường Thi 1, Phường Chính Gián, Quận Thanh Khê, Đà Nẵng.`}</p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="mt-2">
                <p className="text-base font-normal leading-6 text-[#B7B7C4]">{`Working type:`}</p>
              </div>
              <div className="mt-2">
                <p className="text-base font-normal leading-6 text-[#F8F8F8]">{`Full-time offline.`}</p>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="mt-2">
                <p className="text-base font-normal leading-6 text-[#B7B7C4]">{`Salary:`}</p>
              </div>
              <div className="mt-2">
                <p className="text-base font-normal leading-6 text-[#1DE9B6]">{`10,000,000 - 20,000,000 VNĐ`}</p>
              </div>
            </div>
          </div>
          <button className="group relative inline-flex h-[49px] w-32 items-center justify-start overflow-hidden rounded-xl bg-[#1de9b6] px-6 py-3 font-medium transition-all">
            <span className="relative w-full text-left text-sm text-[#0F103C] transition-colors duration-200 ease-in-out group-hover:text-[#0F103C]">
              Apply now
            </span>
          </button>
        </div>
      </div>
    </animated.div>
  );
});

CardCareers.displayName = 'CardCareers';

export default CardCareers;
