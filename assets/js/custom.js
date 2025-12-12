const Travlla = (function () {
  const handleCursorsection = () => {
    let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");
    let cursorScale = document.querySelectorAll(".cursor-scale");
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
        gsap.set(cursor2, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    cursorScale.forEach((link) => {
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
    });
  };

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".sticky-header").addClass("is-fixed");
    } else {
      $(".sticky-header").removeClass("is-fixed");
    }
  });

  const handleColorfillheader = () => {
    const scroll = window.scrollY;
    const header = document.querySelector(".is-fixed");

    if (!header) return;

    if (scroll >= 100) {
      header.classList.add("color-fill");
    } else {
      header.classList.remove("color-fill");
    }
  };

  function handleMobilesidedrawer() {
    jQuery("#mobile-side-drawer").on("click", function () {
      jQuery(".mobile-sider-drawer-menu").toggleClass("active");
    });
  }
  function handleSitesearch() {
    jQuery('a[href="#search"]').on("click", function (event) {
      jQuery("#search").addClass("open");
      jQuery('#search > form > input[type="search"]').focus();
    });

    jQuery("#search, #search .close-btn").on("click keyup", function (event) {
      if (event.target === this || event.target.className === "close-btn") {
        jQuery(this).removeClass("open");
      }
    });
  }

  function handleMagnificvideo() {
    if (jQuery(".popup-youtube").length) {
      jQuery(".popup-youtube").magnificPopup({
        type: "iframe",
      });
    }
  }


  const handleCounterJS = () => {
    const counters = document.querySelectorAll(".value");
    const speed = 200;

    const runCounter = (counter) => {
      const target = +counter.getAttribute("data-value");
      let current = 0;
      const increment = target / speed;

      const update = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };

      update();
    };

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const handleScroll = () => {
      counters.forEach((counter) => {
        if (!counter.classList.contains("counted") && isInViewport(counter)) {
          counter.classList.add("counted");
          runCounter(counter);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  };

  if (jQuery(".emblem").length) {
    const Emblem = {
      init: function (el, str) {
        const element = document.querySelector(el);
        const text = str ? str : element.innerHTML;
        element.innerHTML = "";
        for (let i = 0; i < text.length; i++) {
          const letter = text[i];
          const span = document.createElement("span");
          const node = document.createTextNode(letter);
          const r = (360 / text.length) * i;
          const x = (Math.PI / text.length).toFixed(0) * i;
          const y = (Math.PI / text.length).toFixed(0) * i;
          span.appendChild(node);
          span.style.webkitTransform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
          span.style.transform =
            "rotateZ(" + r + "deg) translate3d(" + x + "px," + y + "px,0)";
          element.appendChild(span);
        }
      },
    };

    Emblem.init(".emblem");
  }

  const handleSetCurrentYear = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let elements = document.getElementsByClassName("current-year");

    for (const element of elements) {
      element.innerHTML = currentYear;
    }
  };

  function handleTvrRainEffetctfunction() {
    $(".rain").empty();

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
      const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);

      increment += randoFiver;

      drops +=
        '<div class="drop" style="left: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;">' +
        '<div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div>' +
        '<div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div>' +
        "</div>";

      backDrops +=
        '<div class="drop" style="right: ' +
        increment +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;">' +
        '<div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div>' +
        '<div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div>' +
        "</div>";
    }

    $(".rain.front-row").append(drops);
    $(".rain.back-row").append(backDrops);
  }

  function handleScrollTop() {
    jQuery("button.scroltop").on("click", function () {
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });

    jQuery(window).on("scroll", function () {
      const scroll = jQuery(window).scrollTop();

      if (scroll > 900) {
        jQuery("button.scroltop").fadeIn(1000);
      } else {
        jQuery("button.scroltop").fadeOut(1000);
      }
    });
  }

  const handleCustomSelects = () => {
    document.querySelectorAll(".dynamic-select").forEach((selectElement) => {
      createCustomSelectFromSelect(selectElement);
    });
  };

  const createCustomSelectFromSelect = (selectElement) => {
    const selectId =
      selectElement.id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const customSelectDiv = document.createElement("div");
    customSelectDiv.id = `custom-${selectId}`;
    customSelectDiv.className = "custom-select";

    const selectedDiv = document.createElement("div");
    selectedDiv.className = "select-selected";
    selectedDiv.textContent = (
      selectElement.querySelector("option[selected]") ||
      selectElement.options[0]
    ).textContent;

    const labelText = selectElement.parentElement?.dataset?.label || "";
    if (labelText) {
      const label = document.createElement("span");
      label.textContent = labelText;
      selectedDiv.appendChild(label);
    }

    customSelectDiv.appendChild(selectedDiv);

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "select-items select-hide";
    customSelectDiv.appendChild(itemsDiv);

    Array.from(selectElement.options).forEach((option) => {
      const customOptionDiv = document.createElement("div");
      customOptionDiv.className = "select-item";
      customOptionDiv.setAttribute("data-value", option.value);
      customOptionDiv.textContent = option.textContent;
      if (option.selected) customOptionDiv.classList.add("active");

      customOptionDiv.addEventListener("click", function () {
        selectedDiv.childNodes[0].textContent = this.textContent;
        selectElement.value = this.getAttribute("data-value");
        selectElement.dispatchEvent(new Event("change"));
        selectElement.dispatchEvent(new Event("click"));

        itemsDiv.classList.add("select-hide");
        selectedDiv.classList.remove("select-active");

        itemsDiv
          .querySelectorAll(".select-item")
          .forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      });

      itemsDiv.appendChild(customOptionDiv);
    });

    selectElement.style.display = "none";
    selectElement.parentNode.insertBefore(
      customSelectDiv,
      selectElement.nextSibling
    );

    selectedDiv.addEventListener("click", function (e) {
      e.stopPropagation();
      itemsDiv.classList.toggle("select-hide");
      selectedDiv.classList.toggle("select-active");
    });

    document.addEventListener("click", function (e) {
      if (!customSelectDiv.contains(e.target)) {
        itemsDiv.classList.add("select-hide");
        selectedDiv.classList.remove("select-active");
      }
    });
  };

  const handleAccordion = (container = document) => {
    const accordionContainers = container.querySelectorAll(".myAccordion");

    accordionContainers.forEach((accordion) => {
      if (accordion.dataset.bound === "true") return;
      accordion.dataset.bound = "true";

      accordion.addEventListener("click", function (e) {
        const header = e.target.closest(".accordion-header");
        if (!header || !accordion.contains(header)) return;

        const item = header.parentElement;
        const content = item.querySelector(".accordion-content");
        const arrow = header.querySelector(".arrow");
        const isOpen = header.classList.contains("open");

        accordion.querySelectorAll(".accordion-header").forEach((h) => {
          if (h !== header) {
            h.classList.remove("open");
            h.querySelector(".arrow")?.classList.remove("active");
            const c = h.parentElement.querySelector(".accordion-content");
            if (c) c.style.maxHeight = null;
          }
        });

        if (!isOpen) {
          header.classList.add("open");
          content.style.maxHeight = content.scrollHeight + "px";
          arrow?.classList.add("active");
        } else {
          header.classList.remove("open");
          content.style.maxHeight = null;
          arrow?.classList.remove("active");
        }
      });
    });

    container.querySelectorAll(".accordion-header.open").forEach((header) => {
      const content = header.parentElement.querySelector(".accordion-content");
      const arrow = header.querySelector(".arrow");
      if (content) {
        content.style.maxHeight = content.scrollHeight + "px";
        arrow?.classList.add("active");
      }
    });
  };

  function handleLightboxPopup() {
    lc_lightbox(".elem", {
      wrap_class: "lcl_fade_oc",
      gallery: true,
      thumb_attr: "data-lcl-thumb",

      skin: "minimal",
      radius: 0,
      padding: 0,
      border_w: 0,
    });
  }

  const handleTouchSpin = () => {
    function incrementValue(e) {
      e.preventDefault();
      const button = e.target.closest("[data-field]");
      const fieldName = button.getAttribute("data-field");

      const parent = button.closest("div") || button.closest("td");
      const input = parent.querySelector(`input[name="${fieldName}"]`);

      let currentVal = parseInt(input.value, 10);
      input.value = !isNaN(currentVal) ? currentVal + 1 : 0;
    }

    function decrementValue(e) {
      e.preventDefault();
      const button = e.target.closest("[data-field]");
      const fieldName = button.getAttribute("data-field");

      const parent = button.closest("div") || button.closest("td");
      const input = parent.querySelector(`input[name="${fieldName}"]`);

      let currentVal = parseInt(input.value, 10);
      input.value = !isNaN(currentVal) && currentVal > 0 ? currentVal - 1 : 0;
    }

    document.querySelectorAll(".input-group").forEach((group) => {
      group.addEventListener("click", function (e) {
        const target = e.target.closest(".button-plus, .button-minus");
        if (!target) return;

        if (target.classList.contains("button-plus")) {
          incrementValue(e);
        } else if (target.classList.contains("button-minus")) {
          decrementValue(e);
        }
      });
    });
  };

  // Generic vote controls handler: looks for buttons with data-action and updates nearest .vote-counter
  const handleVoteControls = () => {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      // Look for nearest container (the vote control wrapper)
      const container = btn.closest('.flex.items-center') || btn.parentElement;
      if (!container) return;
      const counter = container.querySelector('.vote-counter');
      if (!counter) return;
      let value = parseInt((counter.textContent || '').trim(), 10) || 0;
      if (action === 'increment') value++;
      else value = Math.max(0, value - 1);
      counter.textContent = value;
    });
  };

  const handleflatpickr = () => {
    if (jQuery(".flatpickr1").length > 0) {
      flatpickr(".flatpickr1", {});
    }
    if (jQuery(".time-picker").length > 0) {
      flatpickr(".time-picker", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        defaultDate: "13:45",
      });
    }
  };

  const handleTagSlider = () => {
    if (jQuery("#tagSlider").length > 0) {
      $("#tagSlider").grouploop({
        velocity: 1,
        forward: false,
        pauseOnHover: true,
        childNode: ".item",
        childWrapper: ".item-wrap",
      });
    }
    if (jQuery("#tagSlider2").length > 0) {
      $("#tagSlider2").grouploop({
        velocity: 1,
        forward: true,
        pauseOnHover: true,
        childNode: ".item",
        childWrapper: ".item-wrap",
      });
    }
  };

  const handleShopProductPrice = () => {
    const directionSlider = document.getElementById("slider-direction");
    const directionField = document.getElementById("field");

    if (!directionSlider || !directionField) return;

    noUiSlider.create(directionSlider, {
      start: 2,
      connect: [true, false],
      range: {
        min: 0,
        max: 10,
      },
    });

    directionSlider.noUiSlider.on("update", (values, handle) => {
      directionField.innerHTML = values[handle];
    });
  };

  const handlePageLoader = () => {
    $(".loading-area").fadeOut(1500);
  };

  const handleContactModal = () => {
    const DEFAULT_PHONE = "+6282173750055";

    function createModal() {
      if (document.querySelector('.contact-modal-backdrop')) return;

      const backdrop = document.createElement('div');
      backdrop.className = 'contact-modal-backdrop';

      const modal = document.createElement('div');
      modal.className = 'contact-modal';
      modal.innerHTML = `
        <h3>Hubungi Kami</h3>
        <p>Butuh bantuan atau ingin menyelenggarakan voting? Pilih cara menghubungi kami.</p>
        <div class="modal-actions">
          <button class="btn-ghost btn-close" type="button">Batal</button>
          <button class="btn-primary-modal btn-open-wa" type="button">Buka WhatsApp</button>
        </div>
        <div class="modal-note">Atau salin nomor: <strong class="modal-phone">${DEFAULT_PHONE}</strong></div>
      `;

      backdrop.appendChild(modal);
      document.body.appendChild(backdrop);

      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) hideModal();
      });

      modal.querySelector('.btn-close').addEventListener('click', hideModal);

      modal.querySelector('.btn-open-wa').addEventListener('click', function () {
        const phone = extractPhone() || DEFAULT_PHONE;
        const web = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
        // try open whatsapp protocol first
        window.location.href = web;
      });

      const phoneEl = modal.querySelector('.modal-phone');
      phoneEl.addEventListener('click', function () {
        const phone = phoneEl.textContent.trim();
        copyToClipboard(phone);
      });
    }

    function extractPhone() {
      // try to find a whatsapp link in the nav that contains the phone
      const a = document.querySelector('a[href^="whatsapp://send"], a[href*="wa.me"], a[href*="whatsapp.com/send"]');
      if (!a) return null;
      const href = a.getAttribute('href');
      const m1 = href.match(/phone=([^&]+)/);
      if (m1) return m1[1];
      const m2 = href.match(/wa.me\/(\+?[0-9]+)/);
      if (m2) return m2[1];
      const m3 = href.match(/send\?phone=(\+?[0-9]+)/);
      if (m3) return m3[1];
      return null;
    }

    function copyToClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          alert('Nomor tersalin ke clipboard');
        });
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); alert('Nomor tersalin ke clipboard'); } catch (e) {}
        ta.remove();
      }
    }

    function showModal() {
      createModal();
      const b = document.querySelector('.contact-modal-backdrop');
      if (b) b.classList.add('active');
    }

    function hideModal() {
      const b = document.querySelector('.contact-modal-backdrop');
      if (b) b.classList.remove('active');
    }

    // delegate clicks on nav/contact links
    document.addEventListener('click', function (e) {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const text = (a.textContent || '').trim().toLowerCase();

      const isContactLink = href.startsWith('whatsapp://') || href.includes('wa.me') || text.includes('kontak kami') || text === 'kontak';

      if (isContactLink) {
        // prevent in-page navigations that go to kontak.html or whatsapp protocol
        e.preventDefault();
        showModal();
      }
    });
  };

  return {
    init: function () {
      handleCursorsection();
      handleColorfillheader();
      handleMobilesidedrawer();
      handleSitesearch();
      handleTvrRainEffetctfunction();
      handleMagnificvideo();
      handleScrollTop();
      handleCounterJS();
      handleSetCurrentYear();
      handleCustomSelects();
      handleAccordion();
      handleLightboxPopup();
      handleTouchSpin();
      handleVoteControls();
      handleflatpickr();
      handleTagSlider();
      handleShopProductPrice();
      handleContactModal();
      handlePageLoader();
    },
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  Travlla.init();
});
