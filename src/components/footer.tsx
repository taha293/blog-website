import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="flex justify-between px-4 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-[20px] items-center flex-col" >
            <div className="w-full h-[2px] bg-[#93bee9af]"></div>
            <div className="flex justify-between w-full pt-4 items-center flex-col sm:flex-row gap-2">
                <div className="order-2 sm:order-1">
                    <p className="text-[14px] sm:text-[16px] text-[#1087FF]">CopyRights &#64; Giaic Blogs 2024</p>
                </div>
                <div className="flex gap-6 text-[24px] order-1 sm:order-2 text-[#1087FF]">
                    <a href="https://www.facebook.com/taha.hero.712" target="blank"><FontAwesomeIcon icon={faFacebook} className="hover:invert-[0.3]" /></a>
                    <a href="https://www.github.com/taha293" target="blank"><FontAwesomeIcon icon={faGithub} className="hover:invert-[0.3]" /></a>
                    <a href="https://www.linkedin.com/in/muhammad-taha-ansarii/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="hover:invert-[0.3]" /></a>
                </div>
            </div>

        </div>
    )
}
export default Footer