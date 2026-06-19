/*
 * Tiny EN/TR language switch shared by every legal page.
 *
 * The active language is stored on <html data-lang="..."> so CSS can show/hide
 * the matching [data-en] / [data-tr] blocks. We set it as early as possible
 * (see the inline <head> script in each page) to avoid a flash of both
 * languages, then this file wires up the toggle button and remembers the
 * choice in localStorage. Mirrors the app's behaviour: default to Turkish on
 * Turkish-locale devices, English everywhere else.
 */
(function () {
  var KEY = "bb-legal-lang";

  function resolveInitial() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "tr") return saved;
    } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("tr") === 0 ? "tr" : "en";
  }

  function apply(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    // The button advertises the language you'll switch TO (so it reads as an
    // action), exactly like the in-app LANG toggle.
    var btns = document.querySelectorAll("[data-lang-toggle]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].textContent = lang === "en" ? "TR" : "EN";
      btns[i].setAttribute(
        "aria-label",
        lang === "en" ? "Türkçe'ye geç" : "Switch to English"
      );
    }
  }

  // Pick up whatever the head script already set (falls back if it didn't run).
  var current = document.documentElement.getAttribute("data-lang") || resolveInitial();
  apply(current);

  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest && ev.target.closest("[data-lang-toggle]");
    if (!btn) return;
    var now = document.documentElement.getAttribute("data-lang");
    apply(now === "en" ? "tr" : "en");
  });
})();
