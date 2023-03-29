var favnum=5;

let guess = prompt("input a number");
if(guess<favnum){
  console.log("Too low");
}else if(guess>favnum){
  console.log("Too high");
}else if(favnum==guess){
  console.log("Congratulations");
}
function seasons(){
  var birthmonth=window.prompt("What is your birth month(number form)?");

switch(parseInt(birthmonth)){
  case 1:
    case 2:
      case 12:
    console.log("you were born in winter")
    break;
    case 3:
      case 4:
        case 5:
    console.log("you were born in spring")
    break;
    case 6:
      case 7:
        case 8:
    console.log("you were born in summer")
    break;
    case 9:
      case 10:
        case 11:
    console.log("you were born in autumn")
    break;
    default:
      console.log("please enter correct birth month number")
      seasons();
      break;
}
}
seasons();

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";


switch(typeId){
  case "01":
    type="tank top";
    break;
  case "02":
    type="T-shirt";
    break;
  case "03":
    type="Long Sleeve";
    break;
  case "04":
    type="sweat shirt";
    break;
  default:
    type = "Other";
    break;
}

switch(colorId) {
  case "bla":
  color = "Black";
  break;
  case "BL": 
  color = "Blue";
  case "RD": 
  color = "Red";
  break;
  case "PU": 
  color = "Purple";
  break;
  default:
  color = "White";
  break;
};
switch (sizeId == "S") {
  case (sizeId == "S"):
  size = "Small";
  break;
  case (sizeId == "M"):
  size = "Medium";
  break;
  case (sizeId == "L"):
  size = "Large";
  break;
  case (sizeId == "XL"):
  size = "Extra Large";
  break;
  default:
  size = "One Size Fits All";
  break;
};

console.log(`Product: ${size} ${color} ${type}`);