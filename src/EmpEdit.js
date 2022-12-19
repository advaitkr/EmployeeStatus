import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
const EmpEdit = () => {
    const { empid } = useParams();
    const [value, SetValue] = useState("")
    const [id, SetidChange] = useState("")
    const [name, SetnameChange] = useState("")
    const [email, SetemailChange] = useState("")
    const [role, SetroleChange] = useState("")
    const[validation,valchange]=useState(false);
    
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try {
                const { data: data } = await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
                const match = data.filter((item)=>item.id == empid);
                SetidChange(match[0]["id"])
                SetnameChange(match[0]["name"])
                SetemailChange(match[0]["email"])
                SetroleChange(match[0]["role"])
            } catch (error) {
                console.log(error)
            }

        })()
    }, [])
    console.log(value)

    


    const handlesubmit=(e)=>{
          
            console.log(id,name,email,role)
      }



    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Update</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>SetnameChange(e.target.value)} className="form-control"></input>
                                        {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>SetemailChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Role</label>
                                            <input value={role} onChange={e=>SetroleChange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success"
                                            onClick ={handlesubmit}
                                            type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmpEdit
