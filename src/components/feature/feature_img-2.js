import React from "react";

export default function FeatureImg(props) {

    return (
        <div className="col-sm-6 col-12 masonry-item">
            <div className={ `single-item ${ props.space }`  }>
                <div  data-aos="fade-up" data-aos-duration="800" data-aos-delay={ props.delay }>
                    <img src={ props.image } alt="Illustration" />
                </div>
            </div>
        </div>
    );
}