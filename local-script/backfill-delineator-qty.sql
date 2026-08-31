UPDATE rmms_road_assets
SET "Quantity" = NULLIF(trim("DumpSpecs"::json->>'total_number_within_section'), '')::numeric
WHERE "Type" = 'DELINEATOR'
  AND "DumpSpecs" IS NOT NULL
  AND NULLIF(trim("DumpSpecs"::json->>'total_number_within_section'), '') IS NOT NULL
  AND ("Quantity" IS NULL OR "Quantity" = 1);

UPDATE rmms_road_assets
SET "Quantity" = NULLIF(trim("DumpSpecs"::json->>'h_total_number_within_section'), '')::numeric
WHERE "Type" = 'DELINEATOR'
  AND ("Quantity" IS NULL OR "Quantity" = 1)
  AND "DumpSpecs" IS NOT NULL
  AND NULLIF(trim("DumpSpecs"::json->>'h_total_number_within_section'), '') IS NOT NULL;

SELECT
  count(*) AS n,
  round(avg("Quantity"), 1) AS avg_qty,
  count(*) FILTER (WHERE "Quantity" = 1) AS still_1,
  count(*) FILTER (WHERE "Quantity" IS NULL) AS qty_null
FROM rmms_road_assets
WHERE "Type" = 'DELINEATOR' AND "IsActive";
