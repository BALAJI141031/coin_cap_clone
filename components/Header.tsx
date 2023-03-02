import React from 'react'
import HeaderLink from './HeaderLink'
import Image from 'next/image'
import DropDown from './DropDown'
import { AiFillSetting } from "react-icons/ai";
const linkTexts=['Coins','Exchanges','Swap']
const Header = () => {
    return (
      <div className='flex h-[60px] items-center justify-between'>
      <div className='flex'>
          {
              linkTexts.map((text, i) => <HeaderLink text={text} path='/' key={i} />)
              
          }
    </div>

    <HeaderLink path='/' text={<Image src={'https://coincap.io/static/logos/black.svg'} alt='logo' height={30} width={80} />} />
            <div className='flex items-center'><DropDown />
                <DropDown />
                <div>
                    <input />
                    
                </div>
                <AiFillSetting/>
            </div>
      </div>
  )
}

export default Header