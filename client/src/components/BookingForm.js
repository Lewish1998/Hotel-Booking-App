import React, {useState} from 'react'

const BookingForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false,
    })
  return (


    <div>
    <form>
        <input type="text" id="name" value={formData.name} placeholder="Your Name"/>

        <input type="text" id="email" value={formData.email} placeholder="Your Email"/>

        <input type="submit" value="Save" id="save"/>
    </form>
    </div>
  )
}

export default BookingForm