# Checklist — Azure OpenAI (RMMS P1 detect)

> Guide: [azure-openai-register-use.md](./azure-openai-register-use.md)  
> Host duy nhất giữ key: `Linm.AI.WebService` (`http://localhost:5301`).  
> Ngày hoàn tất: ____________  · Resource: ____________  · Region: ____________

## A. Đăng ký / quyền

- [ ] Subscription Azure + billing đã bật
- [ ] Entra: Contributor (hoặc Cognitive Services Contributor) trên RG
- [ ] Region **có gpt-4o vision** (không mặc định `southeastasia`)
- [ ] Budget alert lab ($20–50) đã tạo
- [ ] Nếu Create bị chặn: đã gửi [access form](https://aka.ms/oai/access) và được duyệt

## B. Resource + deployment

- [ ] Resource Azure OpenAI (S0) **Succeeded**
- [ ] Deployment name **`gpt-4o`** (hoặc tên đã ghi vào `Ai:DeploymentDefault`)
- [ ] Model **gpt-4o** (vision), không text-only
- [ ] TPM lab ≥ 10k
- [ ] Endpoint: `https://__________.openai.azure.com/`
- [ ] Key 1 đã copy — **không** commit / chat / screenshot PR

## C. Gắn AiService (local)

- [ ] `cd …\Linm.AI.WebService.Api` → `dotnet user-secrets set Ai:Endpoint` + `Ai:ApiKey` + `Ai:DeploymentDefault`
- [ ] (Verify) `Ai:AllowDevFallback` = `false`
- [ ] `dotnet user-secrets list` thấy 3 key (không dán output vào ticket)
- [ ] Process `:5301` **restart** sau khi set secret
- [ ] `GET http://localhost:5301/health` → 200
- [ ] **Không** có `Ai:ApiKey` trong RMMS.Api / BFF / MFE / git

## D. Verify Azure (curl) — làm trước UI

- [ ] **4a text** chat/completions → HTTP 200
- [ ] **4b vision** (ảnh + `image_url`) → HTTP 200
- [ ] **4c** `POST /api/v1/vision/detect` → class thuộc 8 TS, không hash-fallback
- [ ] 401 → sửa key · 404 → sửa tên deployment · 429 → tăng TPM

## E. Stack detect UI

- [ ] AiService `:5301` đang chạy (code + secret mới)
- [ ] RMMS API restart (có `/uploads` + `HttpAssetDetector`)
- [ ] Migration `Schema_RmmsUploadSessions` đã apply
- [ ] BFF proxy `detect-assets` + `uploads/init|complete`
- [ ] MFE `start:std` — nút **Chạy phát hiện** (`data-testid=rmms-ai-asset-detect-form-run-detect`)

## F. Một lần chạy thật (DoD infer)

- [ ] Chọn JPEG/PNG ≤ 4MB (không để «Chưa đính kèm ảnh»)
- [ ] Vĩ độ / kinh độ thật (không `0,0`)
- [ ] SearchInput **Tuyến đường**
- [ ] Bấm **Chạy phát hiện** (không bấm **Lưu**)
- [ ] ≥ 1 Draft trên list · `imageUrl` **không** `mock://`
- [ ] Overlay class/score **sau** detect (không phải 85% mặc định form)
- [ ] Log AiService **không** có *using lab fallback* / *chưa cấu hình*

## G. Ops / bảo mật

- [ ] Key chỉ User Secrets / env / Key Vault
- [ ] Content filter Azure giữ bật
- [ ] Candidate = Draft; Confirm mới tạo Asset
- [ ] Biết cách rotate: Regenerate Key 1 → `user-secrets set` → restart 5301
- [ ] Mode B (R2) chỉ khi đã có `R2_*` + CORS — lab dùng Mode A

## Sign-off

| Vai trò | Tên | Ngày | OK |
|---------|-----|------|----|
| Infra / Azure | | | [ ] |
| Dev AiService | | | [ ] |
| Dev MFE detect | | | [ ] |
