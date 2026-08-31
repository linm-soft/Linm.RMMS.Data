# RMMS — Feature tracking (demo · STATUS · implement · release)

> **SSOT theo dõi.** Backlog mô tả: [`features/README.md`](features/README.md). Pipeline scan: [`implement-status.json`](implement-status.json) (có thể lệch — **ưu tiên** `specs/{slug}/STATUS.md`).  
> **HĐ:** `37001-08/2026-LIC/LINM-JNET` · PL01 P1 CAPEX 900tr (A 450 + B 300 + C 150). Spec: [`Linm.RMMS.Contract/analy/PROMPT-SPEC-P1-P2-PHU-LUC-RELEASE.md`](../../../Linm.RMMS.Contract/analy/PROMPT-SPEC-P1-P2-PHU-LUC-RELEASE.md).  
> **Demo hub:** `Linm.RMMS.Demo` · `npm run start:std` → http://localhost:5180 · catalog [`demoCatalog.ts`](../../../Linm.RMMS.Demo/src/demoCatalog.ts).  
> **Cập nhật:** 2026-09-01 · skill **`/gen-feature-tracking`** — thêm feature / implement (queue + chat) **phải** upsert file này. Nguồn STATUS đọc cùng ngày.  
> **Tài liệu khách (đã/chưa phân tích) — SSOT duy nhất:** [`docs/data/SOURCE-TRACKING.md`](../data/SOURCE-TRACKING.md) · extract [`docs/data/analyzed/`](../data/analyzed/). **Cấm** đọc lại xlsx/docx/pdf khi dòng = `analyzed`.  
> **Changelog:** 01/09/2026 — `/hey-linm` + `/set-up-ignore-cursorrules` `!docs/img/` · `/data-gov-integration` cluster sổ TS + enqueue `so-ts-type-grid` + 32 mã — [`so-ts-type-grid.md`](features/so-ts-type-grid.md). · 31/08/2026 — `/data-gov-integration` cọc H: dump đủ `h_*` · import `quantity=1` + FE đảo loại cọc/vật liệu · form tách Cọc tiêu / Cọc H — [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md). · 31/08/2026 — `/data-gov-integration` + `/hey-linm` Apply: map 3 tầng tuyến + đủ cột dump mọi loại (tuyến/`tbl_rmd` · cọc/`tbl_guide_post` · biển · cột km) — [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) · GAP-GOV-ROUTE-3LVL / GAP-PAV-SPEC-01 / GAP-DELIM-SPEC-01 / GAP-SIGN-SPEC-01. · 30/08/2026 — `org-route-scope` doc 6 cấp Cục→Khu→VP→Đơn vị→tuyến→đoạn · GAP-ORS-CASCADE-01. · 30/08/2026 — `org-route-scope` edit: `vpOrgCode` + cascade · Schema_OrgRouteScopeVpOrgCode. · 30/08/2026 — `reports-filter-bar` `task_a5f134b0` `pending_confirm` (edit `/bao-cao` filter · hold đến `org-route-scope` done + user confirm) · hủy `task_aede4d75`. · 29/08/2026 — enqueue `kcht-cong-trinh` `task_399151e1` edit_page PH2–PH4 · extract wave + SRC-KCT-GN03. · 28/08/2026 — `incident` (`/su-co`) upsert Pipeline `data_analy` / `pending` + task **T-PILOT-01** (e2e + HDSD + guide). · 27/08/2026 — upsert `kcht-cong-trinh` (công văn KQLĐB IV · 5 phân hệ CT KCHT · ngoài PL01 900tr) · `/hey-linm` + plan.

## Chính sách (chốt user 2026-08-26)

| | |
|--|--|
| **Implement** | Làm **đủ phase** (P1 + P2 + P3 theo define) trong repo / demo / pipeline. |
| **Release khách** | Cắt **từng phần** theo HĐ (đợt PL01 P1 trong 900 · PL04 sau CR). |
| **Không conflict** | Demo hoặc STATUS có P2/P3 **không** = lệch HĐ. Đó là implement sớm; khách chưa nhận slice đó. |
| **Còn việc** | Chỉ pipeline **mở** (pending / in_progress / blocked / await_confirm / draft) hoặc **thiếu artifact** (không STATUS / không demo khi pack cần demo). |

**03c alias (không conflict):** HĐ slug `camera-gtvt` = Data/demo `camera-connect`. ITS (`its-traffic-detect` · `its-anpr-overload`) = implement P2, release PL04.

---

## Legend

| Cột | Ý nghĩa |
|-----|---------|
| **Release** | Slice khách hiện tại: `P1-900` · `P1.5` · `P2-CR` · `P3-CR` · `support` (không mã PL) |
| **Implement** | Phase đang build trong repo |
| **Pipeline** | `STATUS.md` `phase` / `status` |
| **Demo** | `catalog` = `demoCatalog.ts` · `hub` = HTML ngoài catalog · `none` · `proto` = specs prototype |
| **Next** | Việc pipeline còn (không phải “cấm P2”) |

Đường dẫn tương đối từ file này (`docs/context/`).

---

## Index

| Slug | Tên | PL | Release | Pipeline | Demo | Context | STATUS |
|------|-----|----|---------|----------|------|---------|--------|
| `master` | Hub Master | — | support | `done` / `done` | none | [ctx](features/master.md) | [ST](../../specs/master/STATUS.md) |
| `org-unit` | Cơ cấu TC DRVN | — | support | done | none | [ctx](features/org-unit.md) | [ST](../../specs/org-unit/STATUS.md) |
| `road-route` | Tuyến đường | — | support | done | none | [ctx](features/road-route.md) | [ST](../../specs/road-route/STATUS.md) |
| `asset-type` | Loại TS KCHT | — | support | done | none | [ctx](features/asset-type.md) | [ST](../../specs/asset-type/STATUS.md) |
| `partner-unit` | Sở / BOT / Cty | — | support | done | none | [ctx](features/partner-unit.md) | [ST](../../specs/partner-unit/STATUS.md) |
| `org-route-scope` | Zone km Khu↔tuyến/đoạn | — | support | `done` / `done` | none | [ctx](features/org-route-scope.md) | [ST](../../specs/org-route-scope/STATUS.md) |
| `asset` | QL tài sản ĐB | 01 | P1-900 | `data_analy` / `draft` | catalog | [ctx](features/asset.md) | [ST](../../specs/asset/STATUS.md) |
| `asset-kcht-32` | 36 loại TS | 01 | P1-900 | `qa` / `await_confirm` | proto mobile-p1 | [ctx](features/asset-kcht-32.md) | [ST](../../specs/asset-kcht-32/STATUS.md) |
| `csdl-so-sach` | 12 biểu + 8 sổ | 01 | P1-900 | `done` / `done` | catalog | [ctx](features/csdl-so-sach.md) | [ST](../../specs/csdl-so-sach/STATUS.md) |
| `pavement-section` | Biểu 1 mặt đường | 01 | P1-900 | done | catalog | [ctx](features/pavement-section.md) | [ST](../../specs/pavement-section/STATUS.md) |
| `import-gov-ssot` | Import dump moc → gov-vn | — | support | context / open GAP | none | [ctx](features/import-gov-ssot.md) · [fields](features/import-gov-asset-fields.md) | — |
| `traffic-sign-type` | Loại biển báo theo mã QCVN | — | support | implement | catalog | [ctx](features/traffic-sign-type.md) | — |
| `asset-kcht-dashboard` | Hub 40 ô KCHT | 01 | P1-900 | qa paused | none | [ctx](features/asset-kcht-dashboard.md) | [ST](../../specs/asset-kcht-dashboard/STATUS.md) |
| `so-ts-type-grid` | Sổ TS grid/form theo loại | 01 | P1-900 | `data_analy` / `blocked` | none | [ctx](features/so-ts-type-grid.md) | [ST](../../specs/so-ts-type-grid/STATUS.md) |
| `asset-hub` | Hub TS mobile | 01 | P1-900 | done | none | [ctx](features/asset-hub.md) | [ST](../../specs/asset-hub/STATUS.md) |
| `gis` | GIS 2D (+ Twin P2) | 02 / 02-P2 | P1-900 · Twin P2-CR | `data_analy` / `draft` | catalog | [ctx](features/gis.md) | [ST](../../specs/gis/STATUS.md) |
| `gis-draw-live` | Vẽ Leaflet | 02 | P1-900 | done | catalog | [ctx](features/gis-draw-live.md) | [ST](../../specs/gis-draw-live/STATUS.md) |
| `gis-draw-google` | Vẽ Google proxy | 02 | P1-900 | done (JWT leftover) | catalog | [ctx](features/gis-draw-google.md) | [ST](../../specs/gis-draw-google/STATUS.md) |
| `gis-3d-twin` | Twin 3D Cesium | 02-P2 | P2-CR | no STATUS | catalog | — | — |
| `map-service` | gis.vn + clip OSM | — | support | no STATUS | none | [ctx](features/map-service.md) | — |
| `gis-osm-clip` | OSM overlay prod | — | support | no STATUS | none | [ctx](features/gis-osm-clip.md) | — |
| `legal-tech-corridor` | Luật VN + Store | — | support | no STATUS | none | [ctx](features/legal-tech-corridor.md) | — |
| `directions` | Chỉ đường guest | — | support | no STATUS | none | [ctx](features/directions.md) | — |
| `ai-vision` | AI kiểm định MD | 03 / 03-P2 | P1-900 online · P2-CR local | `data_analy` / `draft` | catalog | [ctx](features/ai-vision.md) | [ST](../../specs/ai-vision/STATUS.md) |
| `ai-asset-detect` | AI phát hiện TS | 03b / 03b-P2 | P1-900 · edge P2-CR | done | catalog | [ctx](features/ai-asset-detect.md) | [ST](../../specs/ai-asset-detect/STATUS.md) |
| `its-traffic-detect` | ITS biển/cọc | 03c-P2 | P2-CR | done | catalog | [ctx](features/its-traffic-detect.md) | [ST](../../specs/its-traffic-detect/STATUS.md) |
| `its-anpr-overload` | ITS ANPR/WIM | 03c-P2 | P2-CR | done | catalog | [ctx](features/its-anpr-overload.md) | [ST](../../specs/its-anpr-overload/STATUS.md) |
| `camera-connect` | Camera GTVT | **03c** | P1-900 gói C | done | hub HTML | [ctx](features/camera-connect.md) | [ST](../../specs/camera-connect/STATUS.md) |
| `patrol` | Tuần đường web | 04 | P1-900 | Dev leftover | catalog | [ctx](features/patrol.md) | [ST](../../specs/patrol/STATUS.md) |
| `tuan-duong-web` | TT 04 web demo | 04 | P1-900 | (gắn patrol) | catalog | [24](24-TUAN-DUONG-DUONG-BO.md) | [patrol](../../specs/patrol/STATUS.md) |
| `tuan-duong-mobile` | TT 04 mobile demo | 04 | P1-900 | (gắn mobile-p1) | catalog | [24](24-TUAN-DUONG-DUONG-BO.md) | [mobile-p1](../../specs/mobile-p1/STATUS.md) |
| `platform-task` | Platform QLCV | — | support P1 | `qa` / `paused` | catalog | [ctx](features/platform-task.md) | [ST](../../specs/platform-task/STATUS.md) |
| `platform-message` | Chat parcel | — | support P1 | `dev` / `await_confirm` | none | [ctx](features/platform-message.md) | [ST](../../specs/platform-message/STATUS.md) |
| `rmms-task-integrate` | Task × tuần đường | — | P2 later | `done` / `done` | none | [plan](../plan/platform-task/RMMS-TUAN-DUONG.md) | [ST](../../specs/rmms-task-integrate/STATUS.md) |
| `attendance` | Chấm công GPS | 05 | P1-900 | done | catalog | [ctx](features/attendance.md) | [ST](../../specs/attendance/STATUS.md) |
| `incident` | Quản lý sự cố | 06 | P1-900 | `dev` / `pending` | catalog | [ctx](features/incident.md) | [ST](../../specs/incident/STATUS.md) |
| `maintenance` | Bảo trì khung + WO P2 | 07 / 07-P2 | P1-900 khung · P2-CR full | done | catalog | [ctx](features/maintenance.md) | [ST](../../specs/maintenance/STATUS.md) |
| `predict` | AI dự báo | 08 / 08-P2 | P1-900 · P2-CR | done | catalog | [ctx](features/predict.md) | [ST](../../specs/predict/STATUS.md) |
| `ops` | Điều hành | 09 / 09-P2 | P1-900 board · P2-CR full | done | catalog | [ctx](features/ops.md) | [ST](../../specs/ops/STATUS.md) |
| `estimate` | AI ước lượng | 10 / 10-P2 | P1-900 · P2-CR | done | catalog | [ctx](features/estimate.md) | [ST](../../specs/estimate/STATUS.md) |
| `contract` | HĐ & ngân sách | 11 / 11-P2 | P1-900 thin · P2-CR | done | catalog | [ctx](features/contract.md) | [ST](../../specs/contract/STATUS.md) |
| `kcht-cong-trinh` | Công trình KCHT (Khu IV) | — | CR-Khu-IV | `qa` / `await_confirm` | none | [ctx](features/kcht-cong-trinh.md) | [ST](../../specs/kcht-cong-trinh/STATUS.md) |
| `inventory` | Vật tư | 12 | P3-CR | Dev pending | catalog | [ctx](features/inventory.md) | [ST](../../specs/inventory/STATUS.md) |
| `drone` | Drone RC | 13-P2 | P2-CR | done | catalog | [ctx](features/drone.md) | [ST](../../specs/drone/STATUS.md) |
| `toc` | TOC / VMS | 14 | P3-CR | no STATUS | catalog | [ctx](features/toc.md) | — |
| `citizen` | Cổng dân | 15 | P3-CR | done | catalog | [ctx](features/citizen.md) | [ST](../../specs/citizen/STATUS.md) |
| `copilot` | AI Copilot | 16 / 16-P2 | P1-900 · RAG P2-CR | done | catalog | [ctx](features/copilot.md) | [ST](../../specs/copilot/STATUS.md) |
| `dashboard` | Dashboard KPI | 17 / 17-P2 | P1-900 · P2-CR | **no STATUS** | catalog | [ctx](features/dashboard.md) | — |
| `reports` | Hub báo cáo | 17 | P1-900 | done | catalog | [ctx](features/reports.md) | [ST](../../specs/reports/STATUS.md) |
| `reports-filter-bar` | Edit filter `/bao-cao` | 17 | P1-900 | `done` / `done` | catalog | [ctx](features/reports-filter-bar.md) | [ST](../../specs/reports-filter-bar/STATUS.md) |
| `integration` | Open API | 18 / 18-P2 | P1-900 khung · P2-CR | done | catalog | [ctx](features/integration.md) | [ST](../../specs/integration/STATUS.md) |
| `feedback` | Góp ý nội bộ | — | support P1 | data_analy draft | catalog | [ctx](features/feedback.md) | [ST](../../specs/feedback/STATUS.md) |
| `users` | QL user / TC | — | support P1 | Dev in_progress | catalog | [ctx](features/users.md) | [ST](../../specs/users/STATUS.md) |
| `login` | Login + HĐ TK | — | P1 / P1.5 | done · run L0–L6 done | none | [ctx](features/login.md) | [ST](../../specs/login/STATUS.md) |
| `login-forgot` | Quên MK | — | P1-900 | done | none | [ctx](features/login-forgot.md) | [ST](../../specs/login-forgot/STATUS.md) |
| `home` | Home mobile | B | P1-900 | done | none | [ctx](features/home.md) | [ST](../../specs/home/STATUS.md) |
| `me` | Profile mobile | B | P1-900 | done | none | [ctx](features/me.md) | [ST](../../specs/me/STATUS.md) |
| `supervise` | Giám sát mobile | B | P1-900 | done | none | [ctx](features/supervise.md) | [ST](../../specs/supervise/STATUS.md) |
| `mobile-p1` | IA mobile P1 | B | P1-900 | design await_confirm | proto | [brief](../../map-feature/mobile-design-brief.md) | [ST](../../specs/mobile-p1/STATUS.md) |
| `patrol-home` | Patrol home | 04 | P1-900 | done | proto | [ctx](features/patrol-home.md) | [ST](../../specs/patrol-home/STATUS.md) |
| `patrol-history` | Lịch sử tuần | 04 | P1-900 | done | proto | [ctx](features/patrol-history.md) | [ST](../../specs/patrol-history/STATUS.md) |
| `patrol-offline` | Offline tuần | 04 | P1-900 | done | proto | [ctx](features/patrol-offline.md) | [ST](../../specs/patrol-offline/STATUS.md) |
| `patrol-map` | Bản đồ tuần | 04 | P1-900 | Dev pending | proto | [ctx](features/patrol-map.md) | [ST](../../specs/patrol-map/STATUS.md) |
| `patrol-pin` | GPS pin sheet | 04 | P1-900 | Review in_progress | proto | [ctx](features/patrol-pin.md) | [ST](../../specs/patrol-pin/STATUS.md) |
| `patrol-checkin` | Check-in | 05 | P1-900 | data_analy draft | none | — | [ST](../../specs/patrol-checkin/STATUS.md) |

| `reports-filter-bar` | Edit /bao-cao filter bar | — | support | `data_analy` / `draft` | none | [ctx](features/reports-filter-bar.md) | [ST](../../specs/reports-filter-bar/STATUS.md) |
| `so-ts-km-post` | Sổ TS — Cột Km | — | support | `data_analy` / `in_progress` | none | [ctx](features/so-ts-km-post.md) | [ST](../../specs/so-ts-km-post/STATUS.md) |
| `so-ts-traffic-sign` | Sổ TS — Biển báo | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-traffic-sign.md) | [ST](../../specs/so-ts-traffic-sign/STATUS.md) |
| `so-ts-delineator` | Sổ TS — Cọc tiêu / cọc H | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-delineator.md) | [ST](../../specs/so-ts-delineator/STATUS.md) |
| `so-ts-convex-mirror` | Sổ TS — Gương cầu / long môn | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-convex-mirror.md) | [ST](../../specs/so-ts-convex-mirror/STATUS.md) |
| `so-ts-guardrail` | Sổ TS — Hộ lan / tôn sóng | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-guardrail.md) | [ST](../../specs/so-ts-guardrail/STATUS.md) |
| `so-ts-median` | Sổ TS — Dải phân cách | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-median.md) | [ST](../../specs/so-ts-median/STATUS.md) |
| `so-ts-retaining` | Sổ TS — Kè / tường chắn | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-retaining.md) | [ST](../../specs/so-ts-retaining/STATUS.md) |
| `so-ts-slope-protect` | Sổ TS — Bảo vệ mái dốc | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-slope-protect.md) | [ST](../../specs/so-ts-slope-protect/STATUS.md) |
| `so-ts-noise-barrier` | Sổ TS — Rào chắn ồn | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-noise-barrier.md) | [ST](../../specs/so-ts-noise-barrier/STATUS.md) |
| `so-ts-ditch` | Sổ TS — Cống / rãnh dọc | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-ditch.md) | [ST](../../specs/so-ts-ditch/STATUS.md) |
| `so-ts-underpass` | Sổ TS — Hầm chui dân sinh | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-underpass.md) | [ST](../../specs/so-ts-underpass/STATUS.md) |
| `so-ts-culvert-x` | Sổ TS — Cống thoát nước ngang | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-culvert-x.md) | [ST](../../specs/so-ts-culvert-x/STATUS.md) |
| `so-ts-pontoon` | Sổ TS — Cầu phao | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-pontoon.md) | [ST](../../specs/so-ts-pontoon/STATUS.md) |
| `so-ts-spillway` | Sổ TS — Đường tràn | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-spillway.md) | [ST](../../specs/so-ts-spillway/STATUS.md) |
| `so-ts-rail-cross` | Sổ TS — Giao cắt đường sắt | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-rail-cross.md) | [ST](../../specs/so-ts-rail-cross/STATUS.md) |
| `so-ts-interchange` | Sổ TS — Nút giao | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-interchange.md) | [ST](../../specs/so-ts-interchange/STATUS.md) |
| `so-ts-ferry` | Sổ TS — Bến phà | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-ferry.md) | [ST](../../specs/so-ts-ferry/STATUS.md) |
| `so-ts-station-house` | Sổ TS — Nhà hạt QLĐB | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-station-house.md) | [ST](../../specs/so-ts-station-house/STATUS.md) |
| `so-ts-rescue-station` | Sổ TS — Công trình cứu hộ | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-rescue-station.md) | [ST](../../specs/so-ts-rescue-station/STATUS.md) |
| `so-ts-bus-station` | Sổ TS — Bến xe | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-bus-station.md) | [ST](../../specs/so-ts-bus-station/STATUS.md) |
| `so-ts-rest-area` | Sổ TS — Trạm dừng nghỉ | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-rest-area.md) | [ST](../../specs/so-ts-rest-area/STATUS.md) |
| `so-ts-parking` | Sổ TS — Bãi đỗ xe | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-parking.md) | [ST](../../specs/so-ts-parking/STATUS.md) |
| `so-ts-toll` | Sổ TS — Trạm thu phí | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-toll.md) | [ST](../../specs/so-ts-toll/STATUS.md) |
| `so-ts-ems-post` | Sổ TS — Trạm trực cấp cứu | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-ems-post.md) | [ST](../../specs/so-ts-ems-post/STATUS.md) |
| `so-ts-weigh-station` | Sổ TS — Trạm kiểm soát tải | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-weigh-station.md) | [ST](../../specs/so-ts-weigh-station/STATUS.md) |
| `so-ts-count-station` | Sổ TS — Trạm đếm | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-count-station.md) | [ST](../../specs/so-ts-count-station/STATUS.md) |
| `so-ts-bus-stop` | Sổ TS — Điểm dừng xe buýt | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-bus-stop.md) | [ST](../../specs/so-ts-bus-stop/STATUS.md) |
| `so-ts-land-row` | Sổ TS — Đất thuộc TS HT | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-land-row.md) | [ST](../../specs/so-ts-land-row/STATUS.md) |
| `so-ts-row-util` | Sổ TS — CT HTKT trong HL | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-row-util.md) | [ST](../../specs/so-ts-row-util/STATUS.md) |
| `so-ts-lighting` | Sổ TS — Chiếu sáng đường | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-lighting.md) | [ST](../../specs/so-ts-lighting/STATUS.md) |
| `so-ts-its-camera` | Sổ TS — Hệ thống ITS | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-its-camera.md) | [ST](../../specs/so-ts-its-camera/STATUS.md) |
| `so-ts-rescue-vehicle` | Sổ TS — Xe cứu hộ | — | support | `data_analy` / `draft` | none | [ctx](features/so-ts-rescue-vehicle.md) | [ST](../../specs/so-ts-rescue-vehicle/STATUS.md) |
| `field-reflect` | field-reflect | — | support | `data_analy` / `blocked` | none | [ctx](features/field-reflect.md) | [ST](../../specs/field-reflect/STATUS.md) |
**Báo cáo `rpt-*`:** xem [§ Reports](#17--dashboard--báo-cáo). Pipeline STATUS **done** hết (release: P1 / P1.5 / P2 / P3 theo từng slug).

**Draft mobile (chưa context đầy):** `incident-list` · `incident-create` · `mnt-list` · `field-reflect` · `cam-view` · `cam-patrol` — [STATUS](../../specs/) tương ứng `data_analy` / `draft`.

---

## Pipeline còn mở (implement, không phải conflict)

| Ưu tiên | Slug | Việc |
|---------|------|------|
| Now | `platform-message` | SA → TL → Dev → QA → Review (`yarn run-implement`) |
| Next | `platform-task` | data_analy sau message sticky |
| Later | `rmms-task-integrate` | blocked đến message + task |
| P1-900 | `csdl-so-sach` | pipeline 0→6 |
| P1-900 | `ai-vision` | Dev · analy paused · QA/Review |
| P1-900 | `patrol` | Dev leftover `crud_formtype` |
| P1-900 | `incident` | **T-PILOT-01** e2e+HDSD+guide · Dev → QA → Review |
| P1-900 | `users` | Dev (Review đã done) |
| P1-900 | `asset-kcht-dashboard` | QA paused → Review |
| P1-900 | `asset-kcht-32` | design_confirm |
| P1-900 | `dashboard` | thiếu STATUS |
| P1-900 | `camera-connect` | đưa vào `demoCatalog.ts` (HTML đã có) |
| Gói B | `mobile-p1` | design_confirm |
| Gói B | `patrol-map` | Dev → QA → Review |
| Gói B | `patrol-pin` | Review findings |
| Gói B | `asset` mobile | TL · iOS/Android/BFF **BLOCKED** |
| P3-CR | `inventory` | Dev · be/ui repo confirm |
| CR-Khu-IV | `kcht-cong-trinh` | Wave 1 done · **edit_page PH2–PH4** queue data_analy · PH5 park |
| Now | `org-route-scope` | data_analy — tách zone REG config km–km |
| Hold | `reports-filter-bar` | edit `/bao-cao` filter · `pending_confirm` sau `org-route-scope` done |
| support | `feedback` · `master` hub · `patrol-checkin` | draft |
| support | `map-service` · `gis-osm-clip` · `directions` · `legal-tech-corridor` · `toc` | chưa STATUS · gis.vn 34 **file landed** (`docs/gis-vn-map/`) · clip/ingest vẫn GAP |

---

## Chi tiết theo feature

### 0 — Master (support · no demo HTML)

Rule: `packKind=master` **không** gen demo — context + Design prototype.

#### `master`

| | |
|--|--|
| Release / implement | support P1 · hub không lock Dev |
| Child | `org-unit` P0 · `road-route` · `asset-type` · `partner-unit` |
| MFE | `Linm.Web.RMMS.Master` · std `/mas/co-cau-tc` :9318 |
| Next | Hub draft — child 4 slug **done** |

#### `org-unit` · `road-route` · `asset-type` · `partner-unit`

| | |
|--|--|
| Release | support P1 (cần cho Asset/GIS) |
| Pipeline | **done** |
| Seed | [`seed/org-unit-seed.json`](seed/org-unit-seed.json) · import [`features/import-gov-ssot.md`](features/import-gov-ssot.md) |
| Ref | [`20-ORG-STRUCTURE-DRVN.md`](20-ORG-STRUCTURE-DRVN.md) · [`24-TUAN-DUONG-DUONG-BO.md`](24-TUAN-DUONG-DUONG-BO.md) (LRS) |

#### `org-route-scope`

| | |
|--|--|
| Release / implement | support P1 · tách zone REG-I…IV config km–km theo tuyến/đoạn |
| Demo | none (`packKind=master`) |
| Pipeline | **done** / **done** |
| Next | Config tay `/mas/phan-khu` · `vpOrgCode` bắt buộc trên đoạn · **cấm** seed dump |

---

### 01 — Tài sản (PL01 P1-900)

#### `asset`

| | |
|--|--|
| Contract | 01 · gói A · Web+Mobile · KPI CRUD KCHT · map pin |
| Implement | P1 list Kind B + mobile list |
| Demo | catalog [`/demo/asset/asset.html`](../../../Linm.RMMS.Demo/src/demo/asset/asset.html) · std http://localhost:5180/demo/asset/asset.html |
| MFE / API | `Linm.Web.RMMS.Asset` · `/so-ts` · `api/v1/so-ts/road-assets` · std :9301 `/asset` |
| Pipeline | Web shipped · **mobile** SA done · TL pending · iOS xcodegen **BLOCKED** · Android/BFF **BLOCKED** |
| Next | Unblock native repo/build · TL task mobile |

#### `pavement-section`

| | |
|--|--|
| Contract | 01 · đoạn mặt đường |
| Demo | [`/demo/asset/pavement-section.html`](../../../Linm.RMMS.Demo/src/demo/asset/pavement-section.html) |
| Pipeline | **done** |
| Next | GAP-PAV-SPEC-01 — đủ cột `tbl_rmd` + 3 tầng tuyến (form mỏng 16 CSV) |
| Ref | [`11-CSDL-SO-SACH-DATABASE-API.md`](11-CSDL-SO-SACH-DATABASE-API.md) Biểu 1 · [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) §2.1 |

#### `csdl-so-sach`

| | |
|--|--|
| Contract | 01 · sổ sách · KPI NT |
| Demo | [`/demo/asset/csdl-so-sach.html`](../../../Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html) · std `/so-ts/csdl-so-sach` :9301 |
| Pipeline | **pending toàn bộ** 0→6 (analy chưa) |
| Next | `/agent-data-analy` → full pipeline |
| Ref | [`11-CSDL-SO-SACH-DATABASE-API.md`](11-CSDL-SO-SACH-DATABASE-API.md) |

#### `asset-kcht-32`

| | |
|--|--|
| Implement | Catalog 36 loại + form sự cố mobile |
| Demo | proto [`mobile-p1`](../../specs/mobile-p1/ui/prototype/index.html) + `asset-kcht-32.js` |
| Pipeline | design **await_confirm** (revise lưới 36) |
| Peer | `asset` · `asset-type` · `mobile-p1` · `incident` · `import-gov-ssot` |
| Next | Thông số dump 36 loại — [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) · GAP-SIGN-SPEC-01 · GAP-DELIM-SPEC-01 · GAP-KMPOST-NAME-01 |

#### `import-gov-ssot`

| | |
|--|--|
| Release / implement | support · context GAP mở (rebuild ≠ DB) |
| Demo | none |
| Pipeline | context / open GAP |
| Next | API Docker `ReImportSeed`+`ReInitData` trên CSV v3 · **cấm** seed |
| Ref | [`import-gov-ssot.md`](features/import-gov-ssot.md) · [`import-gov-asset-fields.md`](features/import-gov-asset-fields.md) |

#### `asset-kcht-dashboard`

| | |
|--|--|
| Demo | none (dashboard widget) |
| Live | MFE Asset `/so-ts/hang-muc` :9301 · widget `@linm/rmms-asset-kcht-widget` |
| API | `api/v1/asset/road-assets/summary-by-type` |
| Pipeline | PO–Dev **confirmed** · QA **paused** · Review pending |

#### `so-ts-type-grid`

| | |
|--|--|
| Release / implement | P1-900 · grid/form theo loại · reuse section |
| Demo | none · mẫu `docs/img/gov-mau-tai-san/` |
| Pipeline | `data_analy` / `draft` |
| Next | Shell hide-empty + section S-* · 32 task `so-ts-*` `pending_confirm` sau parent |
| Ref | [`so-ts-type-grid.md`](features/so-ts-type-grid.md) · `/data-gov-integration` |

#### `asset-hub`

| | |
|--|--|
| Lane | mobile |
| Pipeline | **done** |
| Context | [asset-hub.md](features/asset-hub.md) |

---

### 02 — GIS (P1 2D release · Twin P2 implement)

#### `gis`

| | |
|--|--|
| Contract | 02 P1 map 2D · 02-P2 Twin (implement trong cùng MFE, release Twin sau) |
| Demo | [`/demo/gis/gis.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis.html) |
| MFE | `Linm.Web.RMMS.Gis` · `/gis` :9302 |
| Pipeline | **done** |
| Pilot cam overlay | [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) |

#### `gis-draw-live` · `gis-draw-google`

| | |
|--|--|
| Contract | 02 P1 vẽ cơ bản |
| Demo | [`gis-draw-live.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis-draw-live.html) · [`gis-draw-google.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis-draw-google.html) |
| Live | `/gis/ha-tang` :9302 |
| Pipeline | live **done** · google **done** (header `in_progress` · JWT leftover) |

#### `gis-3d-twin`

| | |
|--|--|
| Contract | 02-P2 · release P2-CR |
| Demo | catalog [`gis-3d-twin.html`](../../../Linm.RMMS.Demo/src/demo/gis/gis-3d-twin.html) |
| STATUS | không có — implement demo only |

#### GIS platform (chưa STATUS)

`map-service` · `gis-osm-clip` · `legal-tech-corridor` · `directions` — context only · skill `/implement-map-service` · `/implement-gis-map` · `/review-app-vn-map-law` · `/implement-directions-app`.

gis.vn pack **landed** `docs/gis-vn-map/Việt Nam (tỉnh thành) - 34.geojson` (34 MultiPolygon · HS trong Đà Nẵng · TS trong Khánh Hòa · union bbox 102.144–117.393 / 6.931–23.393). maxBounds camera **6.8–23.5** — cấm Lat min 8.0. Ingest/Osmium/tile clip = `GAP-MAP-SVC-01`. **Không** STATUS.

Plan slash BE→BFF→UI: [`../plan/map-service/README.md`](../plan/map-service/README.md) · entry `/implement-map-stack`.

Ref demo: `asset-icons-legend` · `gis-draw-live-ref` · `patrol-centerline-ref` — [`/demo/p/`](../../../Linm.RMMS.Demo/src/demo/p/README.md).

---

### 03 — AI + Camera

#### `ai-vision`

| | |
|--|--|
| Contract | 03 P1 cloud · 03-P2 ONNX (implement, release sau) |
| Demo | [`/demo/ai-vision/ai-vision.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/ai-vision.html) · std :9303 `/ai-vision` |
| Pipeline | analy paused · PO–TL done · **Dev in_progress** · QA/Review pending |
| Next | đóng Dev + QA |

#### `ai-asset-detect`

| | |
|--|--|
| Contract | 03b P1 HITL · 03b-P2 OTA |
| Demo | [`ai-asset-detect.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html) |
| Pipeline | **done** |
| Run | [`specs/ai-asset-detect/run/STATUS.md`](../../specs/ai-asset-detect/run/STATUS.md) |
| Azure | [`plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md`](../plan/ai-asset-detect/AZURE-OPENAI-CHECKLIST.md) |

#### `its-traffic-detect` · `its-anpr-overload`

| | |
|--|--|
| Contract | 03c-P2 ITS (release P2-CR) · **không** NT 900 |
| Implement | full (demo + STATUS done) |
| Demo | [`its-traffic-detect.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html) · [`its-anpr-overload.html`](../../../Linm.RMMS.Demo/src/demo/ai-vision/its-anpr-overload.html) |
| Design | [`16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md`](16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) · [`18-ITS-ANPR-OVERLOAD-SPEC.md`](18-ITS-ANPR-OVERLOAD-SPEC.md) |

#### `camera-connect` (HĐ `camera-gtvt`)

| | |
|--|--|
| Contract | **03c** gói **C** 150tr · 5 UC online · không HW |
| Alias | HĐ `camera-gtvt` = Data `camera-connect` |
| Demo | hub [`camera-connect-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html) · wall [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html) · **chưa** `demoCatalog.ts` |
| MFE | `Linm.Web.RMMS.Camera` · `/camera` |
| Pipeline | **done** (BE defer = P2 implement) |
| Next | Đăng ký catalog slug `camera-connect` (hoặc alias `camera-gtvt`) |
| Ref | [`camera-model.md`](camera-model.md) · [`21-CAMERA-HLS-WEBRTC-GATEWAY.md`](21-CAMERA-HLS-WEBRTC-GATEWAY.md) |

---

### 04–06 — Field P1-900

#### `patrol`

| | |
|--|--|
| Contract | 04 · A+B · check-in · lịch sử · giám sát |
| Demo | [`patrol.html`](../../../Linm.RMMS.Demo/src/demo/patrol/patrol.html) · std `/td-tk` :9304 |
| API | `api/v1/td-tk/sessions` |
| Pipeline | PO–TL + QA + Review **done** · **Dev leftover** `crud_formtype` |
| Next | đóng gap form |

#### `tuan-duong-web` · `tuan-duong-mobile`

Demo đề cương TT 04 — catalog [`tuan-duong-web.html`](../../../Linm.RMMS.Demo/src/demo/patrol/tuan-duong-web.html) · [`tuan-duong-mobile.html`](../../../Linm.RMMS.Demo/src/demo/patrol/tuan-duong-mobile.html). Tracking pipeline = `patrol` / `mobile-p1`. Hub [`24-TUAN-DUONG-DUONG-BO.md`](24-TUAN-DUONG-DUONG-BO.md).

#### `attendance`

| | |
|--|--|
| Contract | 05 · GPS rule · BC công |
| Demo | [`attendance.html`](../../../Linm.RMMS.Demo/src/demo/patrol/attendance.html) |
| Pipeline | **done** |

#### `incident`

| | |
|--|--|
| Contract | 06 · E2E + offline queue |
| Demo | [`incident.html`](../../../Linm.RMMS.Demo/src/demo/incident/incident.html) · std `/su-co` :9304 |
| API | `api/v1/su-co/incidents` |
| Pipeline | `data_analy` / `pending` · PO–TL **done** · Dev/QA/Review pending |
| Next | **T-PILOT-01** e2e + HDSD + guide (`task/pilot-su-co.md`) · rồi Dev implement |
| Draft tách | `incident-list` · `incident-create` — STATUS draft |

---

### 07–11 — Thin P1 + depth P2 (cùng slug)

Cùng feature vừa release P1 vừa implement P2 trong demo/STATUS — **đúng chính sách**.

| Slug | P1-900 | P2-CR implement | Demo | Pipeline |
|------|--------|-----------------|------|----------|
| `maintenance` | map SC→CV · list cơ bản | WO/SLA/NT full | [html](../../../Linm.RMMS.Demo/src/demo/maintenance/maintenance.html) | done |
| `predict` | priority list cloud | XGBoost local | [html](../../../Linm.RMMS.Demo/src/demo/ai-vision/predict.html) | done |
| `ops` | board/notify tối thiểu | workflow full | [html](../../../Linm.RMMS.Demo/src/demo/ops/ops.html) | done |
| `estimate` | qty·đơn giá·HITL | model custom | [html](../../../Linm.RMMS.Demo/src/demo/ai-vision/estimate.html) | done |
| `contract` | CRUD HĐ/NS tối thiểu | depth ERP | [html](../../../Linm.RMMS.Demo/src/demo/contract/contract.html) | done |
| `copilot` | NL query online | RAG on-prem | [html](../../../Linm.RMMS.Demo/src/demo/copilot/copilot.html) | done |

#### `kcht-cong-trinh`

| | |
|--|--|
| Release / implement | **CR-Khu-IV** — ngoài PL01 900tr · công văn KQLĐB IV `/KQLĐBIV-QLBT` 08/2026 |
| Demo | none |
| Context | [kcht-cong-trinh.md](features/kcht-cong-trinh.md) · [công văn](../tinh-nang/Cung-cap-thong-tin-phan-mem.md) · **sổ/BC giải ngân** [SRC-KCT-GN03](../data/analyzed/kcht-giai-ngan-03-sheet.md) |
| Plan | [PLAN.md](../plan/kcht-cong-trinh/PLAN.md) |
| Pipeline | STATUS **`done` / `done`** (Wave 1 PH1) · PH2–PH5 **defer** — **không** conflict |
| Nguồn khách | [SOURCE-TRACKING](../data/SOURCE-TRACKING.md) `SRC-KCT-CV` + `SRC-KCT-GN03` — **cấm** đọc lại .doc/.xlsx |
| Reuse | `contract` · `road-route` · `org-unit` `REG-IV*` · `partner-unit` · `users` · FileService |
| Next | Queue **edit_page** `roleOnly=data_analy` wave PH2–PH4 · extract [wave](../data/analyzed/kcht-wave-ph2-ph4.md) · PH5 park `sourceFormReady=no` |

---

### 12–15 — PL04 (implement sớm · release CR)

| Slug | PL | Demo | Pipeline |
|------|-----|------|----------|
| `inventory` | 12 P3 | [html](../../../Linm.RMMS.Demo/src/demo/contract/inventory.html) · `/hd-ns/vttb` :9312 | Dev pending · be/ui confirm |
| `drone` | 13-P2 | [html](../../../Linm.RMMS.Demo/src/demo/drone/drone.html) | done |
| `toc` | 14 P3 | [html](../../../Linm.RMMS.Demo/src/demo/toc/toc.html) | **no STATUS** |
| `citizen` | 15 P3 | [html](../../../Linm.RMMS.Demo/src/demo/integration/citizen.html) | done |

---

### 17 — Dashboard + báo cáo

#### `dashboard`

| | |
|--|--|
| Contract | 17 P1 3–5 KPI · 17-P2 advanced |
| Demo | [`dashboard.html`](../../../Linm.RMMS.Demo/src/demo/bao-cao/dashboard.html) |
| Pipeline | **thiếu STATUS.md** |
| Next | scaffold STATUS hoặc gắn `reports` |

#### `reports`

| | |
|--|--|
| Demo | [`reports.html`](../../../Linm.RMMS.Demo/src/demo/bao-cao/reports.html) |
| Pipeline | **done** |
| Hub | [reports.md](features/reports.md) |
| Filter sibling | [`reports-filter-bar`](features/reports-filter-bar.md) · `task_a5f134b0` `pending_confirm` |

#### `reports-filter-bar`

| | |
|--|--|
| Release / implement | P1-900 · edit hub filter `/bao-cao` |
| Demo | hub reports |
| Pipeline | `data_analy` / `await_confirm` |
| Next | Sau `org-route-scope` done → user confirm mới Start implement |

#### `rpt-*` (STATUS done hết)

Không có HTML riêng trong `demoCatalog` — nằm hub reports / GOVOne.

| Slug | Release | Context | STATUS |
|------|---------|---------|--------|
| `rpt-tai-san` | P1 | [ctx](features/rpt-tai-san.md) | [ST](../../specs/rpt-tai-san/STATUS.md) |
| `rpt-su-co` | P1 | [ctx](features/rpt-su-co.md) | [ST](../../specs/rpt-su-co/STATUS.md) |
| `rpt-checkin` | P1 | [ctx](features/rpt-checkin.md) | [ST](../../specs/rpt-checkin/STATUS.md) |
| `rpt-bao-cao-cong` | P1.5 | [ctx](features/rpt-bao-cao-cong.md) | [ST](../../specs/rpt-bao-cao-cong/STATUS.md) |
| `rpt-tuan-duong` | P1.5 | [ctx](features/rpt-tuan-duong.md) | [ST](../../specs/rpt-tuan-duong/STATUS.md) |
| `rpt-tuan-kiem` | P1.5 | [ctx](features/rpt-tuan-kiem.md) | [ST](../../specs/rpt-tuan-kiem/STATUS.md) |
| `rpt-tong-hop-bao-tri` | P2-CR | [ctx](features/rpt-tong-hop-bao-tri.md) | [ST](../../specs/rpt-tong-hop-bao-tri/STATUS.md) |
| `rpt-nhat-ky-tuan-duong` | P2-CR | [ctx](features/rpt-nhat-ky-tuan-duong.md) | [ST](../../specs/rpt-nhat-ky-tuan-duong/STATUS.md) |
| `rpt-nhat-ky-tuan-kiem` | P2-CR | [ctx](features/rpt-nhat-ky-tuan-kiem.md) | [ST](../../specs/rpt-nhat-ky-tuan-kiem/STATUS.md) |
| `rpt-nhat-ky-cong-viec` | P2-CR | [ctx](features/rpt-nhat-ky-cong-viec.md) | [ST](../../specs/rpt-nhat-ky-cong-viec/STATUS.md) |
| `rpt-thien-tai` | P2-CR | [ctx](features/rpt-thien-tai.md) | [ST](../../specs/rpt-thien-tai/STATUS.md) |
| `rpt-thiet-hai` | P2-CR | [ctx](features/rpt-thiet-hai.md) | [ST](../../specs/rpt-thiet-hai/STATUS.md) |
| `rpt-un-tac` | P2-CR | [ctx](features/rpt-un-tac.md) | [ST](../../specs/rpt-un-tac/STATUS.md) |
| `rpt-hang-muc-hu-hong` | P2-CR | [ctx](features/rpt-hang-muc-hu-hong.md) | [ST](../../specs/rpt-hang-muc-hu-hong/STATUS.md) |
| `rpt-tinh-trang-mat-duong` | P2-CR | [ctx](features/rpt-tinh-trang-mat-duong.md) | [ST](../../specs/rpt-tinh-trang-mat-duong/STATUS.md) |
| `rpt-kiem-tra-cau` | P2-CR | [ctx](features/rpt-kiem-tra-cau.md) | [ST](../../specs/rpt-kiem-tra-cau/STATUS.md) |
| `rpt-tngt` | P2-CR | [ctx](features/rpt-tngt.md) | [ST](../../specs/rpt-tngt/STATUS.md) |
| `rpt-vi-pham-hlatdb` | P2-CR | [ctx](features/rpt-vi-pham-hlatdb.md) | [ST](../../specs/rpt-vi-pham-hlatdb/STATUS.md) |
| `rpt-dem-xe` | P2-CR | [ctx](features/rpt-dem-xe.md) | [ST](../../specs/rpt-dem-xe/STATUS.md) |
| `rpt-giay-phep-thi-cong` | P3-CR | [ctx](features/rpt-giay-phep-thi-cong.md) | [ST](../../specs/rpt-giay-phep-thi-cong/STATUS.md) |
| `rpt-cong-van` | P3-CR | [ctx](features/rpt-cong-van.md) | [ST](../../specs/rpt-cong-van/STATUS.md) |

**≠ PHỤ LỤC 03 giải ngân Khu IV** — form nguồn [SRC-KCT-GN03](../data/analyzed/kcht-giai-ngan-03-sheet.md) thuộc `kcht-cong-trinh` PH5 (chưa tách slug `rpt-*`).

---

### 18 + Auth + Integration extras

#### `integration`

| | |
|--|--|
| Contract | 18 P1 OpenAPI + 1 adapter · 18-P2 nhiều adapter |
| Demo | [`integration.html`](../../../Linm.RMMS.Demo/src/demo/integration/integration.html) |
| Pipeline | **done** |

#### `feedback` ≠ `citizen`

| | |
|--|--|
| `feedback` | góp ý nội bộ P1 · catalog [html](../../../Linm.RMMS.Demo/src/demo/integration/feedback.html) · STATUS **draft** |
| `citizen` | cổng dân P3-CR · STATUS done |

#### `users`

| | |
|--|--|
| Demo | [`users.html`](../../../Linm.RMMS.Demo/src/demo/integration/users.html) · std `/admin/user` :9314 |
| API | `api/v1/admin/user` |
| Pipeline | PO–SA–TL–QA–Review done · **Dev in_progress** |

#### `login`

| | |
|--|--|
| Context | [login.md](features/login.md) · [SPEC](../plan/login-contract-lifecycle/SPEC.md) |
| STATUS | [login](../../specs/login/STATUS.md) **done** |
| Job | [run L0–L6](../../specs/login/run/STATUS.md) **done** (`Linm.RMMS.Permission.Job`) |
| Peer | `login-forgot` done |

---

### Platform (không mã PL01)

#### `platform-message` — **đang chạy**

| | |
|--|--|
| Hub | [`26-MESSAGE-PARCEL.md`](26-MESSAGE-PARCEL.md) · plan `{RulesRoot}/docs/plan/linm-message-service/README.md` |
| Demo | N/A packKind platform · live `Linm.Web.Message` · proto [`platform-message-prototype.html`](../../specs/platform-message/ui/prototype/platform-message-prototype.html) |
| std | http://localhost:9301/platform-message |
| Pipeline | analy+PO+Design **done** · **SA in_progress** · TL–Review pending |
| Next | SA `solution-discovery.md` → TL `route_confirm` → Dev GAP parcel |
| Queue | **first** — `platform-task` chờ |

#### `platform-task`

| | |
|--|--|
| Hub | [`25-PLATFORM-TASK.md`](25-PLATFORM-TASK.md) · [PLAN](../plan/platform-task/PLAN.md) |
| Demo | [`/demo/task/task.html`](../../../Linm.RMMS.Demo/src/demo/task/task.html) |
| Pipeline | data_analy **pending** · queue second |
| MFE | cite Medical đến khi `Linm.Web.Task` |

#### `rmms-task-integrate`

Blocked / later — [STATUS](../../specs/rmms-task-integrate/STATUS.md) · [RMMS-TUAN-DUONG.md](../plan/platform-task/RMMS-TUAN-DUONG.md).

---

### Gói B — Mobile

#### `mobile-p1`

| | |
|--|--|
| Pipeline | design **await_confirm** · IA v3.3 · kit patched |
| Proto | [`specs/mobile-p1/ui/prototype/`](../../specs/mobile-p1/ui/prototype/) |
| Skill | `/agent-qldb-workflow-mobile` · **cấm** `yarn run-implement` MAIN3 |

#### Patrol native

| Slug | Pipeline | Context |
|------|----------|---------|
| `patrol-home` · `patrol-history` · `patrol-offline` | done | [home](features/patrol-home.md) · [history](features/patrol-history.md) · [offline](features/patrol-offline.md) |
| `patrol-map` | Dev pending | [patrol-map.md](features/patrol-map.md) |
| `patrol-pin` | Review in_progress | [patrol-pin.md](features/patrol-pin.md) |
| `patrol-checkin` | draft | STATUS only |

`home` · `me` · `login` · `login-forgot` · `supervise` · `asset-hub` · `attendance` (mobile lane) — STATUS **done**.

---

## Demo catalog vs hub

| Trong `demoCatalog.ts` | Ngoài catalog (hub `index.html` / `features/`) |
|------------------------|-----------------------------------------------|
| 01–18 slugs + ITS + Twin + task + tuan-duong + p/ refs | `camera-connect-demo.html` · `camera-ops-dashboard-demo.html` · nhiều `*-demo.html` redirect |

Pending domain folders (README only): `workflow` · `iot`.

---

## Liên kết gốc

| Nguồn | Path |
|-------|------|
| Backlog mô tả | [features/README.md](features/README.md) |
| 18 phân hệ × màn | [15-SCREEN-AI-MAP.md](15-SCREEN-AI-MAP.md) |
| Plan P1 vs P2 | [09-PLAN-P1-V2.md](09-PLAN-P1-V2.md) |
| Kỹ thuật | [07-TECHNICAL-IMPLEMENTATION.md](07-TECHNICAL-IMPLEMENTATION.md) |
| Scan JSON | [implement-status.json](implement-status.json) |
| HĐ PL01/PL04 | [PROMPT-SPEC…](../../../Linm.RMMS.Contract/analy/PROMPT-SPEC-P1-P2-PHU-LUC-RELEASE.md) |
| Tài liệu khách (đã/chưa) | [SOURCE-TRACKING.md](../data/SOURCE-TRACKING.md) · [docs/data/](../data/README.md) |
| Công văn Khu IV (CT KCHT) | [Cung-cap-thong-tin-phan-mem.md](../tinh-nang/Cung-cap-thong-tin-phan-mem.md) |
| Sổ + PHỤ LỤC 03 giải ngân | [kcht-giai-ngan-03-sheet.md](../data/analyzed/kcht-giai-ngan-03-sheet.md) |
| Demo catalog | [demoCatalog.ts](../../../Linm.RMMS.Demo/src/demoCatalog.ts) |
| Demo DOMAIN | [DOMAIN.md](../../../Linm.RMMS.Demo/src/demo/DOMAIN.md) |
| Route VN | [route-vn-abbr-confirm.md](route-vn-abbr-confirm.md) |
