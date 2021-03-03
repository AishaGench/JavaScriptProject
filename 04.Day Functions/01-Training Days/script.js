 
   // Create random number

const getRandEvent = () => {
  const random = Math.floor(Math.random()*3)
  // return 'Marathon' or 'Triathlon' or  'Pentathlon' randomly;
if(random===0){
  return 'Marathon'
}else if(random === 1){
return 'Triathlon'
}else if(random === 2){
  return 'Pentathlon'
}
}
console.log(getRandEvent())


// The scope of `trainingDays` is too tight 
const getTrainingDays = activity => {

// decide the day according to the activity, write a activityal;
let  trainingDays;
if(activity==="Marathon"){
  trainingDays = 50
}else if(activity==="Triathlon"){
  trainingDays = 75
}else if(activity==="Pentathlon"){
  trainingDays = 100
}
return trainingDays;
};
console.log(getTrainingDays(getRandEvent()))

const athlete = 'Nala';
const logEvent = (athlete,activity) => {
  console.log(`${athlete}'s activity is: ${activity}`);
};

const logTime = (athlete,days) => {
  console.log(`${athlete}'s time to train is: ${days} days`);
};

const sport = getRandEvent();
const days = getTrainingDays(sport);

logEvent(athlete,sport);
logTime(athlete,days);

const athlete2='Warren'
const sport2 = getRandEvent();
const days2 = getTrainingDays(sport2);
logEvent(athlete2,sport2);
logTime(athlete2,days2);