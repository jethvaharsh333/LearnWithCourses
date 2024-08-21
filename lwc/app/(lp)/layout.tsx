import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const WholeLayout = ({children}:{children:React.ReactNode}) => {
    return(
        <div className="h-full  w-full">
            <div className="h-[80px] fixed z-50 w-full inset-y-0 font-inter bg-white">
                <Navbar/>
            </div>
            <div className="pt-[80px] w-full">
                {children}
            </div>
            <div className="w-full">
                <Footer/>
            </div>
        </div>
    )
}

export default WholeLayout;