import React from "react";
import '../pricing/pricing.css';
import Offer from "./offer";

export default function Pricing() {

	let listOffer = [
		{
			price_main:"19",
			price_extra:"99",
			title:"Reguler",
			populer: false
		},
		{
			price_main:"39",
			price_extra:"99",
			title:"Business",
			populer: true
		},
		{
			price_main:"59",
			price_extra:"99",
			title:"Corporate",
			populer: false
		},
		{
			price_main:"89",
			price_extra:"99",
			title:"Professional",
			populer: false
		},
	];

	let renderUI = listOffer.map((offer, index) => {
		return <Offer key={index} price_main={offer.price_main} price_extra={offer.price_extra} title={offer.title} populer={offer.populer}/>
	})

    return (
        <section className="pricing-wrap-layout bg-color-accent5">
			<div className="container">
				<div className="section-heading heading-dark heading-layout1">
					<h2 className="heading-main-title">Affordable Pricing</h2>
					<p className="heading-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since</p>
				</div>
				<div className="row justify-content-center">
					{ renderUI }
				</div>
			</div>
		</section>
    );
}