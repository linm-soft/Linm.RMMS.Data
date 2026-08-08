# Data-analy — shared catalog org-structure

> Status: draft  
> schemaVersion: `2026.08.08.1` · rulesVersion: `2026.08.08.14`  
> Source: [drvn.gov.vn co-cau-to-chuc](https://drvn.gov.vn/gioi-thieu/co-cau-to-chuc?categoryId=101875659)  
> Context SSOT: `docs/context/20-ORG-STRUCTURE-DRVN.md`

## Feature mapping

| | |
|--|--|
| featureSlug | `org-unit` |
| packKind | `master` (no demo) |
| MFE | `Linm.Web.RMMS.Master` |
| catalogKind | `org-unit` |

## Shared columns (seed)

| Column | Type | Maps to |
|--------|------|---------|
| code | string | OrgUnit.code |
| name | string | OrgUnit.name |
| parentCode | string? | OrgUnit.parentCode |
| kind | enum | HQ·ADV·REG·VP·SU·ROOM |
| legacyAlias | string? | Chi cục… |

## Varying dimensions

| Dim | Examples |
|-----|----------|
| Không | Cây DRVN là SSOT — CUC 2 chỉ alias map |

## Handoff

→ PO/Design: CTX org-unit · → SA: seed + API · → TL: T-BE/T-UI trước Asset SearchInput
