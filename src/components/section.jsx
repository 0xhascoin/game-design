import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FaHackerrank } from 'react-icons/fa';
import { RiTreasureMapFill } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';
import { SlSocialInstagram, SlSocialSpotify } from 'react-icons/sl';
const BG_IMAGE = "https://cdn.midjourney.com/50f2e3bf-5257-4366-8a2d-56d0842fe6d5/0_0.png"

const Section = () => {
  return (
    <div 
    className='h-[65vh] bg-cover bg-center py-10 pt-4 relative'
    style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
        {/* Menu */}
        <div className=" p-2 m-auto w-10/12 bg-transparent flex justify-center">
            <button className='border border-violet-700 text-white p-4 px-5 rounded-full mr-4 bg-violet-400 hover:bg-violet-500 transition-all'>
                <RiTreasureMapFill className='text-lg' />
            </button>
            <button className='border border-rose-700 p-4 px-5 rounded-full mr-4 text-white bg-rose-400 hover:bg-rose-500 transition-all'>
                <FaHackerrank className='text-lg' />
            </button>
            <button className='border border-yellow-700 p-4 px-5 rounded-full mr-4 text-white bg-yellow-400 hover:bg-yellow-500 transition-all'>
                <AiOutlineMenu className='text-lg' />
            </button>
        </div>
        {/* User profile & XP */}
        <div className="mt-10 flex items-center pl-10">
            <div className="border border-white h-20 w-20 rounded-full bg-rose-400 mr-4">
            <img src="https://cdn.midjourney.com/b3f1961b-3e4a-4cfa-81ea-2e377e1d6b67/grid_0.png" className='rounded-full' alt="" />
            </div>
            <div>
                <h1 className="text-white text-2xl">
                    Hascoin
                </h1>
                <p className='text-white'>Address</p>
            </div>
        </div>
        {/* Mission details */}
        <div className=' mt-10 w-3/5 pl-4'>
            <h1 className="text-white">Lorem ipsum dolor sit amet.</h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi aspernatur similique unde esse? Sint.</p>
            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus. Consectetur quo aut voluptas totam quam, ipsam nisi sit deleniti a suscipit, alias cumque neque placeat facilis magnam eos minima dolorum, deserunt quisquam. Quis ut deserunt, alias libero dolor natus?</p>
            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus. Consectetur quo aut voluptas totam quam, ipsam nisi sit deleniti a suscipit, alias cumque neque placeat facilis magnam eos minima dolorum, deserunt quisquam. Quis ut deserunt, alias libero dolor natus?</p>
        </div>
        <div className="flex items-center text-white mt-6 text-2xl pl-4">
            <BsTwitter className='mr-4' />
            <SlSocialInstagram className='mr-4' />
            <SlSocialSpotify />
        </div>

        <div className=' absolute bottom-10 flex justify-center left-[40%] w-48'>
            <button>
                Check post
            </button>
        </div>
    </div>
  )
}

export default Section