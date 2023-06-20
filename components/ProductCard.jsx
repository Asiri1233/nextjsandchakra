import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="w-[280px] h-[230px] md:w-[320px] md:h-[280px] hover:scale-105 duration-300 flex flex-col shadow-md border border-white rounded-lg items-center justify-center glass ">
        <h1 className="font-bold text-2xl">1 Week</h1>
        <h2 className="font-bold text-3xl flex items-center gap-2 text-white">
          30$ <span className="text-sm text-gray-200">/per week</span>
        </h2>

        <div className="flex flex-row gap-2 mt-5">
          <button
              data-sellix-group="6490daed91e6a"
            type="submit"
            alt="Buy Now with sellix.io"
            class="text-white bg-purple-600 hover:bg-purple-900/90   focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <img
              itemprop="image"
              className="w-5 h-5 mr-2"
              src="https://avatars.githubusercontent.com/u/66204773?s=200&amp;v=4"
              width="100"
              height="100"
              alt="@Sellix"
            />
            Pay with Sellix
          </button>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
          >
            <img
              itemprop="image"
              className="w-5 h-5 mr-2"
              src="https://freelogopng.com/images/all_img/1683045226telegram-logo-black.png"
              width="100"
              height="100"
              alt="@Sellix"
            />
            Dm on Telegram
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
