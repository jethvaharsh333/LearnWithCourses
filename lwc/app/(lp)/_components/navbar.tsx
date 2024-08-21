import Link from "next/link";
import Logo from "./logo";
import NavLink from "./nav-link";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
    return (
        <div className="h-full md:w-full flex ">
            <div className="w-3/5 md:w-1/4 h-full ">
                <Link href={`/`}>
                    <Logo />
                </Link>
            </div>
            <div className="md:hidden w-1/2 flex items-center">
                <MobileSidebar />
            </div>
            <div className="hidden  lg:w-3/4 md:w-4/5 w-1/2 md:flex justify-center">
                <NavLink />
            </div>
        </div>
    )
}

export default Navbar;