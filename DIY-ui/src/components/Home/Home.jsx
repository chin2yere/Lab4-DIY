import * as React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
//this is the page that displays the footer
export default function Home() {
  return (
    <div >
        <div className="top-container">
        <h1>DIY PLANET</h1>
            <h3>Welcome to DIY PLANET<br></br>
                Here you have the option to create your own custom car using the features we will provide you with.</h3>
       <div>
        <Link  to="/cars" ><button>View cars</button></Link>
        &nbsp;&nbsp;
        <Link to ="/car/create" ><button>Customize my own car</button></Link>
       </div>

        </div>
        
           
    </div>
  );
}