function preload() {


  stg1 = loadImage('images/crop_stg0_v3.png');
  stg2 = loadImage('images/stage2copy.png');
  stg3 = loadImage('images/stage4.png');
  stg4 = loadImage('images/stage4.png');
  stg5 = loadImage('images/pumpkin_stg1.png');
  stg6 = loadImage('images/stage6.png');
  stg7 = loadImage('images/stage7.png');
  stg8 = loadImage('images/stage8new.png');

  wc = loadImage('images/watercan1.png');
  wcPour = loadImage('images/watercan2.png');

  avatar_walk_down = createImg('images/bear_walk_down.gif');
  avatar_walk_up = createImg('images/bear_walk_up.gif');
  avatar_walk_left = createImg('images/bear_walk_left.gif');
  avatar_walk_right = createImg('images/bear_walk_right.gif');
  avatar_default = createImg('images/bear_default.png'); //

  avatar_carry_left = createImg('images/can_left.gif');
  avatar_carry_right = createImg('images/can_right.gif');
  avatar_carry_up = createImg('images/can_left.gif');
  avatar_carry_down = createImg('images/can_right.gif');
  avatar_carry_defaultL = createImg('images/carry_left_default.gif');
  avatar_carry_defaultR = createImg('images/carry_right_default.gif');


  avatar_pour_left = createImg('images/canPour_left.gif');
  avatar_pour_right = createImg('images/canPour_right.gif');
  avatar_pour_up = createImg('images/canPour_left.gif');
  avatar_pour_down = createImg('images/canPour_right.gif');
  avatar_pour_defaultL = createImg('images/canPour_left_default.gif');
  avatar_pour_defaultR = createImg('images/canPour_right_default.gif');



  avatar_default.size(27,40);
  avatar_walk_down.size(27,40);
  avatar_walk_up.size(27,40);
  avatar_walk_left.size(27,40);
  avatar_walk_right.size(27,40);


  avatar_carry_defaultL.size(48, 55);
  avatar_carry_defaultR.size(48, 55);
  avatar_carry_left.size(48, 55);
  avatar_carry_right.size(48, 55);
  avatar_carry_up.size(48, 55);
  avatar_carry_down.size(48, 55);

  avatar_pour_defaultL.size(52,55);
  avatar_pour_defaultR.size(52,55);
  avatar_pour_left.size(52,55);
  avatar_pour_right.size(52,55);
  avatar_pour_up.size(52,55);
  avatar_pour_down.size(52,55);


  avatar_default.style('z-index', '10');
  avatar_walk_down.style('z-index', '10');
  avatar_walk_up.style('z-index', '10');
  avatar_walk_left.style('z-index', '10');
  avatar_walk_right.style('z-index', '10');


  avatar_carry_defaultL.style('z-index', '10');
  avatar_carry_defaultR.style('z-index', '10');
  avatar_carry_left.style('z-index', '10');
  avatar_carry_right.style('z-index', '10');
  avatar_carry_up.style('z-index', '10');
  avatar_carry_down.style('z-index', '10');

  avatar_pour_defaultL.style('z-index', '10');
  avatar_pour_defaultR.style('z-index', '10');
  avatar_pour_left.style('z-index', '10');
  avatar_pour_right.style('z-index', '10');
  avatar_pour_up.style('z-index', '10');
  avatar_pour_down.style('z-index', '10');
  //add up and down



}


function cell (i, j, w){

    this.x = i*w;
    this.y = j*w;
    this.w = w;
    this.h = w;

    this.over = false;

    this.firstStage = true;
    this.secondStage = false;
    this.thirdStage = false;
    this.fourthStage = false;
    this.fifthStage = false;
    this.sixthStage = false;

    this.attackStage = false;

    this.attackSuccess = false;
    this.attackFailed = false;
//  }

}



cell.prototype.show = function() {


  if (this.firstStage) {
    //backgroundImg(this.x,this.y,this.w,this.h);

  //  stage1 = createImg('images/stage1copy2.png', 'stg1');
    //stage1.position(this.x+610,this.y+90);
    //stage1.size(35,35);
      image(stg1, this.x+100, this.y+135, 28, 28);



    }
  if (this.secondStage) {
    //backgroundImg(this.x,this.y,this.w,this.h);

    image(stg2, this.x+100, this.y+135, 32, 32);
  }

  if (this.thirdStage) {


  //  image(stg3, this.x+103, this.y+125, 30, 30);
  }
  if (this.fourthStage) {
  }
  if (this.fifthStage) {
    //backgroundImg(this.x,this.y,this.w,this.h);

    image(stg5, this.x+100, this.y+135, 28, 28);

  }
  if (this.sixthStage) {
    //backgroundImg(this.x,this.y,this.w,this.h);

    image(stg6, this.x+90, this.y+75, 50, 80);

  }
  if (this.seventhStage) {
  //  backgroundImg(this.x,this.y,this.w,this.h);

  image(stg2, this.x+100, this.y+135, 15, 15); //make img1 include brown dirt surrounding it

  //  image(stg7, this.x+80, this.y+40, 70, 120);
  }
  if (this.eighthStage) {
    //image(img1, this.x, this.y, this.w, this.w);
    //backgroundImg(this.x,this.y,this.w,this.h);

    image(stg8, this.x+80, this.y+40, 70, 120);
  }




  if (this.attackStage) {
  //  image(img6, this.x, this.y, this.w/2, this.w/2);
    //myDiv.show();
  }
  if (this.attackSuccess) {
    console.log("success");
    myDiv.hide();
    this.attackSuccess = false;
  }
  if (this.attackFailed) {
    console.log("failed");
    this.attackFailed = false;
    clearTimeout(tid);
    gameover();
  }

}
cell.prototype.contains = function (x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this. w )
}

cell.prototype.endGame = function () {
    this.over = true;
}
cell.prototype.success = function() {
    this.attackSuccess = true;
}
cell.prototype.failed = function() {
    this.attackFailed = true;
}
cell.prototype.attack = function() {
    this.attackStage = true;
}


cell.prototype.first = function() {
    this.firstStage = true;
}
cell.prototype.second = function() {
    this.secondStage = true;
}
cell.prototype.third = function() {
    this.thirdStage = true;
}
cell.prototype.fourth = function() {
    this.fourthStage = true;
}
cell.prototype.fifth = function() {
    this.fifthStage = true;
}
cell.prototype.sixth = function() {
    this.sixthStage = true;
}
cell.prototype.seventh = function() {
    this.seventhStage = true;
}
cell.prototype.eighth = function() {
    this.eighthStage = true;
}
