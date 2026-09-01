# Real-data bind — me-settings

| | |
|---|---|
| feature | `me-settings` |
| prefix | `mobile-bff/api/v1` |
| sameMobile | yes · **local/OS** (không BFF settings P1) |
| taskId | `task_43c37168` |

Skill: `example/real-data-bind.md` · **GAP-MOB-REAL-01**

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `os` | iOS Settings URL · Android App details · permission APIs | Status «Không xác định» | Toast «Không mở được Cài đặt hệ thống» · **cấm** fake ok |
| `bundle` | `CFBundleShortVersionString` + build / `versionName` + `versionCode` | «—» | — |
| `copy` | `LinmCopy` `home.privacy.title` / `home.privacy.body` | — | **cấm** invent HTTPS landing |
| `nav` | `reuse=patrol-offline` | — | owner slug handle offline |

**Cấm** `demoItems` / hardcode preference map làm nguồn ship (`GAP-MOB-REAL-02`).

## §B — Bind field (HARD · khớp BFF table)

| uiField | Label | controlHint | catalogKind | GET / write | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-------------|-------------|---------|------------|
| rowLocation | Vị trí | ListRow + status | — | OS location auth status · write = openAppSettings | — | — | yes |
| rowCamera | Camera | ListRow + status | — | OS camera auth status · write = openAppSettings | — | — | yes |
| rowNotifyOs | Thông báo hệ thống | ListRow | — | openAppSettings | — | — | yes |
| btnOpenOs | Mở Cài đặt hệ thống | SecondaryButton | — | openAppSettings | — | — | yes |
| appVersion | Phiên bản | Text display | — | Bundle / BuildConfig | — (readonly) | — | yes |
| rowPrivacy | Chính sách quyền riêng tư | ListRow | — | local copy `home.privacy.*` | — | gap (web) | yes |
| rowOffline | Hàng đợi mất sóng | ListRow nav | — | nav `patrol-offline` | — | — | yes |
| toastOsFail | (lỗi mở OS) | Toast | — | after OS open fail | — | — | yes |

§B **không** có path `{BffPrefix}` — khớp `me-settings-bff-endpoints.md` local table · **không** invent preferences.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| — | — | không | Invent preference master / CUC2 |

## §D — Map / vẽ

`map: none` — không embed map trên `#sc-me-settings`. Entry từ `me`.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| Permission status | OS | user trên System Settings | — | refresh khi `onAppear` / `onResume` |
| App version | Bundle | release build | — | readonly |
| Privacy | static copy | PO/copy update | — | sheet/push content |
| Offline queue | owner `patrol-offline` | — | BFF trên owner | nav away |

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «toast → màn · OS deep-link · không BFF invent» · GAP demo/privacy |
| Design | dual `#sc-me-settings` · control-map khớp §B · chrome back |
| SA | xác nhận **không** Domain settings · **cấm** ERP.* |
| Dev iOS + Android | cùng §B · wire `row-settings` → push · openAppSettings |

## Demo rows SSOT (fallback UI only — **không** fake BFF)

| Field | Value |
|-------|-------|
| Title | Cài đặt |
| Entry (hub) | Cài đặt · `#i-gear` · `row-settings` |
| Section perm | Quyền ứng dụng |
| CTA OS | Mở Cài đặt hệ thống |
| Section sync | Đồng bộ |
| Offline | Hàng đợi mất sóng |
| Section about | Thông tin |
| Version label | Phiên bản |
| Privacy | Chính sách quyền riêng tư |
| Back | Tôi |

## § Delta Current vs New (real-data)

| ID | Current | New |
|----|---------|-----|
| GAP-MOB-MESET-NAV-01 | toast only | Nav + local/OS bind |
| GAP-MOB-MESET-DATA-01 | — | Permission status + version + privacy copy |
| GAP-MOB-MESET-API-01 | — | **P1 skip** server prefs · **cấm invent** |

## § Cấm

- Watermark / «bản Gói N» / process text  
- Fake success toast «Đã lưu cài đặt» khi không write API  
- Invent mobile-only path `me-settings` / `preferences`  
- Bind `mfeStdUrl` / ERP.*  
- Skip §B ≠ BFF table → **GAP-MOB-REAL-01**  
- Enqueue openAppSettings / privacy sibling → **GAP-MOB-ACT-07**  
- Gộp `me-profile` / `ops` / `login-logout` / `feedback`

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T20:11:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-settings-real-data-20260830 |
| taskId | `task_43c37168` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
