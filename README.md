## Country telephone data

Contains data about a country's telephone codes. It has information on the country's ISD code, the country's ISO name, and a subscribed format for the telephone numbers in that country.

E.g.

```
{
   name: "Zimbabwe",
   iso2: "zw",
   dialCode: "263",
   format: "+...-.-......",
   hasAreaCodes: false
}
```

The required module is an object with following structure -

```
{
   allCountries: allCountries,
   allCountriesIso2Lookup: allCountriesIso2Lookup
}
```

allCountries is an array with data on each country as an object with the following format -

```
{
   name: "Zimbabwe",
   iso2: "zw",
   dialCode: "263",
   format: "+...-.-......",
   hasAreaCodes: false
}
```

allCountriesIso2Lookup is the same data as `alLCountries`, but as a map, indexed by the `iso2` name of the country -

```
{
    ...
    zw: {
       name: "Zimbabwe",
       iso2: "zw",
       dialCode: "263",
       format: "+...-.-......",
       hasAreaCodes: false
    },
    ...
}
```
