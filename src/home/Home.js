import { Col, Container, Row } from "reactstrap";
import './home.css';

function Home() {
    return(
        <Container fluid>
            <Row className="centeredTwo">
                <Col xs="12" lg="6">
                    <h1 className="title">Welcome to  VFORCE LLC</h1>
                    <p className="titleParagraph">"We are a Piscataway, New Jersey based IT firm providing Professional IT Staffing, Project Consulting, Offshore Development, Technology Solutions, Product Development and End to End IT Solutions to its Clients in various industry verticals."</p>
                    <h2 className="crazyText">Think. Develop. Deliver</h2>
                </Col>
                <Col xs="12" lg="6">
                    {/* <h1 style={{color:"black"}}><i className="fab fa-d-and-d fa-7x"></i></h1> */}
                    {/* <img src={process.env.PUBLIC_URL +"./landingAnimation.jpeg"} width={"80%"} height={"auto"} className="homepageAnimation" alt="homepageAnimation"/> */}
                    <video style={{width:"80%"}} autoPlay loop muted poster="chaplin.png">
                        <source type="video/webm" src={process.env.PUBLIC_URL +"./RGB+Alpha.webm"} />
                    </video>
                </Col>
            </Row>
            {/* <Col>
                <div className="container">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </Col> */}
            <Row className="centeredTwo greyBanner">
                <Col xs="4">
                    <h2 className="Title"><i className="fas fa-code-branch fa-5x"></i></h2>
                    <h4>Technology Solutions to various leading edge technologies</h4>
                    <p>ERP (SAP, Oracle Applications, PeopleSoft), e-commerce (Java, VB), RDBMS (Oracle, Sybase, Informix), client/server (Visual Basic, Power Builder), data warehousing etc.</p>
                </Col>
                <Col xs="4">
                    <h2 className="Title"><i className="fas fa-users fa-5x"></i></h2>
                    <h4>IT Staffing Consulting Services</h4>
                    <p>Consulting division focus on defining, optimizing and aligning our client’s business and IT strategies. Our services are being appreciated by a clients nation-wide.</p>
                </Col>
                <Col xs="4">
                    <h2 className="Title"><i className="fas fa-code fa-5x"></i></h2>
                    <h4>In-House and Outsourced Software Product Development</h4>
                    <p>VForce LLC is dedicated to provide custom made software services to customer's need of any size within global reach.</p>
                </Col>
            </Row>
            <Row className="bannerClientLogos">
                <Col xs="6">
                    <h1 className="Title">Our Major Clients</h1>
                </Col>
                <Col xs="6">
                    <div className="">
                        <ul className="logosList">
                            <li>
                                <img src={process.env.PUBLIC_URL +"/1.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/2.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/3.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/4.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/5.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/6.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/7.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/8.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/9.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL +"/10.png"} width="148" height="43" alt="Sapphire" typeof="Image" />
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="centeredTwo">
                <Col xs="6">
                    <h1 className="title"><i className="fas fa-crosshairs fa-3x"></i><br/>Our services</h1>
                    <p className="titleParagraph">"VForce has a full suite of end-to-end IT services to help our customers meet their goals:"</p>
                </Col>
                <Col xs="6">
                    <div>
                        <h4 style={{color: "#23a0ed", textAlign: "left"}}>
                            E-Business
                        </h4>
                        <p style={{textAlign: "left", color:"black"}}>
                            VForce offers a complete line of ERP Solutions designed to help clients implement the right ERP strategy for their business -- one that will grow into a mature, valuable asset for their business. We understand ERP and leverage the right industry expertise with the right technical talent to create a team that delivers high quality results. Evaluating software options, helping you make the right choice between SAP, PeopleSoft, Oracle, Lawson and all other vendor options. 
                        </p>
                    </div>
                    <div>
                        <h4 style={{color: "#23a0ed", textAlign: "left"}}>
                            ERP
                        </h4>
                        <p style={{textAlign: "left", color:"black"}}>
                            VForce offers a complete line of ERP Solutions designed to help clients. We are able to fully satisfy our clients by providing them with a customized enterprise resource planning (ERP) solutions based upon SAP, PeopleSoft and Oracle Applications. We deliver solutions; we develop user confidence throughout our clients organization.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        
    );
}
export default Home;