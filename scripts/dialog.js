var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

function dialog(n) {
  var thingie = '';
  switch(n) {
    case 1:
      thingie = 'Fred Paz: ' + player.name + ', our world has been invaded by aliens. They have been here for centuries. ';
      thingie += 'They have brainwashed much of the populus to believe that they are not capable of doing mathematics. ';
      thingie += 'We have been fortunate enough to have a segment of the population that has been immune to this sinister ';
      thingie += 'plot, and we were able to carry on without too many hiccups in the past.';
      thingie += 'Unfortunately, the aliens have hacked into our cell phone and mobile devices and have been using the ';
      thingie += 'electronic signals from these devices to convince people that they do not need to know how to do math.';
      thingie += 'This has created a dire problem for our future. It will not be long before the aliens can take over.';
      break;
    case 2:
      thingie = 'Fred Paz: That is understandable my dear ' + player.name + '. Please return when you are ready.';
      text.innerHTML = thingie;
      arrows();
      break;
  }
}
