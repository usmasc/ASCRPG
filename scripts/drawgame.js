var w = 600;
var h = 400;

void setup() { 
  size(w, h);
}

void draw() {
  //fill(255,0,0);
  //ellipse(200,200,10,10);
  //rect(200,205,10,10);
  //fill(255,255,255);
  //text('e',200,210);
  
  // face
  fill(player.skin[0],player.skin[1],player.skin[2]);
  ellipse(player.x,player.y-10,12+player.face*4,20);
  
  // arms
  rect(player.x-14,player.y+4,4,18);
  rect(player.x+10,player.y+4,4,18);
  
  // tshirt
  fill(player.tColor[0],player.tColor[1],player.tColor[2]);
  rect(player.x-10,player.y,20,20);
  rect(player.x-14,player.y,4,4);
  rect(player.x+10,player.y,4,4);
  
  // hat
  rect(player.x-6-player.face,player.y-25,12+player.face*2,5);
  rect(player.x-6-player.face-3,player.y-22,3,2);
  
  // tshirt logo
  fill(255,255,255);
  text(player.tshirt,player.x-3,player.y+13);
 
  // eye whites
  fill(255,255,255);
  ellipse(player.x-3-player.face,player.y-11,4,5);
  ellipse(player.x+3+player.face,player.y-11,4,5);
  
  //pupils
  fill(0,0,0);
  ellipse(player.x-3-player.face,player.y-11,1,1);
  ellipse(player.x+3+player.face,player.y-11,1,1);
  
  // mouth
  line(player.x-3,payer.y-5,player.x+3,player.y-5);
  
  //pants
  fill(0,100,0);
  rect(player.x-10,player.y+20,20,10);
  rect(player.x-10,player.y+30,5,10);
  rect(player.x+5, player.y+30,5,10);
  
  //shoes
  fill(0,0,0);
  rect(player.x-11,player.y+40,7,3);
  rect(player.x+4,player.y+40,7,3);
  
  
}
