function clicked(){
    data = {"term": "food","location": "New York City"}
    let url = "https://api.yelp.com/v3/businesses/search?";
    fetch(url, {
        method: "POST",
        withCredentials: true,
        headers: {
            "Authorization": "Bearer iqJ5W-M7CR9UGd-iRcSSUk3epS3bnolj3jGlcN5ENRuxvUvnYtTt-w_Oe-iMH2lyVMP0_6J1EHXz7Gng1cQDn4XFIEJfy4jmsh_BCkm_zUQhSYaYT06Z4_pvkfs0XnYx",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {console.log(response);return response.json();})
    .then(data => {
        console.log(JSON.parse(data));
    });
}
