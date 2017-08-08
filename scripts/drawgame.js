var w = 720;
var h = 200;


void setup() { 
  size(w, h);
  background(100,100,255);
  //noLoop();
}

void draw() {
  
  var brk = {
    "canPass":false,
    "draw": draw_brick(x,y);
  };

  var rug = {
    "canPass":true,
    "draw": draw_rug(x,y);
  };

  var map = [[brk, brk, brk, brk, brk, brk, brk, brk, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, rug, rug, rug, rug, rug, rug, rug, brk],
             [brk, brk, brk, brk, brk, brk, brk, brk, brk]];

  
  for(y = 0, y < map.length; y++) {
    for(x = 0, x < map[y].length; x++) {
      map[y][x].draw(x,y);
    }
  }
  /*
  for(var y = 1; y < 11; y++) {
     draw_water(1,y);
     draw_swamp(2,y);
     draw_grass(3,y);
     draw_path(4,y);
     draw_brick(5,y);
     draw_brick(34,y);
     draw_grass(35,y);    
     draw_desert(36,y);
   }
  
  draw_brick(6,1);
  draw_brick(6,10);
    draw_brick(33,1);
  draw_brick(33,10);
  
    for(var y = 2; y < 10; y++) {
     draw_floor(6,y);
     draw_floor(33,y);
   }
  
  

  for(var x = 7; x < 33; x++) {
    draw_brick(x,1);
    draw_brick(x,10);
    draw_floor(x,9);
    draw_floor(x,2);
    for(var y = 3; y < 9; y++) {
      draw_rug(x,y);
    }
  }
  
 
draw_PlayerFacingDown(); 
}

void reload() {
  redraw();
  updateStats();
}

void draw_PlayerFacingDown() { 
  fill(player.skin[0],player.skin[1],player.skin[2]);
  //ears
  ellipse(player.x-6-player.face*2,player.y-12,4,4);
  ellipse(player.x+6+player.face*2,player.y-12,4,4);
   // head
  ellipse(player.x,player.y-10,12+player.face*4,20);

  // arms
  rect(player.x-10,player.y+8,4,4);
  rect(player.x+6,player.y+8,4,4);

  // tshirt
  fill(player.tColor[0],player.tColor[1],player.tColor[2]);
  rect(player.x-6,player.y,12,14);
  rect(player.x-10,player.y,4,8);
  rect(player.x+6,player.y,4,8);

  /*
  // hat
  rect(player.x-player.face-6, player.y-25, player.face*2+12, 5);
  fill(0,0,100);
  rect(player.x-player.face-6-3, player.y-21, 3, 2);
  */

  // tshirt logo
  fill(255,255,255);
  text(player.tshirt,player.x-3,player.y+10);

  // eye whites
  fill(255,255,255);
  ellipse(player.x-3-player.face,player.y-11,4,5);
  ellipse(player.x+3+player.face,player.y-11,4,5);

  //pupils
  fill(0,0,0);
  ellipse(player.x-3-player.face,player.y-11,1,1);
  ellipse(player.x+3+player.face,player.y-11,1,1);

  // mouth
  rect(player.x-3,player.y-5,6,1);

  // hair
  for(x = player.x-player.face*2; x <= player.x+player.face*2; x+=2) {
    noFill();
    stroke(player.hairColor[0],player.hairColor[1],player.hairColor[2]);
    ellipse(x,player.y-20,2,3);
  }
  stroke(0,0,0);

  //pants
  fill(player.pColor[0],player.pColor[1],player.pColor[2]);
  noStroke();
  rect(player.x-6,player.y+16,4,3);
  rect(player.x+2, player.y+16,4,3);
  rect(player.x-6,player.y+14,12,2);
  stroke(0,0,0);

  //shoes
  fill(0,0,0);
  rect(player.x-5,player.y+18,5,2);
  rect(player.x+2,player.y+18,5,2);
}

//rug
void draw_rug(x,y) {
  noStroke();
  x = 20*x-20;
  y = 20*y-20;
  for(var xi = x; xi < x+20; xi+=4) {
      for(var yi = y; yi < y+20; yi+=4) {
          noStroke();
          fill(random(175,200), 0, 0);
          rect(xi,yi,4,4);
      }
  }
}

void draw_brick(x,y) {
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
  }
  
 
  void draw_grass(x,y) {
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=4) {
        for(var yi = y; yi < y+20; yi+=4) {
            noStroke();
            fill(random(75,100),random(225,255),random(75,100));
            rect(xi,yi,4,4);
        }
    }
  }

void draw_floor(x,y) {
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
  }

  void draw_path(x,y) {
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=4) {
        for(var yi = y; yi < y+20; yi+=4) {
            noStroke();
            fill(random(175,200), random(175,200), 0);
            rect(xi,yi,4,4);
        }
    }
  }
  

  
  
  
  void draw_desert(x,y) {
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=4) {
        for(var yi = y; yi < y+20; yi+=4) {
            noStroke();
            //224, 166, 137
            fill(random(230,255), random(200,229), random(175,199));
            rect(xi,yi,4,4);
        }
    }
}
  
void draw_swamp(x,y) {
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=4) {
        for(var yi = y; yi < y+20; yi+=4) {
            noStroke();
            fill(0,random(50,200),random(50,150));
            rect(xi,yi,4,4);
        }
    }
  }

void draw_water(x,y) {
    noStroke();
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+20; xi+=4) {
        for(var yi = y; yi < y+20; yi+=4) {
            noStroke();
            fill(random(0,50),random(0,50),random(225,255));
            rect(xi,yi,4,4);
        }
    }
}
  
  

 


           
