# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-bien-ban
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T15:42:56.000Z
contentHash: sha256:3f196a65ee5bc6578aa8d96f9c08a6e0d0ca3fb263399e7a8d3fe3863da26b0e
taskId: task_af34e11a

## Decisions
- changeScope: edit_page · NEW task · keep PO/Design/SA artifacts · cấm typed CRUD new_page
- formPattern: Mobile list+create TD/TK+detail · phone 430 · Pattern B validate · N/A ERP Modal · no demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/bien-ban · route `/bien-ban`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 · Patrol · cấm ERP.* · cấm invent BienBan*
- demo: N/A · align-mobile-to-mfe · no android/ios prototype · no new tab/route/icon
- Delta HARD cite SUBMIT-VALIDATE: (1) bỏ disabled={!canSave} · banner+inline (2) GPS deny on submit (3) route=SearchInput road-routes · no SEED · miss=`--` (4) capture=environment nếu có ảnh (5) cấm Excel export
- Hai lối giữ: BB-02 ViolationFlag · BB-03 ViolationAction
- API Live giữ: petitions · journal-lines · findings · sessions · auth · files · road-routes/search
- BFF: mobileApiBase only · users forward nếu thiếu (peer)
- open questions: UNCLEAR-LIST-SCOPE (soft) · UNCLEAR-SO07-LINK (soft) · prior DOMAIN/BFF/STD-ROUTE CLOSED

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| list/search/empty | list | List/Search/Empty | GET petitions |
| route | form | SearchInput | road-route · BFF search · no seed |
| sender/km/content | form | Text* | required · banner Pattern B |
| tdFlag / tkAction | flag/action | Button/Radio | ViolationFlag / ViolationAction |
| gps / noFace | GPS | Action/Checkbox | deny on submit |
| save | CTA | Button | always on · only saving disables |

## Screens / zones (ids only)
- BB-00…BB-07 · routes under `/bien-ban`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/ui/prototype/index.html (keep)
- peerStdUrl= http://localhost:9301/bien-ban
- DES-GRID / filter-bar / Excel: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET/POST/GET{id} petitions · PUT journal-lines · findings · road-routes/search · sessions · auth · files
- real-data §A+§B: PASS · § Delta edit_page PASS
- T-*: enhance/fix_gaps (team_lead) · Pattern B + SearchInput

## UNCLEAR
- UNCLEAR-LIST-SCOPE: soft · petitions-only vs union flagged — PO prior
- UNCLEAR-SO07-LINK: soft · deep link slug — cấm embed
- CLOSED: DOMAIN-MAP · BFF-PROXY · STD-ROUTE · JOURNAL-KIND-FIELD

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-bien-ban-real-data.md
- delta cite: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-bien-ban.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-bien-ban/STATUS.md
