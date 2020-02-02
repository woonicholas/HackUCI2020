//Initalize Prices
let price1 = -1;
let price2 = -1;
let price3 = -1;

//Submit an Array
function submit(event){
  loc = document.getElementById("location").value;

  cat1 = document.getElementById("category1").value;
  var searchFor1 = {location: loc, categories: cat1, price: price1};

  cat2 = document.getElementById("category2").value;
  var searchFor2 = {location: loc, categories: cat2, price: price2};

  cat3 = document.getElementById("category3").value;
  var searchFor3 = {location: loc, categories: cat3, price: price3};

  var searches  = [searchFor1, searchFor2, searchFor3];
  sessionStorage["test"] = "big sad";
  var i = 0;
  for (i = 0; i < searches.length; i++){
    formSubmit(event, i, searches[i].categories, searches[i].location, searches[i].price);
    
  }
  /*var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "./test.html", false);
  xmlhttp.send();
  return xmlhttp.loa;*/
  
  window.location.href = "./test.html";
  console.log(searches);
}

//Pricing Functions 1-3
function setPrice1(num){
  price1 = num;
}
function setPrice2(num){
  price2 = num;
}
function setPrice3(num){
  price3 = num;
}

async function formSubmit(event, count, category, location, price){  
  event.preventDefault();
  let proxy_url = "https://cors-anywhere.herokuapp.com/";
  let url = `https://api.yelp.com/v3/businesses/search?term=${category}&location=${location}&price=${price}`;
  let response = await fetch (proxy_url + url,{
      method: 'GET',
      withCredentials: true,
      headers: {
          Authorization: 'Bearer iqJ5W-M7CR9UGd-iRcSSUk3epS3bnolj3jGlcN5ENRuxvUvnYtTt-w_Oe-iMH2lyVMP0_6J1EHXz7Gng1cQDn4XFIEJfy4jmsh_BCkm_zUQhSYaYT06Z4_pvkfs0XnYx'
      },
  });
  let result = await response.json();
  selectLocation(count, result);
  return result;
}

//parse JSON code
function selectLocation(count, result){
  console.log(result);
  //console.log(result.businesses[0]);
  //document.getElementById(count).innerHTML += result.businesses[0].name;
  //document.getElementById("pic" + count).src = result.businesses[0].image_url;
  sessionStorage.setItem("location" + count, JSON.stringify(result));
  sessionStorage.setItem("img" + count, JSON.stringify(result.business[0].image_url));
  console.log("works?");
  console.log(sessionStorage.getItem("location" + count));
}

function load_vals(){
  console.log(sessionStorage["test"]);
  console.log(sessionStorage.getItem("location0"));
  var i = 0;
  for(i = 0; i < 3; i++){
    document.getElementById(i).innerHTML = sessionStorage.getItem("location" + i);
  }
}