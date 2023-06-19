"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Stats from "@/components/Stats";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-[80vh] bg-cover object-cover bg-no-repeat bg-[url('https://i.imgur.com/Dm3WkiB.png')] relative"></div>
      <div className="absolute top-0 w-[100%] ">
        <Navbar />
        <div className="text-center">
          <h1 className="lg:text-5xl sm:text-3xl text-3xl  text-center font-bold text-white md:text-4xl mt-10">
            Pixel MarketPlace
          </h1>
          <h2 className="text-white lg:text-2xl sm:text-1xl lg:mt-5 mt-3">
            Find best shop in this community
          </h2>
          <div className="mt-[8rem] ">
            <Stats />
          </div>
          <div className="mt-[4rem] bg-red-600 mx-auto w-[8rem] h-[2rem] rounded-lg items-center justify-center">
          <Link href="/buy" className="text-sm text-white font-semibold">Buy Ad</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#021625] flex justify-center  h-[100%] w-[100%] ">
        <div className="w-[1450px]">
          <div className="mx-auto mt-20 ">
          <div className="sm:ml-[7rem] ml-[2rem] md:ml-[0rem] lg:ml-0  ">

            <Card />
          </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <div className="absolute top-0 mt-[43rem]">
        <Image src="https://i.imgur.com/j9NBCCs.png" className="w-[4rem] h-[6rem]" width={50} height={100}/>
      </div>
      <div className="absolute top-0 mr-[16rem]  right-0 mt-[60rem]">
        <Image src="https://i.imgur.com/j9NBCCs.png" className="w-[4rem] h-[6rem]" width={50} height={100}/>
      </div>
      {/* <div className="absolute top-0 left-0 mr-[16rem] ml-[50%]  mt-[153rem]">
        <Image src="https://i.imgur.com/j9dUkpn.png" className="" width={2} height={2}/>
      </div> */}
    </>
  );
};

export default page;
