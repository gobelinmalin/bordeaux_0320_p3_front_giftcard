import React from 'react';
import './ContactInfo.css';
import location from '../../Images/Icone/location-icone.png';
import phone from '../../Images/Icone/phone-icone.png';
import mail from '../../Images/Icone/mail-icone.png';

const ContactInfo = () => {
  return (
    <div>
      <div className="informations">
        <div className="LeftLocation">
          <div className="LeftLocationImage">
            <img src={location} alt="location icone" />
          </div>
          <div className="LeftLocationText">
            <h2>Location</h2>
            <p>9 allée de Serr,</p>
            <p>33300, Bordeaux, FR</p>
          </div>
        </div>
        <div className="LeftPhone">
          <div className="LeftPhoneImage">
            <img src={phone} alt="phone icone" />
          </div>
          <div className="LeftPhoneText">
            <h2>Support</h2>
            <p>+33 6 66 96 17 77</p>
            <p>24/7 Hours support</p>
          </div>
        </div>
        <div className="LeftMail">
          <div className="LeftMailImage">
            <img src={mail} alt="mail icone" />
          </div>
          <div className="LeftMailText">
            <h2>Email</h2>
            <p>
              support
              <br />
              contact@Givyoo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
