import React from "react";
import '../service/service.css';
import ServiceItem from "./service_item";

export default function Service() {
	
	let listService = [
		{
			delay:"100",
			icon:"fas fa-shield-alt",
			title:"Powerful System",
			description:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and ametion elit.",
		},
		{
			delay:"300",
			icon:"far fa-edit",
			title:"Perfect UI/UX",
			description:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and ametion elit.",
		},
		{
			delay:"500",
			icon:"fas fa-eraser",
			title:"Easily Editable",
			description:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and ametion elit.",
		},
		{
			delay:"700",
			icon:"far fa-clock",
			title:"High Performance",
			description:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and ametion elit.",
		},
	]

	let renderService = listService.map((item, index) => {
			return	<ServiceItem 
					key={index}
					delay={item.delay}
					icon={item.icon}
					title={item.title}
					description={item.description}
				/>
	})

    return (
        <section className="service-wrap-layout section-padding-md bg-color-accent4">
			<div className="container">
				<ul className="animated-shape position-relative d-none d-lg-block">
					<li>
						<div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
							<svg width="666px" height="536px">
								<path fillRule="evenodd"  fill="rgb(241, 245, 250)" d="M267.432,-0.005 C415.131,-0.005 424.350,190.082 548.659,269.886 C860.848,470.308 474.194,545.086 267.432,535.125 C119.904,528.020 -0.000,415.333 -0.000,267.560 C-0.000,119.786 119.733,-0.005 267.432,-0.005 Z"/>
							</svg>
						</div>
					</li>
				</ul>
				<div className="row">
					<div className="col-xl-6 col-12 d-flex align-items-center justify-content-center">
						<div className="service-box-layout text-sm-left mb-4 m-xl-0 mr-5 position-relative">
							<div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
								<h2 className="item-main-title mb-2">What Features You Will Get From App</h2>
							</div>
							<div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500">
								<p>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion and it consectetur elit. Vesti at bulum nec odio ipsumm ipsum that more dolocons suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend predefined
									the which looks dummy text reasonable.</p>
							</div>
							<div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1500">
								<a href="service-details.html" className="item-btn btn-ghost mt-4">Explore More<i className="fas fa-arrow-right"></i></a>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-12">
						<div className="service-box-layout text-sm-left mb-4 m-xl-0 mb-0">
							<div className="row masonry-items">
								{ renderService }
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}