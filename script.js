window.addEventListener("load", function() {

let listedPlanets;
//    Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
      //  Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planetChosen = pickPlanet(listedPlanets);
      console.log(planetChosen);
      let name = planetChosen.name;
      let diameter = planetChosen.diameter;
      let star  = planetChosen.star;
      let distance = planetChosen.distance;
      let moons = planetChosen.moons;
      let imageUrl = planetChosen.image;
      addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })


let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
    let list = document.getElementById("faultyItems");
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
})

//    document.getElementById("testForm").addEventListener("button", function(event) {
//     event.preventDefault();
//         let pilotName = document.querySelector("input[name=pilotName]");
//         let copilotName = document.querySelector("input[name=copilotName]");
//         let fuelLevel = document.querySelector("input[name=fuelLevel]");
//         let cargoMass = document.querySelector("input[name=cargoMass]");
//         let launchStatus = document.getElementById("launchStatus");
//         let faultyItems = document.getElementById("faultyItems");
//         formSubmission(launchStatus, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
//    })
   
});