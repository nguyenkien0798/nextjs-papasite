import BreadCrumbs from '@/components/common/BreadCrumbs';
import Card from '@/components/common/Card';
import Search from '@/components/common/Search';
import { fetchRecruitmentDetail } from '@/store/slices/team/teamThunk';
import { useAppDispatch } from '@/store/store';
import { CardProps } from '@/types';
import LineHorizontalGreen from '@public/common/lineHorizontalGreen.png';
import TagGreenIcon from '@public/common/tags-green.png';
import SlideImage from '@public/images/slide.png';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import IconCalendar from 'public/blog/calendar.png';
import IconCategory from 'public/blog/category.png';
import FacebookIcon from 'public/blog/facebook.png';
import Icon from 'public/blog/icon.png';
import InstagramIcon from 'public/blog/instagram.png';
import LinkIcon from 'public/blog/link.png';
import BannerProject from 'public/images/services/bannerProject.png';
import StarFlying from 'public/images/starFlying.png';
import React, { ChangeEvent, useState } from 'react';
import useSWR from 'swr';
import styles from '@/styles/Blog.module.css';

interface careersDetails {
  title: string;
  address: string;
  benefit: string;
  type: string;
  salary: string;
  updated_at: string;
  tag: string;
  request: string;
  description: string;
}

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
      title: 'Project',
    },
  ];

  const dispatch = useAppDispatch();
  const router = useRouter();
  const titleType = router.asPath.replace('/careers/', '');

  const [careersDetails, setCareersDetail] = useState<careersDetails>();

  const { data } = useSWR('/members', {
    revalidateOnFocus: false,
  });

  React.useEffect(() => {
    dispatch(fetchRecruitmentDetail({ id: titleType }))
      .unwrap()
      .then((response) => {
        setCareersDetail(response.data);
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }, [dispatch]);

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
                Careers
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
      <div className="container relative">
        <div className="flex lg:mt-[46px] ">
          <div className="relative ml-4 w-full">
            <div className={`flex gap-8 ${styles.blogDeail_DisplayNone}`}>
              <p className=" flex items-center font-montserrat text-[32px] font-bold leading-[39px] tracking-wider text-[#1DE9B6]">
                {careersDetails ? careersDetails?.title : ''}
              </p>
              <div className="group relative inline-flex h-8 h-[45px] items-center justify-start overflow-hidden rounded-xl border-2 border-emerald-500  px-6 py-3 font-medium transition-all">
                <span className=" relative w-full text-left font-montserrat text-base font-semibold text-[#F8F8F8] transition-colors duration-200 ease-in-out ">
                  Hiring
                </span>
              </div>
            </div>
            <div className="mt-2 flex justify-between">
              <div
                className={`flex flex-row items-center text-sm font-normal leading-6 tracking-widest text-[#F8F8F8] ${styles.blogDeail_DisplayNone}`}
              >
                <span className="relative h-[24px] w-[24px]">
                  <Image
                    src={IconCalendar}
                    alt="Calendar Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="ml-2 font-montserrat">
                  {careersDetails ? careersDetails?.updated_at : ''}
                </span>
                <span className="mx-2 h-[20px] border border-solid border-[#FFFFFF]"></span>
                <span className="relative h-[24px] w-[24px]">
                  <Image
                    src={IconCategory}
                    alt="Category Icon"
                    layout="fill"
                    objectFit="contain"
                  />
                </span>
                <span className="ml-2 font-montserrat">Devops</span>
              </div>
              <div
                className={`flex items-center ${styles.blogDeail_DisplayNone}`}
              >
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
        </div>
        <div className="flex grid-cols-3 grid-rows-1 flex-col-reverse gap-12 py-[60px] lg:grid lg:grid-flow-row-dense">
          <div className="col-span-2"></div>
          <div className=""></div>

          <div className={` flex ${styles.blogDeail_DisplayNonePc}`}>
            <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
            <div className="ml-4">
              <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                Junior Devops
              </div>
              <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                May 21, 2021
              </div>
            </div>
          </div>
          <div className={` flex ${styles.blogDeail_DisplayNonePc}`}>
            <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
            <div className="ml-4">
              <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                Junior Devops
              </div>
              <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                May 21, 2021
              </div>
            </div>
          </div>
          <div className={` flex ${styles.blogDeail_DisplayNonePc}`}>
            <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
            <div className="ml-4">
              <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                Junior Devops
              </div>
              <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                May 21, 2021
              </div>
            </div>
          </div>
          <div className={`mt-[41px] ${styles.blogDeail_DisplayNonePc}`}>
            <span className="flex text-xl font-semibold leading-7 text-[#1DE9B6]">
              <Image src={TagGreenIcon} alt="tags" />
              <span className="ml-2">{'Job liên quan'}</span>
            </span>

            <Image src={LineHorizontalGreen} alt="line" />
          </div>

          <div className={`col-span-2 ${styles.blogDeail_DisplayNonePc}`}>
            <div className="mt-[32px] text-2xl font-bold leading-[21px] tracking-[0.03em] text-[#1DE9B6]">
              <p>Apply this position:</p>
            </div>
            <div className="mt-[24px] text-lg font-normal leading-7 text-[rgba(255,255,255,0.95)]">
              <p>
                No need to be formal. Just send us your links and we’ll be in
                touch.
              </p>
            </div>
            {/* ..................... */}

            <form>
              <div className="mb-6 grid gap-6 pt-8 md:grid-cols-2">
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Full name
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>
                  <input
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm text-violet-500 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your full name"
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Email address
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>
                  <input
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Phone number
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>

                  <input
                    type="text"
                    id="company"
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Portfolio
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter link of your facebook, linkedln, website,..."
                    pattern="Enter link of your facebook, linkedln, website,..."
                    required
                  ></input>
                </div>
              </div>
              <div className="pb-5">
                <div className="flex gap-1.5 ">
                  <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                    Upload your CV
                  </label>
                  <label className="text-[#1DE9B6]">*</label>
                </div>
                <input
                  className="text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full cursor-pointer rounded-lg border border-2 border-indigo-400 bg-transparent text-lg focus:outline-none"
                  id="large_size"
                  type="file"
                ></input>
                <div className=" text-sm font-normal leading-7 text-[#1DE9B6]">
                  <p>
                    (*.doc, *.docx, *.pdf, *.jpg, *.xls, *.xml, *.ppt, *.pptx -
                    Less than 10MB)
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#1DE9B6] px-5 py-2.5 text-center text-sm font-bold leading-6 text-[#151547] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                Send my application
              </button>
            </form>

            {/* ............ */}
          </div>
          <div
            className={`flex items-center ${styles.blogDeail_DisplayNonePc}`}
          >
            <span className="relative sm:ml-6 h-[50px] w-[50px]">
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
          <div className="col-span-2">
            <div className="pb-8 font-montserrat text-lg font-semibold font-semibold leading-6 text-[#1DE9B6]">
              Information
            </div>
            <div className="text-lg font-normal leading-7 text-[rgba(255,255,255,0.95)]">
              <p className="mt-5 gap-2">
                <p className="text-sm font-normal leading-4 lg:text-lg lg:leading-6">
                  <span className="text-base font-medium leading-6 text-[#B7B7C4]">
                    {'Working Address'}:
                  </span>{' '}
                  <span className="font-montserrat text-base font-medium text-white">
                    {careersDetails ? careersDetails?.address : ''}
                  </span>{' '}
                </p>
                <p className="text-sm font-normal leading-4 lg:text-lg lg:leading-6">
                  <span className="text-base font-medium leading-6 text-[#B7B7C4]">
                    {'Working type'}:
                  </span>{' '}
                  <span className=" font-montserrat font-sans text-base text-white">
                    {careersDetails?.type}
                  </span>{' '}
                </p>
                <p className="text-sm font-normal leading-4 lg:text-lg lg:leading-6">
                  <span className="font-sans text-base font-medium text-white">
                    {'Salary'}:
                  </span>{' '}
                  <span className="font-montserrat text-base text-[#1DE9B6]">
                    {careersDetails ? careersDetails?.salary : ''}
                  </span>
                </p>
              </p>
            </div>

            <div className="mt-[32px] font-montserrat text-lg font-semibold leading-[21px] tracking-[0.03em] text-[#1DE9B6]">
              Job descriptions:
            </div>
            <div className="mt-[24px] font-sans text-base font-medium leading-7 text-[rgba(255,255,255,0.95)]">
              <div
                dangerouslySetInnerHTML={{
                  __html: String(
                    careersDetails?.description.substring(
                      careersDetails?.description.indexOf('</li>')
                    )
                  ),
                }}
              />
            </div>
            <div className="mt-[32px] font-montserrat text-lg font-normal font-semibold leading-[21px] tracking-[0.03em] text-[#1DE9B6]">
              Requirements:
            </div>
            <div className="mt-[24px] font-sans text-base font-medium leading-7 text-[rgba(255,255,255,0.95)]">
              <div
                dangerouslySetInnerHTML={{
                  __html: String(
                    careersDetails?.request.substring(
                      careersDetails?.request.indexOf('</li>')
                    )
                  ),
                }}
              />
            </div>
            <div className="mt-[32px] font-montserrat text-lg font-normal font-semibold leading-[21px] tracking-[0.03em] text-[#1DE9B6]">
              Benefits:
            </div>
            <div className=" mt-[24px] list-disc font-sans text-base font-medium leading-7 text-[rgba(255,255,255,0.95)]">
              <div
                dangerouslySetInnerHTML={{
                  __html: String(
                    careersDetails?.benefit.substring(
                      careersDetails?.benefit.indexOf('</li>')
                    )
                  ),
                }}
              />
            </div>
          </div>
          <div className={`col-span-2 ${styles.blogDeail_DisplayNone}`}>
            <div className="mt-[32px] text-2xl font-bold leading-[21px] tracking-[0.03em] text-[#1DE9B6]">
              <p>Apply this position:</p>
            </div>
            <div className="mt-[24px] text-lg font-normal leading-7 text-[rgba(255,255,255,0.95)]">
              <p>
                No need to be formal. Just send us your links and we’ll be in
                touch.
              </p>
            </div>
            {/* ..................... */}

            <form>
              <div className="mb-6 grid gap-6 pt-8 md:grid-cols-2">
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Full name
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>
                  <input
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm text-violet-500 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your full name"
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Email address
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>
                  <input
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Phone number
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>

                  <input
                    type="text"
                    id="company"
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter your phone number"
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex gap-1.5 ">
                    <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                      Portfolio
                    </label>
                    <label className="text-[#1DE9B6]">*</label>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full rounded-lg border border-2 border-indigo-400 bg-transparent p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Enter link of your facebook, linkedln, website,..."
                    pattern="Enter link of your facebook, linkedln, website,..."
                    required
                  ></input>
                </div>
              </div>
              <div className="pb-5">
                <div className="flex gap-1.5 ">
                  <label className="text-gray-900 mb-2 block text-lg font-medium dark:text-white">
                    Upload your CV
                  </label>
                  <label className="text-[#1DE9B6]">*</label>
                </div>
                <input
                  className="text-gray-900 border-gray-300 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full cursor-pointer rounded-lg border border-2 border-indigo-400 bg-transparent text-lg focus:outline-none"
                  id="large_size"
                  type="file"
                ></input>
                <div className=" text-sm font-normal leading-7 text-[#1DE9B6]">
                  <p>
                    (*.doc, *.docx, *.pdf, *.jpg, *.xls, *.xml, *.ppt, *.pptx -
                    Less than 10MB)
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#1DE9B6] px-5 py-2.5 text-center text-sm font-bold leading-6 text-[#151547] hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                Send my application
              </button>
            </form>

            {/* ............ */}
          </div>
          <div className="">
            <div
              className={`h-[56px] md:w-[auto] xl:w-[430px] ${styles.Search} `}
            >
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
                      className={`mb-2 mr-2 rounded-lg border border-navy-2 px-4 py-2 font-montserrat text-[14px] font-semibold leading-[17px] text-BodyTextColor md:text-[18px] md:leading-[22px] 
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

            <div className={`flex gap-8 ${styles.blogDeail_DisplayNonePc} mt-[46px] lg:mt-[0px] mb-[15px] mb:mt-[0px]`}>
            <p className={`flex items-center font-montserrat text-[32px] font-bold leading-[39px] tracking-wider text-[#1DE9B6] ${styles.blog_Detail_Title_Tablet} ${styles.blog_Detail_Title_mobile} ${styles.textoverflowDetailBlog}`}>
                {careersDetails ? careersDetails?.title : ''}
              </p>
              <div className="group relative inline-flex h-8 h-[45px] items-center justify-start overflow-hidden rounded-xl border-2 border-emerald-500  px-6 py-3 font-medium transition-all">
                <span className=" relative w-full text-left font-montserrat text-base font-semibold text-[#F8F8F8] transition-colors duration-200 ease-in-out ">
                  Hiring
                </span>
              </div>
            </div>
            <div
              className={`flex flex-row items-center text-sm font-normal leading-6 tracking-widest text-[#F8F8F8] ${styles.blogDeail_DisplayNonePc}`}
            >
              <span className="relative h-[24px] w-[24px]">
                <Image
                  src={IconCalendar}
                  alt="Calendar Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </span>
              <span className="ml-2 font-montserrat">
                {careersDetails ? careersDetails?.updated_at : ''}
              </span>
              <span className="mx-2 h-[20px] border border-solid border-[#FFFFFF]"></span>
              <span className="relative h-[24px] w-[24px]">
                <Image
                  src={IconCategory}
                  alt="Category Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </span>
              <span className="ml-2 font-montserrat">Devop1s</span>
            </div>

            <div className={`mt-[41px] ${styles.blogDeail_DisplayNone}`}>
              <span className="flex text-xl font-semibold leading-7 text-[#1DE9B6]">
                <Image src={TagGreenIcon} alt="tags" />
                <span className="ml-2">{'Job liên quan'}</span>
              </span>

              <Image src={LineHorizontalGreen} alt="line" />
            </div>
            <div className={`mt-6 flex ${styles.blogDeail_DisplayNone}`}>
              <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
              <div className="ml-4">
                <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                  Junior Devops
                </div>
                <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                  May 21, 2021
                </div>
              </div>
            </div>
            <div className={`mt-6 flex ${styles.blogDeail_DisplayNone}`}>
              <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
              <div className="ml-4">
                <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                  Junior Devops
                </div>
                <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                  May 21, 2021
                </div>
              </div>
            </div>
            <div className={`mt-6 flex ${styles.blogDeail_DisplayNone}`}>
              <div className="w-[3px] rounded-3xl bg-[#1DE9B6]"></div>
              <div className="ml-4">
                <div className="text-lg font-semibold leading-6 text-[#1DE9B6]">
                  Junior Devops
                </div>
                <div className="text-sm font-normal leading-5 text-[#5D70AB]">
                  May 21, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
