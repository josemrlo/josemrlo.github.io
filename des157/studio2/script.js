(function () {

    'use strict';

    document.addEventListener('mousemove', reportPos);
    const theImg = document.querySelector('img');
    const h1 = document.querySelector('h1');
    const body = document.querySelector('body');
    let html = "";

    //this function tracks the x & y position of the cursor and once it's hovering over the first record, the src of the img in the html will change along with other styles.
    function reportPos(e) {
        const xPos = e.clientX;
        const yPos = e.clientY;

        if ((xPos >= 475 && xPos <= 500) && (yPos >= 475 && yPos <= 675)) {
            theImg.src = `images/artangels-web.jpg`;
            html = `art angels`
            h1.innerHTML = html;
            //i created classes for the body and h1 elements specific to the record
            h1.className = "artangels";
            body.className = "artangelsbody";
        }
        else if ((xPos >= 530 && xPos <= 540) && (yPos >= 490 && yPos <= 682)) {
            theImg.src = `images/halfaxa-web.jpg`;
            html = `halfaxa`
            h1.innerHTML = html;
            //i created classes for the body and h1 elements specific to the record
            h1.className = "halfaxa";
            body.className = "halfaxabody";
        }
        else if ((xPos >= 590 && xPos <= 625) && (yPos >= 490 && yPos <= 682)) {
            theImg.src = `images/missanthropocene-web.jpg`;
            html = `miss anthropocene`
            h1.innerHTML = html;
            //i created classes for the body and h1 elements specific to the record
            h1.className = "missa";
            body.className = "missabody";
        }
    }
})();