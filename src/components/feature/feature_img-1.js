import React from "react";

export default function FeatureImg(props) {

    return (
        <li>
            <div data-aos="fade-up-right" data-aos-duration="800" data-aos-delay={ props.delay } >
                <img src={ props.image } alt="Illustration" />
            </div>
        </li>
    );
}