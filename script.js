(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  var navCta = document.getElementById("navCta");

  function closeMenu() {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
    navCta.classList.remove("is-open");
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("is-open");
      navCta.classList.toggle("is-open");
    });

    // Close the mobile menu after a nav link is chosen
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close on escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- "Request a Quote" links from product cards ---------- */
  document.querySelectorAll('.category-card .quote-link').forEach(function (link) {
    link.addEventListener("click", function () {
      var category = link.closest(".category-card").querySelector("h3").textContent.trim();
      var typeField = document.getElementById("qType");
      var messageField = document.getElementById("qMessage");
      if (typeField) {
        // Product category requests default to Product Supply
        typeField.value = "Product Supply";
      }
      if (messageField && !messageField.value) {
        messageField.value = "I'm interested in: " + category + ". Please share pricing and availability.";
      }
    });
  });

  /* ---------- Pricing tabs ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".pricing-tab"));
  function selectTab(tab) {
    tabs.forEach(function (t) {
      var active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
      var panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !active;
    });
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { selectTab(tab); });
    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (next) { e.preventDefault(); selectTab(next); next.focus(); }
    });
  });

  /* ---------- "Choose a package" buttons prefill the quote form ---------- */
  document.querySelectorAll(".btn-select").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var typeField = document.getElementById("qType");
      var messageField = document.getElementById("qMessage");
      var type = btn.getAttribute("data-type");
      var plan = btn.getAttribute("data-plan");
      if (typeField) typeField.value = type;
      if (messageField) {
        messageField.value = "I'm interested in the " + plan + " " + type.replace(" Development", "") + " package. Please share the next steps and a detailed quotation.";
      }
    });
  });

  /* ---------- Quote form: build a mailto: submission ---------- */
  var quoteForm = document.getElementById("quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = document.getElementById("qName").value.trim();
      var org = document.getElementById("qOrg").value.trim();
      var phone = document.getElementById("qPhone").value.trim();
      var email = document.getElementById("qEmail").value.trim();
      var type = document.getElementById("qType").value;
      var message = document.getElementById("qMessage").value.trim();

      var subject = "Quote Request — " + type + (org ? " — " + org : "");

      var bodyLines = [
        "Name: " + name,
        "Organization: " + (org || "-"),
        "Phone: " + phone,
        "Email: " + (email || "-"),
        "Requirement Type: " + type,
        "",
        "Message:",
        message
      ];

      var mailto =
        "mailto:infoakterinternational@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });
  }

})();
