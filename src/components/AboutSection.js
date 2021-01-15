import React from 'react';
import home1 from '../img/renelle.jpg';
import {About, Description, Image, Hide} from '../styles';
//Framer Motion
import {motion} from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Hi, I'm Renelle Tigue
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            a <span>Shopify Developer</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            and a CRO Expert.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>I help Shopify store owners <span>increase their sales</span> by developing a high-converting Shopify store.</motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </About>
    )
};

//Styled Components


export default AboutSection