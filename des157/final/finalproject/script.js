(function(){

    'use strict';
    
    const albumCover = document.getElementById('albumcover');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const song = new Audio('media/beabodycut.mp3');

    playBtn.addEventListener('click', function(){
        song.play();
        pauseBtn.classList.remove("hidden");
    });

    pauseBtn.addEventListener('click', function(){
        song.pause();
    });
}());