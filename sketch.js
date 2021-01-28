var canvas;
var database;
var gameState=0;
var contestantCount;
var question;
var contestant;
var quiz; 
var allContestants;
function setup(){
  database=firebase.database();
  canvas = createCanvas(1050,430);
  quiz=new Quiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");
    if(contestantCount === 4){
    quiz.update(1);
    
  }
  if(gameState === 1){
    clear();
    quiz.play()

  }
}
