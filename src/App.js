import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useLocation
  } from "react-router-dom";
import logo from './img/logo.png';
import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/hamburgers.css';
import './css/slick-theme.css';
import './css/slick.css';
import './css/style.css';
import './css/media.css';
import $ from 'jquery';
import './js/slick.js';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="page-content">
					<Header />
					<Switch>
						<Route exact path="/" onChange={reInitializeSlider}>
							<Homepagecontent />
						</Route>
						<Route path="/contact-us" component={ContactUs} onChange={reInitializeSlider} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

function reInitializeSlider(idName){
	$('.slick1').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToScroll: 1,
		slidesToShow: 1,
		adaptiveHeight: true,
		fade: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					
				}
			}]
	}); 
}
class Header extends React.Component {
	render(){
		return (
			<div>
				<div className="header_up boxs">
					<div className="container">
						<div className="row">
							<p><a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>+91 9653930399</p>
							<h1 className="icon"> <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></h1>
						</div>
					</div>
				</div>
				<div className="header">
					<div className="container">
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<div className="navbar-header">
									<button className="hamburger hamburger--squeeze" type="button" aria-label="Menu" aria-controls="navigation">
										<span className="hamburger-box">
											<span className="hamburger-inner"></span>
										</span>
									</button>
									<a className="navbar-brand" href="/">
										<img src={logo} alt="logo" />
									</a>
								</div>

								<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
									<ul className="nav navbar-nav navbar-right">
										<li >
											<Link to="/">HOME</Link>
										</li>
										<li className="service"><a href="help" > service<i className="fa fa-chevron-down" aria-hidden="true"></i></a>
											<div className="sub-menu">
												<div className="col-sm-12 nopadding">
													<div className="col-sm-4 same-menu">
														<ul>
															<li className="head-menu"><span>Graphic Designing</span></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">UI / UX Design </a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Flyer Design</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Logo Design</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Illustration Services</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Infographic Design</a></li>

														</ul>
														<ul>
															<li className="head-menu"><span>E-Commerce and MarketPlace</span></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">PrestaShop Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">WooCommerce Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Shopify Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">BigCommerce Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">E-Commerce Maintenance & Support</a></li>
														</ul>
													</div>
													<div className="col-sm-4 same-menu">
														<ul>
															<li className="head-menu"><span>Custom Web Development</span></li>

															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">(PHP) Open Source Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Migration (Websites) Services</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">AngularJS Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Responsive Web Design</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Wordpress Development</a></li>
														</ul>


														<ul>
															<li className="head-menu"><span>Strategic Internet Marketing</span></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Search Engine Optimization (SEO)</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Social Media Marketing</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Adwords & Cross Platform Ads</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Content / Web Copywriting Services</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Online Reputation Management</a></li>

														</ul>
													</div>
													<div className="col-sm-4 same-menu">
														<ul>
															<li className="head-menu"><span>Mobile App Development</span></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Android App Development </a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">IOS App Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Smart tv app Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Hybird app Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Android tv app Development</a></li>
														</ul>
														<ul>
															<li className="head-menu"><span>Content Management system</span></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">WordPress Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Drupal Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Shopify Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Codeignitor Development</a></li>
															<li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/" className="">Cake PHP Development</a></li>
														</ul>
													</div>
												</div>

											</div>
										</li>

										<li><a href="contact" className="">portfolio</a></li>
										<li><a href="contact" className="">success stories</a></li>
										<li><a href="contact" className="">company </a></li>
										<li><a href="contact" className="">blog </a></li>
										<li>
											<Link to="/contact-us">contact</Link>
										</li>
										<li><a href="reviews" className="">CARRER</a></li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
				<div className="sidenav" id="mySidenav">
					<a href="index.html" className="logo">
						<img src="img/logo.png" className="img-responsive" alt="logo" />
					</a>
					<a href="index.html" className="">HOME</a>
					<a href="help" className="">service</a>
					<a href="reviews" className="">products</a>
					<a href="contact" className="">portfolio</a>
					<a href="contact" className="">success stories</a>
					<a href="contact" className="">company</a>
					<a href="contact" className="">blog</a>
					<a href="contact.html" className="">contact</a>
				</div>
			</div>
		);
	}
}

class Homepagecontent extends React.Component{
	constructor() {
		super();
		this.state = {
			offeredTechnologies: [],
			portfolioImages: [
				'14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg'
			],
		}
		this.publicImgUrl = process.env.PUBLIC_URL+'/img/';
	}
	componentWillMount() {
		
	}
	componentDidMount(){
		fetch('http://staging-studio45creations.com/dev/Tytanium/Api/Company/getTestContent')
		.then(result => {
			return result.json();
		})
		.then((offeredTechonoliesData) => {
			if(offeredTechonoliesData.success=='Success'){
				let offeredTechnologiesResp = offeredTechonoliesData.data;

				this.setState({offeredTechnologies: offeredTechnologiesResp})
				console.log("state", this.state.offeredTechnologies);
			}
			else{
				throw new Error('There was a problem while getting the data');
			}
		})
		.catch(console.log)
		
		reInitializeSlider('homePageSlider');
	}
	render(){
		return (
			<div>
				<div className="section-first boxs">
					<div className="container">
						<div className="most-popular">
							<h1>the most popular team</h1>
							<p>We will do every special task for your company</p>
							<h4>With a significantly less turnaround time for any of our services we help reduce
								<span>time-to-market for you to stay competitive in this ever-evolving marketplace.</span> </h4>
							<h5><a href="#">OUR OFFER</a><a href="#">PORTFOLIO</a></h5>
						</div>
					</div>
					<div className="slick1" id="homePageSlider">
						<div className="for-bg boxs">

						</div>
						<div className="for-bg for-bg1 boxs">
							<div className="container">

							</div>
						</div>
						<div className="for-bg for-bg2 boxs">
							<div className="container">

							</div>
						</div>
					</div>
				</div>
				
				<div className="welcome boxs">
					<div className="section-four boxs">
						<div className="same-heading">
							<h1 className="heading45">Studio45 –Offering Technological Solutio<span>ns t</span>o Enterprise, <i>Startups</i>, and Small Businesses</h1>
							<p>With a significantly less turnaround time for any of our services we help reduce time-to-market for you to stay
								<span>competitive in this ever-evolving marketplace. </span></p>
						</div>
						<div className="container">

							<div className="four-menu">
								{this.state.offeredTechnologies.map((offeredTech, offeredTechKey) =>
									<div className="four-same same-four">
										<div className="col-sm-2 nopadding">
											<div className="four-same-icon">
												<i className="fa fa-object-group" aria-hidden="true"></i>
											</div>
										</div>
										<div className="col-sm-10">
											<div className="four-same-txt">
												<h5>{offeredTech.title}</h5>
												<p>{offeredTech.content}</p>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				
				<div className="section-six  section-for-bg boxs">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="same-heading">
									<h1>Our many years of experience in numbers</h1>
									<img src="img/34.jpg" alt="divder" />
									<p>We’ve been instrumental in bringing to life many amazing projects. From startups to Fortune 500 companies, we’ve lent our creative expertise and made a difference in the lives of people all over the world.</p>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="col-sm-4">
									<div className="section-six-same">
										<a href="#">  <i className="icon1 fa fa-angellist" aria-hidden="true"></i></a>
										<h5>1853+</h5>
										<p>Satisfied customers</p>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="section-six-same">
										<a href="#">  <i className=" icon1 fa fa-television" aria-hidden="true"></i></a>
										<h5>2172+</h5>
										<p>Project Done</p>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="section-six-same">
										<a href="#"> <i className=" icon1 fa fa-thumbs-up" aria-hidden="true"></i></a>
										<h5>74%</h5>
										<p>Repeat business</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="section-five boxs">
					<div className="container">
						<div className="about-five boxs">
							<div className="row">
								<div className="col-sm-6">
									<img src="img/12.jpg" alt="about-img" className="" />
								</div>
								<div className="col-sm-6">
									<div className="same-heading">
										<h1><span>Abo</span>ut our Company</h1>
										<p>We, at Studio45 Creations, strive to provide you eminent design services by offering creativity to hire for your businesses. We specialize in deploying all media services that make your business grow in a very cost-effective, easy and efficient manner. We provide an access to an entire range of services like Website Designing, Website Development, Graphic Designing, Search engine Optimization (SEO) and E-commerce.</p>                              <div className="link"><a href="#">READ MORE</a></div>

									</div>
								</div>
							</div>
							<div className="row five-bottom">
								<div className="col-sm-4">
									<div className="five-sec-same">
										<a href="#"> <i className="fa fa-angellist" aria-hidden="true"></i></a>
										<h3>Innovative solutions</h3>
										<p>At SoftProdigy, we take pride in earning and keeping the trust of our customers. We value their belief in us and strive hard to preserve it. We act with our customer’s best interests at heart.</p>
									</div>

								</div>
								<div className="col-sm-4">
									<div className="five-sec-same">
										<a href="#"> <i className="fa fa-bookmark" aria-hidden="true"></i></a>
										<h3>Certified experts</h3>
										<p>We strive to fulfill our time commitments as we value our customer’s time and the trust that they have put in us. Our entire process is geared to be on time. </p>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="five-sec-same">
										<a href="#"> <i className="fa fa-lightbulb-o" aria-hidden="true"></i></a>
										<h3>Long experience</h3>
										<p>Quality Consciousness is a habit at SoftProdigy. We have embraced the latest technology and practices in the field and ensure top notch quality of our deliverables.</p>    
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="section-seven boxs">
					<div className="container">
						<div className="same-heading">
							<h1>Recen<span>t po</span>rtfolio</h1>
							<p>The latest photos from the meetings and consultations that took place in our company and on various trips to
								<span>which our team was invited guest.</span></p>
						</div>
					</div>
					<div className="section-seven-image">
						<div className=" col-xs-12 col-sm-3 nopadding ">
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"14.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"15.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
						</div>
						<div className=" col-xs-12 col-sm-3 nopadding ">
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"16.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"17.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
						</div>
						<div className=" col-xs-12 col-sm-3 nopadding ">
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"18.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"19.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
						</div>
						<div className=" col-xs-12 col-sm-3 nopadding ">
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"20.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
							<div className="col-xs-6 col-sm-12 nopadding">
								<div className="same-image">
									<img src={this.publicImgUrl+"21.jpg"} alt="icon" className="img-responsive" />
									<div className="cover mybox boxs"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="section-eight boxs">
					<div className="container">
						<div className="same-heading">
							<h3>OUR CLIENTS LOVE US</h3>
							<h1>Wha<span>t They</span>Say</h1>

						</div>
						<div className="slick2">
							<div className="eight-same boxs">
								<p>This is the second Time Ive worked with Studio45creations and they continue to provide excellent work. They are very timely, and responds well to instructions and requested changes. Im sure we will be working with </p>
								<h5>Jim Owen,</h5>
								<h6>CEO/Owner</h6>
							</div>
							<div className="eight-same boxs">
								<p>This is the second Time Ive worked with Studio45creations and they continue to provide excellent work. They are very timely, and responds well to instructions and requested changes. Im sure we will be working with </p>
								<h5> A</h5>
								<h6>CEO/Owner</h6>
							</div>
							<div className="eight-same boxs">
								<p>This is the second Time Ive worked with Studio45creations and they continue to provide excellent work. They are very timely, and responds well to instructions and requested changes. Im sure we will be working with </p>
								<h5>B</h5>
								<h6>CEO/Owner</h6>
							</div>
							<div className="eight-same boxs">
								<p>This is the second Time Ive worked with Studio45creations and they continue to provide excellent work. They are very timely, and responds well to instructions and requested changes. Im sure we will be working with </p>
								<h5>C</h5>
								<h6>CEO/Owner</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Footer extends React.Component{
	render(){
		return (
			<div>
				<div className="footer boxs">
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="footer-same fotter-sec-one">
									<div className="same-heading">
										<h1><span>Abou</span>t us</h1>
									</div>
									<p>SoftProdigy came into existence in 2006, guided by 
										<span>the idea of delivering high quality web designs,</span>
										<span>mobile development solutions, as well as innovative</span>
											internet-driven marketing and sales strategies.</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="footer-same fotter-sec-two">
									<div className="same-heading">
										<h1><span>Usefu</span>l links</h1>
									</div>
									<div className="col-xs-6 nopadding">
										<ul>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">About</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">History</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Team</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Portfolio</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Events</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Contact</a></li>

										</ul>
									</div>
									<div className="col-xs-6 nopadding">
										<ul>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Popular post</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Services</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Support</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Shop</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Careers</a></li>
											<li><i className="fa fa-circle" aria-hidden="true"></i><a href="#">Consulting</a></li>

										</ul>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="footer-same fotter-sec-three">
									<div className="same-heading">
										<h1><span>Cont</span>act us</h1>
									</div>
									<div className="address address1">
										<h5>Address:</h5>
										<p>Phase 8B, F- 174
											<span>Sector 74, Mohali</span></p>
									</div>
									<div className="address">
										<h5>E-mail:</h5>
										<p>Skype: design.studio45creations </p>
										<p>Email: info@studio45creations.com</p>
										

									</div>
									<div className="address">
										<div className="footer-icon">
											<p><i className="fa fa-facebook" aria-hidden="true"></i><i className="fa fa-twitter" aria-hidden="true"></i><i className="fa fa-google-plus" aria-hidden="true"></i><i className="fa fa-linkedin" aria-hidden="true"></i><i className="fa fa-instagram" aria-hidden="true"></i></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="last-footer boxs">
					<div className="container">
						<p>2013-2018 © Copyright studio45creations.com</p>
					</div>
				</div>
			</div>
		);
	}
}


class ContactUs extends React.Component{
	componentDidMount(){
		reInitializeSlider('contactUsPageSlider');
	}
	render(){
		return(
			<div>
				<div className="section-first boxs">
					<div className="container">
						<div className="most-popular">
							<h1>the most popular team</h1>
							<p>We will do every special task for your company</p>
							<h4>With a significantly less turnaround time for any of our services we help reduce
								<span>time-to-market for you to stay competitive in this ever-evolving marketplace.</span> </h4>
							<h5><a href="#">OUR OFFER</a><a href="#">PORTFOLIO</a></h5>
						</div>
					</div>
					<div className="slick1" id="contactUsPageSlider">
						<div className="for-bg boxs"></div>
						<div className="for-bg for-bg1 boxs">
							<div className="container"></div>
						</div>
						<div className="for-bg for-bg2 boxs">
							<div className="container"></div>
						</div>
					</div>
				</div>
				
				<div className="middle_sec">
					<div className="contact section-content boxs" id="cntct">
						<div className="col-sm-4 nopadding">
							<div className="contact-left boxs">
								<h1 className="contactsec">CONTACT
									<span>STUDIO 45</span>
								</h1>
								<div className="contact-left-text">
									<h4 className="mail_sec">SEND MAIL US</h4>
									<p className="studio45creationstext"> info@studio45creations.com
										<span> info@studio45creations.com</span>
									</p>
									<img src="img/45.png" alt="contact-pic" className="contact-pic icon1" />
								</div>
								<div className="contact-left-text colorsec">
									<h4>TELEPHONE US</h4>
									<p>(203) 606-4291</p>
									<img src="img/46.png" alt="contact-pic" className="contact-pic icon1" />
								</div>
								<div className="contact-left-text colorsec">
									<h4>INTERNET US</h4>
									<p>http://studio45creations.com</p>
									<img src="img/47.png" alt="contact-pic" className="contact-pic icon1" />
								</div>
							</div>
						</div>
						<div className="col-sm-8 nopadding">
							<div className="contact-right boxs">
								<p className="general">For any general inquiries, please fill in 
									<span>the following contact form:</span>
								</p>
								<div className="contact-right-text boxs">
									<div className="col-sm-6 noleft">
										<input type="text" placeholder="NAME" />
										<input type="text" placeholder="EMAIL" />
										<input type="text" placeholder="PHONE" />
										<input type="text" placeholder="SUBJECT" />
									</div>
									<div className="col-sm-6 ">
										<textarea placeholder="MESSAGE"></textarea>
										<button className="send">SEND</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
