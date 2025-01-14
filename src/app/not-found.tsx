import Link from "next/link"

function NotFound(){
    return(
        <div className="flex w-full h-[72vh] justify-center items-center gap-4 flex-col">
            <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-[500] text-[#1087FF]">404 | Page not Found</h1>
            <div className="flex w-full justify-center items-center ">
            <Link href='/' className="px-4 py-2 bg-[#1087FF]  rounded-md text-white hover:bg-[#666666] my-4 text-[14px] sm:text-[16px] lg:text-[18px]"> Go to Home </Link>
            </div>
        </div>
    )
}

export default NotFound