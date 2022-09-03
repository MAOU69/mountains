let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains1 = document.getElementById('mountains3')
let mountains2 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let MAOU = document.querySelector('.MAOU')
window.onscroll = function() {
    
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains1.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    MAOU.style.fontSize = value + 'px';
    if(scrollY >= 88){
        MAOU.style.fontSize = 88 + 'px';
        MAOU.style.position = 'fixed';
        if(scrollY >= 520){
            MAOU.style.display = 'none';  
        }else{
            MAOU.style.display = 'block';
        }

    }if(scrollY >= 125){
        document.querySelector('.main').style.background='linear-gradient(#00759d,#190146)'
    }else{
        document.querySelector('.main').style.background='linear-gradient(#2a014d,#190146)'

    }
   

  

}