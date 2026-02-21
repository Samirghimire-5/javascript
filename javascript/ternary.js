let age = 20;
let isMinor = age >= 18 ? "eligible" : "not";

console.log(isMinor);

if (age >= 18) console.log("Eligible");
else console.log("not");

// ------------------------------------------

const time = "03:34";
const greetings =
  time >= "00:00" && time < "12:00"
    ? "Good Morning"
    : time >= "12:00" && time < "18:00"
      ? "Good Afternoon"
      : time >= "18:00" && time < "22:00"
        ? "Good Evening"
        : time >= "22:00" && time < "00:00"
          ? "Good Night"
          : "sut mula";

console.log({ greetings });
