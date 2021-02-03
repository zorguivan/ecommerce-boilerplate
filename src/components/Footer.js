import React from 'react'
import { Facebook, Instagram, Google, Twitter, Linkedin } from 'react-bootstrap-icons';

export const Footer = () => {
    return (
        <footer className="nb-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about">
                            <img src="images/logo.png" className="img-responsive center-block" alt=""/>
                            <p>Contact </p>

                            <div className="social-media">
                                <div className="socials">
                                    <div className="icon"><Facebook /></div>
                                    <div className="icon"><Instagram /></div>
                                    <div className="icon"><Twitter/></div>
                                    <div className="icon"><Linkedin /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="footer-info-single">
                            <h2 className="title">Contact</h2>
                            <ul className="list-unstyled">
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i>(555) 555-1234</a></li>
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i> company@gmail.com</a></li>
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i> USA, Florida</a></li>
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i> Company address</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-3 col-sm-6">
                        <div className="footer-info-single">
                            <h2 className="title">Security & privacy</h2>
                            <ul className="list-unstyled">
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i> Terms Of Use</a></li>
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i> Privacy Policy</a></li>
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i> Return / Refund Policy</a></li>
                                <li><a href="" title=""><i className="fa fa-angle-double-right"></i> Store Locations</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6">
                        <div className="footer-info-single">
                            <h2 className="title">Info</h2>
                            <p>This is a test demo from <a className="c_Link" href="https://www.quantadevs.com">Quantadevs</a> for ecommerce website</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Copyright © 2021. <a className="c_Link" href="https://www.quantadevs.com">Quantadevs</a>.</p>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
