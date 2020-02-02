
async function formSubmit(event, food, location){
    console.log(food.value);
    event.preventDefault();
    let proxy_url = "https://cors-anywhere.herokuapp.com/";
    let url = `https://api.yelp.com/v3/businesses/search?term=${food.value}&location=${location.value}`;
    let response = await fetch (proxy_url + url,{
        method: 'GET',
        withCredentials: true,
        headers: {
            Authorization: 'Bearer iqJ5W-M7CR9UGd-iRcSSUk3epS3bnolj3jGlcN5ENRuxvUvnYtTt-w_Oe-iMH2lyVMP0_6J1EHXz7Gng1cQDn4XFIEJfy4jmsh_BCkm_zUQhSYaYT06Z4_pvkfs0XnYx'
        },
    });
    let result = await response.json();
    console.log(result); 
    selectLocation(result);
    return result;
}

//parse JSON code
function selectLocation(result){
    console.log(result.businesses[0]);
    document.getElementById('2').innerHTML = result.businesses[0].name;
    document.getElementById('2').src = result.businesses[0].image_url;
}
