INSERT INTO rmms_ai_vision_estimates (
  "Id","Code","IncidentId","SourceType","DetectionIds","RouteSection","DefectType","DefectArea","Severity","ModelVersion","LaborHours","Equipment","DurationDays","Status","TotalAmount","IsActive","CreatedAt","UpdatedAt","ConfirmedAt","CompanyCode"
) VALUES (
  'aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001',
  'EST-QA-001',
  'INC-QA-01',
  'Incident',
  NULL,
  'QL1 · Km12+000',
  'Nứt',
  12.5,
  'Medium',
  'qa-seed-v1',
  4,
  'Máy cắt',
  2,
  'Draft',
  1500000,
  true,
  NOW(),
  NOW(),
  NULL,
  'LINM'
) ON CONFLICT DO NOTHING;

INSERT INTO rmms_ai_vision_estimate_lines (
  "Id","EstimateId","SortOrder","ItemCode","ItemName","Qty","Unit","UnitPrice","Amount","Note","CompanyCode"
) VALUES (
  'aaaaaaaa-bbbb-cccc-dddd-eeeeeeee1001',
  'aaaaaaaa-bbbb-cccc-dddd-eeeeeeee0001',
  1,
  'VT-01',
  'Nhựa đường',
  10,
  'kg',
  150000,
  1500000,
  'QA seed',
  'LINM'
) ON CONFLICT DO NOTHING;
