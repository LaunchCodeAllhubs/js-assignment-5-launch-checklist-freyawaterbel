require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = (`
                    <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                    <img src="${imageUrl}">
    `)

// function addDestinationInfo(planetDestination) {
//    // Here is the HTML formatting for our mission target div.
//    let missionTarget = document.getElementById("missionTarget");
//    missionTarget.innerHTML = (`
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: ${planetDestination.name}</li>
//                     <li>Diameter: ${planetDestination.diameter}</li>
//                     <li>Star: ${planetDestination.star}</li>
//                     <li>Distance from Earth: ${planetDestination.distance}</li>
//                     <li>Number of Moons: ${planetDestination.moons}</li>
//                 </ol>
//                 <img src="${planetDestination.image}">
//    `)
}

function validateInput(testInput) {
   if (testInput == "" && testInput != "0") {
    return "Empty";
   } else if (isNaN(Number(testInput)) && testInput != "0") {
    return "Not a Number";
   } else if (!isNaN(Number(testInput)) && testInput != "0") {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // make list visible, update each item, add validation
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) == "Empty") {
        return alert("All fields are required!");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    }
    if (validateInput(copilot) == "Empty") {
        return alert("All fields are required!");
    } else {
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    }
    if (validateInput(fuelLevel) == "Empty") {
        return alert("All fields are required!");
    } else if (validateInput(fuelLevel) == "Not a Number") {
        return alert("Make sure to enter valid information for each field!")
    } else if (Number(fuelLevel) < 10000) {
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = `Fuel level too low for launch`;
    } else if (Number(fuelLevel) >= 10000) {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
    }
    if (validateInput(cargoLevel) == "Empty") {
        return alert("All fields are required!");
    } else if (validateInput(cargoLevel) == "Not a Number") {
        return alert("Make sure to enter valid information for each field!")
    } else if (Number(cargoLevel) >= 10000) {
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    } else if (Number(cargoLevel) < 10000) {
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }
    if (Number(fuelLevel) >= 10000 && Number(cargoLevel) < 10000) {
        launchStatus.style.color = "#419F6A";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";       
    }
    list.style.visibility = "visible";
}

async function myFetch() {

    let fetchPlanets = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    // .then( function(response) {
        let planetsReturned = await fetchPlanets.json();
        // response.json().then( function(json) {
            // console.log(json);
        // })
        // });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = rollTheDice();
    // console.log(planets[index]);
    return planets[index];
}

function rollTheDice() {
    return Math.floor(Math.random()*6);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
