import React from 'react'
import Typed from 'react-typed';
import AOS from 'aos';

const Banner = () => {
    AOS.init();
    AOS.refresh();
    return (
            <div className="banner container-fluid">
                <div className="row main-info text-lg-left text-md-center text-sm-center p-lg-5">
                    <div className="col-12" data-aos="fade-up" data-aos-duration="2000">
                        <p className="mb-1">Hi! Welcome to my portfolio, I am</p>
                        <h1>
                    <Typed 
                            className="mb-2 typed-text"
                            strings={['Krizza Barzaga']}
                            typeSpeed={55}
                            onComplete={(self) => self.cursor.remove()}
                        />
                        </h1>
                        <p className="mb-lg-4 mb-md-2 mb-sm-3">FRONT-END WEB DESIGNER</p>
                            <div className="col-lg-12 col-md-7 col-sm-6 mx-auto p-0">
                                <a className="btn btn-outline m-md-2" href="#aboutme"><p>ABOUT ME</p></a>
                                <a className="btn btn-outline m-md-2" href="#works"><p>WORKS</p></a>
                                <a className="btn btn-outline m-md-2" href="#skills"><p>SKILLS</p></a>
                                <a className="btn btn-outline m-md-2" href="#contact"><p>CONTACT</p></a>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Banner
