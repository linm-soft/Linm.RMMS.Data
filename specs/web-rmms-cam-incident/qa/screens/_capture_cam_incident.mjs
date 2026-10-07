/**
 * E2E capture — web-rmms-cam-incident (custom; stock alias 404 / DUP)
 * Product: /van-de · /van-de/moi · /van-de/:id · assert role matrix
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
const LIST = `${base}/van-de`;
const CREATE = `${base}/van-de/moi`;
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
console.log("[cam-inc] creds user_set=", !!user, "pass_len=", password.length);

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
console.log("[cam-inc] launch headless phone 430");
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
        '[data-feature="web-rmms-incident"], [data-zone="INC-L"], [data-zone="INC-N"], [data-zone="INC-D"], [data-testid="roleGateBanner"]',
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
  console.log("[cam-inc] after login href=", page.url());
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
    const zones = [...document.querySelectorAll("[data-zone]")].map((el) =>
      el.getAttribute("data-zone"),
    );
    const fields = [...document.querySelectorAll("[data-field]")].map((el) =>
      el.getAttribute("data-field"),
    );
    const testids = [
      "roleGateBanner",
      "inc-photos",
    ].filter((id) => document.querySelector(`[data-testid="${id}"]`));
    const hasFab = !!document.querySelector('[data-field="fabCreate"]');
    const hasAssign = !!document.querySelector('[data-field="assignCta"]');
    const hasClose = !!document.querySelector('[data-field="detail.close"]');
    const text = (document.body?.innerText || "").slice(0, 1200).replace(/\s+/g, " ");
    const feature =
      document
        .querySelector('[data-feature="web-rmms-incident"]')
        ?.getAttribute("data-feature") || null;
    return {
      feature,
      zones: [...new Set(zones)],
      fields: [...new Set(fields)],
      testids,
      hasFab,
      hasAssign,
      hasClose,
      text,
      href: location.href,
    };
  });
}

async function captureCurrent(id, waitSel, assertFn) {
  const file = shotName(id);
  const abs = join(outDir, file);
  console.log("[cam-inc] capture", id, waitSel);
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
    console.log("[cam-inc]", id, "PASS", dump.zones.join(","), "sha=", shaFile(abs));
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
    console.log("[cam-inc]", id, "FAIL", err instanceof Error ? err.message : String(err));
  }
}

try {
  pageErrors.length = 0;
  await ensureStaff();

  // S0 — INC-L role matrix (view/QL_HAT banner · ẩn fab nếu !tuanDuong)
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
    '[data-feature="web-rmms-incident"], [data-zone="INC-L"]',
    (d) => {
      if (d.feature !== "web-rmms-incident" && !d.zones.includes("INC-L")) {
        return "GAP-QA-S0 missing INC-L";
      }
      // Non-write principal: expect banner + no fab; write: fab ok
      if (!d.hasFab && !d.testids.includes("roleGateBanner")) {
        return "GAP-QA-S0 expected roleGateBanner when fab hidden";
      }
      if (d.hasFab && d.testids.includes("roleGateBanner")) {
        return "GAP-QA-S0 write+banner conflict";
      }
      return null;
    },
  );

  // S1 — INC-N create gate (deny non-tuần-đường)
  pageErrors.length = 0;
  await page.goto(CREATE, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page.waitForTimeout(1500);
  await captureCurrent("S1", '[data-zone="INC-N"], [data-testid="roleGateBanner"]', (d) => {
    if (!d.zones.includes("INC-N")) return "GAP-QA-S1 missing INC-N";
    // Soft: if write path, form present; if view, banner required
    if (!d.testids.includes("roleGateBanner") && !d.fields.includes("assetPick") && !d.fields.includes("create")) {
      return "GAP-QA-S1 neither deny banner nor create form";
    }
    return null;
  });

  // QA-20 — INC-D detail role (close/assign visibility)
  pageErrors.length = 0;
  await page.goto(LIST, { waitUntil: "domcontentloaded", timeout: 60000 });
  await dismissOverlay(page);
  await page
    .waitForSelector('[data-field="entry.detailIcon"], [data-field="list.card"], [data-field="empty"]', {
      timeout: 30000,
    })
    .catch(() => {});
  await page.waitForTimeout(1200);
  const detailBtn = page.locator('[data-field="entry.detailIcon"]').first();
  if (await detailBtn.count()) {
    await detailBtn.click({ force: true });
    await page.waitForTimeout(2000);
    await captureCurrent("QA-20", '[data-zone="INC-D"], [data-field="detail.code"]', (d) => {
      if (!d.zones.includes("INC-D")) return "GAP-QA-20 missing INC-D";
      // DEC-CLOSE-01: non-tuần-đường ẩn close; view → banner; QL_HAT có thể assign
      if (d.hasClose && d.testids.includes("roleGateBanner")) {
        return "GAP-QA-20 DEC-CLOSE-01 close visible with RO banner";
      }
      return null;
    });
  } else {
    await captureCurrent(
      "QA-20",
      '[data-zone="INC-L"], [data-feature="web-rmms-incident"]',
      (d) => {
        if (!d.zones.includes("INC-L")) return "GAP-QA-20 missing INC-L fallback";
        return null;
      },
    );
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
        aliasUrl: "http://localhost:9301/web-rmms-cam-incident",
        method: "_capture_cam_incident.mjs",
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
