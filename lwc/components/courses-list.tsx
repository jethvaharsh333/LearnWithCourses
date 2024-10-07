import { Category, Course } from "@prisma/client"
import { CourseCard } from "@/components/course-card";
import { redirect } from "next/navigation";
import { currentUserId } from "@/lib/auth";
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { Suspense } from "react";

type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progress: number | null;
};

interface CoursesListProps{
    items: CourseWithProgressWithCategory[],

}

async function ProductListLoader() {
    // const products = await get();
    const userId = await currentUserId();

    if(!userId){
        return redirect("/dashboard");
    }

    const {completedCourses, coursesInProgress} = await getDashboardCourses(userId);

    return <p className="text-gray-500 text-sm">
        {completedCourses.length} {completedCourses.length === 1 ? "Course" : "Courses"}
    </p>;
}

export const CoursesList = ({ items }: CoursesListProps) => {

    if(!items){
        return(
            <Suspense fallback={<p className="font-extrabold">Loading</p>}>
                kaido the beast
            </Suspense>
        )
    }


    return(
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {items.map((item) => (
                    <CourseCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl!}
                        chaptersLength={item.chapters.length}
                        price={item.price!}
                        progress={item.progress}
                        category={item?.category?.name!}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className="text-center text-sm  text-muted-foreground mt-10">
                    No Course Found
                </div>
            )}
        </div>
    )
}