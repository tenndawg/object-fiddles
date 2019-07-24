//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
var me = new Object();

me.name = 'Nick';
me.age = 35;

alert(me.name);





//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
var favoriteThings = {
	band: 'AC/DC',
	food: 'Chicken pillows',
	person: 'Steve Young',
	book: 'Enders Game',
	movie: 'Monty Pythons Quest for the Holy Grail',
	holiday: 'Christmas'
}

favoriteThings.car = '68 Chevy Camaro';
favoriteThings.brand = 'Adidas';




//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here





//Now change the value of the food key in your favoriteThings object to be 'Chicken Nuggets' and change the value of the book key in your favoriteThings object to be 'Harry Potter'.

  //Code here

favoriteThings.food = 'Chicken Nuggets';
favoriteThings.book = 'Harry Potter';



//NEXT PROBLEM



/* 
Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. 
*/

  //Code here

var backPack = {
	
}

var item = 'firstPocket';

backPack.item = 'chapstick';

backPack.color = 'blue';




//After you do the above, alert your entire backPack object.

  //Code here

 alert(backPack);

/*
You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. 
*/

  //Code here

console.log(backPack);



//NEXT PROBLEM




var user2 = {
        name: 'Ty',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'ty33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33'
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here

user2.name = 'Tyler S. McGinnis';
user2.email = 'tyler.mcginnis@devmounta.in';



// =============================================
// =============================================
// EXTRA PRACTICE PROBLEMS BELOW
// =============================================
// =============================================






//NEXT PROBLEM


//Create an empty object called methodCollection.

  var methodCollection = {
    alertHello: function() {
      alert('hello')
    },
    logHello: function() {
      console.log('hello')
    }
  };






/*
Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. 
 */

  //Code Here





//Now call your alertHello and logHello methods.

methodCollection.alertHello;
methodCollection.logHello;








//NEXT PROBLEM



// Create a function called makePerson which takes in name, birthday, ssn as its
// parameters and returns a new object with all of the information that you passed in.

  function makePerson(name, birthday, ssn) {
    var obj = {
      'name': name,
      'birthday': birthday,
      'ssn': ssn
    };
    return obj;
  }





  


//NEXT PROBLEM



// Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to 
// make a Credit Card object and returns that object so that whenever you invoke makeCard, you get a brand new credit card.

function makeCard(cardNumber, expirationDate, securityCode) {
  var min = 3999999999999999;
  var max = 5000000000000000;
  var min1 = 1;
  var max1 = 13;
  var min2 = 100;
  var max2 = 1000;
  var year = "/22";
  var creditCard = {
    cardNumber: Math.floor(random() * (max - min) + min),
    expirationDate: Math.floor(Math.random() * (max1 - min1)) + min1 + year,
    securityCode: Math.floor(Math.random() * (max2 - min2)) + min2
  };
  return creditCard;
}

makeCard();


