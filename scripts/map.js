var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

var player = {
    "name": "",
    "face": 3,
    "skin": [217, 183, 31],
    "hair": 0,
    "hairColor": [0, 0, 0],
    "tshirt": 'e',
    "tColor": [255, 0, 0],
    'pColor': [0, 50, 0],
    'hp': 50,
    'mp': 10,
    'maxhp': 50,
    'maxmp': 10,
    'mapX': 13,
    'mapY': 5,
    'xp': 0,
    'nextLevel': 100,
    'money': 0,
    'facing':'South',
    'items': [{'item':'shirt',
             'n':1,
             'def':1,
             'desc':'A shirt with a math symbol.',
             use(){
               text.innerHTML = 'You put on the shirt.';
               player.torso = {'item':'shirt','def':1,'eva':0}; 
               player.def = player.head.def + player.leftHand.def + player.rightHand.def + player.torso.def;
               player.def += player.legs.def + player.feet.def;
               player.eva = player.head.eva + player.leftHand.eva + player.rightHand.eva + player.torso.eva;
               player.eva += player.legs.eva + player.feet.eva;  
             }
            },
             {'item':'pants',
             'n':1,
             'desc':'A pair of pants.',
              'def':1,
             use(){
               text.innerHTML = 'You put on the pants.';
               player.leg = {'item':'pants','def':1,'eva':0};
               player.def = player.head.def + player.leftHand.def + player.rightHand.def + player.torso.def;
               player.def += player.legs.def + player.feet.def;
               player.eva = player.head.eva + player.leftHand.eva + player.rightHand.eva + player.torso.eva;
               player.eva += player.legs.eva + player.feet.eva;
             }
            },
              {'item':'shoes',
                'n':1,
                 'desc':'A pair of shoes.',
                use(){
                    text.innerHTML = 'You put on the shoes.';
                    player.feet = {'item':'shoes','def':1,'eva':1};
                    player.def = player.head.def + player.leftHand.def + player.rightHand.def + player.torso.def;
                    player.def += player.legs.def + player.feet.def;
                    player.eva = player.head.eva + player.leftHand.eva + player.rightHand.eva + player.torso.eva;
                    player.eva += player.legs.eva + player.feet.eva;  
              }
            }],
    'head':{'item':'None','def':0,'eva':0},
    'leftHand':{'item':'None','atk':0,'def':0,'eva':0},
    'rightHand':{'item':'None','atk':0,'def':0,'eva':0},
    'torso':{'item':'shirt','def':1,'eva':0},
    'legs':{'item':'pants','def':1,'eva':0},
    'feet':{'item':'shoes','def':1,'eva':1},
    'def': 3,
    'eva': 1,
    'atk': 1,
     x: 280,
     y: 100
 };


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
    var thingie = this.name + ": Hey, watch where you're touching";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = this.name + ": Hello, " + player.name + ". It is time that I tell you a story of grave importance.";
    thingie += " Care to listen?";
    text.innerHTML = thingie;
    var buttons = '<button onclick="dialog(1)">Yes</button> <button onclick="dialog(2)">No</button>';
    sumbit.innerHTML = buttons;
  }
};
  

var map = {
 '0':[wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
 '1':[wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
 '2':[wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
 '3':[wtr,grs,brk,brk,brk,brk,brk,brk,grs,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,wtr],
 '4':[wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 '5':[wtr,grs,brk,flr,Frd,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
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
