var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');


var brk = {
  "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var rug = {
  "canPass": true,
  "draw": 'rug',
  'canCheck': true,
  'canTalk': false,
   check() {
    var thingie = 'No problems found here. While you are tempted, you refuse to sweep your problems under the rug.';
    text.innerHTML = thingie;
  }
};

var grs = {
  "canPass": true,
  "draw": 'grass',
  'canCheck': true,
  'canTalk': false,
  check() {
    var thingie = 'You could have sworn that the grass looked greener from further away. However, after closer analysis';
    thingie += ' the grass in the distance looks greener now.';
    text.innerHTML = thingie;
  }
};

var smp = {
  'canPass':true,
  'draw':'swamp',
  'canCheck': false,
  'canTalk': false
};

var snd = {
  'canPass':true,
  'draw':'sand',
  'canCheck': false,
  'canTalk': false
};

var pth = {
  'canPass':true,
  'draw':'path',
  'canCheck': false,
  'canTalk': false
};

var flr = {
  'canPass':true,
  'draw':'floor',
   'canTalk': false,
  'canCheck': false
};

var wtr = {
  'canPass':false,
  'draw':'water',
  'canTalk': false,
  'canCheck': false
};

var Frd = {
  'name': 'Fred Paz',
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "Fred Paz, the village elder, looks worried.";
    text.innerHTML = thingie;
  },
  talk() {
    if (player.questLog.indexOf('Talked to Fred Paz.') === -1) {
    var thingie = "Fred Paz: Hello, " + player.name + ". It is time that I tell you a story of grave importance.";
    thingie += " Care to listen?";
    text.innerHTML = thingie;
    var buttons = '<button onclick="dialog(1)">Yes</button> <button onclick="dialog(2)">No</button>';
    sumbit.innerHTML = buttons;
    } else {
      dialog(7);
    }
  }
};

/* Map key
// bsL = black shelf left
// bsR = black shelf right
// chR = round chair
// ctR = circle table on rug
// dkB = bottom desk
// dkT = top desk
// MLb = MLb
// ottoman on rug
// SGP = SGA President
// SGS = SGA Secretary
// StL = Staff Lounge
// til = tile
// wal = wall
// wnB = bottoom window
// wnT = top window
// sfB = black sofa
*/
  

var map = {
 '0':[wal,wal,wal,wal,wal,SGP,wal,wal,MLb,wal,wal,StL,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
 '1':[wnT,til,til,SGS,dkT,til,til,til,til,til,til,til,til,til,til,chR,sfB,sfB,til,til,til,til,til,til,wal],
 '2':[wnB,til,til,til,dkB,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,wal],
 '3':[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,rug,ctR,bsL,bsR,til,til,til,til,til,wal],
  'rows':17,
  'test':'test'
};
