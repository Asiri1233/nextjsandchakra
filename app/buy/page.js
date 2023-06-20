"use client";
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import Stepper from "@/components/Stepper";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const number = [1,2,3]

const page = () => (
  <div className="w-[100%] md:h-[100vh]  bg-[#021625]">
    <div className="relative">
      <NavBar background="[#021625]" />
    </div>
    <div className="flex items-center md:mt-[8rem] mt-[3rem] sm:mt-[4rem] justify-center md:mb-[3rem] mb-[4rem] ">
     <Stepper />
     
    </div>
   
    <div className="flex ml-[3rem] md:ml-[0rem] sm:ml-[11rem]  flex-col md:flex-row justify-center gap-6 md:mt-[10rem] ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <div className="flex items-center justify-center mr-[5rem] md:mr-[0] mt-[5rem]">
      <Link href="/form" 
        className="w-[8rem] flex items-center justify-center h-[3rem] bg-red text-white border border-white rounded-lg ml-[5rem] hover:bg-blue-100 hover:text-black duration-200"
      >
        Fill the form
      </Link>
    </div>

    </div>
);

export default page;
