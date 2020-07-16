'use strict';
let blur = false;
let activeWindow = null;
let bg = document.getElementsByClassName('bg')[0];
let person = document.getElementsByClassName('person')[0];


initLang()


document.onmousemove = function(event){
    if (!blur){
        bg.style.transitionDuration = '0s';
        person.style.transitionDuration = '0s';
        let x = document.documentElement.clientWidth / 160 - (event.clientX / 80 ) + 'px';
        let x2 = document.documentElement.clientWidth / 80 - (event.clientX / 40 ) + 'px';
        bg.style.transform = 'translate('+x+') scale(1.05) '
        person.style.transform = 'translate('+x2+') scale(1.05) '
    }
}

function initLang(){
    if(window.sessionStorage.getItem('lang') == null){
        window.sessionStorage.setItem('lang', window.navigator.language.slice(0,2))
    }
    
    let lang = window.sessionStorage.getItem('lang');

    if(lang == 'en' && document.children[0].lang == 'tr'){
        window.location.replace('en.html')
    }
    else if(lang == 'tr' && document.children[0].lang == 'en'){
        window.location.replace('index.html')
    }
}


function setLang(lang){
    window.sessionStorage.setItem('lang', lang);
    initLang();
}

function show(idWindow){
    if(activeWindow){ 
        activeWindow.classList.remove('visible');
        bg.classList.remove('blur');
        person.classList.add('blur2');
        blur = false;
    }
    bg.style.transitionDuration = '0.5s';
    person.style.transitionDuration = '0.5s';
    let currentWindow = document.getElementById(idWindow);
    currentWindow.classList.add('visible');
    bg.classList.add('blur');
    person.classList.remove('blur2');
    activeWindow = currentWindow;
    blur  = true;
}

function hideAll(){
    activeWindow.classList.remove('visible');
    bg.classList.remove('blur');
    person.classList.add('blur2');
    blur = false;
}
