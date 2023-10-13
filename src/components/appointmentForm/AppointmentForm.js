import React from "react";
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

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)}></input>
        <input type='date' value={date} required onChange={(e) => setDate(e.target.value)}></input>
        <input type='time' value={time} required onChange={(e) => setTime(e.target.value)}></input>
        <ContactPicker value={contact} contacts={contacts} onChange={(e) => setContact(e.target.value)}></ContactPicker>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
