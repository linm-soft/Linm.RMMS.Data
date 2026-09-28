# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T07:15:00.000Z
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
taskId: task_a242e718
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · editTask=1 · § Delta overlay prior wave B
- formPattern: Full (TD-04/05) · phone 430 · LeaveConfirmModal · N/A ERP Modal
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- BFF: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · users forward nếu thiếu
- entity: PatrolJournalLineEntity · rmms_patrol_journal_lines · **migration=none new** (done)
- Pattern B / capture / align: FE only · no new API/DTO
- Grid/filterBar/Report: N/A phone · no Excel
- demo: N/A
- open questions: UNCLEAR-CAPTURE-PROP · UNCLEAR-BANNER-KEYS → Dev · UNCLEAR-LRS KEEP

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | GET sessions/{id}/journal-lines |
| at / reportedAt | giờ | DateTime | TZ UTC |
| lat/lng/accuracyM | GPS | GPS | banner on fail |
| narrative | diễn biến | TextArea | required · banner |
| mediaIds | ảnh | FileMulti | capture=env |
| direction/weather/kind/status | enum | Dropdown | LOOKUP_STATIC |
| save | Lưu | Button | disable only saving |

## Screens / zones (ids only)
- TD-04 · TD-05 · banner · DES-LEAVE
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id}/journal-lines · POST/PUT journal-lines · GET journal-lines/{id} · GET sessions/{id} · auth/profile · files/*
- entity/migration: Live · none new
- TZ: tz_required · XCO: xco_get_only · SHARE: tenant_keep
- T-DELTA-PATTERN-B-01 · CAPTURE-01 · BFF-01 · ALIGN-01
- prior T-BE-* / T-UI-* done

## UNCLEAR
- UNCLEAR-CAPTURE-PROP → Dev
- UNCLEAR-BANNER-KEYS → Dev prefer existing keys
- UNCLEAR-LRS → kmText tay KEEP

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
- next: /agent-team-lead
