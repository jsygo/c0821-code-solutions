with "revenue" as (
  select sum("films"."rentalRate") as "totalRevenue",
          "films"."title" as "title"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
  group by "films"."filmId"
),
"profit" as (
  select ("revenue"."totalRevenue" - "films"."replacementCost") as "totalProfit",
         "films"."title"
    from "revenue"
    join "films" using ("title")
)

-- with "profit" as (
--   select (sum("films"."rentalRate") - "films"."replacementCost") as "totalProfit",
--          "films"."title"
--     from "films"
--   group by "films"."title"
-- )

select "films"."title",
       "films"."description",
       "films"."rating",
       "profit"."totalProfit"
  from "films"
  join "profit" using ("title")
order by "totalProfit" desc
 limit 5;
