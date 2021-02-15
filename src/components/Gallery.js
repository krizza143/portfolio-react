import React from 'react'
import w1 from '../img/portfolio/1.jpg';
import w2 from '../img/portfolio/2.jpg';
import w3 from '../img/portfolio/3.jpg';
import w4 from '../img/portfolio/4.jpg';
import w5 from '../img/portfolio/5.jpg';
import w6 from '../img/portfolio/6.jpg';
import w7 from '../img/portfolio/7.jpg';
import w8 from '../img/portfolio/8.jpg';
import w9 from '../img/portfolio/9.jpg';
import w10 from '../img/portfolio/10.jpg';
import w11 from '../img/portfolio/11.jpg';
import w12 from '../img/portfolio/12.jpg';
import w13 from '../img/portfolio/13.jpg';
import w14 from '../img/portfolio/14.jpg';
import w15 from '../img/portfolio/15.jpg';
import w16 from '../img/portfolio/16.jpg';
import AOS from 'aos';

const Gallery = () => {    
    AOS.init();
    AOS.refresh();
    return (
        // <!--Works-->
	<div id="works" className="container-fluid padding">
		<div className="row animated fadeInDown">
			<div className="col-12 animated fadeInDown text-center">
			    <p className="mb-0">Here are some of my</p>
			    <h2 className="mb-4">Works</h2>
			</div>
		</div>
		<div className="row" data-aos="fade-up" data-aos-duration="1000">
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w1} />
				        <a href="https://www.sponsoredlinksreviews.com.au/" target="_blank">
				        <div className="caption">
				            <div className="cap">
				            	<h4>SponsoredLinX Reviews</h4>
				                <small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
            <div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w2} />
				        <a href="https://www.westerncheapbinhire.com.au/" target="_blank">
				        <div className="caption">
				            <div className="cap">
				            	<h4>Western Cheap Bin Hire</h4>
								<small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
            <div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w3} />
				        <a href="http://pages.convertopages.com/concretesolutionsltd/Concrete-Repairs/" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>Concrete Solutions</h4>
				                 <small>Created using</small>
				                <h5>Convertopage</h5>
				                <small>Landing Page Builder owned by SponsoredLinX</small>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
            <div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w4} />
				        <a href="http://pages.convertopages.com/raywhiteipswich/Market-Appraisals" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>Ray White Ipswich</h4>
				                <small>Created using</small>
				                <h5>Convertopage</h5>
				                <small>Landing Page Builder owned by SponsoredLinX</small>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
            <div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w5} />
				        <a href="https://www.waemergencymanagement.com.au/" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>WA Emergency Management</h4>
				                <small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
            <div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w6} />
				        <a href="http://cairnsdiesel.com.au/" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>Cairns Diesel Service</h4>
								<small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w7} />
				    	<a href="https://aev-photography.com.au/" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>AEV Photography</h4>
				                <small>Created using</small>
				                <h5>Convertopage</h5>
				                <small>Landing Page Builder owned by SponsoredLinX</small>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w8} />
				        <a href="https://tiger-hawk-upholstery.com.au/" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>Tiger Hawk Upholstery</h4>
				                <small>Created using</small>
				                <h5>Convertopage</h5>
				                <small>Landing Page Builder owned by SponsoredLinX</small>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w9} />
				    	<a href="https://drive.google.com/drive/folders/1J5H86EFOAY7z_WCx0l50qMHhXtVSGrqx?usp=sharing" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>Williams Electrical</h4>
				                <small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w10} />
				    	<a href="http://pages.convertopages.com/platinumbrowssydney/Eyebrow-Beauty/">
				        <div className="caption">
				            <div className="cap">
				                <h4>Platinum Brows Sydney</h4>
								 <small>Created using</small>
				                <h5>Convertopage</h5>
				                <small>Landing Page Builder owned by SponsoredLinX</small>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w11} />
				    	<a href="https://drive.google.com/drive/folders/11BDMMrfJwTU0ZOMoxObvtPm1A0zjPlW0?usp=sharing">
				        <div className="caption">
				            <div className="cap">
				                <h4>One Direction Australia</h4>
				                <small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w12} />
				    	<a href="https://drive.google.com/file/d/1x5o47g85CQjXxa6MhsFdyTTC9jaTu9SC/view?usp=sharing" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>maffey.com</h4>
				                <small>Created using</small>
				                <h5>Convertopage</h5>
				                <small>Landing Page Builder owned by SponsoredLinX</small>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w13} />
				    	<a href="https://drive.google.com/drive/folders/1IF0fT_nb5bBGkVG5rpJqyuYkonf6b0OD?usp=sharing" target="_blank">
				        <div className="caption">
				            <div className="cap">
				                <h4>LML Human Resources</h4>
				                <small>Created using</small>
				                <h5>Bootstrap & PHP</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w14} />
				    	<a href="www.quick-seal.com.au">
				        <div className="caption">
				            <div className="cap">
				                <h4>Quick Seal</h4>
								 <small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w15} />
				    	<a href="https://drive.google.com/drive/folders/1FXVOuyz4O_3T6mqX5EUlCjvs0Fvu2GKD?usp=sharing">
				        <div className="caption">
				            <div className="cap">
				                <h4>Best Option Training</h4>
				                <small>Created using</small>
				                <h5>DUDA</h5>
				            </div>
				        </div></a>
				    </div>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 pl-md-1 pr-md-1 mb-3">
				<div className="box">
				    <div className="figure">
                        <img src={w16} />
				        <div className="caption">
				            <a href="https://drive.google.com/file/d/17uyPuG949kWvEyuymEUJKIZ5ik5MkFLr/view?usp=sharing" target="_blank">
				            	<div className="cap">
				                <h4>Viking Prestige Performance Detail</h4>
				                <small>Created using</small>
				                <h5>Convertopage</h5>
				                <small>Landing Page Builder owned by SponsoredLinX</small>
				            </div></a>
				        </div>
				    </div>
				</div>
			</div>


		</div>

		<div className="row pl-lg-5 pr-lg-5 animated fadeInDown">
			<div className="col-12 text-center mt-3">
					<a href="https://drive.google.com/drive/folders/1KeAUZQTPb5iJzpPv-NAv_Dtjpdk72-m2?usp=sharing" target="_blank" className="btn btn-outline"><p>SEE MORE</p></a>
			</div>
		</div>
	</div>
    )
}

export default Gallery
