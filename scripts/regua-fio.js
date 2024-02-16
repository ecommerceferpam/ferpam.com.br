let vantagens = document.querySelectorAll('.vantagem');
let dotsVantagens = document.querySelectorAll('.dotVantagem');
var contadorVantagens = 0;

// Code for next button
function slideNextVantagens(){
    vantagens[contadorVantagens].style.animation = 'next1 0.5s ease-in forwards';
    if(contadorVantagens >= vantagens.length-1){
        contadorVantagens = 0;
    }
    else{
        contadorVantagens++;
    }
    clearInterval(deletIntervalVantagens);
    autoSlidingVantagens();

    vantagens[contadorVantagens].style.animation = 'next2 0.5s ease-in forwards';
    indicatorsVantagens();
}


// Auto slideing
function autoSlidingVantagens(){
    deletIntervalVantagens = setInterval(timer, 6000);
    function timer(){
        slideNextVantagens();
        indicatorsVantagens();
    }
}
autoSlidingVantagens();

// Stop auto sliding when mouse is over
const containerVantagens = document.querySelector('.vantagens-container');
containerVantagens.addEventListener('mouseover', function(){
    clearInterval(deletIntervalVantagens);
});

// Resume sliding when mouse is out
containerVantagens.addEventListener('mouseout', autoSlidingVantagens);

// Add and remove active class from the indicatorsVantagens
function indicatorsVantagens(){
    for(i = 0; i < dotsVantagens.length; i++){
        dotsVantagens[i].className = dotsVantagens[i].className.replace(' active', '');
    }
    dotsVantagens[contadorVantagens].className += ' active';
}

// Add click event to the indicator
function switchVantagem(currentVantagem){
    currentVantagem.classList.add('active');
    var imageId = currentVantagem.getAttribute('attr');
    if(imageId > contadorVantagens){
        vantagens[contadorVantagens].style.animation = 'next1 0.5s ease-in forwards';
        contadorVantagens = imageId;
        vantagens[contadorVantagens].style.animation = 'next2 0.5s ease-in forwards';
    }
    indicatorsVantagens();
}