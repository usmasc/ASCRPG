var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

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

function dialog(n) {
  var thingie = '';
  var buttons = '';
  switch(n) {
    case 1:
      thingie = 'Fred Paz: ' + player.name + ', our world has been invaded by aliens. They have been here for centuries. ';
      thingie += 'They have brainwashed much of the populus to believe that they are not capable of doing mathematics. ';
      thingie += 'We have been fortunate enough to have a segment of the population that has been immune to this sinister ';
      thingie += 'plot, and we were able to carry on without too many hiccups in the past.';
      text.innerHTML = thingie;
      buttons = '<button onclick="dialog(3)">Continue</button> <button onclick="dialog(2)">Ask to be dismissed.</button>';
      sumbit.innerHTML = buttons;
      break;
    case 2:
      thingie = 'Fred Paz: That is understandable my dear ' + player.name + '. Please return when you are ready.';
      text.innerHTML = thingie;
      arrows();
      break;
    case 3:
      thingie = 'Fred Paz: Unfortunately, the aliens have hacked into our cell phone and mobile devices and have been using ';
      thingie += 'the electronic signals from these devices to convince people that they do not need to know how to do math. ';
      thingie += 'This has created a dire problem for our future. It will not be long before the aliens take over.';
      text.innerHTML = thingie;
      buttons = '<button onclick="dialog(4)">Continue</button> <button onclick="dialog(2)">Ask to be dismissed.</button>';
      sumbit.innerHTML = buttons;
      break;
    case 3:
      thingie = "Fred Paz: We must work to overcome the alien's brainwashing. ";
      thingie += 'Unfortunately, the people who dearly need our help will fight against our efforts.';
      thingie += 'Like the incredibly long fight scene in the movie <em>They Live</em>, the most difficult fight will be ';
      thingie += 'to convince people to challenge their negative thoughts on mathematics. ';
      thingie += 'However, defeating the alines will be a cakewalk  once we do. ';
      thingie += "At least that's what happened in <em>They Live</em>.";
      thingie += "You've seen the movie right?";
      text.innerHTML = thingie;
      buttons = '<button onclick="dialog(4)">Yes</button> <button onclick="dialog(5)">No</button>';
      sumbit.innerHTML = buttons; 
      break;
    case 4:
      thingie = "Fred Paz: No, I am not going to give you a pair of sunglasses. ";
      thingie += "What gave you that idea? ";
      thingie += 'However, I do have a business card with the url for <a href="https://withmathican.com" target="_blank">';

      thingie += 'https:withmathican.com</a><br>';
      thingie += '(You recieve the With Math I Can Business Card)<br>';
      player.item.push({'item':'WMIC card',
        'n':1,
        'desc':'A business card with the <a href="https://withmathican.com" target="_blank">https:withmathican.com</a> url. You can carry it in your right hand. Grants 9 attack, 6 defense, and 6 evasion.',
        'atk':9,
        'def':6,
        'eva':6,
         use(){
           text.innerHTML = 'You carry your With Math I Can card in your right hand.';
           player.rightHand = {'item':'WMIC card','atk':9,'def':6,'eva':6};
           player.atk = player.leftHand.atk + player.rightHand.atk;
           player.def = player.head.def + player.leftHand.def + player.rightHand.def + player.torso.def;
           player.def += player.legs.def + player.feet.def;
           player.eva = player.head.eva + player.leftHand.eva + player.rightHand.eva + player.torso.eva;
           player.eva += player.legs.eva + player.feet.eva;
      });
      thingie += " Would you like to equip it?";
      text.innerHTML = thingie;
      buttons = '<button onclick="dialog(6)">Yes</button> <button onclick="dialog(7)">No</button>';
      sumbit.innerHTML = buttons;
      player.questLog.push('Talked to Fred Paz.');
      break;
  
  case 5:
      thingie = "Fred Paz: I am dreadfully sorry. I did not mean to spoil the movie. ";
      thingie += 'However, I would still recommend watching it.';
      thingie += "With your parents' permission of course.";
      text.innerHTML = thingie;
      buttons = '<button onclick="dialog(5)">Continue</button>';
      sumbit.innerHTML = buttons;
      break;
  case 6:
       thingie = '(You carry your With Math I Can card in your right hand.)';
       player.rightHand = {'item':'WMIC card','atk':9,'def':6,'eva':6};
       player.atk = player.leftHand.atk + player.rightHand.atk;
       player.def = player.head.def + player.leftHand.def + player.rightHand.def + player.torso.def;
       player.def += player.legs.def + player.feet.def;
       player.eva = player.head.eva + player.leftHand.eva + player.rightHand.eva + player.torso.eva;
       player.eva += player.legs.eva + player.feet.eva;
   case 7:
       thingie += 'Fred Paz: Alright, now get out there and change some minds about math.';
       text.innerHTML = thingie;
       arrows();
       break;
  }
  
}
