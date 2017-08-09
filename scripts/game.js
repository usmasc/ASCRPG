var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');



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
