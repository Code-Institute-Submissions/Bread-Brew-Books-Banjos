<https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key>
<https://www.tutorialrepublic.com/codelab.php?topic=faq&file=show-bootstrap-modal-on-page-load>


not using searchBox as want the buttons to do the work of sorting type and simplifying experience
so search is just where and button os the What

may us type and keyword for results so as to capture live music, etc.

trying to restyle the map, have it hooked-up but not seeing the updated style. will se aside -https://mapstyle.withgoogle.com/

need to adjust countries and categories
set defaults to ireland
expand country default locations
add country maps

try and filter out bookmakers, if I can integrate keyword
need to add a modal for "no reults" and that clears the markers

TESTING - hardcoded the Google Place keywords to determine they were correctly displaying by searching and checking that the returns represented the type used


moved js to bottom of page and removed defer text



Trying to hget button active to stay 
- $(".four-buttons > .btn-lg").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
});