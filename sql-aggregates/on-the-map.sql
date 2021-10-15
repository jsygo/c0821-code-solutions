select "countries"."name" as "country",
       count("cities".*) as "numOfCities"
  from "countries"
  join "cities" using ("countryId")
group by "countryId";
