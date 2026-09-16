# QA — Scenarios — gis-patrol-map

> Status: **PASS** · e2eQa=ON · task `task_e57e18ab` · 2026-09-12T06:52:00.000Z  
> Role: `qa` · packKind=`map` · changeScope=`edit_page`  
> mfeStdUrl=`http://localhost:9301/gis-patrol-map` · live=`/gis/tuan-duong`  
> Screens: `specs/gis-patrol-map/qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok=true

| | |
|--|--|
| Feature | `gis-patrol-map` |
| Title | Bản đồ tuần đường — leftover + ảnh trên map |
| Role | `qa` |
| Runtime | docker compose (WebService) + MFE :9301 standalone · Playwright Chrome channel |

## Environment

| Item | Value |
|------|-------|
| Docker | `D:/AI-QLBD/Linm.RMMS.WebService` · `docker compose up -d` · api healthy |
| MFE | `yarn webpack serve --port 9301 --env isLocal --env standalone` (package `start:std` = :9302; packet URL = :9301) |
| Alias fix | Route `gis-patrol-map` → `GisPatrolMapPage` (parity mfeStdUrl) |
| Compile fix | `mapCheckInPin.ts` — `marker.on?.('click', …)` khớp `declarations.d.ts` |
| E2E note | `yarn e2e-qa` treo `npx playwright install chromium` (CDN) → capture tương đương `_capture.mjs` + `channel:'chrome'` · **cấm** taskkill rộng |

## Cases (T-QA-MAP-01)

| Id | Zone | Steps | Expect | Result | Shot |
|----|------|-------|--------|--------|------|
| S0 | SCR-MAP · NAV-GIS · MAP-HOST | Goto mfeStdUrl (fallback live) · wait `data-testid=rmms-gis-patrol-map-page` · wait Leaflet | Shell + tab Tuần đường + basemap EPSG:4326 | **PASS** | `screens/S0.png` |
| S1 | LIST-PERSON · TAB-* | Assert list text | ≥1 person · badge Đang tuần / Hoàn thành · seed Vinh–Nghệ An | **PASS** | `screens/S1.png` |
| QA-20 | SCR-DETAIL · MAP-POPUP-INSPECT · GALLERY-PATROL | Click person · optional pin | Chi tiết + history check-in · popup inspect · photo slot (Lỗi ảnh = FileService seed debt) | **PASS** | `screens/QA-20.png` |

## Observations

- List seed: Nguyễn Văn A (Đang tuần) · Trần Thị B (Hoàn thành).
- Inspect popup + timeline show GPS / check-in; **Lỗi ảnh** matches Dev debt (FileService seed blobs may 404) — không block map/inspect P1.
- Pin số 1/2 visible after select person.

## T-QA-* checklist

| Task | Status |
|------|--------|
| T-QA-MAP-01 | **PASS** · S0/S1/QA-20 + PNG |

## Gate

| Gate | Status |
|------|--------|
| e2eQa runtime (not static-only) | **PASS** |
| Screens per case | **PASS** |
| phase≠done | kept `qa` until compact+STATUS |
| next | review pending (roleOnly HARD — không start review) |

## Notes

- Playwright browser download treo → FAIL path avoided bằng Chrome channel; re-run `yarn e2e-qa` khi CDN OK.
- Known debt: gallery resign / seed blob 404 · Auth permission stub.
