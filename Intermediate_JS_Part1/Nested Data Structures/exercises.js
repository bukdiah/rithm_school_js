var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function displayCities() {
    let cities = instructorData.additionalData.moreDetails.citiesLivedIn;

    for (let i=0; i<cities.length; i++) {
        console.log(cities[i]);
    }
}

displayCities();

function displayHomeTownData() {
    let hometown = instructorData.additionalData.moreDetails.hometown; // hometown obj

    for (let key in hometown) {
        console.log(hometown[key]);
    }
}

displayHomeTownData();

function addDetail(key, value) {
    let moreDetails = instructorData.additionalData.moreDetails;
    moreDetails[key] = value;

    return moreDetails;
}

addDetail("isHilarious", true);
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);

function removeDetail(key) {
    let moreDetails = instructorData.additionalData.moreDetails;

    delete moreDetails[key];

    return moreDetails;
}

console.log(removeDetail('citiesLivedIn'));
console.log(removeDetail('hometown'));
console.log(removeDetail('favoriteBasketballTeam'));