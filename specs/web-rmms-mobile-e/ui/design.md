# Design — web-rmms-mobile-e

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-e` |
| title | Đợt E — kế hoạch tần suất (TK-07) |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_751be4a2`) |
| changeScope | `edit_page` |
| packKind | **`list`** (PO confirm · UI = **phone Field** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile full list RO (TK-07) · **N/A** ERP Modal/Slideout · **không** form ghi |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Field · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-mobile-e` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-e` |
| mfeStdRoute | `/web-rmms-mobile-e` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration road-routes · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-mobile-e-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-mobile-e-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T10:30:00.000Z` |
| taskId | `task_751be4a2` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:b7fde038e4ef2cdb7ac0cacf9eb5f303671f1daffcbe9d058c5107e78413db2d` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native · Kind B DES-GRID · `LinErpListFilterBar` · fake GPS / fake counts · hardcode label keys ngoài `useFormOptions` · hard-code lượt TCCS · re-scan demo · `yarn build` / e2e / start:std ở role này · edit quy tắc trên phone.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-mobile-e.md` | wave E TK-07 |
| CTX-02 | `docs/plan/web-rmms-mobile/IMPLEMENT-SCREENS.md` | TK-07 |
| CTX-03 | `docs/plan/web-rmms-mobile/GAP-TUAN-DUONG-TUAN-KIEM.md` | §6 tần suất · cấm hard-code 3–9 |
| CTX-04 | peer A–D | hub TK-00 · sessions · **cấm** clone desktop shell |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-mobile-e-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | AC-LIST-01..08 · empty-no-hardcode · RO |
| tokens | `docs/mobile-tokens.json` | color/radius/size (cite peer) |

## 1. Pattern & shell

| | |
|--|--|
| Frame | Phone **430px** · content-only · tokens primary `#0C84C0` · label **13** · field **≥16** |
| Shell | App topbar (title · backHub · refresh) · **không** ERP `LinPageLayout` catalog chrome |
| List | TK-07 — **card list** RO theo tuyến · EmptyState khi chưa API |
| Form write | **none** — read-only |
| Leave | **N/A** dirty (không form ghi) |
| Tabs | none |
| Filter / DES-GRID | **N/A** phone · **cấm** LinErpListFilterBar |
| Out of E | báo cáo tháng desktop · track GPS · native · edit quy tắc phone — **hide** |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **TK-07** | `/field/tuan-kiem/ke-hoach` | List cards RO · EmptyState | GET frequency/plan **Mới** · empty 404 |
| **emptyHint** | (TK-07) | EmptyState | copy key · CTA refresh · backHub |
| **planList** | (TK-07) | Card list | rows khi schema+API có data |
| **backHub** | topbar / CTA | Button | → TK-00 / Field (peer A) |
| **refresh** | topbar / CTA | Button | reload GET · optional |

### IA

```
(auth) → Field → TK-00 hub (peer A)
  → «Kế hoạch tuần» → TK-07
     ├─ 404 / no table → emptyHint (0 mock row)
     └─ plan rows → planList cards (route · roadClass · ruleText · counts · coverageStatus)
  ← backHub → TK-00
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| planList | TK-07 | List/Table RO | — | cards phone · rows theo tuyến · **cấm** ERP filter |
| route | TK-07 | Text RO | — | mã/tên từ plan / road-routes |
| roadClass | TK-07 | Text/Chip RO | — | road-routes · trống + GAP nếu thiếu |
| ruleText | TK-07 | Text RO | — | per route/class · **cấm** hardcode số chung |
| patrolDayCount | TK-07 | Number RO | — | API/agg · **cấm** fake |
| inspectWeekCount | TK-07 | Number RO | — | API/agg · **cấm** fake |
| coverageStatus | TK-07 | Chip RO | — | `thieu` \| `du` · LOOKUP_STATIC `useFormOptions` |
| emptyHint | TK-07 | EmptyState | — | 404/no table · **cấm** fake rows |
| refresh | TK-07 | Button | — | reload GET · optional |
| backHub | TK-07 | Button | — | về TK-00 / Field |

**Không** field ghi / GPS / File trên TK-07.

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.

**coverageStatus keys:** `thieu` · `du` (LOOKUP_STATIC).

### List A–D / DES-RPT

| Check | Result |
|-------|--------|
| A — packKind list phone cards | **PASS** · TK-07 planList |
| B — empty vs filled | **PASS** · emptyHint + planList zones |
| C — DES-GRID / LinErpListFilterBar | **N/A** phone |
| D — Report / DES-RPT | **N/A** |
| Grid AC AC-LIST-01..08 | **PASS** criteria (PO) · Design wire khớp |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | TK-07 empty · TK-07 filled (planList cards) |
| Form | **none** RO |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · control-hint · mobile-tokens · **cấm** shared-grid desktop |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-e/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-mobile-e` |
| **real_view_parity** | `v1` |

### Wire

```
TK-07 empty: emptyHint · refresh · backHub · 0 mock counts
TK-07 filled: planList cards · route · roadClass · ruleText · patrolDayCount · inspectWeekCount · coverageStatus thieu|du
RO: không input · không GPS · không Leave dirty
```

## 5. States

| State | UI |
|-------|-----|
| loading | topbar + skeleton cards (Dev) / silent refresh |
| empty (404 / no schema) | emptyHint · **cấm** pretend filled |
| filled | planList cards từ API |
| error 4xx | toast · **cấm** `window.alert` |
| roadClass missing | chip `—` + GAP cite · không invent |
| coverage | chip `thieu` / `du` only |

## 6. Open → SA (không block Design DoR)

| id | Issue |
|----|-------|
| UNCLEAR-FREQ-API | Path GET kế hoạch |
| UNCLEAR-ROAD-CLASS | Field cấp trên road-routes |
| UNCLEAR-COUNT-SOURCE | Server agg vs client sessions |
| UNCLEAR-RULE-SOURCE | ruleText bảng vs enum theo class |
| UNCLEAR-DOMAIN-SLUG | DOMAIN-MAP row `web-rmms-mobile-e` |

## 7. DoR / Leave gate

| Gate | Rule |
|------|------|
| prototype + reviewUrl | **PASS** |
| control-map = controlHint | **PASS** |
| phone 430 · Mobile only | **PASS** |
| empty-no-hardcode · RO | **PASS** |
| DES-GRID N/A · DES-RPT N/A | **PASS** |
| design_confirm | **approve** (autoApprove) |
| cấm ERP.* · cấm rescan demo | **PASS** |
| next | `/agent-sa` · roleOnly stop (**GAP-PKT-ROLE-01**) |

## 8. Handoff

| Role | Packet |
|------|--------|
| SA | Schema frequency · roadClass · DOMAIN slug E · count source · **cấm** ERP.* |
| TL/Dev | Wire `Linm.Web.RMMS.Mobile` · empty until API · `useFormOptions` · no fake counts |
| QA | empty 404 · filled cards · AC-LIST-01..08 · no GPS · no desktop |
