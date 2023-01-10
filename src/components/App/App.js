import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Passport from "../Section/Passport";
import "bootstrap/dist/css/bootstrap.min.css";
import DriverLicense from "../Section/DriverLicense";
import IdentityCard from "../Section/IdentityCard";
import Header from "../Header/Header";
import Footer from "../Footer.js/Footer";

class App extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        <div className="container">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <Tabs defaultActiveKey="image" id="uncontrolled-tab-example">
              <Tab eventKey="identitycard" title="ID">
                <IdentityCard />
              </Tab>
              <Tab eventKey="driverlicense" title="Driver’s license">
                <DriverLicense />
              </Tab>
              <Tab eventKey="passport" title="Passport">
                <Passport />
              </Tab>
            </Tabs>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
