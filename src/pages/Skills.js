import React from 'react';

const Skills = () => {
    return (
        <div className="container skill-wrapper">
            <div className="row">
                <div className="col-md-2 skill-title-wrap">
                   <h2 className="skill-title">My skills</h2>
                </div>
                <div className="col-md-5 skill-style">
                   <div className="w-100">
                    <p className="skill-p">React</p>
                    <span className="skill-span text-right">90%</span>
                   </div>
                    <div className="clearfix"></div>
                    <div className="skill-bar mb-3">
                        <div className="progress-bar" style={{width: "90%"}}></div>
                    </div>
                    <div className="w-100">
                        <p className="skill-p">HTML CSS</p>
                        <span className="skill-span text-right">95%</span>
                    </div>
                    <div className="skill-bar mb-3">
                        <div className="progress-bar" style={{width: "95%"}}></div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="w-100">
                        <p className="skill-p">Javascript</p>
                        <span className="skill-span text-right">90%</span>
                    </div>
                    <div className="skill-bar mb-3">
                        <div className="progress-bar" style={{width: "90%"}}></div>
                    </div>
                    <div className="w-100">
                        <p className="skill-p">UI UX</p>
                        <span className="skill-span text-right">98%</span>
                    </div>
                    <div className="skill-bar mb-3">
                        <div className="progress-bar" style={{width: "98%"}}></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;