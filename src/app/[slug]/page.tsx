'use client'
import { client } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react"
import Link from "next/link";

interface props {
  params: {
    slug: string
  },
}

function BlogShow({ params }: props) {
  const ref = useRef<HTMLInputElement>(null)

  const [comments, setComments] = useState<string[]>([])
  const [data, setData] = useState<{ heading: string; blog: any; date: string; image: string; slug: string } | null>(null);
  const [loading, setLoading] = useState(true);
  console.log(ref);

  const HandleAddComment = () => {
    if (ref.current) {
      if(ref.current.value != ""){
      setComments([ref.current.value, ...comments])
      ref.current.value = ""
    }
  }
  }
  const enterKeyPress = (ek: React.KeyboardEvent) => {
    if (ek.key === 'Enter') {
      HandleAddComment()
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 9000)
    async function dataFetch() {
      const blogs = await client.fetch(`*[_type == "blogs" && slug.current == "${params.slug}"]{
      heading,
      "id": _id,
        blog,
      date,
      "image": image.asset->url,
      "slug": slug.current
      }`)
      setData(blogs[0])
    }
    dataFetch()
  }, [params.slug])

  if (!data) {
    if (loading) {
      return <div className="dark:text-[#f5f5f5] flex w-full h-[72vh] justify-center items-center gap-4 flex-col text-2xl" >Loading...</div>;
    } else if (!loading) {
      return <div className="flex w-full h-[72vh] justify-center items-center gap-4 flex-col">
        <h1 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[34px] font-[500] text-[#1087FF] text-center">Blog not Found <br />or <br />There&#39;s an internet issue</h1>
        <div className="flex w-full justify-center items-center ">
          <Link href='/' className="px-4 py-2 bg-[#1087FF]  rounded-md text-white hover:bg-[#666666] my-4 text-[14px] sm:text-[16px] lg:text-[18px]"> Go to Home </Link>
        </div>
      </div>
    }
  }
  else if(data){
  return (
    <div className="px-4 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-8 md:py-10 lg:py-12 xl:py-14 dark:text-[#f5f5f5]">
      <PortableText
        value={data.blog}
        components={{
          types: {
            image: ({ value }) => (
              <Image src={value.asset.url} alt={value.alt || "Blog Image"} width={500} height={500} />
            ),
          },
          block: {
            h1: ({ children }) => <h1 className="text-[24px] md:text-3xl xl:text-[32px] font-bold">{children}</h1>,
            h2: ({ children }) => <h2 className="text-[24px] md:text-3xl xl:text-[32px] font-semibold">{children}</h2>,
            h4: ({ children }) => <h4 className="text-[20px] md:text-2xl xl:text-[26px] font-semibold">{children}</h4>,
            normal: ({ children }) => <p className="my-2 text-[14px]  md:text-[16px] xl:text-[18px]">{children}</p>,
          },
          list: {
            bullet: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
            number: ({ children }) => <ol className="list-decimal pl-4">{children}</ol>,
          },
        }}
      />
      <div className="flex justify-center items-center w-full py-4 px-8 ">
        <Image src={data.image} alt="" width={400} height={400}></Image>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full justify-center">
        <input type="text" placeholder="Enter your comment" className="md:w-[85%] py-2 px-2 text-[14px] outline-none rounded-lg bg-transparent border border-[#2F353B] dark:border-[#f5f5f5]" ref={ref} onKeyDown={enterKeyPress} />
        <button className="py-2 px-2 bg-[#1087FF] text-[#f5f5f5] dark:text-[#2F353B] text-[14px] rounded-lg font-[600] hover:bg-[#2d8ceb]" onClick={HandleAddComment}>Post a Comment</button>
      </div>
      <div>
        {
          comments.map((c,index) => {
            return (
              <div className="mt-3" key={index}>

                <article className="sm:px-2 md:px-4 lg:px-6 xl:px-8 py-2 text-base bg-transparent rounded-lg">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center justify-between w-full sm:w-auto">
                      <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"><Image className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough" width={24} height={24} />Anonymous</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><p>Just Now</p></p>
                    </div>
                    
                  </footer>
                  <p className="text-gray-500 dark:text-gray-400">{c}</p>
                  
                </article>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
}
export default BlogShow