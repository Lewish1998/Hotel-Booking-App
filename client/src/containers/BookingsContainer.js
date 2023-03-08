import React from 'react'
import BookingDetailUpdate from '../components/BookingDetailUpdate'
import BookingForm from '../components/BookingForm'
import BookingsList from '../components/BookingsList'


const BookingsContainer = () => {
  return (
    <div>
    <h1>California Hotel</h1>
    <BookingForm/>
    <BookingDetailUpdate/>
    <BookingsList/>
    
    </div>
  )
}

export default BookingsContainer