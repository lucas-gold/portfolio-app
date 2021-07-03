//cell.js
var img1; var img2; var img3; var img4; var img5; var img6;
var stg1; var stg2; var stg3; var stg4; var wc; var wcPour;
var picA;

var avatar_walk_down; var avatar_walk_up; var avatar_walk_left; var avatar_walk_right; var avatar_default;

var avatar_carry_left; var avatar_carry_right; var avatar_carry_down; var avatar_carry_up; var avatar_carry_defaultL; var avatar_carry_defaultR;


var avatar_pour_left; var avatar_pour_right; var avatar_pour_up; var avatar_pour_down; var avatar_pour_defaultL; var avatar_pour_defaultR;



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
var w = 29;

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

var extraYcarry = 15;
var extraYdef = 0;
var extraXcarry = 20;
var extraXdef = 0;

//keypressed
var fullyGrownArray = [];
var waterCan = false;
var waterCanActive = false;
var firstClick = true;
var pourDirection = "nil";
var carryDirection = "nil";
