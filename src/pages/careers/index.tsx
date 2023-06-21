import BreadCrumbs from '@/components/common/BreadCrumbs';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import { fetchRecruitment } from '@/store/slices/team/teamThunk';
import { useAppDispatch } from '@/store/store';
import styles from '@/styles/Blog.module.css';
import { CardProps } from '@/types';
import SearchIcon from '@public/common/search-icon-white.png';
import SlideImage from '@public/images/slide.png';
import { animated, useSpring } from '@react-spring/web';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BannerProject from 'public/images/services/bannerProject.png';
import React, { ChangeEvent, useState } from 'react';

interface Careers {
  title: string;
  address: string;
  benefit: string;
  type: string;
  salary: string;
  recruitment_id: string;
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
    categoryName: 'Backend developer',
    categoryId: 4,
  },
  {
    categoryName: 'Frontend developer',
    categoryId: 5,
  },
  {
    categoryName: 'Fullstack developer',
    categoryId: 6,
  },
  {
    categoryName: 'DesOps',
    categoryId: 7,
  },
  {
    categoryName: 'DevOps',
    categoryId: 8,
  },
  {
    categoryName: 'Tester',
    categoryId: 9,
  },
  {
    categoryName: 'AI Engineer',
    categoryId: 10,
  },
];

const Careers = () => {
  const [searchValue, setSearchValue] = useState('');
  const [active, setActive] = useState(0);
  const dispatch = useAppDispatch();
  const [show, setShown] = useState(false);
  const [title, setTitle] = useState<string>();
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

  const [careers, setCareers] = useState([]);

  React.useEffect(() => {
    dispatch(fetchRecruitment())
      .unwrap()
      .then((response: any) => {
        setCareers(response.data);
      })
      .catch((err: any) => {
        console.log(err, 'err');
      });
  }, [dispatch]);

  const links = [
    {
      title: 'Project',
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
      <div className="px-4 py-[80px] xl:px-10 2xl:px-[10%]">
        <div>
          <div
            className={`lg:flex lg:flex-row-reverse ${styles.blog_flexNone_mobile} `}
          >
            <div className="2xl-[auto] relative flex  items-center overflow-hidden rounded-xl border-2 border-solid border-navy-2 bg-background bg-none h-[56px] md:w-[450px] xl:w-[430px]">
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
                className={`btn -pt-2 absolute right-0 h-full max-w-[40px] border-0 lg:max-w-[56px] ${styles.btn} w-fit rounded-[10px] bg-[hsla(165,82%,51%,0.1)]`}
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
            <div className="mt-4">
              <ul className="flex flex-wrap items-center pt-[15px] lg:pt-0">
                {listTag.map((item, idx) => (
                  <li key={idx}>
                    <button
                      className={`mb-2 mr-2 rounded-lg border border-navy-2 px-4 py-2 font-montserrat text-[16px] font-semibold leading-[17px] text-BodyTextColor md:text-[18px] md:leading-[22px] 
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
        {careers &&
          careers.map((item: any) => {
            return (
              <>
                <div className="mt-[60px] grid grid-flow-row-dense  gap-8">
                  <div className="col-span-2 ">
                    <animated.div
                      style={props3}
                      onMouseEnter={() => setShown(true)}
                      onMouseLeave={() => setShown(false)}
                    >
                      <div
                        onMouseUp={() => setTitle(item.title)}
                        onClick={() => {
                          router.push(`/careers/${title ? title : ''}`, '', {
                            scroll: false,
                          });
                        }}
                        className={`items-center justify-between px-10 py-[20px] md:relative md:flex ${styles.gradientBorderViolet} ${styles.blog_flexNone_mobile_list}`}
                      >
                        <div>
                          {' '}
                          <div className={`flex gap-6 ${styles.blog_paddingBottom_mobile_list}`}>
                            <div className="mt-[10px]">
                              <p className="font-montserrat text-2xl font-semibold leading-6 text-[#1DE9B6]">
                                {item.title}
                              </p>
                            </div>
                            <div className="group relative inline-flex  h-[45px] items-center justify-start overflow-hidden rounded-xl border-2 border-emerald-500  px-6 py-3 font-medium transition-all">
                              <span className=" relative w-full text-left font-montserrat text-base font-semibold text-[#F8F8F8] transition-colors duration-200 ease-in-out ">
                                Hiring
                              </span>
                            </div>
                          </div>
                          <p className="text-sm font-medium leading-4 lg:text-lg lg:leading-6">
                            <span className="text-base font-medium leading-6 text-[#B7B7C4]">
                              {'Working Address'}:
                            </span>{' '}
                            <span className="text-base font-medium leading-6 text-[#F8F8F8]">
                              {item.address}
                            </span>{' '}
                          </p>
                          <div className="flex gap-1">
                            <div className="mt-2">
                              <p className="text-base font-medium leading-6 text-[#B7B7C4]">{`Working type:`}</p>
                            </div>
                            <div className="mt-2">
                              <p className="text-base font-medium  leading-6 text-[#F8F8F8]">
                                {item.type}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <div className="mt-2">
                              <p className="text-base font-medium leading-6 text-[#F8F8F8]">{`Salary:`}</p>
                            </div>
                            <div className="mt-2">
                              <p className="text-base font-medium leading-6 text-[#1DE9B6]">
                                {item.salary}
                              </p>
                            </div>
                          </div>
                        </div>
                        <button className="group relative inline-flex h-[49px] w-[152px] items-center justify-start overflow-hidden rounded-xl bg-[#1de9b6] px-6 py-3 font-medium transition-all">
                          <span className="relative w-full text-left text-center text-base font-medium text-[#0F103C] transition-colors duration-200 ease-in-out group-hover:text-[#0F103C]">
                            Apply now
                          </span>
                        </button>
                      </div>
                    </animated.div>
                  </div>
                </div>
              </>
            );
            // })}
          })}
      </div>
    </div>
  );
};

export default Careers;
