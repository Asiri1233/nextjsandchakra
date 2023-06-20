import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pixel Mp</span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/" className="hover:underline">Discord</Link>
                      </li>
                      <li>
                          <Link href="/" className="hover:underline">Telegram</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Want slot?</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href="/buy" className="hover:underline ">Price</Link>
                      </li>
                      <li>
                          <Link href="/buy" className="hover:underline">Buy/Redeem</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Stats</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Statics</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Vouches</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      
    </div>
</footer>

    </div>
  )
}

export default Footer