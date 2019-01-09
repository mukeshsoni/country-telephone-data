'use strict';

// { [dialCode]: [{ iso2, name, format?, areaCodes? }] }
var data = require('./data');

var allCountries = [];
var allCountryCodes = {};
var iso2Lookup = {};

var dialCodes = Object.keys(data);
for (var i = 0; i < dialCodes.length; i++) {
  var dialCode = dialCodes[i];
  var countries = data[dialCode];
  allCountryCodes[dialCode] = [];
  for (var priority = 0; priority < countries.length; priority++) {
    var country = countries[priority];
    country.dialCode = dialCode;
    country.priority = priority;
    iso2Lookup[country.iso2] = allCountries.length;
    allCountries.push(country);
    if (country.areaCodes) {
      country.hasAreaCodes = true;
      for (var j = 0; j < country.areaCodes.length; j++) {
        var areaCode = dialCode + country.areaCodes[j];
        allCountryCodes[areaCode] = [country.iso2];
      }
    }
    allCountryCodes[dialCode].push(country.iso2);
  }
}

module.exports = {
  allCountries: allCountries,
  iso2Lookup: iso2Lookup,
  allCountryCodes: allCountryCodes
};
