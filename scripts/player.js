var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

var shirt = {
  'item':'shirt',
 'n':1,
 'def':1,
 'desc':'A snazzy USM shirt obtained from one of the various events on campus.',
 use(){
   text.innerHTML = 'You put on the shirt.';
   player.torso = {'item':'shirt','def':1,'eva':0}; 
   player.def = player.head.def + player.leftHand.def + player.rightHand.def + player.torso.def;
   player.def += player.legs.def + player.feet.def;
   player.eva = player.head.eva + player.leftHand.eva + player.rightHand.eva + player.torso.eva;
   player.eva += player.legs.eva + player.feet.eva;
   items();
   }
};

var studentID = {
  item:'student id',
 n:1,
 desc:'You can use this to check out a laptop at the ASC.',
 use(){
   text.innerHTML = "You give the ASC tutor your student id. The ASC tutor gives you a laptop.";
   for (i = 0; i < player.items.length; i++) {
       if (player.items[i]== studentID) {
         player.items[i] = laptop;
      } // close if
    } // close for
   items();
  } // close use
};
     
var laptop = {
  item:'laptop',
  n: 1,
  desc:'A macbook pro. Give this back to a tutor to get your id back.',
  use(){
   text.innerHTML = "You give the ASC tutor the laptop. The ASC tutor returns your student id.";
   for (i = 0; i < player.items.length; i++) {
     if (player.items[i].item == 'laptop') {
       player.items[i] = studentID;
     }
   }
   items();
 }
};

var player = {
    "name": "",
    "face": 3,
    "skin": [217, 183, 31],
    "hair": 0,
    "hairColor": [0, 0, 0],
    "tshirt": '↑',
    "tColor": [100, 84, 0],
    'pColor': [0, 50, 0],
    'hp': 50,
    'mp': 10,
    'maxhp': 50,
    'maxmp': 10,
    'mapX': 51,
    'mapY': 13,
    'xp': 0,
    'nextLevel': 100,
    'money': 0,
    'facing':'South',
    'items': [shirt,
            studentID,
            ],
    'head':{'item':'None','def':0,'eva':0},
    'leftHand':{'item':'None','atk':0,'def':0,'eva':0},
    'rightHand':{'item':'None','atk':0,'def':0,'eva':0},
    'torso':{'item':'shirt','def':1,'eva':0},
    'legs':{'item':'pants','def':1,'eva':0},
    'feet':{'item':'shoes','def':1,'eva':1},
    'def': 3,
    'eva': 1,
    'atk': 1,
     'questLog':[],
     x: 280,
     y: 100
 };
