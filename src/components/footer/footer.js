import React from "react";
import '../footer/footer.css';

export default function Footer() {

    return (
        <footer id="footer-wrap-layout4" className="footer-wrap-layout bg-gradient-layout4 position-relative">
			<ul className="shape-holder position-relative d-none d-md-table-row">
				<li className="single-shape position-absolute shape1">
					<div data-aos="fade-left" data-aos-duration="1800" data-aos-delay="50">
						<svg width="512px" height="512px">
							<defs>
								<linearGradient id="gradient-shape1" x1="0%" x2="50%" y1="86.603%" y2="0%">
									<stop offset="0%" stopColor="rgb(103,84,246)" stopOpacity="1" />
									<stop offset="100%" stopColor="rgb(92,74,248)" stopOpacity="1" />
								</linearGradient>
							</defs>
							<path fill="url(#gradient-shape1)" d="M256.000,-0.001 C397.385,-0.001 512.000,114.615 512.000,255.999 C512.000,397.385 397.385,511.999 256.000,511.999 C114.615,511.999 0.000,397.385 0.000,255.999 C0.000,114.615 114.615,-0.001 256.000,-0.001 Z"/>
						</svg>
					</div>
				</li>
				<li className="single-shape position-absolute shape2">
					<div data-aos="fade-left" data-aos-duration="1800" data-aos-delay="500">
						<svg width="457px" height="457px">
					<defs>
					<linearGradient id="gradient-shape2" x1="0%" x2="50%" y1="86.603%" y2="0%">
						<stop offset="0%" stopColor="rgb(115,99,253)" stopOpacity="1" />
						<stop offset="100%" stopColor="rgb(92,74,248)" stopOpacity="1" />
					</linearGradient>
					</defs>
						<path fill="url(#gradient-shape2)" d="M228.500,-0.000 C354.697,-0.000 457.000,102.303 457.000,228.500 C457.000,354.697 354.697,457.000 228.500,457.000 C102.303,457.000 0.000,354.697 0.000,228.500 C0.000,102.303 102.303,-0.000 228.500,-0.000 Z"/>
					</svg>
					</div>
				</li>
				<li className="single-shape position-absolute shape3">
					<div data-aos="fade-right" data-aos-duration="1800" data-aos-delay="900">
						<svg width="1132px" height="1132px">
							<defs>
								<linearGradient id="gradient-shape3" x1="0%" x2="50%" y1="86.603%" y2="0%">
									<stop offset="0%" stopColor="rgb(116,94,255)" stopOpacity="1" />
									<stop offset="100%" stopColor="rgb(146,23,224)" stopOpacity="1" />
								</linearGradient>
							</defs>
							<path fill="url(#gradient-shape3)" d="M566.000,-0.000 C878.593,-0.000 1132.000,253.406 1132.000,566.000 C1132.000,878.593 878.593,1131.999 566.000,1131.999 C253.407,1131.999 -0.000,878.593 -0.000,566.000 C-0.000,253.406 253.407,-0.000 566.000,-0.000 Z"/>
						</svg>
					</div>
				</li>
			</ul>
			<div className="container">
				<div className="section-heading heading-light heading-layout1">
					<h2 className="heading-main-title">Latest App Updates</h2>
					<p className="heading-paragraph">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm dolocons rsus mal suada</p>
				</div>
				<div className="text-center">
					<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
						<form action="php/subscribe.php" method="post" className="newsletter-form d-inline-block mx-auto mb-4">
							<div className="input-group stylish-input-group">
								<div className="item-icon position-absolute"><i className="far fa-paper-plane"></i></div>
								<input type="text" className="form-control" placeholder="Your email address" required />
								<span className="input-group-addon d-block position-relative">
								<button type="submit"><span>Subscribe</span></button>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="footer-top-layout">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-12">
							<div className="footer-widgets">
								<div className="footer-logo mb-3">
									<a className="d-inline-block" href="index.html"><img src="../../img/logo-light.png" alt="Logo" /></a>
								</div>
								<ul className="footer-contact mb-3">
									<li className="mail-address">info@yourdomain.com</li>
									<li className="phn-number">+001 548 159 2491</li>
								</ul>
								<ul className="footer-social d-flex justify-content-start flex-wrap align-items-center mb-2">
									<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#"><i className="fab fa-instagram"></i></a></li>
									<li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
									<li><a href="#"><i className="fab fa-youtube"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="footer-widgets">
								<h3 className="footer-widget-heading heading-light">Our Services</h3>
								<ul className="footer-menu">
									<li><a href="service-details.html">Web Design</a></li>
									<li><a href="service-details.html">Development</a></li>
									<li><a href="service-details.html">Graphic Design</a></li>
									<li><a href="service-details.html">Branding</a></li>
									<li><a href="service-details.html">Creative Solution</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="footer-widgets">
								<h3 className="footer-widget-heading heading-light">Important Link</h3>
								<ul className="footer-menu">
									<li><a href="about.html">About Us</a></li>
									<li><a href="#">How to work</a></li>
									<li><a href="contact.html">Contact Us</a></li>
									<li><a href="#">Our Media</a></li>
									<li><a href="#">Privacy</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12">
							<div className="footer-widgets">
								<h3 className="footer-widget-heading heading-light">Recent Posts</h3>
								<ul className="footer-post">
									<li>
										<div className="item-date">April 2, 2019</div>
										<h4 className="item-title"><a href="#">Work and Look Good in our ready the Process</a></h4>
									</li>
									<li>
										<div className="item-date">April 15, 2019</div>
										<h4 className="item-title"><a href="#">We're on a mission to build better future where technology.</a></h4>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-layout py-3">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-12">
							<div className="copy-right-left-box d-flex align-items-center justify-content-flex-start justify-content-lg-center h-100">
								<p className="copy-right-text mb-0">© 2020 <a href="https://www.radiustheme.com" rel="nofollow" target="_blank">RadiusTheme.</a> All Rights Reserved</p>
							</div>
						</div>
						<div className="col-sm-6 col-12">
							<div className="copy-right-right-box d-flex align-items-center justify-content-flex-end h-100 justify-content-lg-center">
								<p className="mb-0">Privacy Terms &amp; Conditions</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    );
}