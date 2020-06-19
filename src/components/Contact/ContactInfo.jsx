import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
      <div className="informations">
        <div className="LeftLocation">
          <div className="LeftLocationImage">
            <i className="fas fa-map-marker-alt Icon" />
          </div>
          <div className="LeftLocationText">
            <h2>Location</h2>
            <p>9 allée de Serr,</p>
            <p>33300, Bordeaux, FR</p>
          </div>
        </div>
        <div className="LeftPhone">
          <div className="LeftPhoneImage">
            <i className="fas fa-phone Icon" />
          </div>
          <div className="LeftPhoneText">
            <h2>Support</h2>
            <p>+33 6 66 96 17 77</p>
            <p>24/7 Hours support</p>
          </div>
        </div>
        <div className="LeftMail">
          <div className="LeftMailImage">
            <i className="fas fa-envelope Icon" />
          </div>
          <div className="LeftMailText">
            <h2>Email</h2>
            <p>
              contact@Givyoo.com
            </p>
          </div>
        </div>
        <div className='circle circle1'/>
      </div>
    );
};

export default ContactInfo;
