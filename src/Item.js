import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

function Item()
{
    const location= useLocation();
    const data=location.state;
    const[apidata, setApidata]=useState({});

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+data.pid).then((result)=>{
            result.json().then((data1)=>{
                setApidata(data1)
            })
        })
    },[])
    return(
        <div>
            <br></br>
            <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.image} fluid alt='...'  style={{width:"200px", height:"200px"}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{apidata.title}</MDBCardTitle>
        <MDBCardText>{apidata.description}</MDBCardText>
        <MDBCardTitle style={{color:"green"}}>{apidata.category}</MDBCardTitle>
        <MDBCardText style={{color:"red"}}>Rs.{apidata.price*80}/-</MDBCardText>
        <MDBBtn href='#'>Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
    )
}
export default Item;