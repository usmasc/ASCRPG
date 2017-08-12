int horBlks = 28;
int verBlks = 10;

int w = horBlks * 20;
int h = verBlks * 20;

void setup() { 
  size(w, h);
  background(1,1,1);
  //noLoop();
}

var brD = {
  "draw": 'brick'
};

var ruD = {
  "draw": 'rug'
};

var grD = {
  "draw": 'grass'
};

var smD = {
  'draw':'swamp'
};

var snD = {
  'draw':'sand'
};

var ptD = {
  'draw':'path'
};

var flD = {
  'draw':'floor'
};

var wtD = {
  'draw':'water'
};

var mapD = [[wtr,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD],
            [wtD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,wtD],
            [wtD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,wtD],
            [wtD,grD,brD,brD,brD,brD,brD,brD,grD,grD,grD,brD,brD,brD,brD,brD,brD,grD,grD,brD,brD,brD,brD,brD,brD,grD,grD,wtD],
            [wtD,grD,brD,flD,flD,flD,flD,brD,grD,grD,grD,brD,ruD,ruD,ruD,ruD,brD,grD,grD,brD,flD,flD,flD,flD,brD,grD,grD,wtD],
            [wtD,grD,brD,flD,flD,flD,flD,brD,grD,grD,grD,brD,ruD,ruD,ruD,ruD,brD,grD,grD,brD,flD,flD,flD,flD,brD,grD,grD,wtD],
            [wtD,grD,brD,flD,flD,flD,flD,brD,grD,grD,grD,brD,ruD,ruD,ruD,ruD,brD,grD,grD,brD,flD,flD,flD,flD,brD,grD,grD,wtD],
            [wtD,grD,brD,flD,flD,flD,flD,brD,grD,grD,grD,brD,ruD,ruD,ruD,ruD,brD,grD,grD,brD,flD,flD,flD,flD,brD,grD,grD,wtD],
            [wtD,grD,brD,brD,flD,brD,brD,brD,grD,grD,grD,brD,brD,brD,ruD,brD,brD,grD,grD,brD,brD,brD,brD,flD,brD,grD,grD,wtD],
            [wtD,grD,grD,grD,ptD,grD,grD,grD,grD,grD,grD,grD,grD,grD,ptD,grD,grD,grD,grD,grD,grD,grD,grD,ptD,grD,grD,grD,wtD],
            [wtD,grD,grD,grD,ptD,grD,grD,grD,grD,grD,grD,grD,grD,grD,ptD,grD,grD,grD,grD,grD,grD,grD,grD,ptD,grD,grD,grD,wtD],
            [wtD,grD,grD,grD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,ptD,grD,grD,grD,wtD],
            [wtD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,ptD,ptD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,grD,wtD],
            [wtD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,wtD],
            [wtD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,snD,wtD], 
            [wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD],
            [wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD,wtD]];

void draw() {

  draw_bg(wtr['draw'],1,1);
  /*
  int mapX0 = player.mapX - player.x/20;
  int mapY0 = player.mapY - player.y/20;
  int yi = 1;
  int xi = 1;
  
  
  for(int y = 1; y <= verBlks; y++) {
    yi = y + mapY0;
    if (yi > -1 && yi < map.rows) {
      for(int x = 1; x <= horBlks; x++) {
        xi = x + mapX0;
        if (xi > -1 && xi < map[yi].length) {
          draw_bg(map[yi][xi].draw,x,y);
        }
      }
    }
  }
  */
 
draw_PlayerFacingDown(); 
}

/*
void reload() {
  redraw();
}
*/


void draw_PlayerFacingDown() {
  var newx = player.x-10;
  var newy = player.y-20;
  fill(player.skin[0],player.skin[1],player.skin[2]);
  //ears
  ellipse(newx-6-player.face*2,newy-12,4,4);
  ellipse(newx+6+player.face*2,newy-12,4,4);
   // head
  ellipse(newx,newy-10,12+player.face*4,20);

  // arms
  rect(newx-10,newy+8,4,4);
  rect(newx+6,newy+8,4,4);

  // tshirt
  fill(player.tColor[0],player.tColor[1],player.tColor[2]);
  rect(newx-6,newy,12,14);
  rect(newx-10,newy,4,8);
  rect(newx+6,newy,4,8);

  /*
  // hat
  rect(newx-player.face-6, newy-25, player.face*2+12, 5);
  fill(0,0,100);
  rect(newx-player.face-6-3, newy-21, 3, 2);
  */

  // tshirt logo
  fill(255,255,255);
  text(player.tshirt,newx-3,newy+10);

  // eye whites
  fill(255,255,255);
  ellipse(newx-3-player.face,newy-11,4,5);
  ellipse(newx+3+player.face,newy-11,4,5);

  //pupils
  fill(0,0,0);
  ellipse(newx-3-player.face,newy-11,1,1);
  ellipse(newx+3+player.face,newy-11,1,1);

  // mouth
  rect(newx-3,newy-5,6,1);

  // hair
  for(x = newx-player.face*2; x <= newx+player.face*2; x+=2) {
    noFill();
    stroke(player.hairColor[0],player.hairColor[1],player.hairColor[2]);
    ellipse(x,newy-20,2,3);
  }
  stroke(0,0,0);

  //pants
  fill(player.pColor[0],player.pColor[1],player.pColor[2]);
  noStroke();
  rect(newx-6,newy+16,4,3);
  rect(newx+2, newy+16,4,3);
  rect(newx-6,newy+14,12,2);
  stroke(0,0,0);

  //shoes
  fill(0,0,0);
  rect(newx-5,newy+18,5,2);
  rect(newx+2,newy+18,5,2);
}



void draw_bg(bgo, x,y) {
  switch(bgo) {
    case 'brick':
      //stroke(255, 255, 255);
      x = 20*x-20;
      y = 20*y-20;
      for(var yi = y; yi < y+16; yi+=8) {
        //1st line
        stroke(30, 0, 0);
        fill(random(31,255),0,0);
        rect(x,yi,6,4);
        fill(random(31,225),0,0);
        rect(x+7,yi,7,4);
        stroke(30, 0, 0);
        fill(random(31,225),0,0);
        rect(x+14,yi,6,4);
        //2nd line
        noStroke();
        fill(random(31,255),0,0);
        rect(x,yi+4,4,4);
        fill(random(31,225),0,0);
        rect(x+16,yi+4,4,4);
        stroke(30, 0, 0);
        fill(random(31,225),0,0);
        rect(x+4,yi+4,7,4);
        fill(random(31,225),0,0);
        rect(x+10,yi+4,6,4);
      }
      //last line
      var yi = y+16;
      stroke(30, 0, 0);
      fill(random(31,255),0,0);
      rect(x,yi,6,4);
      fill(random(31,225),0,0);
      rect(x+7,yi,7,4);
      stroke(30, 0, 0);
      fill(random(31,225),0,0);
      rect(x+14,yi,6,4);
      rect(x+10,yi,6,4);
      noStroke();
      break;
      
    case 'rug':
        noStroke();
        x = 20*x-20;
        y = 20*y-20;
        for(var xi = x; xi < x+20; xi+=5) {
          for(var yi = y; yi < y+20; yi+=5) {
            noStroke();
            fill(random(175,200), 0, 0);
            rect(xi,yi,5,5);
          }
        }
        break;
      
  case 'grass':
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=5) {
        for(var yi = y; yi < y+20; yi+=5) {
            noStroke();
            fill(random(75,100),random(225,255),random(75,100));
            rect(xi,yi,5,5);
        }
    }
  break;
      
  case 'floor':
     //stroke(255, 255, 255);
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+16; xi+=8) {
        //1st line
        //stroke(51, 32, 2);
        fill(random(100,125),random(75,100),0);
        rect(xi,y,4,7);
        fill(random(100,125),random(75,100),0);
        rect(xi,y+7,4,7);
        //stroke(30, 0, 0);
        fill(random(100,125),random(75,100),0);
        rect(xi,y+14,4,6);
        //2nd line
        noStroke();
        fill(random(100,125),random(75,100),0);
        rect(xi+4,y,4,4);
        fill(random(100,125),random(75,100),0);
        rect(xi+4,y+16,4,4);
        //stroke(30, 0, 0);
        fill(random(100,125),random(75,100),0);
        rect(xi+4,y+4,4,7);
        fill(random(100,125),random(75,100),0);
        rect(xi+4,y+10,4,6);
    }
    //last line
    var xi = x+16;
    //stroke(51, 32, 2);
    fill(random(100,125),random(75,100),0);
    rect(xi,y,4,7);
    fill(random(100,125),random(75,100),0);
    rect(xi,y+7,4,7);
    //stroke(30, 0, 0);
    fill(random(100,125),random(75,100),0);
    rect(xi,y+14,4,6);
    break;
      
  case 'path':
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=5) {
        for(var yi = y; yi < y+20; yi+=5) {
            noStroke();
            fill(random(175,200), random(175,200), 0);
            rect(xi,yi,5,5);
        }
    }
    break;
      
  case 'sand':
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=5) {
        for(var yi = y; yi < y+20; yi+=5) {
            noStroke();
            //224, 166, 137
            fill(random(230,255), random(200,229), random(175,199));
            rect(xi,yi,5,5);
        }
    }
    break;
  
  case 'swamp':
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=5) {
        for(var yi = y; yi < y+20; yi+=5) {
            noStroke();
            fill(0,random(50,200),random(50,150));
            rect(xi,yi,5,5);
        }
    }
    break;
  
  case 'water':
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=5) {
        for(var yi = y; yi < y+20; yi+=5) {
            noStroke();
            fill(random(0,50),random(0,50),random(225,255));
            rect(xi,yi,5,5);
        }
    }
    break;
  
  }
}



  
  

 


           
