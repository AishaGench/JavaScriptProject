/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere. It has produced an array of their Oxygen levels.

To be safe to land on, a planet needs to have an Oxygen level between 19.5% and 23.5%.

Write a function that finds the first safe oxygen level in the array - Oxygen between 19.5% and 23.5%
*/

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "22.5%", "18.8%", "19.5%", "20.2%", "31.6%"];


function safeLevelsFirst(arr) {

    return arr.find((item) => parseFloat(item)>19.5 && parseFloat(item)<23.5);

}
console.log(safeLevelsFirst(oxygenLevels1))
console.log(safeLevelsFirst(oxygenLevels2))

function safeLevelsAll(arr) {
  
    return arr.filter((item) => parseFloat(item)>19.5 && parseFloat(item)<23.5);
}
console.log(safeLevelsAll(oxygenLevels1))
console.log(safeLevelsAll(oxygenLevels2))

