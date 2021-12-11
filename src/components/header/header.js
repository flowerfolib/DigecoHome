import React from "react";
import '../header/header.css';
import $ from 'jquery';
import MenuItem from './menu_item';
import Option from './option';

export default function Header() {
	$(window).on('scroll', function() {
		if ($('header').hasClass('sticky-on')) {
			var stickyPlaceHolder = $("#sticky-placeholder"),
			menu = $("#navbar-wrap"),
			menuH = menu.outerHeight(),
			topbarH = $('#topbar-wrap').outerHeight() || 0,
			targrtScroll = topbarH,
			header = $("header");
			if ($(window).scrollTop() > targrtScroll) {
				header.addClass('sticky');
				stickyPlaceHolder.height(menuH);
			} else {
				header.removeClass('sticky');
				stickyPlaceHolder.height(0);
			}
		}
	});

	$(document).ready(function() {
		$('.open-mobile-menu').click(function() {
			$('.menu-mobile').addClass('animate-mobile-menu')
		})
		$('.close-mobile-menu').click(function() {
			$('.menu-mobile').removeClass('animate-mobile-menu')
		})
	})

	let listTemplate = [
		{
			image:"../../img/menu/home1.jpg",
			url:"#",
			title:"Technology",
		},
		{
			image:"../../img/menu/home2.jpg",
			url:"#",
			title:"Digital Marketing",
		},
		{
			image:"../../img/menu/home3.jpg",
			url:"#",
			title:"Startup Agency",
		},
		{
			image:"../../img/menu/home4.jpg",
			url:"#",
			title:"App Landing",
		},
		{
			image:"../../img/menu/home5.jpg",
			url:"#",
			title:"Digital Agency",
		},
		{
			image:"../../img/menu/home6.jpg",
			url:"#",
			title:"Digital Agency 2",
		},
		{
			image:"../../img/menu/home7.jpg",
			url:"#",
			title:"Saas Landing",
		},
		{
			image:"../../img/menu/home8.jpg",
			url:"#",
			title:"Social Media Marketing",
		},
		{
			image:"../../img/menu/home9.jpg",
			url:"#",
			title:"Software Landing",
		},
		{
			image:"../../img/menu/home10.jpg",
			url:"#",
			title:"CRM Software",
		},
		{
			image:"../../img/menu/home11.jpg",
			url:"#",
			title:"CRM Software",
		},
	]
	let listhome = [
		{
			url:"#",
			title:"Home - 1",
		},
		{
			url:"#",
			title:"Home - 2",
		},
		{
			url:"#",
			title:"Home - 3",
		},
		{
			url:"#",
			title:"Home - 4",
		},
		{
			url:"#",
			title:"Home - 5",
		},
		{
			url:"#",
			title:"Home - 6",
		},
		{
			url:"#",
			title:"Home - 7",
		},
		{
			url:"#",
			title:"Home - 8",
		},
		{
			url:"#",
			title:"Home - 9",
		},
		{
			url:"#",
			title:"Home - 10",
		},
		{
			url:"#",
			title:"Home - 11",
		},
	]
	let listService = [
		{
			url:"#",
			title:"Services - 01",
		},
		{
			url:"#",
			title:"Services - 02",
		},
		{
			url:"#",
			title:"Services - 03",
		},
	] 
	let listprofolio = [
		{
			url:"#",
			title:"Portfolio Details 1",
		},
		{
			url:"#",
			title:"Portfolio Details 2",
		},
		{
			url:"#",
			title:"Portfolio Details 3",
		},{
			url:"#",
			title:"Portfolio Details 4",
		},
		{
			url:"#",
			title:"Portfolio Details 5",
		},
		{
			url:"#",
			title:"Portfolio Details 6",
		},
	]
	let listPage = [
		{
			url:"#",
			title:"About Us 1",
		},
		{
			url:"#",
			title:"About Us 2",
		},
		{
			url:"#",
			title:"Our Pricing 1",
		},
		{
			url:"#",
			title:"Our Pricing 2",
		},
		{
			url:"#",
			title:"Team Page",
		},
		{
			url:"#",
			title:"404 Page",
		},
		{
			url:"#",
			title:"FAQ Page",
		},
		{
			url:"#",
			title:"Coming Soon",
		},
	]
	let listBlog = [
		{
			url:"#",
			title:"Blog Grid",
		},
		{
			url:"#",
			title:"Blog List",
		},
		{
			url:"#",
			title:"Blog Masonry",
		},
		{
			url:"#",
			title:"Blog Single",
		},
	]
	let renderMenuFirst = listTemplate.map((item, index) => {
		return <MenuItem 
					key={index}
					image={item.image}
					url={item.url}
					title={item.title}
				/>
	})
	let renderMenuSecond = listhome.map((item, index) => {
		return <Option key={index} url={item.url} title={item.title} />
	})
	let renderServices = listService.map((item, index) => {
		return <Option key={index} url={item.url} title={item.title} />
	})
	let renderprofolio = listprofolio.map((item, index) => {
		return <Option key={index} url={item.url} title={item.title} />
	})
	let listpage = listPage.map((item, index) => {
		return <Option key={index} url={item.url} title={item.title} />
	})
	let listblog = listBlog.map((item, index) => {
		return <Option key={index} url={item.url} title={item.title} />
	})

    return (
        <header className="sticky-on position-relative">
			<div id="sticky-placeholder"></div>
				<div id="navbar-wrap" className="navbar-wrap position-relative">
					<div className="navbar-layout position-fixed w-100">
						<span className="position-absolute open-mobile-menu d-lg-none"><i className="fas fa-bars"></i></span>
						<div className="container">
							<div className="row no-gutters d-flex align-items-lg-center position-relative">
								<div className="col-lg-2 col-6 my-3 my-lg-0 d-flex justify-content-start">
									<div className="temp-logo text-center position-relative">
										<a href="index.html" className="default-logo">
											<img src="../../img/logo-dark.png" alt="logo" className="img-fluid" />
										</a>
										<a href="index.html" className="sticky-logo position-absolute">
											<img src="../../img/logo-dark.png" alt="logo" className="img-fluid" />
										</a>
									</div>
								</div>
								<div className="col-lg-8 col-2 order-lg-0 d-flex justify-content-end possition-static">
									<nav id="dropdown" className="template-main-menu">
										<ul className="d-flex justify-content-center mb-0 menu-mobile">
											<li className="position-static d-none d-lg-block">
												<a href="#">Home</a>
												<div className="mega-menu-container position-absolute p-3">
													<div className="row">
														{ renderMenuFirst }
													</div>
												</div>
											</li>
											<li className="position-absolute">
												<span className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></span>
											</li>
											<li className="d-block d-lg-none">
												<a href="#">Home</a>
												<ul className="dropdown-menu-col-1 drop-menu-style position-absolute py-3 border-top-0">
													{ renderMenuSecond }
												</ul>
											</li>
											<li>
												<a href="#">Services</a>
												<ul className="dropdown-menu-col-1 drop-menu-style position-absolute py-3 border-top-0">
													{ renderServices }
												</ul>
											</li>
											<li>
												<a href="#">Portfolio</a>
												<ul className="dropdown-menu-col-1 drop-menu-style position-absolute py-3 border-top-0">
													{ renderprofolio }
												</ul>
											</li>
											<li>
												<a href="#">Pages</a>
												<ul className="dropdown-menu-col-1 drop-menu-style position-absolute py-3 border-top-0">
													{ listpage }
												</ul>
											</li>
											<li>
												<a href="#">Blog</a>
												<ul className="dropdown-menu-col-1 drop-menu-style position-absolute py-3 border-top-0">
													{ listblog }
												</ul>
											</li>
											<li>
												<a href="contact.html"><span>Contact</span></a>
											</li>
										</ul>
									</nav>
								</div>
								<div className="col-lg-2 col-4 my-3 my-lg-0 d-none d-sm-flex justify-content-md-left justify-content-center">
									<ul className="header-action-items mb-0 d-none d-sm-block">
										<li className="single-item">
											<a href="#" className="item-btn btn-ghost btn-light">Get a Quote</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
    );
}