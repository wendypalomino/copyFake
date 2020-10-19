const $page1 = document.querySelector('.page1')
const $page2 = document.querySelector('.page2')

setTimeout(() => {  $page1.classList.add('out-panel'); }, 5000);

$page1.addEventListener("animationend", (e)=>{
    
    if(e.animationName === "outPanel"){
        
        // $page2.style.animationName = "inPanel"
        // $page2.style.animationDuration = "1s"
        $page2.classList.add('in-panel')
    }
    
})
