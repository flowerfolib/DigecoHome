import React from "react";
import '../post/post.css';
import PostItem from "./post_item";

export default function Post() {

	let listpost = [
		{
			image:"../../img/blog/blog7.jpg",
			date:"Feb 18, 2019",
			title:"5 Ways Technology Today at Improved Business",
			delay:"100"
		},
		{
			image:"../../img/blog/blog8.jpg",
			date:"Feb 18, 2019",
			title:"How Wireless Technology more Changing Business",
			delay:"600"
		},
		{
			image:"../../img/blog/blog9.jpg",
			date:"Feb 18, 2019",
			title:"Thirty surrogate mothers the trafficking.",
			delay:"1100"
		},
	];

	let renderUI = listpost.map((item, index) => {
		return <PostItem 
					key={index}
					image={ item.image }
					date={ item.date }
					title={ item.title }
					delay={ item.delay }
				/>
	})

    return (

        <section className="section-padding-md position-relative mb-5">
			<div className="container">
				<div className="section-heading heading-dark heading-layout1">
					<h2 className="heading-main-title">Popular Blog Posts</h2>
					<p className="heading-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since</p>
				</div>
				<div className="row">
					{ renderUI }
				</div>
			</div>
		</section>
    );
}