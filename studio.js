const close = document.querySelector('.close');
const menu = document.querySelector('.menu-bar');


close.addEventListener('click',function(){
    if(window.innerWidth <= 950){
        document.querySelector('.menu-list').style.transform = 'translate(100%)'
        document.querySelector('.menu-list').style.transition = '1s all'

    }
})

menu.addEventListener('click',function(){
    document.querySelector('.menu-list').style.transition = '1s all'
    document.querySelector('.menu-list').style.display = 'flex';
    document.querySelector('.menu-list').style.transform = 'translate(0)';
    document.querySelector('.menu-list').style.opacity = '1';
    
})

this.addEventListener('resize',function(){
    document.querySelector('.menu-list').style.transition = '0s all'
    if(window.innerWidth >= 950){
        document.querySelector('.menu-list').style.transform = 'translate(0)'
    }

    if(window.innerWidth <= 950){
        document.querySelector('.menu-list').style.transform = 'translate(100%)'
    }

    console.log('tjeopjg;dsl gwdal'
    )
})

console.log(window.innerWidth)