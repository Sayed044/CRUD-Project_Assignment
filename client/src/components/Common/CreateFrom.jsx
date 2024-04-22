import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateFrom = () => {

    let navigate = useNavigate();

    const CreateData=async (event)=>{

        event.preventDefault();

        let formData = new FormData(event.target);
        let FoodName=formData.get("FoodName")
        let FoodCode=formData.get("FoodCode")
        let FoodImg=formData.get("FoodImg")
        let FoodCategory=formData.get("FoodCategory")
        let Qty=formData.get("Qty")
        let Price=formData.get("Price")

        await axios.post("api/CreateFood",{
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
            <h3 className="mt-5">Create Food Item</h3>
            <form onSubmit={CreateData}>
                <div className="row mt-5">
                    <div className="col-md-4 ">
                        <label>Food Name</label>
                        <input className="form-control form-control-sm" name="FoodName" type="text" placeholder="Food Name"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Food Code</label>
                        <input className="form-control form-control-sm" name="FoodCode" type="text" placeholder="Food Code"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Food Image</label>
                        <input className="form-control form-control-sm" name="FoodImg" type="text" placeholder="Food Image"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Food Category</label>
                        <input className="form-control form-control-sm" name="FoodCategory" type="text" placeholder="Food Category"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>QTY</label>
                        <input className="form-control form-control-sm" name="Qty" type="text" placeholder="Food Qty"/>
                    </div>
                    <div className="col-md-4 ">
                        <label>Price</label>
                        <input className="form-control form-control-sm" name="Price" type="text" placeholder="Food Price"/>
                    </div>
                </div>
                <button type="submit" className="btn mt-5 btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CreateFrom;