import React, { ChangeEvent } from 'react';
import Button from '../Button';
import Image from '../Image';
import SearchIcon from '@public/common/search-icon-white.png';

interface SearchProps {
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string
}

const Search = (props: SearchProps) => {
  const { handleSearchChange, searchValue } = props;
  return (
    <div className="relative flex h-fit items-center overflow-hidden rounded-xl border-2 border-solid border-navy-2 bg-background bg-none">
      <input
        type="text"
        autoComplete="off"
        placeholder={'Search'}
        className="ounded-xl h-[40px] w-full max-w-[464px]  bg-background py-3 pl-3 pr-[76px] font-sansFrancisco text-[14px] text-navy-1
           placeholder:text-navy-1 focus:outline-none lg:h-[56px] lg:text-[18px]  lg:leading-[24px]"
        onChange={handleSearchChange}
        value={searchValue}
      />

      <Button
        className={`btn -pt-2 absolute right-0 h-full max-w-[40px] border-0 lg:max-w-[56px] w-fit rounded-[10px] bg-[hsla(165,82%,51%,0.1)]`}
        rightIcon={
          <Image
            src={SearchIcon}
            width={24}
            height={24}
            alt="search"
            className="hover:scale-125"
          />
        }
        type="submit"
      />
    </div>
  );
};

export default Search;
