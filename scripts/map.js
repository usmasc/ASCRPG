var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');


  // bbb = bullitin board
var bbb = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var bbT = {
  // bbT = bullitin board Top
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var bbB = {
  // bbB = bullitin board Bottom
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var brk = {
  "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var brs = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var brt = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var bSL = {
// bsL = black shelf left  
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var bSR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var chR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var ctR = {
  // ctR = circle table on rug
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var ctC = {
  // ctR = circle table on carpet
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var cUL = {
  // cUL = circle table upper left
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var cUR = {
  // cUL = circle table upper left
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var cLL = {
  // cUL = circle table lower left
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var cLR = {
  // cUL = circle table lower right
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var cpr = {
  // cpr = copier
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var crp = {
  "canPass": true,
  "draw": 'rug',
  'canCheck': false,
  'canTalk': false,
};

var crB = {
  // crB = carpet Boundary
  "canPass": false,
  "draw": 'rug',
  'canCheck': false,
  'canTalk': false,
};

var dkT = {
  // dkT = top desk
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dkB = {
  // dkB = bottom desk
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dcT = {
  // dcT = top desk with computer
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dLc = {
  // dLc = hor. desk left end with computer
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dRc = {
  // dRc = hor. desk right end with computer
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dkL = {
// dkL = hor. desk left end 
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dkR = {
// dkR = hor. desk right end 
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dhL = {
// dhL = desk horizontal Left end
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var dcR = {
// dcR = desk corner lower Right
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// Elizabeth Snyder
var ESn = {
  'name': 'Elizabeth Snyder',
  'heshe': "He",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is a mth tutor in the ASC.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this. name  + ": Hi, I am " + this.name + '. ';
    thingie += "I am  one of the math tutors in the ASC. "; 
  }
};

var fcs = {
// fcs = file cabinet short
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// floor
var flr = {
  'canPass':true,
  'draw':'floor',
   'canTalk': false,
  'canCheck': false
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

var hwb = {
// hwb = horizontal white board
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var ltc = {
// ltc = laptop cart
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// MLb = Media Lab
var MLb = {
  'canPass': false,
  'draw': 'brick',
  'canTalk': false,
  'canCheck': true,
  check() {
    var thingie = "This is the media lab. You can practice presentations here or use the computer for video editting.";
    text.innerHTML = thingie;
  },
};


// otT = ottoman on tile
var otT = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// otR = ottoman on rug
var otR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// plt = plant
var plt = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// path
var pth = {
  'canPass':true,
  'draw':'path',
  'canCheck': false,
  'canTalk': false
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

// sfB = black sofa
var sfB = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// shl = shelf
var shl = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// Student Government President
var SGp = {
  'name': 'Kaitlyn Dorris',
  'heshe': "She",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is the SGA President.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this.name + ": Hi, I am " + this.name + '. ';
    thingie += "I am the SGA President. I love the library. It's a great place to study. "; 
    thingie += "The scenery is great too.<br>";
    thingie += "Casey Baker: It sure is.<br>";
    thingie += this.name + ": I'm talking about the artwork.<br>";
    thingie += "Casey Baker: I was too.<br>";
    thingie += this.name + ": I can't believe this is in the game.<br>";
    thingie += "Casey Baker: I am too. I would have thought they would have you say something about "; 
    thingie += "what the SGA is all about.<br>";
    thingie += this.name + ": I know, right. Well you can find out more about the SGA at ";
    thingie += '<a href="https://www.usm.edu/gulfcoast/student-government-association">';
    thingie += 'https://www.usm.edu/gulfcoast/student-government-association</a>.';   
  }
};

// SGS = SGA Secretary
var SGs = {
  'name': '',
  'heshe': "She",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is the SGA Secretary.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this. name  + ": Hi, I am " + this.name + '. ';
    thingie += "I am the SGA Secretary. "; 
  }
};

// swamp
var smp = {
  'canPass':true,
  'draw':'swamp',
  'canCheck': false,
  'canTalk': false
};

// SmS = Seymour Shelf
var SmS = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// sand
var snd = {
  'canPass':true,
  'draw':'sand',
  'canCheck': false,
  'canTalk': false
};

// StL = Staff Lounge
var StL = {
  'canPass': false,
  'draw': 'brick',
  'canTalk': false,
  'canCheck': true,
  check() {
    var thingie = "Staff only.";
    text.innerHTML = thingie;
  },
};

// til = tile
var til = {
  'canPass':true,
  'draw':'floor',
   'canTalk': false,
  'canCheck': false
};


// trs = trash
var trs = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// tcD = Think Center chair facing down
var tcD = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// tcL = Think Center chair facing left
var tcL = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// tcR = Think Center chair facing Right
var tcR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// tcU = Think Center chair facing UP
var tcU = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// tcT = technology cabinent Top
var tcT = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// tcM = techology cabinet Middle
var tcM = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// tcB = techology cabinet Bottom
var tcB = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// vfb = vertical felt board
var vfb = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// vwb = vertical white board
var vwb = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// wall
var wal = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// water
var wtr = {
  'canPass':false,
  'draw':'water',
  'canTalk': false,
  'canCheck': false
};

// ZSt = Zachary Stewart
var ZSt = {
  'name': 'Zachary Stewart',
  'heshe': "He",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is one of the graduate assistants in the ASC.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this. name  + ": Hi, I am " + this.name + '. ';
    thingie += "I am  one of the graduate assistants in the ASC. "; 
  }
};


/* Map key
// bbb = bullitin board
// bbT = bullitin board Top
// bbB = bullitin board Bottom
// bsL = black shelf left
// bsR = black shelf right
// brs = barstool
// brt = barstool table
// chR = round chair
// ctR = circle table on rug
// ctC = circle table on carpet
// cUL = circle table upper left
// cUR = circle table upper right
// cLL = circle table lower left
// cLR = circle table lower Right
// cpr = copier
// crp = carpet
// crB = carpet Boundary
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
// MLb = Media Lab
// otT = ottoman on tile
// otR = ottoman on rug
// plt = plant
// sfB = black sofa
// SGp = SGA President
// SGs = SGA Secretary
// shl = shelf
// SmS = Seymour Shelf
// StL = Staff Lounge
// til = tile
// trs = trash
// tcD = Think Center chair facing down
// tcL = Think Center chair facing left
// tcR = Think Center chair facing Right
// tcU = Think Center chair facing UP
// tcT = technology cabinent Top
// tcM = techology cabinet Middle
// tcB = techology cabinet Bottom
// vfb = vertical felt board
// vwb = vertical white board
// wal = wall
// wnB = bottoom window
// wnT = top window
// ZSt = Zachary Stewart
*/

var map = {
 '0':[wal,wal,wal,wal,wal,SGp,wal,wal,MLb,wal,wal,StL,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
 '1':[wnT,til,til,SGs,dkT,til,til,til,til,til,til,til,til,til,til,chR,sfB,sfB,til,til,til,til,til,til,wal],
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
'16':[wal,til,til,til,til,til,cUL,cUR,til,til,til,ltc,wal,crp,crp,crp,dLc,dRc,dkL,dkR,til,til,tcD,ctC,gwv],
'17':[bbb,til,til,til,til,til,til,til,til,til,til,til,til,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,tcL,gwv],
'18':[wal,til,til,til,til,til,til,til,til,til,til,til,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
'19':[wnT,til,til,til,til,cUL,cUR,til,til,til,til,tcT,wal,cfT,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,wbv],
'20':[wnB,til,cUL,cUR,til,cLL,cLR,til,til,til,til,tcM,wal,cfB,crp,crp,crp,crp,ESn,crp,crp,crp,crp,brs,gwv],
  'rows':21,
  'test':'test'
};
