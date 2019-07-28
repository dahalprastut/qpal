// window.addEventListener('scroll' , (event)=>{
//     console.log('event' , event);
//     if(window.scrollY >= 1288){
//         console.log('greter');
//         texts.style = 'visibility:visible; top:0';
//     }

//     if(window.scrollY < 1288){
//         console.log('greter');
//         texts.style = 'top:80px; visibility:hidden; ';
//     }
// });



// for first section
var mobileFirst = document.querySelector('.mobile-first');
var linkButtons = document.querySelector('.main-information');


window.onload = ()=>{    // animation of first section
    window.setTimeout(()=>{

        mobileFirst.style='margin:0';
    },1000);

    window.setTimeout(()=>{
        linkButtons.style = 'opacity:1';
        
    },2000);
}


// first section ends