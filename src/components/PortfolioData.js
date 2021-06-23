import img1 from "../image/pic1.jpg";
import {FaGithub} from "react-icons/fa";

const portfolios = [
    {
        id:1,
        category:'React JS',
        link:'https://github.com/Kushalgiri/Portfolio-website',
        icon:<FaGithub/>,
        image: img1,
        title:'Portfolio website',
        // description:'This is a responsive website built in React JS'
    },
    {
        id:2,
        category:'Web Develop',
        link:'https://github.com/Kushalgiri/Intern',
        icon:<FaGithub/>,
        image: img1,
        title:'Book Finder',
        // description:'This project displays book from json file and can be searched using search bar according to their categories'
    },
    {
        id:3,
        category:'Web Develop',
        link:'https://github.com/Kushalgiri/Food-Search',
        icon:<FaGithub/>,
        image: img1,
        title:'Food Searcher'
    },

    {
        id:4,
        category:'React JS',
        link:'https://github.com/Kushalgiri/LoginPage-React',
        icon:<FaGithub/>,
        image: img1,
        title:'Login Page'
    },

    
]

export default portfolios;