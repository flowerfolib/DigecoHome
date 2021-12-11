import React from "react";

export default function Options(props) {

    return (
        <li><a href={ props.url }><span>{ props.title }</span></a></li>
    );
}