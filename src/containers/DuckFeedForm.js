// import logo from './logo.svg';
// import './';

import FoodAutoComplete from './FoodAutoComplete';
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Form, Navbar, Nav} from 'react-bootstrap';
import React, { useEffect, useState, useRef, Component } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DuckFeedForm() {

  const { register, handleSubmit, watch, errors } = useForm();

  const [startDate, setStartDate] = useState(new Date());
  const DateTimePicker = () => {
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date) } showTimeSelect dateFormat="Pp"/>
    );
  };


  const onSubmit = (data) => {
    console.log(data);
    console.log(startDate);
  }


  return (

    <div >
    
    <br></br>
    <br></br>
    <br></br>
    
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
    <h1> Duck Feed Form</h1>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">Feeder Name</label>
      <div className="col-sm-3">
        <input name="feeder" type="text" className="form-control" defaultValue="test" ref={register} />
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label ">Feeder Email</label>
      <div className="col-sm-3">
        <input name="email" type="email" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">Enter the number of ducks fed by you.</label>
      <div className="col-sm-3">
        <input name="foodRecipientCount" type="number" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">What food the ducks were fed?</label>
      <div className="col-sm-3">
        <input name="foodName" className="form-control" ref={register} />
      </div>
        {/* <FoodAutoComplete /> */}
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">How much amount of food were they fed? (lbs)</label>
      <div className="col-sm-3">
        <input name="amount" type="number" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">Enter the park location where you fed the ducks.</label>
      <div className="col-sm-3">
        <input name="location" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">At what time did you feed the ducks?</label>
      <div className="col-sm-3">
        {/* <input name="time" className="form-control" ref={register} /> */}
        <DateTimePicker name="time"/>
      </div>
    </div>

    {/* <input name="exampleRequired" ref={register({required: 'required field', minLength: {value:7, message:'too short'}})} />
    {errors.exampleRequired && <span>{errors.exampleRequired.message}</span>} */}
    {/* <br></br> */}

    {/* <input type="s  ubmit" /> */}
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </form>
  </div>

    
  );
}

export default DuckFeedForm;
