//we want all images to load before putting the tops of the planets into the array
window.addEventListener('load', function(){
    'use strict';

    const planets = document.querySelectorAll('.planet');
    let planetTops = [];
    let pageTop;
    let counter = 1;

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
    const song = document.getElementById('song');
    const playPauseBtn = document.getElementById('playpause');
    let count = 0;

    planets.forEach(function(planet){
        planetTops.push(Math.floor(planet.getBoundingClientRect().top) + window.pageYOffset);
    });

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

    window.addEventListener('scroll', function(){
        pageTop = window.pageYOffset + 200;

        if(pageTop > planetTops[counter]){
            counter++;
            console.log(`scrolling down ${counter}`);
        }
        else if(counter > 1 && pageTop < planetTops[counter - 1]){
            counter--;
            console.log(`scrolling up ${counter}`);
        }

        if(counter == 1){
            countPage.innerHTML = "1 / 4";
            h1.innerHTML = "REALITi";
            realiti.classList.add("maindisplay");
            beabody.classList.remove("maindisplay");
            h2.innerHTML = "Art Angels";
            albumDes.innerHTML = `I discovered Grimes while working as a barista. After listening to "Oblivion" I had to find out more. I remember opening Spotify on my commute back home and began exploring her newest ablum at the time, Art Angels. It was pop music unlike I'd ever heard and was instantly hooked. "Realiti" did nice things to my brain and I fell in love with the demo version of the song.`;
            albumCover.src = "images/artangels.jpg";
            song.pause();
            playPauseBtn.src = "images/play.svg";
            albumCover.classList.remove("playing");
            song.innerHTML = `<source src="media/realiticut.mp3" type="audio/mpeg">`;
            song.load();
        }
        else if(counter == 2){
            countPage.innerHTML = "2 / 4";
            h1.innerHTML = "beabody";
            beabody.classList.add("maindisplay");
            realiti.classList.remove("maindisplay");
            sagrad.classList.remove("maindisplay");
            h2.innerHTML = "Visions";
            albumDes.innerHTML = `This album hands down changed my taste in music. I put off listening to this for a while because it felt strange compared to the radio hits I was used to. This album made me truly appreciate Grimes as an artist. "Be a Body" takes me on an intergalactic adventure, enjoy!`;
            albumCover.src = "images/visions.jpg";
            sound.pause();
            playPauseBtn.src = "images/play.svg";
            albumCover.classList.remove("playing");
            song.innerHTML = `<source src="media/beabodycut.mp3" type="audio/mpeg">`;
            song.load();
        }
        else if(counter == 3){
            countPage.innerHTML = "3 / 4";
            h1.innerHTML = "Sagrad";
            sagrad.classList.add("maindisplay");
            beabody.classList.remove("maindisplay");
            idoru.classList.remove("maindisplay");
            h2.innerHTML = "Halfaxa";
            albumDes.innerHTML = `I never expected to enjoy listening to this album (listen to "Weregild" from this album and you'll get a clue as to why). Boy was I wrong to doubt how much I'd love this album. Halfaxa is the album I turn to when I don't want to listen to lighthearted instruments or lyrical music — it's the perfect album to just be with. (I love Weregild now btw, but Sagrad прекрасный takes the top spot).`;
            albumCover.src = "images/halfaxa.jpg";
            sound.pause();
            playPauseBtn.src = "images/play.svg";
            albumCover.classList.remove("playing");
            song.innerHTML = `<source src="media/sagradcut.mp3" type="audio/mpeg">`;
            song.load();
        }
        else if(counter == 4){
            countPage.innerHTML = "4 / 4";
            h1.innerHTML = "iDORU";
            idoru.classList.add("maindisplay");
            sagrad.classList.remove("maindisplay");
            h2.innerHTML = "Miss Anthropocene";
            albumDes.innerHTML = `This album is my all time favourite. Something about end-of-the-world themes, ethereal sounds, and soft annihilation just does it for me I guess? On a less hipstery note, this album got me thinking critically about the issues humanity has created for itself. Climate change, drug addiction, Algorithms + the dark side of tech are all present here. And finally, "IDORU" reminds me to live authentically despite the tragedies that might bring.`;
            albumCover.src = "images/missanthropocene.jpg";
            sound.pause();
            playPauseBtn.src = "images/play.svg";
            albumCover.classList.remove("playing");
            song.innerHTML = `<source src="media/idorucut.mp3" type="audio/mpeg">`;
            song.load();
        }
    });
});