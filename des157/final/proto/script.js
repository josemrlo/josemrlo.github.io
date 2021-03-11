(function(){

    'use strict';
    
    const albumCover = document.getElementById('album4');
    const song = new Audio('media/beabodycut.mp3');
    let playing = false;

    albumCover.addEventListener('click', function(){
        song.play();
    });
}());