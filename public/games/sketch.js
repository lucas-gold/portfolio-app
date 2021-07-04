function make2dArray(cols, rows){
      var arr = new Array(cols);
      for (var i = 0; i< arr.length; i++) {
          arr[i] = new Array(rows);
    }
      return arr;
  }



var timeLeftGlobal;

var timerAmt = 0;

  function timer(pos) {
    timerActive = true;

    var timeLeft = timerAmt;
    timerDiv = createDiv(timeLeft);
    timerDiv.position(100,100);

    var downTimer = setInterval(function() {

    if (pause == false && pausePressed == false) {
      timeLeft = timeLeft-1;
    }

    timeLeftGlobal = timeLeft;
    timerDiv.html(timeLeft);

      if (timeLeft == addedYtime + addedXtime - Math.floor(addedXtime/3)) {
        if (successAttack == false) {
          grid[fullyGrownArray[pos].x][fullyGrownArray[pos].y] = new cell(fullyGrownArray[pos].x, fullyGrownArray[pos].y, w); //reset crop
        //  grid[fullyGrownArray[pos].x][fullyGrownArray[pos].y].first();
          fullyGrownArray.splice(pos,1);
          atkBool = false;
        }//shouldn't activate unless failed
      }
      else if (timeLeft <= 0){
        timerActive = false;
        clearInterval(downTimer);
        timerDiv.hide();
        //if (attackSuccess == false) {

        //}
      }



    }, 1000);

  }



//****SETUP****
  function setup(){

    canvas = createCanvas(530, 685);
    canvas.position(538,-43);
      canvas.parent('game');
      canvas.style("display", "block");

        bgScene = createImg('images/bgFarm.png', 'background');
        bgScene.position(0,0);
        bgScene.style('z-index', '-10');
        bgScene.style('margin-top', '10px');
        bgScene.style('margin-left', '212px');
        bgScene.style('width','980px'); //change to percentage



//attacker div
  myDivWalk = createImg('images/axewalkL.gif', 'walking');
  myDivWalk.size(60,55);
  myDivWalk.hide();

  enemyExit = createImg('images/axewalkL.gif', 'walking');
  enemyExit.style('transform','scaleX(-1)')
  enemyExit.size(60,55);
  enemyExit.hide();

  myDiv = createImg('images/loggerL.gif', 'chopping'); //left side
  myDiv.position(550,100);
  myDiv.size(75,75);
    //myDiv.style('font-size', '36px');
  myDiv.hide();
  //use createDiv to make a sidebar with seed count etc



      //numcol = 15;
      //numcol = 24;
      numcol = 36;
      //numrow = 13;
    //  numrow = 19;
    numrow = 21;



      grid = make2dArray(numcol, numrow);

      for (var i = 0; i < numcol; i++) {
          for (var j = 0; j < numrow; j++){
              grid[i][j] = new cell(i, j, w);
          }
      }

  }

  function gameover(){
      for (var i = 0; i < numcol; i++) {
          for (var j = 0; j< numrow; j++){
             grid[i][j].over = true;
          }
      }
      loseGame = true;
  }


  //var attackTrue = false;

  var randPosGlobal = 0;
  var addedYtime = 0;
  var addedXtime = 0;

  function attacker() {

    if (fullyGrownArray.length > 0)
    {
      exitXpos = -100;
      enemyExit.hide();


    successAttack = false;
    myDiv.style('z-index', '0');
    is_walkYpos_height125_complete = false;

    is_walkYpos_height200_complete = false;

    is_walkYpos_height375_complete = false;

    is_walkYpos_heightRand_complete = false;



      var randPos = Math.floor(Math.random() * fullyGrownArray.length-1) + 1;
      randPosGlobal = randPos;

      addedXtime = fullyGrownArray[randPos].x - Math.floor(fullyGrownArray[randPos].x/4);

      if (fullyGrownArray[randPos].y <= 2) {
        addedYtime = 3;
      }
      else if (fullyGrownArray[randPos].y <= 4) {
        addedYtime = 2;
      }
      else if (fullyGrownArray[randPos].y <= 9) {
        addedYtime = 2;
      }
      else if (fullyGrownArray[randPos].y <= 14) {
        addedYtime = 3;
      }

      if (fullyGrownArray[randPos].x <= 3) {
        addedXtime = 5;
      }
      else if (fullyGrownArray[randPos].x <= 5) {
        addedXtime = 6;
      }
      else if (fullyGrownArray[randPos].x <= 12) {
        addedXtime = 10;
      }

    //  console.log(randPos)

        var rand = Math.floor(Math.random() * 4) + 1;
          if (rand != 0 || firstAtk == false) {
            timerAmt = 6 + addedXtime + addedYtime;
            firstAtk = true;
          atkBool = true;
          myDivWalk.show();
          walkXpos = 350;
          walkYpos = 75;
          //myDiv.show();

          walk = true;
          timer(randPos);
          grid[fullyGrownArray[randPos].x][fullyGrownArray[randPos].y].attack();
          console.log("yes");
          //setTimeout(() => {  mouseClick(); }, 3000); //3 second countdown to hold down mouse after attacker appears
                //make countdown random between 3 and 15 seconds

          }
          else {
            atkBool = false;
            myDiv.hide();
            console.log("no");
          }
        }
          tid = setTimeout(attacker, timerAmt*1000); //repeat every x seconds after activating once



    //  }
    //}
  }


var is_walkYpos_height125_complete = false;

var is_walkYpos_height200_complete = false;

var is_walkYpos_height375_complete = false;

var is_walkYpos_heightRand_complete = false;


var lessY = false;

var pause = false;
var pausePressed = false;


  function draw() {

    //for square highlight
      //stroke(20);
      //fill('#8bbaea');
    //rect(this.x, this.y, this.w, this.h); //remove this


    if (document.hasFocus() == false) {
      pause = true;
    }
    else {
      pause = false;
    }

    //screen barriers for player
    if (avatarX < 550) {
      avatarX = 552;
    }
    else if (avatarX > 1137) {
      avatarX = 1135;
    }
    if (avatarY < 15) {
      avatarY = 17;
    }

    // if (avatarX >= walkXpos && avatarX <= walkXpos+20) {
    //   avatarX = walkXpos-20;
    //   avatar_pour_defaultL.hide();
    //   carryDirection = "right";
    // }

       for (var i = 0; i < numcol; i++) {
          for (var j = 0; j< numrow; j++){
            //if (i != 2 && i != 3 && i != 6 && i != 7 && j != 2 && j != 5 && j != 6 && j != 9) {
            if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && j != 3 && j != 4 && j != 8 && j != 9 && j != 10 && j != 14 && j != 15) {

              grid[i][j].show();
            }


              // if (grid[i][j].contains(mouseX+32, mouseY+30))
              // {
              //     if (mouseIsPressed) {
              //       image(wcPour,mouseX,mouseY,44,44);
              //
              //     }
              //     else {
              //       image(wc,mouseX,mouseY,32,28);
              //     }
              // }

          }
      }

  if (pause == false && pausePressed == false) {

//walk in for lumberjacks
  myDivWalk.position(walkXpos, walkYpos);

  //x=375 y=75
  if (walkYpos <= 125 && is_walkYpos_height125_complete == false) {
    walkYpos+=2.5; //can change speeds for harder levels
    //change to 1.5 after testing
  }
  else if (walkYpos <= 200 && is_walkYpos_height200_complete == false) {
    walkYpos+=2.5;
    is_walkYpos_height125_complete = true;
  }
  else if (walkXpos <= 400) {
    walkXpos+=2.5;
    is_walkYpos_height200_complete = true;
  }
  else if (walkYpos <= 375 && is_walkYpos_height375_complete == false) {
    walkYpos+=2.5;
  }
  else if (walkXpos <= 525) {
    walkXpos+=2.5;
    is_walkYpos_height375_complete = true;
  }

  else if (atkBool == true && (walkXpos <= fullyGrownArray[randPosGlobal].xPos && walkYpos <= fullyGrownArray[randPosGlobal].yPos)){
    walkXpos+=2;
    walkYpos+=2;
      //console.log(walkXpos);
      console.log(walkYpos)
      exitXpos = walkXpos;
      exitYpos = walkYpos;
  }
  else if (atkBool == true && fullyGrownArray[randPosGlobal].yPos <= walkYpos-5 && is_walkYpos_heightRand_complete == false) {
    if (walkXpos <= fullyGrownArray[randPosGlobal].xPos){
      walkXpos += 2;
    }

    walkYpos-=3;
    console.log(walkYpos)
    exitXpos = walkXpos;
    exitYpos = walkYpos;

  }
  else if (atkBool == true && walkXpos <= fullyGrownArray[randPosGlobal].xPos) {
    //if (walkYpos >= fullyGrownArray[randPosGlobal].yPos){
    //  walkXpos+=2;
    //  walkYpos-=2;
    //}
    //else {
    walkXpos+=2;
    console.log('extra-x')
    //}
    exitXpos = walkXpos;
    exitYpos = walkYpos;
  }
  else if (atkBool == true && walkYpos <= fullyGrownArray[randPosGlobal].yPos) {
    walkYpos+=2;
    console.log('extra-y')
    exitXpos = walkXpos;
    exitYpos = walkYpos;

  }


  else if (atkBool == true && fullyGrownArray[randPosGlobal].yPos == walkYpos-4.5) {
    is_walkYpos_heightRand_complete = true;
    console.log('active') //activates but still doesnt work on restart timer
  }

  else if ((timeLeftGlobal <= 1 || successAttack == true) && atkBool == true) {
    console.log('hi');
    myDivWalk.hide();
    myDiv.hide();
    //walkYpos = 900; //just shoot it off screen for 1 second
    is_walkYpos_height125_complete = false;

    is_walkYpos_height200_complete = false;

    is_walkYpos_height375_complete = false;
  }





  // else if (atkBool == true && timerActive == false){ //doesnt work upon restart of attacker for upper y's
  //   is_walkYpos_height125_complete = false;
  //
  //   is_walkYpos_height200_complete = false;
  //
  //   is_walkYpos_height375_complete = false;
  //
  //   lessY = false;
  //
  //   console.log(walkYpos)
  //
  // }



  else if (walkXpos <= 5){ //for "attack"ing enemy mid walk - moves & hides them
    myDivWalk.hide();
    myDiv.hide();

  }

  if (atkBool == true && walkXpos >= fullyGrownArray[randPosGlobal].xPos - 10 && (walkYpos >= fullyGrownArray[randPosGlobal].yPos - 10 && walkYpos <= fullyGrownArray[randPosGlobal].yPos + 10)) {
    myDivWalk.hide();
    myDiv.position(walkXpos - 10, walkYpos - 15);
    myDiv.show();

    walk = false;

  }

//exit walk

  if (timeLeftGlobal <= addedYtime + addedXtime - Math.floor(addedXtime/3) && timerActive == true && successAttack == false) {

    myDiv.hide();
    enemyExit.position(exitXpos,exitYpos);
    enemyExit.show();
    if (exitYpos <= 375 && exitXpos >= 525) {
      exitYpos +=2.5;
    }
    else if (exitXpos >= 525) {
      exitXpos-=2.5; //can change speeds for harder levels
      //change to 1.5 after testing
    }
    else if (exitYpos >= 375) {
      exitYpos-=2.5;
    }
    else if (exitXpos >= 400) {
      exitXpos-=2.5;
    }
    else if (exitYpos >= 200) {
      exitYpos -=2.5;
    }
    else if (exitXpos >= 325) {
      exitXpos -=2.5;
    }
    else if (exitYpos >= 75) {
      exitYpos -=2.5;
    }
    else if (exitYpos <= 78) {
      enemyExit.hide();
    }
  }
  else {
    enemyExit.hide();
  }







  if (walk == true || atkBool == false) {
    myDiv.hide();
  }






      // myDivWalk.position(walkXpos, walkYpos);
      // walkXpos++;
      //
      //
      //
      // if (walkXpos > 550) {
      //   myDivWalk.hide();
      //   myDiv.show();
      //
      //
      //   walk = false;
      //   walkXpos = 350;
      //   walkYpos = 100;
      // }
      // else if (walkXpos == 1){ //for "attack"ing enemy mid walk
      //   myDivWalk.hide();
      //   myDiv.hide();
      //
      // }
      // if (walk == true || atkBool == false) {
      //   myDiv.hide();
      // }





//bear avatar movement
      avatar_walk_right.hide();
      avatar_walk_up.hide();
      avatar_walk_left.hide();
      avatar_walk_down.hide();

      avatar_carry_right.hide();
      avatar_carry_up.hide();
      avatar_carry_left.hide();
      avatar_carry_down.hide();

      if (waterCan == false) {
        avatar_carry_defaultL.hide();
        avatar_carry_defaultR.hide();
        avatarMove(avatar_walk_right, avatar_walk_left, avatar_walk_up, avatar_walk_down, avatar_default, avatar_default, moveSpeed, extraXdef, extraYdef, avatar_pour_defaultL, avatar_pour_defaultR, avatar_pour_left, avatar_pour_right, avatar_pour_up, avatar_pour_down); }
      else {
        avatar_default.hide();
        avatarMove(avatar_carry_right, avatar_carry_left, avatar_carry_up, avatar_carry_down, avatar_carry_defaultL, avatar_carry_defaultR, moveSpeed_can, extraXcarry, extraYcarry, avatar_pour_defaultL, avatar_pour_defaultR, avatar_pour_left, avatar_pour_right, avatar_pour_up, avatar_pour_down);
        // if (waterCanActive == true ) {
        //   avatar_default.hide();
        //
        //   avatarMove(avatar_carry_pour, avatar_carry_left, avatar_carry_up, avatar_carry_down, avatar_carry_pour, moveSpeed_can, extraYcarry);
        // }
      }


    }

  }

  //make game only play once start is selected
  //add score counter


function storeCoordinate(xVal, yVal, array) {
      //array.push({x: xVal, y: yVal, xPos: 615+(xVal*43), yPos: 75+(yVal*43)});
      array.push({x: xVal, y: yVal, xPos: 615+(xVal*28), yPos: 75+(yVal*28)});
  }
