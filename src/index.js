// change require to es6 import style
import $ from 'jquery';
import './style.scss'

let num = 0;

let interval = window.setInterval(counter,1000) //I learned how to use the setInterval function from the following link: https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval

function counter(){
  num = num + 1;
  $('#main').html("You've been on this page for "+num+" seconds.");
}
