import Image from 'next/image';
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import stylesCommon from '@/styles/Common.module.css';
import { useRouter } from 'next/router';
import CalendarIcon from '@public/common/calendar.png';
import LikeIcon from '@public/common/like.png';
interface FollowerProps {
  login: string;
  avatar_url: string;
  html_url: string;
}

const   Follower = (follower: FollowerProps) => {
  const { login, avatar_url, html_url } = follower;
  const [show, setShown] = useState(false);
  const router = useRouter();

  const props3 = useSpring({
    zIndex: 10,
    borderRadius: '50%',
    transform: show ? 'scale(1.08)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  });

  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={() => {
        router.push(`/bookProject/${''}`, '', {
          scroll: false,
        });
      }}
    >
      <div
        className={`${stylesCommon.outerCircle} h-full cursor-pointer rounded-3xl px-[20px] py-[20px]`}
      >
        <img src={avatar_url} alt={login} className="rounded-3xl" />
        <div className="mt-[20px] text-lg font-semibold leading-6 text-white">
          Zodi Boom 3D
        </div>
        <div className="my-2 text-lg font-normal leading-6 tracking-widest text-[#1DE9B6] font-montserrat">
          <span className="">Client: KBG Studio</span>
          <span className="mx-2 border border-solid border-[#1DE9B6]"></span>
          <span className="">Category: Game Development</span>
        </div>
        <div className="text-base font-normal leading-[22px] text-[#F8F8F8] ">
          <p>
            Recording incoming and outgoing calls has never been easier! Record
            any call in a few taps and access chats anytime, anywhere!
          </p>
        </div>
        <div className="flex pt-2.5">
          <div className="flex">
            <Image
              src={LikeIcon}
              alt="like Logo"
              objectFit="cover"
              width="24"
              height="24"
            />
            <span className="ml-2 lg:text-sm text-xs font-normal leading-[22px] text-[#F8F8F8]">
              199
            </span>
          </div>
          <div className="flex  pl-9">
            <Image
              src={CalendarIcon}
              alt="calendar Logo"
              objectFit="cover"
              width="22"
              height="22"
            />
            <span className="ml-2 lg:text-sm 2xl:text-sm text-xs font-normal leading-[22px] text-[#F8F8F8]">
              Dec 1, 2021
            </span>
          </div>
        </div>
      </div>
    </animated.div>

    // <article className="card">
    //   <img src={avatar_url} alt={login} />
    //   <h4>{login}</h4>
    //   <a href={html_url} className="btn">
    //     View Profile
    //   </a>
    // </article>
  );
};

export default Follower;
