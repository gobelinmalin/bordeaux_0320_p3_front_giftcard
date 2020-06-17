import React from 'react';
import './Contact.css';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="Contact">
      <h3>NOUS CONTACTER</h3>
      <div className="ContainerContact">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
