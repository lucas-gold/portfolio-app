//add all 5 pour animations
function avatarMove(
  right,
  left,
  up,
  down,
  defaultPosL,
  defaultPosR,
  speed,
  extraX_L,
  extraX_R,
  extraY,
  pourDefaultLeft,
  pourDefaultRight,
  pourLeft,
  pourRight,
  pourUp,
  pourDown
) {
  //bear avatar movement

  pourDefaultLeft.hide();
  pourDefaultRight.hide();
  pourUp.hide();
  pourDown.hide();
  pourLeft.hide();
  pourRight.hide();

  if (carryDirection === "right") {
    defaultPosL.hide(); //remove?
    defaultPosR.show();
  } else {
    defaultPosR.hide(); //remove?
    defaultPosL.show();
  }

  //add vars for 86 & waterCan so it can be adapted to seed planting, sword swing, etc
  //replace all occurences of pour with more generic name
  if ((keyIsDown(69) && waterCan == true) || (keyIsDown(69) && spear == true)) {
    if (pourDirection === "right") {
      pourDefaultRight.position(avatarX - 11, avatarY - extraY - 1.5);
      pourDefaultRight.show();
      defaultPosL.hide();
      defaultPosR.hide();
    } else {
      pourDefaultLeft.position(avatarX - 30, avatarY - extraY - 1.5);
      pourDefaultLeft.show();
      defaultPosL.hide();
      defaultPosR.hide();
    }
  } else {
    pourDefaultLeft.hide();
    pourDefaultRight.hide();
  }

  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    //w
    pourUp.hide();
    pourDown.hide();
    pourLeft.hide();
    pourRight.hide();
    pourDefaultLeft.hide();
    pourDefaultRight.hide();
    pourDirection = "left";
    carryDirection = "left";

    up.show();

    up.position(avatarX - extraX_L, avatarY - extraY);

    right.hide();
    left.hide();
    down.hide();
    defaultPosL.hide();
    defaultPosR.hide();

    if (
      (keyIsDown(69) && waterCan == true) ||
      (keyIsDown(69) && spear == true)
    ) {
      pourUp.position(avatarX - 30, avatarY - extraY - 1.5);
      up.hide();
      pourUp.show();
      speed = speed - 0.5;
    }

    //

    avatarY -= speed;
  }

  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    //s
    pourUp.hide();
    pourDown.hide();
    pourLeft.hide();
    pourRight.hide();
    pourDefaultLeft.hide();
    pourDefaultRight.hide();
    pourDirection = "right";
    carryDirection = "right";

    down.show();

    down.position(avatarX - extraX_R, avatarY - extraY);

    right.hide();
    up.hide();
    left.hide();
    defaultPosL.hide();
    defaultPosR.hide();

    if (
      (keyIsDown(69) && waterCan == true) ||
      (keyIsDown(69) && spear == true)
    ) {
      pourDown.position(avatarX - 11, avatarY - extraY - 1.5);

      down.hide();
      pourDown.show();
      speed = speed - 0.5;
    }

    avatarY += speed;
  }

  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    //a
    pourUp.hide();
    pourDown.hide();
    pourLeft.hide();
    pourRight.hide();
    pourDefaultLeft.hide();
    pourDefaultRight.hide();
    pourDirection = "left";
    carryDirection = "left";

    left.show();

    left.position(avatarX - extraX_L, avatarY - extraY);

    right.hide();
    up.hide();
    down.hide();
    defaultPosL.hide();
    defaultPosR.hide();

    if (
      (keyIsDown(69) && waterCan == true) ||
      (keyIsDown(69) && spear == true)
    ) {
      pourLeft.position(avatarX - 30, avatarY - extraY - 1.5);

      left.hide();
      pourLeft.show();
      speed = speed - 0.5;
    }

    avatarX -= speed;
  }

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    //d
    pourUp.hide();
    pourDown.hide();
    pourLeft.hide();
    pourRight.hide();
    pourDefaultLeft.hide();
    pourDefaultRight.hide();
    pourDirection = "right";
    carryDirection = "right";

    right.show();

    right.position(avatarX - extraX_R, avatarY - extraY);

    left.hide();
    up.hide();
    down.hide();
    defaultPosL.hide();
    defaultPosR.hide();

    if (
      (keyIsDown(69) && waterCan == true) ||
      (keyIsDown(69) && spear == true)
    ) {
      pourRight.position(avatarX - 11, avatarY - extraY - 1.5);

      right.hide();
      pourRight.show();
      speed = speed - 0.5;
    }

    avatarX += speed;
  }

  defaultPosL.position(avatarX - extraX_L, avatarY - extraY);
  defaultPosR.position(avatarX - extraX_R, avatarY - extraY);
}

var successAttack = false;

function timerPlants(stage, time, i, j) {
  grid[i][j].plantTimer = true;

  var timeLeft = time;

  var downPlantTimer = setInterval(function () {
    timeLeft = timeLeft - 1;
    if (timeLeft <= 0) {
      grid[i][j].plantTimer = false;
      clearInterval(downPlantTimer);

      if (stage === 1) {
        grid[i][j].second();
      } else if (stage === 2) {
        grid[i][j].third();
      } else if (stage === 3) {
        grid[i][j].fourth();
      } else if (stage === 4) {
        grid[i][j].fifth();
        if (fullyGrownArray.length == 0) {
          timerAtk = new Timer(attacker, timerAmt * 1000);
        }
        storeCoordinate(i, j, fullyGrownArray); //for attacker
      }
    }
  }, 6000);
}

function plantStage(i, j) {
  if (grid[i][j].stg1bool == true) {
    if (grid[i][j].stg1wbool == false && grid[i][j].plantTimer === false) {
      grid[i][j].firstWet();
      //storeCoordinate(i,j,fullyGrownArray);
      grid[i][j].stg1wbool = true;
      timerPlants(1, 1, i, j);
    } else if (
      grid[i][j].stg2wbool == false &&
      grid[i][j].plantTimer === false
    ) {
      grid[i][j].secondWet();
      grid[i][j].stg2wbool = true;
      timerPlants(2, 1, i, j);
    } else if (
      grid[i][j].stg3wbool == false &&
      grid[i][j].plantTimer === false
    ) {
      grid[i][j].thirdWet();
      grid[i][j].stg3wbool = true;
      timerPlants(3, 1, i, j);
    } else if (
      grid[i][j].stg4wbool == false &&
      grid[i][j].plantTimer === false
    ) {
      grid[i][j].fourthWet();
      grid[i][j].stg4wbool = true;
      timerPlants(4, 1, i, j);
    }
  }
}
resumePressed = false;

function keyPressed() {
  //will come out for multiple crops but only those already planted once timerAtk starts
  if (keyCode == 80) {
    //p
    timerAtk.pause();
    pausePressed = true;
  }
  if (keyCode == 79) {
    //o
    pausePressed = false;
    //  timerAtk.resume();
    timerAtk = new Timer(attacker, timerAmt * 1000);
  }

  //plant seed

  //water tree
  // if (keyCode == 86 && waterCan == true) { //set to V for now but set to 32=spacebar once sizes are fixed
  //   for (var i = 0; i < numcol; i++) {
  //    for (var j = 0; j < numrow; j++){
  //      //if (i != 16 && i != 17 && i != 20 && i != 21 && j != 3 && j != 6 && j != 7 && j != 10) {
  //      if (i != 3 && i != 4 && i != 5 && i != 9 && i != 10 && i != 11 && j != 3 && j != 4 && j != 8 && j != 9 && j != 10 && j != 14 && j != 15) {
  //      //if (i != 23 && i != 24 && i != 25 && i !=  && i != 10 && i != 11 && j != 3 && j != 4 && j != 8 && j != 9 && j != 10 && j != 14 && j != 15) {
  //      //console.log(grid[i][j].y)
  //      //console.log(avatarY)
  //
  //      if (grid[i][j].contains(avatarX-235, avatarY-10)) {
  //        console.log("yesin");
  //          grid[i-13][j-2].fifth(); //change from fifth. use timer to increment
  //          storeCoordinate(i,j,fullyGrownArray);
  //          console.log(fullyGrownArray[0].x);
  //          if (firstAtk == false) {attacker(); }//only activate on if statement condition
  //
  //      }
  //   }
  //  }
  //  }
  //   waterCanActive = true;
  // }
  // else {
  //   waterCanActive = false;
  // }

  //add var for seedSelected and pass to plantStage and first()
  //change (keyCode == 71 ) to (keycode == 71 && seedOut == true)
  //only plant when seed planter animation is running i.e. seedOut == true
  if (
    (keyCode == 69 && waterCan == true) ||
    (keyCode == 69 && holdSeedPumpkin == true) ||
    keyCode == 72
  ) {
    //set to V for now but set to 32=spacebar once sizes are fixed
    for (var i = 14; i < numcol; i++) {
      for (var j = 1; j < numrow; j++) {
        //if (i != 24 && i != 25 && i != 26 && i != 30 && i != 31 && i != 32 && j != 5 && j != 6 && j != 10 && j != 11 && j != 12 && j != 16 && j != 17) {
        //if (i != 23 && i != 17 && i != 20 && i != 21 && j != 3 && j != 6 && j != 7 && j != 10) {
        if (
          i != 16 &&
          i != 17 &&
          i != 20 &&
          i != 21 &&
          j != 3 &&
          j != 6 &&
          j != 7 &&
          j != 10
        ) {
          if (grid[i][j].contains(avatarX - 10, avatarY - 10)) {
            if (keyCode == 69 && waterCan == true) {
              plantStage(i - 14, j - 1);
            } else if (keyCode == 69 && holdSeedPumpkin == true) {
              //g
              if (grid[i - 14][j - 1].stg1bool == false) {
                grid[i - 14][j - 1].first(); //stg1
                grid[i - 14][j - 1].stg1bool = true;
              }
            } else if (
              keyCode == 72 &&
              grid[i - 14][j - 1].fifthStage == true
            ) {
              //h
              //make it so if myDiv is active it's too late
              //shovel should take 3ish seconds to dig up anyway
              //maybe use keyIsDown in draw() for that.
              if (atkBool == true) {
                myDivWalk.hide();
                myDiv.hide();
                atkBool = false;
              }
              grid[i - 14][j - 1] = new cell(
                i - 14,
                j - 1,
                grid[i - 14][j - 1].w
              ); //reset crop
              fullyGrownArray.splice(randPosGlobal, 1);

              //enemyExit.position(0,0);

              console.log("here");
            }

            //grid[i-21][j-2].second(); //change from fifth. use timer to increment
            //storeCoordinate(i-21,j-2,fullyGrownArray);
            if (firstAtk == false) {
              attacker();
            } //only activate on if statement condition
          }
        }
      }
    }
    waterCanActive = true;
  } else {
    waterCanActive = false;
  }

  if (
    keyCode === 69 &&
    timerActive === true &&
    timeLeftGlobal >= 3 &&
    spear === true
  ) {
    if (avatarX - 50 <= walkXpos && avatarX + 50 >= walkXpos) {
      if (avatarY - 50 <= walkYpos && avatarY + 50 >= walkYpos) {
        console.log("e down");
        myDiv.hide();
        myDivWalk.hide();
        //  grid[0][0].success();
        grid[fullyGrownArray[randPosGlobal].x][
          fullyGrownArray[randPosGlobal].y
        ].success();
        walkXpos = 0;
        myDiv.style("z-index", "-100");
        successAttack = true;

        timerAtk.pause();
        timerAtk.resume();
        timerActive = false;
        clearInterval(downTimer);
        timerDiv.hide();
      }
    }
  }
  //else if (timerActive === false && atkBool === true) {
  //  console.log('expired');
  //  grid[0][0].failed();
  //}

  //attack
  //use keyIsDown in different function instead
  //add else statement for if key isnt down when time expires
  //crops fully grown get attacked - avoid by harvesting & replanting fast yourself
  //add fully grown crops to array - randomly choose array grid[x,y] value to attack
  //              if (keyCode === 69 && atkBool === true) { //e
  //for (var p = 0; p < numcol; p++) {
  //for (var q = 0; q < numrow; q++){

  //                   if (grid[0][0].contains(avatarX-630, avatarY-70)) {

  //                     grid[0][0].success();
  //                     myDiv.hide();
  //                     console.log('yes')
  //                     console.log(avatarX)
  //                     console.log(walkXpos)
  //                     console.log(walkYpos)

  //                   }
  //                   else if (avatarX >= walkXpos-100 && avatarX <= walkXpos+100) {
  //                     grid[0][0].success();
  //                     myDiv.hide()

  //                   }

  // else {
  //   console.log(avatarX)
  //   console.log(avatarY)
  //   console.log(grid[0][0].x)
  //   console.log(grid[0][0].y)
  //   console.log('no')
  //   grid[0][0].failed();
  //   //attackTrue = false;
  //   //clearInterval(tidClick);
  // }
  // }
  //}

  //bottom right only

  //console.log(mouseX);
  //console.log(mouseY);
  //console.log(attackSuccess);

  //attackTrue = true;
  //clearInterval(tidClick);
  //              }

  //switch to water can
  if (keyCode === 51 && firstClick == true) {
    //F
    waterCan = true;
    spear = false;
    firstClickSpear = true;
    firstClick = false;

    holdSeedPumpkin = false;
    firstClickHoldSeedPumpkin = true;
  } else if (keyCode === 51 && firstClick == false) {
    waterCan = false;
    firstClick = true;
  }

  if (keyCode === 49 && firstClickSpear == true) {
    //1 - switch to spear
    spear = true;
    waterCan = false;
    firstClick = true;
    firstClickSpear = false;

    holdSeedPumpkin = false;
    firstClickHoldSeedPumpkin = true;
  } else if (keyCode === 49 && firstClickSpear == false) {
    //1 - switch from spear
    spear = false;
    firstClickSpear = true;
  }

  if (keyCode === 50 && firstClickHoldSeedPumpkin == true) {
    //2 - switch to seed
    holdSeedPumpkin = true;
    spear = false;
    waterCan = false;

    firstClick = true;
    firstClickSpear = true;
    firstClickHoldSeedPumpkin = false;
  } else if (keyCode === 50 && firstClickHoldSeedPumpkin == false) {
    //2 - switch to seed
    holdSeedPumpkin = false;
    firstClickHoldSeedPumpkin = true;
  }
}

function waterCanPour(curr) {
  if (keyIsDown(86) && waterCan == true) {
    pour.position(avatarX, avatarY);
    pour.show();

    up.hide();
  } else {
    pour.hide();
  }
}
