"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const Footer = () => {
    const pathname = usePathname();
    // const router = useRouter();

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.muted = false;
            } else {
                videoRef.current.muted = true;
            }
            setIsMuted(!isMuted);
        }
    };

    const NavLinks = [
        { id: 1, name: 'HOME', path: '/' },
        { id: 2, name: 'SERVICES', path: '/services' },
        { id: 3, name: 'ABOUT US', path: '/aboutus' },
        { id: 4, name: 'CONTACT US', path: '/contactus' },
    ];

    const isActive = (href: any) =>
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith('${href}/');

    // const onClick = () => {
    //     router.refresh();
    // };
    return (
        <div className="bg-slate-800 py-4 md:py-7 w-full  ">
            <div className="flex justify-center text-xl md:text-2xl text-white">
                NEXEO TECHNOLOGIES
            </div>
            <div className="mt-4 grid grid-cols-0 md:grid-cols-3 gap-y-5 md:gap-y-0 py-3 px-4 md:px-0 md:text-center text-white">
                <div className=" md:flex md:justify-center md:items-center box-border border-slate-200">
                    <ul className="flex flex-col gap-y-2">
                        <li className="text-xl md:mb-2">
                            <Link href="/">NAVIGATION LINKS</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="/" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">HOME</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="/services" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">SERVICES</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="/aboutus" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">ABOUT US</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="/contactus" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
                <div className="md:box-border md:flex justify-center items-center md:border-l-2 md:border-r-2 border-slate-200">
                    <ul className="flex flex-col gap-y-2">
                        <li className="text-xl md:mb-2">
                            <Link href="/">SOCIAL LINKS</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="https://www.linkedin.com/company/nexeo-technologies/" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">LINKEDIN</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="https://www.instagram.com/nexeotechnologies?igsh=MTIxMHJrYnQ5ZXh5OQ==" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">INSTAGRAM</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="/" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">GITHUB</Link>
                        </li>
                        <li className="ps-5 md:ps-0 text-base md:flex justify-center">
                            <Link href="/" className="relative w-fit  block after:block after:content-[''] after:absolute after:h-[2px] leading-none after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left delay-150">TWITTER</Link>
                        </li>
                    </ul>
                </div>
                <div className="px-2 md:px-8 lg:px-14 xl:px-20 ">
                    <div className=" md:h-[150px] lg:h-[170px] xl:h-[170px]  rounded-lg flex justify-center items-center w-full ">
                        <video src={"/assets/videos/nexeovideo.mp4"} ref={videoRef} onClick={handleVideoClick} className="h-auto rounded-lg" autoPlay muted loop playsInline />
                    </div>
                </div>

            </div>
            <div className="mt-3 px-6 text-xs text-white text-center">
                &copy; 2024 &#183; NEXEO &#183; ALL RIGHT RESERVED &#183; PRIVACY POLICY &#183; TERMS OF SERVICE
            </div>
        </div>
    )
}

export default Footer;