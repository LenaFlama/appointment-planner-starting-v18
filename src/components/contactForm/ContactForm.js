import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} required onChange={(e) => setName(e.target.value)}></input>
        <input type="phone" pattern="^[+]40\d{9}$" value={phone} title='+407*********' required onChange={(e) => setPhone(e.target.value)}></input>
        <input type="text" value={email}required onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

