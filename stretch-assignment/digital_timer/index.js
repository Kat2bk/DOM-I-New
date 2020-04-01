function Timer() {
    var time = 0;
  this.isOn = false;
  this.start = function() {
    console.log("timer is starting");
  };
  this.stop;
  this.reset;
  init : function () {
      time = document.querySelectorAll(".digit")
  }
}

var watch = new Timer();

function stopTimer() {
  clearInterval(watch);
}
