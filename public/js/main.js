const $btn = document.querySelector('#btnDescubrir')

$btn.addEventListener('click', function(e) {
    
    document.querySelector('.paso2').classList.add('out-panel')
    document.querySelector('.paso3').classList.add('in-panel')

})