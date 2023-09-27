const placeholder = document.querySelector('.placeholder');
const input = document.querySelector('.input');
// const counterLimit = document.querySelector('.counter-limit');
const tweetBtn = document.querySelector('.tweet-btn');
let inputText = document.querySelector('.input-text');
// const incTimeElement = document.getElementById('inc-time');

// let tweets = [];
// let limit = 200;
// let previousInnerSlide = null;
let dateOne;

input.addEventListener('click', function () {
  const inputLength = input.textContent.length;
  if (inputLength > 0) {
    placeholder.style.display = 'none';
  }
});

const slide = document.createElement('div');
slide.className = 'slide';
document.body.appendChild(slide);

tweetBtn.addEventListener('click', function () {
  dateOne = new Date().getTime();
  console.log("dateOne:" + dateOne);
  let grabbedValue = inputText.value;
  let currentTime = new Date().toLocaleTimeString(); // Get current time
  let tweetText =
    '<div class="meta-desc"> </div> Abhinav Pal @palabhichd -`<div class="inc-time"> ' + currentTime
   +
    "</div> <div class='meta-text'>" +
    grabbedValue +
    "</div>";

  console.log(tweetText);

  const innerSlide = document.createElement('div');
  innerSlide.className = 'inner-slide';
  slide.appendChild(innerSlide);
  innerSlide.innerHTML = tweetText;

  const remainingTime = document.createElement('div');
  remainingTime.className = 'remaining-time';
  innerSlide.appendChild(remainingTime);

  const remainingTimeIteration = setInterval(() => {
    remainingTime.innerHTML = getRemainingTime(dateOne);
  }, 1000);

  // const tweetDisplayDuration = 5000; // Adjust this value to set the duration for which the tweet time is displayed
  // setTimeout(() => {
  //   clearInterval(remainingTimeIteration);
  //   remainingTime.innerHTML = '';
  // }, tweetDisplayDuration);

  // Reset input field after tweet
  inputText.value = '';
});

function getRemainingTime(startTime) {
  const presentTime = new Date().getTime();
  const t = presentTime - startTime;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  let displayTime = '';

  if (days > 0) {
    displayTime += days + ' days ';
  }
  if (hours > 0) {
    displayTime += hours + ' hours ';
  }
  if (minutes > 0) {
    displayTime += minutes + ' minutes ';
  }
  if (seconds > 0) {
    displayTime += seconds + ' seconds ';
  }

  return displayTime;
}
