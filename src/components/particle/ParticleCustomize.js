import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./Particle-config"

const ParticleCustomize = () => {
    return (
        <div>
            <Particles params={particleConfig}>
            </Particles>
        </div>
    );
};

export default ParticleCustomize;