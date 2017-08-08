var command = 'Enter X';
var thingToBeEntered = 'ThingToBeEntered';
var enteredText = '';
var text = document.getElementById('textArea');
var playArea = document.getElementById('playArea'); 
var sumbit = document.getElementById('submitButtonArea');
var textInput = document.getElementById('textInput');

// onScreen Keyboard

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
    /*
    if (abc[i] == 'P') {
        thingie += '<br>';
    } */
  }
  thingie += '<button onclick="enterLetter(\' \')">_</button>';
  thingie += '<button onclick="LConScreenKeyboard()">A^a</button>';
  thingie += '<button onclick="deleteText()">Del</button>';
  thingie += '<button onclick="submitText()">OK</button>';
  sumbit.innerHTML = thingie;
}

function LConScreenKeyboard() {
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var thingie = '';
  for (var i = 0; i < abc.length; i++) {
    thingie += '<button onclick="enterLetter(\''+ abc[i] + '\')">' + abc[i] + '</button>' ;
      /*
    if (abc[i] == 'p') {
        thingie += '<br>';
    } */
  }
  thingie += '<button onclick="enterLetter(\' \')">_</button>';
  thingie += '<button onclick="UConScreenKeyboard()">a^A</button>';
  thingie += '<button onclick="deleteText()">Del</button>';
  thingie += '<button onclick="submitText()">OK</button>';
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


// map objects  
  
  var brk = {
    "canPass":false,
    "draw": 'brick');
  };
  
    var rug = {
    "canPass":true,
    "draw": 'rug');
  };
  
  var grs = {
  "canPass":true,
  "draw": 'grass'
  }
  
  var smp = {
  'canPass':true,
  'draw':'swamp'
  }
  
  var snd = {
  'canPass':true,
  'draw':'sand'
  }
  
  var pth = {
  'canPass':true,
  'draw':'path'
  }
  
  var flr = {
  'canPass':true,
  'draw':'floor'
  }
  
  var wtr = {
  'canPass':false,
  'draw':'water'
  }
