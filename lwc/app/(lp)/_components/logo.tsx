"use client";

import GradualSpacing from "@/components/magicui/gradual-spacing";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


const Logo = () => {
    return (
        <div className="h-full w-full flex justify-center overflow-hidden ">
            {/* <div className={cn("flex justify-center md:w-2/3 text-[32px] md:text-[28px] md:tracking-tight lg:w-1/2 lg:h-3/4 lg:text-[36px] xl:text-[55px] w-full", isImageVisible ? "hidden" : "visible")}> */}
                {/* <GradualSpacing
                    className={cn("font-display font-rocketwildness text-center  font-bold md:tracking-[-0.1em] tracking-[1px]  text-black dark:text-white leading-[5rem] md:leading-[5rem]")}
                    text="NEXEO"
                /> */}
            {/* </div> */}
            <Image
                src="/assets/LWC_LOGO.jpg"
                quality={100}
                alt="NEXEO"
                width={300}
                height={500}
                style={{ maxWidth: '100%', height: 'auto' }}
                className={cn("w-32 md:w-7/12 md:h-1/4 lg:h-1/2 xl:h-full md:scale-y-75 lg:scale-y-100  xl:scale-y-150 scale-x-150 md:scale-x-125 ")}
            />
        </div>
        
    )
}

export default Logo;    