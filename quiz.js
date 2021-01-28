class Quiz{
    constructor(){

    }
      getState(){
    var gameR  = database.ref('gameState');
    gameR.on("value",function(data){
       gameState = data.val();
    })
      }
 update(state){
    database.ref('/').update({
      gameState: state
    });
  }
   async start(){
    if(gameState === 0){
      contestant = new Contestant();
     
      var contestantRef = await database.ref('contestantCount').once("value");
      if(contestantRef.exists()){
        contestantCount = contestantRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
  play(){
      background("yellow")
      
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
   
      var Answer = 300;
      fill("Blue");
      textSize(20);
      text("NOTE: Contestant who answered correct are highlighted in green color!",130,300);

      for(var plr in allContestants){
      
        var correctAns="3";
        if (correctAns === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");

        Answer+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,Answer)
      }
    }
  }


}


