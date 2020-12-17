const $page1 = document.querySelector('.page1')
const $page2 = document.querySelector('.page2')
const $page3 = document.querySelector('.page3')
const $page4 = document.querySelector('.page4')
const $page5 = document.querySelector('.page5')
const $page6 = document.querySelector('.page6')
const $page7 = document.querySelector('.page7')

console.log(window.navigator)
// alert(window.navigator.appName + " - " + window.navigator.vendor) 

var ua = navigator.userAgent;

if (ua.indexOf("FBAN") != -1 || ua.indexOf("FBAV") != -1) {
    if (!window.location.href.match('redirect_fb')) {
    //   window.location.href = "https://example/redirect_fb/";

    alert("Esta en facebook ....")

    // var a = document.createElement('a'); 
    // a.href = "/exe"; 
    // a.target='_blank'; 
    // a.click(); 


    }
  }




$page1.addEventListener('touchmove', function(e) { 
    $page1.addEventListener('touchend', function(e) {
        // e.preventDefault();

        $page1.classList.add('top-panel')
        document.querySelector('.page2After').classList.add('bottom-panel')
        
    
    })
});

function ejecutaAnimacion(SelectorClass,AnimacionClass, timeDelay){
    setTimeout(() => {  document.querySelector(`${SelectorClass}`).classList.add(`${AnimacionClass}`)  }, timeDelay * 1000);
}

setTimeout(() => {  $page1.classList.add('in-panel'); }, 1000);


$page1.addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){
        document.querySelector('.page1 .text-small').classList.add('top-to-bottom-suavizado')

        setTimeout(() => {  document.querySelector('.page1 .text-big').classList.add('in-panel'); }, 1000);
        setTimeout(() => {  document.querySelector('.borde-circulo').classList.add('in-panel'); }, 2000);

    }

})

document.querySelector('.page1 #gop2 .borde-circulo').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){
        document.querySelector('.borde-circulo i').classList.add('top-down')
    }

})

document.querySelector('#gop2').addEventListener("click", function(e) {

    $page1.classList.add('top-panel')
    document.querySelector('.page2After').classList.add('bottom-panel')

})


// Animacion para pagina 2

document.querySelector('.page2After').addEventListener("animationend", (e)=>{

    if(e.animationName === "bottomPanel"){

        ejecutaAnimacion('.page2', 'in-panel', 1)
        ejecutaAnimacion('.page2 img', 'in-panel', 2)
        ejecutaAnimacion('.page2 .text-medium', 'in-panel', 3)
        ejecutaAnimacion('.page2 .text-small-medium', 'bottom-to-top', 4)

        ejecutaAnimacion('.objScroll', 'scroll', 5)

    }

})



document.querySelector('.page2').addEventListener('touchmove', function(e) { 
    document.querySelector('.page2').addEventListener('touchend', function(e) {
        // e.preventDefault();

        setTimeout(() => {  document.querySelector('.page2').classList.add('out-panel') }, 0)
        ejecutaAnimacion('.page4After', 'right-to-left-img', 1)
        ejecutaAnimacion('.page3', 'in-panel', 1.2)

    })
});


document.querySelector('#gop3').addEventListener("click", function(e) {

    setTimeout(() => {  document.querySelector('.page2').classList.add('out-panel') }, 0)
    ejecutaAnimacion('.page4After', 'right-to-left-img', 1)
    ejecutaAnimacion('.page3', 'in-panel', 1.2)

})

document.querySelector('.page2').addEventListener("wheel", (e)=>{

    setTimeout(() => {  document.querySelector('.page2').classList.add('out-panel') }, 0)
    ejecutaAnimacion('.page4After', 'right-to-left-img', 0.5)
    ejecutaAnimacion('.page3', 'in-panel', 1)
    

})


// Animacion para pagina 4


document.querySelector('.page4After').addEventListener("animationend", (e)=>{

    if(e.animationName === "rightToLeftImg"){

        ejecutaAnimacion('.page4', 'in-panel', 0)
        ejecutaAnimacion('.page4 .mascarag1', 'scale-back-to-front', 1)
        ejecutaAnimacion('.page4 .container-text', 'bottom-to-top', 2)
        ejecutaAnimacion('.page4 .container-text div', 'transform-left-to-right', 4)
        ejecutaAnimacion('.page4 .boca', 'scale-front-to-back', 5)

        ejecutaAnimacion('.objScroll2', 'scroll', 6)
    }

})

// Animacion para pagina 5 y 6

document.querySelector('.page4').addEventListener('touchmove', function(e) { 
    document.querySelector('.page4').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page5', 'in-panel', 0)
        ejecutaAnimacion('.page6', 'in-panel', 1)

    })
});


document.querySelector('#gop4').addEventListener("click", function(e) {

    ejecutaAnimacion('.page5', 'in-panel', 0)
    ejecutaAnimacion('.page6', 'in-panel', 1)

})

document.querySelector('.page4').addEventListener("wheel", (e)=>{

    ejecutaAnimacion('.page5', 'in-panel', 0)
    ejecutaAnimacion('.page6', 'in-panel', 1)
    

})



// Animacion para pagina 6

document.querySelector('.page6').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){
        
        ejecutaAnimacion('.page6 img', 'in-panel', 0)
        ejecutaAnimacion('.page6 .text-small-medium', 'in-panel', 1)

        ejecutaAnimacion('.objScroll3', 'scroll', 2)
    }

})


// Animacion para pagina 6 y 7


document.querySelector('.page6').addEventListener('touchmove', function(e) { 
    document.querySelector('.page6').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page7After', 'in-panel', 0)
        ejecutaAnimacion('.page7', 'in-panel', 1)

    })
});

document.querySelector('#gop5').addEventListener("click", function(e) {

    ejecutaAnimacion('.page7After', 'in-panel', 0)
    ejecutaAnimacion('.page7', 'in-panel', 1)

})

document.querySelector('.page6').addEventListener("wheel", (e)=>{
    ejecutaAnimacion('.page7After', 'in-panel', 0)
    ejecutaAnimacion('.page7', 'in-panel', 1)
})


document.querySelector('.page7').addEventListener("animationend", (e)=>{
    
    if(e.animationName === "inPanel"){
        ejecutaAnimacion(".page7 .mascarag2", "scale-back-to-front", 0)
        ejecutaAnimacion('.page7 .container-text', 'bottom-to-top', 1)
        ejecutaAnimacion('.page7 .container-text div', 'transform-left-to-right-small', 2)
        ejecutaAnimacion('.page7 .boca', 'scale-front-to-back', 3)

        ejecutaAnimacion('.objScroll4', 'scroll', 4)
    }
})

// Animacion para pagina 8

document.querySelector('.page7').addEventListener('touchmove', function(e) { 
    document.querySelector('.page7').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page8', 'in-panel', 0)
        ejecutaAnimacion('.page9', 'in-panel', 1)


    })
});

document.querySelector('#gop6').addEventListener("click", function(e) {

    ejecutaAnimacion('.page8', 'in-panel', 0)
    ejecutaAnimacion('.page9', 'in-panel', 1)

})

document.querySelector('.page7').addEventListener("wheel", (e)=>{
    ejecutaAnimacion('.page8', 'in-panel', 0)
    ejecutaAnimacion('.page9', 'in-panel', 1)
})

// Animacion para pagina 9

document.querySelector('.page9').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){

        ejecutaAnimacion('.page9  img', 'in-panel', 0)
        ejecutaAnimacion('.page9 .text-small-medium', 'in-panel', 1)

        ejecutaAnimacion('.objScroll5', 'scroll', 2)

    }

})


// Animacion para pagina 10

document.querySelector('.page9').addEventListener('touchmove', function(e) { 
    document.querySelector('.page9').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page10', 'bottom-panel', 0)

        ejecutaAnimacion('.page11After', 'in-panel', 2)
        ejecutaAnimacion('.page11', 'in-panel', 4)
        ejecutaAnimacion('.page11 img', 'scale-back-to-front', 5)
        ejecutaAnimacion('.page11 .container-text', 'bottom-to-top', 6)
        ejecutaAnimacion('.page11 .container-text div', 'transform-left-to-right-big', 7)
        ejecutaAnimacion('.page11 .boca', 'scale-front-to-back', 8)
    
        ejecutaAnimacion('.objScroll6', 'scroll', 8)


    })
});

document.querySelector('#gop7').addEventListener("click", function(e) {

    ejecutaAnimacion('.page10', 'bottom-panel', 0)

    ejecutaAnimacion('.page11After', 'in-panel', 2)
    ejecutaAnimacion('.page11', 'in-panel', 4)
    ejecutaAnimacion('.page11 img', 'scale-back-to-front', 5)
    ejecutaAnimacion('.page11 .container-text', 'bottom-to-top', 6)
    ejecutaAnimacion('.page11 .container-text div', 'transform-left-to-right-big', 7)
    ejecutaAnimacion('.page11 .boca', 'scale-front-to-back', 8)

    ejecutaAnimacion('.objScroll6', 'scroll', 8)

})

document.querySelector('.page9').addEventListener("wheel", (e)=>{

    ejecutaAnimacion('.page10', 'bottom-panel', 0)

    ejecutaAnimacion('.page11After', 'in-panel', 2)
    ejecutaAnimacion('.page11', 'in-panel', 4)
    ejecutaAnimacion('.page11 img', 'scale-back-to-front', 5)
    ejecutaAnimacion('.page11 .container-text', 'bottom-to-top', 6)
    ejecutaAnimacion('.page11 .container-text div', 'transform-left-to-right-big', 7)
    ejecutaAnimacion('.page11 .boca', 'scale-front-to-back', 8)

    ejecutaAnimacion('.objScroll6', 'scroll', 8)

})


// Animacion para pagina 11 / 12 / 13

document.querySelector('.page11').addEventListener('touchmove', function(e) { 
    document.querySelector('.page11').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page12', 'in-panel', 0)

    })
});


document.querySelector('#gop8').addEventListener("click", function(e) {

    ejecutaAnimacion('.page12', 'in-panel', 0)

})


document.querySelector('.page11').addEventListener("wheel", (e)=>{

    ejecutaAnimacion('.page12', 'in-panel', 0)


})


document.querySelector('.page12').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){

        ejecutaAnimacion('.page13', 'in-panel', 0)

        ejecutaAnimacion('.page13 .mcaida1', 'caida', 1)
        ejecutaAnimacion('.page13 .mcaida2', 'caida', 2)
        ejecutaAnimacion('.page13 .mcaida3', 'caida', 3)

        ejecutaAnimacion('.page13 .text-big-ultra', 'bottom-to-top', 1)
        ejecutaAnimacion('.page13 .container-text', 'in-panel', 1.5)
        ejecutaAnimacion('.page13 .barra-r', 'transform-left-to-right-xsmall', 2.5)
        
        ejecutaAnimacion('.objScroll7', 'scroll', 4)

    }

})



// Animacion para pagina 14 / 15  / 16

document.querySelector('.page13').addEventListener('touchmove', function(e) { 
    document.querySelector('.page13').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page14After', 'bottom-panel', 0)


    })
});

document.querySelector('#gop9').addEventListener("click", function(e) {

    ejecutaAnimacion('.page14After', 'bottom-panel', 0)

})


document.querySelector('.page13').addEventListener("wheel", (e)=>{

    ejecutaAnimacion('.page14After', 'bottom-panel', 0)

})


document.querySelector('.page14After').addEventListener("animationend", (e)=>{

    if(e.animationName === "bottomPanel"){

        ejecutaAnimacion('.page14', 'in-panel', 0)
        ejecutaAnimacion('.page15', 'right-panel-opacity', 1)

        // ejecutaAnimacion('.page16', 'in-panel', 6.1)
        ejecutaAnimacion('.page16', 'right-panel-opacity', 2)

        

    }

})


document.querySelector('.page16').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){

        setTimeout(() => {  document.querySelector('.page16 .text-big-ultra').classList.add('in-panel'); }, 0);
        setTimeout(() => {  document.querySelectorAll('.page16 .text-small')[0].classList.add('in-panel'); }, 1000);
        setTimeout(() => {  document.querySelector('.page16 .pr1').classList.add('in-panel'); }, 2000);
        setTimeout(() => {  document.querySelector('.page16 .pr2').classList.add('in-panel'); }, 2000);
        setTimeout(() => {  document.querySelectorAll('.page16 .text-small')[1].classList.add('in-panel'); }, 3000);

        ejecutaAnimacion('.objScroll8', 'scroll', 6)

    }

})




document.querySelector('.page16').addEventListener('touchmove', function(e) { 
    document.querySelector('.page16').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page17', 'in-panel', 0)


    })
});

document.querySelector('#gop10').addEventListener("click", function(e) {

    ejecutaAnimacion('.page17', 'in-panel', 0)

})


document.querySelector('.page16').addEventListener("wheel", (e)=>{

    ejecutaAnimacion('.page17', 'in-panel', 0)

})

document.querySelector('.page17').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){
        ejecutaAnimacion('.page17 .text-big-ultra', 'in-panel', 0)
        ejecutaAnimacion('.objScroll9', 'scroll', 1)

    }

})



document.querySelector('.page17').addEventListener('touchmove', function(e) { 
    document.querySelector('.page17').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page18', 'bottom-panel', 0)
        ejecutaAnimacion('.page18 #gop19', 'in-panel', 1)


    })
});

document.querySelector('#gop11').addEventListener("click", function(e) {

    ejecutaAnimacion('.page18', 'bottom-panel', 0)
    ejecutaAnimacion('.page18 #gop19', 'in-panel', 1)

})

document.querySelector('.page17').addEventListener("wheel", (e)=>{

    ejecutaAnimacion('.page18', 'bottom-panel', 0)
    ejecutaAnimacion('.page18 #gop19', 'in-panel', 1)

})


document.querySelector('#gop19').addEventListener("click", function(e) {

    // document.querySelector('.page19').classList.add('in-panel');
    ejecutaAnimacion('.page19', 'in-panel', 0)

})



document.querySelector('.page19').addEventListener('touchmove', function(e) { 
    document.querySelector('.page19').addEventListener('touchend', function(e) {
        // e.preventDefault();

        ejecutaAnimacion('.page20', 'in-panel', 0)

    })
});

document.querySelector('#gop20').addEventListener("click", function(e) {

    ejecutaAnimacion('.page20', 'in-panel', 0)

})


document.querySelector('.page20').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){
        setTimeout(() => {  document.querySelector('.page21').classList.add('in-panel'); }, 1);
    }

})


document.querySelector('.page21').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){
        setTimeout(() => {  document.querySelector('.page21 img').classList.add('in-panel'); }, 0);
        setTimeout(() => {  document.querySelector('.page21 .text-big').classList.add('in-panel'); }, 1000);
        setTimeout(() => {  document.querySelector('.page21 .text-small').classList.add('in-panel'); }, 2000);
        // setTimeout(() => {  document.querySelector('.page22').classList.add('in-panel'); }, 7000);
    }

})

document.querySelector('.page21 .text-small').addEventListener("animationend", (e)=>{

    if(e.animationName === "inPanel"){

        setTimeout(() => {  document.querySelector('.page21 .text-small').classList.replace('in-panel','out-panel'); }, 2000);
        setTimeout(() => {  document.querySelector('.page21 .text-big').classList.replace('in-panel','out-panel'); }, 3000);
        setTimeout(() => {  document.querySelector('.page21 img').classList.replace('in-panel','out-panel'); }, 4000);

    }

})


document.querySelector('.page21 img').addEventListener("animationend", (e)=>{

    if(e.animationName === "outPanel"){
        // setTimeout(() => {  document.querySelector('.page20').classList.replace('in-panel', 'out-panel'); }, 500);
        setTimeout(() => {  document.querySelector('.page21').classList.replace('in-panel', 'out-panel'); }, 0);
        setTimeout(() => {  document.querySelector('.page22').classList.add('in-panel'); }, 1000);
        setTimeout(() => {  document.querySelector('.page23').classList.add('in-panel'); }, 2000);
    }

})

