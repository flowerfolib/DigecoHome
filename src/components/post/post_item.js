import React from "react";

export default function PostItem(props) {

    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay={ props.delay }>
                <div className="blog-box-layout mb-4">
                    <div className="item-figure position-relative">
                        <a className="d-block" href="blog-details.html">
                            <img src={ props.image } alt="Blog Figure" />
                        </a>
                    </div>
                    <div className="item-content p-4">
                        <ul className="entry-meta d-flex flex-wrap align-items-center mb-2 meta-color-accent justify-content-between">
                            <li className="d-flex mr-4 align-items-center"><a className="d-inline-flex align-items-center" href="#">{ props.date }</a></li>
                        </ul>
                        <h3 className="entry-title mb-0 title-color-dark">
                            <a href="blog-details.html">{ props.title }</a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}