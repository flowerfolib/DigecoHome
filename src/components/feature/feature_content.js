import React from "react";

export default function FeatureImg(props) {

    return (
        <>
            <div  data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <div className="sub-title">{ props.subtitle }</div>
            </div>
            <div  data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <h3 className="item-title">{ props.itemtitle }</h3>
            </div>
            <div  data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
                <p>{ props.content }</p>
            </div>
        </>
    );
}