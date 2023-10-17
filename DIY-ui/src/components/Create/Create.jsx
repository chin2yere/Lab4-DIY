import * as React from "react";
import "./Create.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//this is the page that displays the footer
export default function Create() {
  const [section, setSection] = useState("interior")
  const [owner, setOwner] = useState("")
  const [exterior, setExterior] = useState("red")
  const [interior, setInterior] = useState("red leather")
  const [wheels, setWheels] = useState("alloy")
  const [roof, setRoof] = useState("hard")
  const [convertible, setConvertible] = useState(false);
  const navigate = useNavigate();
  function setTotal(){
    if(convertible){
      return 500000
    }else{
      return 300000
    }
  }
  function toggleSection(value){
    setSection(value)
  }
  function toggleInterior(){
    console.log("inner")
    const brownLeatherUrl="https://crushcustoms.com/wp-content/uploads/2023/06/burnt-orange-seats.webp";
    const greyClothUrl="https://katzkin.com/wp-content/uploads/2017/11/katzkin-honda-crv-ash-grey-interior.png";
    const redLeatherUrl="https://s3.amazonaws.com/autosound-media/wp-content/uploads/20180702204236/katzkin-ford-mustang-red-leather-interior-2.jpg";
     
      return(
        <div className="grid-container">
          
          <button onClick={()=>{
            setInterior("brown leather")
          }}><img className="image" src={brownLeatherUrl} /></button>
          <button
          onClick={()=>{
            setInterior("grey cloth")
          }}
          ><img className="image" src={greyClothUrl} /></button>
          <button
          onClick={()=>{
            setInterior("red leather")
          }}
          ><img className="image" src={redLeatherUrl} /></button>
          
          <button onClick={()=>{
            setSection("exterior")
          }}>Next</button>
    
    
        </div>
        );

    
    
  }
  function toggleExterior(){
    const redUrl="https://t3.ftcdn.net/jpg/02/85/19/14/360_F_285191450_t8R1XC98hEBMc6ovZm5zV90WmDqIjkmS.jpg";
    const blueUrl="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png";
    const silverUrl="https://img.freepik.com/free-vector/silver-metal-background-1_78370-324.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697414400&semt=ais";
    const blackUrl="https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?cs=srgb&dl=pexels-francesco-ungaro-396547.jpg&fm=jpg";
    const whiteUrl="https://granitop.co.uk/wp-content/uploads/2018/03/Crystal-Absolute-White.jpg"
    const greenUrl="https://img.freepik.com/free-vector/green-abstract-halftone-background_1409-898.jpg"
     
      return(
        <div className="grid-container">
          
          <button
          onClick={()=>{
            setExterior("red")
          }}
          ><img className="image" src={redUrl} /></button>
          <button
          onClick={()=>{
            setExterior("blue")
          }}
          
          ><img className="image" src={blueUrl} /></button>
          <button
          onClick={()=>{
            setExterior("silver")
          }}
          ><img className="image" src={silverUrl} /></button>
          <button
          onClick={()=>{
            setExterior("black")
          }}
          ><img className="image" src={blackUrl} /></button>
          <button
          onClick={()=>{
            setExterior("white")
          }}
          ><img className="image" src={whiteUrl} /></button>
          <button
          onClick={()=>{
            setExterior("green")
          }}
          ><img className="image" src={greenUrl} /></button>
          <button onClick={()=>{
            setSection("roof")
          }}>Next</button>
    
    
        </div>
        );

   
    
  }
  
  function toggleRoof(){
    const hardRoofUrl="https://gomechanic.in/blog/wp-content/uploads/2020/07/Inbuilt-Sunroof-1000x563.jpg";
    const SoftRoofUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSL-2pHvniuEq9ogW2xVhyJsxqgCzTWkDgJw&usqp=CAU";
    const brickRoofrUrl="https://upload.wikimedia.org/wikipedia/commons/7/74/1966_Ambassador_990_wagon_aztp.jpg";
     function checkIfConvertible(value){
      if(convertible){
        return(alert("You can't put a brick roof on a convertible"))
      }else{
        setRoof(value)
      }
     }
      return(
        <div className="grid-container">
          
          <button
          onClick={()=>{
            setRoof("hard")
          }}
          ><img className="image" src={hardRoofUrl} /></button>
          <button
          onClick={()=>{
            setRoof("soft")
          }}
          ><img className="image" src={SoftRoofUrl} /></button>
          <button
          onClick={()=>{
            checkIfConvertible("brick")
          }}
          ><img className="image" src={brickRoofrUrl} /></button>
          
          <button
          onClick={()=>{
            setSection("wheels")
          }}>Next</button>
    
    
        </div>
        );

    
    
  }

  function toggleWheels(){
    const alloyWheelsUrl="https://upload.wikimedia.org/wikipedia/commons/e/ec/Alloy_wheel_mercury.jpg";
    const steelWheelsUrl="https://www.maxionwheels.com/fileadmin/user_upload/content_pages/products/lvw/steel/versa_style/light-vehicle-wheels-steel-versastyle-basewheel-article-01.jpg";
    const pumpedWheelsUrl="https://leantoys.com/eng_pl_Go-Cart-Monster-Black-Pumped-Wheels-With-Hand-Break-3835_6.jpg";
    
      return(
        <div className="grid-container">
          
          <button
          onClick={()=>{
            setWheels("alloy")
          }}
          ><img className="image" src={alloyWheelsUrl} /></button>
          <button
          onClick={()=>{
            setWheels("steel")
          }}
          ><img className="image" src={steelWheelsUrl} /></button>
          <button
          onClick={()=>{
            setWheels("pumped")
          }}
          ><img className="image" src={pumpedWheelsUrl} /></button>
          
          <button>Next</button>
    
    
        </div>
        );

    
    
  }


const handleCreate = async (e) => {
  //e.preventDefault();

  try {
    // Make the create product API request

    const response = await fetch(`http://localhost:3000/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         owner, convertible, exterior, wheels, roof, interior
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

  
  console.log(section)
  return (
    <div>
        <article>
          <div style={{textAlign: "center", color: "whitesmoke", marginTop: "40px", marginBottom:"40px"}}>
            
            <label htmlFor="Owner">Owner's name: </label>
            <input style={{width:"300px", height:"50px", borderRadius:"16PX"}} type="text" 
            onChange={(e) => 
            {
              const word = e.target.value;
              setOwner(word)
              }}/> 
          &nbsp;&nbsp;
            <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms"
            onChange={(e)=>{
              setConvertible(!convertible)
            }}/>
            convertible
            </label>
  

            
              
          </div>
          <div className="row-create">
            
            <div className="col-create">
              <button onClick={()=>{
                toggleSection("interior")
              }}className="button-create">Interior</button>
              
              <button  onClick={()=>{
                toggleSection("exterior")
              }}
              className="button-create">Exterior</button><br></br>
              <button 
              onClick={()=>{
                toggleSection("roof")
              }}
              
              className="button-create">Roof</button>
              <button 
              onClick={()=>{
                toggleSection("wheels")
              }}
              className="button-create">Wheels</button>

            </div>
            <div className="col-create">{((section==="interior")&&toggleInterior())||((section==="exterior")&&toggleExterior())||((section==="roof")&&toggleRoof())||((section==="wheels")&&toggleWheels())}</div>
          </div>
        </article>
        <h4 style={{color:"white"}}>cost: {setTotal()}</h4>
        <button onClick={()=>{
          handleCreate()
        }} className="button-create" style={{marginBottom:"50px", marginLeft:"190px",backgroundColor:"blueviolet"}}>Create</button>
    </div>
  );
}