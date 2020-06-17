import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    form: '',
    message: '',
    subject: '',
  });

  const handleSubmit = () => {};

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInput((form) => ({ ...form, [name]: value }));
  };

  return (
    <div>
      <div className="FormWrapper">
        <h2>Contacter nous</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="name">
            <label htmlFor="name">
              Nom *
              <input
                value={input.name}
                type="text"
                name="name"
                placeholder="Votre nom"
                onChange={handleChange}
                noValidate
              />
            </label>
          </div>
          <div className="email">
            <label htmlFor="email">
              Email *
              <input
                value={input.email}
                type="email"
                name="email"
                placeholder="Votre mail"
                onChange={handleChange}
                noValidate
              />
            </label>
          </div>

          <div className="phone">
            <label htmlFor="phone">
              Téléphone
              <input
                value={input.phone}
                type="phone"
                name="phone"
                placeholder="Votre téléphone"
                onChange={handleChange}
                noValidate
              />
            </label>
          </div>
          <div className="subject">
            <label htmlFor="subject">
              Sujet
              <input
                value={input.subject}
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
                noValidate
              />
            </label>
          </div>
          <div className="message">
            <label htmlFor="message">
              Message *
              <textarea
                value={input.message}
                type="text"
                name="message"
                placeholder="Votre message"
                onChange={handleChange}
                noValidate
              />
            </label>
          </div>

          <div className="info">
            <small>* required</small>
          </div>

          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
