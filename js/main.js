



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


// for third sectin variable


var jumping = document.querySelector('.first-image');
var magicMobile = document.querySelector('.second-image');
var secondMagicMobile = document.querySelector('.third-image');
var problem = document.querySelector('.fourth-image');


var firstDescription = document.querySelector('.first-description');
var secondDescription = document.querySelector('.second-description');
var thirdDescription = document.querySelector('.third-description');
var fourthDescription = document.querySelector('.fourth-description');



window.addEventListener('scroll' , (event)=>{
    console.log('event' , window.scrollY);
    if(window.scrollY >= 1288 && window.scrollY < 2200){
        console.log('greter');
        imageOne.style='opacity:0;';
        imageTwo.style = "left:320px"
        imageThree.style = "left:160px"

        problemTwo.style = 'display:block';
        problemOne.style = 'display:none';
        problemThree.style='display:none'

    }

    if(window.scrollY < 1288){
        console.log('greter');

        imageOne.style='opacity:1';
        imageTwo.style = "left:160px"
        imageThree.style = "left:60px"
        

        problemOne.style = 'display:block';
        problemTwo.style = 'display:none';
        problemThree.style = 'display:none';
    }

    if(window.scrollY >= 2200){
      
        imageTwo.style='opacity:0; left:320px';
        imageThree.style = "left:320px"

        problemOne.style = 'display:none';
        problemTwo.style = 'display:none';
        problemThree.style = 'display:block';
    }


    // third


    if(window.scrollY >= 4960 && window.scrollY < 5660){

        
        jumping.style=' opacity:0; top:40%; left:3%';
        secondMagicMobile.style ='opacity:0; top:10%; left:3%';
        magicMobile.style='opacity: 1 ;top:20%;left:8%; ';


        problem.style ='opacity:0; top:10%; left:3%';

        firstDescription.style='opacity:0;'
        secondDescription.style='opacity:1;'
        thirdDescription.style='opacity:0';
        fourthDescription.style='opacity:0';
      
    }

    if(window.scrollY < 4960){
        jumping.style=' opacity: 1; top:20%;left:8%;';
        magicMobile.style='opacity:0; top:10%; left:3%; ';
        secondMagicMobile.style ='opacity:0; top:10%; left:3%';

        problem.style ='opacity:0; top:10%; left:3%';
        
        


        firstDescription.style='opacity:1;'
        secondDescription.style='opacity:0;'
        thirdDescription.style='opacity:0';
        fourthDescription.style='opacity:0';
        
        
    }

    // 


    if(window.scrollY >= 5660 && window.scrollY >= 4960){
        secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
        jumping.style=' opacity:0; top:40%; left:3%';
        magicMobile.style=' opacity:0; top:40%; left:3%';

        problem.style ='opacity:0; top:10%; left:3%';
        


    firstDescription.style='opacity:0;'
        secondDescription.style='opacity:0;'
        thirdDescription.style='opacity:1;'
        fourthDescription.style='opacity:0';
        
      
      
    }

    if(window.scrollY < 5660 && window.scrollY >=4960){
        magicMobile.style=' opacity: 1; top:20%;left:8%;';
        secondMagicMobile.style='opacity:0; top:10%; left:3%; ';
        jumping.style=' opacity:0; top:40%; left:3%';

        problem.style ='opacity:0; top:10%; left:3%';
        

        firstDescription.style='opacity:0;'
        secondDescription.style='opacity:1;'
        thirdDescription.style='opacity:0;'
        fourthDescription.style='opacity:0';
        
    }

    // 

    if(window.scrollY >= 6300 && window.scrollY >= 5660){

        secondMagicMobile.style='opacity: 0 ;top:40%;left:3%; ';
        jumping.style=' opacity:0; top:40%; left:3%';
        magicMobile.style=' opacity:0; top:40%; left:3%';

        problem.style ='opacity:1; top:20%; left:8%';

        
        firstDescription.style='opacity:0;'
        secondDescription.style='opacity:0;'
        thirdDescription.style='opacity:0;'
        fourthDescription.style='opacity:1';

    }

    if(window.scrollY < 6300 && window.scrollY >= 5660){

        secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
        jumping.style=' opacity:0; top:40%; left:3%';
        magicMobile.style=' opacity:0; top:40%; left:3%';

        problem.style ='opacity:0; top:10%; left:3%';

        firstDescription.style='opacity:0;'
        secondDescription.style='opacity:0;'
        thirdDescription.style='opacity:1;'
        fourthDescription.style='opacity:0';
        


 

    }




});


// second section ends