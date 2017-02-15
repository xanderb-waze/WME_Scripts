// ==UserScript==
// @name                WME Validator Localization for Tennessee
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.1.1.50
// @author              xanderb
// @description         This script localizes WME Validator for Tennessee, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// ==/UserScript==
//

window.WME_Validator_United_States = {
  ".country": "United States",
  ".codeISO": "US",
  ".author": "xanderb",
  ".updated": "2017-02-15",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Invalid city name",
    "problemEN": "The city name is not an incorporated municipality in Tennessee",
    "solutionEN": "Check the city and if it not incorporated, move it to the Alt city name.",
    "template": "${city}",
    "regexp": "!/.*(^$|Adams|Adamsville|Alamo|Alcoa|Alexandria|Algood|Allardt|Altamont|Ardmore|Arlington|Ashland City|Athens|Atoka|Atwood|Auburntown|Baileyton|Baneberry|Bartlett|Baxter|Bean Station|Beersheba Springs|Bell Buckle|Belle Meade|Bells|Benton|Berry Hill|Bethel Springs|Big Sandy|Blaine|Bluff City|Bolivar|Braden|Bradford|Brentwood|Brighton|Bristol|Brownsville|Bruceton|Bulls Gap|Burlison|Burns|Byrdstown|Calhoun|Camden|Carthage|Caryville|Cedar Hill|Celina|Centertown|Centerville|Chapel Hill|Charleston|Charlotte|Chattanooga|Church Hill|Clarksburg|Clarksville|Cleveland|Clifton|Clinton|Coalmont|Collegedale|Collierville|Collinwood|Columbia|Cookeville|Coopertown|Copperhill|Cornersville|Cottage Grove|Covington|Cowan|Crab Orchard|Cross Plains|Crossville|Crump|Cumberland City|Cumberland Gap|Dandridge|Dayton|Decatur|Decaturville|Decherd|Dickson|Dover|Dowelltown|Doyle|Dresden|Ducktown|Dunlap|Dyer|Dyersburg|Eagleville|East Ridge|Eastview|Elizabethton|Elkton|Englewood|Enville|Erin|Erwin|Estill Springs|Ethridge|Etowah|Fairview|Farragut|Fayetteville|Finger|Forest Hills|Fort Campbell|Franklin|Friendship|Friendsville|Gadsden|Gainesboro|Gallatin|Gallaway|Garland|Gates|Gatlinburg|Germantown|Gibson|Gilt Edge|Gleason|Goodlettsville|Gordonsville|Grand Junction|Graysville|Greenback|Greenbrier|Greeneville|Greenfield|Gruetli-Laager|Guys|Halls|Harriman|Harrogate|^Hartsville|Henderson|Hendersonville|Henning|Henry|Hickory Valley|Hohenwald|Hollow Rock|Hornbeak|Hornsby|Humboldt|Huntingdon|Huntland|Huntsville|Iron City|Jacksboro|Jackson|Jamestown|Jasper|Jefferson City|Jellico|Johnson City|Jonesborough|Kenton|Kimball|Kingsport|Kingston|Kingston Springs|Knoxville|La Grange|Lafayette|La Follette|Lakeland|Lakesite|Lakewood|La Vergne|Lawrenceburg|Lebanon|Lenoir City|Lewisburg|Lexington|Liberty|Linden|Livingston|Lobelville|Lookout Mountain|Loretto|Loudon|Louisville|Luttrell|^Lynchburg|Lynnville|Madisonville|Manchester|Martin|Maryville|Mason|Maury City|Maynardville|McEwen|McKenzie|McLemoresville|McMinnville|Medina|Medon|Memphis|Michie|Middleton|Milan|Milledgeville|Millersville|Millington|Minor Hill|Mitchellville|Monteagle|Monterey|Morrison|Morristown|Moscow|Mosheim|Mount Carmel|Mount Pleasant|Mountain City|Mount Juliet|Munford|Murfreesboro|Nashville|New Hope|New Johnsonville|New Market|New Tazewell|Newbern|Newport|Niota|Nolensville|Normandy|Norris|Oak Hill|Oak Ridge|Oakdale|Oakland|Obion|Oliver Springs|Oneida|Orlinda|Orme|Palmer|Paris|Parkers Crossroads|Parrottsville|Parsons|Pegram|Petersburg |Philadelphia|Pigeon Forge|Pikeville|Piperton|Pittman Center|Plainview|Pleasant Hill|Pleasant View|Portland|Powells Crossroads|Pulaski|Puryear|Ramer|Red Bank|Red Boiling Springs|Ridgely|Ridgeside|Ridgetop|Ripley|Rives|Rockford|Rockwood|Rocky Top|Rogersville|Rossville|Rutherford|Rutledge|Saltillo|Samburg|Sardis|Saulsbury|Savannah|Scotts Hill|Selmer|Sevierville|Sharon|Shelbyville|Signal Mountain|Silerton|Slayden|Smithville|Smyrna|Sneedville|Soddy\-Daisy|Somerville|South|South|South|Sparta|Spencer|Spring City|Spring Hill|Springfield|Stanton|Stantonville|St. Joseph|Sunbright|Surgoinsville|Sweetwater|Tazewell|Tellico Plains|Tennessee Ridge|Thompson's Station|Three Way|Tiptonville|Toone|Townsend|Tracy City|Trenton|Trezevant|Trimble|Troy|Tullahoma|Tusculum|Unicoi|Union City|Vanleer|Viola|Vonore|Walden|Wartburg|Wartrace|Watauga|Watertown|Waverly|Waynesboro|Westmoreland|White Bluff|White House|White Pine|Whiteville|Whitwell|Williston|Winchester|Winfield|Woodbury|Woodland Mills|Yorkville)/"
  },
  "129.enabled": true,
  "129.params": {
    "titleEN": "Potentially Incorrect Suffix",
    "problemEN": "Street suffix does not follow abbreviation rules",
    "solutionEN": "Rename the suffix Such as Road to Rd Please let me know about false positives",
    "template": "${street}",
    "regexp": "!/(Unknown Name| A(cres?|ly|nnex|ve|r(cade|tery))| B(ay|ch|end|lvd|luf|roadway|ypass|YP|r(a(e|nch|ook))?|ottom|(ike|us)way|ayou)| C(enters|t|lb?|hase|ommons?|o(urse|rs|rner)|ONN|amp|r(es|est|k)?|ir|swy|tr|v|u(rve|toff)|yn)| D(am|ale|ell|onws|r)| E(ast|dgeway|n(d|t)|xit|states?|splanade|x(t|pwy))| F(airway|or(rges?|d|ks?)|wy|alls?|lats?)| G(ardens?|len|rv|r(ee)?n|a(p|te(way)?))| H(arborr|ills?|ollows?|ts|wy|ospital)| I(sle|nlt)| Junctions?| K(eys?|nolls?)| L(ocks?|dg|in[ke]|f|gts?|ndg|[np])|oop| M(all|dw|eadows|nr|anors|t|ns?|ile|o(hr|torway)|ews|sn)| N(eck|orth)| O(aks|ne|rchard|v(al|er(look|pass)))| P(a(ss|th|rade)|ike|romanade|o(intes?|rts?)|l(ns|z)?|k(e|s)?|kwys?|ts?)| R(d|e(ach|st)|ow|i(se|ver)|amp|ailroad|nch|\.R\.|ailway|pds|idge|u(n(way)?|e)|te)| S(ho(als?|res?)|kwy|outh|p(ur|ngs|ring)|u(permarket|bdivision)|t(a|r(ip|ut))|[qt]s?)| T(er|hwy|race|pke?|un|urn|r(l|fy)|ra(ck|in))| U(nderpass|pr)| V(iews?|i(llages?|sta)|ly|alleys|iaduct)| W(alk|ays?|ls?|est|oods|ynde?)| X(-ing|rd)| Yard|^$)( [SNEW]{1,2})?$|^([SNEW]{1,2} )?(Old )?(\\d{1,4} [SNEW]|Broadway|MBTA|Railroad|Amtrak|I-|IN-|IA-|KY?-|US-|LA?-|M[DNSO]?-|N[VJYCD]?-|S[CDRH]?-|RI?-|TN-|V[AT]-|W(V|IS)-|C[RH]-|Runway|Place |Parkway|Access |Avenue |Circle of |State |County |The |to |(Left )?E(xit( to:)?|ntry) )/",
  },
  "129.solutionLink": "W:User:Xanderb/Abbreviations",
  "130.enabled": true,
  "130.params": {
    "titleEN": "Incorrect Highway",
    "problemEN": "Tennessee uses TN for state and US for national highway names",
    "solutionEN": "Rename the Street or Alt Street or check for space in Interstate name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Tennessee:.*(Tn Hwy |State Hwy |Tn-|SH-|State Rd |TN=|State Rte |I- |U\.?[Ss]\.? [Hh](WY|wy|ighway))/"
  },
  "130.solutionLink": "W:Tennessee#Naming",
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
    "regexp": "/Tennessee:.*(Cs-|CS-|County Rd |Cr-|Co Rd|CH-|Ch-)/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "133.enabled": true,
  "133.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr, St, Dr, or Rev where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/((^| )(St|Dr)(?! ((Ext|[NEWS][EW]?)\\b|\/|\\())|(Jr|Rev)) /"
  },
  "133.solutionLink": "W:Abbreviations_and_acronyms/USA",
  "134.enabled": true,
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
    "titleEN": "Wrong road type (major)",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "135.solutionLink": "W:Road_types/USA#Major_Highway",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type (minor)",
    "problemEN": "All US BUS, SPUR, LOOP highways and State Highways (except BUS, SPUR, LOOP) should be at least Minor Highway type",
    "solutionEN": "Change the road type to Minor Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^2-5]:.*#((State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*|(US Hwy |US-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?)@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Minor_Highway",
  "137.enabled": true,
  "137.params": {
    "titleEN": "Wrong road type (primary)",
    "problemEN": "All State BUS, SPUR, LOOP Highways should be at least Primary Street type",
    "solutionEN": "Change the road type to Primary Street",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^1-5]:.*#(State Hwy |SR-|SH-|IL-|IN-|K-|LA-|M-|MA-|MO-|MS-|NC-|ND-|NJ-|NV-|NY-|SC-|SD-|TN-|VT-|WIS-)[0-9]+( BUS| LOOP| SPUR)+( [NSWE])?@/i"
  },
  "137.solutionLink": "W:Road_types/USA#Primary_Street",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Wrong banner abbreviation",
    "problemEN": "Banner abbreviation may be incorrect. Abbreviations ALT, BUS, BYP, CONN, LOOP, and SPUR should be in ALL CAPS",
    "solutionEN": "Change banner abbreviation to ALT, BUS, BYP, CONN, LOOP, SPUR, or TRUCK, check wiki for Scenic",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/[0-9]+[A-Z]? ([Aa]lt(ernate)?|[Bb](us(iness)?|yp(ass)?)|[Cc]onn(ector)?|[Ll]oop|[Ss]pur|[Tt]ruck|[Ss]cn)/"
  },
  "138.solutionLink": "W:Road_names/USA#United_States_Numbered_Highways",
  "139.enabled": true,
  "139.params": {
    "titleEN": "Name on Railroad",
    "problemEN": "Names on Railroads are not needed for routing and clutter the app UI",
    "solutionEN": "Remove the Names and Cities from Railroad segments",
    "template": "${type}:${street}",
    "regexp": "/^18:.+$/"
  },
  "139.solutionLink": "W:Road_types/USA#Railroad",
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
};
