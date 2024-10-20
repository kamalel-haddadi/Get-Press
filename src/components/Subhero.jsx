import AvatarCircles from "@/components/ui/avatar-circles";
const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
];
// React
// import { motion } from "framer-motion"
// React Server Components
// import * as motion from "framer-motion/client"

import WordRotate from "@/components/ui/word-rotate";
import ShimmerButton from "@/components/ui/shimmer-button";
import Envolope from "./Envolope"
import Envolopetl from "./Envolopetl"
import Envolopetr from "./Envolopetr"
import Envolopebr from "./Envolopebr"
function Subhero() {

    return (
        <>
            <div className="relative flex flex-col items-center justify-center z-20 w-full py-20">
                <div className="flex flex-col items-center justify-center max-w-3xl gap-y-8">
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <div className="flex items-center gap-2">
                            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
                            <h3 className="text-sm text-gray-500">Loved by 3079 professionals</h3>
                        </div>
                        {/* Headding start */}
                        <div className="">
                            <h1 className=" flex flex-col">
                                <span className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center !leading-none space-x-1">Get Press</span>
                                <span className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center !leading-none space-x-1">Montions with </span>
                                <WordRotate
                                    className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center !leading-none space-x-1"
                                    words={["5-minutes a day", "one click"]}
                                />
                                <span className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center !leading-none space-x-1"></span>

                            </h1>
                        </div>
                        <div className="">
                            <p className="max-w-md mt-2 text-base text-center text-#fff">
                                Boost your brand's visibility with AI-powered press release generation and media outreach. Get featured in top publications effortlessly.
                            </p>
                            <div className="flex items-center justify-center mt-6 gap-x-4">
                                <ShimmerButton className="shadow-2xl">
                                    <a href="#" className="text-center">Start For Free</a>
                                </ShimmerButton>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4">
                            {/* add svg's here */}
                            <svg className="w-auto h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ff8800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="text-sm text-muted-foreground">AI-powered content</span>
                            <span className="text-[#a8a29e]">•</span>
                            {/* add svg's here */}
                            <svg className="w-auto h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ff8800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="text-sm text-muted-foreground"> Media contact database</span>
                            <span className="text-[#a8a29e]">•</span>
                            <svg className="w-auto h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#ff8800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="text-sm text-muted-foreground"> Performance analytics</span>
                        </div>
                    </div>
                    <div className="hidden max-w-lg lg:block">
                        <div className="flex items-center">
                            <div className="absolute flex items-center justify-center  group top-1/3 left-36">
                                <div className="absolute ">
                                    {/* svg here top left*/}
                                    <Envolope />
                                </div>
                            </div>
                            <div className="absolute right-36 flex items-center justify-center  group top-1/4">
                                <div className="absolute ">
                                    {/* svg here top right*/}
                                    <Envolopetr />
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex items-center justify-center left-36 group bottom-1/4 blur-sm">
                            <div className="absolute ">
                                {/* svg here bottom left*/}
                                <Envolopetl />
                            </div>
                        </div>
                        <div className="absolute flex items-center justify-center right-36 group bottom-1/5 blur-sm">
                            <div className="absolute ">
                                {/* svg here bottom right*/}
                                <Envolopebr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subhero