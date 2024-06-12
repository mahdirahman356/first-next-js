import { Kanit } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({
    weight: ["300","400", "700", "900" ] ,
    subsets: ["latin"] ,  
    preload: true, 
  });

export const metadata = {
    title: {
        absolute: "Dashbord"
    },
    description: "Dashbord Page",
  };

const layout = ({ children }) => {
    return (
        <div className={`${kanit.className} flex`}>
            <div className="drawer lg:drawer-open w-[25%]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><Link href={"/deshboard/profile"}>Profile</Link></li>
                        <li><Link href={"/deshboard/allUsers"}>All Users</Link></li>
                        <li><Link href={"/"}>Home</Link></li>
                    </ul>

                </div>
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default layout;