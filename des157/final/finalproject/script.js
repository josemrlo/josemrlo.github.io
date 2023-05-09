//we want all images to load before putting the tops of the planets into the array
window.addEventListener('load', function(){
    'use strict';

    const planets = document.querySelectorAll('.planet');
    let planetTops = [];
    let pageTop;
    let currentSongId = 1;

    //planets
    const realiti = document.getElementById('realiti');
    const beabody = document.getElementById('beabody');
    const sagrad = document.getElementById('sagrad');
    const idoru = document.getElementById('idoru');

    const countPage = document.getElementById('count');
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const albumDes = document.getElementById('albumdes');
    const albumCover = document.getElementById('albumcover');
    let song = document.getElementById('song1');
    const playPauseBtn = document.getElementById('playpause');
    let count = 0;

    planets.forEach(function(planet){
        planetTops.push(Math.floor(planet.getBoundingClientRect().top) + window.pageYOffset);
    });

    playPauseBtn.addEventListener('click', function(){
        toggleAudio('song' + currentSongId);
    });

    // window.addEventListener(song.ended, function(){
    //     playPauseBtn.src = "images/play.svg";
    //     albumCover.classList.remove("playing"); 
    // });

    //Grabs song you call. Then it finds the song or it doesn't.
    function toggleAudio(id){
        const song = document.getElementById(id);
        if(!song){
            return;
        }
        if(song.paused){
            playAudio(id);
        }
        else {
            pauseAudio(id);
        }
    }

    function playAudio(id){
        const song = document.getElementById(id);

        if(!song || !song.paused){
            return;
        }
        const hasPlayed = !!song.played.length;

        if(!hasPlayed){
            song.load();
        }
        song.play();
        playPauseBtn.src = "images/stop.svg";
        albumCover.classList.add("playing"); 
    }

    function pauseAudio(id){
        const song = document.getElementById(id);
        if(!song || song.paused){
            return;
        }
        song.pause();
        playPauseBtn.src = "images/play.svg";
        albumCover.classList.remove("playing"); 
    }

    window.addEventListener('scroll', function(){
        pageTop = window.pageYOffset + 200;
        const lastCurrentSongId = currentSongId;
        if(pageTop > planetTops[currentSongId]){
            currentSongId++;
            console.log(`scrolling down ${currentSongId}`);
        }
        else if(currentSongId > 1 && pageTop < planetTops[currentSongId - 1]){
            currentSongId--;
            console.log(`scrolling up ${currentSongId}`);
        }

        if(currentSongId != lastCurrentSongId){
            pauseAudio('song' + lastCurrentSongId);
        }

        if(currentSongId == 1){
            countPage.innerHTML = "1 / 4";
            h1.innerHTML = "REALITi";
            realiti.classList.add("maindisplay");
            beabody.classList.remove("maindisplay");
            h2.innerHTML = "Art Angels";
            albumDes.innerHTML = `I discovered Grimes as a barista in 2017. The track "Realiti" was infectious pop music unlike I’d ever heard. Art Angels marks the beginning of my love for Grimes’ work and more broadly, experimental pop.`;
            albumCover.src = "images/artangels.jpg";
        }
        else if(currentSongId == 2){
            countPage.innerHTML = "2 / 4";
            h1.innerHTML = "BEABODY";
            beabody.classList.add("maindisplay");
            realiti.classList.remove("maindisplay");
            sagrad.classList.remove("maindisplay");
            h2.innerHTML = "Visions";
            albumDes.innerHTML = `This album created space for me to reevaluate the identities I'd been holding onto since adolescence. It validated my love of electronic music and informed the Spotify algorithm that exposed me to some of my most listened to artists of today.`;
            albumCover.src = "images/visions.jpg";
        }
        else if(currentSongId == 3){
            countPage.innerHTML = "3 / 4";
            h1.innerHTML = "SAGRAD";
            sagrad.classList.add("maindisplay");
            beabody.classList.remove("maindisplay");
            idoru.classList.remove("maindisplay");
            h2.innerHTML = "Halfaxa";
            albumDes.innerHTML = `My love for this album continues to grow. Halfaxa is the album I turn to when I don't want to listen to lighthearted instrumentals or lyrical music — it's the perfect album to be with in the late hours of the night.`;
            albumCover.src = "images/halfaxa.jpg";
        }
        else if(currentSongId == 4){
            countPage.innerHTML = "4 / 4";
            h1.innerHTML = "iDORU";
            idoru.classList.add("maindisplay");
            sagrad.classList.remove("maindisplay");
            h2.innerHTML = "Miss Anthropocene";
            albumDes.innerHTML = `In an era of anxiety brought on by impending climate disaster, social and environmental injustice, drug addiction, and the psychological exploitation of the attention economy, I find relief in this album's expression of these modern-day demons.`;
            albumCover.src = "images/missanthropocene.jpg";
        }
    });
});