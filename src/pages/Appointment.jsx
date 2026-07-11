import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Heroe'

const Appointment = () => {
  return (
    <>
    <Hero title={"Schedule Your Appointment | ZeeCare Medical Institute"}
    imageUrl={"/hospital.jpg"}
    />
    <AppointmentForm/>
    </>
  )
}

export default Appointment;
