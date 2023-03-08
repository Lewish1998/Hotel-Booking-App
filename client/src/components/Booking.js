import React from 'react'

const Booking = ({book}) => {
  return (
    <div>
      <li>{book.name}-----{book.email}-----{book.checkedIn}</li>
    </div>
  )
}

export default Booking