(function(){

    'use strict';

    alert("Hello! Please 1. View in fully extended window. 2. Click on the album cover. 3. Click on Jose Murillo");
    
    const albumCover = document.getElementById('album4');
    const song = new Audio('media/idorucut.mp3');

    albumCover.addEventListener('click', function(){
        song.play();

    });
}());