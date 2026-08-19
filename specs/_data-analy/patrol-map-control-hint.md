# Data-analy — patrol-map (controlHint)

| | |
|---|---|
| feature | `patrol-map` |
| title | [Mobile] Bản đồ ca |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`map`** |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_eae07681` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-patrol-map` `DES-MOB-PAT-MAP` |
| ctx | `docs/context/features/patrol-map.md` · `patrol.md` · `patrol-home.md` |
| generatedAt | `2026-08-20T01:40:00.000Z` |

**Cấm:** watermark Gói · device label · invent GPS form · gộp check-in sheet vào slug này · invent `api/v1/patrol-map`.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| Map | **yes** | OMS live · iOS MapKit · Android OSM tiles |
| GPS | toast only | pin CTA · live GPS **P2** |
| Camera | n/a | sibling |
| Offline | map vẫn mở | overlay demo nếu GET fail |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` — 1 surface push (không segment trên map) · Tab 5 shell **giữ** dưới map (`GAP-TAB-01` · **cấm** invent tab).

## § Demo dual

Cùng copy VN · cùng `#i-mappin` pin · **cấm** invent icon. Lệch chrome: iOS back **Tuần đường** + chevron · Android icon back (HIG/M3). Title **Ca đang chạy**. Trailing **Ghi điểm tuần**.

## controlHint

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tuần đường | IconButton / text+chevron | label 13 | `LinmTopBar` leading | reuse `patrol-home` pop |
| title | Ca đang chạy | NavTitle | 17 | `LinmTopBar` | fixed |
| navCheckin | Ghi điểm tuần | TextButton | 13 | `LinmTopBar` trailing | toast P1 · **cấm** sheet |
| mapHost | Bản đồ tuần tra OMS | Map | full | feature MapKit / OSM | **cấm** WebView HTML demo |
| nextEyebrow | Điểm tiếp theo · OSRM | Text | label 13 | overlay card | demo SSOT |
| nextTitle | Km 1561+134 · Phước Dinh | Text | field 16 | overlay | bind session.route P1 fallback demo |
| nextCheckin | Ghi điểm tuần | PrimaryButton | 16 | `LinmPrimaryButton` | toast P1 |
| pinHere | Ghim vị trí hiện tại | PrimaryButton | 16 | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` | toast P1 |
| baseOsm | Đường | Chip | 13 | `LinmChip` | default on |
| baseEsri | Phố | Chip | 13 | `LinmChip` | iOS ≈ standard muted / Android Esri |
| baseSat | Vệ tinh | Chip | 13 | `LinmChip` | imagery |
| fitAll | Toàn tuyến | Chip | 13 | `LinmChip` | fit overlay |
| lgAll | Tất cả | Chip | 13 | `LinmChip` | isolate all |
| lgTrack | Hành trình | Chip | 13 | `LinmChip` | polyline |
| lgDone | Đã ghi điểm tuần | Chip | 13 | `LinmChip` | pin done |
| lgNext | Điểm kế tiếp | Chip | 13 | `LinmChip` | pin next |

UNCLEAR = **none**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| contentHash | sha256:patrol-map-control-hint-20260820 |
