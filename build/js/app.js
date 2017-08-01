(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
  // $('#time').text(moment());

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var clockDiv = document.getElementById('clock');

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    var meridiem = "AM";
    if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
    }

    if (hours === 0) {
      hours = 12;
    }

    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }

  displayTime();
  setInterval(displayTime, 1000);
});

},{}]},{},[1]);
