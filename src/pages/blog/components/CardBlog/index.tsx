import Image from 'next/image';
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import stylesCommon from '@/styles/Common.module.css';
import TagrIcon from '@public/common/tag_new.svg';
import CalendarIcon from '@public/common/calendar_new.svg';
import LikeIcon from '@public/common/like_new.svg';
import ShareIcon from '@public/common/share_new.svg';
import ImageBlog from '@public/blog/imageBlog.png';
import { useRouter } from 'next/router';
import styles from '@/styles/Blog.module.css';
const CardBlog = React.memo(() => {
  const [show, setShown] = useState(false);
  const router = useRouter();

  const props3 = useSpring({
    zIndex: 10,
    paddingTop:16,
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
    >
      <div
        className={`${stylesCommon.outerCircle} h-full cursor-pointer px-[20px] py-[20px] pt-6  rounded-3xl`}
        onClick={() =>
          router.push(`/blog/1`, '', {
            scroll: false,
          })
        }
      >
        <Image src={ImageBlog} />
        <div className="mt-[22px]">
          <p className="text-lg font-semibold leading-6 text-[#1DE9B6]">
            Website CHOTHUEXETHANHPHAT.VN
          </p>
        </div>
        <div className="mt-2">
          <p className={`${styles.textoverflow} text-base font-normal leading-6 text-[#F8F8F8]`}>{`This era is when the internet is being popularized to all subjects. For industries such as business, trading, consulting … The integration of internet into education is indispensable. It helps us a lot. That is why Future Skills was built.`}</p>
        </div>
        <div className="relative mt-4 flex flex-row justify-between">
          <div className="flex">
            <Image
              src={TagrIcon}
              alt="tag Logo"
              objectFit="cover"
              width="22"
              height="22"
            />
            <span className={`ml-2 text-sm font-normal leading-[22px] text-[#F8F8F8]  ${styles.text_mobile_Blog_11} ${styles.text_mobile_Blog_12}`}>
              Project
            </span>
          </div>
          <div className="flex">
            <Image
              src={CalendarIcon}
              alt="calendar Logo"
              objectFit="cover"
              width="22"
              height="22"
            />
            <span className={`ml-2 text-sm font-normal leading-[22px] text-[#F8F8F8] ${styles.text_mobile_Blog_11} ${styles.text_mobile_Blog_12}`}>
              Dec 1, 2021
            </span>
          </div>
          <div className="flex">
            <Image
              src={LikeIcon}
              alt="like Logo"
              objectFit="cover"
              width="24"
              height="24"
            />
            <span className={`ml-2 text-sm font-normal leading-[22px] text-[#F8F8F8] ${styles.text_mobile_Blog_11} ${styles.text_mobile_Blog_12}`}>
              199
            </span>
          </div>
          <div className="flex">
            <Image
              src={ShareIcon}
              alt="share Logo"
              objectFit="cover"
              width="24"
              height="24"
            />
            <span className={`ml-2 text-sm font-normal leading-[22px] text-[#F8F8F8] ${styles.text_mobile_Blog_11} ${styles.text_mobile_Blog_12}`}>
              Share
            </span>
          </div>
        </div>
      </div>
    </animated.div>
  );
});

CardBlog.displayName = 'CardBlog';

export default CardBlog;
