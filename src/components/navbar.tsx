'use client'
import ThemeToogle from "./themetoogle"
import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"

function Navbar() {
    return (


        <div className="flex justify-between text-[#1087FF] items-center px-4 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-[20px]">
            <div>
                <h1 className="text-[26px] sm:text-[28px] xl:text-[30px]  font-bold">Giaic Blog</h1>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-5  lg:text-[18px] xl:text-[20px] font-semibold text-[#2F353B] dark:text-[#f6f7f8]">
                    <Link href='/'><li className="hover:font-bold hover:text-[#1087FF]">Home</li></Link>
                    <Link href='/#posts'><li className="hover:font-bold hover:text-[#1087FF]">All Blogs</li></Link>
                    <Link href='/#posts'><li className="hover:font-bold hover:text-[#1087FF]">Latest Blogs</li></Link>
                </ul>
            </div>
            <div className="hidden md:block">
                <ThemeToogle></ThemeToogle>
            </div>

            <SidebarTrigger  className="md:hidden"/>

        </div>
    )
}
export default Navbar
