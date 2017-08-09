var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');


var brk = {
  "canPass":false,
  "draw": 'brick',
  'canCheck': false
};

var rug = {
  "canPass":true,
  "draw": 'rug',
  'canCheck': true,
  'check': function() {
    text.innerHTML = 'No problems found here. While you are tempted, you refuse to sweep your problems under the rug.';
  }
};

var grs = {
  "canPass":true,
  "draw": 'grass',
    'canCheck': true,
  'check': function() {
    text.innerHTML = 'You could have sworn that the grass looked greener from further away. However, after closer analysis';
    text.innerHTML += ' the grass in the distance looks greener now.';
  }
};

var smp = {
  'canPass':true,
  'draw':'swamp',
  'canCheck': false
};

var snd = {
  'canPass':true,
  'draw':'sand',
  'canCheck': false
};

var pth = {
  'canPass':true,
  'draw':'path',
  'canCheck': false
};

var flr = {
  'canPass':true,
  'draw':'floor',
  'canCheck': false
};

var wtr = {
  'canPass':false,
  'draw':'water',
  'canCheck': false
};
  
var map = [[wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
           [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
           [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
           [wtr,grs,brk,brk,brk,brk,brk,brk,grs,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,wtr],
           [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
           [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
           [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
           [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
           [wtr,grs,brk,brk,flr,brk,brk,brk,grs,grs,grs,brk,brk,brk,rug,brk,brk,grs,grs,brk,brk,brk,brk,flr,brk,grs,grs,wtr],
           [wtr,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,wtr],
           [wtr,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,wtr],
           [wtr,grs,grs,grs,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,grs,grs,grs,wtr],
           [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
           [wtr,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,wtr],
           [wtr,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,wtr],
           [wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
           [wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr]];

function up() {
   if (map[player.mapY-1][player.mapX].canPass){

     
     text.innerHTML = 'Going up.';
     if (map[player.mapY-1][player.mapX] == grs){
      text.innerHTML = 'Stay off the grass';
      }
     player.mapY--;
   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY-1][player.mapX].draw;
   }
     player.facing = 'North';
}

function down() {
   if (map[player.mapY+1][player.mapX].canPass){

     
     text.innerHTML = 'y-=1.';
     if (map[player.mapY+1][player.mapX] == grs){
        text.innerHTML =  'Stay off the grass';
      }
     player.mapY++;

   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY+1][player.mapX].draw;
   }
     player.facing = 'South';
}


function left() {
   if (map[player.mapY][player.mapX-1].canPass){
     
     text.innerHTML = 'Going left.';
     if (map[player.mapY][player.mapX-1] == grs){
        text.innerHTML =  'Stay off the grass';
     }
     player.mapX--;
   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY][player.mapX-1].draw;
   }
       player.facing = 'West';
}

function right() {
   if (map[player.mapY][player.mapX+1].canPass){
     text.innerHTML = 'Going right.';

     
     if (map[player.mapY][player.mapX+1] == grs){
       text.innerHTML =  'Stay off the grass';
     }
     player.mapX++;
   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY][player.mapX+1].draw;
   }
       player.facing = 'East';
}

function arrows() {
   thingie = '<table><tr><td>';
   // row 1
   thingie += '<table><tr><td></td><td> <button onclick="up()"> ⇑ </button></td><td></td>';
   thingie += '<td><button onclick="talk()">talk</button></td>';
   thingie += '<td><button onclick="items()">items</button></td></tr>';
   // row 2
   thingie += '<tr><td><button onclick="left()">⇐</button></td>';
   thingie += '<td><button onclick="down()"> ⇓ </button></td>';
   thingie += '<td><button onclick="right()">⇒</button></td>';
   thingie += '<td><button onclick="check()">check</button></td>';
   thingie += '<td><button onclick="stats()">status</button></td>';
   thingie += '</tr></table>';
  
   sumbit.innerHTML = thingie;
}

function check() {
  if (map[player.mapY][player.mapX].canCheck) {
    text.innerHTML = map[player.mapY][player.mapX].check();
  } else {
      switch(player.facing) {
        case 'North':
            if (map[player.mapY-1][player.mapX].canCheck) {
               text.innerHTML = map[player.mapY-1][player.mapX].check();
            } 
            break;
        case 'South':
            if (map[player.mapY+1][player.mapX].canCheck) {
               text.innerHTML = map[player.mapY+1][player.mapX].check();
            } 
            break;
        case 'West':
            if (map[player.mapY][player.mapX-1].canCheck) {
               text.innerHTML = map[player.mapY][player.mapX-1].check();
            } 
            break;
        case 'East':
            if (map[player.mapY][player.mapX+1].canCheck) {
               text.innerHTML = map[player.mapY][player.mapX+1].check();
            } 
            break;
        default:
          text.innerHTML = 'Your explore the area under your feet and to the ' + player.facing;
          text.innerHTML += ', but do not find anything of interest. You note these findings in your journal ';
          text.innerHTML += ' and press on.';
       }
    }
  }



function start() {
  text.innerHTML = 'In the year 202X ...';
  arrows();
}
