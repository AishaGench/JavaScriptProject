function getStudyHours(day){
    switch(day){
        case 'monday':
            return 8
        case 'tuesday':
            return 7
        case 'wednesday':
            return 4
        case 'thursday':
            return 5 
        case 'friday':
            return 5
        case 'saturday':
            return 10 
        case 'sunday':
            return 10 
        default:
            return 'Check your answer'

    }
}
console.log(getStudyHours('tuesday'))

function getActualStudyHours(){
    return (getStudyHours('monday')+getStudyHours('tuesday')+getStudyHours('thursday')+getStudyHours('wednesday')+getStudyHours('friday')+getStudyHours('saturday')+getStudyHours('sunday'))
}
console.log(getActualStudyHours())

const getIdealStudyHours=()=>{
    let idealHours=8
    return idealHours*7 
}
console.log(getIdealStudyHours())

console.log(getActualStudyHours()); // should print the sum of all study hours in the week

console.log(getIdealStudyHours()); // if idealHours is 8, should print 56

function calculateStudyDebt(){
    let  actualStudyHour=getActualStudyHours() 
    let idealStudyHours=getIdealStudyHours()

    if (idealStudyHours==actualStudyHour){
        console.log(`You did a good job. Your hours match! (${idealStudyHours})`)
    } else if ( idealStudyHours>actualStudyHour){
        console.log(`You need to study ${idealStudyHours-actualStudyHour} more hours to reach your goal!`)
    } else {
        console.log(`You have studied ${actualStudyHour-idealStudyHours} extra. Perfect!`)
    }
}
calculateStudyDebt();

