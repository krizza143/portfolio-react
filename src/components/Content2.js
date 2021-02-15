import React from 'react'
import workex from '../img/workex.jpg';
import {Carousel} from 'react-bootstrap';
import AOS from 'aos';

const Content2 = () => {
    AOS.init();
    AOS.refresh();
    return (
        // <!--Experience-->
        <div id="worksexp" className="container-fluid padding">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-lg-6 col-md-12 justify-content-center align-self-center">
                        <h2 className="mb-3">Work Experiences</h2>
                    <Carousel interval={10000000}>
                        <Carousel.Item>
                            <h3 className="mb-0">Full-time Web Designer</h3>
                            <h4>SponsoredLinX</h4>
                            <small>May 2017 – April 2020</small>
                            <p className="mt-3">SponsoredLinX is a digital marketing agency, delivering advanced digital solutions for SMEs across Australia and New Zealand. I built and designed landing pages and websites for local and foreign clients. Applied styling via HTML and CSS.
                                Implemented content and styling into the website using CMS such as ConvertoPages (the company's own landing page builder), WordPress, and Duda. Quality checked the designs of fellow web designers before publishing.</p>
                            <p>Provided images and stock from existing website and stock photo libraries. Improved images provided by the client using Adobe Photoshop. Provided SEO meta title, meta keywords, meta description. Used Asana to keep track and manage tasks. Home-based work setup.
                            </p>
                        </Carousel.Item>

                        <Carousel.Item>
                            <h3 className="mb-0">Web Developer/Graphic Designer</h3>
                            <h4>CJ IT Solutions Team</h4>
                            <small>May 2017 – July 2018</small>
                            <p className="mt-3">CJ IT Solutions Team is a small group of talented web developer/designer and graphic designer freelancers based in the Philippines.</p>
                            <p>I developed websites using HTML, CSS, Bootstrap, MySQL, and PHP. Designed logos, banners, and posters for Facebook pages of different local businesses using Adobe Photoshop and Adobe Lightroom. Tasked to edit video clips using Adobe Premier. Assigned to quality check the designs of fellow web developers.</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3 className="mb-0">Student Intern</h3>
                            <h4>Management Information Section, Glory (Philippines), Inc.</h4>
                            <small>March 2016 – June 2016</small>
                            <p className="mt-3">
                            Glory (Philippines) Inc. is a domestic corporation, engaged in manufacturing of currency handling machines.</p>   
                            <p>As an intern I was allowed to contribute to the company’s local web-based systems. Updated the information displayed in the Company local website. Tasked to create and record new employee ID badges. Troubleshoot computers, laptops, printers and other devices within the company.</p>     
                        </Carousel.Item>
                        <Carousel.Item>
                            <h3 className="mb-0">READS Grantee (Student Assistant)</h3>
                            <h4>SSC-R de Cavite</h4>
                            <small>May 2013 – May 2017</small>
                            <h6 className="mt-3">Public Relations Office:</h6>
                                <p>Designed advertising materials such as announcements, tarpaulins, brochures, calendar, cards, etc using Adobe Photoshop and Adobe InDesign. Designed announcements and banners for the school’s website. Maintained the school’s Facebook page. Handled personal, phone, and online inquiries of students, parents, and other institutions. I also photographed school and outside events.
                            </p>      	
                            <h6>Computer Laboratory:</h6>
                                <p>Managed three computer laboratories. Assisted students and professors with computer usage.
                            </p>	
                         </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-6 col-md-12 order-md-first order-first order-lg-last content1">
                        <img src={workex} className="img-fluid mx-auto d-lg-block d-xs-block" />
                </div>
            </div>
        </div>
    )
    
}

export default Content2
