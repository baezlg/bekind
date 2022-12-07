import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import "./ContactArea.scss";
import { Container } from "react-bootstrap";

const ContactArea = () => {
  return (
    <div className="contactArea">
      <div className="top">
        <h1 className="contact-heading">GET IN TOUCH</h1>
        <Container>
          <div className="item-box">
            <div className="item">
              <div className="icon-wrap">
                <LocationOnIcon className="icon" />
                <h3>ADDRESS</h3>
              </div>
              <div className="address-items">
                <div className="address-item">
                  <h4>Tallinn Office</h4>
                  <p>123 Viru phone 303.202.0466</p>
                </div>
                <div className="address-item">
                  <h4>Helsinki Office</h4>
                  <p>123 Main str phone 303.202.0466</p>
                </div>
                <div className="address-item">
                  <h4>Parnu Office</h4>
                  <p>123 Main str phone 303.202.0466</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon-wrap">
                <CallIcon className="icon" />
                <h3>PHONE</h3>
              </div>
              <div className="address-items">
                <div className="address-item">
                  <h4>Tallinn Office</h4>
                  <p>123 Viru phone 303.202.0466</p>
                </div>
                <div className="address-item">
                  <h4>Helsinki Office</h4>
                  <p>123 Main str phone 303.202.0466</p>
                </div>
                <div className="address-item">
                  <h4>Parnu Office</h4>
                  <p>123 Main str phone 303.202.0466</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon-wrap">
                <MessageIcon className="icon" />
                <h3>EMAIL</h3>
              </div>
              <div className="address-items">
                <div className="address-item">
                  <h4>Request for Proposal</h4>
                  <p>Info@bekindgroup.com</p>
                </div>
                <div className="address-item">
                  <h4>Electrical Service Calls</h4>
                  <p>service@bekindcontracting.com</p>
                </div>
                <div className="address-item">
                  <h4>Employment Opportunities</h4>
                  <p>careers@bekindcontracting.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <h1>Message Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            ab maiores quaerat, id dolorem cupiditate, dolorum corporis ipsam
            veniam nemo aspernatur enim ea rem adipisci sed esse quia numquam
            doloribus accusamus iste sunt? Molestiae, tempora! Dolorem sint
            accusantium autem neque eveniet culpa! Veritatis reprehenderit illum
          </p>
        </div>
        <div className="bottom-right">
          <form className="contact-form">
            <div className="input-items">
              <input type="text" placeholder="First" />
              <input type="text" placeholder="Last" />
            </div>
            <input type="email" placeholder="Email" />
            <textarea cols="20" rows="10"></textarea>
            <input type="submit" value="submit" className="contact-form-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
