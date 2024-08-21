import { db } from "@/lib/db";
import { Categories } from "./_components/categories";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CoursesList } from "@/components/courses-list";
import { currentUserId } from "@/lib/auth";

interface SearchPageProps {
    searchParams: {
        title: string;
        categoryId: string;
    }
}

const Searchpage = async({
    searchParams
}: SearchPageProps) => {
    const userId  = await currentUserId();

    if(!userId){
        return redirect("/dashboard");
    }

    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        }
    });

    const courses = await getCourses({
        userId,
        ...searchParams,
    });

    return (  
        <>
            <div className="px-6 pt-6 md:hidden mb:mb-0 block">
                <SearchInput/>
            </div>
            <div className="p-6 space-y-4">
                <Categories items={categories} />
                <CoursesList items={courses} />
            </div>
        </>
    );
}
 
export default Searchpage;