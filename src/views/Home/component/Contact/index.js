import React, { useState } from "react";
import Rule from "./component/Rule";
import ContactCard from "./component/ContactCard";
import ContactForm from "./component/ContactForm";
import YandexMap from "./component/Map";

function Contact() {
  return (
    <div id="contact" className="contact">
      <Rule />
      <YandexMap />
      <ContactCard />
      <ContactForm />
    </div>
  );
}

export default Contact;
