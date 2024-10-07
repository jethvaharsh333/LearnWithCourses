// // "use client";
// import { getDashboardCourses } from "@/actions/get-dashboard-courses";
// import { IconBadge } from "@/components/icon-badge"
// import { currentUserId } from "@/lib/auth";
// import { LucideIcon } from "lucide-react";
// import { redirect } from "next/navigation";
// import { Suspense } from "react";

// interface InfoCardProps{
//     numberOfItems: number;
//     variant?: "default" | "success";
//     label: string;
//     icon: LucideIcon;
//     loading: boolean;
// }

// async function ProductListLoader() {
//     // const products = await get();
//     const userId = await currentUserId();

//     if(!userId){
//         return redirect("/dashboard");
//     }

//     const {completedCourses, coursesInProgress} = await getDashboardCourses(userId);

//     return <p className="text-gray-500 text-sm">
//         {completedCourses.length} {completedCourses.length === 1 ? "Course" : "Courses"}
//     </p>;
// }

// export const InfoCard = ({
//     variant,
//     icon: Icon,
//     label,
//     numberOfItems,
//     loading
// }: InfoCardProps) => {

//     return(
//         <div className="border rounded-md flex items-center gap-x-2 p-3">
//             <IconBadge variant={variant} icon={Icon} />
//             <div>
//                 <p className="font-medium">
//                     {label}
//                 </p>
//                 {
//                 loading==true
//                 ?
//                     <Suspense fallback={<p className="font-extrabold">Loading</p>}>
//                         <p>Akagami no shamks</p>
//                     </Suspense>
//                 :
//                     <p className="text-gray-500 text-sm">
//                         {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
//                     </p>
//                 }
//             </div>
//         </div>
//     )
// }

import { IconBadge } from "@/components/icon-badge"
import { LucideIcon } from "lucide-react";

interface InfoCardProps{
    numberOfItems: number;
    variant?: "default" | "success";
    label: string;
    icon: LucideIcon;
}

export const InfoCard = ({
    variant,
    icon: Icon,
    label,
    numberOfItems
}: InfoCardProps) => {
    return(
        <div className="border rounded-md flex items-center gap-x-2 p-3">
            <IconBadge variant={variant} icon={Icon} />
            <div>
                <p className="font-medium">
                    {label}
                </p>
                <p className="text-gray-500 text-sm">
                    {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
                </p>
            </div>
        </div>
    )
}