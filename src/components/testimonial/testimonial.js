import React from "react";
import '../testimonial/testimonial.css';
import '../../style/slick.css';
import Slider from "react-slick";
import Viewer from './reviewer';

export default function Testimonial() {

	let listCustomer = [
		{
			title:"Modern Design & very friendly",
			comment:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada and the fadolorit to is the consectetur elit.",
			image:"../../img/testimonial/testimonial1.jpg",
			name:"Robert Bruce",
			position:"Apps Developer",
		},
		{
			title:"Modern Design & very friendly",
			comment:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada and the fadolorit to is the consectetur elit.",
			image:"../../img/testimonial/testimonial2.jpg",
			name:"Cassie Ventura",
			position:"Apps Developer",
		},
		{
			title:"Modern Design & very friendly",
			comment:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada and the fadolorit to is the consectetur elit.",
			image:"../../img/testimonial/testimonial1.jpg",
			name:"Robert Bruce",
			position:"Apps Developer",
		},
		{
			title:"Modern Design & very friendly",
			comment:"Grursus mal suada faci lisis Lorem ipsum dolarorit more and dumm ametion consectetur elit. Vesti at bulum nec odio aea the of dumm ipsumm ipsum that dolocons rsus mal suada and the fadolorit to is the consectetur elit.",
			image:"../../img/testimonial/testimonial2.jpg",
			name:"Cassie Ventura",
			position:"Apps Developer",
		},
	];

	let renderUI = listCustomer.map((customer, index) => {
		return <Viewer 
				title={customer.title}
				comment={customer.comment}
				image={customer.image}
				name={customer.name}
				position={customer.position}
			/>
	})

	var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
            }
          },
		  {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
      };

    return (
        <section className="testimonial-wrap-layout4 overflow-hidden">
				<ul className="figure-holder position-relative d-none d-md-block">
					<li className="animated-bg position-absolute text-center">
						<div data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">
							<svg className="text-center my-0 mx-auto" width="864px" height="804px">
								<defs>
									<linearGradient id="bg-gradient" x1="0%" x2="50%" y1="86.603%" y2="0%">
										<stop offset="0%" stopColor="rgb(245,249,254)" stopOpacity="1" />
										<stop offset="100%" stopColor="rgb(254,254,254)" stopOpacity="1" />
									</linearGradient>
								</defs>
								<path fill="url(#bg-gradient)"
									d="M77.853,319.111 C63.192,321.947 49.452,324.803 41.420,330.595 
									C4.597,357.168 -11.552,419.078 9.055,459.072 C52.264,542.942 
									199.370,519.894 242.980,603.557 C254.648,625.944 256.136,652.068 
									262.812,676.420 C280.517,741.024 338.768,792.570 405.050,802.295 
									C471.335,812.016 541.935,779.371 577.454,722.571 C596.045,692.838 
									605.621,657.532 628.200,630.701 C666.498,585.204 732.383,574.550 
									779.287,537.987 C834.608,494.855 856.596,421.142 862.292,351.227 
									C868.318,277.290 859.102,200.578 824.578,134.918 C790.064,69.261 
									727.973,16.025 654.960,2.876 C581.945,-10.272 500.014,22.295 
									464.639,87.499 C446.925,120.153 439.437,160.865 409.468,182.821 
									C374.760,208.243 325.695,196.755 286.753,178.454 C247.814,160.159 
									208.936,135.475 165.947,137.306 C109.878,139.700 58.057,206.464 
									113.605,245.483 C124.813,253.354 136.614,263.173 138.219,276.769 
									C141.856,307.564 107.926,313.294 77.853,319.111 Z"/>
							</svg>
						</div>
					</li>
				</ul>
				<div className="container">
					<div className="section-heading heading-dark heading-layout1">
						<h2 className="heading-main-title">User Review &amp; Feedback</h2>
						<p className="heading-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since</p>
					</div>
					<div className="timeline-carousel">
						<Slider {...settings} >
							{ renderUI }
						</Slider> 
					</div>
				</div>
		</section>
    );
}