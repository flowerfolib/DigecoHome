import React from "react";
import '../process/process.css';
import ProcessItem from './process_item';

export default function Process() {
	let listwork = [
		{
			image:"../../img/svg/download.svg",
			title:"Download app",
			description:"Lorem Ipsum is simply dummy text printing typesetting..",
			delay:"100",
		},
		{
			image:"../../img/svg/work.svg",
			title:"Choose plan",
			description:"Lorem Ipsum is simply dummy text printing typesetting..",
			delay:"600",
		},
		{
			image:"../../img/svg/scancode.svg",
			title:"Scan Code",
			description:"Lorem Ipsum is simply dummy text printing typesetting..",
			delay:"1100",
		},
		{
			image:"../../img/svg/key-1.svg",
			title:"Done Installation",
			description:"Lorem Ipsum is simply dummy text printing typesetting..",
			delay:"1600",
		},
	]

	let renderWork = listwork.map((item, index) => {
		return <ProcessItem 
					key={index}
					image={ item.image }
					delay={ item.delay }
					title={ item.title }
					description={ item.description }
				/>
	})

    return (
        <section className="process-wrap-layout position-relative">
				<div className="container">
					<div className="section-heading heading-dark heading-layout1">
						<h2 className="heading-main-title">How It Works</h2>
						<p className="heading-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since</p>
					</div>
					<div className="row">
						{ renderWork }
					</div>
				</div>
			</section>
    );
}