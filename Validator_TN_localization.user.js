// ==UserScript==
// @name                WME Validator Localization for Tennessee
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.15
// @author              xanderb
// @description         This script localizes WME Validator for Tennessee, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
/*
  See Settings->About->Available checks for complete list of checks and their params.
  Examples:
  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},
  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
*/

window.WME_Validator_United_States = {
  ".country": "United States",
  ".codeISO": "US",
  ".author": "xanderb",
  ".updated": "2015-03-10",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Saint not Street TTS",
    "problemEN": "Streets that start with St result in TTS reading Street",
    "solutionEN": "Add a period after St at the beginning of the street name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^St /"
  },
  "128.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect State Highway",
    "problemEN": "Tennessee uses TN for numbered highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Tennessee:.*(Tn Hwy |State Hwy |Tn-|SR-|SH-|State Rd|TN=|State Rte)/"
  },
  "129.solutionLink": "W:Tennessee#Naming",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Short Parking Lot",
    "problemEN": "Dead End Parking Lot is less that 50 meters",
    "solutionEN": "Does it really need to be there? Sometimes they are okay",
    "template": "${deadEnd}:${typeRank}:${length}",
    "regexp": "/1:7:([0-4]?[0-9])$/"
  },
  "130.solutionLink": "W:Best_map_editing_practice#Parking_Lots",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Not Tennessee",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in TN and change it or disable script when working in another state",
    "template": "${state}",
    "regexp": "!/Tennessee/"
  },
  "131.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Tennessee:.*(Cs-|CS-|County Rd|Cr-|Co Rd|CH-|Ch-|CR-)/"
  },
  "132.solutionLink": "W:Highway_naming/USA"
};