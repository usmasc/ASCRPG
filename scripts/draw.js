var w = 600;
var h = 400;

void setup() { 
  size(w, h);
}

void draw() {
  fill(player.skin[0],player.skin[1],player.skin[2]);
  ellipse(292-player.face,190,6+player.face*2,10);
  fill(player.tColor[0],player.tColor[1],player.tColor[2]);
  rect(290,195,10,10);
  fill(255,255,255);
  text(player.tshirt,290,195);
}
