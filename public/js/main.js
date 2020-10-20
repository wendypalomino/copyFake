const $page1 = document.querySelector('.page1')
const $page2 = document.querySelector('.page2')
const $page3 = document.querySelector('.page3')
const $page4 = document.querySelector('.page4')
const $page5 = document.querySelector('.page5')

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

document.querySelector('#btnInfo').addEventListener("click", function(e) {

    $page3.classList.add('out-panel');
    document.querySelector('.page3').classList.remove("in-panel");

    setTimeout(() => {  document.querySelector('.page4').classList.add('in-panel'); }, 800);
    

    setTimeout(() => {      
        document.querySelector('.page4').classList.add('top-panel'); 
        document.querySelector('.page4').classList.remove("in-panel");
    }, 3000);

    setTimeout(() => {      
        document.querySelector('.page5').classList.add('bottom-panel');         
    }, 4000);
    

    
})

