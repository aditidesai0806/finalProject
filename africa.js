var africabutton = $('#random-facts');

var message = $('#new-message');

africabutton.on("click", doSomething);

var array = ["The African region has 11% of the world’s population, but an estimated 60% of people with HIV/AIDS.","HIV/AIDS is the leading cause of death for adults in the region.", "Malaria is endemic in 42 out of the 46 countries of the African Region.", "There are nearly a million deaths due to malaria each year, the vast majority among children under five.", "Tuberculosis was declared a public health emergency in the Africacn Region in 2005."];


function doSomething() {
  console.log("you clicked it!");
  var randomNumber = Math.floor(Math.random() * (array.length));
  var randomButtonChosen = array[randomNumber]
  message.text(randomButtonChosen)
  // var message1 = array[randomArray];

  // message.text(message1);
}


var homepage = $('#back-to-map');

homepage.on("click", doSomething2);



function doSomething2(){
   event.preventDefault();
   location.href = "index.html";

};
