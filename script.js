let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;

document.querySelector(".timerArea").addEventListener("click", () => {
    if(!flag){
      startTimer();
      flag = true;
    }
    else{
      stopTimer();
      flag = false;
    }
  })

function startTimer() {
    if(timeBegan === null) {
        timeBegan = new Date();
    }
    if(timeStopped != null) 
    stoppedDuration += (new Date() - timeStopped);

    startInterval - setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let miliseconds = timeElapsed.getUTCMilliseconds();

    miliseconds = Math.floor(miliseconds/10);
   
    document.querySelector('.timerDisplay').innerHTML = (minutes = minutes < 10 ? '0' + minutes:minutes) + ':' + (seconds = seconds < 10 ? '0' + seconds:seconds) + ':' +(miliseconds = miliseconds < 10 ? '0' + miliseconds:miliseconds);
}

