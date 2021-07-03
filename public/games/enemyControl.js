//walkXpos & walkYpos for farmer1
//walkXpos2 & walkYpos2 for farmer2
//walkXpos3 & walkYpos3 for farmer3

//enemyMove(farmerNum, walkX, walkY, )
function enemyMove() {
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
}
