$(document).ready(function() {
    $('button').on('click', function(e) {
        console.log('e', e.target.innerHTML);
    });
});