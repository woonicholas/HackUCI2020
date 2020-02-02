//Initalize Prices
let price1 = -1;
let price2 = -1;
let price3 = -1;

//Submit an Array
async function submit(event){
  console.log("submit");
  let loc = document.getElementById("location").value;

  let cat1 = document.getElementById("category1").value;
  var searchFor1 = {location: loc, categories: cat1, price: price1};

  cat2 = document.getElementById("category2").value;
  var searchFor2 = {location: loc, categories: cat2, price: price2};

  cat3 = document.getElementById("category3").value;
  var searchFor3 = {location: loc, categories: cat3, price: price3};

  var searches  = [searchFor1, searchFor2, searchFor3];

  

  var i = 0;
  for (i = 0; i < searches.length; i++){
    await formSubmit(event, i, searches[i].categories, searches[i].location, searches[i].price);
    
  }
  window.location.href="PortalLoadingBar.html";
  
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
  await selectLocation(count, result);
  return result;
}

//parse JSON code
function selectLocation(count, result){
  sessionStorage.setItem("location" + count, JSON.stringify(result));
  sessionStorage.setItem("img" + count, result.businesses[count].image_url);
  return result;
}

function load_vals(){
  console.log("Loading vals..");
  var i = 0;
  for(i = 0; i < 3; i++){
    document.getElementById("loc-title-"+i).innerHTML = JSON.parse(sessionStorage.getItem("location"+i)).businesses[i].name;
    document.getElementById("loc-desc-"+i).innerHTML = JSON.parse(sessionStorage.getItem("location"+i)).businesses[i].categories[0].title;
    document.getElementById("loc-link-"+i).href = JSON.parse(sessionStorage.getItem("location"+i)).businesses[i].url;
    document.getElementById("img-" + i).src = sessionStorage.getItem("img" + i);
  }
}