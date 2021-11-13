import { Col, Container, Row } from "reactstrap";
import './home.css';

function Home() {
    return(
        <Container fluid>
            <Row className="centeredTwo">
                <Col xs="6">
                    <h1 className="title">Welcome to  VFORCE LLC</h1>
                    <p className="titleParagraph">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
                </Col>
                <Col xs="6">
                    <h1 className="Title">Image Here</h1>
                </Col>
            </Row>
                <Col>
                    <div className="container">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </Col>
            <Row className="centeredTwo">
                <Col xs="6">
                    <h1 className="Title">Welcome to  VFORCE LLC</h1>
                </Col>
                <Col xs="6">
                    <h1 className="Title">Welcome to  VFORCE LLC</h1>
                </Col>
            </Row>
            <Row className="centeredTwo">
                <Col xs="6">
                    <h1 className="Title">Welcome to  VFORCE LLC</h1>
                </Col>
                <Col xs="6">
                    <h1 className="Title">Welcome to  VFORCE LLC</h1>
                </Col>
            </Row>
        </Container>
        
    );
}
export default Home;