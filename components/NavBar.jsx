import Link from "next/link";

import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row md:justify-between  sm:p-10 lg:p-11 items-center " >
        <div>
          <h2 className="text-2xl text-white font-semibold hidden md:flex">Logo</h2>
        </div>
        
        <div className="mx-[8.5rem] md:mx-[0rem]">
          <Link className="font-semibold text-white" href="/buy">Buy/Redeem</Link>
          <a className="font-semibold ml-2  text-white" href="https://telegram.com/pixel" target="_blank">Telegram</a>
          <Link className="font-semibold ml-2  text-white" href="/pricing">Pricing</Link>
          <a className="font-semibold ml-2  text-white" href="https://telegram.com/pixel" target="_blank">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar