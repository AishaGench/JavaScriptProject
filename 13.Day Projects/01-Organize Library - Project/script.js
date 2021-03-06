class Media{
    constructor(title,type){
        this._title = title;
        this._type = type;
        this._isCheckedOut = false;
        this._ratings =[];
    }

    get title(){
        return this._title;
    }

    get type(){
        return this._type;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(checked){
        this._isCheckedOut = checked;

    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating(){
       const avgRating= this.ratings.reduce((a,b) =>a +b)/this._ratings.length;
        return avgRating.toFixed(2)
    }

    addRating(rating){
        if(rating >=1 && rating <=10){
            this._ratings.push(rating)
        }else{
            console.log('You can rate from 1 to 10')
        }  
    }
};

 class Book extends Media{
    constructor(author,title,type,pages){
        super(title,type);
        this._author = author;
        this._pages = pages;
    }

    get author(){
      return  this._author;
    }

    get pages(){
        return this._pages;
    }
 };

 class Movie extends Media{
     constructor(director,title,type,runTime){
     super(title,type);
     this._director = director;
     this._runTime = runTime;
    }

    get director(){
        return this._director;
    } 

    get runTime(){
        return this._runTime;
    }
 };

 class Cd extends Media{
    constructor(artist,title,type, duration){
    super(title,type);
    this._artist = artist;
    this._songs = [];
    this._duration = duration;
   }

   get artist(){
       return this._artist;
   }

   get songs(){
       return this._songs;
   }

   get duration(){
    return this._duration;
   }

   addSong(song){
       this._songs.push(song)
   }

   shuffle(){
    return this._songs.sort(() => Math.random() - 0.5);  
   }
};
class Catalog{
    constructor(){
        this._myCatalog = [];
    }

    get myCatalog(){
        return this._myCatalog;
    }

    set myCatalog(value){
        return this._myCatalog.push(value);
    }

    addMedia(media){
        this._myCatalog.push(media);
    }
}

 const historyOfViolence = new Book('Édouard Louis','History of Violence', 'Advanture',224);
 historyOfViolence.toggleCheckOutStatus(false);
 console.log(historyOfViolence.isCheckedOut);

 historyOfViolence.addRating(4);
 historyOfViolence.addRating(5);
 historyOfViolence.addRating(5);
 console.log(historyOfViolence);

 console.log(historyOfViolence.getAverageRating());

///////////////////////////////////////////////////////

 const bloodSport = new Movie('Jean-Claude Van Damme','Blood Sport','Action',122);
 bloodSport.toggleCheckOutStatus(false);

 bloodSport.addRating(1);
 bloodSport.addRating(1);
 bloodSport.addRating(5);

 console.log(bloodSport.getAverageRating())

 console.log(bloodSport);

 ////////////////////////////////////////////////////

const shuffleList = new Cd ('Baris Monco','myList','Anadolu Rock',200,);
console.log(shuffleList);

shuffleList.addSong('Arkadasim Esek');
shuffleList.addSong('Gul Pembe');
shuffleList.addSong('Halil Ibrahim Sofrasi');

const kirac = new Cd ('Kirac', 'plack1', 'Love',300);
console.log(kirac)

kirac.addSong('Endamin Yeter');
kirac.addSong('Ayshe');
kirac.addSong('Kayip Sehir');

///////////////////////////////////////////////////////

const catolog1 =new Catalog();
catolog1.addMedia(kirac);
catolog1.addMedia(shuffleList);
catolog1.addMedia(historyOfViolence);
catolog1.addMedia(bloodSport);
catolog1.addMedia(catolog1)

///////////////////////////////////////////////////////

let mediaType = document.getElementById("mediaTypeSelect");
let title = document.getElementById("titleOfMedia");
let type = document.getElementById("typeOfMedia");
let creator = document.getElementById("creatorOfMedia");
let duration = document.getElementById("durationOfMedia");
let ratings = document.getElementsByClassName("ratingsOfMedia");
let button = document.getElementById("submit_btn");
let library = document.getElementById("catalogLibrary");

button.onclick = () =>{
    let constructor = mediaType.value === "Book" ? Book : mediaType.value === "Movie" ? Movie : mediaType.value === "CD" ? CD :"";

    let myList = new constructor (title.value,type.value, creator.value,duration.value);

    myList.addRating(ratings[0].value);
    myList.addRating(ratings[1].value);
    myList.addRating(ratings[2].value);
    myList.addRating(ratings[3].value);

    catolog1.addMedia(myList);

    const newArray = [];
    
    catolog1.myCatalog.forEach(element => newArray.push(element.title)
    );
    console.log(catolog1.myCatalog)
   
    return library.innerHTML = newArray;
}






