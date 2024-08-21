import { currentUserId } from "@/lib/auth";
import { db } from "@/lib/db";
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
        });

        if(!course){
            return new NextResponse("Not found", {status: 401});
        }

        const unpublishedCourse = await db.course.update({
            where: {
                id: params.courseId,
                userId,
            },
            data: {
                isPublished: false,
            }
        });

        return NextResponse.json(unpublishedCourse);
    }
    catch(error){
        console.log("[COURSE_ID_UNPUBLISH]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}