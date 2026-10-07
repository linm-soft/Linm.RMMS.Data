# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-journal
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T18:01:42.000Z
contentHash: sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e
taskId: task_e44f140b

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #3
- forms: JournalFormPage (JL-01) · JournalListPage (JL-02)
- productRoute: /nhat-ky/:sessionId · /nhat-ky/:sessionId/moi · /nhat-ky/:sessionId/:lineId
- mfeStdUrl alias: http://localhost:9301/web-rmms-cam-journal (không invent product route)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · phone 430px
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Role: tuần đường ghi nhật ký+ảnh · QL_HAT/TK/NT không tạo dòng (view-only)
- QL_HAT = HAT-TRUONG + HAT-PHO · cấm suy từ MANAGER-RMMS
- cấm: Giao việc trên JL-* · SLA 24h · Mục IV tiền · iOS/Android
- Pattern B GPS: banner on Lưu · cấm fake · Lưu chỉ lock saving/photoBusy
- OUT: Excel · invent CamJournalController · review PUT (peer C)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCaptureControl | tuần đường write · others view |
| gps | định vị | GPS + Banner | Pattern B required |
| narrative | diễn biến | TextArea | required |
| at/km/dir/weather/kind | meta | DateTime+Input+Select | LOOKUP_STATIC |
| onSite/reported/status | flags | Checkbox+Select | reportedTo=cờ TK |
| save | Lưu | Button | role tuần đường |
| lineCards | dòng đã ghi | List RO | GET journal-lines |
| ctaCreate | CTA ghi | Button | ẩn non-tuần-đường |
| roleCaps | quyền | Hidden | cite role-gate |

## Screens / zones (ids only)
- JL-01 · JL-02
- reviewUrl= (Design) prototype keep list/form
- peerStd deep-link= /nhat-ky/:sessionId/moi
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id} · journal-lines list/get · POST/PUT journal-lines · files cite
- real-data §A+§B: PASS
- T-*: edit JournalFormPage + JournalListPage role-gate (cite PLAN-3-VAI #3)

## UNCLEAR
- UNCLEAR-JL-DOMAIN-ROW: SA add DOMAIN-MAP slug hoặc bind peer mobile-b
- UNCLEAR-JL-ROLE-SOURCE: deps web-rmms-role-gate packageCode/roleCaps

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-journal-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-journal-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-journal.md
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileB/JournalFormPage.tsx
- code2: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsMobileB/JournalListPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/STATUS.md
