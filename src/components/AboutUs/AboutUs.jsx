import React from 'react';
import images from "../../constants/images";
import "./AboutUs.css";
import { Element } from 'react-scroll';

const AboutUs = () => (
    <Element name="about">
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h2 className='section__title text__cap'>about us</h2>
                <p className='para__text text__grey'>A group of passionate designers, developers, and strategiests dedicated to delivering exceptional digital solutions. We transform ideas into stunning digital experiences. We specialize in designing user-friendly websites and mobile applications that help businesses thrive in the digital world.</p>
                <img src = {images.signature} alt = "" />
            </div>
        </div>
    </div>
    </Element>
)

export default AboutUs;