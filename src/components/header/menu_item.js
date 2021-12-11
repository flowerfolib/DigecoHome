import React from "react";

export default function menuItem(props) {

    return (
        <div className="col-lg-3">
            <div className="mega-menu-box mb-3">
                <div className="mega-menu-figure">
                    <a href={ props.url }>
                        <img className="w-100" src={ props.image } alt="Menu" />
                    </a>
                </div>
                <div className="mega-menu-title text-center">
                    <h3 className="item-title">
                        <a href={ props.url }>{ props.title }</a>
                    </h3>
                </div>
            </div>
        </div>
    );
}