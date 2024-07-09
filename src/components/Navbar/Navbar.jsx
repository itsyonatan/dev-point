import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className="navbar">
			<div className="container flex">
				<div className="brand__and__toggler flex">
					<a href="/" alt="" className="navbar__brand">
						<img src={images.logo} alt="site logo" />
					</a>
					<button type="button" className="navbar__open--btn text__light" onClick={() => setToggleMenu(true)}>
						<FaBars size={26} />
					</button>
				</div>

				<div className="navbar__collapse">
					<ul className="navbar__nav">
						<li className="nav__item">
							<a href="/" className="nav__link text__upper fw__6 text__light nav__active">home</a>
						</li>
						<li className="nav__item">
							<Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={350}>
								<a href="#work" className="nav__link text__upper fw_6 text__light">about</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={350}>
								<a href="#work" className="nav__link text__upper fw_6 text__light">skills</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={350}>
								<a href="#work" className="nav__link text__upper fw_6 text__light">work</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link activeClass="active" to="services" spy={true} smooth={true} offset={70} duration={350}>
								<a href="#work" className="nav__link text__upper fw_6 text__light">services</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-120} duration={350}>
								<a href="#work" className="nav__link text__upper fw_6 text__light">testimonials</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={350}>
								<a href="#work" className="nav__link text__upper fw_6 text__light">contact</a>
							</Link>
						</li>
					</ul>
				</div>

				{toggleMenu && (
					<div className="navbar__smallscreen">
						<button type="button" className="navbar__close--btn text__light" onClick={() => setToggleMenu(false)}>
							<FaTimes size={32} />
						</button>
						<ul className="navbar__nav--smallscreen text__light">
							<li className="nav__item">
								<a href="#home" className="nav__link text__upper fw__6 nav__active text__light">home</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link text__upper fw__6 text__light">about</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link text__upper fw__6 text__light">work</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link text__upper fw__6 text__light">process</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link text__upper fw__6 text__light">services</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link text__upper fw__6 text__light">testimonials</a>
							</li>
							<li className="nav__item">
								<a href="#about" className="nav__link text__upper fw__6 text__light">contact</a>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar;