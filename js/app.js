const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    (function () {
      const body = document.body;
      const triggers = document.querySelectorAll("[data-modal-open]");
      const modals = document.querySelectorAll(".modal");
      let activeModal = null;
      let lastFocus = null;

      function closeModal(modal, { restoreFocus = true } = {}) {
        if (!modal) return;
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        if (!document.querySelector(".modal.is-open")) {
          body.classList.remove("has-modal");
        }
        if (restoreFocus && lastFocus) {
          lastFocus.focus({ preventScroll: true });
        }
        if (activeModal === modal) {
          activeModal = null;
        }
      }

      function openModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        if (activeModal && activeModal !== modal) {
          closeModal(activeModal, { restoreFocus: false });
        }
        lastFocus = document.activeElement;
        activeModal = modal;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        body.classList.add("has-modal");
        const focusTarget =
          modal.querySelector("[data-autofocus]") ||
          modal.querySelector("button, [href], input, textarea, select, [tabindex]:not([tabindex='-1'])");
        const target = focusTarget || modal.querySelector(".modal-card");
        if (target) {
          target.focus({ preventScroll: true });
        }
      }

      triggers.forEach(trigger => {
        trigger.addEventListener("click", () => openModal(trigger.dataset.modalOpen));
      });

      document.querySelectorAll("[data-modal-close]").forEach(btn => {
        btn.addEventListener("click", () => closeModal(btn.closest(".modal")));
      });

      modals.forEach(modal => {
        modal.addEventListener("click", event => {
          if (event.target === modal) {
            closeModal(modal);
          }
        });
      });

      document.addEventListener("keydown", event => {
        if (event.key === "Escape" && activeModal) {
          closeModal(activeModal);
        }
      });
    })();

    (function () {
      const form = document.getElementById("demo-form");
      if (!form) return;
      const success = form.querySelector(".form-success");
      form.addEventListener("submit", event => {
        event.preventDefault();
        form.reset();
        if (success) {
          success.hidden = false;
          success.focus({ preventScroll: true });
        }
      });
    })();
