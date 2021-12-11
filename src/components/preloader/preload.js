import React from "react";
import '../preloader/preload.css';

export default function Preload() {
    return (
        <div id="preloader" className="tlp-preloader">
            <div className="animation-preloader">
                <div className="tlp-spinner"></div>
                <img src="../../img/preloader.png" alt="Preloader" />
            </div>
	    </div>
    );
}