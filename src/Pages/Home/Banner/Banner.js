import React from 'react';
import banner from "../../../Images/banner.jpg"

const Banner = () => {
    return (
        <div className="bg-info">
            <div class="row">
                <div class="col-12 col-md-6">
                    Column
                </div>
                <div class="col-12 col-md-6">
                    <img src={banner} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;