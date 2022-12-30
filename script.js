startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//variables for time values
let seconds = 0,
  minutes = 0,
  hours = 0;

//variables for leading Zero
let leadingSeconds = "0",
  leadingMinutes = "0",
  leadingHours = "0";

//Variables for setInterval and timer status
let timerInterval = null,
    timerStatus ='stopped';



//Stop watch function
function stopwatch(){

    seconds++
    
    if(seconds / 60 ===1){
        minutes++;
        seconds = 0;

        if (minutes /60 ===1){
            hours ++;
            minutes= 0;
        }
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    } else{
        leadingSeconds = seconds;
    }
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    } else{
        leadingMinutes = minutes;
    }
    if(hours < 10){
        leadingHours = "0" + hours.toString();
    } else{
        leadingHours = hours;
    }

    let timerDisplay = document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
};

//play and pause function
startStopBtn.addEventListener('click', function(){
    
    if(timerStatus==="stopped"){
        timerInterval=window.setInterval(stopwatch, 100);
        startStopBtn.innerHTML = "<i class='fa-solid fa-pause' id='pause'></i>";
        // document.getElementById('startStopBtn').innerHTML = "<i class='fa-solid fa-pause' id='pause'></i>";
        timerStatus="started";

    } else{
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML ="<i class='fa-solid fa-play' id='play'></i>";
        // document.getElementById('startStopBtn').innerHTML ="<i class='fa-solid fa-play' id='play'></i>";
        timerStatus ='stopped'
    }
});

//reset function
resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    seconds=0,
    minutes=0,
    hours=0; 

    document.getElementById('timer').innerText ="00:00:00";
    startStopBtn.innerHTML ="<i class='fa-solid fa-play' id='play'></i>";
});
