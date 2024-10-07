// "use client";

// import { getDashboardCourses } from "@/actions/get-dashboard-courses";
// import { CoursesList } from "@/components/courses-list";
// import { auth } from "@clerk/nextjs";
// import { CheckCircle, Clock } from "lucide-react";
// import { redirect, useRouter } from "next/navigation";
// import { InfoCard } from "./_components/info-card";
// import { currentUserId } from "@/lib/auth";
// import { useEffect, useState } from "react";
// import { CourseWithProgressWithCategory } from "@/types";
// import { useCurrentUserId } from "@/hooks/use-current-user-id";

// export default function Dashboard() {
//   const [completedCourses, setCompletedCourses] = useState<CourseWithProgressWithCategory[]>([]);
//   const [coursesInProgress, setCoursesInProgress] = useState<CourseWithProgressWithCategory[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const userId = useCurrentUserId();

  
//   useEffect(() => {
//     const fetchData = async() => {
//       if (!userId) {
//         router.push("/dashboard");
//         return;
//       }

//       try {
//         console.log(userId);

//         const {completedCourses, coursesInProgress} = await getDashboardCourses(userId);
//         console.log("Dashboard courses response2:", completedCourses, coursesInProgress);
//         setCompletedCourses(completedCourses);
//         setCoursesInProgress(coursesInProgress);
//         console.log("Dashboard courses response3:", completedCourses, coursesInProgress);
//       } catch (error) {
//         console.error("Error fetching dashboard courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [userId]);

//   if(!userId){
//     return redirect("/dashboard");
//   }

//   // const {completedCourses, coursesInProgress} = await getDashboardCourses(userId);

//   return (
//     <div className="p-6 space-y-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <InfoCard loading={loading} icon={Clock} label="In Progress" numberOfItems={coursesInProgress.length}  />
//           <InfoCard loading={loading} icon={CheckCircle} label="Completed" numberOfItems={completedCourses.length} variant="success" />
//         </div>
//         <CoursesList items={[...coursesInProgress, ...completedCourses]} />
//     </div>
//   );
// }
// ---------------------------------------------------
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";
import { auth } from "@clerk/nextjs";
import { CheckCircle, Clock } from "lucide-react";
import { redirect } from "next/navigation";
import { InfoCard } from "./_components/info-card";
import { currentUserId } from "@/lib/auth";

export default async function Dashboard() {
  const userId  = await currentUserId();

  if(!userId){
    return redirect("/dashboard");
  }

  const {completedCourses, coursesInProgress} = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard icon={Clock} label="In Progress" numberOfItems={coursesInProgress.length}  />
          <InfoCard icon={CheckCircle} label="Completed" numberOfItems={completedCourses.length} variant="success" />
        </div>
        <CoursesList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
// -------------------

// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { getDashboardCourses } from "@/actions/get-dashboard-courses";
// import { CoursesList } from "@/components/courses-list";
// import { CheckCircle, Clock } from "lucide-react";
// import { InfoCard } from "./_components/info-card";
// import { useCurrentUserId } from "@/hooks/use-current-user-id";
// // import { CourseWithProgressWithCategory } from "@/actions/get-dashboard-courses";
// import { getUserById } from "@/data/user";
// import { CourseWithProgressWithCategory } from "@/types";

// const Dashboard = () => {
//   const [completedCourses, setCompletedCourses] = useState<CourseWithProgressWithCategory[]>([]);
//   const [coursesInProgress, setCoursesInProgress] = useState<CourseWithProgressWithCategory[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const userId = useCurrentUserId();

//   useEffect(() => {
//     const fetchData = async() => {
//       if (!userId) {
//         router.push("/dashboard");
//         return;
//       }

//       try {
//         console.log(userId);
//         const {completedCourses, coursesInProgress} =  await getDashboardCourses(userId);
//         console.log("completedCourses :: ",completedCourses);
//         setCompletedCourses(completedCourses);
//         setCoursesInProgress(coursesInProgress);
//         console.log("Dashboard courses response:", completedCourses, coursesInProgress);
//       } catch (error) {
//         console.error("Error fetching dashboard courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [userId]); // Depend on userId to refetch if it changes

//   // if (loading) {
//   //   return <div>Loading...</div>; // You can replace this with a better loading UI
//   // }

//   return (
//     <div className="p-6 space-y-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <InfoCard loading={loading} icon={Clock} label="In Progress" numberOfItems={coursesInProgress.length} />
//         <InfoCard loading={loading} icon={CheckCircle} label="Completed" numberOfItems={completedCourses.length} variant="success" />
//       </div>
//       <CoursesList items={[...coursesInProgress, ...completedCourses]} />
//     </div>
//   );
// }

// export default Dashboard;
//-------------------------------------------------
// "use client";

// import { getDashboardCourses } from "@/actions/get-dashboard-courses";
// import { CoursesList } from "@/components/courses-list";
// import { auth } from "@clerk/nextjs";
// import { CheckCircle, Clock } from "lucide-react";
// import { redirect, useRouter } from "next/navigation";
// import { InfoCard } from "./_components/info-card";
// import { currentUserId } from "@/lib/auth";
// import { useEffect, useState } from "react";
// import { CourseWithProgressWithCategory, DashboardCourses } from "@/actions/get-dashboard-courses";
// import { useCurrentUserId } from "@/hooks/use-current-user-id";

// export default async function Dashboard() {
//   // const userId  = await currentUserId();

//   // if(!userId){
//   //   return redirect("/dashboard");
//   // }

//   // const {completedCourses, coursesInProgress} = await getDashboardCourses(userId);

//   const [completedCourses, setCompletedCourses] = useState<CourseWithProgressWithCategory[]>([]);
//   const [coursesInProgress, setCoursesInProgress] = useState<CourseWithProgressWithCategory[]>([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const userId = useCurrentUserId();

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!userId) {
//         router.push("/dashboard"); // Client-side redirection
//         return;
//       }

//       const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);
//       setCompletedCourses(completedCourses);
//       setCoursesInProgress(coursesInProgress);
//       setLoading(false);
//     }

//     fetchData();
//   }, [userId]);

//   if (loading) {
//     return <div>Loading...</div>; // You can replace this with a better loading UI
//   }

//   return (
//     <div className="p-6 space-y-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <InfoCard icon={Clock} label="In Progress" numberOfItems={coursesInProgress.length}  />
//           <InfoCard icon={CheckCircle} label="Completed" numberOfItems={completedCourses.length} variant="success" />
//         </div>
//         <CoursesList items={[...coursesInProgress, ...completedCourses]} />
//     </div>
//   );
// }
//- -----------------------------------------------------------------------
// import { currentUserId } from "@/lib/auth";
// import DashboardClient from "./_components/dashboard-client";
// import { redirect } from "next/navigation";

// export default async function DashboardPage() {
//     const userId = await currentUserId(); // Ensure this happens server-side

//     if (!userId) {
//       // Use Next.js redirect here; for example:
//       redirect("/login"); // Adjust based on your routes
//   }

//     // Pass data to the client component
//     return <DashboardClient userId={userId} />; 
// }