// Description of my pet

let pet = {
  name: "Daisy",
  species: "Labrador Retriever",
  nicknames: ["Daisy Doodle", "Doodle", "Sweetie", "Girl"],
  age: 14
}

const beatles = {
  albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
  history: {
    formed: 1960,
    disbanded: 1970
  },
  members: [
    {
      name: "George Harrison",
      birth: 1943,
      death: 2001
    },
    {
      name: "Paul McCartney",
      birth: 1942,
      death: null
    },
    {
      name: "John Lennon",
      birth: 1940,
      death: 1980
    },
    {
      name: "Ringo Starr",
      birth: 1940,
      death: null
    }
  ]
}

// Code to output the following sentence in console log: Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942.
//  He contributed heavily to the Magical Mystery Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}.
He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]}.`)

// Challenge: Political Campaign

// define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

let district = "TN Congressional District 6";

let platform = {
  taxes: [],
  jobs: [],
  infrastructure: [],
  healthCare: [],
  crimeAndEnforcement: []
}

let donationURL = "";

let eventCalendar = {
  week1: {
    Sunday: "Church Event",
    Monday: "Campaign at Fair",
    Tuesday: "Donor Dinner",
    Wednesday: "Debate",
    Thursday: "Speak at College Event",
    Friday: "TBD",
    Saturday: "Kiss lots of babies"
  },
  week2: {
    Sunday: "Keep kissing lots of babies",
    Monday: "TBD",
    Tuesday: "Speak at Convention Center Event",
    Wednesday: "Donor Dinner",
    Thursday: "Debate",
    Friday: "Fairground Event",
    Saturday: "Church Event"
  }
}

let volunteerInfo = [
  {
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    availability: "",
    abilities: []
  }
]

let biography = "";

let images = {
  headShot: "",
  family: "",
  constituents: ""
}

let missionStatement = "";

let registrationURL = "";

// write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

addTaxesPlatform = (position) => platform.taxes.push(position);
addTaxesPlatform("More taxes!");

addJobsPlatform = (position) => platform.jobs.push(position);
addJobsPlatform("We need more jobs!");

addInfrasturcturePlatform = (position1, position2) => platform.infrastructure.push(position1, position2);
addInfrasturcturePlatform("Fix the roads", "Build the bridges");

addHealthPlatform = (position) => platform.healthCare.push(position);
addHealthPlatform("Healthcare for all");

addCrimePlatform = (position) => platform.crimeAndEnforcement.push(position);
addCrimePlatform("Sensible sentences");

changeDonationURL = (URL) => donationURL = (URL);
changeDonationURL("http://www.cooperforcongress.com/");

changeCalendarAppt = (event) => eventCalendar.week1.Sunday = (event);
changeCalendarAppt("Fly to Washington");

// function to add all volunteer info in one function

addVolunteers = (name, address, email, phoneNumber, availability, abilities) => {
  let newObject = {
    name: name,
    address: address,
    email: email,
    phoneNumber: phoneNumber,
    availability: availability,
    abilities: abilities
  }
  volunteerInfo.push(newObject)
}

addVolunteers("Richard Lancaster", "Nashville, TN", "rjlancaster@gmail.com", "615-423-0200", "Mondays", "Phone bank");
addVolunteers("Will Morgan", "Nashville, TN", "william.g.morgan@gmail.com", "615-416-2797", "Tuesdays", ["Phone Bank"]);


// Just playing around with function to add abilities to ability array within volunteerInfo.

// addAbilities = (name, ability) => {
//   for (let i = 0; i < volunteerInfo.length; i++) {
//     if (name === volunteerInfo[i].name) {
//       let j = {
//         abilities = ability;
//       }
//       volunteerInfo[i].abilities.push(j);
//       break;
//     }
//   }
// }

// addAbilities("Will Morgan", "Canvas");