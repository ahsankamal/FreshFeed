import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useForm } from "react-hook-form";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DuckFeedForm from './containers/DuckFeedForm';
import FeedFormTable from './containers/FeedFormTable'
import {Navbar, Nav} from 'react-bootstrap';

function App() {

  return (
    <main>
      <div>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand href="/">Fresh Feed</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/duckfeedform">Duck feed form</Nav.Link>
            <Nav.Link className="justify-content-end" href="/viewsubmission">View Submissions</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <Switch>
        <Route path="/" component={DuckFeedForm} exact />
        <Route path="/duckfeedform" component={DuckFeedForm} />
        <Route path="/viewsubmission" component={FeedFormTable} />
        <Route component={Error} />
      </Switch>
    </main>
)
}

export default App;
