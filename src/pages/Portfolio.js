import React,{useState} from 'react';
import portfolio from "../components/PortfolioData"
import MenuItem from "../components/MenuItem";


const Portfolio = () => {
    const [menuItems, setMenuItems] = useState(portfolio);

    return (
        <div className="portfolio-main" id="portfolio">
        <div className="container portfolio-page">
            <div className="title">
                <h2>Portfolio</h2>
                <hr></hr>
                <p>" These are some of my Projects which i've done and source code can be
                seen using the github link provided along with their description. "</p>
            </div>

            <div className="menu">
                <MenuItem menuItem={menuItems}/>
            </div>
        </div>
        </div>

    );
};

export default Portfolio;