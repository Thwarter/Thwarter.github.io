(function questionleave () {
    let fname = '';
    let lname = '';
    let subject = ''; 

    updateFname = () =>{
        fname = document
            .getElementById('fname').value;
    }
    updateLname = () =>{
        lname = document
            .getElementById('lname').value;
    }
    updateSubject = () =>{
        subject = document
            .getElementById('subject').value;
    }
    window.addEventListener('beforeunload', (e) => {
        if (fname === '' || lname === '' || subject === '') {
            e.preventDefault();
    }
});
(function forcefullscreen(){
    // makes client fullscreen always
    if (!document.fullscreenElement && !document.mozFullSCreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }
});