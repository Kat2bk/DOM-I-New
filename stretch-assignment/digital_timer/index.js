function Timer() {
  var time = 0;
  var interval;
  var offset;

  function running() {
    time += delta();
    var formatTime = timeform(time);
    console.log(formatTime);
  }
  function delta() {
    var now = Date.now();
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }
  function timeform(timeSeconds) {
    var time = new Date(timeSeconds);
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }

    return seconds + " : " + milliseconds;
  }

  this.isOn = false;
  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(running, 10);
      offset = Date.now();
      //   time when the stopwatch starts
      this.isOn = true;
      // turns it on
    }
  };
  this.stop = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };
  this.reset = function() {
    time = 0;
  };
  //   init : function() {
  //       time = document.querySelectorAll(".digit")
  //   }
}

var watch = new Timer();

// function stopTimer() {
//   clearInterval(watch);
// }
