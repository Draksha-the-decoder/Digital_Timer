let interval;let hours=0;let seconds=0;let minutes=0; 
function stopwatch()
{
    if(!interval)
    {interval= setInterval(counter,1000);}
}
function counter()
{
    seconds++;
    if(seconds>=60)
    {
        seconds = 0;
        minutes++;
        if(minutes>=60)
        {
           minutes=0;
           hours++;
       }
    }       
    hours<10?"0"+hours:hours;
    let hour=hours<10?"0"+hours:hours;
    let minute=minutes<10?"0"+minutes:minutes;
    let second=seconds<10?"0"+seconds:seconds;
    document.getElementById("timer").innerHTML= hour+" : "+minute+" : "+second;
    
}
starttimer.addEventListener('click', function()
{ 
    if(interval == null)
    {   
       clearInterval(interval); 
       interval=undefined;
       hours=0;minutes=0;seconds=0;
       stopwatch();
    }
    else
    {
       clearInterval(interval); 
       interval=undefined;
       stopwatch();
    }           
});
stoptimer.addEventListener('click', function()
{ 
    clearInterval(interval); 
});
resettimer.addEventListener('click', function()
{ 
    clearInterval(interval);
    interval=null;  
    document.getElementById("timer").innerHTML= "00 : 00 : 00";   
});