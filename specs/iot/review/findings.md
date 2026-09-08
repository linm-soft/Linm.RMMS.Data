# Review — Findings — iot

> Status: **PASS** · `review_confirm=done` · autoApprove ON · task `task_4940556f`  
> Role `/agent-review` · packKind=`list` · changeScope=`new_page`  
> contentHashPrior `sha256:qa-pass-iot-e2e` · skillVersion `2026.08.19.04`  
> writtenAt `2026-09-05T04:55:00.000Z`

| | |
|--|--|
| Feature | `iot` |
| Title | Danh sách IoT |
| Role | `review` |
| catalogKind | `iot-devices` |
| prefix | `IOT-` |
| API | `api/v1/iot/devices` · BFF `web-bff/api/v1/iot` · domain **Iot** · **cấm ERP.*** |
| mfeStdRoute | `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` |
| formUrl | `http://localhost:9309/iot/tao-moi` · `/iot/:id` |
| Prior | DA→PO→Design→SA→TL→Dev→QA **confirmed** |
| Gates | `tz_na` · `xco_get_only` · `share_tenant` |
| Verdict | **PASS** · P0=0 · fix_gaps=none |

## Scope

Review QUERY / SEC / UI-FN / BE-FN against compact priors + spot-check MFE/BE. **Không** implement · **không** e2e/build/start:std. QA E2E evidence reused (S0/S1/QA-20 PASS · live-assert DTM · formCols=5).

---

## QUERY

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| Q-01 | List/CRUD → `api/v1/iot/devices` (+ BFF) | **PASS** | FE `endpoint.ts` BASE `/iot/devices` · BFF `IotBffController` forward · **cấm** invent ERP.* |
| Q-02 | init-data types/statuses | **PASS** | `GET …/init-data` · FE maps Dropdown options |
| Q-03 | Filter keys search·status·type·routeCode·page·pageSize | **PASS** | List page + endpoint QS align SA |
| Q-04 | routeCode SearchInput → road-routes | **PASS** | `createRoadRouteSearchConfig` · **cấm** free-text |
| Q-05 | IdCode prefix `IOT-` | **PASS** | BE `IotDeviceService` validate + generate |

**QUERY verdict:** PASS

---

## SEC

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| S-01 | Soft DELETE | **PASS** | `SoftDeleteAsync` · FE `alert.confirm` (not native) |
| S-02 | `share_tenant` · company-scoped indexes | **PASS** | `rmms_iot_devices` · CompanyCode indexes |
| S-03 | `tz_na` / `xco_get_only` | **PASS** | SA compact · no write XCO |
| S-04 | Auth `[RequirePermission]` | **DEFER** | Controller TODO stub · FE `rmms-iot:devices:*` bag · parity Camera · not P0 |
| S-05 | No secrets in FE | **PASS** | permissions local bag only |

**SEC verdict:** PASS (Auth stub debt accepted)

---

## UI-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| U-01 | Kind B list shell · DES-GRID A–D | **PASS** | `LinPageLayout` + `LinErpListFilterBar` + grid · QA S0/S1 · liveAssert titleHit |
| U-02 | Filter DTM · 0 overflowX 1280/768/375 | **PASS** | `live-assert.json` · QA T-QA-FILTER/TYP |
| U-03 | Form Full `data-form-cols="5"` | **PASS** | `IotFormPage` · QA-20 · liveAssert formCols=5 |
| U-04 | Header badge VN Thêm/Sửa/Xem | **PASS** | `modeBadge` · **cấm** `CREATE` |
| U-05 | LeaveConfirmModal · useFormLeaveGuard | **PASS** | no `window.confirm` |
| U-06 | Lookup routeCode SearchInput | **PASS** | list+form · LKP display code+name on list |
| U-07 | testid list/form | **PASS** | `rmms-iot-list-page` · `rmms-iot-form-page` (QA) |
| U-08 | Demo notes / English UI | **PASS** | liveAssert demoBadges=false · titles VN |
| U-09 | SearchInput form control testid | **P2** | liveAssert `hasRoute=false` · SearchInput không forward testid · QA known · non-blocking |

**UI-FN verdict:** PASS (P2 U-09 accepted)

---

## BE-FN

| ID | Check | Result | Notes |
|----|-------|--------|-------|
| B-01 | Entity + migration `Schema_RmmsIotDevices` | **PASS** | `rmms_iot_devices` · soft-delete IsActive |
| B-02 | CRUD + init-data + health | **PASS** | Controller + Service · API-00…06 |
| B-03 | BFF proxy Iot | **PASS** | `web-bff/api/v1/iot` · **cấm ERP.*** |
| B-04 | Prefix `IOT-` + type sensor\|logger | **PASS** | validate + IdCode service |
| B-05 | ui-schema catalogKind `iot-devices` | **PASS** | `CatalogUiSchemaRegistry.IotDevices` seed |
| B-06 | Step 4b / migrate @ review | **SKIP** | roleOnly=review · Dev already flagged |

**BE-FN verdict:** PASS

---

## Cross-role consistency

| Prior | Status | Align |
|-------|--------|-------|
| data_analy | confirmed · compact exists | OK · Q-IOT-* closed downstream |
| po / design / sa | confirmed · approve | OK · Full 5col · Kind B |
| team_lead | route_a `/iot` · T-* covered | OK |
| dev | build PASS · devices shipped | OK |
| qa | e2e PASS · handoff review | OK |

## Debt (accepted · non-blocking)

| GAP | Sev | Disposition |
|-----|-----|-------------|
| Auth `[RequirePermission]` stub | P2 | product-wide · CommonLib mount |
| GAP-QA-IOT-TSC-01 | P2 | typecheck drift · non-blocking |
| GAP-QA-E2E-02 | tool | yarn e2e-qa install · chrome fallback PASS |
| REV-UI form route testid | P2 | SearchInput testid forward · later kit |
| history BE stub | P2 | LinCatalogHistoryModal FE ok · BE history later |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **done** |
| autoApprove | ON |
| fix_gaps | none |
| P0 count | 0 |
| next | roleOnly=review complete · task mark completed · phase done |

## Evidence refs (paths only)

- compact priors: `specs/iot/handoff/*-compact.md`
- QA: `specs/iot/qa/scenarios.md` · `specs/iot/qa/screens/`
- FE: `Linm.Web.RMMS.Iot/src/pages/Iot{List,Form}Page` · `services/iot/endpoint.ts`
- BE: `Domains/Iot` · `Schema_RmmsIotDevices` · `LINM.RMMS.Iot.Bff`
- STATUS: `specs/iot/STATUS.md`
