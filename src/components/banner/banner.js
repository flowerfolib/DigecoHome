import React, { useEffect } from "react";
import '../banner/banner.css';
import Image from './animation_img';

export default function Banner() {

	let listImageAnimation = [
		{
			delay:"2600",
			image:"../../img/element/element32.png"
		},
		{
			delay:"2800",
			image:"../../img/element/element33.png"
		},
		{
			delay:"3000",
			image:"../../img/element/element34.png"
		},
	]
	let renderImage = listImageAnimation.map((item, index) => {
		return <Image key={index} delay={item.delay} image={item.image} />
	})

    return (
        <div className="main-banner main-banner-wrap-layout position-relative w-100 overflow-hidden">
			<div className="animated-figure">
				<ul>
					<li>
						<div data-aos="fade-down-left" data-aos-delay="100" data-aos-duration="1200">
							<svg width="1414px" height="1004px">
								<path fill="rgb(75, 26, 252)"
								d="M0.000,0.000 L1413.956,0.000 L1414.000,640.000 L1027.920,971.925 
								C1027.920,971.925 886.944,1068.191 774.490,927.151 L0.000,0.000 Z"/>
							</svg>
						</div>
					</li>
					<li>
						<div data-aos="fade-down-left" data-aos-delay="800" data-aos-duration="1200">
							<svg width="1245px" height="920px">
							<defs>
								<linearGradient id="shape-gradient" x1="0%" x2="50%" y1="86.603%" y2="0%">
									<stop offset="50%" stopColor="rgb(72,10,231)" stopOpacity="1" />
									<stop offset="100%" stopColor="rgb(127,6,238)" stopOpacity="1" />
								</linearGradient>
							</defs>
								<path fill="url(#shape-gradient)"
								d="M0.000,-0.000 L1245.000,-0.000 L1245.000,640.000 L941.000,890.000 
								C941.000,890.000 811.945,978.152 709.000,849.000 L0.000,-0.000 Z"/>
							</svg>
						</div>
					</li>
				</ul>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-6 order-xl-2 d-flex align-items-center">
						<div className="main-banner-box-layout position-relative ml-5">
							<div className="item-figure">
								<div data-aos="fade-left" data-aos-duration="1600" data-aos-delay="1600">
									<img className="w-100" src="../../img/illustration/illustration4.png" alt="Illustration" />
								</div>
								<div className="inner-animated-figure">
									<ul>{ renderImage }</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 order-xl-1 compress-left-side d-flex align-items-center">
						<div className="main-banner-box-layout" position-relative>
							<div  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400" >
								<h1 className="item-main-title">We Build Mobile Application</h1>
							</div>
							<div  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1600" >
								<p>Grursus mal suada faci lisis Lorem ipsum more ametion the consectetur ipsumm dolocons. </p>
							</div>
							<div  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1800" >
								<div  className="banner-btns d-flex align-items-center flex-wrap justify-content-center justify-content-xl-start flex-column flex-sm-row">
									<a href="#" className="item-btn btn-ghost btn-dark"><i className="fab fa-apple"></i>App Store</a>
									<a href="#" className="item-btn btn-ghost btn-dark mr-0"><img src="../../img/google-app.png" alt="google" />Google Play</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}