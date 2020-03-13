
let day = new Date().getDay();

switch (day) {
  case 4:
  case 5:
    console.log = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    console.log = "It is Weekend";
    break;
  default:
    console.log = "Looking forward to the Weekend";
}