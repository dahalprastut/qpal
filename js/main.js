

let mobileFirst, linkButtons, imageOne, imageTwo, imageThree, imageFour, problemOne, problemTwo, problemThree, jumping, magicMobile, secondMagicMobile, problem, firstDescription, secondDescription, thirdDescription, fourthDescription, fourthMobileFirst, fourthMobileSecond, fourthMobileThird, fourthMobileFourth, fourthMobileFifth, fourthDescriptionFirst, fourthDescriptionSecond, fourthDescriptionThird,fourthDescriptionFourth, fourthDescriptionFifth, activeBtn, hiddenBtn, second, third, fourth, forDefault, forNinety, forHundredFifty, forHundredTen, forHundredTwenty, initialize, scrollTop, forDefaultClick, forNinetyClick, forHundredTenClick, forHundredTwentyClick, forHundredFiftyClick;

initialize = ()=>{
    // for first section
     mobileFirst = document.querySelector('.mobile-first');
     linkButtons = document.querySelector('.main-information');





    // for second section

     imageOne = document.querySelector('#image-1');
     imageTwo = document.querySelector('#image-2');
     imageThree = document.querySelector('#image-3');
     imageFour = document.querySelector('#image-4');

     problemOne = document.querySelector('.problem-1');
     problemTwo = document.querySelector('.problem-2');
     problemThree = document.querySelector('.problem-3');


    // for third section variable


     jumping = document.querySelector('.first-image-third');
     magicMobile = document.querySelector('.second-image-third');
     secondMagicMobile = document.querySelector('.third-image-third');
     problem = document.querySelector('.fourth-image-third');


     firstDescription = document.querySelector('.first-description-third');
     secondDescription = document.querySelector('.second-description-third');
     thirdDescription = document.querySelector('.third-description-third');
     fourthDescription = document.querySelector('.fourth-description-third');


    // for fourth section variable


     fourthMobileFirst = document.querySelector('.first-image-fourth');
     fourthMobileSecond = document.querySelector('.second-image-fourth');
     fourthMobileThird = document.querySelector('.third-image-fourth');
     fourthMobileFourth = document.querySelector('.fourth-image-fourth');
     fourthMobileFifth = document.querySelector('.fifth-image-fourth');


     fourthDescriptionFirst = document.querySelector('.first-description-fourth');
     fourthDescriptionSecond = document.querySelector('.second-description-fourth');
     fourthDescriptionThird = document.querySelector('.third-description-fourth');
     fourthDescriptionFourth = document.querySelector('.fourth-description-fourth');
     fourthDescriptionFifth = document.querySelector('.fifth-description-fourth');


    // for buttons variables

     activeBtn = document.querySelector('.active-btn');
     hiddenBtn = document.querySelector('.hidden-btn');

    // for logo variable

     logo = document.querySelector('.logo');

    // for storing horizontal height of sections

     second = document.querySelector('#second').getBoundingClientRect().left;
     third = document.querySelector('#third').getBoundingClientRect().left;
     fourth = document.querySelector('#fourth').getBoundingClientRect().left;

}

initialize();


// -----


window.onload = ()=>{    // animation of first section
    onloadFunction();
}



window.addEventListener('scroll' , (event)=>{
    // default screen size
   
    forDefault();

    // for second 90%
    forNinety();

    // for 110%
    forHundredTen();
  
    // for 120%
    forHundredTwenty();

    // for 150%
    forHundredFifty();


});


// second section ends









activeBtn.onclick = function(event){
    event.preventDefault();

    forDefaultClick();


    // for 90%

    forNinetyClick();
    

    // for 110%

    forHundredTenClick();

    // for 120%

    forHundredTwentyClick();

    // for 150%

    forHundredFiftyClick();




}

// ---------- navigation btns start

// go on top 




hiddenBtn.onclick =()=> scrollTop(event);
logo.onclick =()=> scrollTop(event);

// -------------


onloadFunction = ()=>{
    window.setTimeout(()=>{

        mobileFirst.style='margin:0';
    },1000);

    window.setTimeout(()=>{
        linkButtons.style = 'opacity:1';
        
    },2000);
}

forDefault = ()=>{
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
    
    
        
        if(window.scrollY > 1430){   
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
}


forNinety = ()=>{
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
}


forHundredTen = ()=>{
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
}

forHundredTwenty = ()=>{
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
}


forHundredFifty = ()=>{
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
}



// scroll

scrollTop = (event)=>{
    event.preventDefault();
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

// click animation

forDefaultClick = ()=>{
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
}

forNinetyClick = ()=>{
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
}

forHundredTenClick = ()=>{
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
                top:fourth - 1350,
                behavior: 'smooth'
            });
        }
    }
}

forHundredTwentyClick = ()=>{
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
}

forHundredFiftyClick = ()=>{
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


