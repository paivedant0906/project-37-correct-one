class Question{
    constructor(){
        this.title=createElement('h1')
        this.question=createElement('h2')
        this.o1=createElement('h3')
        this.o2=createElement('h3')
        this.o3=createElement('h3')
        this.o4=createElement('h3')
        this.input1=createInput("ENTER NAME")
        this.input2=createInput("Enter Correct option no")
        this.submit=createButton("Submit");
    }
      hide(){
    this.title.hide();
    this.input1.hide();
    
    this.input2.hide();
  }
    display(){
        this.title.html("MY QUIZ GAME")
        this.title.position(350,0)
        this.question.html("Which Planet Is Closest To The Sun?")
        this.question.position(50,100)
        this.o1.html("1:VENUS")
        this.o1.position(50,130)
        this.o2.html("2:EARTH")
        this.o2.position(50,160)
        this.o3.html("3:MERCURY")
        this.o3.position(50,190)
        this.o4.html("4:MARS")
        this.o4.position(50,220)
        this.input1.position(150,300)
        this.input2.position(400,300)
        
    this.submit.position(250,350)
    this.submit.mousePressed(()=>{
      this.title.hide()
      this.submit.hide()
       this.input1.hide()
        this.input2.hide()
        question.display()
        this.submit.hide()
        contestant.name=this.input1.value();
        contestant.answer=this.input2.value();
        contestantCount+=1;
        contestant.index=contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount)
    })


    }
}