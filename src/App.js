import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink as RouterLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Nav, NavItem, Spinner, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink } from 'reactstrap';
import Services from './services/Services';
import Home from './home/Home';
import About from './about/About';
import Careers from './careers/Careers';
import Contact from './contact/Contact';


function App(props) {
  const [userID, setUserId] = useState(null);
  const [disbaleLoader, setDisbaleLoader] = useState(false);

  useEffect(()=>{
    const uId = Math.random().toString(16).slice(2);
    setTimeout(() => {
      setDisbaleLoader(true);
      setUserId(uId);
      console.log("started new session "+userID);     
    }, 1500);
  },[]);

  return (
    <Router>
      <div className="App">
          <div>
          <Navbar expand="md" fixed="top" light>
            <NavbarBrand href="/"> <img src={process.env.PUBLIC_URL +"/logoOld.jpeg"}/> </NavbarBrand>
            <NavbarToggler className="me-2" onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav navbar>
            <NavItem>
              <NavLink tag={RouterLink} className="nav-link" to="/about" >About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} className="nav-link" to="/services" >Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} className="nav-link" to="/careers" >Careers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} className="nav-link" to="/contact" >Contact</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          </div>
      <div className="app-body">
        {!disbaleLoader && <Spinner style={{margin: "0 0 auto"}} className="app-loader">
          Loading...
        </Spinner>}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <div className="footerContainer footer-bottom">
        <div id="block-copyright" className="block-copyright">
          <div className="content">
            <div className="field field--name-body field--type-text-with-summary field--label-hidden field__items">
              <div className="field__item">
                <p>© 2007-2020 VForce LLC, Inc. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
