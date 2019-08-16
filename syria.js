var factButton = $('.syria-button');
var message = $('#new-message');


var syriaFacts =
["Syria is a Middle Eastern country sharing a border with Lebanon, Israel, Jordan, Iraq and Turkey.",
"The Syrian Capital is Damascus",
"Ethnic Groups: Arab 90.3%, Kurds, Armenians and other 9.7%",
"The religious breakdown in the country: Muslim 87%, Christian 10% and Druze 3%",
"Between 1517-1918 Syria was Part of the Ottoman Empire."
];


factButton.on("click", showSFact);
function showSFact () {
  console.log("you clicked the button!");
  message.text (syriaFacts[Math.floor(Math.random()*syriaFacts.length)]);
}









var mapPage = $('#back-to-map');

mapPage.on("click", doSomething3);



function doSomething3(){
   event.preventDefault();
   location.href = "index.html";

};
