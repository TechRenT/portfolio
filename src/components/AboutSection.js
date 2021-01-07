import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <About>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera" />
            </div>
        </About>
    )
};

//Styled Components
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    .description {
        flex: 1;
        padding-right: 5rem;
        .hide {
            overflow: hidden;
            h2 {
                font-weight: lighter;
            }
        }
    }
    .image {
        flex: 1;
        overflow: hidden;
        img {
            width: 100%;
            height: 80vh;
            object-fit: cover;
        }
    }
`;

export default AboutSection