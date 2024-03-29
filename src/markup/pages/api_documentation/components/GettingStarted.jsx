import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

// Layout

import ApiHeader from "../layouts/ApiHeader";
import ApiSide from "../layouts/ApiSide";
// Import Images
import servicesPic1 from "../../../../images/services/pic1.jpg";
import pdf from "../../../../images/icon/pdf.png";
import doc from "../../../../images/icon/doc.png";

class Welcome extends Component {

    render() {
        return (
            <>
                <div className="page-content bg-white">
                    <ApiHeader />
                    {/*  ApiHeader */}
                    <section className="section-area section-sp1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    {/*  Nav SideBar */}
                                    <ApiSide />
                                </div>
                                <div className="col-lg-8 mb-30">
                                    <div className="ttr-media mb-30">
                                        <h2 style={{ color: "black" }}>Getting Started</h2><hr style={{ color: "black" }} />
                                        <p style={{ color: "black" }}>Hey There! How's your day going?</p>
                                        <img src={servicesPic1} className="rounded" alt="" />
                                    </div>
                                    <div className="clearfix">
                                        <div className="head-text mb-30">
                                            <h2 className="title mb-15">Why Medical Had Been So Popular Till</h2>
                                            <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mb-30">
                                                <ul className="list-check-squer mb-0">
                                                    <li>Then along come two they</li>
                                                    <li>That’s just a little bit more than</li>
                                                    <li>Standard dummy text ever since</li>
                                                    <li>Simply dummy text of the printing</li>
                                                    <li>Make a type specimen book</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 mb-30">
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Advanced Technology</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{ width: "96%" }}></p>
                                                        <span className="skill-bar-percent">96%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-30">
                                                    <h6 className="title">Certified Engineers</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{ width: "79%" }}></p>
                                                        <span className="skill-bar-percent">79%</span>
                                                    </div>
                                                </div>
                                                <div className="skillbar-box mb-0">
                                                    <h6 className="title">6 years Experience</h6>
                                                    <div className="skillbar appear">
                                                        <p className="skillbar-bar" style={{ width: "75%" }}></p>
                                                        <span className="skill-bar-percent">75%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="head-text mb-30">
                                            <h4 className="title mb-10">Popular Questions</h4>
                                            <p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        </div>
                                        <Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>What types of systems do you support?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>We Teach You How To Feel Better?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5">
                                                <Accordion.Header>How Can I Contact You?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>

            </>
        );
    }
}

export default Welcome;