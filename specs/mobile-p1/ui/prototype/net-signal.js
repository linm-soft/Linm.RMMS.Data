/* Tín hiệu internet + cột sóng + tốt/trung bình/yếu. SSOT iOS+Android. */
(function (g) {
  const LEVELS = [
    { id: 'tot', bars: 4, label: 'Tốt' },
    { id: 'tb', bars: 2, label: 'Trung bình' },
    { id: 'yeu', bars: 1, label: 'Yếu' }
  ];
  let idx = 0;

  const WIFI = '<svg class="net-wifi" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M2.6 8.6A16 16 0 0 1 12 5c3.4 0 6.6 1 9.4 3.6"/>' +
    '<path d="M5.4 12.5A10.2 10.2 0 0 1 12 10c2.4 0 4.6.8 6.6 2.5"/>' +
    '<path d="M8.8 16.2A5 5 0 0 1 12 15c1.2 0 2.3.4 3.2 1.2"/>' +
    '<circle cx="12" cy="19.4" r="1.35"/></svg>';

  function html(tone) {
    const lv = LEVELS[idx];
    const bars = [1, 2, 3, 4].map((n) => '<i class="' + (n <= lv.bars ? 'on' : '') + '"></i>').join('');
    const extra = tone === 'light' ? ' on-light' : '';
    const glyph = tone === 'light' ? '' : WIFI;
    return '<span class="net-sig net-sig--' + lv.id + extra + '" title="Tín hiệu ' + lv.label + ' · bấm đổi hạng">' +
      glyph + '<span class="net-bars">' + bars + '</span><span class="net-lab">' + lv.label + '</span></span>';
  }

  function paint() {
    document.querySelectorAll('[data-net-signal]').forEach((el) => {
      el.innerHTML = html(el.getAttribute('data-net-signal'));
    });
  }

  function cycle() {
    idx = (idx + 1) % LEVELS.length;
    paint();
  }

  function mount() {
    paint();
    document.addEventListener('click', (e) => {
      if (!e.target.closest('[data-net-signal]')) return;
      e.preventDefault();
      cycle();
    });
  }

  g.NetSignal = { mount: mount, cycle: cycle, level: function () { return LEVELS[idx]; } };
})(typeof window !== 'undefined' ? window : globalThis);
