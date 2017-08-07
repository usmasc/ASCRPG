var w = 720;
var h = 200;

void setup() { 
  size(w, h);
}

void draw() {
  
  background(100,100,255);
 
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
