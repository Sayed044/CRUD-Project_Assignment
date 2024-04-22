import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../../loader/loader.jsx";
import {Link} from "react-router-dom";

const FoodFrom = () => {

    let [Data,SetData] =useState(null);

    useEffect(()=>{

        (async ()=>{
            await CallFood()
        })()

    },[]);

    const CallFood=async ()=>{
        let res=await axios.get("/api/AllFood")
        let Product=res.data['row']
        SetData(Product);
    }

    const DeleteData=async (id)=>{
        await axios.get(`api/DeleteFood/${id}`);
        await CallFood()
    }

    return (

        <div>
            {Data==null?(<Loader/>):(
                <div className="container">
                    <h5 className="mt-3">All Food List</h5>
                    <div className="row gy-3">
                        {
                            Data.map((item,i)=>{
                                return (
                                    <div key={i} className="col-12 col-md-3 p-3 justify-content-center">
                                        <div className="card d-flex p-2">
                                            <img src={item['FoodImg']} className="w-100" alt="Img"/>

                                            <h5>
                                                <button className="btn m-2 btn-sm w-50 btn-success">TK:{item['Price']}</button>
                                            </h5>

                                            <h6><span>{item['FoodName']}</span></h6>
                                            <div>
                                                <Link  className="btn m-2 btn-sm btn-primary" to={`/UpdateFood/${item['_id']}`}>Edit</Link>
                                                <button onClick={()=>DeleteData(item['_id'])} className="btn btn-sm m-2 btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodFrom;