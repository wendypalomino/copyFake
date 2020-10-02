const $btn = document.querySelector('#btnDescubrir')

$btn.addEventListener('click', function(e) {

    document.querySelector('.paso2').classList.add('out-panel')
    document.querySelector('.paso3').classList.add('in-panel')

    document.querySelector('#mascara1').classList.add('escala-mascara')

    setTimeout(() => {  document.querySelector('#mascara2').classList.add('escala-mascara'); }, 2000);
    setTimeout(() => {  document.querySelector('#mascara3').classList.add('escala-mascara'); }, 3000);
    setTimeout(() => {  document.querySelector('#mascara4').classList.add('escala-mascara'); }, 4000);
    
})


document.querySelector('#mascara1').addEventListener('click', function(e) {

    document.querySelector('.msg').classList.add('capa-msg')

})