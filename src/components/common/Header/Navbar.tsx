// import { MobileContext } from '@/contexts/MobileProvider'
import Logo from 'public/images/logo-papagroup.png'
import { IOptions } from '@/types'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { SingleValue } from 'react-select'
import Image from '../Image'
import LanguageSwitcher from '../LanguageSwitcher'
import styles from '@/styles/Navbar.module.css'
import useTranslation from '@/hooks/useTranslation'
import VerticalLine from 'public/images/verticalLine.png'

const routes = [
  {
    name: 'home',
    pathNames: ['/'],
    path: '/',
  },
  {
    name: 'services',
    pathNames: ['/services', '/dich-vu'],
    path: '/services',
  },
  {
    name: 'projects',
    pathNames: ['/projects', '/du-an'],
    path: '/projects',
  },
  {
    name: 'blog',
    pathNames: ['/blog'],
    path: '/blog',
  },
  {
    name: 'careers',
    pathNames: ['/careers', '/tuyen-dung'],
    path: '/careers',
  },
  {
    name: '',
    pathNames: [''],
    path: '/bookProject',
  },
]

export default function Navbar() {
  // const [currentPosition, setCurrentPosition] = React.useState(10)

  const router = useRouter()

  // const mobileContext = React.useContext(MobileContext)
  // const isMobile = mobileContext?.isMobile

  const translate = useTranslation()

  // const drawerRef = React.useRef<DrawerRef>(null)

  const handleOptionChange = (value: SingleValue<IOptions>) => {
    // console.log(value)
  }

  // React.useEffect(() => {
  //   if (isOpen && isMobile) document.body.style.overflow = 'hidden'
  //   else document.body.style.overflow = 'unset'
  // }, [isOpen, isMobile])

  return (
    <header
      className={classNames(
        'container font-montserrat sticky left-0 right-0 top-0 z-[1000] bg-navy-5 transition-all duration-500 '
      )}
    >
      <div
        className={classNames(
          'relative flex h-14 items-center justify-center md:h-[84px] lg:justify-between'
        )}
      >
        {/* <a href="#" className="group text-sky-600 transition duration-300">
          Link
          
        </a> */}
        <Link href="/" passHref>
          <a className="relative h-[38px] w-[82px] md:h-[48px] md:w-[106px]">
            <Image src={Logo} alt="Vercel Logo" layout="fill" priority />
          </a>
        </Link>
        <ul
          className={`
          relative hidden items-start space-x-0 space-y-10 lg:flex lg:items-center lg:space-x-[2.25rem] lg:space-y-0 2xl:space-x-8 3xl:space-x-[60px]
        `}
        >
          {routes.map((x) => {
            return (
              <li
                onClick={() => {
                  router.push(x.path)
                  // setIsOpen(false)
                }}
                key={x.path}
                className={`group relative cursor-pointer font-montserratFontwight6 text-lg font-bold uppercase leading-[24px] tracking-wider transition duration-300 lg:text-base lg:leading-5 xl:text-[18px] xl:leading-[22px] ${
                  router.asPath === x.path ||
                  (x.path !== '/' && x.pathNames.some((path) => router.asPath.includes(path)))
                    ? 'text-active'
                    : 'text-[#B7B7C4]'
                }`}
              >
                {x.name}
                <span className="block h-1 max-w-0 bg-active transition-all duration-700 group-hover:max-w-full"></span>
              </li>
            )
          })}
        </ul>
        <div className="flex relative">
          <button
            className="group h-[49px] relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-[#1de9b6] px-6 py-3 font-medium transition-all"
          >
            <span className="absolute right-0 top-0 inline-block h-4 w-4 rounded bg-[#118669] transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-lg bg-[#118669] transition-all delay-200 duration-500 ease-in-out group-hover:mb-[49px] group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-[#0F103C] transition-colors duration-200 ease-in-out group-hover:text-[#0F103C]">
              Contact sale
            </span>
          </button>
          <div className="mx-6">
            <Image src={VerticalLine} alt="verticalLine" />
          </div>
          <div className="">
            <LanguageSwitcher />
          </div>

          
          {/* <LanguageSwitcher /> */}
        </div>
      </div>
    </header>
  )
}
