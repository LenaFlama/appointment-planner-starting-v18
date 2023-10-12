import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] =useState();
  const [appointments, setAppointments] =useState();

  function newContact (name, phone, email) {
    setContacts(prev => [...prev, {name, phone, email}])
  }

  function newAppointment (name, contact, date, time) {
    setAppointments(prev => [...prev, {name, contact, date, time}] )
  }


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage newContact={newContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage newAppointment={newAppointment} />  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
