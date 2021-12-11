import React from "react";

export default function Reviewer(props) {

    return (

        <div className="timeline-carousel__item px-3">
            <div className="testimonial-box-layout mb-4 position-relative">
                <div className="item-icon position-absolute mb-2">
                    <i className="fas fa-quote-right"></i>
                </div>
                <h3 className="item-title mb-1">{ props.title }</h3>
                <p>{ props.comment }</p>
                <div className="item-content d-flex align-items-center justify-content-between">
                    <div className="media d-flex mt-1 mb-1 mb-xl-4">
                        <img className="rounded-circle w-auto h-50" src={ props.image } alt="Testimonial" />
                        <div className="media-body mx-3 text-left">
                            <h4 className="inner-item-title mb-0">{ props.name }</h4>
                            <div className="inner-item-designation">{ props.position }</div>
                        </div>
                    </div>
                    <ul className="rating-wrap d-flex mb-2 mb-sm-4">
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}