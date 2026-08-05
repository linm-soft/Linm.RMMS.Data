# Demo control-map (modern MFE) — `attendance`

> **sourceKind:** `synthetic` · suy luận từ product docs (Check-in + BC checkin + geo-fence + 07 §5 + 15 #4–5).  
> **Không** đợi GOVOne leaf · **cấm** RECAPTURE-GAPS open chỉ vì thiếu capture.  
> **Rule:** UI **`/erp-form-context`** Kind E+D · **cấm** clone skin GOVOne · **cấm** BE.  
> Demo: `Linm.RMMS.Demo/src/demo/patrol/attendance.html`

## Kind hint

- **E** (report + map) — báo cáo công · filter · KPI · Leaflet
- **D** (slideout) — cấu hình GeoFence zone
- leave-confirm khi dirty zone

## Fields (26)

| Field | type | zone | Control |
|-------|------|------|---------|
| period | select | filter | Select |
| fromDate | date | filter | Date |
| toDate | date | filter | Date |
| routeId | select | filter · zone | Select |
| userId | select | filter | Select |
| onlyOutZone | checkbox | filter | Checkbox |
| dayKey | date | summary | Date |
| checkinCount | number | summary | Number |
| required | number | summary | Number (≥3/ngày) |
| inZonePct | number | summary | Number |
| status | badge | summary | StatusBadge |
| at | datetime | detail | DateTime |
| lat / lng | number | detail | Number |
| accuracyM | number | detail | Number |
| km | text | detail | Text |
| inZone | badge | detail · map | StatusBadge |
| note | text | detail | Text |
| source | select | detail | Select |
| zoneCode | text | zone | Text readonly |
| zoneName | text | zone | Text |
| radiusM / bufferM | number | zone | Number |
| enabled | switch | zone | Switch |
| zoneNote | textarea | zone | TextArea |
| polygonJson | textarea | zone | TextArea |

## Actions (26)

See `attendance-actions.md` · toolbar filter export map zone nav (Check-in + BC) · leave-confirm · validate mock.

## AI support (map 15 #4–5)

| Phase | Engine | Input | Output |
|-------|--------|-------|--------|
| P1 | Rule + PostGIS geo-fence / InZone | GPS · route · zone | InZone · % đúng tuyến · KPI ≥3 |
| P2 | Edge camera (sau) | — | DEFER · không claim mAP local |

Face/NFC: **DEFER** — không control trên demo P1.

## Skip chrome GOVOne

Logo · hamburger · chuông shell GOVOne · Ban.TK user skin — **không** port.
