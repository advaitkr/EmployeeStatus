import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Emplisting.css'
import axios from 'axios'
const Emplisting = () => {
   
    const [employeeRec,SetemployeeRec] = useState([])
    const navigate = useNavigate();
    
    const LoadDetails =(id)=>{
        console.log("hello")
         navigate("/employee/details/"+id)
    }
    const LoadEdit=(id)=>{
        navigate("/employee/edit/"+id)
    }
    const RemoveFunc=(id)=>{

    }


   useEffect(()=>{
        (async () => {
            try {
                const {data:data} = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
                SetemployeeRec(data)
            } catch (error) {
                console.log(error)
            }

        })()
    },[])
  console.log(employeeRec)
  return (
    <div className='container'>
        <div className='card'>
          <div className='color-title'>
             <h2>Employee Listing</h2>
          </div>
      </div>
      <div className='card-body'>
         <table className='table table-bordered'>
             <thead className='bg-dark text-white'>
      <tr>
         
         <td>Name</td> 
         <td>Email</td> 
         <td>Role</td> 
         <td>Action</td> 
         <td>
         <div className="form-check">
  <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"  />
</div>
         </td>
     </tr>        
    </thead>
      <tbody>
    {
      employeeRec && employeeRec.map((item)=>(
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td><a 
            onClick={()=>LoadEdit(item.id)}
            className='btn btn-success'>Edit</a>
            <a 
             onClick={()=>RemoveFunc(item.id)}
            className='btn btn-success'>Remove</a>
            <a 
            onClick={()=>LoadDetails(item.id)}
            className='btn btn-success'>Details</a>
            </td> 
            <td>
            <div class="form-check">
          <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something"  />
         </div>
                
            </td>    
          </tr>
       ))

    }
</tbody>
 </table>
 <div class = "btn-right">
  <button class="button">Delete All</button>
  </div>
</div>
      
    </div>
  )
}

export default Emplisting
