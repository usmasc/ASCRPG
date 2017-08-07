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
  
  fill(player.skin[0],player.skin[1],player.skin[2]);
  ellipse(player.x-player.face-3,player.y-10,6+player.face*2,10);
  fill(player.tColor[0],player.tColor[1],player.tColor[2]);
  rect(player.x-5,player.y,10,10);
  fill(255,255,255);
  text(player.tshirt,290,195);
  
}
