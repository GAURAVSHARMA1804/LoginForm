import React, { useState } from 'react';
import './SignUp.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



function SignUp({ handleChange }) {

  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="SignUp d-flex flex-column align-items-left ">
      <h6>step1/3</h6>
      <h2>SignUp</h2>

      <form >

        <div className="d-flex">
          <div className="mb-3 name">
            <label for="exampleInputFirstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="exampleInputFirstName" placeholder='Enter First Name' ></input>
          </div>
          <div className="mb-3 name last">
            <label for="exampleInputLastName" className="form-label" >Last Name</label>
            <input type="text" className="form-control" id="exampleInputLastName" placeholder='Enter Last Name'></input>
          </div>

        </div>

        <div className="d-flex">
          <div className="mb-3 name">
            <label for="exampleInputDOB" className="form-label">Date of Birth</label>
            {/* <DatePicker className="form-control"  selected={selectedDate} onChange={date => setSelectedDate(date)} /> */}
          </div>

          <div className="mb-3 name last">
            <label for="exampleInputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail" placeholder='Enter Email'></input>
          </div>

        </div>
        <div >
          <label for="exampleInputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleInputAddress" placeholder='Enter Address' 
          style={{
            width:'85%'
          }}
          ></input>
        </div>

      </form>




    </div>
  )
}

export default SignUp