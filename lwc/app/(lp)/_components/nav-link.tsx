"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const NavLink = () => {
    const pathname = usePathname();
    const router = useRouter();
    // const isActive = (href: any) => pathname.valueOf.name === href;
    // const isActive = (path: string) => path === pathname;

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

    return (
        <div className="flex md:flex-row w-full justify-center font-light lg:pe-9 flex-col pt-10 md:pt-0">
            <div className="md:hidden h-[50px] mb-24">
                <Image
                    src="/assets/logonexeo.png"
                    quality={100}
                    alt="NEXEO"
                    width={500}
                    height={300}
                    style={{ maxWidth: '100%', height: 'auto' }}
                    className="h-[56px]"
                />
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <ul className="flex flex-col  self-center justify-center items-center md:flex-row gap-y-5 gap-x-10 lg:gap-x-16  lg:text-lg xl:text-[20px] text-slate-800 text-lg font-extralight">
                    {NavLinks.map((link) => {
                        return (
                            <li key={link.id} className={cn(isActive(link.path) && "text-white bg-slate-900 rounded-md py-1.5 px-3.5 transition text-lg md:text-base xl:text-xl duration-600 ease-in delay-200 font-extralight")}>
                                <Link href={link.path}>{link.name} </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div>
                <LoginButton>
                    <Button size="lg">
                        Sign in
                    </Button>
                </LoginButton>
            </div>
        </div>
    )
}

export default NavLink;