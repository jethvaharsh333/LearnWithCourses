import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { CardWrapper } from "./card-wrapper";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = () => {
    return(
        <CardWrapper 
            headerLabel="Oops! Something went wrong!" 
            backButtonHref="/auth/login" 
            backButtonLabel="Back to Login"
        >
            <div className="w-full flex justify-center items-center">
                <FaExclamationTriangle className="text-destructive" />
            </div>
        </CardWrapper>
    )
}