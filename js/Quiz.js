class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
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
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.message.hide();
    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    this.heading.html("Result of the Quiz");
    this.heading.position(350, 0);
    //call getContestantInfo( ) here
    getContestantInfo();
    //write condition to check if contestantInfor is not undefined
    
    //write code to add a note here
    if(allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correctare highlighted in green color!", 130, 230);
    }
    //write code to highlight contest who answered correctly
    for(plr in allContestants){
      var correctAns = "2";
      if(correctAns == allContestants[plr].answer){
        fill("Green");
      }else {
        fill("red");
      }
    }
  }

}
