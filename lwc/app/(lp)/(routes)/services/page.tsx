"use client"
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

const Services = () => {
    const openToast = async() => {
        toast.success("Please fill out the form, and one of our company's executives will reach out to you.",{
            duration: 5000,
            icon:"🚀",
            style: {
                padding: '20px',
              },
          },
        );
    }
    return (
        <div className=" py-6 flex justify-center transition ease-in duration-1000 delay-800">
            <Card className=" w-11/12 md:w-3/4 md:px-2">
                <CardHeader >
                    <CardTitle className="flex flex-col gap-y-4 md:flex-row justify-between">
                        <div>
                            <p>Free VAPT Report</p>
                        </div>
                        <div>
                            &#8377;0
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className=" px-14 text-lg">
                    <ul className="list-disc ">
                        <li>Get a *free VAPT report for your business</li>
                        <li>Secure your business from threat actors</li>
                    </ul>
                    <div className="flex">
                        <div>
                            Show more
                        </div>
                        <div><ArrowRightIcon className="h-5 w-4 ml-1 mt-1" /></div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/contactus" onClick={openToast} >
                        <Button className="bg-gradient-to-r from-amber-200  to-yellow-400 from-10% animate-ease-[cubic-bezier(0.1,0.1,0.1,0.1)] animate-delay-500 animate-jump-in animate-infinite animate-ease-in transition-all hover:scale-105 duration-500 transform ease-in hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-200 hover:to-95% text-base">Get now</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Services;