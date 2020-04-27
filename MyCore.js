

var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;
var year =0; 
var month =0;
var date =0;
var hours =0; 
var minutes =0;
var seconds =0;
var miliseconds =0;
var time=0;
var myTime = new Date();

document.onkeyup = function(e) {
    
    if ( e.ctrlKey && e.altKey && e.which == 73) {
        
        alert("INICIALIZANDO SCRIPT");
        
        console.log(" INICIANDO CRONOMETRO");

        StartChronometer();

    } else if (e.ctrlKey && e.altKey && e.which == 65) {
    
        alert("MARCANDO TIEMPO");


    } else if (e.ctrlKey && e.altKey && e.which == 83) {
    
       
        alert(" PARAR CRONOMETRO ");
    

    } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 81) {
        
        alert("PAUSAR CRONOMETRO");

    }

  };



  function StartChronometer(){
  

    
   year = myTime.getFullYear(); 	
   month = myTime.getMonth();
   date = myTime.getDate();
   hours = myTime.getHours();
   minutes = myTime.getMinutes();
   seconds = myTime.getSeconds();
   miliseconds = myTime.getMilliseconds();
   time = myTime.getTime();

   console.log(year);
   console.log(month);
   console.log(date);
   console.log(hours);
   console.log(minutes);
   console.log(seconds);
   console.log(miliseconds);
   console.log(time);
 
};








  function StartCronometer() {
    
       
      
  };

