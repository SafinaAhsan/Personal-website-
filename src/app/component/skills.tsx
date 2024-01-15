"use client"
import { useState } from "react"
import { MdHearing } from "react-icons/md";
import { GiSatelliteCommunication } from "react-icons/gi";
import { RiMapPinTimeFill } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { FcCollaboration } from "react-icons/fc";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
interface Iskills {
    name: string,
    icon: JSX.Element
}
interface skillObject {
    [key: string]: Iskills[]
}

const Skills = () => {
    const [active, setActive] = useState("soft")
    const skills: skillObject = {
        soft: [{ name: "Active Listening", icon: <MdHearing /> },
        { name: "Communication", icon: <GiSatelliteCommunication /> },
        { name: "Teamwork", icon: <GiTeamIdea /> },
        { name: "Collaboration", icon: <FcCollaboration /> },
        { name: "Time Management", icon: <RiMapPinTimeFill /> },
        { name: "Creative Problem Solving", icon: <AiOutlineSolution /> }
        ],
        hard: [{ name: "Python", icon: <FaPython /> },
        { name: "Typescript", icon: <SiTypescript /> },
        { name: "Javascript", icon: <IoLogoJavascript /> },
        { name: "NextJs", icon: <SiNextdotjs /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
        ]
    }

    return (
        <div>
            <div className="flex justify-between gap-4 px-6 sm:px-10 mt-4 ">
                {Object.keys(skills).map((item) => (
                    <button
                        key={item}
                        onClick={() => setActive(item)}
                        className={`w-1/2 h-12 bg-gray-300 text-black font-display font-semibold hover:bg-black hover:text-white transition ease-in-out duration-200 
             ${active == item ? "bg-pink-900 " : ""}`}>
                        {`${item.toUpperCase()} SKILLS`}
                    </button>
                ))}
            </div>
            <div className="mt-4">

                <ul className={`flex flex-row flex-wrap content-start list-none px-6 sm:px-10 gap-2 ${active === "soft" ? `justify-start` : `justify-end`}`}>
                    {skills[active].map((item) => (
                        <li key={item.name}
                            className={`border border-transparent rounded-lg p-2 bg-slate-300 flex items-center gap-2 `}>
                            <div> {item.icon}</div>
                            <div>{item.name}</div></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills