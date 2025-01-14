'use client'
import { ReactTyped } from "react-typed";

function HomeHero() {
    return (
        <div className="px-4 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-8 md:py-10 lg:py-12 xl:py-14 flex w-full justify-between md:items-center flex-col sm:flex-row gap-6">
            <div className="order-2 sm:order-1 flex justify-center text-center w-full">
                <p className="text-[#1087FF] font-bold leading-[1.2] text-[34px] sm:text-[36px] md:text-[38px] lg:text-[52px] xl:text-[58px] lg:leading-[70px] tracking-[-1px] text-center drop-shadow-lg">GIAIC BLOGS,<br />

                    <ReactTyped
                        strings={[
                            "Growth,",
                            "Ideas,",
                            "And",
                            "Intelligent",
                            "Conversation.",
                        ]}
                        typeSpeed={100}
                        backSpeed={60}
                        loop
                    /></p>
            </div>
        </div>
    )
}
export default HomeHero