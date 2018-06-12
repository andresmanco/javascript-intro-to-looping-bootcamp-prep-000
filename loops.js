function theBeatlesPlay(musicians, instruments){
  var arr= [];
  for(var i=0; i<musicians.length; i++){
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts){
  var n = 0;
  var x = facts.length;
  var backUp = [];
  while(n < x){
      if(n===0){
      backUp = [facts[n] + " hola!!!"];
    }
    else{
      backUp = [...backUp, facts[n] + " hola!!!"];
      console.log(backUp);
      facts=[...facts, backUp];
      console.log(n);
      n = n+1;  
    }
  } 
  return backUp;
}

function iLoveTheBeatles(n){
  var arr =[];
  do{
    arr=[...arr, "I love the Beatles!"];
    n=n+1;
  }while(n<15);
  return arr;
}