// ==UserScript==
// @name                WME Validator Localization for California
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.6
// @author              xanderb
// @description         This script localizes WME Validator for California, USA. You also need main package (WME Validator) installed.
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
  ".updated": "2015-10-31",
  ".link": "TODO: ",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Incorrect State Highway",
    "problemEN": "California uses SR-xx or CA-xx for state and US-xx for national highway names",
    "solutionEN": "Rename the Street or Alt Street",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/.*(Ca (Hwy|Rte) |St(ate)? ([Hh](WY|wy|ighway)|R(ou)?te|R(oa)?d) |SH-|(SR|CA)=|^R(ou)?te |St(ate)? R(ou)?te-|U\.?[Ss]\.? [Hh](WY|wy|ighway))/"
  },
  "130.solutionLink": "W:Highway_naming/USA",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr, St, Dr, or Rev where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/((^([SNEW] )?(St|Dr))|Jr|Rev) /"
  },
  "131.solutionLink": "W:Abbreviations_and_acronyms#Standard_suffix_abbreviations/USA",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "City or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/^California:.*(Cs-|CS-|Co(unty)? ([Hh](WY|wy|ighway)|R(ou)?te|R(oa)?d)( |-) |Cr-|C[Hh]-)/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Wrong road type (minor)",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |State Rte |SR-|SH-|CA-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WV-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "133.solutionLink": "W:Road_types/USA#Minor_Highway",
  "134.enabled": true,
  "134.severity": "warning",
  "134.params": {
    "titleEN": "Alley not PLR",
    "problemEN": "Alleys should be set to the PLR Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^7]/"
  },
  "134.solutionLink": "W:Road_types/USA#Parking_Lot_Road",
  "135.enabled": true,
  "135.params": {
    "titleEN": "Not California",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in WV and change it",
    "template": "${state}",
    "regexp": "!/California/"
  },
  "135.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Major_Highway",
  "137.enabled": true,
  "137.params": {
    "titleEN": "Invalid Interstate Name",
    "problemEN": "There seems to be an extra space there",
    "SolutionEN": "Remove the extra space in the name",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/I- /"
  },
  "137.solutionLink": "W:Road_names/USA#United_States_Interstate_Highway_System",
  "138.enabled": true,
  "138.params": {
    "titleEN": "The legendary Portola Valley smudge",
    "problemEN": "Portola Valley is on segments that it should not be",
    "solutionEN": "Check to make sure you are not actually in Portola Valley and remove the incorrect City Name",
    "template": "${city}#${altCity}[#]",
    "regexp": "/Portola Valley/i"
  },
  "139.enabled": true,
  "139.params": {
    "titleEN": "Improper Cardinal Usage",
    "problemEN": "This name contains a cardinal direction (NEWS) which does not match wiki guidelines.",
    "solutionEN": "If this cardinal should be spoken as a direction by TTS, make sure it has space on either side of it. \n\ If this cardinal should be spoken by TTS as a letter, follow it with a period. \n\ All cardinals should be capitalized.",
    "template": "${street} ${altStreet[#]}",
    "regexp": "/(^| )([NEWS]?[news][NEWS]?|[\"']?([NnSs][EeWw]?|[EeWw])['\":-]|[\"']([NnSs][EeWw]?|[EeWw])['\":-]?)(\\b|\\d| |$)/"
  },
  "139.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
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
  "n": 3,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 5,
  },
  //Default US checks
  "24.enabled": !0,
  "25.enabled": !0,
  "27.enabled": !0,
  "34.enabled": !0,
  "35.enabled": !0,
  "38.enabled": !0,
  "39.enabled": !0,
  "43.enabled": !0,
  "48.enabled": !0,
  "78.enabled": !0,
  "87.enabled": !0,
  "90.enabled": !0,
  "106.enabled": !0,
  "107.enabled": !0,
  "108.enabled": !0,
  "109.enabled": !0,
  "112.enabled": !1,
  "118.enabled": !0,
  "116.enabled": !0,
  "119.enabled": !0,
  "120.enabled": !0,
  "121.enabled": !0,
  "172.enabled": !0,
  "173.enabled": !0,
  "190.enabled": !0,
  "192.enabled": !0,
  "170.enabled": !0,
  "170.params": {
      regexp: "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": true,
  "171.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "171.params": {
    "regexp": "/((?!(\\bPhila|\\bPenna|.(\\bWash|\\bCmdr|\\bProf|\\bPres)|..(Adm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|...(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|...(#| )[NEWSR])).{5}\\.|(?!(hila|enna|(\\bWash|\\bCmdr|\\bProf|\\bPres)|.(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|..(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|..(#| )[NEWSR])).{4}\\.|(?!(ila|nna|(ash|mdr|rof|res)|(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|.(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|.(#| )[NEWSR])).{3}\\.|(?!(la|na|(sh|dr|of|es)|(dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl)|(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|(#| )[NEWSR])).{2}\\.|(#|^)[^NEWSR]?\\.)|(((?!\\b(D|O)).|#|^)\'(?![sl]\\b)|(?!\\bNat).{3}\'l|(#|^).{0,2}\'l)|(Dr|St)\\.(#|$)|,|;|\\\\|((?!\\.( |#|$|R))\\..|(?!\\.( .|#.|$|R\\.))\\..{2}|\\.R(#|$|\\.R))|[Ee]x(p|w)y|Tunl|Long Is\\b|Brg/",
    "problemEN": "The street name has incorrect abbreviation, or character",
    "solutionEN": "Check upper/lower case, a space before/after the abbreviation and the accordance with the abbreviation table. Remove any comma (,), backslash (\\), or semicolon (;)"
  },
};