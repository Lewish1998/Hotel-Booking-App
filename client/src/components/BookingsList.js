import React from 'react'
import Booking from './Booking'

const BookingsList = ({bookings}) => {

  const bookingNodes= bookings.map((book,index) => {
    return <Booking key={index} book={book}/>
  })

  return (
    <div>
        <ul>
            {bookingNodes}
        </ul>
    </div>
  )
}

export default BookingsList