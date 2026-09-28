# Implement — web-rmms-mnt-progress

> Status: **done** · writtenAt `2026-09-27T13:55:00.000Z` · task `task_48aba3d5`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **roleOnly** `/agent-dev` · **cấm** e2e / `yarn start:std` (queued QA)  
> changeScope: `edit_page` · deltaCite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` (Pattern B)

| | |
|--|--|
| Feature | `web-rmms-mnt-progress` |
| Title | Tiến độ công việc (WORK-P) — Pattern B re-edit |
| changeScope | `edit_page` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/cong-viec/tien-do` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| productRoute | `/work/progress?id=` → alias STD |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · **reuse** `maintenance/work-orders` · **cấm ERP.*** |
| Step 4b | **skip** (T-BE N/A · no API/DTO/migration) |
| demo | N/A |
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |

## Decisions

- Baseline Live WORK-P keep · delta Pattern B only
- **T-EDIT-01:** CTA `disabled={saving}` only · bỏ `ctasDisabled` GPS pre-lock
- **T-EDIT-02:** GPS deny/required → `validationBanner` string[] on click · keys `mnt.progress.gps.*` · scroll-to-banner · dismiss
- **T-EDIT-03:** `<input type="file" accept="image/*" capture="environment">`
- API/DTO unchanged · GPS→Note · **cấm** lat/media body · **cấm** fake GPS
- MEDIA P1 local + capture · GAP-MEDIA Signed defer P2
- Labels: `useFormOptions('web-rmms-mnt-progress')` + LOOKUP_STATIC (+ `mnt.progress.gps.required`)
- **cấm** e2e ở Dev · DES-GRID N/A phone

## Files (FE)

| Path | Note |
|------|------|
| `src/pages/WebRmmsMntProgress/MntProgressPage.tsx` | Pattern B CTA · banner · capture |
| `src/pages/WebRmmsMntProgress/lookupStatic.ts` | + `mnt.progress.gps.required` · dismiss key |
| `src/pages/WebRmmsMntProgress/styles.module.css` | bannerHead / bannerList / bannerDismiss |

## Tasks

| id | status | note |
|----|--------|------|
| T-01…T-05 | **done** | baseline Live (prior) |
| T-EDIT-01 | **done** | `disabled={saving}` only |
| T-EDIT-02 | **done** | banner on click · `mnt.progress.gps.*` |
| T-EDIT-03 | **done** | `capture="environment"` |
| T-BE | **N/A** | Step 4b skip · no BE code change |
| T-QA | pending | queued `/agent-qa*` |

## Verify

| Gate | Result |
|------|--------|
| `yarn build` (MFE) | **PASS** (webpack 5 · warnings size only · chunk `cong-viec/tien-do`) |
| `dotnet build` | **skip** (T-BE N/A · no BE delta) |
| e2e / start:std | **skipped** (role Dev · e2eQa queued) |

## Debt / carry

- GAP-MEDIA Signed upload on Progress/Complete — defer P2

## Next

- `/agent-qa*` · e2eQa ON · roleOnly stop (GAP-PKT-ROLE-01)
