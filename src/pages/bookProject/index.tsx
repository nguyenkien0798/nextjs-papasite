import BreadCrumbs from '@/components/common/BreadCrumbs';
import Card from '@/components/common/Card';
import TillePage from '@/components/common/TitlePage';
import { useFetch } from '@/hooks/useFect';
import { CardProps } from '@/types';
import LineHorizontalGreen from '@public/common/lineHorizontalGreen.png';
import SlideImage from '@public/images/slide.png';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import IconCalendar from 'public/blog/calendar.png';
import IconCategory from 'public/blog/category.png';
import FacebookIcon from 'public/blog/facebook.png';
import Icon from 'public/blog/icon.png';
import InstagramIcon from 'public/blog/instagram.png';
import likeIcon from 'public/blog/like.png';
import LinkIcon from 'public/blog/link.png';
import IconPeople from 'public/blog/people.png';
import BannerProject from 'public/images/services/bannerProject.png';
import StarFlying from 'public/images/starFlying.png';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useEffect, useState } from 'react';
import Follower from '../projects/components/Follower';
import ContactSale from './components';
const Carroussel = dynamic(() => import('@/components/common/Carousel'), {
  ssr: false,
});

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
  const links = [
    {
      title: 'Ruoc loc than tai',
    },
  ];

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const [openDialogBookProject, setOpenDialogBookProject] =
    useState<boolean>(false);

  const handleCloseDialogBookProject = () => {
    setOpenDialogBookProject(false);
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
            <div className="max-w-[600px] py-[130px]">
              <div className="font-montserratFontwight7 text-[64px] leading-[75px] text-[#1DE9B6]">
                Rước lộc thần tài Game Mini
              </div>
              <Image src={LineHorizontalGreen} alt="line" />
              <div className="mt-[36px] font-sans text-sm leading-6 tracking-[0.2em] text-white">
                {`Rước lộc thần tài là một thể loại game trực tuyến được thiết kế độc quyền cho VNpay-QR, lấy cảm hứng từ không khí vui tươi, rộn ràng của mọi người vào dịp cuối năm. Để tăng phần hứng thú, tựa game giúp người tham gia vừa giải trí lại có thể kiếm được những giải thưởng thú vị đến từ nhà tài trợ.`}
              </div>
              <div className="mt-[36px] font-sans  text-sm leading-6 tracking-[0.2em] text-white">
                {`Vì được ra đời ngày khoảng thời gian hợp lý, phù hợp với nhu cầu của người chơi, trò chơi Rước lộc thần tài đã đạt được những thành công tốt đẹp và hứa hẹn sẽ có nhiều hơn nữa sự hợp tác giữa Papagroup và VNpay-QR`}
              </div>

              <div className="mt-[36px] font-sans  text-base leading-6 tracking-[0.2em] text-white">
                <button
                  className="text-basew-32 group relative inline-flex h-[49px] items-center justify-start overflow-hidden rounded-xl bg-[#1de9b6] px-6 py-3 font-medium transition-all"
                  onClick={() => setOpenDialogBookProject(true)}
                >
                  <span className=" relative  w-full text-left text-center text-base  text-[#0F103C] transition-colors duration-200 ease-in-out group-hover:text-[#0F103C]">
                    Book Project
                  </span>
                </button>
              </div>
              {openDialogBookProject && (
                <ContactSale
                  open={openDialogBookProject}
                  onClose={handleCloseDialogBookProject}
                />
              )}

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
        <div className="relative ml-4 w-full">
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
              <span className="ml-2">Vn Pay</span>
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
              <span className="ml-2">Game Development</span>
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
        <div className="text-center">
          <TillePage title={'OUR PROJECT'} />
        </div>
        <div className="mt-[63px] grid grid-cols-1 gap-x-[22px] gap-y-10 md:mb-[7.5rem] md:grid-cols-2 lg:grid-cols-3">
          {followers.map((follower: FollowersProps) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        <div className="text-center">
          <Pagination
            total={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
