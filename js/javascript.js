/*方向键控制光标上下左右移动*/
$(document).ready(function(){
   $("input").each(function(){
       $(this).keydown(function(arrowKey){
           switch(arrowKey.which){
               case 37: 
               $(this).prev().focus();
               break;//left
               case 39: 
               $(this).next().focus();               
               break;//right
               case 38: 
               $(this).prev().prev().focus();               
               break;//up
               case 40: 
               $(this).next().next().focus();               
               break;//right
            }
        });
   })
});
