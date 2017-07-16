$(document).ready(main);

function main(){
    setEvents();
}

function setEvents(){
    $('#meat').change(function(){
        if (this.checked) {
            $('.meat').fadeIn('slow');
        }
        else {
            $('.meat').fadeOut('slow');
        }
    });

    $('#vegetable').change(function(){
        if (this.checked) {
            $('.vegetable').fadeIn('slow');
        }
        else {
            $('.vegetable').fadeOut('slow');
        }
    });

    $('#fruit').change(function(){
        if (this.checked) {
            $('.fruit').fadeIn('slow');
        }
        else {
            $('.fruit').fadeOut('slow');
        }
    });
}






