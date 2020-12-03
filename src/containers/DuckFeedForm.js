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
        <input name="feederName" type="text" className="form-control"  ref={register({required: 'required field', minLength: {value:3, message:'Name is too short'}, maxLength: {value:200, message:'Name is too long'}})} />
        {errors.feederName && <span>{errors.feederName.message}</span>} 
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label ">Feeder Email</label>
      <div className="col-sm-3">
        <input name="email" type="email" className="form-control" placeHolder="Optional" ref={register} />
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">Enter the number of ducks fed by you.</label>
      <div className="col-sm-3">
        <input name="duckCount" type="number" className="form-control" ref={register({required: 'required field', min:{value:0, message:'Number of ducks fed cannot be negative'}})} />
        {errors.duckCount && <span>{errors.duckCount.message}</span>} 
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">What food the ducks were fed?</label>
      <div className="col-sm-3">
        <input name="foodName" type="text" className="form-control" ref={register({required: 'required field', minLength: {value:3, message:'Food Name is too short'}, maxLength: {value:200, message:'Food Name is too long'}})} />
        {errors.foodName && <span>{errors.foodName.message}</span>} 
      </div>
        {/* <FoodAutoComplete /> */}
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">How much amount of food were they fed? (lb)</label>
      <div className="col-sm-3">
        <input name="amount" type="number" step="0.1" className="form-control" placeHolder="Pounds (lb)" ref={register({required: 'required field', min:{value:0, message:'Amount of food cannot be negative'}})} />
        {errors.amount && <span>{errors.amount.message}</span>}
      </div>
    </div>

    {/* use long lat coordinates as input in future */}
    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">Enter the park location/address where you fed the ducks.</label>
      <div className="col-sm-3">
        <input name="parkLocation" type="text" className="form-control" ref={register({required: 'required field', minLength: {value:15, message:'Please enter full address of park location'}, maxLength: {value:250, message:'Park location address is too long'}})} />
        {errors.parkLocation && <span>{errors.parkLocation.message}</span>}
      </div>
    </div>

    <div className="form-group row d-flex justify-content-center">
      <label className="col-sm-2 col-form-label">At what time did you feed the ducks?</label>
      <div className="col-sm-3">
        {/* <input name="time" className="form-control" ref={register} /> */}
        <DateTimePicker name="dateTime"/>
      </div>
    </div>

    {/* <input name="exampleRequired" ref={register()} />
    {errors.exampleRequired && <span>{errors.exampleRequired.message}</span>} */}
    {/* <br></br> */}

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </form>
  </div>

    
  );
}

export default DuckFeedForm;
