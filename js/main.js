



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


// for second section

var imageOne = document.querySelector('#image-1');
var imageTwo = document.querySelector('#image-2');
var imageThree = document.querySelector('#image-3');
var imageFour = document.querySelector('#image-4');

var problemOne = document.querySelector('.problem-1');
var problemTwo = document.querySelector('.problem-2');
var problemThree = document.querySelector('.problem-3');


window.addEventListener('scroll' , (event)=>{
    console.log('event' , window.scrollY);
    if(window.scrollY >= 1288 && window.scrollY < 2200){
        console.log('greter');
        imageOne.style='opacity:0;';
        imageTwo.style = "left:250px"
        imageThree.style = "left:140px"

        problemTwo.style = 'display:block';
        problemOne.style = 'display:none';
        problemThree.style='display:none'

    }

    if(window.scrollY < 1288){
        console.log('greter');

        imageOne.style='opacity:1';
        imageTwo.style = "left:140px"
        imageThree.style = "left:40px"
        

        problemOne.style = 'display:block';
        problemTwo.style = 'display:none';
        problemThree.style = 'display:none';
    }

    if(window.scrollY >= 2200){
        console.log('greter');
        // alert('hit');
        imageTwo.style='opacity:0; left:250px';
        imageThree.style = "left:250px"

        problemOne.style = 'display:none';
        problemTwo.style = 'display:none';
        problemThree.style = 'display:block';
    }


});


// second section ends