import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Navbar from './components/Navbar'
import Rides from './components/rides/Rides';

function App() {
  const [rides, setRides] = useState([]);
  const [user, setUser] = useState({});

  const fetchRidesDetails = async () => {
    // fetch products and destucture it on app load, it returns promise
    const response = await axios.get("https://assessment.api.vweb.app/rides");
    // console.log(response);
    // setting state as fetched products
    setRides(response.data);
  };

  const fetchUsersDetails = async () => {
    // fetch products and destucture it on app load, it returns promise
    const response = await axios.get("https://assessment.api.vweb.app/user");
    console.log(response);
    // setting state as fetched products
    setUser(response.data);
  };


  useEffect(() => {
    fetchRidesDetails();
    fetchUsersDetails();
  }, []);

  return (
    <div className="App">
    <Navbar user={user}/>
    <Rides rides={rides} user={user}/>
    </div>
  );
}

export default App;
