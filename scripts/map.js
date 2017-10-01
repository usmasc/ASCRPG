var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

function print(str) {
  text.innerHTML = str;
}

// bbb = bullitin board
var bbb = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var bbT = {
  // bbT = bullitin board Top
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var bbB = {
  // bbB = bullitin board Bottom
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var bbL = {
  // bbL = bullitin board left
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var bbR = {
  // bbR = bullitin board right
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// brick
var brk = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// barstool
var brs = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// barstool table
var bst = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var bsL = {
  // bsL = black shelf left
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// black shelf Right
var bsR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};



// bsv = vertical black shelf*
var bsv = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};



// cct = computer card catologue #
var cct = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// cfB = coffee table bottom
var cfB = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// cfT = coffee table top
var cfT = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// chair on rug
var chR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// cLL = circle table lower left
var cLL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// circle table lower right
var cLR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// coB = column bottom #
var coB = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// coT = column top #
var coT = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// CpL = computer Lab #
var CpL = {
  canPass: false,
  draw: "brick",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie = "This is the future site of a computer lab.";
    text.innerHTML = thingie;
  }
};

var cpr = {
  // cpr = copier
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// crB = carpet Boundary
var crB = {
  canPass: false,
  draw: "rug",
  canTalk: false,
  canCheck: false
};

// carpet
var crp = {
  canPass: true,
  draw: "rug",
  canCheck: false,
  canTalk: false
};

var ctC = {
  // ctC = circle table on carpet
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var ctR = {
  // ctR = circle table on rug
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var cUL = {
  // cUL = circle table upper left
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var cUR = {
  // cUR = circle table upper right
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dcR = {
  // dcR = desk corner lower Right
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dTc = {
  // dTc = top desk with computer
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dhL = {
  // dhL = desk horizontal Left end
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// DiO = Director's office Jensa Besse office*
var DiO = {
  name: "Jensa Besse",
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie =
      "This is the director of the ASC, " + this.name + "'s, office.";
    text.innerHTML = thingie;
  }
};

var dkB = {
  // dkB = bottom desk
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// dkH = middle desk Horizontal
var dkH = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dkL = {
  // dkL = hor. desk left end
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// dkM = middle desk verticle #
var dkM = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dkR = {
  // dkR = hor. desk right end
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dkT = {
  // dkT = top desk
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// drB = bottom door
var drB = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dRc = {
  // dRc = hor. desk right end with computer
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// drT = top door
var drT = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var dLc = {
  // dLc = hor. desk left end with computer
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var fcs = {
  // fcs = file cabinet short
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// fdL = front desk left*
var fdL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// FDP = Front Desk Person = Victoria Snyder*
var FDP = {
  name: "Victoria",
  she: "She",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " + this.name + ". " + this.she + " is our front desk person.";
    print(thingie);
  },
  talk() {
    var thingie =
      this.name + ": Hi, I am " + this.name + ", I can help you make an ";
    thingie +=
      '<a href="http://usm.mywconline.com" target="_blank">appointment</a> or help you find ';
    thingie += "the resource that you need.";
    print(thingie);
  }
};

// fdR = front desk right*
var fdR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// floor
var flr = {
  canPass: true,
  draw: "floor",
  canTalk: false,
  canCheck: false
};

// grass
var grs = {
  canPass: true,
  draw: "grass",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie =
      "You could have sworn that the grass looked greener from further away. However, after closer analysis";
    thingie += " the grass in the distance looks greener now.";
    text.innerHTML = thingie;
  }
};

// gsB = bottom gray shelf *
var gsB = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// gsL = left gray shelf *
var gsL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// gsR = right gray shelf *
var gsR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// gsT = top gray shelf *
var gsT = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// gwh = glass wall horizontal
var gwh = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// gwv = glass wall vertical
var gwv = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// hLL = hexagon table Lower Left*
var hLL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// hLR = hexagon table Lower Right*
var hLR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// hML = hexagon table Middle Left*
var hML = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// hMR = hexagon table Middle Right*
var hMR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// hUL = hexagon table Upper Left*
var hUL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// hUR = hexagon table Upper Right*
var hUR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

var hwb = {
  // hwb = horizontal white board
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// LEP = Library Ed & Psych = Peter Dean #
var LEP = {
  name: "Peter Dean",
  heOrShe: "He",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie = "";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = "";
    thingie +=
      "https://www.usm.edu/gulfcoast/student-government-association</a>.";
    text.innerHTML = thingie;
  }
};

// Lps = Library Public Serives #
var Lps = {
  canPass: false,
  draw: "brick",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie =
      "This is the Library Public Services Dept. We check out books. Find books, and other fun stuff.";
    text.innerHTML = thingie;
  }
};

// Lrs = Library Research Services Unit
var Lrs = {
  canPass: false,
  draw: "brick",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie =
      "This is the Research Services Unit. We help you perform research and search databases.";
    text.innerHTML = thingie;
  }
};

// Librarian Science & Tech #
var LST = {
  name: "Adrienne McPhaul",
  she: "She",
  canPass: false,
  draw: "Fred",
  canTalk: false,
  canCheck: false
};

var ltc = {
  // ltc = laptop cart
  canPass: false,
  draw: "brick",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie =
      "This is the laptop cart. Speak to an ASC tutor to check out a laptop. Please have your student ID ready.";
    text.innerHTML = thingie;
  }
};

// MLb = Media Lab
var MLb = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie =
      "This is the media lab. You can practice presentations here or use the computer for video editting.";
    text.innerHTML = thingie;
  }
};

// otR = ottoman on rug
var otR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// otT = ottoman on tile
var otT = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// plt = plant
var plt = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// path
var pth = {
  canPass: true,
  draw: "path",
  canCheck: false,
  canTalk: false
};

// rug
var rug = {
  canPass: true,
  draw: "rug",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie =
      "No problems found here. While you are tempted, you refuse to sweep your problems under the rug.";
    text.innerHTML = thingie;
  }
};

// sch = schedule
var sch = {
  canPass: false,
  draw: "brick",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie = "View the schedule at ";
    thingie +=
      '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>';
    print(thingie);
  }
};

// sfB = black sofa
var sfB = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// Student Government President
var SGp = {
  name: "Kaitlyn Dorris",
  she: "She",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " + this.name + ". " + this.she + " is the SGA President.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this.name + ": Hi, I am " + this.name + ". ";
    thingie +=
      "I am the SGA President. I love the library. It's a great place to study. ";
    thingie += "The scenery is great too.<br>";
    thingie += "Casey Baker: It sure is.<br>";
    thingie += this.name + ": I'm talking about the artwork.<br>";
    thingie += "Casey Baker: I was too.<br>";
    thingie += this.name + ": I can't believe this is in the game.<br>";
    thingie +=
      "Casey Baker: I am too. I would have thought they would have you say something about ";
    thingie += "what the SGA is all about.<br>";
    thingie +=
      this.name +
      ": I know, right. Well you can find out more about the SGA at ";
    thingie +=
      '<a href="https://www.usm.edu/gulfcoast/student-government-association">';
    thingie +=
      "https://www.usm.edu/gulfcoast/student-government-association</a>.";
    print(thingie);
  }
};

// SGS = SGA Secretary
var SGs = {
  name: "",
  she: "She",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " + this.name + ". " + this.she + " is the SGA Secretary.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this.name + ": Hi, I am " + this.name + ". ";
    thingie += "I am the SGA Secretary. ";
    print(thingie);
  }
};

// shl = shelf
var shl = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// sign in desk
var sid = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// siL = library sign #
var siL = {
  canPass: false,
  draw: "brick",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie = "Library stuff";
    print(thingie);
  }
};

// swamp
var smp = {
  canPass: true,
  draw: "swamp",
  canCheck: false,
  canTalk: false
};

var shl = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// SmS = Seymour Shelf
var SmS = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// sand
var snd = {
  canPass: true,
  draw: "sand",
  canCheck: false,
  canTalk: false
};

// StL = Staff Lounge
var StL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie = "Staff only.";
    text.innerHTML = thingie;
  }
};

// str = stair #
var str = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// tcB = techology cabinet Bottom
var tcB = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// tcD = Think Center chair facing down
var tcD = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// tcL = Think Center chair facing left
var tcL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// tcM = techology cabinet Middle
var tcM = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// tcR = Think Center chair facing Right
var tcR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// tcT = technology cabinent Top
var tcT = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// tcU = Think Center chair facing UP
var tcU = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// TG1 = Tutor Graduate Assistant Zachary Stewart
var TG1 = {
  name: "Zachary Stewart",
  she: "He",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " +
      this.name +
      ". " +
      this.she +
      " is one of the graduate assistants in the ASC.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this.name + ": Hi, I am " + this.name + ". ";
    thingie += "I am  one of the graduate assistants in the ASC. ";
  }
};

// til = tile
var til = {
  canPass: true,
  draw: "floor",
  canTalk: false,
  canCheck: false
};

// tiB = tile boundary
var tiB = {
  canPass: false,
  draw: "floor",
  canTalk: false,
  canCheck: false
};

var Tr1 = {
  name: "Adam Terrell",
  she: "He",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " +
      this.name +
      ". " +
      this.she +
      " is a writing, speaking, and Geography tutor in the ASC.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this.name + ": Hi, I am " + this.name + ". ";
    thingie += "I am  one of the math tutors in the ASC. ";
  }
};

// Tr2 = Teneala Spencer
var Tr2 = {
  name: "Victoria",
  she: "She",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " +
      this.name +
      ". " +
      this.she +
      " is a math, Spanish, and Computer Science tutor.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie =
      this.name +
      ": Hi, I am " +
      this.name +
      ", if you need help with math, Spanish, or Computer Science ";
    thingie +=
      'make an <a href="http://usm.mywconline.com" target="_blank">appointment</a> with me at ';
    thingie +=
      '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>';
  }
};

// Tr3 = Scott Geyer
var Tr3 = {
  name: "Scott",
  she: "He",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " + this.name + ". " + this.she + " is a math and stats tutor.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie =
      this.name +
      ": Hi, I am " +
      this.name +
      ", if you need help with math or stats ";
    thingie +=
      'make an <a href="http://usm.mywconline.com" target="_blank">appointment</a> with me at ';
    thingie +=
      '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>';
  }
};

// Elizabeth Snyder
var Tr4 = {
  name: "Elizabeth Snyder",
  she: "She",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    var thingie =
      "This is " + this.name + ". " + this.she + " is a mth tutor in the ASC.";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this.name + ": Hi, I am " + this.name + ". ";
    thingie += "I am  one of the math tutors in the ASC. ";
    print(thingie);
  }
};

// trs = trash
var trs = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// vfb = vertical felt board
var vfb = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// vwb = vertical white board
var vwb = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wall
var wal = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wbL = white board Left*
var wbL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wbM = white board Middle*
var wbM = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wbR = white board Right*
var wbR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wnB = bottoom window
var wnB = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wnT = top window
var wnT = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wsh = white shelf*
var wsh = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// wtL = white board table left*
var wtL = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

// water
var wtr = {
  canPass: false,
  draw: "water",
  canTalk: false,
  canCheck: false
};

// wtR = white board table Right*
var wtR = {
  canPass: false,
  draw: "brick",
  canTalk: false,
  canCheck: false
};

/* Map key
// bbb = bullitin board
// bbB = bullitin board Bottom
// bbL = bullitin board Left
// bbR = bullitin board Right
// bbT = bullitin board Top
// brs = barstool
// bst = barstool table
// bsL = black shelf left
// bsR = black shelf right
// bsv = vertical black shelf*
// cct = computer card catologue #
// chR = round chair
// cLL = circle table lower left
// cLR = circle table lower Right
// coT = column top #
// coB = column bottom #
// cfB = coffee table bottom
// cfT = coffee table top
// CpL = computer Lab #
// cpr = copier
// crB = carpet Boundary #
// crp = carpet
// ctC = circle table on carpet
// ctR = circle table on rug
// cUL = circle table upper left
// cUR = circle table upper right
// dcR = desk corner lower Right
// dTc = top desk with computer
// dhL = desk horizontal Left end
// DiO = Director's Office = Jensa Besse office*
// dkB = bottom desk
// dkH = middle desk Horizontal
// dkL = hor. desk left end 
// dkM = middle desk verticle #
// dkR = hor. desk right end
// dkT = top desk
// dLc = hor. desk left end with computer
// drB = bottom door
// dRc = hor. desk right end with computer
// drB = bottom door
// drT = top door
// fdL = front desk left*
// fdR = front desk right*
// fcs = file cabinet short
// gsB = bottom gray shelf *
// gsL = left gray shelf *
// gsR = right gray shelf *
// gsT = top gray shelf *
// gwh = glass wall horizontal
// gwv = glass wall vertical
// hLL = hexagon table Lower Left*
// hLR = hexagon table Lower Right*
// hML = hexagon table Middle Left*
// hMR = hexagon table Middle Right*
// hUL = hexagon table Upper Left*
// hUR = hexagon table Upper Right*
// hwb = horizontal white board
// LEP = Library Ed & Psych = Peter Dean #
// Lps = Library Public Serives #
// Lrs = Library Research Services Unit #
// LST = Library Science & Tech = Adrienne McPhaul #
// ltc = laptop cart
// MLb = Media Lab
// otR = ottoman on rug
// otT = ottoman on tile
// plt = plant
// sch = schedule
// sfB = black sofa
// Tr3 = Scott Geyer
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
// Tr1 = Adam Terrell*
// Tr2 = Teneala Spencer
// trs = trash
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
// FDP = Victoria Snyder*
// TG1 = Zachary Stewart
*/


var map = {
 '0':[wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
 '1':[wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
 '2':[wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
 '3':[wtr,grs,brk,brk,brk,brk,brk,brk,grs,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,wtr],
 '4':[wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 '5':[wtr,grs,brk,flr,Tr1,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 '6':[wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 '7':[wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 '8':[wtr,grs,brk,brk,flr,brk,brk,brk,grs,grs,grs,brk,brk,brk,rug,brk,brk,grs,grs,brk,brk,brk,brk,flr,brk,grs,grs,wtr],
 '9':[wtr,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,wtr],
'10':[wtr,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,wtr],
'11':[wtr,grs,grs,grs,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,grs,grs,grs,wtr],
'12':[wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
'13':[wtr,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,wtr],
'14':[wtr,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,wtr],
'15':[wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
'16':[wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
  'rows':17,
  'test':'test'
};
