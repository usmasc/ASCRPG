var player = {
    "name": "Ness",
    "face": 3,
    "skin": [217, 183, 31],
    "hair": 0,
    "hairColor": [0, 0, 0],
    "tshirt": 'e',
    "tColor": [255, 0, 0],
    x: 300,
    y: 200
 };

var command = 'Enter X';
 var thingToBeEntered = 'ThingToBeEntered';
var enteredText = '';
 var text = document.getElementById('textArea');
 var playArea = document.getElementById('playArea'); 
 var sumbit = document.getElementById('submitButtonArea');
var textInput = document.getElementById('textInput');

function pickFace() {
  text.innerHTML = 'Pick a face shape:';
  var thingie = '<button onclick="setFaceShape(0)">()</button> '
  thingie += '<button onclick="setFaceShape(1)">( )</button>';
  thingie += '<button onclick="setFaceShape(2)">(&nbsp;&nbsp;)</button>';
    thingie += '<button onclick="setFaceShape(3)">(&nbsp;&nbsp;&nbsp;)</button>';
  sumbit.innerHTML = thingie;
}

function submitText() {
  switch(thingToBeEntered) {
    case 'name':
      player.name = enteredText;
      document.getElementById('name').innerHTML = player.name;
      pickFace();
      break;
  }
}



function deleteText() {
  if (enteredText.length > 0) {
    enteredText = enteredText.substr(0,enteredText.length-1);
    text.innerHTML = command + enteredText;
    if (thingToBeEntered == 'name'){
      document.getElementById('name').innerHTML = enteredText;
    }
  }
}

function UConScreenKeyboard() {
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var thingie = '';
  for (var i = 0; i < abc.length; i++) {
    abc[i] = abc[i].toUpperCase();
    thingie += '<button onclick="enterLetter(\''+ abc[i] + '\')">' + abc[i] + '</button>' ;
  }
  thingie += '<button onclick="enterLetter(\' \')">_</button>';
  thingie += '<button onclick="LConScreenKeyboard()">A^a</button>';
  thingie += '<button onclick="deleteText()">Del</button>';
  thingie += '<button onclick="submitText()">Done</button>';
  sumbit.innerHTML = thingie;
}

function LConScreenKeyboard() {
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var thingie = '';
  for (var i = 0; i < abc.length; i++) {
    thingie += '<button onclick="enterLetter(\''+ abc[i] + '\')">' + abc[i] + '</button>' ;
  }
  thingie += '<button onclick="enterLetter(\' \')">_</button>';
  thingie += '<button onclick="UConScreenKeyboard()">a^A</button>';
  thingie += '<button onclick="deleteText()">Del</button>';
  thingie += '<button onclick="submitText()">Done</button>';
  sumbit.innerHTML = thingie;
}

function enterLetter(l) {
  enteredText += l;
  text.innerHTML = command + enteredText;
  if (thingToBeEntered == 'name'){
    document.getElementById('name').innerHTML = enteredText;
  }
  if (enteredText.length = 1) {
    LConScreenKeyboard();
  }
}

function enterName() {
  command = 'Enter name: ';
  text.innerHTML = command;
  thingToBeEntered = 'name';
  enteredText = '';
  text.innerHTML = command + enteredText;
  document.getElementById('name').innerHTML = enteredText;
  UConScreenKeyboard();
}



function pickSkin() {
     text.innerHTML = 'Pick skin tone:';
     var thingie = '<button class="skin0" onclick="setSkinTone(0)">_</button> ';
     thingie += '<button class="skin1" onclick="setSkinTone(1)">_</button> ';
     thingie += '<button class="skin2" onclick="setSkinTone(2)">_</button> ';
     thingie += '<button class="skin3" onclick="setSkinTone(3)">_</button> ';
     thingie += '<button class="skin4" onclick="setSkinTone(4)">_</button> ';
     sumbit.innerHTML = thingie;
}


function pickShirtColor() {
     text.innerHTML = 'Pick shirt color:';
     var thingie = '<button class="shirt0" onclick="setShirtColor(0)">_</button> ';
     thingie += '<button class="shirt1" onclick="setShirtColor(1)">_</button> ';
     thingie += '<button class="shirt2" onclick="setShirtColor(2)">_</button> ';
     sumbit.innerHTML = thingie;
}

function setShirtColor(o) {
  switch(o) {
  case 0:
    player.tColor = [255,0,0];
    break;
  case 1:
    player.tColor = [0,100,0];
    break;
  case 2:
    player.tColor = [0,0,255];
    break;
  }
}


function pickShirt() {
     text.innerHTML = 'Pick tshirt logo:';
     var thingie = '<button onclick="setTshirt(2.7)">e</button> ';
     thingie += '<button onclick="setTshirt(3.14)">π</button> ';
     thingie += '<button onclick="setTshirt(6.2)">τ</button> ';
     thingie += '<button onclick="setTshirt(0)">ϕ</button> ';
     thingie += '<button onclick="setTshirt(1)">μ</button> ';
     thingie += '<button onclick="setTshirt(2)">λ</button> ';    
     sumbit.innerHTML = thingie;
}

function setTshirt(o) {
  switch(o) {
   case 3.14:
     player.tshirt = 'π';
     break;
   case 2.7:
     player.tshirt = 'e';
     break;
   case 6.2:
     player.tshirt = 'τ';
     break;
   case 0:
     player.tshirt = 'ϕ';
     break;
   case 1:
     player.tshirt = 'μ';
     break;
   case 1:
     player.tshirt = 'λ';
     break;
  }
  pickShirtColor();
}

function setFaceShape(o) {
  player.face = o;
  pickSkin();
}

function setSkinTone(o) {
  switch(o) {
  case 0:
    player.skin = [141,85,36];
    break;
  case 1:
    player.skin = [198,134,66];
    break;
  case 2:
    player.skin = [224,172,105];
    break;
  case 3:
    player.skin = [241,194,125];
    break;
  case 4:
    player.skin = [255,219,172];
    break;
  }
  pickShirt();
}



enterName();
