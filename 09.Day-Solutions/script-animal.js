
const animal = {
  species:"dog",
  name: "Max",
  legs: 4,
  color: "black-white",
  age: 5,
  bark : function() {
    return `woof woof`
  },
  //breed: species+"Terrier", it dont work
  calcAge: function () {
    this.age >= 2 ? this.humanAge = (2 * 10.5) + (this.age-2)*4
    : this.age === 1 ? this.humanAge = 10.5
    : console.log ("Enter valid age");
    return this.humanAge;
  },
  getAnimalInfo : function() {
    return `My name is ${this.name}, i am a ${this.breed}. I am ${this.humanAge} years old in human years which is ${this.age} years old in ${this.species} years.`
  },
}

console.log(animal.name)   /// Max
console.log(animal["name"])  /// Max
animal.name = "John"
console.log(animal.name)  /// John
animal.surname= "Con"
console.log(animal.surname)  /// Con

animal.breed = animal.species+"_Terrier";

animal.calcAge();

console.log(animal.getAnimalInfo());
