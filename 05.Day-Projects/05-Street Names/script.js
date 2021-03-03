/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/
let london=[
  "Carnaby Street",
  "Abchurch Lane",
  "Adam's Court",
  "Piccadilly Street",
  "Addle Hill",
  "Addle Lane",
  "Alban Highwalk",
  "Brick Lane"]

  function getLanes(arr){
    let laneStreet = arr.filter((item =>item.includes('Lane')));
  return laneStreet;
  }
 console.log(getLanes(london))

 