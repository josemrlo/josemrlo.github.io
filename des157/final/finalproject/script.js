(function(){

    'use strict';
    
    const albumCover = document.getElementById('albumcover');
    const playPauseBtn = document.getElementById('playpause');
    const song = document.getElementById('song');
    let count = 0;
    

    playPauseBtn.addEventListener('click', function(){
        if(count == 0){
            count = 1;
            song.play();
            playPauseBtn.src = "images/pause.svg";
            albumCover.classList.add("playing");
        }
        else {
            count = 0;
            song.pause();
            playPauseBtn.src = "images/play.svg";
            albumCover.classList.remove("playing");
        }
    });
}());