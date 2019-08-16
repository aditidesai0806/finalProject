var homepage = $('#back-to-map');

homepage.on("click", doSomething2);



function doSomething2(){
   event.preventDefault();
   location.href = "index.html";}






var button = $('#aus-facts');
var facts = $('#text');

var ausFacts = ["Australia's population of kangaroos is greater than its population of people!",
"The world's deadliest spiders, 'the funnel web,' are found in Australia!",
"The only 2 mammals that lay eggs, the duck-billed platypus and spiny anteaters, are both found in Australia!",
"Land-wise, Australia is 32 times greater than the UK, 2 times the size of Europe, and almost equal to the US",
"The average Australian drinks 83 liters of beer per year"
];

button.on("click", showAusFact);
function showAusFact() {
  console.log("calculating...");
  facts.text(ausFacts[Math.floor(Math.random()*ausFacts.length)]);
}
