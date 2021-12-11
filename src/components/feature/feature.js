import React from "react";
import '../feature/feature.css';
import FeatureImg1 from './feature_img-1';
import FeatureImg2 from './feature_img-2';
import Content from './feature_content';

export default function Feature() {

	let listFeatureFirst = [
		{
			delay:"1200",
			image:"../../img/illustration/illustration5.png"
		},
		{
			delay:"1800",
			image:"../../img/illustration/illustration6.png"
		},
		{
			delay:"2200",
			image:"../../img/illustration/illustration7.png"
		},
		{
			delay:"2600",
			image:"../../img/illustration/illustration8.png"
		},
	]
	let listFeatureSeconds = [
		{
			delay:"100",
			image:"../../img/illustration/illustration9.png",
			space:"mt-5"
		},
		{
			delay:"400",
			image:"../../img/illustration/illustration11.png",
			space:""
		},
		{
			delay:"1000",
			image:"../../img/illustration/illustration10.png",
			space:""
		},
		{
			delay:"700",
			image:"../../img/illustration/illustration12.png",
			space:""
		},
	]
	let listContent = [
		{
			subtitle:"Our Apps",
			itemtitle:"We Offer Perfect Solution",
			content:"Grursus mal suada faci lisis Lorem ipsum dolarorit mor ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons is rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum at generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of the over 200 Latin words, combined with a handful of model sentence more as structures, to generate Lorem Ipsum which looks reasonable.",
		},
		{
			subtitle:"We Offer",
			itemtitle:"Apps Features & Support Which Give You More Freedom",
			content:"Grursus mal suada faci lisis Lorem ipsum dolarorit mor ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons is rsus mal suada and fadolorit"
		}
	]

	let renderFeatureFirst = listFeatureFirst.map((item, index) => {
		return <FeatureImg1
				key={index}
				delay={item.delay}
				image={item.image}
			/>
	})

	let renderFeatureSecond = listFeatureSeconds.map((item, index) => {
		return <FeatureImg2
				key={index}
				delay={item.delay}
				image={item.image}
				space={item.space}
			/>
	})

	let renderContent = (n) => {
		return <Content 
				key={n}
				subtitle={listContent[n].subtitle}
				itemtitle={listContent[n].itemtitle}
				content={listContent[n].content}
			/>
	}

    return (
        <section className="feature-wrap-layout overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-7 col-12">
						<div className="feature-box-layout position-relative mt-2">
							<div className="animated-shape1 text-right d-none d-sm-block">
								<div data-aos="fade-right" data-aos-duration="1800" data-aos-delay="50">
									<img src="../../img/element/element35.png" alt="Animated Shape" />
								</div>
							</div>
							<div className="animated-figure1">
								<ul>{ renderFeatureFirst }</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-5 col-12 d-flex align-items-center justify-content-center">
						<div className="feature-box-layout position-relative">
							{ renderContent(0) }
							<div  data-aos="fade-up" data-aos-duration="800" data-aos-delay="1300">
								<a href="about.html" className="item-btn btn-ghost btn-gradient">Read More<i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12 order-lg-2">
						<div className="feature-box-layout position-relative">
							<div className="animated-figure2">
								<div className="row masonry-items">{ renderFeatureSecond }</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12 order-lg-1 d-flex align-items-center justify-content-center">
						<div className="feature-box-layout position-relative">
							{ renderContent(1) }
							<div data-aos="fade-up" data-aos-duration="800" data-aos-delay="1300">
								<ul className="list-item">
									<li>Lorem ipsum dolarorit ametion consectetur elit.</li>
									<li>Vesti at bulum nec odio aea the dumm ipsumm ipsum</li>
									<li>Grursus mal suada faci lisis Lorem ipsum dolarorit.</li>
									<li>Suada faci lisis Lorem ipsum dolarorit.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}