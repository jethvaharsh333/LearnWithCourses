"use client"; // Make this a client component

import { useEffect, useState } from "react";
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
// import { InfoCard } from "@/components/info-card";

import { InfoCard } from "./info-card";
import { CheckCircle, Clock } from "lucide-react";
import { CourseWithProgressWithCategory } from "@/types";

export default function DashboardClient({ userId }: { userId: string }) {
    const [completedCourses, setCompletedCourses] = useState<CourseWithProgressWithCategory[]>([]);
    const [coursesInProgress, setCoursesInProgress] = useState<CourseWithProgressWithCategory[]>([]);

    useEffect(() => {
        async function fetchData() {
            const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);
            setCompletedCourses(completedCourses);
            setCoursesInProgress(coursesInProgress);
        }

        fetchData();
    }, [userId]);

    return (
        <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard icon={Clock} label="In Progress" numberOfItems={coursesInProgress.length} />
                <InfoCard icon={CheckCircle} label="Completed" numberOfItems={completedCourses.length} variant="success" />
            </div>
        </div>
    );
}
