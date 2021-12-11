import React from "react";
import '../scrolltop/scrolltop.css';
import $ from 'jquery';

export default function ScrollTop() {
    $(document).ready(function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 700) {
            $('.return-to-top').addClass('back-top');
            } else {
            $('.return-to-top').removeClass('back-top');
            }
        });
        $('.return-to-top').click(function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    })

    return (
        <div className="return-to-top">
			<i className="fas fa-angle-double-up"></i>
		</div>
    );
}