import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  let contacts= props.contacts
  let newContact =props.newContact

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(duplicate) {
      newContact(name, phone, email);

      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert('The contact already exist!')
    }
  
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        onSubmit={handleSubmit}></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts}></TileList>
      </section>
    </div>
  );
};
