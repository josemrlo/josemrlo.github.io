(function(){
    'use strict';

    const myform = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    const madlibp = document.querySelector('#madlibp');
    const errorp = document.querySelector('#errorp');

    myform.addEventListener('submit', function(e){
        e.preventDefault();
        const fname = document.querySelector('#fname').value;
        const adj = document.querySelector('#adj').value;
        const adv = document.querySelector('#adv').value;
        const noun = document.querySelector('#noun').value;
        const verb = document.querySelector('#verb').value;
        const pnoun = document.querySelector('#pnoun').value;

        let reText;

        if (fname && adj && adv && noun && verb && pnoun) {
            document.getElementById('overlay').className = "showing";
            reText = `Hi ${fname}! How are you doing? Don't worry, you're not dead; you've transported to my world somehow. We eat ${pnoun} for breakfast here, you hungry? We also ${verb} all night long here, so get ready. We're gonna have a great time as long as you don't wake up. You can meet my ${adj} friends. I'll ask them to bring an inflatable ${noun} to celebrate your arrival. I feel like you'll get along ${adv} here!!!`;

            madlibp.innerHTML = reText;
        }
        else {
            document.getElementById('error').className = "showing";
            reText = "Please fill out all the fields.";

            errorp.innerHTML = reText;
        }

        const formData = document.querySelectorAll("input[type=text]");

        for (const eachField of formData) {
            eachField.value = "";
        }
    });

    document.querySelector('.close').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('overlay').className = "hidden";
    });

    document.addEventListener('keydown', function (e) {
        if(e.key === 'Escape') {
            document.getElementById('overlay').className = "hidden";
        }
    });

}());