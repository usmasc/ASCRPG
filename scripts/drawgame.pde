int horBlks = 28;
int verBlks = 10;

int w = horBlks * 20;
int h = verBlks * 20;

void setup() { 
  size(w, h);
  background(1,1,1);
  //noLoop();
}

var mapD = [
[wal,wal,wal,wal,wal,SGp,wal,wal,MLb,wal,wal,StL,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
[wnT,til,til,SGs,dkT,til,til,til,til,til,til,til,til,til,til,chR,sfB,sfB,til,til,til,til,til,til,wal],
[wnB,til,til,til,dkB,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,wal],
[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,rug,ctR,bsL,bsR,til,til,til,til,til,wal],
[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,rug,rug,rug,rug,til,til,til,til,til,wal],
[wal,wal,hwb,hwb,til,til,til,til,til,til,til,til,til,til,otT,rug,rug,rug,otR,til,til,til,til,til,wal],
[wal,SmS,til,til,til,til,til,cUL,cUR,til,til,til,til,til,til,rug,otR,rug,rug,til,til,til,til,til,wal],
[wal,shl,til,til,til,til,til,cLL,cLR,til,til,til,til,til,til,rug,rug,rug,rug,til,til,til,til,til,wal],
[wnT,til,til,cUL,cUR,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,wal],
[wnB,til,til,cLL,cLR,til,til,til,til,til,til,til,til,til,til,til,til,vfb,til,til,til,til,til,til,wal],
[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,trs,vfb,til,til,til,til,til,til,wal],
[wal,wal,plt,til,til,til,til,til,til,til,til,til,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,wal,wal],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,til,wal,wal,til,til,til,wal,til,til,til,til,til,til,til,wal],
[wal,wal,fcs,til,dTc,til,til,til,til,til,til,wal,wal,til,til,til,bbT,til,til,til,til,til,til,til,wal],
[wnT,vwb,til,TG1,dkM,til,til,til,til,til,til,cpr,wal,til,til,til,bbB,til,til,til,til,til,til,til,wal],
[wnB,vwb,til,dhL,dcR,til,cUL,cUR,til,til,til,til,wal,wal,til,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
[wal,til,til,til,til,til,cUL,cUR,til,til,til,ltc,wal,crp,crp,crp,dLc,dRc,dkL,dkR,til,til,Tr4,ctC,gwv],
[bbb,til,til,til,til,til,til,til,til,til,til,til,til,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,tcL,gwv],
[wal,til,til,til,til,til,til,til,til,til,til,til,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
[wnT,til,til,til,til,cUL,cUR,til,til,til,til,tcT,wal,cfT,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
[wnB,til,cUL,cUR,til,cLL,cLR,til,til,til,til,tcM,wal,cfB,crp,crp,crp,crp,Tr3,crp,crp,crp,crp,brs,gwv],
[wal,til,cLL,cLR,til,til,til,til,til,til,til,tcM,wal,bsv,crp,crp,crp,tcR,ctC,tcL,crp,crp,crp,bst,gwv],
[wal,til,til,til,til,til,til,til,til,til,til,tcM,wal,wsh,crp,crp,crp,crp,crp,crp,crp,crp,crp,brs,gwv],
[wal,til,til,til,til,til,til,til,til,til,til,tcM,wal,gsT,crp,crp,crp,crp,crp,crp,crp,crp,crp,wal,gwv],
[wal,wal,til,til,til,til,til,gsL,gsR,bsL,bsR,tcB,wal,gsB,crp,crp,crp,hUL,hUR,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wbL,wbM,wbM,wbR,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,hML,hMR,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,DiO,crp,crp,crp,crp,hLL,hLR,crp,crp,crp,wtL,wtR,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,hLL,hLR,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,Tr2,Tr1,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wtL,wtR,crp,crp,crp,crp,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,wtL,wtR,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,FDP,crp,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,fdL,fdR,crp,crp,crp,crp,crp,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,tcL,ctC,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,tcU,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,wal,tcU,crp,crp,crp,sid,sch,crp,crp,crp,tcU,wal,gwv],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,gwh,gwh,gwh,gwh,crp,crp,gwh,gwh,gwh,gwh,gwh,gwh,gwh,gwc],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crB],
[wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crB],
[wal,til,til,til,til,til,til,til,til,til,dkT,til,crp,crp,cUL,cUR,crp,crp,crp,cUL,cUR,crp,crp,crp,crB],
[wal,til,til,til,til,til,til,til,til,til,dkM,til,crp,crp,cLL,cLR,crp,crp,crp,cLL,cLR,crp,crp,crp,crB],
[wal,til,til,til,til,til,til,til,til,til,dkM,til,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,crB],
[wal,til,til,til,til,til,til,til,til,til,dkM,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
[wal,til,til,til,til,til,til,til,til,til,dkM,til,til,til,coT,coT,til,coT,til,coT,til,coT,til,coT,tiB],
[wal,til,til,til,til,til,til,til,til,til,dkM,til,til,siL,coB,coB,til,coB,til,coB,til,coB,til,coB,tiB],
[wal,til,til,til,til,til,til,LST,til,LEP,dkM,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
[wal,wal,wal,bbL,bbR,wal,dkH,dkH,Lrs,dkH,Lps,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
[drT,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
[drB,til,til,til,til,til,til,til,til,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
[wal,til,til,til,til,til,til,til,til,til,til,til,til,str,str,str,str,str,str,str,str,str,str,str,str],
[drT,til,til,til,til,til,til,til,til,cct,til,til,til,str,str,str,str,str,str,str,str,str,str,str,str],
[drB,til,til,til,til,til,til,til,til,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal,wal],
[wal,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
[drT,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,til,tiB],
[drB,til,til,til,til,wal,wal,wal,wal,wal,wal,wal,til,til,coT,coT,til,coT,til,coT,til,coT,til,coT,tiB],
[wal,wal,bbL,bbR,wal,wal,crp,crp,crp,crp,crp,CpL,til,til,coB,coB,til,coB,til,coB,til,coB,til,coB,tiB],
[wal,crp,crp,crp,crp,crp,crp,crp,crp,crp,crp,wal,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB,tiB]
];


void draw() {

  int mapX0 = player.mapX - player.x/20;
  int mapY0 = player.mapY - player.y/20;
  int yi = 1;
  int xi = 1;
  
  for(int y = 1; y <= verBlks; y++) {
    yi = y + mapY0;
    if (yi > -1 && yi < mapD.length) {
      for(int x = 1; x <= horBlks; x++) {
        xi = x + mapX0;
        if (xi > -1 && xi < mapD[yi].length) {
          draw_bg(mapD[yi][xi].draw,x,y);
        } else {
          draw_black_square(x,y);
        }
      }
    }  else {
        draw_blackRow(y);
    }
  }
 
draw_PlayerFacingDown(); 
}

void draw_black_square(x,y) {
  var newX = 20*x-20;
  var newY = 20*y-20;
  fill(0,0,0);
  rect(newX,newY,20,20);
}

void draw_blackRow(y) {
  var newY = 20*y-20;
  fill(0,0,0);
  rect(0,newY,w,20);
}

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
  fill(0,0,0);
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

void draw_whiteboardTable(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(255,255,255);
  rect(x,y,20,20);  
}

void draw_floor(x,y) {
    //stroke(255, 255, 255);
    x = 20*x-20;
    y = 20*y-20;
    for(var xi = x; xi < x+16; xi+=8) {
        //1st line
        //stroke(51, 32, 2);
        fill(random(200,250),random(150,200),0);
        rect(xi,y,4,7);
        fill(random(200,250),random(150,200),0);
        rect(xi,y+7,4,7);
        //stroke(30, 0, 0);
        fill(random(200,250),random(150,200),0);
        rect(xi,y+14,4,6);
        //2nd line
        noStroke();
        fill(random(200,250),random(150,200),0);
        rect(xi+4,y,4,4);
        fill(random(200,250),random(150,200),0);
        rect(xi+4,y+16,4,4);
        //stroke(30, 0, 0);
        fill(random(200,250),random(150,200),0);
        rect(xi+4,y+4,4,7);
        fill(random(200,250),random(150,200),0);
        rect(xi+4,y+10,4,6);
    }
    //last line
    var xi = x+16;
    //stroke(51, 32, 2);
    fill(random(200,250),random(150,200),0);
    rect(xi,y,4,7);
    fill(random(200,250),random(150,200),0);
    rect(xi,y+7,4,7);
    //stroke(30, 0, 0);
    fill(random(200,250),random(150,200),0);
    rect(xi,y+14,4,6);
}

void draw_npc(x,y,skin,clothes,cc,hair,hairCol) {
   x = 20*x-20;
   y = 20*y-20;
  // face
  fill(skin[0],skin[1],skin[2]);
  ellipse(x+10,y+5,20,10);
  // eyes
  fill(0,0,0);
  ellipse(x+5,y+5,2,4);
  ellipse(x+15,y+5,2,4); 
  // mouth
  rect(x+5,y+8,10,1);
  //hair
  switch(hair) {
    case 'bald':
      break;
  }
  //body
  switch(clothes) {
    case 'cloak':
      fill(cc[0],cc[1],cc[2]);
      rect(x+4,y+10,12,10);
      rect(x,y+10,4,5);
      rect(x+16,y+10,4,5);
      fill(skin[0],skin[1],skin[2]);
      rect(x,y+15,4,4);
      rect(x+16,y+15,4,4);
      break;
  }
}

void draw_brick(x,y) {
      //stroke(255, 255, 255);
      x = 20*x-20;
      y = 20*y-20;
      for(var yi = y; yi < y+16; yi+=8) {
        //1st line
        stroke(30, 0, 0);
        fill(random(100,125),random(126,150),0);
        rect(x,yi,6,4);
        fill(random(100,125),random(126,150),0);
        rect(x+7,yi,7,4);
        stroke(30, 0, 0);
        fill(random(100,125),random(126,150),0);
        rect(x+14,yi,6,4);
        //2nd line
        noStroke();
        fill(random(100,125),random(126,150),0);
        rect(x,yi+4,4,4);
        fill(random(100,125),random(126,150),0);
        rect(x+16,yi+4,4,4);
        stroke(30, 0, 0);
        fill(random(100,125),random(126,150),0);
        rect(x+4,yi+4,7,4);
        fill(random(100,125),random(126,150),0);
        rect(x+10,yi+4,6,4);
      }
      //last line
      var yi = y+16;
      stroke(30, 0, 0);
      fill(random(100,125),random(126,150),0);
      rect(x,yi,6,4);
      fill(random(100,125),random(126,150),0);
      rect(x+7,yi,7,4);
      stroke(30, 0, 0);
      fill(random(100,125),random(126,150),0);
      rect(x+14,yi,6,4);
      rect(x+10,yi,6,4);
      noStroke();
}

void draw_desk(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(102,51,0);
  rect(x,y,20,20);  
}

void draw_horGlassWall(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(100,100,255);
  rect(x,y,20,10);  
}

void draw_corGlassWall(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(100,100,255);
  rect(x,y,10,10);  
}

void draw_verGlassWall(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(100,100,255);
  rect(x,y,10,20);  
}

void draw_tile(x,y) {
  noStroke();
  x = 20*x-20;
  y = 20*y-20;
  for(var xi = x; xi < x+20; xi+=10) {
    for(var yi = y; yi < y+20; yi+=10) {
      noStroke();
      fill(random(201,225), random(176,200), 0);
      rect(xi,yi,10,10);
    }
  }
}


void draw_rug(x,y) {
  noStroke();
  x = 20*x-20;
  y = 20*y-20;
  for(var xi = x; xi < x+20; xi+=5) {
    for(var yi = y; yi < y+20; yi+=5) {
      noStroke();
      fill(random(175,200), random(150,174), 0);
      rect(xi,yi,5,5);
    }
  }
}

void draw_smallCircleTable(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  stroke(0,0,0);
  fill(255,255,255);
  ellipse(x+10,y+10,18,18);
}

void draw_barstool(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  stroke(0,0,0);
  fill(0,0,0);
  ellipse(x+10,y+10,15,15);
}

void draw_barstoolTable(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  stroke(0,0,0);
  fill(0,0,0);
  ellipse(x+10,y+10,18,18);
}

void draw_ottoman(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  stroke(0,0,0);
  fill(random(100,255),random(100,255),random(100,255));
  ellipse(x+10,y+10,18,18);
}

void draw_grass(x,y) {
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
}

void draw_path(x,y) {
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
}

void draw_sand(x,y) {
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
}

void draw_swamp(x,y) {
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
}

void draw_water(x,y) {
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
}

void draw_verWB(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(255,255,255);
  rect(x+5,y,10,20);  
}

void draw_horWB(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(255,255,255);
  rect(x,y+5,20,10);  
}

void draw_verFeltBoard(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  noStroke();
  fill(200,200,200);
  rect(x+5,y,10,20);  
}

void draw_trash(x,y) {
  x = 20*x-20;
  y = 20*y-20;
  stroke(0,0,0);
  fill(200,200,200);
  quad(x+2,y+2,x+5,y+20,x+15,y+20,x+18,y+2);
}

void draw_bg(bgo, x,y) {
  switch(bgo) {
    case 'whiteBoardTable':
      draw_whiteboardTable(x,y);
      break;
      
    case 'barstool':
      draw_rug(x,y);
      draw_barstool(x,y);
      break;
      
    case 'verGlass':
      draw_rug(x,y);
      draw_verGlassWall(x,y);
      break;
      
    case 'horGlass':
      draw_rug(x,y);
      draw_horGlassWall(x,y);
      break;
      
    case 'corGlass':
      draw_rug(x,y);
      draw_corGlassWall(x,y);
      break;
      
    case 'verWB':
      draw_floor(x,y);
      draw_verWB(x,y);
      break;
      
    case 'horWB':
      draw_rug(x,y);
      draw_horWB(x,y);
      break;
      
    case 'verFeltBoard':
      draw_floor(x,y);
      draw_verFeltBoard(x,y);
      break;
      
    case 'trash':
      draw_floor(x,y);
      draw_trash(x,y);
      break;
    
    case 'barstoolTable':
      draw_rug(x,y);
      draw_barstoolTable(x,y);
      break;
      
    case 'ottomanRug':
      draw_rug(x,y);
      draw_ottoman(x,y);
      break;
      
    case 'ottomanTile':
      draw_floor(x,y);
      draw_ottoman(x,y);
      break;
      
  case 'brick':
    draw_brick(x,y);
    break;
      
    case 'rug':
      draw_rug(x,y);
      break;
      
  case 'grass':
    draw_grass(x,y);
    break;
      
  case 'floor':
    draw_tile(x,y);
    break;
    
  case 'Fred':
    draw_floor(x,y);
    draw_npc(x,y,[217, 183, 31],'cloak',[150,150,150],'bald',[100,100,100]);
    break;
      
  case 'path':
    draw_path(x,y);
    break;
    
  case 'circleTableOnRug':
    draw_rug(x,y);
    draw_smallCircleTable(x,y);
    break;
    
  case 'desk':
    draw_desk(x,y);
    break;
      
  case 'sand':
    draw_sand(x,y);
    break;
  
  case 'swamp':
    draw_swamp(x,y);
    break;
  
  case 'water':
    draw_water(x,y);
    break;
  }
}
