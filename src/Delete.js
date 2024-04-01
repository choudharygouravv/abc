import { useState } from "react"

export default function Delete()
{
    const[id1, setId]=useState();

    function submitForm(e)
    {
        e.preventDefault()
        const id=parseInt(id1)
        const obj={id}

        fetch("https://fakestoreapi.com/products/"+id,{
            method:"PUT",
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
                <button>Submit</button>
            </form>
            </center>
        </div>
    )
}