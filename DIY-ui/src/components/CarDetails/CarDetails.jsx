import * as React from "react";
import "./CarDetails.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//this is the page that displays the footer
export default function CarDetails() {
    const location = useLocation();
    const data = location.state; // Access the passed props
    const passedProps = data.passedProps;
    const object = passedProps.id
    const id = object.id
    const [car, setCar] = useState({});
    const navigate = useNavigate();
  useEffect(()=>{
    const fetchOneCar = async () => {
        const response = await fetch(`http://localhost:3000/car/${id}`);
        const data = await response.json();
        setCar(data);
        console.log("data")
    }
    fetchOneCar();

  },[]);
  function showConvertible(convertible){
    if( convertible){
        return "Yes"
    }else{
        return "No"
    }

  }

const deleteGift = async (e) => {
    //e.preventDefault();
  
    try {
      // Make the create product API request
  
      const response = await fetch(`http://localhost:3000/car/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           id
        }),
        credentials: "include",
      });
      console.log(response)
  
      if (response.ok) {
        // Navigate to the business page after successful login
        navigate("/cars");
      } else {
        // Handle the create failure case
        alert("creation failed");
      }
    } catch (error) {
      // Handle any network or API request errors
      alert("creation failed: " + error);
    }
  };
  return (
    <div>
       <article className="article-details">
        <div className="row-details">
            <div className="col-details">
                <img src="https://img.autotrader.co.za/14794377" className="image-details" />

            </div>
            <div className="col-details">
                <h1>Owner: {car.owner}</h1>
                <h3>Convertible: {showConvertible(car.convertible)}</h3>
                <h3>Interior: {car.interior}</h3>
                <h3>Exterior: {car.exterior}</h3>
                <h3>Roof: {car.roof}</h3>
                <h3>wheels: {car.wheels}</h3>
                <Link to="/car/update" state={{passedProps: car}}><button>Edit</button></Link>&nbsp;&nbsp;
                <button onClick={()=>{
                    deleteGift();
                }}>Delete</button>

            </div>

        </div>
        
        
       </article>
    </div>
  );
}