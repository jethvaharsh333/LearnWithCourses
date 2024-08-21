"use client";

// import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { isTeacher } from "@/lib/teacher";
import { useCurrentUserId } from "@/hooks/use-current-user-id";

import { UserButton } from "@/components/auth/user-button";

const NavbarRoutes = () => {
    // const { userId } = useAuth();
    const userId = useCurrentUserId();
    const pathnamer = usePathname();
    // console.log("pathname :: ",pathnamer);

    const isTeacherPage = pathnamer?.startsWith("/dashboard/teacher");
    const isCoursePage = pathnamer?.startsWith("/courses");
    const isSearchPage = pathnamer === "/dashboard/search";

    // console.log(isTeacherPage," :: ", isCoursePage);
    // console.log("value :: ",(isTeacherPage || isCoursePage));
    
    return (
        <>
            {isSearchPage && (
                <div className="hidden md:block">
                    <SearchInput/>
                </div>
            )}        
            <div className="flex gap-x-2 ml-auto">
                {(isTeacherPage || isCoursePage) ? (
                    <Link href="/dashboard">
                        <Button size="sm" variant="ghost"> 
                            <LogOut className="h-4 w-4 mr-2"/>
                            Exit
                        </Button>
                    </Link>
                ) : 
                // 1st -------------------------
                (
                    <Link href="/dashboard/teacher/courses">
                        <Button size="sm" variant="ghost">
                            Teacher Mode
                        </Button>
                    </Link>
                )
                // ------------------------------
                //2nd ---------------------------
                // isTeacher(userId) ? (
                //     <Link href="/teacher/courses">
                //         <Button size="sm" variant="ghost">
                //             Teacher Mode
                //         </Button>
                //     </Link>
                // ): null
                // ------------------------------
                }
                <UserButton/>
                {/* <UserButton afterSignOutUrl="/" /> */}
            </div>
        </>
    );
}
 
export default NavbarRoutes;