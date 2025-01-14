'use client'
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"

interface blogsCard {
    id:string,
    heading:string,
    date:string,
    img:string,
    slug:string,
}

function BlogsCard(props:blogsCard) {
    const {id,heading,date,img,slug} = props
    const [blogData, setBlogData] = useState([])
    useEffect(() => {
        async function dataFetch() {
            const blogs = await client.fetch('*[_type == "blogs"]{heading,"id":_id,blog,date,"imageUrl": image.asset->url}')
            setBlogData(blogs)

        }
        dataFetch()




    }, [])
    return (
        <div className="flex" key={id}>
            <div>
                <Link href={`/${slug}`} className="flex w-full h-full"><Image src={img} alt="" width={120} height={120} className="max-w-[none]"></Image></Link>
            </div>
            <div className="flex flex-col pl-5 justify-between dark:text-[#f6f7f8]">
                <Link href={`/${slug}`}><h1 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold hover:text-[#1087FF]">{heading}</h1></Link>
                <div className="flex items-center">
                    <p className="text-[12px] md:text-[14px] xl:text-[16px]">by <a href="https://github.com/taha293/" target="_blank"><span className="font-bold text-[#1087FF] text-[14px] md:text-[16px] xl:text-[18px]"> Admin </span></a>
                        on <span className="italic">{date}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default BlogsCard