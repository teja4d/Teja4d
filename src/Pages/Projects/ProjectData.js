import uber from "../../assets/projects/ubereats.webp";
import inventory from "../../assets/projects/inventory.webp";
import game from "../../assets/projects/game.webp";
import myimage from "../../assets/projects/myimage.webp";
import dataviz from "../../assets/projects/dataviz.webp"

export const ProjectData = [ 
  {
    title: "Money Viz", 
    summary:
      "Money Viz is a web application which helps you to visualize your bank transactions and also helps you to track your expenses and income.",
    image: dataviz,
    url: "https://youtu.be/PNpbpmnHQ9s",
    code: [
      {
        tech: "ReactJS", 
        color: "red",
      }, 
      {
        tech: "D3Js",
        color: "orange",
      },
      {
        tech: "Python",
        color: "blue",
      },
    ],
  },
  {
    title: "My Profile",
    summary: "Designed my own website using ReactJS framework and pure CSS.",
    image: myimage,
    url: "https://github.com/teja4d/mydata",
    code: [
      {
        tech: "ReactJS",
        color: "red",
      },
      {
        tech: "CSS",
        color: "orange",
      },
    ],
  },
  {
    title: "UberEats Clone",
    summary:
      "Made a Ubereats clone mobile app using React Native and also implemented redux for state mangement of the application.",

    image: uber,
    url: "https://github.com/teja4d/ubereatsclone-react-native",
    code: [
      {
        tech: "React Native",
        color: "green",
      },
    ],
  },
  {
    title: "Inventory Management",
    summary:
      "Created a Inventory management web app using React JS,Bootstrap and implemented redux for managing the data",
    image: inventory,
    url: "https://github.com/teja4d/Inventory",
    code: [
      {
        tech: "ReactJS",
        color: "red",
      },
      {
        tech: "CSS",
        color: "orange",
      },
      {
        tech: "BootStrap",
        color: "purple",
      },
    ],
  },
  {
    title: "Eat Blaster",
    summary:
      "We are a team of six members developed a 2D game using python with pygame library" +
      "As part of this game we have implemented object oriented programming.",
    image: game,
    url: "https://youtu.be/fMmyLDR0KMY",
    code: [
      {
        tech: "Python",
        color: "Blue",
      },
    ],
  },
];
