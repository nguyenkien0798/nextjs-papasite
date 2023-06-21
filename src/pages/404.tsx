import * as React from 'react'
import Image from 'next/image'
import LeftArrow from '/public/common/left-arrow.svg'
import NotFoundImg from '/public/backgrounds/background-404.png'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import Button from '@/components/common/Button'

function App() {
  const router = useRouter()

  const { t, ready } = useTranslation('404')

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className="mb-20 ">
        <div className="flex items-center justify-center">
          <Image src={NotFoundImg} alt="404" width={822} height={586} />
        </div>
        <div className="mt-5 text-2xl leading-10 text-center font-sansFrancisco md:mt-10">
          {ready ? t('notFound') : ''}
        </div>
        <Button
          value={ready ? t('back') : 'Go back'}
          className="relative mt-5 -translate-x-1/2 btn btn-active btn-icon-sm md:btn-icon-lg left-1/2 md:mt-10"
          onClick={handleBack}
          leftIcon={<Image src={LeftArrow} width={24} height={24} alt="arrow" />}
          initial="hidden"
        />
      </div>
    </>
  )
}

export default App
