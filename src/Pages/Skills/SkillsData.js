import jslogo from '../../assets/skills/javascript.webp'
import bootstrap from '../../assets/skills/bootstrap.webp'
import git from '../../assets/skills/git.webp'
import mangodb from '../../assets/skills/mangodb.webp'
import mysql from '../../assets/skills/mysql.webp'
import node from '../../assets/skills/node.webp'
import react from '../../assets/skills/reactjs.webp'
import python from '../../assets/skills/python.webp';
import native from '../../assets/skills/native.webp';
import typescript from '../../assets/skills/typescript.webp'
import csharp from '../../assets/skills/csharp.webp';
import azure from '../../assets/skills/azure.webp';
import d3js from '../../assets/skills/d3js.webp';

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
            name:'Typescript',
            value:80,
            logo:typescript
          },
          {
            name:'C#',
            value:70,
            logo:csharp
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
        }, 
        {
            name:'D3 JS',
            value:60,
            logo:d3js
        },
        {
            name:'ReactNative',
            logo:native,
            value:65
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
        {
            name:'Azure',
            value:65,
            logo:azure
        },
        ]
    },
   
    
]