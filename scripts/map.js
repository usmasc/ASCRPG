var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

function print(str) {
  text.innerHTML = str;
}

// AdT = Adam Terrell*
var AdT = {
  'name': 'Adam Terrell',
  'heshe': "He",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is a writing, speaking, and Geography tutor in the ASC.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this. name  + ": Hi, I am " + this.name + '. ';
    thingie += "I am  one of the math tutors in the ASC. "; 
  }
};

// AMc = Adrienne McPhaul #
var AMc = {
  'name': 'Adrienne McPhaul',
  'she': "She",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': false,
  'canCheck': false
};

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

// brick
var brk = {
  "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// barstool
var brs = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// barstool table
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

// black shelf Right
var bSR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// bsv = vertical black shelf*
var bsv = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// cct = computer card catologue #
var cct = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var chR = {
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

// coB = column bottom #
var coB = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// coT = column top #
var coT = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// CpL = computer Lab #
var CpL = {
  canPass: false,
  draw: 'brick',
  canCheck: true,
  check() {
    var thingie = "This is the future site of a computer lab.";
    text.innerHTML = thingie;
  }
};

var cpr = {
  // cpr = copier
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// crB = carpet Boundary
var crB = {
   "canPass": false,
  "draw": 'rug',
  'canCheck': false
};

// carpet
var crp = {
  "canPass": true,
  "draw": 'rug',
  'canCheck': false,
  'canTalk': false,
};

var ctC = {
  // ctC = circle table on carpet
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

var cUL = {
  // cUL = circle table upper left
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var cUR = {
  // cUR = circle table upper right
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

var dcT = {
  // dcT = top desk with computer
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

var dLc = {
  // dLc = hor. desk left end with computer
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

var dkL = {
// dkL = hor. desk left end 
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// dkM = middle desk verticle #
var dkM = {
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

var dkT = {
  // dkT = top desk
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

// Elizabeth Snyder
var ESn = {
  'name': 'Elizabeth Snyder',
  'heshe': "She",
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
    print(thingie);
  }
};

var fcs = {
// fcs = file cabinet short
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// fdL = front desk left*
var fdL = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// fdR = front desk right*
var fdR = {
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

// grass
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

// gsB = bottom gray shelf *
var gsB = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// gsL = left gray shelf *
var gsL = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// gsR = right gray shelf *
var gsR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// gsT = top gray shelf *
var gsT = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// hLL = hexagon table Lower Left*
var hLL = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// hLR = hexagon table Lower Right*
var hLR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// hML = hexagon table Middle Left*
var hML = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// hMR = hexagon table Middle Right*
var hMR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// hUL = hexagon table Upper Left*
var hUL = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// hUR = hexagon table Upper Right*
var hUR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var hwb = {
// hwb = horizontal white board
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// JBo = Jensa Besse office*
var JBo = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': true,
  check() {
    var thingie = "This is Jensa Besse's office.";
    text.innerHTML = thingie;
  }
};

// Lps = Library Public Serives #
var Lps = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': true,
   check() {
    var thingie = "This is the Library Public Services Dept. We check out books. Find books, and other fun stuff.";
    text.innerHTML = thingie;
  }
};

// Lrs = Library Research Services Unit
var Lrs = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': true,
   check() {
    var thingie = "This is the Research Services Unit. We help you perform research and search databases.";
    text.innerHTML = thingie;
  }
};

var ltc = {
// ltc = laptop cart
   "canPass": false,
  "draw": 'brick',
  'canCheck': true,
   check() {
    var thingie = "This is the laptop cart. Speak to an ASC tutor to check out a laptop. Please have your student ID ready.";
    text.innerHTML = thingie;
  }
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

// otR = ottoman on rug
var otR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// otT = ottoman on tile
var otT = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// PDn = Peter Dean #
var PDn = {
  'name': 'Peter Dean',
  'heOrShe': "He",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = '';
    thingie += 'https://www.usm.edu/gulfcoast/student-government-association</a>.';
    text.innerHTML = thingie;
  }
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

// rug
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

// sch = schedule
var sch = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': true,
  check() {
    var thingie = 'View the schedule at ';
    thingie += '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>'; 
    print(thingie);
  }
};

// sfB = black sofa
var sfB = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// SfG = Scott Geyer
var SfG = {
  'name': 'Scott',
  'she': "He",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is a math and stats tutor.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this. name  + ": Hi, I am " + this.name + ', if you need help with math or stats ';
    thingie += 'make an <a href="http://usm.mywconline.com" target="_blank">appointment</a> with me at ';
    thingie += '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>'; 
  }
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
    print(thingie);
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
    print(thingie);
  }
};

// shl = shelf
var shl = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// siL = library sign #
var siL = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': true,
  check() {
    var thingie = "Library stuff";
    print(thingie);
  }
};

// swamp
var smp = {
  'canPass':true,
  'draw':'swamp',
  'canCheck': false,
  'canTalk': false
};

var shl = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
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

// str = stair #
var str = {
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

// tcM = techology cabinet Middle
var tcM = {
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

// tcT = technology cabinent Top
var tcT = {
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

// til = tile
var til = {
  'canPass':true,
  'draw':'floor',
   'canTalk': false,
  'canCheck': false
};

// tiB = tile boundary
var tiB = {
  'canPass':false,
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

// TSl = Teneala Spencer
var TSl = {
  'name': 'Victoria',
  'she': "She",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is a math, Spanish, and Computer Science tutor.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this. name  + ": Hi, I am " + this.name + ', if you need help with math, Spanish, or Computer Science ';
    thingie += 'make an <a href="http://usm.mywconline.com" target="_blank">appointment</a> with me at ';
    thingie += '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>'; 
  }
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

// wbL = white board Left*
var wbL = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// wbM = white board Middle*
var wbM = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// wbR = white board Right*
var wbR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// wnB = bottoom window
var wnB = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// wnT = top window
var wnT = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// wsh = white shelf*
var wsh = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// wtL = white board table left*
var wtL = {
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

// wtR = white board table Right*
var wtR = {
   "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

// VSn = Victoria Snyder*
var ZSt = {
  'name': 'Victoria',
  'she': "She",
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "This is " + this.name + ". " + this.she + " is our front desk person.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this. name  + ": Hi, I am " + this.name + ', I can help you make an ';
    thingie += '<a href="http://usm.mywconline.com" target="_blank">appointment</a> or help you find ';
    thingie += "the resource that you need."; 
  }
};

// ZSt = Zachary Stewart
var ZSt = {
  'name': 'Zachary Stewart',
  'she': "He",
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
// AdT = Adam Terrell*
// AMc = Adrienne McPhaul #
// bbb = bullitin board
// bbB = bullitin board Bottom
// bbL = bullitin board Left
// bbR = bullitin board Right
// bbT = bullitin board Top
// brs = barstool
// brt = barstool table
// bsL = black shelf left
// bsR = black shelf right
// bsv = vertical black shelf*
// cct = computer card catologue #
// chR = round chair
// cLL = circle table lower left
// cLR = circle table lower Right
// coT = column top #
// coB = column bottom #
// CpL = computer Lab #
// cpr = copier
// crB = carpet Boundary #
// crp = carpet
// ctC = circle table on carpet
// ctR = circle table on rug
// cUL = circle table upper left
// cUR = circle table upper right
// dcR = desk corner lower Right
// dcT = top desk with computer
// dhL = desk horizontal Left end
// dkB = bottom desk
// dkH = middle desk Horizontal
// dkL = hor. desk left end 
// dkM = middle desk verticle #
// dkR = hor. desk right end
// dkT = top desk
// dLc = hor. desk left end with computer
// drB = bottom door
// dRc = hor. desk right end with computer
// drT = top door
// fdL = front desk left*
// fdR = front desk right*
// fcs = file cabinet short
// gsB = bottom gray shelf *
// gsL = left gray shelf *
// gsR = right gray shelf *
// gsT = top gray shelf *
// hLL = hexagon table Lower Left*
// hLR = hexagon table Lower Right*
// hML = hexagon table Middle Left*
// hMR = hexagon table Middle Right*
// hUL = hexagon table Upper Left*
// hUR = hexagon table Upper Right*
// hwb = horizontal white board
// JBo = Jensa Besse office*
// ltc = laptop cart
// Lps = Library Public Serives #
// Lrs = Library Research Services Unit #
// MLb = Media Lab
// otR = ottoman on rug
// otT = ottoman on tile
// PDn = Peter Dean #
// plt = plant
// sch = schedule
// sfB = black sofa
// SfG = Scott Geyer
// SGp = SGA President
// SGs = SGA Secretary
// shl = shelf
// sid = sign in desk
// siL = library sign #
// SmS = Seymour Shelf
// StL = Staff Lounge
// str = stair #
// tcB = techology cabinet Bottom
// tcD = Think Center chair facing down
// tcL = Think Center chair facing left
// tcM = techology cabinet Middle
// tcR = Think Center chair facing Right
// tcT = technology cabinent Top
// tcU = Think Center chair facing UP
// til = tile
// tiB = tile boundary
// trs = trash
// TSl = Teneala Spencer
// vfb = vertical felt board
// vwb = vertical white board
// wal = wall
// wbL = white board Left*
// wbM = white board Middle*
// wbR = white board Right*
// wnB = bottoom window
// wnT = top window
// wsh = white shelf*
// wtL = white board table left*
// wtR = white board table Right*
// VSn = Victoria Snyder*
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
'16':[wal,til,til,til,til,til,cUL,cUR,til,til,til,ltc,wal,crp,crp,crp,dLc,dRc,dkL,dkR,til,til,SfG,ctC,gwv],
'17':[bbb,til,til,til,til,til,til,til,til,til,til,til,til,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,tcL,gwv],
'18':[wal,til,til,til,til,til,til,til,til,til,til,til,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
'19':[wnT,til,til,til,til,cUL,cUR,til,til,til,til,tcT,wal,cfT,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,wbv],
'20':[wnB,til,cUL,cUR,til,cLL,cLR,til,til,til,til,tcM,wal,cfB,crp,crp,crp,crp,ESn,crp,crp,crp,crp,brs,gwv],
'21':[wal,til,cLL,cLR,til,til,til,til,til,til,til,tcM,wal,bsv,crp,crp,crp,tcR,ctC,tcL,crp,crp,crp,bst,gwv],
'22':[wal,til,til,til,til,til,til,til,til,til,til,tcM,wal,wsh,crp,crp,crp,crp,crp,crp,crp,crp,crp,brs,gwv],
'23':[wal,til,til,til,til,til,til,til,til,til,til,tcM,wal,gsT,crp,crp,crp,crp,crp,crp,crp,crp,crp,wal,gwv],
'24':[wal,wal,til,til,til,til,til,gsL,gsR,bsL,bsR,tcM,wal,gsB,crp,crp,crp,hUL,hUR,crp,crp,crp,crp,crp,gwv],
'25':[wal,wal,wal,wbL,wbM,wbM,wbR,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,hML,hMR,crp,crp,crp,crp,crp,gwv],
'26':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,JBo,crp,crp,crp,crp,hLL,hLR,crp,crp,crp,wtL,wtR,gwv],
'27':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,hLL,hLR,crp,crp,crp,crp,crp,gwv],
'28':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
'29':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,TSl,AdT,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
'30':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wtL,wtR,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
'31':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,wtL,wtR,gwv],
'32':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,VSn,crp,crp,crp,crp,crp,crp,gwv],
'33':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,fdL,fdR,crp,crp,crp,crp,crp,gwv],
'34':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,tcL,ctC,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,tcU,gwv],
'35':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,wal,tcU,crp,crp,crp,sid,sch,crp,crp,crp,tcU,wal,gwv],
'36':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,gwh,gwh,gwh,gwh,crp,crp,gwh,gwh,gwh,gwh,gwh,gwh,gwh,gwv],
'37':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crB],
'38':[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crB],
'39':[wal,til,til,til,til,til,til,til,til,til,dkT,til,crp,crp,cUL,cUR,crp,crp,crp,cUL,cUR,crp,crp,crp,crB],
'40':[wal,til,til,til,til,til,til,til,til,til,dkM,til,crp,crp,cLL,cLR,crp,crp,crp,cLL,cLR,crp,crp,crp,crB],
'41':[wal,til,til,til,til,til,til,til,til,til,dkM,til,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crB],
'42':[wal,til,til,til,til,til,til,til,til,til,dkM,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
'43':[wal,til,til,til,til,til,til,til,til,til,dkM,til,til,til,coT,coT,til,coT,til,coT,til,coT,til,coT,tiB],
'44':[wal,til,til,til,til,til,til,til,til,til,dkM,til,til,siL,coB,coB,til,coB,til,coB,til,coB,til,coB,tiB],
'45':[wal,til,til,til,til,til,til,AMc,til,PDn,dkM,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
'46':[wal,wal,wal,bbL,bbR,wal,dkH,dkH,Lrs,dkH,Lps,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
'47':[drT,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
'48':[drB,til,til,til,til,til,til,til,til,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
'49':[wal,til,til,til,til,til,til,til,til,til,til,til,til,str,str,str,str,str,str,str,str,str,str,str,str],
'50':[drT,til,til,til,til,til,til,til,til,cct,til,til,til,str,str,str,str,str,str,str,str,str,str,str,str],
'51':[drB,til,til,til,til,til,til,til,til,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
'52':[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
'53':[drT,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
'54':[drB,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,til,til,coT,coT,til,coT,til,coT,til,coT,til,coT,tiB],
'55':[wal,wal,bbL,bbR,wal,wal,crp,crp,crp,crp,crp,CpL,til,til,coB,coB,til,coB,til,coB,til,coB,til,coB,tiB],
'56':[wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,wal,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB],
  rows:57,
  test:'test'
};
