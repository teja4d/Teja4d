import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import { MdPermContactCalendar} from 'react-icons/md';
import { FaWrench,FaSuitcase,FaGraduationCap,FaRobot} from 'react-icons/fa';
import { BsFillGrid3X3GapFill} from 'react-icons/bs'
export const SidebarData = [
    {
        tittle:'Digital Garden',
        icon:<AiFillHome/>
    },
    {
        tittle:'About Me',
        icon:<MdPermContactCalendar/>
    },
    {
        tittle:'My Skills',
        icon:<FaWrench/>
    },
    {
        tittle:'My Experience',
        icon:<FaSuitcase/>
    },
    {
        tittle:'Projects',
        icon:<BsFillGrid3X3GapFill/>
    },
    {
        tittle:'Education',
        icon:<FaGraduationCap/>
    },
    {
        tittle:'About you',
        icon:<FaRobot/>
    }
]