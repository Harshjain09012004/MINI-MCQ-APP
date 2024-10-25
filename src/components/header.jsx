import React, { useState } from 'react'
import { MdOutlineMenuBook } from "react-icons/md";
import { BiSolidBookBookmark } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuVisibility, setmenuVisibility] = useState(false);

  return (
    <div className='w-[99%] h-16 bg-indigo-400 flex justify-between place-items-center rounded-lg px-10 z-20 sticky top-0'>
        <Link to={'/'}>
          <img src='../../public/logo.png' width={70} className='m-0 p-0'/>
        </Link>

        {menuVisibility ? 
        <MdOutlineMenuBook className='text-4xl cursor-pointer transition-all' onClick={()=>{
            setmenuVisibility(false);
        }}/> : <BiSolidBookBookmark className='text-4xl cursor-pointer transition-all' onClick={()=>{
            setmenuVisibility(true);
        }}/>}
    </div>
  )
}

export default Header;