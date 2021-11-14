import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import { RiContactsFill} from 'react-icons/ri';
import { FaWrench,FaSuitcase,FaGraduationCap,FaRobot,FaUserGraduate} from 'react-icons/fa';
import { BsFillGrid3X3GapFill} from 'react-icons/bs'
export const SidebarData = [
    {
        tittle:'Digital Garden',
        icon:<AiFillHome/>,
        path:'/home'
    },
    {
        tittle:'About Me',
        icon:<RiContactsFill/>,
        path:'/about'
    },
    {
        tittle:'My Skills',
        icon:<FaWrench/>,
        path:'/skills'
    },
    {
        tittle:'My Experience',
        icon:<FaSuitcase/>,
        path:'/experience'
    },
    {
        tittle:'Projects',
        icon:<BsFillGrid3X3GapFill/>,
        path:'/projects'
    },
    {
        tittle:'Education',
        icon:<FaUserGraduate/>,
        path:'/education'
    },
    {
        tittle:'About you',
        icon:<FaRobot/>,
        path:'/aboutyou'
    }
]