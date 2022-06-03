let guessGame =(numRange)=>{
let point = 0  
numRange = 2 
let stage = 1
stageTwo = () =>{
    stageOne()
  }
stageOne =()=>{ 
  let y = Math.floor(Math.random()* numRange + 1); 
let x = prompt('Enter a number:')
  x = parseInt(x)
if(x === y){
  console.log('CONGRATULATIONS!, you have guessed the right number');
  point++
  stage++
   numRange++
  console.log(`You have entered stage ${stage}`)
  console.log(point)
  stageTwo()  
}
  else{
    console.log('OOPS! Game over')
  } 
}
 stageOne() 
 
}
guessGame();

