import { NextRequest ,NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { currentUserId } from "@/lib/auth";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

interface ClodinaryUploadResult{
    public_id: string,
    [key: string]: any,
}

const handleAuth = async () => {
    const userId= await currentUserId();

    if (!userId) throw new Error("unauthorized");
    return { userId };
}

// export async function POST(request: NextRequest, response: NextResponse) {
//     handleAuth();
//     console.log("way");
//     try{
//         // const file = request.body;
//         const formData = await request.formData();
//         const file = formData.get("file") as File | null;

//         if(!file){
//             return NextResponse.json({error: "File not found"}, {status: 400});
//         }
//         // const image = cloudinary.image(file+"", {quality: 100});
//         const bytes = await file.arrayBuffer();
//         const buffer = Buffer.from(bytes);

//         const result = await new Promise<ClodinaryUploadResult>(
//             (resolve, reject) => {
                
//                 const uploadStream =  cloudinary.uploader.upload_stream(
//                     {folder: "next-cloudinary-upload"},
//                     // {cloudinary.},
//                     (error, result) => {
//                         if(error) reject(error);
//                         else resolve(result as ClodinaryUploadResult);
//                     }
//                 );
//                 uploadStream.end(buffer);
//             }
//         );

//         console.log(result.public_id);

//         const imageUrl = cloudinary.url(result.public_id, {
//             quality: 100,
//             secure: true, // Ensures the URL is HTTPS
//         });

//         console.log(imageUrl);

//         return NextResponse.json({imageUrl: result.public_id}, {status:200});
//     }
//     catch(error){
//         console.log("Upload image failed", error);
//         return NextResponse.json({error: "Upload Image failed"}, {status: 500});
//     }
// }

// export async function DELETE(req: NextRequest, res:NextResponse) {
//     const publicId = req.url;

//     try {
//         const result = await cloudinary.uploader.destroy(publicId);

//         if (result.result !== 'ok') {
//             throw new Error('Failed to delete image');
//         }
//         return NextResponse.json({error: "Image deleted successfully"}, {status: 200});
//         // res.status(200).json({ message: 'Image deleted successfully' });
//     } catch (error) {
//         console.error("Error deleting image:", error);
//         return NextResponse.json({error: "Failed to delete image"}, {status: 500});
//         // res.status(500).json({ error: 'Failed to delete image' });
//     }
// }

// export async function DELETE(request: NextRequest) {
//     try {

//         const publicId  = await request.json(); // Extract publicId from request body
//         console.log(publicId);
//         if (!publicId) {
//             return NextResponse.json({ error: "Missing publicId" }, { status: 400 });
//         }

//         const result = await cloudinary.uploader.destroy(publicId);

//         if (result.result !== 'ok') {
//             throw new Error('Failed to delete image');
//         }

//         return NextResponse.json({ message: "Image deleted successfully" }, { status: 200 });
//     } catch (error) {
//         console.error("Error deleting image:", error);
//         return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
//     }
// }

export async function DELETE(request: NextRequest) {
    await handleAuth();
    
    try {
        const url = new URL(request.url);
        const publicId = url.searchParams.get('publicId');
        
        if (!publicId) {
            return NextResponse.json({ error: "Public ID is required" }, { status: 400 });
        }

        const result = await cloudinary.uploader.destroy(publicId);

        if (result.result !== 'ok') {
            throw new Error('Failed to delete image');
        }

        return NextResponse.json({ message: "Image deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting image:", error);
        return NextResponse.json({ error: "Failed to delete image" }, { status: 500 });
    }
}