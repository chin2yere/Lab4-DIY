import * as React from "react";
import "./Cars.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
//this is the page that displays the footer
export default function Cars() {
const [cars, setCars] = useState([]);
useEffect(()=>{
  const fetchAllCars = async () => {
    const response = await fetch("http://localhost:3000/cars");
    const data = await response.json();
    setCars(data);
    console.log(data)
    
    
  };
fetchAllCars()

},[])

  return (
    <div>
      <div className="header">
      <h1>DIY PLANET</h1>
      <h3>Below, we have a list of pending orders from customers<br></br>Feel free to edit and delete as you like</h3>

      </div>
        {
          cars.map((car)=>{
            return(<Card key={car.id} id={car.id} owner={car.owner} convertible={car.convertible} exterior={car.exterior} wheels={car.wheels} roof={car.roof} interior={car.interior} ></Card>)
            

          })
        }
    </div>
  );
}