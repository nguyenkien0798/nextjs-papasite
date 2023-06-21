// import Image from 'next/image'
import { useState } from 'react'
import CircleImg from '/public/common/circle-new.svg'

import CreativeIcon from '/public/different/creative-icon-new.svg'
import LimitlessIcon from '/public/different/limitless-icon-new.svg'
import PatientIcon from '/public/different/patient-icon-new.svg'
import ReliableIcon from '/public/different/reliable-icon-new.svg'

import styles from '@/styles/WhatMakesUsDifferent.module.css'
import SectionHeading from '../../ui/SectionHeading'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
export interface listContent {
  name: string
  imgPath: string
  content: string
}

function WhatMakeUsDifferent() {
  const [list, setList] = useState<listContent[]>([
    {
      name: 'patient',
      imgPath: PatientIcon,
      content: 'Persevere in solving problems',
    },

    {
      name: 'reliable',
      imgPath: ReliableIcon,
      content: 'Provide the best products and services on time',
    },
    {
      name: 'creative',
      imgPath: CreativeIcon,
      content: 'Be young, dynamic and creative',
    },
    {
      name: 'limitless',
      imgPath: LimitlessIcon,
      content: 'Never stop learning and growing',
    },
  ])
  const { t, ready } = useTranslation('wmud')

  return (
    <section className="xl:px-10 2xl:px-[10%] px-4 md:px-0">
      <div className={`${styles.section} mt-9 md:mt-[60px] xl:mt-[110px] 3xl:mt-[120px]`}>
      <div className="px-4">
        <SectionHeading title={ready ? t('header') : ''} />
      </div>
        <div
          className={`grid grid-cols-1 gap-y-[40px] pt-[40px]  pb-[60px] md:mr-[-13px] md:grid-cols-2 md:gap-x-[60px] md:gap-y-[40px] md:pl-[60px] md:pb-[80px] lg:mr-0
          lg:gap-x-[120px] lg:gap-y-[85px] lg:pl-[81px] lg:pt-[60px] xl:gap-y-[60px] xl:gap-x-[150px] xl:pl-[96px] xl:pt-[120px] xl:pb-[120px] 2xl:gap-x-[156px] 2xl:gap-y-[80px] 2xl:pl-[103px]
          
         
         3xl:gap-x-[228px] 3xl:gap-y-[100px] 3xl:pl-[122px] 3xl:pb-[160px]
           ${styles.layout}  `}
        >
          {list.map((item, idx) => (
            <div key={item.name} className={`flex items-center ${styles.item}`}>
              <div className="justify-self-start">
                <div className="relative flex items-center justify-center">
                  <div
                    className={`${styles.logo_bg} w-[140px] md:w-[103.5px] lg:w-[140px] xl:w-[167px] 2xl:w-[176px] 3xl:w-[220px]`}
                  >
                    <Image src={CircleImg} alt="icon" width={220} height={220} loading="eager" />
                  </div>
                  <div
                    className={` absolute w-[110px] md:w-[82.35px] lg:w-[111px] xl:w-[133px] 2xl:w-[140px] 3xl:w-[175px]`}
                  >
                    <Image
                      alt="icon"
                      src={item?.imgPath}
                      width={175}
                      height={175}
                    />
                  </div>
                </div>
              </div>

              <div className="ml-[40px] flex-1 md:ml-[18px] lg:ml-6 2xl:ml-[18px] 3xl:ml-[23px]">
                <p
                  className="mb-2 font-montserrat text-[18px] font-bold leading-[22px] tracking-wider  text-active md:text-[24px] md:font-semibold md:leading-[29px]  lg:mb-[10px]
                lg:tracking-wider xl:text-[32px] xl:font-bold xl:leading-[39px] 2xl:mb-[11.56px] 3xl:mb-6
                 "
                >
                  {ready ? t(`${item.name}.name`) : ''}
                </p>
                <p
                  className="text-[14px] font-normal leading-[17px] tracking-[0.03em] text-BodyTextColor md:text-[12px]  md:leading-[14px] lg:text-[14px] lg:leading-[17px]
                xl:text-[16px] xl:leading-[24px] xl:tracking-[0.03rem] 2xl:text-[18px]
                
                "
                >
                  {ready ? t(`${item.name}.description`) : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatMakeUsDifferent