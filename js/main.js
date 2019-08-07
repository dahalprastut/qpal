



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

    // window.scrollTo({
    //     top:0
    // })
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


// for third section variable


var jumping = document.querySelector('.first-image-third');
var magicMobile = document.querySelector('.second-image-third');
var secondMagicMobile = document.querySelector('.third-image-third');
var problem = document.querySelector('.fourth-image-third');


var firstDescription = document.querySelector('.first-description-third');
var secondDescription = document.querySelector('.second-description-third');
var thirdDescription = document.querySelector('.third-description-third');
var fourthDescription = document.querySelector('.fourth-description-third');


// for fourth section variable


var fourthMobileFirst = document.querySelector('.first-image-fourth');
var fourthMobileSecond = document.querySelector('.second-image-fourth');
var fourthMobileThird = document.querySelector('.third-image-fourth');
var fourthMobileFourth = document.querySelector('.fourth-image-fourth');
var fourthMobileFifth = document.querySelector('.fifth-image-fourth');


var fourthDescriptionFirst = document.querySelector('.first-description-fourth');
var fourthDescriptionSecond = document.querySelector('.second-description-fourth');
var fourthDescriptionThird = document.querySelector('.third-description-fourth');
var fourthDescriptionFourth = document.querySelector('.fourth-description-fourth');
var fourthDescriptionFifth = document.querySelector('.fifth-description-fourth');


// for buttons variables

var activeBtn = document.querySelector('.active-btn');
var hiddenBtn = document.querySelector('.hidden-btn');

// for logo variable

var logo = document.querySelector('.logo');

// for storing horizontal height of sections

var second = document.querySelector('#second').getBoundingClientRect().left;
var third = document.querySelector('#third').getBoundingClientRect().left;
var fourth = document.querySelector('#fourth').getBoundingClientRect().left;


window.addEventListener('scroll' , (event)=>{
    // console.log('event' , window.scrollY);

    if( window.innerWidth < 2133){  //window.innerWidth >= 1920 &&

        if(window.innerWidth > 1630){
            if(window.scrollY >= 1000 && window.scrollY < 1200){
                imageOne.style='opacity:0;';
                imageTwo.style = "left:320px"
                imageThree.style = "left:160px"
        
                problemTwo.style = 'display:block';
                problemOne.style = 'display:none';
                problemThree.style='display:none'
        
            }
        
            if(window.scrollY < 1000){
        
                imageOne.style='opacity:1';
                imageTwo.style = "left:160px"
                imageThree.style = "left:60px"
                
        
                problemOne.style = 'display:block';
                problemTwo.style = 'display:none';
                problemThree.style = 'display:none';
            }
        
            if(window.scrollY >= 1200){
              
                imageTwo.style='opacity:0; left:320px';
                imageThree.style = "left:320px"
        
                problemOne.style = 'display:none';
                problemTwo.style = 'display:none';
                problemThree.style = 'display:block';
            }
        }
    
    
        
        if(window.scrollY > 1430){   //last changes
            // third

            if(window.scrollY >= 2500 && window.scrollY < 2800){
                
                jumping.style=' opacity:0; top:40%; left:3%';
                secondMagicMobile.style ='opacity:0; top:10%; left:3%';
                magicMobile.style='opacity: 1 ;top:20%;left:8%; ';
        
        
                problem.style ='opacity:0; top:10%; left:3%';
        
                firstDescription.style='opacity:0;'
                secondDescription.style='opacity:1;'
                thirdDescription.style='opacity:0';
                fourthDescription.style='opacity:0';
              
            }
        
            if(window.scrollY < 2500){
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
        
        
            if(window.scrollY >= 2800 && window.scrollY >= 2500){
                secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
                jumping.style=' opacity:0; top:40%; left:3%';
                magicMobile.style=' opacity:0; top:40%; left:3%';
        
                problem.style ='opacity:0; top:10%; left:3%';
                
        
        
            firstDescription.style='opacity:0;'
                secondDescription.style='opacity:0;'
                thirdDescription.style='opacity:1;'
                fourthDescription.style='opacity:0';
                
              
              
            }
        
            if(window.scrollY < 2800 && window.scrollY >=2500){
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
        
            if(window.scrollY >= 3200 && window.scrollY >= 2800){
        
                secondMagicMobile.style='opacity: 0 ;top:40%;left:3%; ';
                jumping.style=' opacity:0; top:40%; left:3%';
                magicMobile.style=' opacity:0; top:40%; left:3%';
        
                problem.style ='opacity:1; top:20%; left:8%';
        
                
                firstDescription.style='opacity:0;'
                secondDescription.style='opacity:0;'
                thirdDescription.style='opacity:0;'
                fourthDescription.style='opacity:1';
        
            }
        
            if(window.scrollY < 3200 && window.scrollY >= 2800){
        
                secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
                jumping.style=' opacity:0; top:40%; left:3%';
                magicMobile.style=' opacity:0; top:40%; left:3%';
        
                problem.style ='opacity:0; top:10%; left:3%';
        
                firstDescription.style='opacity:0;'
                secondDescription.style='opacity:0;'
                thirdDescription.style='opacity:1;'
                fourthDescription.style='opacity:0';
                
        
        
         
        
            }
        
            // fourth
        
        
            if(window.scrollY >= 4400 && window.scrollY < 4700){
                
                fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
                fourthMobileThird.style ='opacity:0; top:10%; left:3%';
                fourthMobileSecond.style='opacity: 1 ;top:20%;left:8%; ';
        
        
                fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
                fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
        
                fourthDescriptionFirst.style='opacity:0;'
                fourthDescriptionSecond.style='opacity:1;'
                fourthDescriptionThird.style='opacity:0';
                fourthDescriptionFourth.style='opacity:0';
                fourthDescriptionFifth.style='opacity:0';
                
              
            }
        
            if(window.scrollY < 4400){
                fourthMobileFirst.style=' opacity: 1; top:20%;left:8%;';
                fourthMobileSecond.style='opacity:0; top:10%; left:3%; ';
                fourthMobileThird.style ='opacity:0; top:10%; left:3%';
        
                fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
                fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
                
                
        
        
                fourthDescriptionFirst.style='opacity:1;'
                fourthDescriptionSecond.style='opacity:0;'
                fourthDescriptionThird.style='opacity:0';
                fourthDescriptionFourth.style='opacity:0';
                fourthDescriptionFifth.style='opacity:0';
                
                
                
            }
        
            // 
        
        
            if(window.scrollY >= 4700 && window.scrollY >= 4400){
                fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
                fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
                fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
        
                fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
                fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
                
        
        
                fourthDescriptionFirst.style='opacity:0;'
                fourthDescriptionSecond.style='opacity:0;'
                fourthDescriptionThird.style='opacity:1;'
                fourthDescriptionFourth.style='opacity:0';
                fourthDescriptionFifth.style='opacity:0';
                
                
              
              
            }
        
            if(window.scrollY < 4700 && window.scrollY >=4400){
                fourthMobileSecond.style=' opacity: 1; top:20%;left:8%;';
                fourthMobileThird.style='opacity:0; top:10%; left:3%; ';
                fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
        
                fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
                fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
                
        
                fourthDescriptionFirst.style='opacity:0;'
                fourthDescriptionSecond.style='opacity:1;'
                fourthDescriptionThird.style='opacity:0;'
                fourthDescriptionFourth.style='opacity:0';
                fourthDescriptionFifth.style='opacity:0';
                
                
            }
        
            // 
        
            if(window.scrollY >= 5100 && window.scrollY >= 4700){
        
                fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
                fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
                fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
        
                fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
                fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
        
                
                fourthDescriptionFirst.style='opacity:0;'
                fourthDescriptionSecond.style='opacity:0;'
                fourthDescriptionThird.style='opacity:0;'
                fourthDescriptionFourth.style='opacity:1';
                fourthDescriptionFifth.style='opacity:0';
                
        
            }
        
            if(window.scrollY < 5100 && window.scrollY >= 4700){
        
                fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
                fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
                fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
        
                fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
                fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
        
                fourthDescriptionFirst.style='opacity:0;'
                fourthDescriptionSecond.style='opacity:0;'
                fourthDescriptionThird.style='opacity:1;'
                fourthDescriptionFourth.style='opacity:0';
                fourthDescriptionFifth.style='opacity:0';
                
                
        
            }
        
            
            if(window.scrollY >= 5500 && window.scrollY >= 5100){
        
                fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
                fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
                fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
        
                fourthMobileFourth.style ='opacity:0; top:40%; left:3%';
                fourthMobileFifth.style ='opacity:1; top:20%; left:8%';
        
                
                fourthDescriptionFirst.style='opacity:0;'
                fourthDescriptionSecond.style='opacity:0;'
                fourthDescriptionThird.style='opacity:0;'
                fourthDescriptionFourth.style='opacity:0';
                fourthDescriptionFifth.style='opacity:1';
        
            }
        
            if(window.scrollY < 5500 && window.scrollY >= 5100){
        
                fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
                fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
                fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
        
                fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
                fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
        
                fourthDescriptionFirst.style='opacity:0;'
                fourthDescriptionSecond.style='opacity:0;'
                fourthDescriptionThird.style='opacity:0;'
                fourthDescriptionFourth.style='opacity:1';
                fourthDescriptionFifth.style='opacity:0';
                
                
        
            }
        
        
        
        
            // for mouse and hand 
            
            if(window.scrollY >= 5500){
                activeBtn.style = 'display:none';
                hiddenBtn.style='display:block';
            }
        
        
            if(window.scrollY < 5500){
                activeBtn.style = 'display:block';
                hiddenBtn.style='display:none';
            }
        }
    
    
    }


    // for second 90%

    if(window.innerWidth >= 2133 ){  // && window.innerWidth < 2400
        if(window.scrollY >= 1100 && window.scrollY < 1300){
            imageOne.style='opacity:0;';
            imageTwo.style = "left:320px"
            imageThree.style = "left:160px"
    
            problemTwo.style = 'display:block';
            problemOne.style = 'display:none';
            problemThree.style='display:none'
    
        }
    
        if(window.scrollY < 1100){
    
            imageOne.style='opacity:1';
            imageTwo.style = "left:160px"
            imageThree.style = "left:60px"
            
    
            problemOne.style = 'display:block';
            problemTwo.style = 'display:none';
            problemThree.style = 'display:none';
        }
    
        if(window.scrollY >= 1300){
          
            imageTwo.style='opacity:0; left:320px';
            imageThree.style = "left:320px"
    
            problemOne.style = 'display:none';
            problemTwo.style = 'display:none';
            problemThree.style = 'display:block';
        }
    
    
        // third
    
    
        if(window.scrollY >= 2600 && window.scrollY < 2900){
            
            jumping.style=' opacity:0; top:40%; left:3%';
            secondMagicMobile.style ='opacity:0; top:10%; left:3%';
            magicMobile.style='opacity: 1 ;top:20%;left:8%; ';
    
    
            problem.style ='opacity:0; top:10%; left:3%';
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:1;'
            thirdDescription.style='opacity:0';
            fourthDescription.style='opacity:0';
          
        }
    
        if(window.scrollY < 2600){
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
    
    
        if(window.scrollY >= 2900 && window.scrollY >= 2600){
            secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:0; top:10%; left:3%';
            
    
    
        firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:1;'
            fourthDescription.style='opacity:0';
            
          
          
        }
    
        if(window.scrollY < 2900 && window.scrollY >=2600){
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
    
        if(window.scrollY >= 3300 && window.scrollY >= 2900){
    
            secondMagicMobile.style='opacity: 0 ;top:40%;left:3%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:1; top:20%; left:8%';
    
            
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:0;'
            fourthDescription.style='opacity:1';
    
        }
    
        if(window.scrollY < 3300 && window.scrollY >= 2900){
    
            secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:0; top:10%; left:3%';
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:1;'
            fourthDescription.style='opacity:0';
            
    
    
     
    
        }
    
        // fourth
    
    
        if(window.scrollY >= 4700 && window.scrollY < 5000){
            
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
            fourthMobileSecond.style='opacity: 1 ;top:20%;left:8%; ';
    
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
          
        }
    
        if(window.scrollY < 4700){
            fourthMobileFirst.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileSecond.style='opacity:0; top:10%; left:3%; ';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
            
    
    
            fourthDescriptionFirst.style='opacity:1;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
            
        }
    
        // 
    
    
        if(window.scrollY >= 5000 && window.scrollY >= 4700){
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
          
          
        }
    
        if(window.scrollY < 5000 && window.scrollY >=4700){
            fourthMobileSecond.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileThird.style='opacity:0; top:10%; left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
        }
    
        // 
    
        if(window.scrollY >= 5400 && window.scrollY >= 5000){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
    
        }
    
        if(window.scrollY < 5400 && window.scrollY >= 5000){
    
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
        
        if(window.scrollY >= 5800 && window.scrollY >= 5400){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:40%; left:3%';
            fourthMobileFifth.style ='opacity:1; top:20%; left:8%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:1';
    
        }
    
        if(window.scrollY < 5800 && window.scrollY >= 5400){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
    
    
    
        // for mouse and hand 
        
        if(window.scrollY >= 5800){
            activeBtn.style = 'display:none';
            hiddenBtn.style='display:block';
        }
    
    
        if(window.scrollY < 5800){
            activeBtn.style = 'display:block';
            hiddenBtn.style='display:none';
        }
    }

    // for 110%

    if(window.innerWidth <= 1745 && window.innerWidth > 1430){


        // foruth
        if(window.scrollY >= 4000 && window.scrollY < 4300){
            
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
            fourthMobileSecond.style='opacity: 1 ;top:20%;left:8%; ';
    
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
          
        }
    
        if(window.scrollY < 4000){
            fourthMobileFirst.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileSecond.style='opacity:0; top:10%; left:3%; ';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
            
    
    
            fourthDescriptionFirst.style='opacity:1;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
            
        }
    
        // 
    
    
        if(window.scrollY >= 4300 && window.scrollY >= 4000){
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
          
          
        }
    
        if(window.scrollY < 4300 && window.scrollY >=4000){
            fourthMobileSecond.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileThird.style='opacity:0; top:10%; left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
        }
    
        // 
    
        if(window.scrollY >= 4700 && window.scrollY >= 4300){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
    
        }
    
        if(window.scrollY < 4700 && window.scrollY >= 4300){
    
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
        
        if(window.scrollY >= 5100 && window.scrollY >= 4700){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:40%; left:3%';
            fourthMobileFifth.style ='opacity:1; top:20%; left:8%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:1';
    
        }
    
        if(window.scrollY < 5100 && window.scrollY >= 4700){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
    
    
    
        // for mouse and hand 
        
        if(window.scrollY >= 5100){
            activeBtn.style = 'display:none';
            hiddenBtn.style='display:block';
        }
    
    
        if(window.scrollY < 5100){
            activeBtn.style = 'display:block';
            hiddenBtn.style='display:none';
        }
    }

   

    // for 120%


    if(window.innerWidth <= 1630 && window.innerWidth > 1430){

        // second
            if(window.scrollY >= 1000 && window.scrollY < 1200){
                imageOne.style='opacity:0;';
                imageTwo.style = "left:320px"
                imageThree.style = "left:240px"
        
                problemTwo.style = 'display:block';
                problemOne.style = 'display:none';
                problemThree.style='display:none'
        
            }
        
            if(window.scrollY < 1000){
                
                imageOne.style='opacity:1';
                imageTwo.style = "left:240px"
                imageThree.style = "left:180px"
                
        
                problemOne.style = 'display:block';
                problemTwo.style = 'display:none';
                problemThree.style = 'display:none';
            }
        
            if(window.scrollY >= 1200){
              
                imageTwo.style='opacity:0; left:320px';
                imageThree.style = "left:320px"
        
                problemOne.style = 'display:none';
                problemTwo.style = 'display:none';
                problemThree.style = 'display:block';
            }
    

         // third
    
    
        if(window.scrollY >= 2000 && window.scrollY < 2300){
            
            jumping.style=' opacity:0; top:40%; left:3%';
            secondMagicMobile.style ='opacity:0; top:10%; left:3%';
            magicMobile.style='opacity: 1 ;top:20%;left:8%; ';
    
    
            problem.style ='opacity:0; top:10%; left:3%';
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:1;'
            thirdDescription.style='opacity:0';
            fourthDescription.style='opacity:0';
          
        }
    
        if(window.scrollY < 2000){
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
    
    
        if(window.scrollY >= 2300 && window.scrollY >= 2000){
            secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:0; top:10%; left:3%';
            
    
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:1;'
            fourthDescription.style='opacity:0';
            
          
          
        }
    
        if(window.scrollY < 2300 && window.scrollY >=2000){
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
    
        if(window.scrollY >= 2700 && window.scrollY >= 2300){
    
            secondMagicMobile.style='opacity: 0 ;top:40%;left:3%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:1; top:20%; left:8%';
    
            
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:0;'
            fourthDescription.style='opacity:1';
    
        }
    
        if(window.scrollY < 2700 && window.scrollY >= 2300){
    
            secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:0; top:10%; left:3%';
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:1;'
            fourthDescription.style='opacity:0';
            
    
    
     
    
        }
    
        // fourth

        if(window.scrollY >= 3500 && window.scrollY < 3800){
            
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
            fourthMobileSecond.style='opacity: 1 ;top:20%;left:8%; ';
    
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
          
        }
    
        if(window.scrollY < 3500){
            fourthMobileFirst.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileSecond.style='opacity:0; top:10%; left:3%; ';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
            
    
    
            fourthDescriptionFirst.style='opacity:1;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
            
        }
    
        // 
    
    
        if(window.scrollY >= 3800 && window.scrollY >= 3500){
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
          
          
        }
    
        if(window.scrollY < 3800 && window.scrollY >=3500){
            fourthMobileSecond.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileThird.style='opacity:0; top:10%; left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
        }
    
        // 
    
        if(window.scrollY >= 4200 && window.scrollY >= 3800){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
    
        }
    
        if(window.scrollY < 4200 && window.scrollY >= 3800){
    
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
        
        if(window.scrollY >= 4500 && window.scrollY >= 4200){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:40%; left:3%';
            fourthMobileFifth.style ='opacity:1; top:20%; left:8%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:1';
    
        }
    
        if(window.scrollY < 4500 && window.scrollY >= 4200){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
    
    
    
        // for mouse and hand 
        
        if(window.scrollY >= 4500){
            activeBtn.style = 'display:none';
            hiddenBtn.style='display:block';
        }
    
    
        if(window.scrollY < 4500){
            activeBtn.style = 'display:block';
            hiddenBtn.style='display:none';
        }
    
    
       
    }


    // for 150%

    if(window.innerWidth <= 1430){

        // second

        if(window.scrollY >= 700 && window.scrollY < 900){
            imageOne.style='opacity:0;';
            imageTwo.style = "left:320px"
            imageThree.style = "left:240px"
    
            problemTwo.style = 'display:block';
            problemOne.style = 'display:none';
            problemThree.style='display:none'
    
        }
    
        if(window.scrollY < 700){
            
            imageOne.style='opacity:1';
            imageTwo.style = "left:240px"
            imageThree.style = "left:180px"
            
    
            problemOne.style = 'display:block';
            problemTwo.style = 'display:none';
            problemThree.style = 'display:none';
        }
    
        if(window.scrollY >= 900){
          
            imageTwo.style='opacity:0; left:320px';
            imageThree.style = "left:320px"
    
            problemOne.style = 'display:none';
            problemTwo.style = 'display:none';
            problemThree.style = 'display:block';
        }

        // third
    
    
        if(window.scrollY >= 1600 && window.scrollY < 1900){
            
            jumping.style=' opacity:0; top:40%; left:3%';
            secondMagicMobile.style ='opacity:0; top:10%; left:3%';
            magicMobile.style='opacity: 1 ;top:20%;left:8%; ';
    
    
            problem.style ='opacity:0; top:10%; left:3%';
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:1;'
            thirdDescription.style='opacity:0';
            fourthDescription.style='opacity:0';
          
        }
    
        if(window.scrollY < 1600){
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
    
    
        if(window.scrollY >= 1900 && window.scrollY >= 1600){
            secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:0; top:10%; left:3%';
            
    
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:1;'
            fourthDescription.style='opacity:0';
            
          
          
        }
    
        if(window.scrollY < 1900 && window.scrollY >=1600){
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
    
        if(window.scrollY >= 2300 && window.scrollY >= 1900){
    
            secondMagicMobile.style='opacity: 0 ;top:40%;left:3%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:1; top:20%; left:8%';
    
            
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:0;'
            fourthDescription.style='opacity:1';
    
        }
    
        if(window.scrollY < 2300 && window.scrollY >= 1900){
    
            secondMagicMobile.style='opacity: 1 ;top:20%;left:8%; ';
            jumping.style=' opacity:0; top:40%; left:3%';
            magicMobile.style=' opacity:0; top:40%; left:3%';
    
            problem.style ='opacity:0; top:10%; left:3%';
    
            firstDescription.style='opacity:0;'
            secondDescription.style='opacity:0;'
            thirdDescription.style='opacity:1;'
            fourthDescription.style='opacity:0';
            
    
    
     
    
        }
    
        // fourth

        if(window.scrollY >= 2900 && window.scrollY < 3200){
            
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
            fourthMobileSecond.style='opacity: 1 ;top:20%;left:8%; ';
    
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
          
        }
    
        if(window.scrollY < 2900){
            fourthMobileFirst.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileSecond.style='opacity:0; top:10%; left:3%; ';
            fourthMobileThird.style ='opacity:0; top:10%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
            
    
    
            fourthDescriptionFirst.style='opacity:1;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0';
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
            
        }
    
        // 
    
    
        if(window.scrollY >= 3200 && window.scrollY >= 2900){
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
          
          
        }
    
        if(window.scrollY < 3200 && window.scrollY >=2900){
            fourthMobileSecond.style=' opacity: 1; top:20%;left:8%;';
            fourthMobileThird.style='opacity:0; top:10%; left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
            
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:1;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
        }
    
        // 
    
        if(window.scrollY >= 3500 && window.scrollY >= 3200){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
    
        }
    
        if(window.scrollY < 3500 && window.scrollY >= 3200){
    
            fourthMobileThird.style='opacity: 1 ;top:20%;left:8%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:10%; left:3%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:1;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
        
        if(window.scrollY >= 3700 && window.scrollY >= 3500){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:0; top:40%; left:3%';
            fourthMobileFifth.style ='opacity:1; top:20%; left:8%';
    
            
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:0';
            fourthDescriptionFifth.style='opacity:1';
    
        }
    
        if(window.scrollY < 3700 && window.scrollY >= 3500){
    
            fourthMobileThird.style='opacity: 0 ;top:40%;left:3%; ';
            fourthMobileFirst.style=' opacity:0; top:40%; left:3%';
            fourthMobileSecond.style=' opacity:0; top:40%; left:3%';
    
            fourthMobileFourth.style ='opacity:1; top:20%; left:8%';
            fourthMobileFifth.style ='opacity:0; top:10%; left:3%';
    
            fourthDescriptionFirst.style='opacity:0;'
            fourthDescriptionSecond.style='opacity:0;'
            fourthDescriptionThird.style='opacity:0;'
            fourthDescriptionFourth.style='opacity:1';
            fourthDescriptionFifth.style='opacity:0';
            
            
    
        }
    
    
    
    
    
        // for mouse and hand 
        
        if(window.scrollY >= 3700){
            activeBtn.style = 'display:none';
            hiddenBtn.style='display:block';
        }
    
    
        if(window.scrollY < 3700){
            activeBtn.style = 'display:block';
            hiddenBtn.style='display:none';
        }
    
    }







});


// second section ends


// ---------- navigation btns start

// go on top 


var scrollTop = (event)=>{
    event.preventDefault();
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

hiddenBtn.onclick =()=> scrollTop(event);
logo.onclick =()=> scrollTop(event);

// 





activeBtn.onclick = function(event){
    event.preventDefault();

    if(window.innerWidth < 2133){  //window.innerWidth >= 1746 && 

        if(window.scrollY <= 800){
    
            window.scrollTo({
                top:second - 1000,
                behavior: 'smooth'
            });
        }
        
        if(window.scrollY > 800 && window.scrollY <= 2300){
            window.scrollTo({
                top:third - 1400,
                behavior: 'smooth'
            });
        }
        if(window.scrollY > 2300 ){
            window.scrollTo({
                top:fourth - 1400,
                behavior: 'smooth'
            });
        }
    }


    // for 90%

    if(window.innerWidth >= 2133){

        if(window.scrollY <= 800){
    
            window.scrollTo({
                top:second - 1050,
                behavior: 'smooth'
            });
        }
        
        if(window.scrollY > 800 && window.scrollY <= 2300){
            window.scrollTo({
                top:third - 1700,
                behavior: 'smooth'
            });
        }
        if(window.scrollY > 2300 ){
            window.scrollTo({
                top:fourth - 1660,
                behavior: 'smooth'
            });
        }
    }

    // for 110%

    if(window.innerWidth <= 1745){

        if(window.scrollY <= 800){
    
            window.scrollTo({
                top:second - 900,
                behavior: 'smooth'
            });
        }
        
        if(window.scrollY > 800 && window.scrollY <= 2300){
            window.scrollTo({
                top:third - 1100,
                behavior: 'smooth'
            });
        }
        if(window.scrollY > 2300 ){
            window.scrollTo({
                top:fourth - 1400,
                behavior: 'smooth'
            });
        }
    }

    // for 120%

    // alert(window.scrollY);
    if(window.innerWidth <= 1630 && window.innerWidth > 1430){

        if(window.scrollY <= 800){
    
            window.scrollTo({
                top:second - 700,
                behavior: 'smooth'
            });
        }
        
        if(window.scrollY > 800 && window.scrollY <= 1879){
            window.scrollTo({
                top:third - 1100,
                behavior: 'smooth'
            });
        }

        if(window.scrollY > 1879 ){
            window.scrollTo({
                top:fourth - 1200,
                behavior: 'smooth'
            });
        }
        if(window.scrollY > 3400 ){
            alert(window.scrollY);
            window.scrollTo({
                top:4600,
                behavior: 'smooth'
            });
        }


    }

    if(window.innerWidth <= 1430){

        if(window.scrollY <= 667){
    
            window.scrollTo({
                top:second - 600,
                behavior: 'smooth'
            });
        }
        
        if(window.scrollY > 667 && window.scrollY <= 1536){
            window.scrollTo({
                top:third - 1000,
                behavior: 'smooth'
            });
        }

        if(window.scrollY > 1536 ){
            window.scrollTo({
                top:fourth - 950,
                behavior: 'smooth'
            });
        }
        if(window.scrollY > 2800 ){
            alert(window.scrollY);
            window.scrollTo({
                top:4600,
                behavior: 'smooth'
            });
        }


    }




}






// -------------------


