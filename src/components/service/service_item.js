import React from "react";
import Title from 'react-vanilla-tilt';

export default function ServiceItem(props) {
    const options = {
        scale: 1.02,
        max: 30
    };

    return (
        <div className="col-md-6 col-12 masonry-item">
            <Title className="title-shadow" style={{padding:"0px", margin:"0px"}} options={options} >
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay={ props.delay }>
                    <div className="service-list position-relative mb-4">
                        <div className="item-icon mb-3">
                            <i className={ props.icon }></i>
                        </div>
                        <h3 className="item-title mb-0">{ props.title }</h3>
                        <p className="mb-0">{ props.description }</p>
                    </div>
                </div>
            </Title>
        </div>
    );
}