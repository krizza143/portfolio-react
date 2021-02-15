import React from 'react'
import t1 from '../img/t1.png';
import t2 from '../img/t2.png';
import t3 from '../img/t3.png';
import t4 from '../img/t4.png';
import t5 from '../img/t5.png';
import t6 from '../img/t6.png';
import AOS from 'aos';

const Testimonials = () => {
    AOS.init();
    AOS.refresh();
    return (
        <>
        <section id="#testimonials" className="section-medium section-arrow--bottom-center section-arrow-primary-color bg-primary">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-white text-center">
                        
                        <h2 className="mb-0">Testimonials</h2>
                        <p>
                            from some of my clients and colleagues
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container-fluid paddings">
                <div className="row testimonial-three testimonial-three--col-three" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-lg-6 testimonial-three-col">
                        <div className="testimonial-inner">
                            <div className="testimonial-image" itemProp="image">
                                <img src={t1} width="180" height="180"/>
                            </div>
                            <div className="testimonial-content">
                                <p><q>
                                    Hey Krizza, Thank you so much for your hard work and everything you have done for every project and client we have had. I truly appreciate the work and fixups you have done for me and just being a generally lovely person to work with ♥
                                </q></p>
                            </div>
                            <div className="testimonial-meta">
                                <strong className="testimonial-name" itemProp="name">Jenny</strong>
                                <span className="testimonial-job-title" itemProp="jobTitle">Web Project Coordinator, SponsoredLinX</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 testimonial-three-col">
                        <div className="testimonial-inner">
                            <div className="testimonial-image" itemProp="image">
                                <img src={t2} width="180" height="180"/>
                            </div>
                            <div className="testimonial-content">
                                <p><q>
                                Hi Krizza, you are my favourite OS designer, you have more skill than so many I have had to deal with
                                </q></p>
                            </div>

                            <div className="testimonial-meta">
                                <strong className="testimonial-name" itemProp="name">Budh</strong>
                                <span className="testimonial-job-title" itemProp="jobTitle">Web Developer/Web Project Team Leader, SponsoredLinX</span>
                            </div>
                            
                        </div>
                    </div>

                    <div className="col-lg-6 testimonial-three-col">
                        <div className="testimonial-inner">
                            <div className="testimonial-image" itemProp="image">
                                <img src={t3} width="180" height="180"/>
                            </div>
                            <div className="testimonial-content">
                                <p><q>
                                    This is ten times better than what they originally had, they are going to love it, thanks Krizza Barzaga
                                </q></p>
                            </div>
                            <div className="testimonial-meta">
                                <strong className="testimonial-name" itemProp="name">Top Dog Training School</strong>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 testimonial-three-col">
                        <div className="testimonial-inner">
                            <div className="testimonial-image" itemProp="image">
                                <img src={t4} width="180" height="180"/>
                            </div>
                            <div className="testimonial-content">
                                <p><q>
                                Very nice Krizza Barzaga, you didn't have much to work with but you made it look great, I particularly like the graphic behind the phone number in the header
                                </q></p>
                            </div>

                            <div className="testimonial-meta">
                                <strong className="testimonial-name" itemProp="name">Waimak Engineering Ltd</strong>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 testimonial-three-col">
                        <div className="testimonial-inner">
                            <div className="testimonial-image" itemProp="image">
                                <img src={t5} width="180" height="180"/>
                            </div>
                            <div className="testimonial-content">
                                <p><q>
                                Krizza is one of the great and inspiring lady I know that can excel well in the industry of IT. She got the creativity to solve problems and hardwork to back it up. You can say she's one of the Women in Tech that we need in today's more diversed digital world.
                                </q></p>
                            </div>
                            <div className="testimonial-meta">
                                <strong className="testimonial-name" itemProp="name">Matthew</strong>
                                <span className="testimonial-job-title" itemProp="jobTitle">Java Developer, Fujitsu Philippines</span>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-6 testimonial-three-col">
                        <div className="testimonial-inner">
                            <div className="testimonial-image" itemProp="image">
                                <img src={t6} width="180" height="180"/>
                            </div>
                            <div className="testimonial-content">
                                <p><q>
                                This young lady is credible, hardworking individual and passionate in every project. She is also a good teamplayer. Krizza is not just a worker but a partner of the company to its success.
                                </q></p>
                            </div>
                            <div className="testimonial-meta">
                                <strong className="testimonial-name" itemProp="name">Eres</strong>
                                <span className="testimonial-job-title" itemProp="jobTitle">Quality Assurance, Honcho Philippines</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</>
    )
}

export default Testimonials
