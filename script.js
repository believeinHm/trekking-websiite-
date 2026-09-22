$(document).ready(function() {


    // Explore button

    $(".explore").click(function() {

        $("html, body").animate({
            scrollTop: $(".trips").offset().top
        }, 800);

    });


    // Book button

    $(".book").click(function() {

        alert("Thank you for choosing Trek Me!");

    });


    // View Details buttons

    $(".details").click(function() {

        alert("Trip details will be available soon.");

    });

});