const countdown = () => {
  // Target Date & Time
  const countDate = new Date("Jan 01, 2022 00:00:00").getTime();
  // Current Date & Time
  const now = new Date().getTime();
  // Difference
  const gap = countDate - now;

  //   Define Date & Time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //   Calculate Gap Date & Time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  console.log(textSecond);

  //   Inject Date & Time to fields
  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;

  // Grammatical Correction
  if (textDay <= 1) {
    document.querySelector(".day-title").innerHTML = "Day";
  } else {
    document.querySelector(".day-title").innerHTML = "Days";
  }

  if (textHour <= 1) {
    document.querySelector(".hour-title").innerHTML = "Hour";
  } else {
    document.querySelector(".hour-title").innerHTML = "Hours";
  }

  if (textMinute <= 1) {
    document.querySelector(".minute-title").innerHTML = "Minute";
  } else {
    document.querySelector(".minute-title").innerHTML = "Minutes";
  }

  if (textSecond <= 1) {
    document.querySelector(".second-title").innerHTML = "Second";
  } else {
    document.querySelector(".second-title").innerHTML = "Seconds";
  }
};

// Repeat every second
setInterval(countdown, 1000);
