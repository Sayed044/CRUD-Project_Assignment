import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const UpdateFrom = () => {
    let navigate = useNavigate();
    let {id}=useParams();

    const [Existing, SetExisting] = useState(null);

    const ExistingInfo =async (id)=>{
        let res=await axios.get(`/api/AllFoodByID/${id}`)
        SetExisting(res.data['row'][0])
    }

    useEffect(()=>{
        (async ()=>{
            await ExistingInfo(id)
        })()
    },[])

    const UpdateData=async (event)=>{

        event.preventDefault();

        let formData = new FormData(event.target);
        let FoodName=formData.get("FoodName")
        let FoodCode=formData.get("FoodCode")
        let FoodImg=formData.get("FoodImg")
        let FoodCategory=formData.get("FoodCategory")
        let Qty=formData.get("Qty")
        let Price=formData.get("Price")

        await axios.post(`/api/UpdateFood/${id}`,{
            FoodName:FoodName,
            FoodCode:FoodCode,
            FoodImg:FoodImg,
            FoodCategory:FoodCategory,
            Qty:Qty,
            Price:parseFloat(Price)
        })
        navigate("/")
    }

    return (
        <div className="container">
            <h3 className="mt-5">Update Food Item</h3>
            <form onSubmit={UpdateData}>
                <div className="row mt-5">
                    <div className="col-md-4 ">
                        <label>Food Name</label>
                        <input defaultValue={Existing!==null?(Existing['FoodName']):('')} className="form-control form-control-sm" name="FoodName" type="text" placeholder="Food Name"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Food Code</label>
                        <input defaultValue={Existing!==null?(Existing['FoodCode']):('')} className="form-control form-control-sm" name="FoodCode" type="text" placeholder="Food Code"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Food Image</label>
                        <input defaultValue={Existing!==null?(Existing['FoodImg']):('')} className="form-control form-control-sm" name="FoodImg" type="text" placeholder="Food Image"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Food Category</label>
                        <input defaultValue={Existing!==null?(Existing['FoodCategory']):('')} className="form-control form-control-sm" name="FoodCategory" type="text" placeholder="Food Category"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>QTY</label>
                        <input defaultValue={Existing!==null?(Existing['Qty']):('')} className="form-control form-control-sm" name="Qty" type="text" placeholder="Food Qty"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Price</label>
                        <input defaultValue={Existing!==null?(Existing['Price']):('')} className="form-control form-control-sm" name="Price" type="text" placeholder="Food Price"/>
                    </div>
                </div>
                <button type="submit" className="btn mt-5 btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UpdateFrom;