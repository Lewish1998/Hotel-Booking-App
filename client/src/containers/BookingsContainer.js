import React, {useState , useEffect} from 'react'
import BookingDetailUpdate from '../components/BookingDetailUpdate'
import BookingForm from '../components/BookingForm'
import BookingsList from '../components/BookingsList'
import { getBookings } from '../components/BookingService'


const BookingsContainer = () => {

  const [Bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((data) => {setBookings(data)})
  }, []); 

  const addBooking = (data) => {
    setBookings([...Bookings, data]);
  }

  return (
    <div>
    <h1>California Hotel</h1>
    <BookingForm addBooking={addBooking}/>
    <BookingDetailUpdate/>
    <BookingsList bookings={Bookings}/>
    
    </div>
  )
}

export default BookingsContainer