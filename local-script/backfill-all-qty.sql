UPDATE rmms_road_assets
SET "Quantity" = COALESCE(
  NULLIF(trim("DumpSpecs"::json->>'total_number_within_section'), '')::numeric,
  NULLIF(trim("DumpSpecs"::json->>'h_total_number_within_section'), '')::numeric,
  NULLIF(trim("DumpSpecs"::json->>'total_number_post'), '')::numeric,
  NULLIF(trim("DumpSpecs"::json->>'number_work_within_section'), '')::numeric,
  NULLIF(trim("DumpSpecs"::json->>'number'), '')::numeric,
  "Quantity"
)
WHERE "IsActive"
  AND "DumpSpecs" IS NOT NULL
  AND "DumpSpecs" ~ '^{'
  AND ("Quantity" IS NULL OR "Quantity" = 1)
  AND (
    NULLIF(trim("DumpSpecs"::json->>'total_number_within_section'), '') IS NOT NULL
    OR NULLIF(trim("DumpSpecs"::json->>'h_total_number_within_section'), '') IS NOT NULL
    OR NULLIF(trim("DumpSpecs"::json->>'total_number_post'), '') IS NOT NULL
    OR NULLIF(trim("DumpSpecs"::json->>'number_work_within_section'), '') IS NOT NULL
    OR NULLIF(trim("DumpSpecs"::json->>'number'), '') IS NOT NULL
  );

SELECT "Type", count(*) AS n,
  round(avg("Quantity"), 1) AS avg_qty,
  count(*) FILTER (WHERE "Quantity" = 1) AS still_1
FROM rmms_road_assets
WHERE "IsActive"
GROUP BY "Type"
ORDER BY n DESC;
