//countdown 
var clr;
function count() {
    var startTime = document.getElementById("time").innerHTML;
    var pieces = startTime.split(":");
    var time = new Date();
    time.setHours(pieces[0]);
    time.setMinutes(pieces[1]);
    time.setSeconds(pieces[2]);
    var timedif = new Date(time.valueOf() - 1000);
    var newtime = timedif.toTimeString().split(" ")[0];
    document.getElementById("time").innerHTML = newtime;
    clr = setTimeout(count, 1000);
    
    //play sound
    if (document.getElementById("time").innerHTML === "00:00:00") {
        new Audio("https://www.dropbox.com/s/rw5fqbyui06h0mo/30161__herbertboland__belltinystrike.wav?dl=1").play();
        clearInterval(clr);
    }
    
    if ($("#time").html() === "00:00:00") {
        document.getElementById("go").disabled = "disabled";
        document.getElementById("pause").disabled = "disabled";
    }
}

//change the time
function changeTime() {
    var h = parseInt(hrs.value);
    var m = parseInt(mns.value);
    var s = parseInt(scs.value);
    
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    
    if (isNaN(h)) {
        h = "00";
    }
    if (isNaN(m)) {
        m = "00";
    }
    if (isNaN(s)) {
        s = "00";
    }
    
    if (m > 59) {
        m = 59;
    }
    if (s > 59) {
        s = 59;
    }
    
    $("#time").html(h + ":" + m + ":" + s);
}

//change time
$("#change").click(function() {
    changeTime();
    $("body").stop();
    $("body").css("background-color", "#FFC857");
    document.getElementById("pause").disabled = "disabled";
    
    if ($("#time").html() === "00:00:00") {
        document.getElementById("go").disabled = "disabled";
        document.getElementById("pause").disabled = "disabled";
    } else {
        document.getElementById("go").disabled = ""; 
        document.getElementById("pause").disabled = "";
    }
})

//start countdown
$("#go").click(function() {
  var startTime = document.getElementById("time").innerHTML;
  var pieces = startTime.split(":");
  var time = new Date();
  time.setHours(pieces[0]);
  time.setMinutes(pieces[1]);
  time.setSeconds(pieces[2]);
  var timerSec=time.getSeconds()+time.getMinutes()*60+time.getHours()*3600;
  $("body").animate({
    backgroundColor: "#D72028"
  }, timerSec*1000);
  count();
    
  document.getElementById("pause").disabled = "";
  document.getElementById("go").disabled = "disabled";
})



//reset countdown
$("#reset").click(function() {
    $("#time").html(changeTime());
    clearInterval(clr);
    $("body").stop();
    $("body").css("background-color", "#FFC857");
    document.getElementById("go").disabled = "";
})

//pause timer
$("#pause").click(function() {
   clearInterval(clr); 
   $("body").stop();
   document.getElementById("pause").disabled = "disabled";
   document.getElementById("go").disabled = "";
})
