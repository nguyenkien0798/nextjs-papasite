import Image, { StaticImageData } from 'next/image'
import * as React from 'react'
import { motion } from 'framer-motion'
import useTranslation from '@/hooks/useTranslation'

export interface ITimeItemProps {
  item: Item
  classes?: string
  style?: React.CSSProperties
  isMobile?: boolean
  [key: string]: any
}

type Item = {
  icon: StaticImageData
  content: string
  year: number
}

export default function TimeItem(props: ITimeItemProps) {
  const { item, classes, style, isMobile, ...restProps } = props
  const translate = useTranslation();

  return (
    <>
      <motion.div
        className={`flex flex-col items-center justify-start  ${classes && classes}`}
        style={style && style}
        {...restProps}
      >
        <div className="flex shrink-0 flex-col items-center">
          <div className="group relative">
            <div className="relative block h-[162px] w-[162px] md:h-[100px] md:w-[100px] lg:h-[114px] lg:w-[114px] xl:h-[138px] xl:w-[138px] 2xl:h-[146px] 2xl:w-[146px] 3xl:h-[175px] 3xl:w-[175px]">
              <Image src={item.icon} alt="" layout="fill" />
            </div>
          </div>
          <span className="font-montserrat mt-[14px] text-2xl font-semibold leading-[30px] tracking-wider text-active md:mt-2 md:text-lg md:font-bold md:leading-[22px] lg:mt-[11px] lg:text-2xl lg:font-semibold lg:leading-[30px] xl:text-[32px] xl:font-bold xl:leading-10 2xl:mt-[15px]">
            {item.year}
          </span>
        </div>
        <p className="ml-4 mt-20 flex-1 whitespace-pre-line px-0 text-sm font-normal leading-4 text-BodyTextColor md:px-7 md:text-xs md:leading-[14px] lg:mt-[90px] lg:px-0 lg:text-sm lg:leading-4 xl:text-base xl:leading-6 2xl:mt-[110px] 2xl:text-[18px] 3xl:mt-[130px] text-[#F8F8F8]">
        {item.content}
        </p>
      </motion.div>
    </>
  )
}
