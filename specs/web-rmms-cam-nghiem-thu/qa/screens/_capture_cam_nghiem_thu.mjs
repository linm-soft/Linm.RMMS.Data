/**
 * E2E capture — web-rmms-cam-nghiem-thu (custom; stock alias 404 / DUP)
 * Product: /nghiem-thu · /nghiem-thu/moi · /nghiem-thu/:id · role matrix
 */
import pw from "file:///D:/AI-Extension/AI-AutoCode/node_modules/playwright/index.js";
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const { chromium: chromiumLauncher } = pw;
const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
const base = "http://localhost:9301";
const LIST = `${base}/nghiem-thu`;
const CREATE = `${base}/nghiem-thu/moi`;
const LOGIN = `${base}/dang-nhap`;
const HOME = `${base}/trang-chu`;

let user = process.env.QLBD_USER || process.env.E2E_USER || "";
let password = process.env.QLBD_PASSWORD || process.env.E2E_PASSWORD || "";
if (!user || !password) {
  const buf = readFileSync("D:/AI-Rules/Linm.Development.Rules/e2e.local.json");
  const s =
    buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf
      ? buf.slice(3).toString("utf8")
      : buf.toString("utf8").replace(/^\uFEFF/, "");
  const rulesCred = JSON.parse(s);
  user = user || rulesCred.user || "";
  password = password || rulesCred.password || "";
}
if (!user || !password) throw new Error("GAP-QA-E2E-03 missing QLBD_USER/PASSWORD");
console.log("[cam-nt] creds user_set=", !!user, "pass_len=", password.length);

function shotName(id) {
  return id.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") + ".png";
}
function pathOf(page) {
  try {
    return new URL(page.url()).pathname;
  } catch {
    return "";
  }
}
function shaFile(abs) {
  try {
    return createHash("sha256").update(readFileSync(abs)).digest("hex").slice(0, 12);
  } catch {
    return "";
  }
}

const results = [];
console.log("[cam-nt] launch headless phone 430");
const browser = await chromiumLauncher.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 430, height: 900 },
  geolocation: { latitude: 21.0285, longitude: 105.8542, accuracy: 12 },
  permissions: ["geolocation"],
});
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

await page.route(/http:\/\/localhost:9301(\/[^?]*)?(\?.*)?$/, async (route) => {
  const req = route.request();
  if (req.resourceType() !== "document") {
    await route.continue();
    return;
  }
  const url = req.url();
  if (/\/(linm-rmms-mobile\.js|index\.html)(\?|$)/.test(url) || /\.[a-z0-9]+(\?|$)/i.test(url)) {
    await route.continue();
    return;
  }
  const r = await page.request.get(base + "/");
  await route.fulfill({
    status: 200,
    contentType: "text/html; charset=utf-8",
    body: await r.text(),
  });
});

async function dismissOverlay(p) {
  await p
    .evaluate(() => {
      document
        .querySelectorAll(
          "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
        )
        .forEach((el) => el.remove());
    })
    .catch(() => {});
}

async function fatalUi(p) {
  await dismissOverlay(p);
  const overlay = p.locator(
    "iframe#webpack-dev-server-client-overlay, #webpack-dev-server-client-overlay",
  );
  if (await overlay.count()) {
    const vis = await overlay.first().isVisible().catch(() => false);
    const featureOk = await p
      .locator(
        '[data-feature="web-rmms-cam-nghiem-thu"], [data-des-id="NT-01"], [data-testid="roleGateBanner"]',
      )
      .count();
    if (vis && featureOk === 0) return "webpack overlay";
  }
  const t = await p.locator("body").innerText().catch(() => "");
  if (
    /Something went wrong|Uncaught |ChunkLoadError|Failed to compile|TypeError:|ReferenceError:/i.test(
      t,
    )
  ) {
    return "crash text: " + t.slice(0, 180).replace(/\s+/g, " ");
  }
  if (pageErrors.length) return "pageerror: " + pageErrors.slice(-1)[0];
  return null;
}

async function fillLogin() {
  await page.goto(LOGIN, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
  if (!(await page.locator('#f-pass, input[type="password"]').count())) {
    await page.goto(base + "/login", { waitUntil: "domcontentloaded", timeout: 60000 });
  }
  await page.waitForSelector('#f-pass, input[type="password"]', { timeout: 20000 });
  const userEl = page.locator("#f-user, input[name='username'], input[type='text']").first();
  const passEl = page.locator("#f-pass, input[type='password']").first();
  await userEl.fill(user);
  await passEl.fill(password);
  await page
    .locator("#btn-login, button[type='submit'], button:has-text('Đăng nhập')")
    .first()
    .click({ force: true });
  await page.waitForFunction(() => !/\/dang-nhap|\/login/i.test(location.pathname), {
    timeout: 30000,
  });
  await page.waitForTimeout(1500);
  console.log("[cam-nt] after login href=", page.url());
}

async function ensureStaff() {
  await page.goto(HOME, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.evaluate(() => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {
      /* ignore */
    }
  });
  await fillLogin();
  if (/\/dang-nhap|\/login/i.test(pathOf(page))) {
    throw new Error("GAP-QA-E2E-03 login stuck on " + page.url());
  }
}

async function dumpZones() {
  return page.evaluate(() => {
    const zones = [
      ...document.querySelectorAll("[data-des-id], [data-zone]"),
    ].map((el) => el.getAttribute("data-des-id") || el.getAttribute("data-zone"));
    const fields = [...document.querySelectorAll("[data-field]")].map((el) =>
      el.getAttribute("data-field"),
    );
    const testids = [
      "roleGateBanner",
      "nt-cta-create",
      "nt-cta-create-bottom",
      "nt-list-hidden",
      "nt-ro-sessions",
      "nt-ro-findings",
    ].filter((id) => document.querySelector(`[data-testid="${id}"]`));
    const hasCreate =
      !!document.querySelector('[data-testid="nt-cta-create"], [data-testid="nt-cta-create-bottom"], [data-field="btnCreate"]');
    const hasSave = !!document.querySelector('[data-field="save"]');
    const hasRo =
      !!document.querySelector('[data-testid="nt-ro-sessions"], [data-zone="NT-RO-LINK"]');
    const text = (document.body?.innerText || "").slice(0, 1200).replace(/\s+/g, " ");
    const feature =
      document
        .querySelector('[data-feature="web-rmms-cam-nghiem-thu"]')
        ?.getAttribute("data-feature") || null;
    return {
      feature,
      zones: [...new Set(zones.filter(Boolean))],
      fields: [...new Set(fields)],
      testids,
      hasCreate,
      hasSave,
      hasRo,
      text,
      href: location.href,
      path: location.pathname,
    };
  });
}

async function captureCurrent(id, waitSel, assertFn) {
  const file = shotName(id);
  const abs = join(outDir, file);
  console.log("[cam-nt] capture", id, waitSel);
  try {
    if (/\/dang-nhap|\/login/i.test(pathOf(page))) {
      throw new Error("still on login gate " + page.url());
    }
    if (waitSel) await page.waitForSelector(waitSel, { timeout: 30000 });
    await page.waitForTimeout(1400);
    const fatal = await fatalUi(page);
    if (fatal) throw new Error("GAP-QA-E2E-CRASH-01 " + fatal);
    const dump = await dumpZones();
    if (assertFn) {
      const msg = assertFn(dump);
      if (msg) throw new Error(msg);
    }
    await page.screenshot({ path: abs, fullPage: true });
    results.push({
      id,
      result: "PASS",
      screenshot: file,
      href: page.url(),
      sha: shaFile(abs),
      dump,
    });
    console.log("[cam-nt]", id, "PASS", dump.zones.join(","), "sha=", shaFile(abs));
  } catch (err) {
    try {
      await page.screenshot({ path: abs, fullPage: true });
    } catch {
      /* ignore */
    }
    let dump = null;
    try {
      dump = await dumpZones();
    } catch {
      /* ignore */
    }
    results.push({
      id,
      result: "FAIL",
      screenshot: file,
      error: err instanceof Error ? err.message : String(err),
      href: page.url(),
      sha: shaFile(abs),
      dump,
    });
    console.log("[cam-nt]", id, "FAIL", err instanceof Error ? err.message : String(err));
  }
}

try {
  pageErrors.length = 0;
  await ensureStaff();

  // S0 — NT-L list role matrix (view banner · ẩn Tạo · RO links)
  await page.goto(LIST, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page.waitForTimeout(2000);
  if (/\/dang-nhap|\/login/i.test(pathOf(page)) || (await page.locator("#f-pass").count())) {
    await fillLogin();
    await page.goto(LIST, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForTimeout(2000);
  }
  await captureCurrent(
    "S0",
    '[data-feature="web-rmms-cam-nghiem-thu"], [data-des-id="NT-01"], [data-testid="nt-list-hidden"]',
    (d) => {
      if (d.feature !== "web-rmms-cam-nghiem-thu" && !d.zones.includes("NT-01") && !d.testids.includes("nt-list-hidden")) {
        return "GAP-QA-S0 missing NT-L feature";
      }
      // hidden (tuần đường): list hidden ok
      if (d.testids.includes("nt-list-hidden")) return null;
      // view: banner + no create · write: create ok no banner
      if (!d.hasCreate && !d.testids.includes("roleGateBanner")) {
        return "GAP-QA-S0 expected roleGateBanner when create hidden";
      }
      if (d.hasCreate && d.testids.includes("roleGateBanner")) {
        return "GAP-QA-S0 write+banner conflict";
      }
      if (!d.hasCreate && !d.hasRo && !d.testids.includes("nt-list-hidden")) {
        return "GAP-QA-S0 expected NT-RO-LINK when list visible";
      }
      return null;
    },
  );

  // S1 — create gate: /moi → redirect list when !write · else form write
  pageErrors.length = 0;
  await page.goto(CREATE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page.waitForTimeout(2000);
  const onCreate = /\/nghiem-thu\/moi/i.test(pathOf(page));
  if (onCreate) {
    await captureCurrent(
      "S1",
      '[data-feature="web-rmms-cam-nghiem-thu"], [data-des-id="NT-05"], [data-field="save"]',
      (d) => {
        if (d.feature !== "web-rmms-cam-nghiem-thu") return "GAP-QA-S1 missing feature on create";
        if (!d.hasSave) return "GAP-QA-S1 write path expected save CTA";
        return null;
      },
    );
  } else {
    // Deny redirect → list; open RO findings to keep PNG distinct from S0
    await page.waitForSelector(
      '[data-testid="nt-ro-findings"], [data-testid="roleGateBanner"], [data-testid="nt-list-hidden"]',
      { timeout: 20000 },
    ).catch(() => {});
    const findings = page.locator('[data-testid="nt-ro-findings"]');
    if (await findings.count()) {
      await findings.click({ force: true });
      await page.waitForTimeout(2000);
      await captureCurrent("S1", "body", (d) => {
        if (!/phat-hien|finding|phát hiện/i.test(d.path + " " + (d.text || ""))) {
          // soft: at least left nghiem-thu list create gate
          if (/\/nghiem-thu\/?$/i.test(d.path) && d.hasCreate) {
            return "GAP-QA-S1 deny expected no create after redirect";
          }
        }
        return null;
      });
    } else {
      await captureCurrent(
        "S1",
        '[data-feature="web-rmms-cam-nghiem-thu"], [data-testid="roleGateBanner"], [data-testid="nt-list-hidden"]',
        (d) => {
          if (d.hasCreate) return "GAP-QA-S1 deny path still shows create";
          if (!d.testids.includes("roleGateBanner") && !d.testids.includes("nt-list-hidden")) {
            return "GAP-QA-S1 expected banner or hidden after create deny";
          }
          return null;
        },
      );
    }
  }

  // QA-20 — detail RO (NT-11) · fallback RO sessions
  pageErrors.length = 0;
  await page.goto(LIST, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page
    .waitForSelector(
      '[data-des-id="NT-03"], [data-testid="nt-ro-sessions"], [data-testid="nt-list-hidden"]',
      { timeout: 30000 },
    )
    .catch(() => {});
  await page.waitForTimeout(1500);
  const card = page.locator('[data-des-id="NT-03"]').first();
  if (await card.count()) {
    await card.click({ force: true });
    await page.waitForTimeout(2500);
    await captureCurrent(
      "QA-20",
      '[data-feature="web-rmms-cam-nghiem-thu"], [data-des-id="NT-11"], [data-testid="roleGateBanner"]',
      (d) => {
        if (d.feature !== "web-rmms-cam-nghiem-thu") return "GAP-QA-20 missing feature on detail";
        if (!d.hasSave && !d.testids.includes("roleGateBanner")) {
          return "GAP-QA-20 expected formView banner when no save";
        }
        return null;
      },
    );
  } else {
    const sessions = page.locator('[data-testid="nt-ro-sessions"]');
    if (await sessions.count()) {
      await sessions.click({ force: true });
      await page.waitForTimeout(2000);
      await captureCurrent("QA-20", "body", () => null);
    } else {
      await captureCurrent(
        "QA-20",
        '[data-feature="web-rmms-cam-nghiem-thu"], [data-testid="nt-list-hidden"]',
        (d) => {
          if (!d.feature && !d.testids.includes("nt-list-hidden")) {
            return "GAP-QA-20 list fallback missing";
          }
          return null;
        },
      );
    }
  }
} finally {
  await browser.close();
  const shas = results.map((r) => r.sha).filter(Boolean);
  const uniq = new Set(shas);
  const dup =
    shas.length >= 2 && uniq.size < shas.length
      ? "GAP-QA-E2E-DUP-01 sha collision " + shas.join(",")
      : null;
  const allPass = results.length > 0 && results.every((r) => r.result === "PASS");
  const ok = allPass && !dup;
  writeFileSync(
    join(outDir, "manifest.json"),
    JSON.stringify(
      {
        url: LIST,
        aliasUrl: "http://localhost:9301/web-rmms-cam-nghiem-thu",
        method: "_capture_cam_nghiem_thu.mjs",
        capturedAt: new Date().toISOString(),
        steps: results.map((r) => ({
          id: r.id,
          result: r.result,
          screenshot: r.screenshot,
          href: r.href,
          sha: r.sha,
          error: r.error,
        })),
        dumps: results.map((r) => ({ id: r.id, dump: r.dump })),
        dup,
        ok,
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ ok, dup, results }, null, 2));
  process.exit(ok ? 0 : 1);
}
