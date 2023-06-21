import { useRef } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import LeftArrow from '/public/common/left-arrow.svg'
import RightArrow from '/public/common/right-arrow.svg'

import layer1 from '/public/comments/Layer-1.svg'
import layer2 from '/public/comments/Layer-2.svg'
import layer3 from '/public/comments/Layer-3.svg'

import styles from '@/styles/OurTestimonials.module.css'
import useSWR from 'swr'
import SectionHeading from '../../ui/SectionHeading'
import { useTranslation } from 'next-i18next'
import Image from '@/components/common/Image'
import React, { useState } from 'react'
import { useAppDispatch } from '@/store/store'
import { fetchOurTestimonials } from '@/store/slices/ourTestimonials/teamThunk'
import { OurTestimonialsResponse } from '@/store/slices/ourTestimonials/types'

export interface comments {
  avatar: string
  name: string
  comment: string
  description: string
}

export default function OurTestimonials() {
  const dispatch = useAppDispatch();
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [data, setData] = useState<OurTestimonialsResponse[]>([])
  
  React.useEffect(() => {
    dispatch(fetchOurTestimonials())
    .unwrap()
    .then((response) => {
      const res: OurTestimonialsResponse[] = response.data;
      setData(res)
    })
    .catch((err) => {
      console.log(err, 'err')
    })
  }, [dispatch])

  const { t, ready } = useTranslation('comment')

  return (
    <div className={`relative mt-10 md:mt-[60px] xl:mt-[120px] xl:mb-10 3xl:mb-20`}>
      <div className="container pb-4 ">
        <SectionHeading title={'Our testimonials'} />
      </div>

      < div className="relative md:bg-[linear-gradient(139deg,_#090c24,_#26268F_100%)]">
        <div className={`${styles.wraper} relative flex pt-6 pb-5 md:container md:pt-10`}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={150}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ dynamicBullets: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            draggable
            grabCursor
            className="flex items-center !pb-9"
          >
            {data?.map((item: OurTestimonialsResponse, idx: number) => (
              <SwiperSlide
                key={idx}
                className={`${styles.slide} group relative flex items-center ${styles.swiper_pagination}`}
              >
                <div
                  className={` -mt-5 grid w-full grid-cols-1 md:relative md:grid-cols-2 md:items-center md:justify-start`}
                >
                  <div className={`${styles.thumbnail} my-4 pr-0 md:ml-[0px] md:pr-[30px] `}>
                    <div
                      className={`z-9 relative flex items-center justify-center md:ml-[-40px] md:h-[206px] md:w-[206px] lg:h-[257px] lg:w-[268px] xl:h-[310px] xl:w-[325px] 2xl:ml-0 2xl:mr-[-50px] 2xl:h-[393px] 2xl:w-[411px] 3xl:h-[474px] 3xl:w-[496px] `}
                    >
                      <div className="self-center ">
                        <Image src={layer1} alt="img" className="" width={496.45} height={474.28} />
                      </div>
                      <div className="absolute mb-[16px] h-auto  w-[80%] self-center  md:mb-0 ">
                        <Image src={layer2} alt="img" className="" width={404.71} height={405.64} />{' '}
                      </div>

                      <div className="absolute mb-[15px] h-auto w-[70%] pr-0.5 md:mb-0">
                        <Image src={layer3} alt="img" className="" width={347.23} height={347.39} />{' '}
                      </div>
                      <div className="-ml-0.4 absolute mb-[16px] w-[45.7%] md:mb-0">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.avatar}`}
                          alt=""
                          className={`${styles.avatar}`}
                          width={230}
                          height={230}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={` md:-ml-[80px] lg:-ml-[90px] 2xl:-ml-[70px] 3xl:-ml-[30px]`}>
                    <div className="flex flex-col pl-0 text-center md:text-left lg:mr-[80px] xl:mr-[0px] ">
                      <div className="">
                        <p className="mb-[14px] font-montserrat text-[24px] font-bold leading-[29px] tracking-wider  md:mb-[10px] md:text-[18px] md:leading-[22px] xl:text-[24px] 2xl:mb-[21px] 2xl:leading-[29px] 3xl:mb-[28px] 3xl:text-[24px]">
                          {item.name}
                        </p>
                        <p
                          className="mb-[18px] font-sansFrancisco text-[16px] font-normal leading-[19px] tracking-wider text-active md:mb-[23px] md:text-[16px] md:leading-[22px] md:tracking-[0.03rem]
                         lg:leading-[24px] xl:text-[16px] 2xl:mb-[25px] 2xl:text-[18px] 3xl:mb-[33px]"
                        >
                          {item.description}
                        </p>
                        <div
                          className="font-sansFrancisco text-[14px] font-normal leading-[17px] text-BodyTextColor line-clamp-5 md:max-w-[370px]  md:text-[12px] md:leading-[14px] lg:max-w-[396px] lg:text-[14px] lg:leading-[17px] xl:max-w-[575px] xl:text-[16px] xl:leading-[24px] 2xl:w-[550px] 2xl:text-[18px] 3xl:w-[586px]"
                          dangerouslySetInnerHTML={{ __html: item.comment }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            ref={prevRef}
            className="prev-btn absolute top-1/2 left-[0px]  z-50 hidden h-[44px] w-[44px] -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full border-2 border-active transition-all md:ml-[2rem] md:flex md:border lg:ml-[15px] 
          lg:h-[56px] lg:w-[56px] lg:border-2 3xl:h-[64px] 3xl:w-[64px]
          "
          >
            <div className="flex items-center justify-center md:h-[13.75px] md:w-[13.75px] lg:h-[17px] lg:w-[17px] 3xl:h-[30px] 3xl:w-[20px] ">
              <Image src={LeftArrow} width={24} height={24} alt="arrow" />
            </div>
          </div>
          <div
            ref={nextRef}
            className="next-btn absolute top-1/2 right-[0px] z-50 hidden h-[44px]  w-[44px] -translate-y-1/2 cursor-pointer select-none items-center justify-center rounded-full border-2 border-active transition-all md:mr-[2rem] md:flex md:border md:first:h-[13.75px] 
          lg:mr-[15px]  lg:h-[56px]  lg:w-[56px] lg:border-2 3xl:h-[64px] 3xl:w-[64px]
          "
          >
            <div className="flex items-center justify-center md:h-[13.75px] md:w-[13.75px]  lg:h-[17px] lg:w-[17px] 3xl:h-[20px] 3xl:w-[20px]">
              <Image src={RightArrow} alt="arrow" />
            </div>
          </div>
        </div>

        <div
          className={`${styles.background} hidden h-[195px] md:block  lg:h-[240px] xl:h-[273px] 2xl:h-[350px] 3xl:h-[383px]`}
        ></div>
      </div>
    </div>
  )
}
