import React from 'react'
import LinePage from '@public/images/linePage.png'
import Image from '../Image';

const TillePage = React.memo(({ title }: { title: string }) => {
 
  return(
    <div>
      <p className="font-montserrat  font-bold xl:text-5xl md:text-[32px] leading-[72px] text-[#1DE9B6] text-2xl">{title}</p>
      <Image src={LinePage} alt="line" />
    </div>
  )
});

TillePage.displayName = 'TillePage'

export default TillePage;