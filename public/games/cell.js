function preload() {

  stg0 = loadImage('images/crop_stg0_v3.png');
  pumpkin_stg1 = loadImage('images/pumpkin_stg1.png');
  pumpkin_stg1_w = loadImage('images/pumpkin_stg1_w3.png');
  pumpkin_stg2 = loadImage('images/pumpkin_stg2.png');
  pumpkin_stg2_w = loadImage('images/pumpkin_stg2_w2.png');
  pumpkin_stg3 = loadImage('images/pumpkin_stg3.png');
  pumpkin_stg3_w = loadImage('images/pumpkin_stg3_w2.png');
  pumpkin_stg4 = loadImage('images/pumpkin_stg4.png');
  pumpkin_stg4_w = loadImage('images/pumpkin_stg4_w.png');
  pumpkin_stg5 = loadImage('images/pumpkin_stg5.png');


  // stg1 = loadImage('images/crop_stg0_v3.png');
  // stg2 = loadImage('images/pumpkin_stg1.png');
  // stg3 = loadImage('images/pumpkin_stg1_w3.png');
  // stg4 = loadImage('images/pumpkin_stg5.png');
  // stg5 = loadImage('images/pumpkin_stg1.png');
  // stg6 = loadImage('images/stage6.png');
  // stg7 = loadImage('images/stage7.png');
  // stg8 = loadImage('images/stage8new.png');

  wc = loadImage('images/watercan1.png');
  wcPour = loadImage('images/watercan2.png');

  var avat = ['images/bear_walk_down.gif', 'images/bear_walk_up.gif']; //do this?
  //why nott justt use one or two sets and just do a new createImg to change it to something else?

  avatar_walk_down = createImg('images/bear_walk_down.gif');
  avatar_walk_up = createImg('images/bear_walk_up.gif');
  avatar_walk_left = createImg('images/bear_walk_left.gif');
  avatar_walk_right = createImg('images/bear_walk_right.gif');
  avatar_default = createImg('images/bearidle60.gif'); //

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


//************ spear attack ************//************
  avatar_spear_left = createImg('images/bear_spear_walk.gif');
  avatar_spear_right = createImg('images/bear_spear_walk_right.gif');
  avatar_spear_up = createImg('images/bear_spear_walk.gif');
  avatar_spear_down = createImg('images/bear_spear_walk_right.gif');
  avatar_spear_defaultL = createImg('images/bear_spear_default.png');
  avatar_spear_defaultR = createImg('images/bear_spear_default.png');

  avatar_spearAttack_left = createImg('images/bear_spear_walk_stab.gif');
  avatar_spearAttack_right = createImg('images/bear_spear_walk_stab_right.gif');
  avatar_spearAttack_up = createImg('images/bear_spear_walk_stab.gif');
  avatar_spearAttack_down = createImg('images/bear_spear_walk_stab_right.gif');
  avatar_spearAttack_defaultL = createImg('images/bear_spear_default_stab.png');
  avatar_spearAttack_defaultR = createImg('images/bear_spear_default_stab.png');

  avatar_spearAttack_defaultR.style('transform', 'scaleX(-1)');
  avatar_spear_defaultR.style('transform', 'scaleX(-1)');
  //************//************//************//************//************


  //seed

  avatar_seedPumpkin_left = createImg('images/bear_pumpkinseed_walk.gif');
  avatar_seedPumpkin_right = createImg('images/bear_pumpkinseed_walk.gif');
  avatar_seedPumpkin_up = createImg('images/bear_pumpkinseed_walk.gif');
  avatar_seedPumpkin_down = createImg('images/bear_pumpkinseed_walk.gif');
  avatar_seedPumpkin_defaultL = createImg('images/bear_pumpkinseed_default.png');
  avatar_seedPumpkin_defaultR = createImg('images/bear_pumpkinseed_default.png');
  avatar_seedPumpkin_right.style('transform', 'scaleX(-1)');
  avatar_seedPumpkin_defaultR.style('transform', 'scaleX(-1)');
  avatar_seedPumpkin_down.style('transform', 'scaleX(-1)');




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

  avatar_spear_defaultL.size(83,42);
  avatar_spear_defaultR.size(83,42);
  avatar_spear_left.size(83,42);
  avatar_spear_right.size(83,42);
  avatar_spear_up.size(83,42);
  avatar_spear_down.size(83,42);

  avatar_spearAttack_defaultL.size(83,42);
  avatar_spearAttack_defaultR.size(83,42);
  avatar_spearAttack_left.size(83,42);
  avatar_spearAttack_right.size(83,42);
  avatar_spearAttack_up.size(83,42);
  avatar_spearAttack_down.size(83,42);

  avatar_seedPumpkin_defaultL.size(95,50);
  avatar_seedPumpkin_defaultR.size(95,50);
  avatar_seedPumpkin_left.size(95,50);
  avatar_seedPumpkin_right.size(95,50);
  avatar_seedPumpkin_up.size(95,50);
  avatar_seedPumpkin_down.size(95,50);

}




function cell (i, j, w){


    this.x = i*w;
    this.y = j*w;
    this.w = w;
    this.h = w;

    this.plantTimer = false;

    this.over = false;

    this.defaultStage = true;
    this.firstStage = false;
    this.firstWetStage = false;
    this.secondStage = false;
    this.secondWetStage = false;
    this.thirdStage = false;
    this.thirdWetStage = false;
    this.fourthStage = false
    this.fourthWetStage = false;

    this.attackStage = false;

    this.attackSuccess = false;
    this.attackFailed = false;

    this.stg1bool = false;
    this.stg1wbool = false;
    this.stg2wbool = false;
    this.stg3wbool = false;
    this.stg4wbool = false;

//  }

}
//console.log(window.innerWidth);
//console.log(window.innerHeight);
//var cropSize = window.innerWidth/50;
var cropSize = 32;
var cropPosX = window.innerWidth/12;
var cropPosY = window.innerWidth/10;





cell.prototype.show = function() {


  if (this.defaultStage) {
    //backgroundImg(this.x,this.y,this.w,this.h);

  //  stage1 = createImg('images/stage1copy2.png', 'stg1');
    //stage1.position(this.x+610,this.y+90);
    //stage1.size(35,35);
      image(stg0, this.x+margLeft-50, this.y+margTop*3.2, this.w, this.w); //originally this.w for last 2



    }
  if (this.firstStage) { //stg 1 no water
    //backgroundImg(this.x,this.y,this.w,this.h);

    image(pumpkin_stg1, this.x+margLeft-50, this.y+margTop*3.2, 27, 27);
  }

  if (this.firstWetStage) { //stg 1 watered

    image(pumpkin_stg1_w, this.x+margLeft-50, this.y+margTop*3.2, 27, 27);


  //  image(stg3, this.x+103, this.y+125, 30, 30);
  }
  if (this.secondStage) {
    image(pumpkin_stg2, this.x+margLeft-50, this.y+margTop*3.2, 27, 27);

  }
  if (this.secondWetStage) {
    //backgroundImg(this.x,this.y,this.w,this.h);
    image(pumpkin_stg2_w, this.x+margLeft-50, this.y+margTop*3.2, this.w, this.w);

  }
  if (this.thirdStage) {
    //backgroundImg(this.x,this.y,this.w,this.h);

    image(pumpkin_stg3, this.x+margLeft-50, this.y+margTop*3.2, this.w, this.w);

  }
  if (this.thirdWetStage) {
  //  backgroundImg(this.x,this.y,this.w,this.h);

  image(pumpkin_stg3_w, this.x+margLeft-50, this.y+margTop*3.2, this.w, this.w); //make img1 include brown dirt surrounding it

  //  image(stg7, this.x+80, this.y+40, 70, 120);
  }
  if (this.fourthStage) {
    //image(img1, this.x, this.y, this.w, this.w);
    //backgroundImg(this.x,this.y,this.w,this.h);

    image(pumpkin_stg4, this.x+margLeft-50, this.y+margTop*3.2, this.w, this.w);
}
if (this.fourthWetStage) {

  image(pumpkin_stg4_w, this.x+margLeft-50, this.y+margTop*3.2, this.w, this.w);
}
if (this.fifthStage) {

  image(pumpkin_stg5, this.x+margLeft-50, this.y+margTop*3.2, this.w, this.w);
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
    return ((x > this.x && x < this.x + this.w) && (y > this.y && y < this.y + this. w));
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


cell.prototype.default = function() {
    this.defaultStage = true;
}
cell.prototype.first = function() {
    this.firstStage = true;
}
cell.prototype.firstWet = function() {
    this.firstWetStage = true;
}
cell.prototype.second = function() {
    this.secondStage = true;
}
cell.prototype.secondWet = function() {
    this.secondWetStage = true;
}
cell.prototype.third = function() {
    this.thirdStage = true;
}
cell.prototype.thirdWet = function() {
    this.thirdWetStage = true;
}
cell.prototype.fourth = function() {
    this.fourthStage = true;
}
cell.prototype.fourthWet = function() {
    this.fourthWetStage = true;
}
cell.prototype.fifth = function() {
    this.fifthStage = true;
}
