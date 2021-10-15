with "cost" as (
  select sum("films"."replacementCost") as "totalCost",
         "films"."title"
    from "films"
    join "inventory" using ("filmId")
  group by "filmId"
),
"revenue" as (
  select sum("payments"."amount") as "totalRevenue",
         "films"."title"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" using("rentalId")
  group by "filmId"
)

select "films"."title",
       "films"."description",
       "films"."rating",
       ("revenue"."totalRevenue" - "cost"."totalCost") as "totalProfit"
  from "films"
  join "cost" using ("title")
  join "revenue" using ("title")
order by "totalProfit" desc
 limit 5;
