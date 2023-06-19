import React from 'react'

const Footer = () => {
  return (
    <div>
      
<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pixel Mp</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Discord</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Telegram</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Want slot?</h2>
                  <ul className="text-gray-600 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Price</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Buy/Redeem</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Stats</h2>
                  <ul class="text-gray-600 dark:text-gray-400 font-medium">
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