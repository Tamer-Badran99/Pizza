/*global document*/
var myListbizza = document.getElementById('pizza'),
    
    myListwraps = document.getElementById('wraps'),
    
    myListburgers = document.getElementById('burgers'),
    
    myDivpizza = document.getElementById('p'),
    
    myDivwraps = document.getElementById('w'),
    
    myDivburgers = document.getElementById('b'),
    
    myBWBdiv = Array.from(document.querySelectorAll('.food-section1 .container > div')),
    
    myList = Array.from(document.querySelectorAll('.food-section1 ul li'));

/* **************** */

var myListdrinks = document.getElementById('drinks'),
    
    myListsmoothies = document.getElementById('smoothies'),
    
    myListdesserts = document.getElementById('desserts'),
    
    myDivdrinks = document.getElementById('d'),
    
    myDivsmoothies = document.getElementById('s'),
    
    myDivdesserts = document.getElementById('de'),
    
    myDSDdiv = Array.from(document.querySelectorAll('.food-section2 .container > div')),
    
    myList2 = Array.from(document.querySelectorAll('.food-section2 ul li'));
    

/* ********************* */

 myListbizza.onclick = function()
  {
      'use strict';
      
       for(var i=0;i<myBWBdiv.length;i++)
          {
             myBWBdiv[i].classList.add('hidden');
             myList[i].classList.remove('border-active');  
          }
       myDivpizza.classList.remove('hidden');
       myListbizza.classList.add('border-active');
  }

  myListwraps.onclick = function()
  {
      'use strict';
      
       for(var i=0;i<myBWBdiv.length;i++)
          {
             myBWBdiv[i].classList.add('hidden');
             myList[i].classList.remove('border-active');  
          }
       myDivwraps.classList.remove('hidden');
      myListwraps.classList.add('border-active');
  }
  
   myListburgers.onclick = function()
  {
      'use strict';
      
      for(var i=0;i<myBWBdiv.length;i++)
          {
             myBWBdiv[i].classList.add('hidden');
             myList[i].classList.remove('border-active');  
          }
      myDivburgers.classList.remove('hidden');
      myListburgers.classList.add('border-active');
  }

 /* ******************* */
    
  myListdrinks.onclick = function()
  {
      'use strict';
      
       for(var i=0;i<myDSDdiv.length;i++)
          {
             myDSDdiv[i].classList.add('hidden');
             myList2[i].classList.remove('border-active');  
          }
       myDivdrinks.classList.remove('hidden');
       myListdrinks.classList.add('border-active');
  }

  myListsmoothies.onclick = function()
  {
      'use strict';
      
       for(var i=0;i<myDSDdiv.length;i++)
          {
             myDSDdiv[i].classList.add('hidden');
             myList2[i].classList.remove('border-active');  
          }
       myDivsmoothies.classList.remove('hidden');
      myListsmoothies.classList.add('border-active');
  }
  
   myListdesserts.onclick = function()
  {
      'use strict';
      
      for(var i=0;i<myDSDdiv.length;i++)
          {
             myDSDdiv[i].classList.add('hidden');
             myList2[i].classList.remove('border-active');  
          }
      myDivdesserts.classList.remove('hidden');
      myListdesserts.classList.add('border-active');
  }
   
/* *********************** */

  


   
   
   
   
   
   
   
   
   
   
   
   
