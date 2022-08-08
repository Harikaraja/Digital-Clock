setInterval(showTime,1000);
function showTime(){
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let AM_PM= "AM" ;
    if(hours>12){
        AM_PM = "PM";
    }
    if(hours==0){
        AM_PM="AM";
    }
    if(hours==12){
        AM_PM="PM";
    }
    let currentTime = hours + ":" + minutes + ":" + seconds ;
    let stm = document.getElementById('clock');
    stm.innerHTML = currentTime;
}