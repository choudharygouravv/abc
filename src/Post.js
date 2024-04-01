import { useState } from "react"

export default function Post()
{
    const[id1, setId]=useState();
    const[title, setTitle]=useState();
    const[description, setDescription]=useState();
    const[price1, setPrice]=useState();
    const[category, setCategory]=useState();
    function submitForm(e)
    {
        e.preventDefault()
        const id=parseInt(id1)
        const price=parseInt(price1)
        const obj={id,title,description,price,category}

        fetch("https://fakestoreapi.com/products",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((result)=>{
            result.json().then((data)=>{
                console.log(data)
            })
        })
    }
    return(
        <div>
            <br></br>
            <center>
            <form onSubmit={submitForm}>
                <input type="number" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)}></input>
                <input type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)}></input>
                <input type="text" placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)}></input>
                <input type="number" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)}></input>
                <input type="text" placeholder="Enter Category" onChange={(e)=>setCategory(e.target.value)}></input>
                <button>Submit</button>
            </form>
            </center>
        </div>
    )
}