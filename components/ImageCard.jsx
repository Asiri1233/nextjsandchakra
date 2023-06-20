import { Divider } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'


const ImageCard = ({image,i}) => {
  return (
    <div key={i} className=''>
    <div className="mb-5">
        <div className="card w-[21rem] md:w-96 h-[35rem] glass flex">
          <figure>
            <div
              className="w-[100%] h-[13rem] bg-cover bg-center bg-no-repeat hover:scale-110 duration-300 cursor-pointer"
              style={{ backgroundImage: `url(${image})` }}
            />
          </figure>
          <div className="card-body">
          <div className='flex gap-2'>

          <img className="w-[55px] h-[55px] rounded-full " src="https://i.ibb.co/vLMmrGq/DUCKMARKET.gif" alt="Rounded avatar" />
            <h2 className="card-title text-white font-bold">Life hack</h2>
          </div>
          <Divider />
            <div>
              <p className='text-white font-sans font-[1xl]'> Gift Cards, Accounts, and Refund Services.</p>

              <p className='text-white font-sans font-[1xl]'>💸 Everything HQ</p>
              <p className='text-white font-sans font-[1xl]'>🚀 Fast Support</p>
              <p className='text-white font-sans font-[1xl]'>🌟 Vouched</p>
              <p className='text-white font-sans font-[1xl]'>🛍 Rewards & Giveaways</p>

              <p className='text-white font-sans font-[1xl]'>
                <strong>💎 Autoshop: Chillbrosmarket.com</strong>
              </p>
              <p className='text-white font-sans font-[1xl]'>✔️ Vouches: t.me/ChillbroIGotVouches</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join now!</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ImageCard