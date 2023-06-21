import Link from 'next/link';
import React from 'react';

interface Links {
  title?: string;
  path?: string;
}

interface Props {
  links: Links[];
}

const BreadCrumbs = React.memo((props: Props) => {
  const { links } = props;

  return (
    <nav
      className="flex font-sansFrancisco text-lg font-normal leading-6 tracking-[0.03em] text-[#F8F8F8]"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <div className="flex items-center">
            <Link
              href="/"
              className=""
            >
              Home
            </Link>
          </div>
        </li>
        {links.map((link: Links, index: number) => (
          <Link href={link.path ? String(link.path) : ""} key={index}>
            <li aria-current="page">
              <div className={`flex items-center ${link.path ? 'hover:cursor-pointer' : 'hover:cursor-default'}`}>
                <svg
                  aria-hidden="true"
                  className="text-gray-400 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={`${link.path ? 'text-[#F8F8F8]' : 'text-[#1DE9B6]'} md:ml-2`}>
                  {link.title}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ol>
    </nav>
  );
});

BreadCrumbs.displayName = 'BreadCrumbs'

export default BreadCrumbs;
