import React from 'react'
import krizza from '../img/krizza.jpg';
import pdf from '../img/CV_BARZAGA_2021.pdf';
import AOS from 'aos';

const Content = () => {
    AOS.init();
    AOS.refresh();
    return (
        <div id="aboutme" className="container-fluid padding">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-lg-6 col-md-12 content1">
                    <img src={krizza} className="img-fluid mx-auto d-lg-block d-xs-block" />
                </div>
                <div className="col-lg-6 col-md-12 justify-content-center align-self-center">
                    <h2>Hi I am Krizza!</h2>
                    <blockquote>
                        <h5 className="mb-0"><q>It’s not how good you are, it’s how good you want to be</q></h5> <i>Paul Arden</i>
                    </blockquote>
                    <p>Welcome to my portfolio! I enjoy working on front-end web designs for almost three years. I'm a B.S. in Information Technology graduate. Check out the list of my <a href="#skills">skills</a> below. This website was built using Bootstrap 4 and ReactJS. I used Figma, Adobe Photoshop and Adobe Illustrator for the design and for some elements. I wanted my portfolio to be clean and simple. I would love to collaborate and grow with an amazing web development team!</p>
                    <p>Click this to see the my <a href="https://www.figma.com/file/Ca7Ism8e5fZiITOGfJXk3m/Krizza-Barzaga-Portfolio?node-id=0%3A1" target="_blank">Portfolio Design</a> using Figma</p>
                    <p>Check out some of my works below, enjoy!</p>
                    <div className="buttonssssss">
                    <a className="btn btn-outline mr-md-3 firstbtn" href="#works"><p>MY PORTFOLIO</p></a>
                    <a className="btn btn-outline mr-md-3" href = {pdf} target="_blank"><p>DOWNLOAD CV</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
