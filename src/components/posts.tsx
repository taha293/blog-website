'use client'

import BlogsCard from "./blogscard"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"

function Posts(){
        const [blogData, setBlogData] = useState([])
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
            async function dataFetch() {
                setIsLoading(true);
                const blogs = await client.fetch('*[_type == "blogs"]{heading,"id":_id,blog,date,"image": image.asset->url,"slug" : slug.current}')
                setBlogData(blogs)
                setIsLoading(false);
                
    
            }
            dataFetch()
        }, [])
    return(
        <div id="posts" className="px-4 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-8 md:py-10 lg:py-12 xl:py-14">
            <h1 className="text-[#1087FF] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] italic text-center underline-offset-4 underline font-semibold">All Posts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between py-10 sm:py-12 lg:py-16">
                {
                isLoading?(<div><p className="dark:text-white text-[#2F353B] flex lg:justify-end justify-center items-center">Loading.......</p></div>) : ((blogData as {id:string, heading:string, date:string, image:string, slug:string}[]).map((data)=> 
                <BlogsCard key={data.id} id={data.id} heading={data.heading} date={data.date} img={data.image} slug={data.slug}/>
                ) )
            }
            </div>
        </div>
    )
}
export default Posts