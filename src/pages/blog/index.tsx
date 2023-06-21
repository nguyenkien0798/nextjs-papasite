import Card from '@/components/common/Card';
import { CardProps } from '@/types';
import React, { ChangeEvent, useState } from 'react';
import SlideImage from '@public/images/slide.png';
import BannerProject from 'public/images/services/bannerProject.png';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import TillePage from '@/components/common/TitlePage';
import styles from '@/styles/Blog.module.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ImageBlog from '@public/blog/imageBlog.png';
import TagrIcon from '@public/common/tag_new.svg';
import CalendarIcon from '@public/common/calendar_new.svg';
import LikeIcon from '@public/common/like_new.svg';
import ShareIcon from '@public/common/share_new.svg';
import Button from '@/components/common/Button';
import SearchIcon from '@public/common/search-icon-white.png';
import TagGreenIcon from '@public/common/tags-green.png';
import LineHorizontalGreen from '@public/common/lineHorizontalGreen.png';
import CardBlog from './components/CardBlog';

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

const Blog = () => {
  const [searchValue, setSearchValue] = useState('');
  const [active, setActive] = useState(0);

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
        <div className="flex flex-row items-center xl:px-10 2xl:px-[10%]">
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
      <div className="py-[80px] xl:px-10 2xl:px-[10%]">
        <div className="text-center">
          <TillePage title={'OUR BLOG'} />
        </div>
        <div className="mt-[60px] xl:grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-8 flex flex-col-reverse px-4 xl:flex-none xl:px-0 flex-none">
          <div className="col-span-2">
            <div
              className={`relative px-[18px] py-[20px] ${styles.gradientBorder}`}
            >
              <div className="relative md:h-[495px] rounded-3xl h-[171px]">textoverflow
                <Image
                  src={ImageBlog}
                  alt="Youtube Logo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="mt-[22px]">
                <p className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                  Website CHOTHUEXETHANHPHAT.VN
                </p>
              </div>
              <div className="mt-2">
                <p className={`${styles.textoverflow} text-base font-normal leading-6 text-[#F8F8F8]`}>{`This era is when the internet is being popularized to all subjects. For industries such as business, trading, consulting … The integration of internet into education is indispensable. It helps us a lot. That is why Future Skills was built. Future Skills – A web app system to support the interaction of school activities. A web app system to support the interaction...`}</p>
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
                  <span className={`ml-2 text-sm font-normal leading-[22px] text-[#F8F8F8] ${styles.text_mobile_Blog_11} ${styles.text_mobile_Blog_12}`}>
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
                  <span className={`ml-2 text-sm font-normal leading-[22px] text-[#1DE9B6] ${styles.text_mobile_Blog_11} ${styles.text_mobile_Blog_12}`}>
                    Share
                  </span>
                </div>
              </div>
            </div>
            <div className="md:mt-10 md:grid md:grid-cols-2 gap-8 flex-none mt-0">
              <CardBlog /> 
              <CardBlog /> 
              <CardBlog /> 
              <CardBlog /> 
            </div>
          </div>
          <div>
            <div>
              <div className="relative flex h-fit items-center overflow-hidden rounded-xl border-2 border-solid border-navy-2 bg-background bg-none md:w-[450px] xl:w-[430px] 2xl-[auto] h-[56px]">
                <input
                  type="text"
                  autoComplete="off"
                  placeholder={'Search'}
                  className="ounded-xl h-[56px] w-full max-w-[464px]  bg-background py-3 pl-3 pr-[76px] font-sansFrancisco text-[14px] text-navy-1
           placeholder:text-navy-1 focus:outline-none lg:h-[56px] lg:text-[18px]  lg:leading-[24px]"
                  onChange={handleSearchChange}
                  value={searchValue}
                />

                <Button
                  className={`btn -pt-2 absolute right-0 h-full max-w-[56px] border-0 lg:max-w-[56px] ${styles.btn} w-fit rounded-[10px] bg-[hsla(165,82%,51%,0.1)]`}
                  rightIcon={
                    <Image
                      src={SearchIcon}
                      width={24}
                      height={24}
                      alt="search"
                      className="hover:scale-125"
                    />
                  }
                  type="submit"
                />
              </div>
              <div className="mt-[41px]">
                <span className="flex text-xl font-semibold  font-montserrat leading-7 text-[#1DE9B6]">
                  <Image src={TagGreenIcon} alt="tags" />
                  {'Tags'}
                </span>

                <Image src={LineHorizontalGreen} alt="line" />
              </div>
              <div className="mt-4">
                <ul className="flex flex-wrap items-center pt-[15px] lg:pt-0">
                  {listTag.map((item, idx) => (
                    <li key={idx}>
                      <button
                        className={`mb-2 mr-2 rounded-lg border border-navy-2 px-4 py-2 font-montserrat text-[16px] font-semibold leading-[17px] text-BodyTextColor md:text-[16px] md:leading-[22px] 
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
