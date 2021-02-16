import React from 'react'
import AOS from 'aos';

const Contact = () => {
    AOS.init();
    AOS.refresh();
    return (
        // <!--Contact-->
        <div id="contact" className="container-fluid padding">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                <div className="col-lg-6 col-md-12 align-self-center cimage">
                </div>
                <div className="col-lg-6 col-md-12 justify-content-center align-self-center pl-lg-5">
                    <h2 className="mb-3">Contact Me</h2>
                    <p className="mb-3">If you want to know more about me feel free to check my social media accounts or send an email.</p>
                    <p><a href="https://linkedin.com/in/krizza-barzaga" target="_blank">
                    <i className="fab fa-linkedin"></i>krizza-barzaga</a></p>

                    <p><a href="https://www.facebook.com/kjm.barzaga" target="_blank">
                    <i className="fab fa-facebook-square"></i>kjm.barzaga</a></p>

                    <p><a href="https://twitter.com/kjmsbarzaga" target="_blank">
                    <i className="fab fa-twitter"></i>@kjmsbarzaga</a></p>

                    <p><a href="https://www.instagram.com/krizzcakee/" target="_blank">
                    <i className="fab fa-instagram-square"></i>@krizzcakee</a></p>

                    <p><i className="fas fa-envelope"></i>kimbarzaga@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
