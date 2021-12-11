import React from "react";
import '../preloader/preload.css';
import $ from 'jquery';

export default function Preload() {
    $(document).ready(function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    })

    return (
        <div id="preloader" className="tlp-preloader">
            <div className="animation-preloader">
                <div className="tlp-spinner"></div>
                <img src="../../img/preloader.png" alt="Preloader" />
            </div>
	    </div>
    );
}