-- with "revenue" as (
--   select sum("films"."rentalRate") as "totalRevenue",
--           "films"."title" as "title"
--     from "films"
--     join "inventory" using ("filmId")
--     join "rentals" using ("inventoryId")
--   group by "films"."filmId"
-- ),
-- "cost" as (
--   select sum("films"."replacementCost") as "totalCost",
--          "films"."title" as "title"
--     from "films"
--     join "inventory" using ("filmId")
--   group by "films"."filmId"
-- ),
-- "profit" as (
--   select ("revenue"."totalRevenue" - "cost"."totalCost") as "totalProfit",
--          "films"."title"
--     from "revenue"
--     join "cost" using ("title")
--     join "films" using ("title")
-- )

with "cost" as (
  select sum("films"."replacementCost") as "totalCost",
         "films"."title"
    from "films"
    join "inventory" using ("filmId")
  group by "filmId"
),
"revenue" as (
  select sum("films"."rentalRate") as "totalRevenue",
         "films"."title"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
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
