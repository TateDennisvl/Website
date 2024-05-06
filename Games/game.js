document.getElementById('fullscreen-button').addEventListener('click', function() {
    var frame = document.getElementById('frame');
    if (frame.requestFullscreen) {
        frame.requestFullscreen();
    } else if (frame.webkitRequestFullscreen) { 
        frame.webkitRequestFullscreen(); // Safari
    } else if (frame.msRequestFullscreen) { 
        frame.msRequestFullscreen(); // IE11
    }
});