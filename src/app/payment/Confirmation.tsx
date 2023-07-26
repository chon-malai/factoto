"use client"
import { FC } from "react"
import Lottie from "lottie-react";
import Successful from "./successful.json"
import { useAuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";


 const Confirmation: FC = () => {
    const { username } = useAuthContext();

    return(
        <>

        
        <div className="flex flex-col justify-center items-center">
            <nav className="flax justify-center items-center bg-[#0B0E0C] font-semibold text-white text-2xl w-full text-center py-6 border-b border-stone-700 top-0">
             <p>Factonation</p>
            </nav>
            <div className="bg-[#0B0E0C] w-full h-screen">
            <div className=" flex flex-col items-center pt-10 sm:pb-14 pb-6  text-white gap-5">
                <Lottie loop={false} animationData={Successful} className="sm:w-1/6 w-28" />
                <p className="sm:text-2xl text-xl">Hi {username!},</p> 
                <p className="text-white sm:text-5xl text-2xl font-semibold">Thanks for you Order!</p>              
            </div>
            <div className="flex sm:flex-row flex-col gap-5 sm:justify-center items-center">
                 <Link href="/dashboard"  className={cn(buttonVariants({ size: "xl", variant: "outline" })," flex justify-center items-center sm:w-60 w-40 h-8 rounded-lg lg:text-lg text-sm bg-primary-button text-white ")} >
                  Get start
                </Link>
                 <Link href="/"  className={cn(buttonVariants({ size: "xl", variant: "outline" })," flex justify-center items-center sm:w-60 w-40 h-8 rounded-lg lg:text-lg text-sm ")} >
                  Home
                </Link>
            </div>
          </div>
        </div>


        </>

    )


}

export default Confirmation

