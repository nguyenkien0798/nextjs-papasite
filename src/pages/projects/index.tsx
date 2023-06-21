import { useFetch } from '@/hooks/useFect';
import React, { useState, useEffect } from 'react';
import Follower from './components/Follower';
import BannerProject from 'public/images/services/bannerProject.png';
import StarFlying from 'public/images/starFlying.png';
import dynamic from 'next/dynamic';
import BreadCrumbs from '@/components/common/BreadCrumbs';
import { CardProps } from '@/types';
import Card from '@/components/common/Card';
import SlideImage from '@public/images/slide.png';
import TillePage from '@/components/common/TitlePage';
const Carroussel = dynamic(() => import('@/components/common/Carousel'), {
  ssr: false,
});
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

interface FollowersProps {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  organizations_url: string;
  node_id: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  html_url: string;
  id: number;
  login: string;
}

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

const Projects = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState<number>(0);
  const [followers, setFollowers] = useState<FollowersProps[]>([]);
  const [active, setActive] = useState(0);
  const handleClick = (id: number) => {
    setActive(id);
  };
  const listTag = [
    {
      categoryName: 'All',
      categoryId: 1,
    },
    {
      categoryName: 'Games',
      categoryId: 2,
    },
    {
      categoryName: 'Web system',
      categoryId: 3,
    },
    {
      categoryName: 'App system',
      categoryId: 4,
    },
  ];
  const links = [
    {
      title: 'Project',
    },
  ];
  console.log(data, 'data');

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

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
              Projects
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
      <div className="container py-[63px]">
        <div className="text-center">
          <TillePage title={'OUR PROJECT'} />
        </div>
        <div className="mt-4">
          <ul className="flex flex-wrap items-center justify-center pt-[15px] lg:pt-0">
            {listTag.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`mb-2 mr-2 rounded-lg border border-navy-2 px-4 py-2 font-montserrat text-[14px] font-semibold leading-[17px] text-BodyTextColor md:text-[16px] md:leading-[22px] 
              ${active === item.categoryId ? 'bg-active text-navy-4' : null}

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

        <div className="mt-[63px] grid grid-cols-1 gap-x-[22px] gap-y-10 md:mb-[7.5rem] md:grid-cols-2 lg:grid-cols-3">
          {followers.map((follower: FollowersProps) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        <div className="text-center pt-7 md:pt-0">
          <Pagination
            total={20}
            // current={1}
            // pageSize={10}
            // onChange={() => console.log('11111')}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
