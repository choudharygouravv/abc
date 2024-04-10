import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Home()
{
  const[apidata, setApidata]=useState([]);
  const navigate=useNavigate()
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((result)=>{
      result.json().then((data)=>{
        setApidata(data)
        console.log(data)
      })
    })
  },[])
  function getid(pid)
  {
    const data={pid:pid}
    navigate("/item", {state:data})
  }
    return(
      <div>
        <br></br>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item,i)=>
        <MDBCol key={i}>
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
            <MDBBtn onClick={()=>getid(item.id)}>View Details{item.id}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
        )
      }
    </MDBRow>
      </div>
    )
}
export default Home;