"use client";
import Card from "@/components/Card";
import Navbar from "@/components/NavBar";
import Stats from "@/components/Stats";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
//https://i.imgur.com/Dm3WkiB.png
//https://i.imgur.com/2wIhf35.jpeg
//https://i.imgur.com/n0Yh6ks.jpeg compressed
const page = () => {
  return (
    <>
      <div className="h-[80vh] bg-cover object-cover bg-no-repeat bg-[url('https://i.imgur.com/n0Yh6ks.jpeg')] relative"></div>
      <div className="absolute top-0 w-[100%] ">
        <Navbar />
        <div className="text-center">
          <h1 className="lg:text-5xl sm:text-3xl text-3xl  text-center font-bold text-white md:text-4xl mt-16 ">
            Pixel MarketPlace
          </h1>
          <h2 className="text-white lg:text-2xl sm:text-1xl lg:mt-5 mt-3 font-poppins">
            Find best shop in this community
          </h2>
          <div className="mt-[8rem] ">
            <Stats />
          </div>
          <div  className="mt-[4rem] bg-red-600 mx-auto w-[8rem] h-[2rem] rounded-lg items-center justify-center hover:scale-110 duration-300">
          <Link href="/buy" className="text-sm text-white font-semibold">Buy Ad</Link>
          </div>
        </div>
      </div>
      <div className="bg-[#021625] flex justify-center  h-[100%] w-[100%] ">
        <div className="w-[1450px]">
          <div className="mx-auto mt-20 ">
          <div className="sm:ml-[7rem] ml-[1.5rem] md:ml-[0rem] lg:ml-0  mb-[3rem]">

            <Card />
          </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
      <div className="absolute top-0 ml-[11rem] z-0 mt-[83.5rem]">
        <Image src=" https://i.imgur.com/MJBP39h.png" className="h-[5rem] w-[5rem] " width={50} height={160} alt="svg icons"/>
      </div>
      <div className="absolute top-0 mr-[]  right-0 mt-[45rem]">
        <Image src="https://i.imgur.com/j9NBCCs.png"  width={50} height={100} alt="svg icons"/>
      </div>
     
    </>
  );
};

export default page;
