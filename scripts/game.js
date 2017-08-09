var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');


var brk = {
  "canPass":false,
  "draw": 'brick'
};

var rug = {
  "canPass":true,
  "draw": 'rug'
};

var grs = {
  "canPass":true,
  "draw": 'grass'
};

var smp = {
  'canPass':true,
  'draw':'swamp'
};

var snd = {
  'canPass':true,
  'draw':'sand'
};

var pth = {
  'canPass':true,
  'draw':'path'
};

var flr = {
  'canPass':true,
  'draw':'floor'
};

var wtr = {
  'canPass':false,
  'draw':'water'
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

     player.mapY--;
     text.innerHTML = 'Going up.';
            if (map[player.mapY-1][player.mapX] == grs){
    text.innerHTML = 'Stay off the ' + map[player.mapY-1][player.mapX].draw;
  }
   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY-1][player.mapX].draw;
   }

}

function down() {
   if (map[player.mapY+1][player.mapX].canPass){

     player.mapY++;
     text.innerHTML = 'Going dowm.';
             if (map[player.mapY+1][player.mapX] == grs){
    text.innerHTML = 'Stay off the ' + map[player.mapY-1][player.mapX].draw;
  }
   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY+1][player.mapX].draw;
   }

}


function left() {
   if (map[player.mapY][player.mapX-1].canPass){
     player.mapX--;
     text.innerHTML = 'Going left.';
         if (map[player.mapY][player.mapX-1] == grs){
    text.innerHTML = 'Stay off the ' + map[player.mapY-1][player.mapX].draw;
  }
   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY][player.mapX-1].draw;
   }

}

function right() {
   if (map[player.mapY][player.mapX+1].canPass){
     text.innerHTML = 'Going right.';
     player.mapX++;
        }
   if (map[player.mapY][player.mapX+1] == grs){
    text.innerHTML = 'Stay off the ' + map[player.mapY-1][player.mapX].draw;
  }
   } else {
     text.innerHTML = 'None shall pass ' + map[player.mapY][player.mapX+1].draw;

}

function arrows() {
  
   thingie = '<table><tr><td></td><td> <button onclick="up()"> ⇑ </button></td><td></td></tr>';
   thingie += '<tr><td><button onclick="left()">⇐</button></td>';
   thingie += '<td><button onclick="down()"> ⇓ </button></td>';
   thingie += '<td><button onclick="right()">⇒</button></td></tr>';
  
   sumbit.innerHTML = thingie;
}



function start() {
  text.innerHTML = 'In the year 201X ...';
  arrows();
}
