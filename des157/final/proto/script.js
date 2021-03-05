(function(){

    'use strict';
    
    const albumCover = document.getElementById('album4');
    const song = new Audio('media/idorucut.mp3');

    albumCover.addEventListener('click', function(){
        song.play();
    });
}());