const  getCurrentTime = () => {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  let timeString = hours + ":" + minutes + " " + ampm;

  return timeString;
};
export default getCurrentTime