
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState,  useRef, Component } from 'react';
import axios from 'axios';

function FeedFormTable() {

  const [formData, setFormData] = useState([]);
  
//   # sample params: {'feederName': 'sada', 'email': '', 'duckCount': '2', 'foodName': 'efwsa', 'foodAmount': '12', 'parkLocation': 'sdfew fwe f wef w fw ef w', 'dateTime': '2020-12-03T16:39:07.091Z'}
  const columns = [
    {
        Header: 'Feeder Name',
        accessor: 'feederName',
    },
    {
        Header: 'Feeder Email',
        accessor: 'email',
    },
    {
        Header: 'Duck Count',
        accessor: 'duckCount',
    },
    {
        Header: 'Food Name',
        accessor: 'foodName',
    },
    {
        Header: 'Food Amount',
        accessor: 'foodAmount',
    }
    ,{
        Header: 'Park Location',
        accessor: 'parkLocation',
    }
    ,{
        Header: 'Fed Datetime',
        accessor: 'dateTime',
    }
  ]

  useEffect(() => {

    axios.get(process.env.REACT_APP_BACKEND_API_HOST+'api/viewSubmissions')
    .then(res => {
      // console.log(res);
      console.log(res.data.data);
      setFormData(res.data.data);
      console.log(formData);
      formData.map((row)=>{
        console.log(row);
      })
    }).catch(error => {
      console.error(`Error: ${error}`);
    })
  }, []);


  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <table>
          <thead>
          <tr>
            {
              columns.map((col)=>{
              return (<th>{col.Header}</th>)
              })
            }
          </tr>
          {
              formData.map((row)=>{
                return <tr>
                    <td>{row.feederName}</td>
                    <td>{row.email}</td>
                    <td>{row.duckCount}</td>
                    <td>{row.foodName}</td>
                    <td>{row.foodAmount}</td>
                    <td>{row.parkLocation}</td>
                    <td>{row.feedTime}</td>
                  </tr>
              })
            }
            
          </thead>
          <tbody >
              
          </tbody>
        </table>
    </div> 
  );
}

export default FeedFormTable;
