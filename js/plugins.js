/*global $, jQuery, alert*/
$(document).ready(function () {

    'use strict';
    
 // Loading Elements 
    
$(window).load(function()
{
    // Loading Elements
    
    $(".loading-overlay .sk-cube-grid").fadeOut(1700,
 function()
{          
        
       $("body").css("overflow","auto");
        
   $(this).parent().fadeOut(1700,
    function()
    {             
       
           $(this).remove();
                            
         });                                                                             
    });
    
});
    
   $("html,body").animate({scrollTop:0}, 200);   
    
  });  
     

 // Caching The Scroll Top Element
  
  function animate(from, to) {
        $(from).click(function () {
        
            $('html,body').animate({
                scrollTop: $(to).offset().top
            }, 'slow');
    
        });    
    }
animate('#scroll1-top', '#up1');

/* ********** */

function animate(from, to) {
        $(from).click(function () {
        
            $('html,body').animate({
                scrollTop: $(to).offset().top
            }, 'slow');
    
        });   
    }
animate('#scroll2-top', '#up2');

/* ************* */


// Caching The Scroll Top Element

var scrollButton = $("#scroll-top");

 scrollButton.click(function()
    {                      
        $("html,body").animate({scrollTop:0}, 600);              
                      
    });

