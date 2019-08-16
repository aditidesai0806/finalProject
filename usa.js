var factButton = $('#random-facts')
var message = $('#new-message')

var randomFacts = ['There is no official language.',
 '100 acres of pizza are served in the United States every day!',
'Its capital was originally New York City.',
'In some states, there are more cows than people!',
'Abraham Lincoln is in the Wrestling Hall of Fame.'
];

factButton.on("click", randomize)


function randomize(){
  event.preventDefault();
  console.log("you just clicked the random button");
  var randomNumber = Math.floor(Math.random() * randomFacts.length);
  var randomButtonChosen = randomFacts[randomNumber];
  message.text(randomButtonChosen);
}
