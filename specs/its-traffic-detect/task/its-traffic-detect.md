# TL — tasks — its-traffic-detect

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| status | `done` |
| updatedAt | `2026-08-17T10:16:00.000Z` |

## Tasks

| Id | Layer | Notes |
|----|-------|-------|
| T-CTX | context | controlHint + STATUS lock |
| T-PERM | FE | `ai-vision.its-objects.*` |
| T-UI-LIST | FE | S-LIST A–D · LinCatalogDataGrid · pagination · list_parity |
| T-UI-FORM | FE | S-DETECT FormMode · leave-confirm · HITL |
| T-UI-MAP | FE | S-MAP Leaflet |
| T-UI-ACT | FE | Confirm/Dismiss/sim/nearby |
| T-UI-UX-01 | FE | no AI chrome header |
| T-BE-CRUD | BE | objects CRUD + nearby + confirm/dismiss |
| T-BE-DETECT | BE | `/its/detect` |
| T-BFF | BE | AiVision BFF proxy |
| T-MIG | BE | `rmms_ai_vision_its_traffic_objects` |

## SSOT checklist (pre-Write)

- [x] 1 LinPageLayout · no nested CatalogListShell
- [x] LinCatalogDataGrid + column drag ON
- [x] LinCatalogListPagination footer
- [x] flex + skeleton · toolbar config
- [x] form checklist · leave-confirm

## Repo

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService`
- Packet Autopilot: BE+UI paths confirmed for Dev Write
