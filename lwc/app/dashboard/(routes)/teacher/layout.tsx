// import { currentUserIdId } from "@/hooks/use-current-user-id";
import { useCurrentUserId } from "@/hooks/use-current-user-id";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const TeacherLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    // const { userId } = auth();
    // const userIdd  = currentUserId();
    // if(!isTeacher(userId)){
    //     return redirect("/dashboard");
    // }

    return <>{children}</>
}

export default TeacherLayout;