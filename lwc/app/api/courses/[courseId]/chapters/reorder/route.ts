import { db } from "@/lib/db";
import { currentUserId } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function PUT(
    req: Request,
    { params } : { params: { courseId: string; } }
) {
    try{
        const userId= await currentUserId();

        if(!userId){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { list } = await req.json();

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseId,
                userId: userId
            }
        });

        if(!ownCourse){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        for(let item of list){
            await db.chapter.update({
                where: { id: item.id },
                data: { position: item.position }
            });
        }

        return new NextResponse("Success", { status: 200 });
    }
    catch(error){
        console.log("[REORDER]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}