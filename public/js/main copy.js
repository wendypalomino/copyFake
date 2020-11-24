const $page1 = document.querySelector('.page1')
const $page2 = document.querySelector('.page2')
const $page3 = document.querySelector('.page3')
const $page4 = document.querySelector('.page4')
const $page5 = document.querySelector('.page5')
const $page6 = document.querySelector('.page6')
const $page7 = document.querySelector('.page7')
const $page8 = document.querySelector('.page8')
const $page9 = document.querySelector('.page9')
const $page10 = document.querySelector('.page10')
const $page11 = document.querySelector('.page11')
const $page12 = document.querySelector('.page12')
const $page13 = document.querySelector('.page13')

setTimeout(() => {  $page1.classList.add('out-panel'); }, 5000);

$page1.addEventListener("animationend", (e)=>{

    if(e.animationName === "outPanel"){
        // $page2.style.animationName = "inPanel"
        // $page2.style.animationDuration = "1s"
        $page2.classList.add('in-panel')


        document.querySelector('#mascara1').classList.add('escala-mascara')
        setTimeout(() => {  document.querySelector('#mascara2').classList.add('escala-mascara'); }, 2000);
        setTimeout(() => {  document.querySelector('#mascara3').classList.add('escala-mascara'); }, 3000);


    }

})


document.querySelector('#btnSiguiente1').addEventListener("click", function(e) {

    $page2.classList.add('out-panel');
    document.querySelector('.page2').classList.remove("in-panel");

    setTimeout(() => {  document.querySelector('.page3').classList.add('in-panel'); }, 800);
    setTimeout(() => {  document.querySelector('#rueda').classList.add('rueda'); }, 1000);


})

document.querySelector('#gop4').addEventListener("click", function(e) {

    $page3.classList.add('out-panel');
    document.querySelector('.page3').classList.remove("in-panel");

    setTimeout(() => {  document.querySelector('.page4').classList.add('in-panel'); }, 800);

})


document.querySelector('#gop5').addEventListener("click", function(e) {

    document.querySelector('.page4').classList.add('top-panel');
    document.querySelector('.page4').classList.remove("in-panel");

    setTimeout(() => {
        document.querySelector('.page5').classList.add('bottom-panel');
        // document.querySelector('.page6').style.z-

    }, 1000);

})


document.querySelector('#gop6').addEventListener("click", function(e) {

    document.querySelector('.page5').classList.add('top-panel');
    document.querySelector('.page5').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page6').classList.add('bottom-panel');
    }, 1000);

})


document.querySelector('#gop7').addEventListener("click", function(e) {

    document.querySelector('.page6').classList.add('top-panel');
    document.querySelector('.page6').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page7').classList.add('bottom-panel');
    }, 1000);

})


document.querySelector('#gop8').addEventListener("click", function(e) {

    document.querySelector('.page7').classList.add('top-panel');
    document.querySelector('.page7').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page8').classList.add('bottom-panel');
    }, 1000);

})

document.querySelector('#gop9').addEventListener("click", function(e) {

    document.querySelector('.page8').classList.add('top-panel');
    document.querySelector('.page8').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page9').classList.add('bottom-panel');
    }, 1000);

})


document.querySelector('#gop10').addEventListener("click", function(e) {

    document.querySelector('.page9').classList.add('top-panel');
    document.querySelector('.page9').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page10').classList.add('bottom-panel');
    }, 1000);

})

document.querySelector('#gop11').addEventListener("click", function(e) {

    document.querySelector('.page10').classList.add('top-panel');
    document.querySelector('.page10').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page11').classList.add('bottom-panel');
    }, 1000);

})

document.querySelector('#gop12').addEventListener("click", function(e) {

    document.querySelector('.page11').classList.add('top-panel');
    document.querySelector('.page11').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page12').classList.add('bottom-panel');
    }, 1000);

})



document.querySelector('#gop13').addEventListener("click", function(e) {

    document.querySelector('.page12').classList.add('top-panel');
    document.querySelector('.page12').classList.remove("bottom-panel");

    setTimeout(() => {
        document.querySelector('.page13').classList.add('bottom-panel');
    }, 1000);

})

document.querySelector('#rueda').addEventListener("click", function(e) {

    const num = Math.floor(Math.random() * 5)

    document.querySelector('#rueda').setAttribute('src', `/app/img/rueda/${num + 1}.png`)
    document.querySelector('#rueda').style.animationPlayState = "paused"
})


document.querySelector('#mascara1').addEventListener("click", function(e) {

    document.querySelector('#mascara1').classList.add('m1active');
})

document.querySelector('#mascara2').addEventListener("click", function(e) {

    document.querySelector('#mascara2').classList.add('m2active');
})

document.querySelector('#mascara3').addEventListener("click", function(e) {

    document.querySelector('#mascara3').classList.add('m3active');
})










