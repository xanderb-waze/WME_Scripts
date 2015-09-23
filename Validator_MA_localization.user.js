// ==UserScript==
// @name                WME Validator Localization for Massachusetts
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.15
// @author              xanderb
// @description         This script localizes WME Validator for Massachusetts, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//
/*
  Rules 131, 135, and 138 updated by dbsooner
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
  ".updated": "2015-07-31",
  ".link": "TODO: ",
  "130.enabled": true,
  "130.params": {
    "titleEN": "City name on SR Alt",
    "problemEN": "State Roads with SR-xx as Alt should not have a city name",
    "solutionEN": "Reinput the SR alternate without the city name",
    "template": "@${altStreet[0]}#${altCity[0]}@${altStreet[1]}#${altCity[1]}@${altStreet[2]}#${altCity[2]}@@${altStreet[3]}#${altCity[3]}@${altStreet[4]}#${altCity[4]}@${altStreet[5]}#${altCity[5]}",
    "regexp": "/@SR-[0-9]{1,4}[A-Z]?#[^@]+/"
  },
  "131.enabled": true,
  "131.params": {
    "titleEN": "Inorrect Exit Name",
    "problem": "Incorrect format on Exit name may have incorrect numbered route, name format, incorrect Exit format",
    "solutionEN": "Check the format and make sure you do not have extra spaces",
    "template": "${typeRank}:${street}#${altStreet[#]}",
    "regexp": "/^12:.*([Ee]xit -|[Ee]xit [0-9]{1,3}[A-Za-z]{0,1} - |.* [0-9]{1,3} )/"
  },
  "131.solutionLink": "W:Massachusetts",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "City or County Hwy Name is not used here",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Massachusetts:.*(Cs-|CS-|County Hwy |County Rd |Cr-|Co Rd |CH-|Ch-|Co Rte )/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr or St or Dr where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/^([SNEW] )+(St |Dr )|^St |^Dr |Jr |Rev /"
  },
  "133.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations",
  "134.enabled": true,
  "134.severity": "warning",
  "134.params": {
    "titleEN": "Alley not Private Road",
    "problemEN": "Named Alleys should be set to the Private Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^6]/"
  },
  "134.solutionLink": "W:Road_types/USA#Parking_Lot_Road",
  "135.enabled": true,
  "135.params": {
    "titleEN": "Incorrect Highway Name",
    "problemEN": "Massachusetts uses SR for state and US for national highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Massachusetts:.*([Mm][Aa] [Hh][Ww][Yy] |[Ss]tate [Hh][Ww][Yy] |[Mm][Aa]-|[Mm][Aa] -|[Ss][Hh]-|[Ss][Hh] -|[Ss]tate [Rr][Dd] |[Ss][Rr]=|[Ss][Rr] |[Ss]r-|s[Rr]-|[Ss]tate [Rr]te |[Rr][Tt][Ee] |U\.?[Ss]\.? [Hh](WY|wy|ighway))/"
  },
  "135.solutionLink": "W:Massachusetts",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Major_Highway",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Invalid Interstate Name",
    "problemEN": "There seems to be an extra space there",
    "SolutionEN": "Remove the extra space in the name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/[Ii]- |i-/"
  },
  "138.solutionLink": "W:Road_names/USA#United_States_Interstate_Highway_System",
  "139.enabled": true,
  "139.params": {
    "titleEN": "City Name on Freeway",
    "problemEN": "City names on Freeway segments can cause detours",
    "solutionEN": "Remove the City Name",
    "template": "${typeRank}:${city}",
    "regexp": "/15:.+$/"
  },
  "139.solutionLink": "W:Massachusetts#City_Names_on_Freeway_Segments",
  //Freeway lock
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  //Major Highway lock
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 4,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 2,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Default US checks
  "27.enabled": !0,
  "90.enabled": !0,
  "106.enabled": !0,
  "112.enabled": !1,
  "170.enabled": !0,
  "170.params": {
      regexp: "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": !0,
  "171.solutionLink": "W:Abbreviations_&_Acronyms#Standard_Suffix_Abbreviations"
};