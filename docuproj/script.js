(function(){
    'use strict';

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(eachLink) {
        eachLink.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetID = e.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);

        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 200;

        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth'});
        console.log(originalTop);
    }

})();

window.addEventListener('load', function(){
    'use strict';

    const posts = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    let postTops = [];
    let pagetop;
    let counter = 1;
    let prevCounter = 1;
    let doneResizing;

    posts.forEach(function(post){
        postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
    });

    window.addEventListener('scroll', function(){
        pagetop = window.pageXOffset = + 170;

        if(pagetop > postTops[counter]) {
            counter++;
            console.log(`scrolling down ${counter}`);
        }
        else if (counter > 1 && pagetop < postTops[counter -1]) {
            counter--;
            console.log(`scrolling up ${counter}`);
        }

        if (counter != prevCounter) {
            navLinks.forEach(function(eachLink){
                eachLink.removeAttribute('class');
            });

            const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);

            thisLink.className = 'selected';
            prevCounter = counter;
        }
    });
});