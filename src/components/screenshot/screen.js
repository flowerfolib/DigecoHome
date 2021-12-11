import React from "react";
import '../screenshot/screen.css';
import '../../style/slick.css';
import Slider from "react-slick";
import ScreenItem from '../screenshot/screen_item';

export default function Screenshot() {
  
  let ListImage = [
    {
      image:"../../img/screen-shot/screen-shot1.jpg"
    },
    {
      image:"../../img/screen-shot/screen-shot2.jpg"
    },
    {
      image:"../../img/screen-shot/screen-shot3.jpg"
    },
    {
      image:"../../img/screen-shot/screen-shot4.jpg"
    },
    {
      image:"../../img/screen-shot/screen-shot5.jpg"
    },
    {
      image:"../../img/screen-shot/screen-shot2.jpg"
    },
    {
      image:"../../img/screen-shot/screen-shot3.jpg"
    }
  ]

	var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              dots: false,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1 
            }
          }
        ]
      };

    let renderUI = ListImage.map((image, index) => {
      return <ScreenItem key={index} image={image.image}/>
    })

    return (
        <section className="screen-shot-wrap-layout1 section-padding-top-md   overflow-hidden">
				<div className="container">
					<div className="section-heading heading-dark heading-layout1">
						<h2 className="heading-main-title">App Screenshot</h2>
						<p className="heading-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since</p>
					</div>
				</div>
				<div className="container-fluid screen-shot-carousel-wrap">
					<div className="timeline-carousel">
					<Slider {...settings} >
						{ renderUI }
					</Slider> 
					</div>
				</div>
			</section>
    );
}