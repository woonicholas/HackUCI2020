//Initalize Ratings
let rating1 = -1;
let rating2 = -1;
let rating3 = -1;

//Initalize Prices
let price1 = "";
let price2 = "";
let price3 = "";

//Submit an Array
function submit(){
  loc = document.getElementById("location").value;

  cat1 = document.getElementById("category1").value;
  var searchFor1 = {location: loc, categories: cat1, rating: rating1, price: price1};

  cat2 = document.getElementById("category2").value;
  var searchFor2 = {location: loc, categories: cat2, rating: rating2, price: price2};

  cat3 = document.getElementById("category3").value;
  var searchFor3 = {location: loc, categories: cat3, rating: rating3, price: price3};

  var searches  = [searchFor1, searchFor2, searchFor3];
  console.log(searches);
}



//Ratings Funtions 1-3
function setRating1(num1){
  rating1 = num1;
}
function setRating2(num2){
  rating2 = num2;
}
function setRating3(num3){
  rating3 = num3;
}

//Pricing Functions 1-3
function setPrice1(string1){
  price1 = string1;
}
function setPrice2(string2){
  price2 = string2;
}
function setPrice3(string3){
  price3 = string3;
}
