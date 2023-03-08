import React, {useState} from 'react'
import { postBooking } from './BookingService'

const BookingForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false,
    })

    const onChange = (event) =>{
      const newFormData = Object.assign({}, formData);
      newFormData[event.target.name] = event.target.value;
      setFormData(newFormData);
    }
      const onSubmit = (event) =>{
        event.preventDefault();
        postBooking(formData).then((data)=>{
            // addBooking(data);
        })

        setFormData({
          name: "",
          email: "",
          checkedIn: false,
      });
  }
  return (


    <div>
    <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" id="name" name="name" placeholder="Your Name" value={formData.name}/>

        <input onChange={onChange} type="text" id="email" name="email" placeholder="Your Email" value={formData.email}/>


        <input type="submit" value="Save" id="save"/>
    </form>
    </div>
  )
}

export default BookingForm;