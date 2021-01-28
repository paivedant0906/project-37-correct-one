class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantRef = database.ref('contestantCount');
    contestantRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfo = database.ref('contestants');
    contestantInfo.on("value",(data)=>{
      allContestants = data.val();
    })
  }
}