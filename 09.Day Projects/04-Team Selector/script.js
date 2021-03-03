const team = {
    _positions: {
        centers: [],
        forwards: [],
        guards: [],
    },
        get centers () {
          return this.centers
        },
        set centers (newCenter) {
            this.centers = newCenter;
        },
        
        get forwards () {
          return  this.forwards
        },
        set forwards (newForward) {
            this.forwards = newForward;
        },
       
        get guards () {
          return this.guards 
        },
        set guards (newGuards) {
            this.guards= newGuards;
        },
     
    
    get position () {
        return this._positions.centers , this._positions.forwards , this._positions.guards
    },
    addplayerToPosition (positionName,playerName,playerPoint) {
        let player = {
            name: playerName,
            point: playerPoint,
        
        } 
        return this._positions[positionName].push(player)
    },
​
    getRandomPlayerFromPosition(positionName){
        let result = this._positions[positionName]
    let random = Math.floor(Math.random()* result.length);
    console.log(random)
    return this._positions[positionName][random]
        
    },
    generateRandomTeam() {
       let forw = this.getRandomPlayerFromPosition("forwards")
        let guar = this.getRandomPlayerFromPosition("guards")
        let cent = this.getRandomPlayerFromPosition("centers")
        
        console.log(forw,guar,cent)
​
    }
    
};
​
console.log(team.addplayerToPosition("centers","Mikail",20))
team.addplayerToPosition("guards","Enes",10)
team.addplayerToPosition("forwards","Ahmed",40)
team.addplayerToPosition("guards","Bibi",10)
team.addplayerToPosition("forwards","Aysegul",35)
console.log(team.getRandomPlayerFromPosition("forwards"))
team.generateRandomTeam()
​
​
team.addplayerToPosition("centers","Mikail",20)
team.addplayerToPosition("centers","Mi",20)
team.addplayerToPosition("centers","Mik",20)
team.addplayerToPosition("centers","Mika",20)
team.addplayerToPosition("centers","Mikai",20)
​
team.addplayerToPosition("forwards","Mikail",20)
team.addplayerToPosition("forwards","Mi",20)
team.addplayerToPosition("forwards","Mik",20)
team.addplayerToPosition("forwards","Mika",20)
team.addplayerToPosition("forwards","Mikai",20)
​
team.addplayerToPosition("guards","Mikail",20)
team.addplayerToPosition("guards","Mi",20)
team.addplayerToPosition("guards","Mik",20)
team.addplayerToPosition("guards","Mika",20)
team.addplayerToPosition("guards","Mikai",20)
​
let selectedTeam = team.generateRandomTeam();
console.log(selectedTeam); 
console.log(team)