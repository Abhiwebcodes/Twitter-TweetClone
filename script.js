const placeholder = document.querySelector('.placeholder');
const input = document.querySelector('.input');
const tweetBtn = document.querySelector('.tweet-btn');
const slide = document.querySelector('.slide');

tweetBtn.addEventListener('click', function () {
  const inputText = input.value.trim();
  if (inputText !== '') {
    const currentTime = new Date().toLocaleTimeString();
    const tweetText =
      '<div class="meta-desc"> <div class="color">Abhinav Pal</div> <div class="color-1"> @palabhichd </div><div class="inc-time"> </div> <div class="actual-time"></div> ' +
      "</div> <div class='meta-text'>" +
      inputText +
      "</div>";

    const innerSlide = document.createElement('div');
    innerSlide.className = 'inner-slide';
    slide.appendChild(innerSlide);
    innerSlide.innerHTML = tweetText;

    const actualTime = innerSlide.querySelector('.actual-time');

    const dateOne = new Date().getTime();
    const tweetInterval = setInterval(function () {
      let elapsedTime = getActualTime(dateOne);
      actualTime.innerHTML = elapsedTime;
    }, 1000);

    input.value = '';
    placeholder.style.display = "block";
  }
});

input.addEventListener("click", function () {
  placeholder.style.display = "none";
});

function getActualTime(startTime) {
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
    displayTime = days + " day";
  } else if (hours > 0) {
    displayTime = hours + " hour";
  } else if (minutes > 0) {
    displayTime = minutes + " minute";
  } else {
    displayTime = seconds + " second";
  }
  return displayTime;
}