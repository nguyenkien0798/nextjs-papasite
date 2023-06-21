// import Image from 'next/image'
import { useState } from 'react'
import Logo_bap_color from '/public/ourclients/bap-color.svg'
import Logo_blue_color from '/public/ourclients/blue-color.svg'
import Logo_codrex_color from '/public/ourclients/codrex-color.svg'
import Logo_dsoft_color from '/public/ourclients/dsoft-color.svg'
import Logo_heniken_color from '/public/ourclients/heniken-color.svg'
import Logo_hoasao_color from '/public/ourclients/hoasao-color.svg'
import Logo_kgroup_color from '/public/ourclients/kgroup-color.svg'
import Logo_kpmg_color from '/public/ourclients/kmpg-color.svg'
import Logo_sssmarket from '/public/ourclients/sssmarket.svg'
import Logo_tech_color from '/public/ourclients/tech-color.svg'
import Logo_torat_color from '/public/ourclients/torat-color.svg'
import Logo_vnpay_color from '/public/ourclients/vnpay-color.svg'
import styles from '@/styles/OurClient.module.css'
import SectionHeading from '../../ui/SectionHeading'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export interface client {
  id: number
  logo_hover: string
}

export default function OurClient() {
  const [listClient, setListClient] = useState<client[]>([
    {
      id: 0,

      logo_hover: Logo_dsoft_color,
    },
    {
      id: 1,

      logo_hover: Logo_bap_color,
    },
    {
      id: 2,

      logo_hover: Logo_vnpay_color,
    },
    {
      id: 3,

      logo_hover: Logo_codrex_color,
    },
    {
      id: 4,

      logo_hover: Logo_kpmg_color,
    },
    {
      id: 5,

      logo_hover: Logo_kgroup_color,
    },
    {
      id: 6,

      logo_hover: Logo_tech_color,
    },
    {
      id: 7,

      logo_hover: Logo_heniken_color,
    },
    {
      id: 8,
      logo_hover: Logo_sssmarket,
    },
    {
      id: 9,

      logo_hover: Logo_torat_color,
    },
    {
      id: 10,
      logo_hover: Logo_hoasao_color,
    },
    {
      id: 11,

      logo_hover: Logo_blue_color,
    },
  ])
  const { t, ready } = useTranslation('client')

  return (
    <div className="container">
      <SectionHeading title={ready ? t('header') : ''} />

      <div
        className="mt-[40px] grid grid-cols-1 justify-items-center
        sm:grid-cols-2 md:-mr-[20px] md:ml-[75px]

        md:grid-cols-4 md:gap-x-[0px] lg:mr-0

       lg:gap-x-[100px] lg:gap-y-[60px] 

       xl:mt-[60px] xl:gap-y-[27px] 

       2xl:gap-x-[120px]

       2xl:gap-y-[15px] 3xl:gap-x-[147px] "
      >
        {listClient.map((x, i) => {
          return (
            <div
              key={i}
              className={`${styles.transfrom_logo} flex items-center justify-center md:w-[130px] lg:w-[140px] xl:w-[168px] 2xl:w-[180px] 3xl:w-[219px]`}
            >
              <Image alt="Fail" src={x.logo_hover} width={163} height={163} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
