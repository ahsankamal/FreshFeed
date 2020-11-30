import logo from './logo.svg';
import './App.css';

import FoodAutoComplete from './containers/FoodAutoComplete';
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Form, Navbar, Nav} from 'react-bootstrap';
import React, { useEffect, useState, useRef, Component } from 'react';
import { useForm } from "react-hook-form";


function App() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (

    <div>
    <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Fresh Feed</Navbar.Brand>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Nav.Link href="#home">Duck feed form</Nav.Link>
      <Nav.Link className="justify-content-end" href="#pricing">View Submissions</Nav.Link>
    </Nav>
    </Navbar>
    <br></br>
    <br></br>
    <br></br>
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
    <h1> Duck Feed Form</h1>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Feeder Name</label>
      <div className="col-sm-10">
        <input name="feeder" type="text" className="form-control" defaultValue="test" ref={register} />
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Feeder Email</label>
      <div className="col-sm-10">
        <input name="email" type="email" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Enter the number of ducks fed by you.</label>
      <div className="col-sm-10">
        <input name="foodRecipientCount" type="number" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">What food the ducks were fed?</label>
        {/* <input name="food" className="form-control" ref={register} /> */}
        <FoodAutoComplete />
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">How much amount of food were they fed? (lbs)</label>
      <div className="col-sm-10">
        <input name="amount" type="number" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">Enter the park location where you fed the ducks.</label>
      <div className="col-sm-10">
        <input name="location" className="form-control" ref={register} />
      </div>
    </div>

    <div className="form-group row">
      <label className="col-sm-2 col-form-label">At what time did you feed the ducks?</label>
      <div className="col-sm-10">
        <input name="time" className="form-control" ref={register} />
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

export default App;
