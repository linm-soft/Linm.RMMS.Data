# Team lead — Task pack — web-rmms-ui-align

> Status: **PASS** · role `team_lead` · task `task_d18fcac3` · writtenAt `2026-09-26T07:05:00.000Z`  
> packKind: `list` (phone chrome · ≠ Kind B DES-GRID) · changeScope: `edit_page` · skillVersion: `2026.09.05.03`  
> Prior: data_analy · po · design · sa — all **confirmed** · autoApprove=ON  
> **Cấm** implement trong role này · **cấm** e2e / yarn build / start:std · next `/agent-dev`

| | |
|--|--|
| Feature | `web-rmms-ui-align` |
| Title | Align UI Home · TabBar · Field · Me theo prototype phone |
| Form pattern | Full / Overlay / Tab · phone ≤430 · **N/A** ERP Modal/Slideout · **N/A** DES-GRID Kind B |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-ui-align` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
| productRoute | reuse existing only · **cấm** invent product slug |
| peerStdUrl | `http://localhost:9301/web-rmms-shell` · `http://localhost:9301/web-rmms-home` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Auth · Notification · GIS tiles · cite Patrol/Incident/Maintenance · **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · `mobile-bff/api/v1` · **cấm** web-bff · **cấm** MapService browser |
| Demo | **N/A** · **cấm** rescan |
| Grid AC / LinErpListFilterBar | **N/A-chrome** — peers keep own filter-bar |
| Report AC | **N/A** |
| API mới / migration / Step 4b | **none** (SA) — Dev cite Live only |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/prototype/index.html` |
| Zones | UA-00 · DES-MOB-TABBAR · LOGIN · HOME · FIELD · ME · peers · DES-LEAVE · PAT-HOME · INC-LIST · MNT-LIST · OPS · OFFLINE · FEEDBACK · CAM-VIEW |
| Labels | `useFormOptions()` / LOOKUP_STATIC · **cấm** hardcode VN |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## Notes

- changeScope=`edit_page`
- control-hint + real-data: present under `specs/_data-analy/features/` → full pipeline (not data-analy-only)
- GAP-ME/TAB CLOSED prior · settings=toast · tab.field VN=«Tuần đường» · icon `#i-mappin`
- FormType pack: phone chrome → **skip** Kind B `T-UI-LIST`/`T-UI-FILTER`/`T-BE-CRUD`/`T-BE-UISCHEMA` (DES-GRID N/A) · paste chrome T-* below + Leave + UX + Map tiles + QA
- contentHash cite SA: `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b`

---

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm_existing** |
| mfeStdRoute | `/web-rmms-ui-align` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
| productRoute | reuse existing peer routes only |
| reason | Route already in STATUS + context · edit_page chrome align · **cấm** invent product route · autoApprove=ON |

---

## OUT (P1)

- Invent product route / Me API / ui-align CRUD controller
- Kind B DES-GRID primary · `LinErpListFilterBar` on chrome · ERP Modal/Slideout primary
- web-bff client · ERP.* · MapService browser direct
- Native iOS/Android code edits · demo-json / itemsOrDemo ship
- Hardcode VN labels · settings = real page (toast only)
- Re-open GAP-ME/TAB · invent `/web-rmms-feedback` / `/web-rmms-cam-view` when peer not mounted (toast `me.peerPending`)

---

## FormMode ↔ API (Live cite)

| Mode / surface | Method · path (Mobile.Bff `mobile-bff/api/v1`) | Notes |
|----------------|-----------------------------------------------|-------|
| LOGIN | `POST auth/login` | JWT · Leave dirty Modal |
| Session | `POST auth/refresh-token` | renew |
| Profile / Me header | `GET auth/profile` | displayName RO |
| Notify badge (opt) | `GET notification/overview` | unread · empty=0 |
| Field sessions badge (opt) | `GET patrol/sessions?status=Đang tuần` | badge · filter client |
| Map tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` | BFF only |
| Tab / Home / Field / Me nav | — | LOOKUP_STATIC · **cấm** invent |
| Me → feedback / cam | peer alias mount | else toast `me.peerPending` |
| Peer lists INC/MNT/… | cite DOMAIN-MAP | chrome nav only · peer owns CRUD |

Canonical prefix: `mobile-bff/api/v1` — **cấm** invent paths · **cấm** Step 4b.

---

## FormType pack map (phone chrome)

| Canonical id | Applied? | Notes |
|--------------|----------|-------|
| T-UI-LIST-01 / FILTER / CFG / FORM / ACT / LKP / FIELD / HIST | **N/A** | DES-GRID / Kind B / filter-bar N/A-chrome |
| T-BE-CRUD / UISCHEMA / INIT | **N/A** | no feature entity · labels LOOKUP_STATIC |
| T-UI-LEAVE-01 | **YES** → T-FE-08 | login dirty LeaveConfirmModal · logout useAlert |
| T-UI-PROD-01 | **YES** → T-FE-09 | end-user · cấm Dev notes |
| T-UI-UX-01 | **YES** → T-FE-09 | phone chrome constitution |
| T-UI-RESP-01 | **YES** → T-FE-09 | ≤430 · verify 375 (+ peer shell) |
| T-UI-MAP-01 | **YES** → T-FE-07 | tiles BFF only · `/agent-dev` (+ OMS cite if deep GIS peer) |
| T-PERM-01 | **N/A-chrome** | Auth Live · peer perms stay peer |
| T-QA-* | **YES** → T-QA-01 | `/agent-qa*` only e2e |

**devSlash:** `/agent-dev` (chrome + auth + leave) · map tiles within `/agent-dev` (BFF proxy · no invent OMS page) · QA `/agent-qa`

---

## Task breakdown (T-*)

| id | lane | title | deps | owner slash | DoD / AC | status |
|----|------|-------|------|-------------|----------|--------|
| T-FE-01 | FE | Std mount `/web-rmms-ui-align` · UA-00 shell phone ≤430 | — | `/agent-dev` | Route registered · deep-link mfeStdUrl · peerStdUrl shell/home · **cấm** invent product slug | pending |
| T-FE-02 | FE | DES-MOB-TABBAR 5 items | T-FE-01 | `/agent-dev` | Trang Chủ · Tuần đường (`#i-mappin`) · Vấn đề · Công việc · Tôi · LOOKUP_STATIC tab.* · stroke prototype | pending |
| T-FE-03 | FE | LOGIN overlay + session | T-FE-01 | `/agent-dev` | POST login · refresh · JWT store · **cấm** mock | pending |
| T-FE-04 | FE | HOME guest+staff | T-FE-02 · T-FE-03 | `/agent-dev` | Static/Nav/RO · profile · notify badge opt · useFormOptions | pending |
| T-FE-05 | FE | FIELD doors + sessions badge | T-FE-02 | `/agent-dev` | Button/Nav doors · optional GET patrol/sessions badge · nav peer | pending |
| T-FE-06 | FE | ME rows + peer alias | T-FE-02 · T-FE-03 | `/agent-dev` | profile·offline·signal·feedback·cam·ops·logout · settings=toast · feedback/cam = peer mount else `me.peerPending` | pending |
| T-FE-07 | FE | Map tiles BFF | T-FE-01 | `/agent-dev` | GET gis/tiles/…pbf · **cấm** MapService browser · deep GIS = peer | pending |
| T-FE-08 | FE | Leave + alert (T-UI-LEAVE-01) | T-FE-03 · T-FE-06 | `/agent-dev` | DES-LEAVE · LeaveConfirmModal login dirty · useAlert logout · **cấm** `window.alert`/`confirm` | pending |
| T-FE-09 | FE | Labels · UX · RESP · PROD | T-FE-01…08 | `/agent-dev` | useFormOptions · no Dev chrome notes · ≤430 · prototype parity zones | pending |
| T-FE-10 | FE | Peer list chrome nav only | T-FE-02 | `/agent-dev` | INC/MNT/… reuse peer pages · DOMAIN-MAP cite · **cấm** re-implement peer CRUD | pending |
| T-BE-01 | BE | Cite-only Live align | — | `/agent-dev` | Verify Mobile.Bff proxies API-01…06 · **no** new API · **no** Step 4b · **cấm ERP.*** | pending |
| T-QA-01 | QA | scenarios + E2E | T-FE-01…10 · T-BE-01 | `/agent-qa` | qa/scenarios.md · TabBar/Me/Leave/tiles · **only QA** runs e2e/start:std | pending |

### Dev order (recommended)

1. T-FE-01 → T-FE-02 → T-FE-03 → T-FE-04 / T-FE-05 / T-FE-06 (parallel) → T-FE-07 → T-FE-08 → T-FE-09 → T-FE-10  
2. T-BE-01 cite check (no migration)  
3. Handoff QA → T-QA-01 (e2eQa queued)

### Dev constraints HARD

- Mobile.Bff only · **cấm** web-bff · **cấm** ERP.* · **cấm** MapService browser  
- Routes: reuse existing only · **cấm** invent product route/API  
- TabBar 5 · tab.field=«Tuần đường» · Me settings=toast · peer alias or toast  
- LeaveConfirmModal + useAlert · **cấm** native dialog  
- Labels `useFormOptions()` · **cấm** hardcode VN  
- Prototype parity · phone ≤430 · **cấm** Kind B grid on chrome  
- implement artifact: `specs/web-rmms-ui-align/implement/web-rmms-ui-align.md`

---

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| tab.items | TabBar | T-FE-02 |
| login.* | Text/Password | T-FE-03 · T-FE-08 |
| home.* | Static/Nav/RO | T-FE-04 |
| field.doors | Button/Nav | T-FE-05 |
| me.* | Nav/RO/toast | T-FE-06 · T-FE-08 |
| map.tiles | Map | T-FE-07 |
| peer lists | reuse peer | T-FE-10 |

## Acceptance map (prior → T-*)

| AC / decision | Owner task |
|---------------|------------|
| TabBar 5 · Tuần đường · `#i-mappin` | T-FE-02 |
| LOGIN live JWT · Leave dirty Modal | T-FE-03 · T-FE-08 |
| HOME guest+staff · notify badge | T-FE-04 |
| FIELD doors · sessions badge | T-FE-05 |
| ME rows · settings toast · peer alias | T-FE-06 |
| Tiles BFF only | T-FE-07 |
| Logout useAlert · cấm native | T-FE-08 |
| Labels · ≤430 · prototype parity · no Dev notes | T-FE-09 |
| Peer nav cite DOMAIN-MAP | T-FE-10 |
| No new API / migration | T-BE-01 |
| E2E queued QA only | T-QA-01 |

## ssot.reuse / implement.wire (slim)

| Concern | Reuse | Wire |
|---------|-------|------|
| UI kit | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clone |
| HTTP | apiClient SSOT | `VITE_MOBILE_API_URL` → `:5202` `mobile-bff/api/v1` |
| Auth | Linm.Platform.Authentication Live | login · refresh · profile |
| Labels | LOOKUP_STATIC / useFormOptions | tab.* · home.* · me.* |
| Leave | LeaveConfirmModal · useAlert | `/implement-show-leave-confirm` |
| Map | GisTilesController via BFF | **cấm** MapService browser |
| Peers | existing MFE routes | nav only |

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-ui-align-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## DoD — team_lead (this role)

- [x] changeScope=`edit_page` · control-hint + real-data present  
- [x] FormType pack chrome: Kind B N/A · T-LEAVE/UX/RESP/MAP/PROD + T-FE-* + T-BE cite + T-QA  
- [x] FormMode↔API mapped · T-* đủ · `devSlash` on each  
- [x] route_confirm existing `/web-rmms-ui-align`  
- [x] compact handoff written · STATUS lock + pipeline step 3 PASS  
- [x] **không** implement code · **không** e2e  

## Next

- `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) · implement T-FE-* · T-BE-01  
- E2E: queued `/agent-qa*` only  

## Full paths

- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/STATUS.md`  
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/handoff/team_lead-compact.md`  
- sa: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/be/solution-discovery.md`  
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/ui/design.md`  
- po: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-ui-align/po/requirement.md`  
- context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-ui-align.md`  
