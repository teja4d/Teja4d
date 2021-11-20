import jslogo from '../../assets/javascript.png'
import bootstrap from '../../assets/bootstrap.png'
import git from '../../assets/git.png'
import mangodb from '../../assets/mangodb.png'
import mysql from '../../assets/mysql.png'
import node from '../../assets/node.png'
import react from '../../assets/reactjs.png'
import python from '../../assets/python.png'
export const SkillsData =[


    
    {
        category:"Programming",
        names : [
           { 
               name:'JavaScript',
               value:80,
               logo:jslogo
          },
          {
            name:'Python',
            value:60,
            logo:python
        }
    ]
       
    },
    {
        category:"Frameworks",
        names:[
            {
                name:'ReactJS',
                value:75,
                logo:react
            }
        ,
        {
            name:'NodeJS',
            value:60,
            logo:node
        }, {
            name:'ReactNative',
            logo: react
        },
        ]
    },
    {
        category:"DataBase",
        names:[
            {
                name:'MangoDB',
                value:60,
                logo:mangodb
            }
        ,
        {
            name:'MySQL',
            value:40,
            logo:mysql
        }
        ]
    },

    {
        category:"Others",
        names:[
            {
                name:'Git',
                value:55,
                logo:git
            }
        ,
        {
            name:'BootStrap',
            value:65,
            logo:bootstrap
        },
        ]
    },
   
    
]