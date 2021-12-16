import uber from '../../assets/projects/ubereats.webp';
import inventory from '../../assets/projects/inventory.webp';
import emoji from '../../assets/projects/emoji.webp';
import queen from '../../assets/projects/queens.webp';
import game from '../../assets/projects/game.webp'
import myimage from '../../assets/projects/myimage.webp'



export const ProjectData = [
    {
        title:'My Profile',
        summary:'Designed my own website using ReactJS framework and pure CSS.',
        image:myimage,
        url:'https://github.com/teja4d/mydata',
        code:[{
            tech:'ReactJS',
            color:'red'
        },
        {
            tech:'CSS',
            color:'orange'
        },]
    },
    {
        title:'UberEats Clone',
        summary:'Made a Ubereats clone mobile app using React Native and also implemented redux for state mangement of the application.',

        image:uber,
        url:'https://github.com/teja4d/ubereatsclone-react-native',
        code:[{
            tech:'React Native',
            color:'green'
        }]
    },
    {
        title:'Inventory Management',
        summary:'Created a Inventory management web app using React JS,Bootstrap and implemented redux for managing the data',
        image:inventory,
        url:'https://github.com/teja4d/Inventory',
        code:[{
            tech:'ReactJS',
            color:'red'
        },
        {
            tech:'CSS',
            color:'orange'
        },
        {
            tech:'BootStrap',
            color:'purple'
        },
    ]
    },
    {
        title:'Emoji Feed back',
        summary:'Created a small emoji slider feedback using Vanila JavaScript.This was inspired after seening a random gif in instagram.',
        image:emoji,
        url:'https://github.com/teja4d/emojifeedback-js',
        code:[{
            tech:'JavaScript',
            color:'black'
        },
        {
            tech:'CSS',
            color:'orange'
        },]
    },
    {
        title:'N-Queens Program',
        summary:'Written a N-Queens program using python.',
        image:queen,
        url:'https://github.com/teja4d/n-queens-game-python',
        code:[{
            tech:'Python',
            color:'Blue'
        }]
    },
    {
        title:'Eat Blaster',
        summary:'We are a team of six members developed a 2D game using python with pygame library'+
        "As part of this game we have implemented object oriented programming.",
        image:game,
        url:'https://github.com/teja4d/pygame',
        code:[{
            tech:'Python',
            color:'Blue'
        }]
    }




]