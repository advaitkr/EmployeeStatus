import React,{useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
const EmpDetails = () => {
const {empid} = useParams();
console.log(empid,"empid")
 const [details,setDetails] = useState([]);
 

    useEffect(()=>{
        (async () => {
            try {
                const {data:data} = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
                const match = data.filter((item)=>item.id == empid);
                setDetails(match[0])
            } catch (error) {
                console.log(error)
            }

        })()
    },[])
 console.log(details)
 console.log(details,"details")
  return (
    <div className='card' style={{"textAlign":"left","backgroundColor":"#fb923c"}}>
        {
           <div className='card-body'>  
            <h2>The employee Name is:{details.name}</h2>
            <h3>Contact Details</h3>
            <h4>Email:{details.email}</h4> 
            <h4>Role:{details.role}</h4>
            <Link className="btn btn-success" to="/">Prev Page</Link>
            </div>
         }
    </div>
  )
}

export default EmpDetails
