import React from 'react';
import LogoFooter from '/public/images/logo-footer.png';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';
import IconYoutube from '/public/Footer/youtube.png';
import IconFacebook from '/public/Footer/facebook.png';
import IconLinkedin from '/public/Footer/linkedin.png';

const Footer = React.memo(() => {
  return (
    <footer className={`${styles.container}`}>
      <div
        className={`container grid grid-cols-4 grid-rows-1 gap-4 py-[64px] ${styles.displayNonePc}`}
      >
        <div>
          <Link href="/">
            <a className="relative mx-auto block h-[72px] w-[160px] text-center md:mx-0 md:h-9 md:w-20 md:text-left lg:h-[47px] lg:w-[105px] xl:h-16 xl:w-[140px] 2xl:h-[67px] 2xl:w-[148px] 3xl:h-[90px] 3xl:w-[198px]">
              <Image
                src={LogoFooter}
                alt="Fail"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>

        <div className="relative">
          <p className="font-montserratRegular text-lg font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
            ADDRESS
          </p>
          <div className="mt-[25px] font-sansFrancisco text-lg font-normal leading-6 tracking-[0.03em] text-[#B7B7C4]">
            <p>6th floor, 23 Truong Thi 1,</p>
            <p>Thanh Khe District, Da Nang</p>
            <p className="mt-4">5th floor, 205B Hoang Hoa Tham,</p>
            <p>ard 6, Binh Thanh District, HCMC</p>
          </div>
          <div className="absolute bottom-0 text-base font-semibold leading-5 tracking-wider text-[#5D70AB]">
            Privacy Policy
          </div>
        </div>

        <div>
          <p className="font-montserratRegular text-lg font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
            CONTACT
          </p>
          <div className="mt-[25px] font-sansFrancisco text-lg font-normal leading-6 tracking-[0.03em] text-[#B7B7C4]">
            <p>Phone: +84 983 572 354</p>
            <p>Email: contact@papagroup.net</p>
          </div>
          <div className="mt-[61px]">
            <p className="font-montserratRegular text-lg font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
              WORKING HOURS
            </p>
            <div className="mt-[25px] font-sansFrancisco text-lg font-normal leading-6 tracking-[0.03em] text-[#B7B7C4]">
              <p>8:30 – 17:30M</p>
              <p>Monday – Friday</p>
            </div>
          </div>
          <div className="mt-[53px] text-base font-semibold leading-5 tracking-wider text-[#5D70AB]">{`Terms & Conditions`}</div>
        </div>

        <div className="relative">
          <p className="font-montserratRegular text-lg font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
            FIND US
          </p>
          <div className="mt-[25px] flex">
            <a
              href="https://www.facebook.com/PapagroupTechnology"
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
            >
              <Image
                src={IconFacebook}
                alt="Facebook Logo"
                layout="fill"
                objectFit="cover"
              />
            </a>

            <a
              href="https://linkedin.com/company/papagroup-technology"
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
            >
              <Image
                src={IconLinkedin}
                alt="Linkedin Logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCTs6lLhO5Dwzkm3ioRVOgcA/"
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
            >
              <Image
                src={IconYoutube}
                alt="Youtube Logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <div className="absolute bottom-0 text-base font-semibold leading-5 tracking-wider text-[#B7B7C4]">
              Copyright © 2018 Papagroup.
            </div>
          </div>
        </div>
      </div>
      {/* ------------------Tablet------------------------------------------ */}
      <div
        className={`container grid  grid-cols-4 grid-rows-1 gap-4 pt-[45px] ${styles.displayNoneTablet} ${styles.displayNoneTablets}`}
      >
        <div className="relative">
          <p className="font-montserratRegular text-sm font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
            ADDRESS
          </p>
          <div className="mt-[25px] font-sansFrancisco text-xs font-normal leading-[14.32px] tracking-[0.03em] text-[#B7B7C4]">
            <p>6th floor, 23 Truong Thi 1,</p>
            <p>Thanh Khe District, Da Nang</p>
            <p className="mt-4">5th floor, 205B Hoang Hoa Tham,</p>
            <p>ard 6, Binh Thanh District, HCMC</p>
          </div>
          <div className="pt-20">
            <Link href="/">
              <a className="relative mx-auto block h-[72px] w-[160px] text-center md:mx-0 md:h-9 md:w-20 md:text-left lg:h-[47px] lg:w-[105px] xl:h-16 xl:w-[140px] 2xl:h-[67px] 2xl:w-[148px] 3xl:h-[90px] 3xl:w-[198px]">
                <Image
                  src={LogoFooter}
                  alt="Fail"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          </div>
        </div>

        <div>
          <p className="font-montserratRegular  text-sm font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
            CONTACT
          </p>
          <div className="mt-[25px] font-sansFrancisco text-xs font-normal leading-[14.32px] tracking-[0.03em] text-[#B7B7C4]">
            <p>Phone: +84 983 572 354</p>
            <p>Email: contact@papagroup.net</p>
          </div>
        </div>

        <div className="">
          <p className="font-montserratRegular text-sm font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
            WORKING HOURS
          </p>
          <div className="mt-[25px] font-sansFrancisco text-xs font-normal leading-[14.32px] tracking-[0.03em] text-[#B7B7C4]">
            <p>8:30 – 17:30M</p>
            <p>Monday – Friday</p>
          </div>
        </div>

        <div className="relative">
          <p className="font-montserratRegular text-sm font-semibold leading-[22px] tracking-wider text-[#1DE9B6]">
            FIND US
          </p>
          <div className="mt-[25px] flex">
            <a
              href="https://www.facebook.com/PapagroupTechnology"
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
            >
              <Image
                src={IconFacebook}
                alt="Facebook Logo"
                layout="fill"
                objectFit="cover"
              />
            </a>

            <a
              href="https://linkedin.com/company/papagroup-technology"
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
            >
              <Image
                src={IconLinkedin}
                alt="Linkedin Logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCTs6lLhO5Dwzkm3ioRVOgcA/"
              target="_blank"
              rel="noreferrer"
              className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
            >
              <Image
                src={IconYoutube}
                alt="Youtube Logo"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`container grid  grid-cols-4 grid-rows-1 gap-4 py-[20px] ${styles.displayNoneTablet} ${styles.displayNoneTablets}`}
      >
        <div className="">
          <div className="">
            <div className=" text-sm font-normal leading-5 tracking-wider text-[#B7B7C4]">{`Copyright © 2018 Papagroup.`}</div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className=" text-sm font-normal leading-5 tracking-wider text-[#5D70AB]">{`Privacy Policy`}</div>
          </div>
        </div>
        <div className="">
          <div className=" text-sm font-normal leading-5 tracking-wider text-[#5D70AB]">{`Terms & Conditions`}</div>
        </div>
      </div>
      {/* ----------------------Mobile-768------- */}
      <div className={`${styles.displayNoneMobile}`}>
        <div className=" pt-20">
          <Link href="/">
            <a className=" relative mx-auto block h-[72px] w-[160px] text-center md:mx-0 md:h-9 md:w-20 md:text-left lg:h-[47px] lg:w-[105px] xl:h-16 xl:w-[140px] 2xl:h-[67px] 2xl:w-[148px] 3xl:h-[90px] 3xl:w-[198px]">
              <Image
                src={LogoFooter}
                alt="Fail"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
        <div className={` pl-4`}>
          <div className="relative pt-12">
            <p className="font-montserratRegular text-lg font-bold leading-[22px] tracking-wider text-[#1DE9B6]">
              ADDRESS
            </p>
            <div className="mt-[18px] font-sansFrancisco text-sm font-normal leading-4 tracking-[0.03em] text-[#B7B7C4]">
              <p>6th floor, 23 Truong Thi 1,</p>
              <p>Thanh Khe District, Da Nang</p>
              <p className="mt-4">5th floor, 205B Hoang Hoa Tham,</p>
              <p>ard 6, Binh Thanh District, HCMC</p>
            </div>
          </div>

          <div className="pt-12">
            <p className="font-montserratRegular text-lg font-bold leading-[22px] tracking-wider text-[#1DE9B6]">
              CONTACT
            </p>
            <div className="mt-[18px] font-sansFrancisco text-sm font-normal leading-4 tracking-[0.03em] text-[#B7B7C4]">
              <p>Phone: +84 983 572 354</p>
              <p>Email: contact@papagroup.net</p>
            </div>
          </div>
          <div className=" pt-12">
            <p className="font-montserratRegular text-lg font-bold leading-[22px] tracking-wider text-[#1DE9B6]">
              WORKING HOURS
            </p>
            <div className="mt-[18px] font-sansFrancisco text-sm font-normal leading-4 tracking-[0.03em] text-[#B7B7C4]">
              <p>8:30 – 17:30M</p>
              <p>Monday – Friday</p>
            </div>
          </div>

          <div className="relative pt-12">
            <p className="font-montserratRegular text-lg font-bold leading-[22px] tracking-wider text-[#1DE9B6]">
              FIND US
            </p>
            <div className="mt-[18px] flex">
              <a
                href="https://www.facebook.com/PapagroupTechnology"
                target="_blank"
                rel="noreferrer"
                className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
              >
                <Image
                  src={IconFacebook}
                  alt="Facebook Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </a>

              <a
                href="https://linkedin.com/company/papagroup-technology"
                target="_blank"
                rel="noreferrer"
                className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
              >
                <Image
                  src={IconLinkedin}
                  alt="Linkedin Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCTs6lLhO5Dwzkm3ioRVOgcA/"
                target="_blank"
                rel="noreferrer"
                className="relative h-12 w-12 md:h-[30px] md:w-[30px] xl:h-10 xl:w-10 2xl:h-[42px] 2xl:w-[42px] 3xl:h-14 3xl:w-14"
              >
                <Image
                  src={IconYoutube}
                  alt="Youtube Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </div>
            <div className="flex gap-12 pt-[30px]">
              <div className=" text-base font-semibold leading-5 tracking-wider text-[#5D70AB]">
                Privacy Policy
              </div>
              <div className=" text-base font-semibold leading-5 tracking-wider text-[#5D70AB]">{`Terms & Conditions`}</div>
            </div>
            <div className=" pb-[40px] pt-[20px] text-base font-semibold leading-5 tracking-wider text-[#B7B7C4]">
              Copyright © 2018 Papagroup.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
