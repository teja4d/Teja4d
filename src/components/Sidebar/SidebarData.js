import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import { RiContactsFill} from 'react-icons/ri';
import { FaWrench,FaSuitcase,FaRobot,FaUserGraduate} from 'react-icons/fa';
import { BsFillGrid3X3GapFill} from 'react-icons/bs'
export const SidebarData = [
    {
        tittle:'Home',
        icon:<AiFillHome/>,
        path:'/home',
        description:'Home Page'
    },
    {
        tittle:'About Me',
        icon:<RiContactsFill/>,
        path:'/about',
        description:'Who is this guy ?'
    },
    {
        tittle:'Skills',
        icon:<FaWrench/>,
        path:'/skills',
        description:'My skill set'
        
    },
    {
        tittle:'Experience',
        icon:<FaSuitcase/>,
        path:'/experience',
        description:'My Experience'
    },
    {
        tittle:'Projects',
        icon:<BsFillGrid3X3GapFill/>,
        path:'/projects',
        description:'Cool projects I have done'

    },
    {
        tittle:'Education',
        icon:<FaUserGraduate/>,
        path:'/education',
        description:'My Education and other stuff'
    },
    {
        tittle:'About you',
        icon:<FaRobot/>,
        path:'/aboutyou',
        description:'Want to see your details ?'
    }
]