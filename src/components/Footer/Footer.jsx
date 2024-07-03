import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "./dev" className="footer__navlink">Dev.Point Design, Inc.</a>
                        <p className="para__text">&copy; 2024 Dev. Point. All rights reserved. Designed by Yonatan.</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">yonatanadera@gmail.com</a>
                        <p>+251 931 480 409</p>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Projects</h3>
                        <ul className="footer__links">
                            <li><a href = "./about">About</a></li>
                            <li><a href = "./services">Services</a></li>
                            <li><a href = "./career">Career</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">News</h3>
                        <ul className="footer__links">
                            <li><a href = "./events">Events</a></li>
                            <li><a href = "./contact">Contact</a></li>
                            <li><a href = "./legals">Legals</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Social LInks</h3>
                        <ul className="footer__links">
                            <li><a href = "./facebook">Facebook</a></li>
                            <li><a href = "./twitter">Twitter</a></li>
                            <li><a href = "./instagram">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;