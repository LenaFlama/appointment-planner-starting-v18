import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  value,
  name
}) => {
  return (
    <div>
      <select onChange={onChange} value={value} name={name}>
        <option value=''>“No Contact Selected”</option>
        {contacts.map((contact) => {
          return (
            <option value={contacts} key={contact}>{contacts}</option>
          )
        })}
      </select>
    </div>
  );
};
