import React from 'react';
import SideBar from "./SideBar.jsx";

const MasterLayout = (props) => {
    return (
        <div className="d-flex">
            <div className="col-md-2">
                <SideBar/>

            </div>
            <div className="col-auto mt-5 bg-light">
                {props.children}
            </div>
        </div>
    );
};

export default MasterLayout;