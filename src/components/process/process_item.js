import React from "react";

export default function ProcessItem(props) {

    return (
        <div className="col-xl-3 col-md-6 col-12">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={ props.delay } >
                <div className="process-box-layout text-center position-relative pb-2 p-xl-2">
                    <div className="process-box-layout-img position-relative d-flex justify-content-center align-items-center mb-3">
                        <img src={ props.image } alt="/" />
                    </div>
                    <div className="item-content px-2">
                        <h3 className="item-title mb-1">{ props.title }</h3>
                        <p>{ props.description }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}