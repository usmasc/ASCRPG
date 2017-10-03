// This script contains the map objects 

// variables

var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

// functions

function print(str) {
  text.innerHTML = str;
}

function listSubjects(tutor) {
  var thingie = '';
  for (i = 0; i < tutor.subjects.length; i++) {
    if (i == tutor.subjects.length-1){
      thingie += 'and';
    }
    thingie += tutor.subjects[i];
    if (i < tutor.subjects.length-1) {
      thingie += ',';
    }
    thingie += ' ';
  }
  return thingie;
}

function tutorCheck(tutor) {
    var thingie = "This is " +  tutor.name +  ". " + tutor.she + " is a ";
    thingie += listSubjects(tutor);
    thingie += "tutor in the ASC.";
    text.innerHTML = thingie;
}

function tutorTalk(tutor) {
    var thingie = tutor.name + ": Hi, I am " + tutor.name + ", if you need help with ";
    thingie += listSubjects(tutor);
    thingie += 'make an <a href="http://usm.mywconline.com" target="_blank">appointment</a> with me at ';
    thingie += '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>';
    print(thingie);
}
    
// Tutors

var Tr1 = {
  name: "Adam Terrell",
  subjects: ['Geography','Speaking','Writing'],
  she: "He",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    tutorCheck(this);
  },
  talk() {
    tutorCheck(this);
  }
};

// Tr2 = Teneala Spencer
var Tr2 = {
  name: "Teneala",
  subjects: ["Spanish", "Computer Science", "Math", "Cal I, II, III"],
  she: "She",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    tutorCheck(this);
  },
  talk() {
    tutorCheck(this);
  }
};

// Tr3 = Scott Geyer
var Tr3 = {
  name: "Scott",
  subjects:["Math", "Stats"],
  she: "He",
  canPass: false,
  draw: "Fred",
  canTalk: true,
  canCheck: true,
  check() {
    tutorCheck(this);
  },
  talk() {
    tutorCheck(this);
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
    tutorCheck(this);
  },
  talk() {
    tutorCheck(this);
  }
};

// trs = trash
var trs = {
  canPass: false,
  draw: "trash",
  canTalk: false,
  canCheck: false
};

// FDP = Front Desk Person = Victoria Snyder*
var FDP = {
  name: "Victoria",
  she: "She",       // he or she
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
    thingie += "I also tutor " + listSubjects(this) + '.';
    print(thingie);
  }
};

// DiO = Director's office Jensa Besse office*
var DiO = {
  name: "Jensa Besse",
  canPass: false,
  draw: "desk",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie =
      "This is the director of the ASC, " + this.name + "'s, office.";
    text.innerHTML = thingie;
  }
};


// interactive elements in ASC

// cfB = coffee table bottom
var cfB = {
  canPass: false,
  draw: "desk",
  canTalk: false,
  canCheck: false
};

// cfT = coffee table top
var cfT = {
  canPass: false,
  draw: "desk",
  canTalk: false,
  canCheck: false
};

var cpr = {
  // cpr = copier
  canPass: false,
  draw: "whiteBoardTable",
  canTalk: false,
  canCheck: false
};

// fdL = front desk left*
var fdL = {
  canPass: false,
  draw: "desk",
  canTalk: true,
  canCheck: true,
  check() {
    FDP.check();
  },
  talk() {
    FDP.talk();
  }
};

// fdR = front desk right*
var fdR = {
  canPass: false,
  draw: "desk",
  canTalk: true,
  canCheck: true,
  check() {
    FDP.check();
  },
  talk() {
    FDP.talk();
  }
};

var ltc = {
  // ltc = laptop cart
  canPass: false,
  draw: "whiteBoardTable",
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
  draw: "desk",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie =
      "This is the media lab. You can practice presentations here or use the computer for video editting.";
    text.innerHTML = thingie;
  }
};

// sch = schedule
var sch = {
  canPass: false,
  draw: "desk",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie = "View the schedule at ";
    thingie +=
      '<a href="http://usm.mywconline.com" target="_blank">usm.mywconline.com</a>';
    print(thingie);
  }
};

// sign in desk
var sid = {
  canPass: false,
  draw: "desk",
  canTalk: true,
  canCheck: true,
  talk() {
    print(FDP.name + "Welcome to the Academic Success Center. Please sign in.");
},
  check() {
    var thingie = "You sign in on this computer. ";
    thingie += "This helps the ASC track how the center is used and ensures that this resource ";
    thingie += "will be available in the future.";
    print(thingie);
  }
};

// tcB = techology cabinet Bottom
var tcB = {
  canPass: false,
  draw: "desk",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie = "Speak with a tutor to borrow "; 
    thingie += "a calculator, a camera, a laptop, ";
    thingie += "and other technology that we store here.";
    print(thingie);
  },
};

// tcM = techology cabinet Middle
var tcM = {
  canPass: false,
  draw: "desk",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie = "Speak with a tutor to borrow "; 
    thingie += "a calculator, a camera, a laptop, ";
    thingie += "and other technology that we store here.";
    print(thingie);
};

// tcT = technology cabinent Top
var tcT = {
  canPass: false,
  draw: "desk",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie = "Speak with a tutor to borrow "; 
    thingie += "a calculator, a camera, a laptop, ";
    thingie += "and other technology that we store here.";
    print(thingie);
};

// SGA

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


// Library

// CpL = computer Lab #
var CpL = {
  canPass: false,
  draw: "desk",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie = "This is the future site of a computer lab.";
    text.innerHTML = thingie;
  }
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
  draw: "desk",
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
  draw: "desk",
  canCheck: true,
  canTalk: true,
  check() {
    var thingie =
      "This is the Research Services Unit. We help you perform research and search databases.";
    text.innerHTML = thingie;
  },
    talk() {
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

// siL = library sign #
var siL = {
  canPass: false,
  draw: "desk",
  canCheck: true,
  canTalk: false,
  check() {
    var thingie = "Library stuff";
    print(thingie);
  }
};

// StL = Staff Lounge
var StL = {
  canPass: false,
  draw: "desk",
  canTalk: false,
  canCheck: true,
  check() {
    var thingie = "Staff only.";
    text.innerHTML = thingie;
  }
};

