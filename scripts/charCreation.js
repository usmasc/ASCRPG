var player = {
     "face":0,
    "skin": [217, 183, 31],
    "hair": 0,
    "hairColor": [0, 0, 0],
    "tshirt": 'e',
    "tColor": [255, 0, 0]
 };
 
 var text = document.getElementById('textArea').innerHTML;
 var playArea = document.getElementById('playArea').innerHTML;

function pickFace() {
  text = 'Pick a face shape:';
  var thingie = '<button onclick="setFaceShape(0)">0</button> <button onclick="setFaceShape(1)">O</button>"';
  playArea = thingie;
}

function pickSkin() {
text = 'Pick skin tone:';
var thingie = '<button class="skin0" onclick="setSkinTone(0)">_</button> ';
thingie += '<button class="skin1" onclick="setSkinTone(1)">_</button> ';
thingie += '<button class="skin2" onclick="setSkinTone(2)">_</button> ';
thingie += '<button class="skin3" onclick="setSkinTone(3)">_</button> ';
thingie += '<button class="skin4" onclick="setSkinTone(4)">_</button> ';
playArea = thingie;
}

function setFaceShape(o) {
  player.face = o;
  pickSkin();
}

function setSkinTone(o) {
  switch(o) {
  case 0:
    player.skin = [255,220,177];
    break;
  case 1:
    player.skin = [229,194,152];
    break;
  case 2:
    player.skin = [228,185,142];
    break;
  case 3:
    player.skin = [226,185,143];
    break;
  case 4:
    player.skin = [227,161,115];
    break;
  }
}

pickFace();
