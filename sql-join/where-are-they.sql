select "line1",
       "district",
       "cities"."name" as "city"
  from "addresses"
  join "cities"
    on "cities"."cityId" = "addresses"."cityId"
