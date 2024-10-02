"use client";

import * as z from "zod";
import axios from "axios";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";
import { CldImage } from "next-cloudinary";
import Script from "next/script";

const formSchema = z.object({
    imageUrl: z.string().min(1, {
        message: "image is required"
    })
});

interface ImageFormProps {
    initialData: Course;
    courseId: string;
}

// const ImageForm = ({initialData, courseId}:ImageFormProps) => {
//     const [isEditing, setIsEditing] = useState(false);

//     // const [uploadedImage, setUploadedImage] = useState<string | null>(null);
//     // const [isUploading, setIsUploading] = useState(false);
//     // const [isTransforming, setIsTransforming] = useState(false);
//     // const imageRef = useRef<HTMLImageElement>(null);

//     const toggleEdit = () => setIsEditing((current) => !current);

//     const router = useRouter();

//     // const form = useForm<z.infer<typeof formSchema>>({
//     //     resolver: zodResolver(formSchema),
//     //     defaultValues: {
//     //         imageUrl: initialData?.imageUrl || "",
//     //     } ,
//     // });

//     const onSubmit = async(values: z.infer<typeof formSchema>) => {
//         try{
//             await axios.patch(`/api/courses/${courseId}`, values);
//             toast.success("Course updated");
//             toggleEdit();
//             router.refresh();
//         }
//         catch(error){
//             toast.error("Something went wrong");
//         }
//     };

//     return (
//         <div className="mt-6 border bg-slate-100 rounded-md p-4">
//             <div className="font-medium flex items-center justify-between">
//                 Course Image
//                 <Button onClick={toggleEdit} variant="ghost">
//                     {isEditing && (
//                         <>Cancel</>
//                     )}
//                     {!isEditing && !initialData.imageUrl && (
//                         <>
//                             <PlusCircle className="h-4 w-4 mr-2" />
//                             Add an image
//                         </>
//                     )}
//                     {!isEditing && initialData.imageUrl && (
//                         <>
//                             <Pencil className="h-4 w-4 mr-2" />
//                             Edit image
//                         </>
//                     )}
//                 </Button>
//             </div>
//             {!isEditing && (
//                 !initialData.imageUrl ? (
//                     <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
//                         <ImageIcon className="h-10 w-10 text-slate-500" />  
//                     </div>
//                 ): (
//                     <div className="relative aspect-video mt-2">
//                         <Image src={initialData.imageUrl} alt="upload" fill className="object-cover rounded-md"  />
//                     </div>
//                 )
//             )}
//             {isEditing && (
//                 <div>
//                     <FileUpload 
//                         endpoint="courseImage"
//                         onChange={(url:any) => onSubmit({ imageUrl: url })}
//                     />
//                     <div className="text-xs text-muted-foreground mt-4"> 
//                         16:9 aspect ratio recommended
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ImageForm;

// const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
//     const [isEditing, setIsEditing] = useState(false);

//     const [uploadedImage, setUploadedImage] = useState<string | null>(null);
//     const [isUploading, setIsUploading] = useState(false);
//     const [isTransforming, setIsTransforming] = useState(false);
//     const imageRef = useRef<HTMLImageElement>(null);

//     useEffect(() => {
//         if (uploadedImage) {
//             setIsEditing(true);
//         }
//     }, [uploadedImage]);

//     const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (!file) return;
//         setIsUploading(true);
//         const formData = new FormData();
//         formData.append("file", file);

//         try {
//             const response = await fetch("/api/image-cld-upload", {
//                 method: "POST",
//                 body: formData
//             });
//             // toggleEdit();
//             if (!response.ok) throw new Error("Failed to upload image");
//             const data = await response.json();
//             console.log(data);
//             setUploadedImage(data.publicId);
//             // await axios.patch(`/api/courses/${courseId}`, values);
//             // toast.success("Course updated");
//             // toggleEdit();
//             // router.refresh();
//             onSubmit({ imageUrl: data.imageUrl });
//         } catch (error) {
//             console.log("Image error ", error);
//             toast.error("Failed to upload image");
//         }
//         finally {
//             setIsUploading(false);
//         }
//     }

//     const toggleEdit = () => setIsEditing((current) => !current);

//     const router = useRouter();

//     const onSubmit = async (values: z.infer<typeof formSchema>) => {
//         try {
//             await axios.patch(`/api/courses/${courseId}`, values);
//             console.log(values);
//             console.log("https://res.cloudinary.com/dabitzf0t/image/upload/v1726482464/" + "next-cloudinary-upload/ebyrzk0mpb1ov78u9xty.jpg")
//             toast.success("Course updated");
//             toggleEdit();
//             router.refresh();
//         }
//         catch (error) {
//             toast.error("Something went wrong");
//         }
//     };



//     return (
//         <div className="mt-6 border bg-slate-100 rounded-md p-4">
//             <div className="font-medium flex items-center justify-between">
//                 Course Image
//                 <Button onClick={toggleEdit} variant="ghost">
//                     {isEditing && (
//                         <>Cancel</>
//                     )}
//                     {!isEditing && !initialData.imageUrl && (
//                         <>
//                             <PlusCircle className="h-4 w-4 mr-2" />
//                             Add an image
//                         </>
//                     )}
//                     {!isEditing && initialData.imageUrl && (
//                         <>
//                             <Pencil className="h-4 w-4 mr-2" />
//                             Edit image
//                         </>
//                     )}
//                 </Button>
//             </div>
//             {!isEditing && (
//                 !initialData.imageUrl ? (
//                     <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
//                         <ImageIcon className="h-10 w-10 text-slate-500" />
//                     </div>
//                 ) : (

//                     <div className="relative aspect-video bg-slate-950 flex justify-center mt-2">

//                         {/* <Image src={initialData.imageUrl} alt="upload" fill className="object-cover rounded-md"  /> */}
//                         <CldImage src={initialData.imageUrl} width={500} height={500} alt="image" className="justify-center object-cover rounded-md" />
//                     </div>
//                 )
//             )}
//             {isEditing && (
//                 <div>
//                     {/* <FileUpload 
//                         endpoint="courseImage"
//                         onChange={(url:any) => onSubmit({ imageUrl: url })}
//                     /> */}



//                     <CldUploadWidget

//                         onUpload={(result: any) => {
//                             // const url = result.info.secure_url; // Get the URL of the uploaded image
//                             // setUploadedImage(url); // Update the state with the uploaded image
//                             // onSubmit({ imageUrl: url }); // Submit the form with the new image URL
//                             (url:any) => onSubmit({ imageUrl: url })
//                         }}
//                         uploadPreset="sue4uxwq" // Ensure to set the correct Cloudinary upload preset here
//                     >
//                         {({ open }) => (
//                             <button
//                                 type="button"
//                                 onClick={() => open()}
//                                 className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                             >
//                                 <input type="file" onChange={handleFileUpload}  />
//                             </button>
//                         )}
//                     </CldUploadWidget>
//                     <div className="text-xs text-muted-foreground mt-4">
//                         16:9 aspect ratio recommended
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const router = useRouter();

    const toggleEdit = () => setIsEditing((current) => !current);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}`, values);
            toast.success("Course updated");
            toggleEdit();
            router.refresh();
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    // const handleImageUpload = async (result: any) => {
    //     // console.log(result.info.secure_url);
    //     // const uploadedUrl = result.info.secure_url;
    //     // setUploadedImage(uploadedUrl);
    //     onSubmit({ imageUrl: result.info.secure_url });
    // };
    const handleImageUpload = async (result: any) => {
        const uploadedUrl = result.info.secure_url;
        const publicId = result.info.public_id;

        try {
            if (initialData.imageUrl) {
                const previousImagePublicId = extractPublicIdFromUrl(initialData.imageUrl);

                // Call your API endpoint to delete the image in Cloudinary
                await axios.delete('/api/image-cld-upload', { params: { publicId: previousImagePublicId } });
            }

            // Update the course with the new image URL
            await onSubmit({ imageUrl: uploadedUrl });

            // toast.success("Image updated and old image deleted!");
        } catch (error) {
            console.error("Error uploading or deleting the image: ", error);
            // toast.error("Failed to update the course image.");
        }
    };

    // Helper function to extract the public_id from the URL
    const extractPublicIdFromUrl = (url: string) => {
        const parts = url.split('/');
        return parts[parts.length - 1].split('.')[0];  // Assuming the public_id is the filename without the extension
    };


    return (
        <>
            <div className="mt-6 border bg-slate-100 rounded-md p-4">
                <div className="font-medium flex items-center justify-between">
                    Course Image
                    <Button onClick={toggleEdit} variant="ghost">
                        {isEditing ? "Cancel" : initialData.imageUrl ? "Edit Image" : "Add an Image"}
                    </Button>
                </div>

                {!isEditing && (
                    !initialData.imageUrl ? (
                        <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
                            <ImageIcon className="h-10 w-10 text-slate-500" />
                        </div>
                    ) : (
                        <div className="relative aspect-video mt-2 flex justify-center" >
                            <Image quality={100} src={initialData.imageUrl} width={500} height={500} alt="image" className="justify-center object-cover rounded-md" />
                        </div>
                    )
                )}

                {isEditing && (
                    <div >
                        <CldUploadWidget
                            uploadPreset="sng1zvit"
                            onSuccess={handleImageUpload}
                        >
                            {({ open }) => (
                                <Button
                                    onClick={() => open()}
                                    disabled={isUploading}
                                    onError={() => setIsUploading(false)}
                                >
                                    {isUploading ? "Uploading..." : "Upload Image"}
                                </Button>
                            )}
                        </CldUploadWidget>
                        <div>{isUploading ?? "Uploading..."}</div>
                        <div className="text-xs text-muted-foreground mt-4">
                            16:9 aspect ratio recommended
                        </div>
                    </div>
                )}
            </div>
            <Script
                src="https://upload-widget.cloudinary.com/latest/global/all.js" 
                strategy="lazyOnload"
            />
            {/* <script src="https://upload-widget.cloudinary.com/latest/global/all.js" type="text/javascript"></script> */}
        </>
    );
};

export default ImageForm;