import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function Jwellery()
{
  const[apidata, setApidata]=useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/jewelery").then((result)=>{
      result.json().then((data)=>{
        setApidata(data)
        console.log(data)
      })
    })
  },[])
    return(
      <div>
        <br></br>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item)=>
        <MDBCol>
        <MDBCard>
          <center>
          <MDBCardImage
            src={item.image}
            alt='...'
            position='top'
            style={{width:"100px", height:"100px"}}
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>{item.description.slice(0,100)}</MDBCardText>
            <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
            <MDBCardText style={{color:"red"}}>RS.{item.price*80}/-</MDBCardText>
            <MDBCardText style={{color:"blue"}}>{item.rating.rate}</MDBCardText>
            <MDBCardText style={{color:"brown"}}>{item.rating.count}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        )
      }
    </MDBRow>
      </div>
    )
}
export default Jwellery;