//add all 5 pour animations
  function avatarMove(right, left, up, down, defaultPosL, defaultPosR, speed, extraX, extraY, pourDefaultLeft, pourDefaultRight, pourLeft, pourRight, pourUp, pourDown) {

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

          }
          else {
            defaultPosR.hide(); //remove?
            defaultPosL.show();
          }


          if (keyIsDown(86) && waterCan == true) {

            if (pourDirection === "right")
            {
              pourDefaultRight.position(avatarX-11, avatarY - extraY - 1.5);
              pourDefaultRight.show();
              defaultPosL.hide();
              defaultPosR.hide();
            }
            else {
              pourDefaultLeft.position(avatarX-11, avatarY - extraY - 1.5);
              pourDefaultLeft.show();
              defaultPosL.hide();
              defaultPosR.hide();

            }


          }
          else {
            pourDefaultLeft.hide();
            pourDefaultRight.hide();

          }



            if (keyIsDown(UP_ARROW) || keyIsDown(87)) { //w
              pourUp.hide();
              pourDown.hide();
              pourLeft.hide();
              pourRight.hide();
              pourDefaultLeft.hide();
              pourDefaultRight.hide();
              pourDirection = "left";
              carryDirection = "left";

              up.show();

              up.position(avatarX, avatarY-extraY);

              right.hide();
              left.hide();
              down.hide();
              defaultPosL.hide();
              defaultPosR.hide();


                    if (keyIsDown(86) && waterCan == true) {
                      pourUp.position(avatarX-11, avatarY - extraY - 1.5);
                      up.hide();
                      pourUp.show();
                      speed = speed-0.5;
                    }


                      //


              avatarY -= speed;

            }

            if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { //s
              pourUp.hide();
              pourDown.hide();
              pourLeft.hide();
              pourRight.hide();
              pourDefaultLeft.hide();
              pourDefaultRight.hide();
              pourDirection = "right";
              carryDirection = "right";

              down.show();

              down.position(avatarX-extraX, avatarY-extraY);

              right.hide();
              up.hide();
              left.hide();
              defaultPosL.hide();
              defaultPosR.hide();


                    if (keyIsDown(86) && waterCan == true) {
                      pourDown.position(avatarX-11, avatarY - extraY - 1.5);

                      down.hide();
                      pourDown.show();
                      speed = speed-0.5;
                    }






              avatarY += speed;

            }

            if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { //a
              pourUp.hide();
              pourDown.hide();
              pourLeft.hide();
              pourRight.hide();
              pourDefaultLeft.hide();
              pourDefaultRight.hide();
              pourDirection = "left";
              carryDirection = "left";


                left.show();

                left.position(avatarX, avatarY-extraY);

                right.hide();
                up.hide();
                down.hide();
                defaultPosL.hide();
                defaultPosR.hide();


                      if (keyIsDown(86) && waterCan == true) {
                        pourLeft.position(avatarX-11, avatarY - extraY - 1.5);

                        left.hide();
                        pourLeft.show();
                        speed = speed-0.5;
                      }



                avatarX -= speed;
              }

            if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { //d
              pourUp.hide();
              pourDown.hide();
              pourLeft.hide();
              pourRight.hide();
              pourDefaultLeft.hide();
              pourDefaultRight.hide();
              pourDirection = "right";
              carryDirection = "right";


              right.show();

              right.position(avatarX-extraX, avatarY-extraY);

              left.hide();
              up.hide();
              down.hide();
              defaultPosL.hide();
              defaultPosR.hide();



                      if (keyIsDown(86) && waterCan == true) {
                        pourRight.position(avatarX-11, avatarY- extraY-1.5);

                        right.hide();
                        pourRight.show();
                        speed = speed-0.5;
                      }

              avatarX += speed;
            }



            defaultPosL.position(avatarX, avatarY - extraY);
            defaultPosR.position(avatarX-extraX, avatarY - extraY);





  }



var successAttack = false;

function timerPlants(stage, time, i, j) {
  grid[i][j].plantTimer = true;

  var timeLeft = time;

  var downTimer = setInterval(function() {

    timeLeft = timeLeft - 1;
    if (timeLeft <= 0){
      grid[i][j].plantTimer = false;
      clearInterval(downTimer);

      if (stage === 1) {
        //enemies wont be a problem because this stage wont be attacked at first
        grid[i][j].second();
      }
      else if (stage === 2) {
        //enemies wont be a problem because this stage wont be attacked at first
        grid[i][j].third();
      }
      else if (stage === 3) {
        //enemies wont be a problem because this stage wont be attacked at first
        grid[i][j].fourth();
      }
      else if (stage === 4) {
        //enemies wont be a problem because this stage wont be attacked at first
        grid[i][j].fifth();
        storeCoordinate(i,j,fullyGrownArray); //instead of storing coordinate here, do it after grid[i][j] activates final stage in timer function

      }




    }
  }, 1000);

}


function plantStage(i, j) {

if (grid[i][j].stg1bool == true) {
   if (grid[i][j].stg1wbool == false && grid[i][j].plantTimer === false) {
    grid[i][j].firstWet();
    //storeCoordinate(i,j,fullyGrownArray);
    grid[i][j].stg1wbool = true;
    timerPlants(1, 6, i, j);
  }

  else if (grid[i][j].stg2wbool == false && grid[i][j].plantTimer === false) {
    grid[i][j].secondWet();
    //storeCoordinate(i,j,fullyGrownArray);
    grid[i][j].stg2wbool = true;
    timerPlants(2, 6, i, j);
  }

  else if (grid[i][j].stg3wbool == false && grid[i][j].plantTimer === false) {
    grid[i][j].thirdWet();
    //storeCoordinate(i,j,fullyGrownArray);
    grid[i][j].stg3wbool = true;
    timerPlants(3, 6, i, j);
  }
  else if (grid[i][j].stg4wbool == false && grid[i][j].plantTimer === false) {
    grid[i][j].fourthWet();
    //storeCoordinate(i,j,fullyGrownArray);
    grid[i][j].stg4wbool = true;
    timerPlants(4, 6, i, j);
  }
}






}


  function keyPressed() {

    if (keyCode == 80) { //p
      pausePressed = true;
    }
    if (keyCode == 79) { //o
      pausePressed = false;
    }

    //plant seed
    if (keyCode === 71) { //g

    }

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

    if ((keyCode == 86 && waterCan == true) || keyCode == 71) { //set to V for now but set to 32=spacebar once sizes are fixed
   for (var i = 21; i < numcol; i++) {
    for (var j = 2; j < numrow; j++){
    if (i != 24 && i != 25 && i != 26 && i != 30 && i != 31 && i != 32 && j != 5 && j != 6 && j != 10 && j != 11 && j != 12 && j != 16 && j != 17) {
    //if (i != 23 && i != 17 && i != 20 && i != 21 && j != 3 && j != 6 && j != 7 && j != 10) {

      if (grid[i][j].contains(avatarX-10, avatarY-10)) {
          if (keyCode == 86) {
          plantStage(i-21,j-2); }
          else {
            if (grid[i-21][j-2].stg1bool == false) {
              grid[i-21][j-2].first(); //stg1
              grid[i-21][j-2].stg1bool = true;
            }
          }

          //grid[i-21][j-2].second(); //change from fifth. use timer to increment
          //storeCoordinate(i-21,j-2,fullyGrownArray);
          if (firstAtk == false) {attacker(); }//only activate on if statement condition

      }
    }
  }
  }
   waterCanActive = true;
 }
 else {
   waterCanActive = false;
 }




    if (keyCode === 69 && timerActive === true && timeLeftGlobal >= 3) {
        if (avatarX-50 <= walkXpos && avatarX+50 >= walkXpos) {
          if (avatarY-50 <= walkYpos && avatarY+50 >= walkYpos) {

        console.log('e down');
        myDiv.hide();
        myDivWalk.hide();
      //  grid[0][0].success();
        grid[fullyGrownArray[randPosGlobal].x][fullyGrownArray[randPosGlobal].y].success();
        walkXpos = 0;
        myDiv.style('z-index', '-100');
        successAttack = true;
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
    if (keyCode === 70 && firstClick == true) { //F
      waterCan = true;
      firstClick = false;
    }
    else if (keyCode === 70 && firstClick == false) {
      waterCan = false;
      firstClick = true;
    }


  }




  function waterCanPour(curr) {
    if (keyIsDown(86) && waterCan == true) {
      pour.position(avatarX, avatarY);
      pour.show();

      up.hide();

    }
    else {
      pour.hide();
    }
  }
