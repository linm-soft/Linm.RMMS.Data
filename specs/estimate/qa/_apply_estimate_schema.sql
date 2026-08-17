-- QA unblock: Schema_RmmsAiVisionEstimates (hand migration thiếu Designer → EF skip)
CREATE TABLE IF NOT EXISTS rmms_ai_vision_estimates (
    "Id" uuid NOT NULL,
    "Code" character varying(64) NOT NULL,
    "IncidentId" character varying(64) NULL,
    "SourceType" character varying(32) NOT NULL,
    "DetectionIds" character varying(1024) NULL,
    "RouteSection" character varying(256) NULL,
    "DefectType" character varying(64) NULL,
    "DefectArea" numeric(18,4) NOT NULL,
    "Severity" character varying(32) NULL,
    "ModelVersion" character varying(128) NULL,
    "LaborHours" numeric(18,4) NOT NULL,
    "Equipment" character varying(512) NULL,
    "DurationDays" numeric(18,4) NOT NULL,
    "Status" character varying(32) NOT NULL,
    "TotalAmount" numeric(18,2) NOT NULL,
    "IsActive" boolean NOT NULL,
    "CreatedAt" timestamp with time zone NOT NULL,
    "UpdatedAt" timestamp with time zone NOT NULL,
    "ConfirmedAt" timestamp with time zone NULL,
    "CompanyCode" character varying(64) NOT NULL,
    CONSTRAINT "PK_rmms_ai_vision_estimates" PRIMARY KEY ("Id")
);

CREATE TABLE IF NOT EXISTS rmms_ai_vision_estimate_lines (
    "Id" uuid NOT NULL,
    "EstimateId" uuid NOT NULL,
    "SortOrder" integer NOT NULL,
    "ItemCode" character varying(64) NOT NULL,
    "ItemName" character varying(256) NOT NULL,
    "Qty" numeric(18,4) NOT NULL,
    "Unit" character varying(32) NOT NULL,
    "UnitPrice" numeric(18,2) NOT NULL,
    "Amount" numeric(18,2) NOT NULL,
    "Note" character varying(2000) NULL,
    "CompanyCode" character varying(64) NOT NULL,
    CONSTRAINT "PK_rmms_ai_vision_estimate_lines" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_rmms_ai_vision_estimate_lines_rmms_ai_vision_estimates_EstimateId"
      FOREIGN KEY ("EstimateId") REFERENCES rmms_ai_vision_estimates ("Id") ON DELETE CASCADE
);

CREATE UNIQUE INDEX IF NOT EXISTS "IX_rmms_ai_vision_estimates_CompanyCode_Code"
  ON rmms_ai_vision_estimates ("CompanyCode", "Code");
CREATE INDEX IF NOT EXISTS "IX_rmms_ai_vision_estimates_CompanyCode_Status_IsActive"
  ON rmms_ai_vision_estimates ("CompanyCode", "Status", "IsActive");
CREATE INDEX IF NOT EXISTS "IX_rmms_ai_vision_estimates_CompanyCode_IncidentId_IsActive"
  ON rmms_ai_vision_estimates ("CompanyCode", "IncidentId", "IsActive");
CREATE INDEX IF NOT EXISTS "IX_rmms_ai_vision_estimate_lines_EstimateId_SortOrder"
  ON rmms_ai_vision_estimate_lines ("EstimateId", "SortOrder");

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
SELECT '20260817100000_Schema_RmmsAiVisionEstimates', '8.0.0'
WHERE NOT EXISTS (
  SELECT 1 FROM "__EFMigrationsHistory" WHERE "MigrationId" = '20260817100000_Schema_RmmsAiVisionEstimates'
);
