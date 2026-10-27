(() => {
  'use strict';
  document.querySelectorAll('[role="tablist"]').forEach(tablist => {
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const activateTab = active => {
      tabs.forEach(tab => {
        const selected = tab === active;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
      });
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', event => {
        let target;
        if (event.key === 'ArrowRight') target = tabs[(index + 1) % tabs.length];
        if (event.key === 'ArrowLeft') target = tabs[(index + tabs.length - 1) % tabs.length];
        if (event.key === 'Home') target = tabs[0];
        if (event.key === 'End') target = tabs[tabs.length - 1];
        if (!target) return;
        event.preventDefault();
        activateTab(target);
        target.focus();
      });
    });
  });
  const copyButton = document.getElementById('copy-bibtex');
  const status = document.getElementById('copy-status');
  let resetTimer;
  copyButton.addEventListener('click', async () => {
    const text = document.getElementById('bibtex').textContent;
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (_) { /* Use the local-file-compatible fallback below. */ }
    if (!copied) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('aria-label', 'BibTeX citation to copy');
      textarea.style.cssText = 'position:fixed;left:0;top:0;opacity:0;pointer-events:none';
      document.body.appendChild(textarea);
      textarea.select();
      try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
      textarea.remove();
      copyButton.focus();
    }
    if (copied) {
      copyButton.textContent = 'Copied ✓';
      status.textContent = 'Citation copied.';
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => { copyButton.textContent = 'Copy BibTeX ⧉'; status.textContent = ''; }, 3500);
    } else {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('bibtex'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C (Windows) or Command+C (Mac) to copy.';
    }
  });
})();
