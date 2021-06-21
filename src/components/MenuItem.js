import React from 'react';

const MenuItem = ({menuItem}) => {
    return (
        <div className="portfolio">
            {
                menuItem.map((item) => {
                    return <div className="menu-info">
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-data">
                                <li>
                                    <a href={item.link}>{item.icon}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Placeholder param</p>

                    </div>

                })
            }
        </div>
    );
};

export default MenuItem;