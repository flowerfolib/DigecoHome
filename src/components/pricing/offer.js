import React from "react";

export default function Offer(props) {

    return (
        <>
            <div className="col-lg-3 col-sm-6 col-10 p-0">
                <div className="pricing-box-layout text-center position-relative">
                    <div class={ props.populer === true ? 
                        "status-shape position-absolute" : 
                        "status-shape position-absolute d-none" 
                    }>
                        <span class="status-text position-absolute">Popular</span>
                    </div>
                    <div className="item-price d-inline-block mb-1 position-relative">
                        <span className="currency">$</span>{ props.price_main }
                        <span className="super-script position-absolute">{ props.price_extra }</span>
                    </div>
                    <h3 className="item-title mb-5">{ props.title }</h3>
                    <ul className="block-list mb-5">
                        <li>All Operating Supported</li>
                        <li>Great Interface</li>
                        <li>Allows encryption</li>
                        <li>Face recognized system</li>
                        <li className="mb-0">24/7 Full support</li>
                    </ul>
                    <a href="#" className="item-btn btn-ghost">Order Now</a>
                </div>
            </div>
        </>
    );
}