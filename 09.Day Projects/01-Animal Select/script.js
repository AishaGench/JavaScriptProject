const animal ={
    species:'dog',
    name:'Tom',
    legs:4,
    color: 'golden',
    age:10,
    bark:function(){
        return `woof woof`
    },

  calAge(){

      if(this.age >=2){
          return this.humanAge=(2 * 10.5) + (this.age-2)*4;
      }else if(this.age ===1){
          return this.humanAge=10.5;
      }else{
          console.log('dont ask his-her age')
      }
      return this.humanAge
  },
  getAnimalInfo(){
    return `My name is ${this.name},  I am a ${this.breed},I am ${this.humanAge} years old in human  years which is  years old in ${this.age} dog years.” , `
}

}

console.log(animal);
animal.breed=animal.species +  ' Bulldog';
console.log(animal.breed);
console.log(animal.calAge());
console.log(animal.getAnimalInfo());
