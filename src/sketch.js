let msg;
let clouds = [], wind;
function setup() {
  createCanvas(600, 400);
  background(255);
  msg = createInput();
  msg.position(10,10);
  button = createButton('submit');
  button.position(msg.x + msg.width, 10)
  send_request(msg.value())
  button.mouseClicked(() => send_request(msg.value()));

}

function send_request(location){
    fetch("https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=" + location + "&days=6&aqi=yes&alerts=no").then(event =>{
    event.json().then((data) => getWeather(data));
  })
}



function getWeather(data){
  background(13,173,275);
  print(data);
for (let i = 0; i < clouds.length; i++) {
    clouds[i].remove();
  }
  clouds = [];
   //current Location
   textSize(20);
  textStyle(BOLD);
  text(data.location.name,260,80);
  //day-0
  let cloud = createImg(data.current.condition.icon, "Img of cloud");
  cloud.position(50,50);
  cloud.size(100,100);
  clouds.push(cloud);
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(data.current.condition.text,70,cloud.y+100);
  //day-1
  cloud = createImg(data.forecast.forecastday[1].day.condition.icon, "Img of cloud");
  cloud.position(20,230);
  cloud.size(100,100);
  clouds.push(cloud);
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(data.forecast.forecastday[1].day.maxtemp_c +"°"+"c",50,330);
  text(moment().add(1, 'days').format('dddd'), 40, 240)
  //day-2
  cloud = createImg(data.forecast.forecastday[2].day.condition.icon, "Img of cloud");
  cloud.position(130,230);
  cloud.size(100,100);
  clouds.push(cloud);
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(data.forecast.forecastday[2].day.maxtemp_c +"°"+"c",170,330);
   text(moment().add(2, 'days').format('dddd'), 150, 240)
  //day-3
  cloud = createImg(data.forecast.forecastday[3].day.condition.icon, "Img of cloud");
  cloud.position(250,230);
  cloud.size(100,100);
  clouds.push(cloud);
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(data.forecast.forecastday[3].day.maxtemp_c +"°"+"c",290,330);
  text(moment().add(3, 'days').format('dddd'), 270, 240)
  //day-4
  cloud = createImg(data.forecast.forecastday[4].day.condition.icon, "Img of cloud");
  cloud.position(360,230);
  cloud.size(100,100);
  clouds.push(cloud);
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(data.forecast.forecastday[4].day.maxtemp_c +"°"+"c",400,330);
   text(moment().add(4, 'days').format('dddd'), 380, 240)
  //day-5
  cloud = createImg(data.forecast.forecastday[5].day.condition.icon, "Img of cloud");
  cloud.position(480,230);
  cloud.size(100,100);
  clouds.push(cloud);
  fill(255);
  textSize(16);
  textStyle(BOLD);
  text(data.forecast.forecastday[5].day.maxtemp_c +"°"+"c",515,330);
   text(moment().add(5, 'days').format('dddd'), 500, 240)
 
  //Temp-C
  textSize(26)
  let main = text(data.current.temp_c+"°"+"c",width/2.2,125);
  //wind-mph
  textSize(16)
  text("Wind: "+data.current.wind_mph+ " mph",450,100);
  //precip
  text("Precip: "+data.current.precip_mm+" mm",450,125);
  //Pressure
  text("Pressure: "+data.current.pressure_mb+" mb",450,150)

 
}
