//cell.js
var img1; var img2; var img3; var img4; var img5; var img6;
var stg1; var stg2; var stg3; var stg4; var wc; var wcPour;
var picA;

var stg0; var pumpkin_stg1; var pumpkin_stg1_w; var pumpkin_stg2; var pumpkin_stg2_w; var pumpkin_stg3; var pumpkin_stg3_w;

var avatar_walk_down; var avatar_walk_up; var avatar_walk_left; var avatar_walk_right; var avatar_default;

var avatar_carry_left; var avatar_carry_right; var avatar_carry_down; var avatar_carry_up; var avatar_carry_defaultL; var avatar_carry_defaultR;


var avatar_pour_left; var avatar_pour_right; var avatar_pour_up; var avatar_pour_down; var avatar_pour_defaultL; var avatar_pour_defaultR;

var ui_bg;
var ui_bar;
var ui_pumpkin;
var ui_spear;
var ui_watercan;
var ui_pumpkinseed;

//sketch.js
var canvas;
var loseGame = false;
var start = false;


var walkXpos; //enemy starting x
var walkYpos; //enemy starting y

var enemyExit;
var exitXpos; //enemy starting x
var exitYpos; //enemy starting y



var grid;
var m = screen.width;
//var w = 43.5;



var numcol;
var numrow;


var numPresses;

var myDiv;
var timerDiv;

var stage1;

var myDivLoc = 0;

var timerActive = false;


//setup
var bgScene;




//attacker


var walk = false;
var atkBool = false;
var firstAtk = false;
var tid;
var tidClick;


//draw
var avatarX = 700;
var avatarY = 500;
var moveSpeed = 2.3;
var moveSpeed_can = 1.5;

var extraXdef_L = 0;
var extraXdef_R = 0;
var extraYdef = 0;

//var extraXcarry = 20;
var extraXcarry_L = 10;
var extraXcarry_R = 15;
var extraYcarry = 15;

var extraXspear_L = 40;
var extraXspear_R = 22;
var extraYspear = 2;

var extraXseedP_L = 40;
var extraXseedP_R = 20;
var extraYseedP = 15;

//keypressed
var fullyGrownArray = [];
var waterCan = false;
var waterCanActive = false;
var firstClick = true;
var pourDirection = "nil";
var carryDirection = "nil";





var spear = false;
var spearActive = false;
var firstClickSpear = true;



var avatar_spear_left;
var avatar_spear_right;
var avatar_spear_up;
var avatar_spear_down;
var avatar_spear_defaultL;
var avatar_spear_defaultR;

var avatar_spearAttack_left;
var avatar_spearAttack_right;
var avatar_spearAttack_up;
var avatar_spearAttack_down;
var avatar_spearAttack_defaultL;
var avatar_spearAttack_defaultR;


var holdSeedPumpkin = false;
var holdSeedPumpkinActive = false;
var firstClickHoldSeedPumpkin = true;

var avatar_seedPumpkin_left;
var avatar_seedPumpkin_right;
var avatar_seedPumpkin_up;
var avatar_seedPumpkin_down;
var avatar_seedPumpkin_defaultL;
var avatar_seedPumpkin_defaultR;


function playerLayer() {
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

  //layer for farmer & player
  if (walkYpos+15 <= avatarY) {
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

    avatar_spear_defaultL.style('z-index', '10');
    avatar_spear_defaultR.style('z-index', '10');
    avatar_spear_left.style('z-index', '10');
    avatar_spear_right.style('z-index', '10');
    avatar_spear_up.style('z-index', '10');
    avatar_spear_down.style('z-index', '10');

    avatar_spearAttack_defaultL.style('z-index', '10');
    avatar_spearAttack_defaultR.style('z-index', '10');
    avatar_spearAttack_left.style('z-index', '10');
    avatar_spearAttack_right.style('z-index', '10');
    avatar_spearAttack_up.style('z-index', '10');
    avatar_spearAttack_down.style('z-index', '10');
  }
  else {
    avatar_default.style('z-index', '0');
    avatar_walk_down.style('z-index', '0');
    avatar_walk_up.style('z-index', '0');
    avatar_walk_left.style('z-index', '0');
    avatar_walk_right.style('z-index', '0');

    avatar_carry_defaultL.style('z-index', '0');
    avatar_carry_defaultR.style('z-index', '0');
    avatar_carry_left.style('z-index', '0');
    avatar_carry_right.style('z-index', '0');
    avatar_carry_up.style('z-index', '0');
    avatar_carry_down.style('z-index', '0');

    avatar_pour_defaultL.style('z-index', '0');
    avatar_pour_defaultR.style('z-index', '0');
    avatar_pour_left.style('z-index', '0');
    avatar_pour_right.style('z-index', '0');
    avatar_pour_up.style('z-index', '0');
    avatar_pour_down.style('z-index', '0');

    avatar_spear_defaultL.style('z-index', '0');
    avatar_spear_defaultR.style('z-index', '0');
    avatar_spear_left.style('z-index', '0');
    avatar_spear_right.style('z-index', '0');
    avatar_spear_up.style('z-index', '0');
    avatar_spear_down.style('z-index', '0');

    avatar_spearAttack_defaultL.style('z-index', '0');
    avatar_spearAttack_defaultR.style('z-index', '0');
    avatar_spearAttack_left.style('z-index', '0');
    avatar_spearAttack_right.style('z-index', '0');
    avatar_spearAttack_up.style('z-index', '0');
    avatar_spearAttack_down.style('z-index', '0');
  }
}
