import React from "react";

export default function ScreenItem(props) {

    return (
        <div className="timeline-carousel__item">
            <div className="screen-shot-box-layout">
                <img className="w-100" src={ props.image } alt="screen-shot" />
            </div>
        </div>
    );
}