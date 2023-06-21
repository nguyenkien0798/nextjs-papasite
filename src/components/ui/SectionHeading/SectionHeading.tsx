import Image from 'next/image'
import * as React from 'react'
import HorizontalLine from 'public/images/horizontalLine.png'

export interface ISectionHeadingProps {
  title: string
  isHiddenHorizontalLine?: boolean
}

export default function SectionHeading(props: ISectionHeadingProps) {
  const { title, isHiddenHorizontalLine } = props
  return (
    <div className="inline-block">
      {!isHiddenHorizontalLine && (
        <div className="mb-10">
          <Image src={HorizontalLine} alt="horizontal-line" />
        </div>
      )}

      <h3 className="lg:text-[32px] text-[24px] font-bold leading-[39px] tracking-wider text-[#F8F8F8]">
        {title}
      </h3>
    </div>
  )
}
