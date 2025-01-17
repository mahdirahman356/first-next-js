"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname()
    const link = [
        {
         title: "Home",
         path: '/'   
        },
        {
            title: "About",
            path: '/about'  
        },
        {
         title: "Blog",
         path: '/blog'   
        },
        {
         title: "Deshboard",
         path: '/deshboard/profile'   
        },
        {
         title: "Posts",
         path: '/posts'   
        },
        {
         title: "Meals",
         path: '/meals'   
        },
    ]
    return (
<div className={`${pathName.includes('deshboard') && 'hidden'} navbar bg-base-100`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Next Js</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-7">
      {link.map((link, index) => <Link className={`${pathName === link.path && "text-gray-500"}`} key={index} href={link.path}>{link.title}</Link>)}
    </ul>
  </div>
  <div className="navbar-end">
     <Link href={"/login"}><button className="btn">Log in</button></Link>
  </div>
</div>
    );
};

export default Navbar;