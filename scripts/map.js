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
// bbT = bullitin board Top
// bbB = bullitin board Bottom
// bsL = black shelf left
// bsR = black shelf right
// chR = round chair
// ctR = circle table on rug
// ctC = circle table on carpet
// cUL = circle table upper left
// cUR = circle table upper right
// cLL = circle table lower left
// cLR = circle table lower Right
// cpr = copier
// crp = carpet
// dkB = bottom desk
// dkT = top desk
// dcT = top desk with computer
// dLc = hor. desk left end with computer
// dRc = hor. desk right end with computer
// dkL = hor. desk left end 
// dkR = hor. desk right end
// dhL = desk horizontal Left end
// dcR = desk corner lower Right
// fcs = file cabinet short
// hwb = horizontal white board
// ltc = laptop cart
// MLb = MLb
// otT = ottoman on tile
// otR = ottoman on rug
// plt = plant
// SGP = SGA President
// SGS = SGA Secretary
// StL = Staff Lounge
// til = tile
// trs = trash
// tcD = Think Center chair facing down
// tcL = Think Center chair facing left
// tcR = Think Center chair facing Right
// tcU = Think Center chair facing UP
// vfb = vertical felt board
// vwb = vertical white board
// wal = wall
// wnB = bottoom window
// wnT = top window
// sfB = black sofa
// SmS = Seymour Shelf
// shl = shelf
// ZSt = Zachary Stewart
*/
  

var map = {
 '0':[wal,wal,wal,wal,wal,SGP,wal,wal,MLb,wal,wal,StL,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
 '1':[wnT,til,til,SGS,dkT,til,til,til,til,til,til,til,til,til,til,chR,sfB,sfB,til,til,til,til,til,til,wal],
 '2':[wnB,til,til,til,dkB,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,wal],
 '3':[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,rug,ctR,bsL,bsR,til,til,til,til,til,wal],
 '4':[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,rug,rug,rug,rug,til,til,til,til,til,wal],
 '5':[wal,wal,hwb,hwb,til,til,til,til,til,til,til,til,til,til,otT,rug,rug,rug,otR,til,til,til,til,til,wal],
 '6':[wal,SmS,til,til,til,til,til,cUL,cUR,til,til,til,til,til,til,rug,otR,rug,rug,til,til,til,til,til,wal],
 '7':[wal,shl,til,til,til,til,til,cLL,cLR,til,til,til,til,til,til,rug,rug,rug,rug,til,til,til,til,til,wal],
 '8':[wnT,til,til,cUL,cUR,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,wal],
 '9':[wnB,til,til,cLL,cLR,til,til,til,til,til,til,til,til,til,til,til,til,vfb,til,til,til,til,til,til,wal],
'10':[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,trs,vfb,til,til,til,til,til,til,wal],
'11':[wal,wal,plt,til,til,til,til,til,til,til,til,til,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,wal,wal],
'12':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,til,wal,wal,til,til,til,wal,til,til,til,til,til,til,til,wal],
'13':[wal,wal,fcs,til,dTc,til,til,til,til,til,til,wal,wal,til,til,til,bbT,til,til,til,til,til,til,til,wal],
'14':[wnT,vwb,til,ZSt,dvM,til,til,til,til,til,til,cpr,wal,til,til,til,bbB,til,til,til,til,til,til,til,wal],
'15':[wnT,vwb,til,dhL,dcR,til,cUL,cUR,til,til,til,til,wal,wal,til,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
'16':[wal,til,til,til,til,til,cUL,cUR,til,til,til,ltc,wal,til,til,til,dLc,dRc,dkL,dkR,til,til,tcD,ctC,gwv],
  'rows':17,
  'test':'test'
};
