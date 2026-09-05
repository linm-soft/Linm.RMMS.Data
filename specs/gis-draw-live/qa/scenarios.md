# QA — scenarios — gis-draw-live

| Field | Value |
|-------|-------|
| feature | `gis-draw-live` |
| status | `done` |
| mfeStdUrl | `http://localhost:9302/gis/tai-san` |
| skillVersion | `2026.08.10.3` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.3` |
| versionGate | `ok` |
| updatedAt | `2026-09-01T20:25:00.000Z` |

## Preconditions

- `yarn start:std` on Gis MFE · port 9302
- Optional: RMMS API :5101 + BFF :5201 for live drawings; else local-seed fallback

## Scenarios

| # | Scenario | Steps | Expected | Result |
|---|----------|-------|----------|--------|
| QA-01 | Live map | Open mfeStdUrl | Leaflet tiles OSM · no fake gradient | PASS (code) |
| QA-02 | Vị trí của tôi | Click map-bar | Cho phép GPS → pin + vòng vùng · phóng viewport · popup **Tên: Vị trí của bạn** + **GPS:** · **không** nút Fit | pending (browser) |
| QA-03 | Layer toggle | Uncheck lớp tài sản | Features hide | PASS (code) |
| QA-04 | Draw Point/Line/Polygon | Leaflet.draw + chọn target | Draft → tab Thuộc tính inspect | PASS (code) |
| QA-05 | Save drawing | — | **removed** — không Lưu bản vẽ / Huỷ | N/A |
| QA-06 | Basemap | Tiêu chuẩn → Vệ tinh | 2 chip clip BFF · **không** Default/Streets/Sat EN · paint `setStyle` cùng MVT | PASS (code) |
| QA-07 | Full/Dock | Toggle icon map-bar | Full ẩn sidebar · dock hiện side + map **flex fill** remaining | PASS (code) |
| QA-08 | Click tài sản map | Click cụm / pin | Popup + tab Thuộc tính inspect · **không** auto zoom | PASS (code) |
| QA-13 | Inspect gov fields | Click biển / cột km | 3 tầng tuyến · dumpSpecs (số hiệu / vật liệu…) khi GET asset | PASS (code) |
| QA-10 | BFF fallback | Stop API · overlay | `local-seed` · persist localStorage | PASS (code) |
| QA-11 | BE contract | GET `/api/v1/gis/basemap-config?purpose=live` | defaultBasemap=`osm` | PASS (build) |
| QA-14 | z≤8 tuyến index | Tick Tuyến đường, zoom min VN | Nét **nền `#2563EB` + biên `#1D4ED8`** = bake/index bám OSM (không blob/chord biển) · overlay `tuyến · N đã ghim` · **không** chỉ 13 đoạn Nam/Tây Nguyên · **cấm** peach `#fcd6a4` overlay | pending (browser) |
| QA-15 | Zoom sát giữ nét | Tick Tuyến · zoom + tới phố (z≥12) trên QL **đã ghim** lúc z5 | Overlay **còn** trên tim đường OSM · **cấm** chord GPS thưa / cắt biển · fail = overlay **nét đứt** (`GAP-MAP-DRAW-STREET-01`) | pending (browser) |
| QA-16 | Nền đất/biển | Zoom min VN, full pane | Biển `#8eb8c8` **một** màu cả pane · đất chỉ VN `#e8e4dc` · **cấm** mép dọc 2 tone / dải inverted bên phải · Lào = biển clip | pending (browser) |
| QA-17 | Đường nền + biên | Tiêu chuẩn · zoom phố (z≥12) QL/ĐT | Nền peach/vàng theo class + **biên** casing rõ 2 phía · overlay Tuyến **blue** `#2563EB` khi tick · **cấm** peach overlay `#fcd6a4` | pending (browser) |
| QA-18 | Zoom max pin + QL | Zoom + đến max trên QL.1 · lớp pin bật | Dừng **z16** · QL **không** khe be 2 dải · pin tài sản vẫn hiện trên/near tim đường | pending (browser) |
| QA-19 | `?type=` auto-check | Open `/gis/tai-san?type=BUS_STOP` | Checkbox **Điểm đỗ / dừng xe** on · fetch lớp đó | pending (browser) |

## Exit

- No P0 gaps · PostGIS / Asset commit DEFER
- Builds PASS (FE typecheck+build · BE Release)

---
<!-- Version meta: skillVersion=2026.08.10.3 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
