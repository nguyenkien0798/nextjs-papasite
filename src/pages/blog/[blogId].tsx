import BreadCrumbs from '@/components/common/BreadCrumbs';
import Card from '@/components/common/Card';
import { CardProps } from '@/types';
import dynamic from 'next/dynamic';
import BannerProject from 'public/images/services/bannerProject.png';
import SlideImage from '@public/images/slide.png';
import StarFlying from 'public/images/starFlying.png';
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import IconSecurity from 'public/blog/iconSecurity.png';
import IconPeople from 'public/blog/people.png';
import IconCalendar from 'public/blog/calendar.png';
import IconCategory from 'public/blog/category.png';
import HorizotalLine from 'public/blog/horizotalLine.png';
import BackgroundSecurity from 'public/blog/backgroundSecurity.png';
import likeIcon from 'public/blog/like.png';
import Icon from 'public/blog/icon.png';
import FacebookIcon from 'public/blog/facebook.png';
import InstagramIcon from 'public/blog/instagram.png';
import LinkIcon from 'public/blog/link.png';
import Search from '@/components/common/Search';
import TagGreenIcon from '@public/common/tags-green.png';
import styles from '@/styles/Blog.module.css';
import LineHorizontalGreen from '@public/common/lineHorizontalGreen.png';
const Carroussel = dynamic(() => import('@/components/common/Carousel'), {
  ssr: false,
});

const listTag = [
  {
    categoryName: 'All',
    categoryId: 1,
  },
  {
    categoryName: 'Game design',
    categoryId: 2,
  },
  {
    categoryName: 'UX/UI design',
    categoryId: 3,
  },
  {
    categoryName: 'Fullstack developer',
    categoryId: 4,
  },
  {
    categoryName: 'Backend developer',
    categoryId: 5,
  },
  {
    categoryName: 'Frontend developer',
    categoryId: 6,
  },
  {
    categoryName: 'Tester',
    categoryId: 7,
  },
  {
    categoryName: 'AI Engineer',
    categoryId: 8,
  },
];

const DetailBlog = () => {
  const links = [
    {
      title: 'blog',
    },
  ];
  const cards: CardProps[] = [
    {
      key: 1,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 2,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 3,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 4,
      content: <Card imagen={SlideImage} />,
    },
    {
      key: 5,
      content: <Card imagen={SlideImage} />,
    },
  ];
  const [searchValue, setSearchValue] = useState<string>('');
  const [active, setActive] = useState<number>(0);
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);
  };

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <div className="">
      <div
        className="relative min-h-[200px]"
        style={{
          backgroundImage: `url(${BannerProject.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="relative min-h-[200px]"
          style={{
            backgroundImage: `url(${StarFlying.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="container flex flex-row items-center">
            <div className="max-w-[600px] py-[300px]">
              <div className="font-montserratFontwight7 text-[64px] leading-[75px] text-[#1DE9B6]">
                Blog
              </div>
              <div className="mt-[36px] font-montserratRegular text-base leading-6 tracking-[0.2em] text-white">
                {`It is a staffing service divided into packages. Each position will have 3 levels: Junior, Middle, and Senior. Each level will have a different description and price.`}
              </div>
              <div className="absolute bottom-[80px]">
                <BreadCrumbs links={links} />
              </div>
            </div>
            <div className="w-full">
              <Carroussel
                cards={cards}
                height="500px"
                width="500px"
                margin="0 auto"
                offset={2}
                showArrows={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container relative ">
        <div className={`mt-[46px] flex ${styles.blogDeail_DisplayNone} `}>
          <div className="relative w-[64px]">
            <Image
              src={IconSecurity}
              alt="Security Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* hien thi tren PC - tablet */}
          <div className={`relative ml-4 w-full `}>
            <p className="${styles.blog_Detail_Title_Tablet} flex items-center font-montserrat text-[32px] font-bold leading-[39px] tracking-wider text-[#1DE9B6]">
              990 Security – Security warning system
            </p>
            <div className="mt-2 flex justify-between">
              <div className="flex flex-row items-center text-sm font-normal leading-6 tracking-widest text-[#F8F8F8]">
                <span className="relative h-[24px] w-[24px]">
                  <Image
                    src={IconPeople}
                    alt="Security Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="ml-2">990 Security</span>
                <span className="mx-2 h-[20px] border border-solid border-[#FFFFFF]"></span>
                <span className="relative h-[24px] w-[24px]">
                  <Image
                    src={IconCalendar}
                    alt="Calendar Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="ml-2">Dec 1, 2021</span>
                <span className="mx-2 h-[20px] border border-solid border-[#FFFFFF]"></span>
                <span className="relative h-[24px] w-[24px]">
                  <Image
                    src={IconCategory}
                    alt="Category Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="ml-2">Mobile System Development</span>
              </div>
              <div className="flex items-center">
                <span className="relative h-[24px] w-[24px]">
                  <Image
                    src={likeIcon}
                    alt="Calendar Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="ml-2 text-center text-base font-medium leading-6 text-[#1DE9B6]">
                  199
                </span>
                <span className="relative ml-6 h-[50px] w-[50px]">
                  <Image
                    src={FacebookIcon}
                    alt="facebook Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="relative ml-2 h-[50px] w-[50px]">
                  <Image
                    src={InstagramIcon}
                    alt="Instagram Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="relative ml-2 h-[50px] w-[50px]">
                  <Image
                    src={Icon}
                    alt="Calendar Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="relative ml-2 h-[50px] w-[50px]">
                  <Image
                    src={LinkIcon}
                    alt="Calendar Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* ......... */}
        </div>
        <div
          className={`gap-12 py-[60px] lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:grid-rows-1  ${styles.blogDeail_flex}`}
        >
          <div className={`col-span-2 ${styles.blogDeail_DisplayNone}`}>
            <div className="relative my-[30px] h-8">
              <Image
                src={HorizotalLine}
                alt="Line Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className=""></div>
          {/* hien thi tren mobile */}
          <div className={`mt-6 flex ${styles.blogDeail_DisplayNonePc}`}>
            <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
            <div className="ml-4">
              <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                990 Security – Security warning system
              </div>
              <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                May 21, 2021
              </div>
            </div>
          </div>
          <div className={`mt-[41px] ${styles.blogDeail_DisplayNonePc}`}>
            <span className="flex text-xl font-semibold leading-7 text-[#1DE9B6]">
              <Image src={TagGreenIcon} alt="tags" />
              <span className="ml-2">{'Bài viết liên quan'}</span>
            </span>

            <Image src={LineHorizontalGreen} alt="line" />
          </div>
          <div
            className={`flex items-center ${styles.blogDeail_DisplayNonePc}`}
          >
            <span className="relative h-[24px] w-[24px]">
              <Image
                src={likeIcon}
                alt="Calendar Icon"
                layout="fill"
                objectFit="contain"
              />
            </span>
            <span className="ml-2 text-center text-base font-medium leading-6 text-[#1DE9B6]">
              199
            </span>
            <span className="relative ml-6 h-[50px] w-[50px]">
              <Image
                src={FacebookIcon}
                alt="facebook Icon"
                layout="fill"
                objectFit="contain"
              />
            </span>
            <span className="relative ml-2 h-[50px] w-[50px]">
              <Image
                src={InstagramIcon}
                alt="Instagram Icon"
                layout="fill"
                objectFit="contain"
              />
            </span>
            <span className="relative ml-2 h-[50px] w-[50px]">
              <Image
                src={Icon}
                alt="Calendar Icon"
                layout="fill"
                objectFit="contain"
              />
            </span>
            <span className="relative ml-2 h-[50px] w-[50px]">
              <Image
                src={LinkIcon}
                alt="Calendar Icon"
                layout="fill"
                objectFit="contain"
              />
            </span>
          </div>
          {/* .......... */}

          <div className="col-span-2">
            <div className="text-lg font-normal leading-7 text-[rgba(255,255,255,0.95)]">
              <p>
                990 Security is a system that guarantees safety and warnings in
                case of SOS. With just one press of the button, it will
                simultaneously send SOS alerts to registered security units.
                Security units will dispatch forces, update their status and
                capture the address when there is SOS. You will get accurate and
                fastest help / rescue.
              </p>
              <p className="mt-5">
                When using the 990 Security system, you and those around you
                will be fully protected by the system – intelligent security
                equipment.
              </p>
              <p className="mt-5">
                We use IoT (Internet of things) technology that allows devices
                in the system to communicate with each other without the need
                for human participation and unify the digital and physical
                worlds. They are connected and shared data by various methods,
                namely LTE, Ethernet, Wifi and Zigbee.
              </p>
            </div>
            <div className="relative mt-[60px] md:h-[456px] h-[166px]">
              <Image
                src={BackgroundSecurity}
                alt="background"
                layout="fill"
                objectFit="contain"
                className="rounded-3xl"
              />
            </div>
            <div className="mt-[60px] text-lg font-normal leading-7 text-[rgba(255,255,255,0.95)]">
              <p>{`Ứng dụng Security 990 là một ứng dụng thông minh của hệ thống báo động chuyên dùng cho gia đình, khách sạn, văn phòng, cửa hàng, tòa nhà .... Khi có sự cố như cướp, cháy xảy ra … thì tại ứng dụng, người dùng sẽ nhận được thông báo khi có người nhấn Nút bấm (nút báo SOS). Chỉ cần kết nối thiết bị với ứng dụng thì bạn có thể theo dõi thiết bị của mình ở mọi nơi.
`}</p>
            </div>
            <div className="mt-[60px] text-2xl font-semibold leading-7 tracking-[0.03em] text-[#1DE9B6]">
              <p>HỆ THỐNG BAO GỒM</p>
            </div>
            <div className="mt-[32px] text-lg font-normal leading-[21px] tracking-[0.03em] text-[#1DE9B6]">
              <p>Ứng dụng Security 990</p>
            </div>
            <div className="mt-[24px] text-lg font-normal leading-7 text-[rgba(255,255,255,0.95)]">
              <p>
                NGE-GW01 là thiết bị trung tâm thông minh. Sử dụng kết nối GSM
                và Zigbee để thu thập dữ liệu cảm biến và liên kết với ứng dụng
                di động để xây dựng một hệ thống kiểm soát báo động thông minh
                cho ngôi nhà, văn phòng, tòa nhà hoặc doanh nghiệp của bạn …
                NGE-SOS01 là nút bấm khẩn cấp, được sử dụng để báo động trong
                trường hợp khẩn cấp.
              </p>
            </div>
          </div>

          <div className="">
            <div className={`h-[56px] md:w-[auto] xl:w-[430px] ${styles.Search}`}>
              <Search
                searchValue={searchValue}
                handleSearchChange={handleSearchChange}
              />
            </div>
            <div className="mt-[41px]">
              <span className="mb-2 flex text-xl font-semibold leading-7 text-[#1DE9B6]">
                <Image src={TagGreenIcon} alt="tags" />
                <span className="ml-2">{'Tags'}</span>
              </span>
              <Image src={LineHorizontalGreen} alt="line" />
            </div>
            <div className="mt-4">
              <ul className="flex flex-wrap items-center pt-[15px] lg:pt-0">
                {listTag.map((item, idx) => (
                  <li key={idx}>
                    <button
                      className={`mb-2 mr-2 rounded-lg border border-navy-2 px-4 py-2 font-montserrat text-[14px] font-semibold leading-[17px] text-BodyTextColor md:text-[16px] md:leading-[22px] 
                    ${
                      active === item.categoryId
                        ? 'bg-active text-navy-4'
                        : null
                    }

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
            <div className={`mt-[41px] ${styles.blogDeail_DisplayNone}`}>
              <span className="flex text-xl font-semibold leading-7 text-[#1DE9B6]">
                <Image src={TagGreenIcon} alt="tags" />
                <span className="ml-2">{'Bài viết liên quan'}</span>
              </span>

              <Image src={LineHorizontalGreen} alt="line" />
            </div>
            <div className={`mt-6 flex ${styles.blogDeail_DisplayNone}`}>
              <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
              <div className="ml-4">
                <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                  990 Security – Security warning system
                </div>
                <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                  May 21, 2021
                </div>
              </div>
            </div>
            <div
              className={`mt-[46px] flex ${styles.blogDeail_DisplayNonePc} `}
            >
              <div className="relative w-[64px]">
                <Image
                  src={IconSecurity}
                  alt="Security Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* hien thi tren mobile */}
              <div className={`relative ml-4 w-full  `}>
                <p
                  className={`flex items-center font-montserrat text-[32px] font-bold leading-[39px] tracking-wider text-[#1DE9B6] ${styles.blog_Detail_Title_Tablet} ${styles.blog_Detail_Title_mobile} ${styles.textoverflowDetailBlog}`}
                >
                  9901 Security – Security warning system
                </p>
                <div className={`mt-2  justify-between ${styles.blogDeail_DisplayNoneMobileDetailBlog}`}>
                  <div className="flex flex-row text-sm font-normal leading-6 tracking-widest text-[#F8F8F8]">
                    <span className="relative h-[24px] w-[24px]">
                      <Image
                        src={IconPeople}
                        alt="Security Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </span>
                    <span className="ml-2">990 Security</span>
                    <span className="mx-2 h-[20px] border border-solid border-[#FFFFFF]"></span>
                    <span className="relative h-[24px] w-[24px]">
                      <Image
                        src={IconCalendar}
                        alt="Calendar Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </span>
                    <span className="ml-2">Dec 1, 2021</span>
                    <span className="mx-2 h-[20px] border border-solid border-[#FFFFFF]"></span>
                    <span className="relative h-[24px] w-[24px]">
                      <Image
                        src={IconCategory}
                        alt="Category Icon"
                        layout="fill"
                        objectFit="contain"
                      />
                    </span>
                    <span className="ml-2">Mobile System Development</span>
                  </div>
                </div>
              </div>
              {/* .......... */}
            </div>
            <div className={`mt-2  justify-between ${styles.blogDeail_DisplayNoneTablet}`}>
              <div className="gap-2.5 flex flex-col text-sm font-normal leading-6 tracking-widest text-[#F8F8F8]">
                <div className="flex">
                  <span className="relative h-[24px] w-[24px]">
                    <Image
                      src={IconPeople}
                      alt="Security Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </span>
                  <span className="ml-2">990 Security</span>
                </div>
                <div className="flex">
                  <span className="relative h-[24px] w-[24px]">
                    <Image
                      src={IconCalendar}
                      alt="Calendar Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </span>
                  <span className="ml-2">Dec 1, 2021</span>
                </div>
                <div className="flex">
                  <span className="relative h-[24px] w-[24px]">
                    <Image
                      src={IconCategory}
                      alt="Category Icon"
                      layout="fill"
                      objectFit="contain"
                    />
                  </span>
                  <span className="ml-2">Mobile System Development</span>
                </div>
              </div>
            </div>
            <div className={`col-span-2 ${styles.blogDeail_DisplayNonePc}`}>
              <div className="relative my-[30px] h-8">
                <Image
                  src={HorizotalLine}
                  alt="Line Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
