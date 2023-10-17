import * as React from "react";
import "./Card.css";
import CarDetails from "../CarDetails/CarDetails";
import { Link } from "react-router-dom";
//this is the page that displays the footer
export default function Card({id, owner, convertible, exterior, wheels, roof, interior}) {
  function setTotal(){
    if(convertible){
      return 500000
    }else{
      return 300000
    }
  }
  function return_image(convertible){
    if(convertible){
        const url = "https://media.istockphoto.com/id/487808685/photo/red-sedan-convertible.jpg?s=612x612&w=0&k=20&c=-S5BZ-cevRLl9B7MJ1qoajl7s1n3mY1GR9elByP0ycQ="
        return url;
    }else{
        const url = "https://media.istockphoto.com/id/952098574/photo/3d-illustration-of-generic-red-sports-car-side-view.jpg?s=612x612&w=0&k=20&c=bMwGkpLGjyl8RoXJh7bZEFqAeneclXx8ut2lGpflPd4=";
        return url;
    }

  }
  const passedProps = {
    "id": {id}
  }
    
  return (
    <div>
        
        
        
        <article className="article">
            <div>
                <img src={return_image(convertible)} className="icon" />
                <h2>{owner}</h2></div>
            <div className="row-card">
            <div className="col-card">
              
              <h3>Car exterior: {exterior}</h3>
              <h3>Wheels: {wheels}</h3>
              

            </div>
            <div className="col-card">
            <h3>Roof: {roof}</h3>
              <h3>Interior: {interior}</h3>

            </div>

            </div>
            <h4 style={{color:"white"}}>cost: {setTotal()}</h4>
            <Link to= {`/car/${id}`} state={{passedProps: passedProps}}><button>Details </button></Link>
            
            
            

        </article>
    </div>
  );
}