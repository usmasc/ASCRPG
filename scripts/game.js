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
  'name': 'Fred',
  'canPass': false,
  'draw': 'floor',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "Fred: Hey, watch where you're touching";
    text.innerHTML = thingie;
  },
  talk() {
    var thingie = "Fred: You found me! What? You never seen an invisible person before?";
    text.innerHTML = thingie;
  }
};
  

var map = [[wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
           [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
           [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
           [wtr,grs,brk,brk,brk,brk,brk,brk,grs,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,wtr],
           [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
           [wtr,grs,brk,flr,Frd,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
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
     player.facing = 'North';
     
     text.innerHTML = 'facing '+player.facing;
     if (map[player.mapY-1][player.mapX] == grs){
      text.innerHTML = 'Stay off the grass';
      }
     player.mapY--;
   } else {
     text.innerHTML = 'Find another route.';
   }

}

function down() {
   if (map[player.mapY+1][player.mapX].canPass){

     player.facing = 'South';
     text.innerHTML = 'facing '+player.facing;
     if (map[player.mapY+1][player.mapX] == grs){
        text.innerHTML =  'Stay off the grass';
      }
     player.mapY++;

   } else {
     text.innerHTML = 'Find another route.';
   }

}


function left() {
   if (map[player.mapY][player.mapX-1].canPass){
     player.facing = 'West';    
     text.innerHTML = 'facing '+player.facing;
     if (map[player.mapY][player.mapX-1] == grs){
        text.innerHTML =  'Stay off the grass';
     }
     player.mapX--;
   } else {
     text.innerHTML = 'Find another route.';
   }

}

function right() {
   if (map[player.mapY][player.mapX+1].canPass){
     player.facing = 'East';
     text.innerHTML = 'facing '+player.facing;
     if (map[player.mapY][player.mapX+1] == grs){
       text.innerHTML =  'Stay off the grass';
     }
     player.mapX++;
   } else {     
     text.innerHTML = 'Find another route.';
   }

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
  var thingie = '';
  if (map[player.mapY][player.mapX].canCheck) {
    map[player.mapY][player.mapX].check();
    return 0;
  } else {
      switch(player.facing) {
        case 'North':
            if (map[player.mapY-1][player.mapX].canCheck) {
               map[player.mapY-1][player.mapX].check();
               return 0;
            } 
        
        case 'South':
            if (map[player.mapY+1][player.mapX].canCheck) {
               map[player.mapY+1][player.mapX].check();
               return 0;
            } 

        case 'West':
            if (map[player.mapY][player.mapX-1].canCheck) {
               map[player.mapY][player.mapX-1].check();
               return 0;
            } 
        case 'East':
            if (map[player.mapY][player.mapX+1].canCheck) {
               map[player.mapY][player.mapX+1].check();
               return 0;
            } 
        default:
          thingie = 'You explore the area under your feet and to the ' + player.facing;
          thingie += ', but do not find anything of interest. You note these findings in your journal ';
          thingie += ' and press on.';
          text.innerHTML = thingie;
       }
    }
  }

function talk() {
  var thingie = '';
  if (map[player.mapY][player.mapX].canTalk) {
    map[player.mapY][player.mapX].talk();
    return 0;
  } else {
      switch(player.facing) {
        case 'North':
            if (map[player.mapY-1][player.mapX].canTalk) {
               map[player.mapY-1][player.mapX].talk();
               return 0;
            } 
        
        case 'South':
            if (map[player.mapY+1][player.mapX].canTalk) {
               map[player.mapY+1][player.mapX].talk();
               return 0;
            } 

        case 'West':
            if (map[player.mapY][player.mapX-1].canTalk) {
               map[player.mapY][player.mapX-1].talk();
               return 0;
            } 
        case 'East':
            if (map[player.mapY][player.mapX+1].canTalk) {
               map[player.mapY][player.mapX+1].talk();
               return 0;
            } 
        default:
          thingie = 'Talking things out can help you work a problem out.';
          text.innerHTML = thingie;
       }
    }
  }



function start() {
  text.innerHTML = 'In the year 202X ...';
  arrows();
}
