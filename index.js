'use strict'

var allCountries = require('./data');

// we will build this in the loop below
var allCountryCodes = {};
var iso2Lookup = {};
var addCountryCode = function (iso2, dialCode, priority) {
    if (!(dialCode in allCountryCodes)) {
        allCountryCodes[dialCode] = [];
    }
    var index = priority || 0;
    allCountryCodes[dialCode][index] = iso2;
};

for (var i = 0; i < allCountries.length; i++) {
   // countries
   var c = allCountries[i];
   allCountries[i] = {
       name: c[0],
       iso2: c[1],
       dialCode: c[2],
       priority: c[4] || 0
   };

   // format
   if (c[3]) {
       allCountries[i].format = c[3];
   }

   // area codes
   if (c[5]) {
       allCountries[i].hasAreaCodes = true;
       for (var j = 0; j < c[5].length; j++) {
           // full dial code is country code + dial code
           var dialCode = c[2] + c[5][j];
           addCountryCode(c[1], dialCode);
       }
   }
   iso2Lookup[allCountries[i].iso2] = i;

   // dial codes
   addCountryCode(c[1], c[2], c[4]);
}

module.exports = {
           allCountries: allCountries,
           iso2Lookup: iso2Lookup,
           allCountryCodes: allCountryCodes
       };
