import * as React from 'react'
import styles from '@/styles/OurTeam.module.css'
import CircleImg from '/public/ourteam/circle.svg'
import Icon_In from '/public/Footer/linkedin.svg'
import LeftArrow from '/public/common/left-arrow.svg'
import RightArrow from '/public/common/right-arrow.svg'

// import Image from 'next/image'
import SectionHeading from '../../ui/SectionHeading'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTranslation } from 'next-i18next'
import useSWR from 'swr'
import Image from '@/components/common/Image'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { fetchTems } from '@/store/slices/team/teamThunk'
import { TeamResponse } from '@/store/slices/team/types'
interface Team {
  name: string
  position: string
  facebook: string
  linkedin: string
  photo: string
}

export default function OurTeam() {
  const [teamList, setTeamList] = React.useState<TeamResponse[]>([])
  // const { data } = useSWR('/members', {
  //   revalidateOnFocus: false,
  // })
  // const { teamsPageable } = useAppSelector((state) => state.team);
  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)
  const { t, ready } = useTranslation('team')
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchTems())
    .unwrap()
    .then((response) => {
      const res: TeamResponse[] = response.data;
      setTeamList(res)
    })
    .catch((err) => {
      console.log(err, 'err')
    })
  }, [dispatch])

  // React.useEffect(() => {
  //   ;(async () => {
  //     try {
  //       const res = await teamApi.getAll()
  //       setTeamList(res.data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   })()
  // }, [])

  return (
    <section className={`will-change-transform xl:px-10 2xl:px-[10%] ${styles.slideWrapperBg}`}>
      <div className=" pl-[1em] pr-[1em]">
        <SectionHeading title={ready ? t('header') : ''} />
      </div>
      <div className="relative">
        <div
          className={`relative mt-0 md:mt-[19px] lg:mt-[26px] xl:mt-[60px] 2xl:mt-[53px] 3xl:mt-[60px] ${styles.slideWrapper}`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ dynamicBullets: true }}
            draggable
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            // centeredSlidesBounds={true}
            speed={750}
            grabCursor
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className={`!px-0 !pt-10 !pb-10 lg:!px-8 3xl:!px-11 ${styles.slideContainer}`}
            breakpoints={{
              '375': {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 40,
              },
              '768': {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 46,
              },
              '1024': {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 63,
              },
              '1366': {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 75,
              },
              '1440': {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 75,
              },
              '1600': {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 85,
              },
            }}
          >
            {teamList.length > 0 &&
              teamList.map((item: TeamResponse, idx: number) => {
                return (
                  <SwiperSlide
                    key={idx}
                    className={`group relative flex max-w-[350px] flex-col items-start border-4 border-navy-2
                    md:min-w-[164px] md:pb-0 lg:min-w-[222px] xl:min-w-[260px] 2xl:min-w-[280px]
                     3xl:min-w-[340px] ${styles.slide}`}
                  >
                    <div
                      className="opacity-1 duration-600 absolute top-[-40px] left-0 -z-[1]  group-hover:transition-opacity md:opacity-0 md:group-hover:top-[-8px] md:group-hover:opacity-100 md:group-hover:delay-[0]
                        lg:group-hover:top-[-16px]
                      
                        xl:group-hover:top-[-21px] 2xl:group-hover:top-[-23px] 3xl:group-hover:top-[-25px]  hidden md:flex "
                    >
                      <Image src={CircleImg} alt="" style={{ display: 'none' }}/>
                    </div>
                    <div
                      className="relative mx-auto mt-10 block h-[210px] w-[210px] transition-all duration-500 md:mt-6 md:h-[110px] md:w-[110px] lg:mt-[30px]
                      lg:h-[149px] lg:w-[149px] xl:mt-[37px] xl:h-[176px] xl:w-[176px] 2xl:h-[189px] 2xl:w-[189px] 3xl:mt-[48px] 3xl:h-[230px] 3xl:w-[230px]"
                    >
                      <Image
                        alt=""
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.photo}`}
                        width={230}
                        height={230}
                        className="rounded-full"
                        layout="fill"
                      />
                    </div>

                    <div className="mt-[48px] flex w-full flex-1 flex-col pl-[30px] md:mt-[9px] md:pl-[11px] lg:pt-3 lg:pl-[15px] lg:pr-[26px] xl:pt-[23px] xl:pl-[23px] 2xl:pr-[28px] 2xl:pt-[25px] 3xl:pr-[40px] 3xl:pl-[29px] 3xl:pt-[31px]">
                      <p
                        className="h-[48px] shrink-0 whitespace-pre-line font-montserrat text-lg font-semibold uppercase leading-[22px] tracking-wider md:h-[30px] md:pb-2 md:text-[14px] md:leading-[17px]
                        lg:h-[38px] lg:text-[16px] md:text-[14px] lg:font-bold lg:leading-[20px] xl:mb-1 xl:h-[44px] xl:text-[18px] xl:leading-[22px]  2xl:h-[48px]  2xl:font-semibold 3xl:h-[58px] 3xl:text-[24px]  3xl:leading-[29px]
                      "
                      >
                        {item.name}
                      </p>
                      <p
                        className="h-[50px] whitespace-pre-line font-montserrat text-lg font-bold leading-5 tracking-wider text-active  md:mt-1 md:mb-1 md:h-[30px] md:text-[12px]  md:font-normal
                      md:leading-[14px] lg:mb-[6px] lg:h-[36px] lg:text-[14px] lg:font-semibold lg:leading-[17px] xl:mb-[15px] xl:h-[32px] 2xl:mb-[16px] 2xl:text-[18px] 2xl:font-bold 2xl:leading-[20px] 3xl:mb-[20px] 3xl:h-[40px]
                      "
                      >
                        {item.position}
                      </p>
                      <div className="mb-10 flex gap-x-[6px] md:mb-[17px] lg:mb-6 xl:mb-[30px] 3xl:mb-9">
                        {/* <a
                          href={item.facebook}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block w-[59px] md:w-[26.85px] lg:w-[36px] xl:w-[43px] 2xl:w-[46px] 3xl:w-[56px]"
                        >
                          <Image
                            src={Icon_Facebook}
                            alt="facebook"
                            width={56}
                            height={56}
                            loading="eager"
                          />
                        </a> */}
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block w-[59px] md:w-[26.85px] lg:w-[36px] xl:w-[43px] 2xl:w-[46px] 3xl:w-[56px]"
                        >
                          <Image src={Icon_In} alt="linkedin" width={56} height={56} />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
        </div>
        <div
          ref={prevRef}
          className="prev-btn absolute top-1/2 left-0 z-50 hidden h-[44px] w-[44px] -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full border-2 border-active transition-all md:ml-[2rem] md:flex md:border lg:ml-[15px] lg:h-[56px]
          lg:w-[56px] lg:border-2 3xl:h-[64px] 3xl:w-[64px]
          "
        >
          <div className="relative flex items-center justify-center md:h-[13.75px] md:w-[13.75px] lg:h-[17px] lg:w-[17px] 3xl:h-[30px] 3xl:w-[20px] ">
            <Image src={LeftArrow} layout="fill" alt="arrow" />
          </div>
        </div>
        <div
          ref={nextRef}
          className="next-btn absolute top-1/2 right-0 z-50 hidden h-[44px] w-[44px] -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full border-2 border-active transition-all md:mr-[2rem] md:flex md:border md:first:h-[13.75px] lg:mr-[15px]
          lg:h-[56px] lg:w-[56px] lg:border-2 3xl:h-[64px] 3xl:w-[64px]
          "
        >
          <div className="relative flex items-center justify-center md:h-[13.75px] md:w-[13.75px] lg:h-[17px] lg:w-[17px] 3xl:h-[20px] 3xl:w-[20px]">
            <Image src={RightArrow} layout="fill" alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  )
}
