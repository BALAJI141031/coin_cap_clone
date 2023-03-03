import React, { useState, useRef, useEffect } from 'react';
import HeaderLink from './HeaderLink';
import Image from 'next/image';
import DropDown from './DropDown';
import { AiFillSetting } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
const linkTexts = ['Coins', 'Exchanges', 'Swap'];
const Header = () => {
  const [searchbar, setSearchBar] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearchBar = () => {
    if (searchbar) return;
    setSearchBar(true);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchbar]);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside of the div
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setSearchBar(false);
      }
    };

    // Add event listener to the document object
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [divRef]);
  return (
    <div className='flex h-[60px] items-center justify-between pl-2 pr-2'>
      <div className='flex'>
        {linkTexts.map((text, i) => (
          <HeaderLink text={text} path='/' key={i} />
        ))}
      </div>

      <HeaderLink
        path='/'
        text={
          <Image
            src={'https://coincap.io/static/logos/black.svg'}
            alt='logo'
            height={30}
            width={80}
          />
        }
      />
      <div className='flex items-center'>
        <DropDown />
        <DropDown />
        <div
          className={`${searchbar ? 'border border-1' : ''} flex items-center`}
          ref={divRef}
        >
          {searchbar && (
            <input ref={inputRef} type='text' className=' outline-none' />
          )}
          <HiOutlineSearch
            className='ml-1 mr-1 cursor-pointer'
            onClick={handleSearchBar}
          />
        </div>
        <AiFillSetting />
      </div>
    </div>
  );
};

export default Header;
