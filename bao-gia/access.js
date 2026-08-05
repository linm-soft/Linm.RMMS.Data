(function () {
  var STORAGE_KEY = 'rmms_bao_gia_unlock';
  var gate = document.getElementById('contract-gate');
  var app = document.getElementById('contract-app');
  var form = document.getElementById('contract-gate-form');
  var input = document.getElementById('contract-gate-code');
  var errorEl = document.getElementById('contract-gate-error');
  var errorText = document.getElementById('contract-gate-error-text');

  function tokenFor(code) {
    var h = 5381;
    for (var i = 0; i < code.length; i++) {
      h = ((h << 5) + h + code.charCodeAt(i)) | 0;
    }
    return 'rmms_' + (h >>> 0).toString(36);
  }

  function getExpectedCode() {
    var cfg = window.CONTRACT_ACCESS;
    return cfg && typeof cfg.code === 'string' ? cfg.code : '';
  }

  function showError(msg) {
    if (!errorEl || !errorText || !input) return;
    if (msg) {
      errorText.textContent = msg;
      errorEl.hidden = false;
      input.classList.add('is-error');
      return;
    }
    errorText.textContent = '';
    errorEl.hidden = true;
    input.classList.remove('is-error');
  }

  function unlock() {
    if (gate) {
      gate.hidden = true;
      gate.setAttribute('hidden', '');
    }
    if (app) {
      app.classList.remove('is-locked');
      app.hidden = false;
      app.removeAttribute('hidden');
      app.removeAttribute('aria-hidden');
    }
    document.body.classList.remove('contract-locked');
  }

  function lock() {
    if (gate) {
      gate.hidden = false;
      gate.removeAttribute('hidden');
    }
    if (app) {
      app.classList.add('is-locked');
      app.hidden = true;
      app.setAttribute('hidden', '');
      app.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.add('contract-locked');
  }

  function init() {
    var expected = getExpectedCode();
    if (!expected) {
      lock();
      showError('Chưa cấu hình mã truy cập.');
      return;
    }
    var saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved && saved === tokenFor(expected)) {
      unlock();
      return;
    }
    lock();
    if (input) input.focus();
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showError('');
      var expected = getExpectedCode();
      var value = (input && input.value) ? input.value.trim() : '';
      if (value === expected) {
        sessionStorage.setItem(STORAGE_KEY, tokenFor(expected));
        unlock();
        return;
      }
      showError('Mã truy cập không đúng.');
      if (input) {
        input.value = '';
        input.focus();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
