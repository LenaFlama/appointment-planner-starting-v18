import React, { useMemo } from "react";
import { ContactPicker } from '../contactPicker/ContactPicker.js'

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

const contactNames = useMemo(() => {
  return contacts.map((contact) => contact.name);
}, [contacts]);

  return (
      <form onSubmit={handleSubmit} >
        <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)}></input>
        <input type='date' value={date} min={getTodayString()} required onChange={(e) => setDate(e.target.value)}></input>
        <input type='time' value={time} required onChange={(e) => setTime(e.target.value)}></input>
        <ContactPicker value={contact} contacts={contactNames} required onChange={(e) => setContact(e.target.value)}></ContactPicker>
        <button onClick={handleSubmit}>Submit</button>
      </form>
  );
};
