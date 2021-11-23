import wipro from '../../assets/experience/wiprologo.webp'
import ihawk from '../../assets/experience/ihawk.webp';
import nologo from '../../assets/experience/nologo.webp'


export const ExperienceData = [
    {   
        id:0,
        company:'Wipro India',
        role:'Project Engineer',
        type:'Fulltime',
        date:'Sept 2019- July 2021',
        technologies:'ReactJS,ExpressJS,MangoDB,NodeJS',
        summury:`As project engineer I was responsible for developing,testing and maintaining the MERN stack application.
        It is web application used to order, manage and view the customer electricity consumption.
        The application was upgraded to the latest React and Node versions from Node 10.0. This include the code changes in the app 
        and updating the webpack from webpack 2 to webback 5 and exporting the MagoDB database to the new DataBase later.`,
        logo:wipro,
        display:false,
        website:'https://wipro.com/'
    },
    {   id:1,
        company:'Team IHwak',
        role:'Team Captain',
        type:'InternShip',
        date:'Oct 2018-July 2019',
        technologies:'SolidWorks,AutoCAD,Ansys,Basic Python',
        summury:`We are a team of 25 members and designed and manufactured a Formula Student car.
        Designing, analysing and fabrication of student formula car by over 
        Coming the drawbacks of previous supra race car.This includes making the CAD models using design software Solid Works and analysing the desing with Ansys
         and making the prototype of the vehicle using 3D printer before proceeding to manfacturing.`,
        logo:ihawk,
        display:false,
        website:'https://iaresupra2019.wixsite.com/mysite'
    },
    {   id:2,
        company:'Teams Aswadhati 2.0',
        role:'Manufacturing Head',
        type:'InternShip',
        date:'Dec 2017-June 2018',
        technologies:'SolidWorks',
        summury:`Designing, analysing and fabrication of student formula car`,
        logo:nologo,
        display:false,
        website:'https://iaresupra2019.wixsite.com/mysite'
    }
]