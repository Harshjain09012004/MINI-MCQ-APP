import React, { useState } from 'react'
import Header from '../components/header'
import MCQ from '../components/mcq';
import { PiShootingStarDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom';

export const Home = () => {
  const [start, setstart] = useState(false);
  return (
    <div className='relative h-screen w-screen '>
      <Header/>
      <div className='w-[70%] h-[70%] bg-white rounded-3xl border border-blue-400 shadow-md shadow-blue-800 mt-20 ml-60 text-black flex flex-col place-items-center justify-evenly gap-8 p-10 hover:scale-105 transition-all hover:shadow-blue-600 hover:border-blue-600'>
        <p className='text-6xl font-semibold text-blue-900 text-center'>Are You Excited 🔥?</p>

        <p className='text-6xl font-semibold text-sky-900 text-center'>To Start A New Challenge 🎯</p>

        <Link className='flex gap-10 place-items-center border border-blue p-4 px-12 rounded-full shadow-md shadow-blue-300 hover:scale-105 hover:border-blue-500 transition-all cursor-pointer' to={'/Quiz'}>
          <p className='text-5xl font-semibold text-sky-700'>Get Started</p>
          <PiShootingStarDuotone className='text-sky-700 text-5xl'/>
        </Link>
      </div>
    </div>
  )
}
