import React from 'react'
import Seo from '@/components/common/Seo'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import Banner from '@/components/ui/Banner'
import AboutUs from '@/components/ui/AboutUs'
import WhatMakeUsDifferent from '@/components/ui/WhatMakeUsDifferent'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import OurTestimonials from '@/components/ui/OurTestimonials'
import OurClient from '@/components/ui/OurClient'
import SendEmail from '@/components/ui/SendEmail'

const OurTeam = dynamic(() => import('@/components/ui/OurTeam'))

const Home = () => {
  const theHost = process.env.PROJECT_BASE_URL ?? 'papagroup.net'
  
  return (
    <React.Fragment>
      <Seo
        title="Papagroup Technology"
        description={''}
        url={theHost}
        thumbnailUrl="https://media1.papagroup.net/ppg-public/papagroup_large_thumb.jpg"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Banner />
      <AboutUs />
      <WhatMakeUsDifferent />
      <OurTeam />
      <OurTestimonials />
      <OurClient />
    </React.Fragment>
  )
}

Home.Layout = DefaultLayout

export default Home
