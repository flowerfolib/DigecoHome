import React from "react";

export default function Animation(props) {

    return (
        <li>
            <div data-aos-duration="500" data-aos="zoom-in" data-aos-delay={ props.delay }>
                <img className="w-100" src={ props.image } alt="Element" />
            </div>
        </li>
    );
}