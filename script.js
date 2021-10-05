const panels = document.querySelectorAll('.panel');
const actives=document.querySelectorAll('.active');

panels.forEach(function(panel){
    panel.addEventListener('click',function(){
        removeActiveClass();
        panel.classList.add('active');
    })
})


function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    });
}



