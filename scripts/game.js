var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');






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

function items() {
  var thingie = '';
  for (i = 0; i < player.items.length; i++) {
    thingie += '<button onclick="item(' + i + ')">' + player.items[i].item + ': ' + player.items[i].n + '</button> ';
  }
    thingie += '<button onclick="arrows()">Back</button>';
  sumbit.innerHTML = thingie;
}

function item(i) {
  var thingie = player.items[i].item + ': ' + player.items[i].n + '<br>';
  thingie += player.items[i].desc;
  text.innerHTML = thingie;
  thingie = '<table><tr><td><button onclick="player.items[' + i + '].use()">Use</button></td>';
  thingie += '<td><button onclick="arrows()">Back</button></td></tr></table>';
  sumbit.innerHTML = thingie;
}

function stats() {
  thingie = '<table><tr><td>defense:</td><td>' + player.def + '</td></tr>';
  thingie += '<td>evasion:</td><td>' + player.eva + '</td></tr>';
  text.innerHTML = thingie;
}


function start() {
  text.innerHTML = 'In the year 202X ...';
  arrows();
}
