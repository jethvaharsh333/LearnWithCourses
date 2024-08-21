import { db } from "@/lib/db";
import { currentUserId } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { courseId: string } }
){
    try{
        const userId= await currentUserId();

        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }

        const course = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: userId,
            },
            include: {
                chapters: {
                    include: {
                        muxData: true,
                    },
                },
            },
        });

        if(!course){
            return new NextResponse("Not found", {status: 401});
        }

        const hasPublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

        if(!course.title || !course.description || !course.imageUrl || !course.categoryId || !hasPublishedChapter){
            return new NextResponse("Missing required fields", {status: 401});
        }

        const publishedCourse = await db.course.update({
            where: {
                id: params.courseId,
                userId,
            },
            data: {
                isPublished: true,
            }
        });

        return NextResponse.json(publishedCourse);
    }
    catch(error){
        console.log("[COURSE_ID_PUBLISH]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}