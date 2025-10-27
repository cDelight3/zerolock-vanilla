const statusList = document.getElementById("statusList");
const sensorCount = document.getElementById("sensorCount");
const ruleForm = document.getElementById("ruleForm");
const ruleFeedback = document.getElementById("ruleFeedback");
const yearEl = document.getElementById("year");

const incidents = [
  { label: "Acceso laboratorio biométrico", severity: "alto" },
  { label: "Puerta dock 03", severity: "medio" },
  { label: "Cámara patio central", severity: "bajo" },
  { label: "Rack principal", severity: "medio" },
];

function renderStatus() {
  incidents.forEach((incident) => {
    const item = document.createElement("li");
    item.className = "status-list__item";

    const label = document.createElement("span");
    label.className = "status-list__label";
    label.textContent = incident.label;

    const badge = document.createElement("span");
    badge.className = `status-list__badge status-list__badge--${incident.severity}`;
    badge.textContent = incident.severity;

    item.append(label, badge);
    statusList.append(item);
  });
}

function animateSensors() {
  const start = 210;
  const end = 248;
  const duration = 1200;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(start + (end - start) * progress);
    sensorCount.textContent = value;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const severity = formData.get("severity");

  ruleFeedback.textContent = `Regla “${name}” guardada con prioridad ${severity}.`;
  event.target.reset();
}

function handleCTA(event) {
  const action = event.target.dataset.action;
  if (!action) return;
  const message =
    action === "demo"
      ? "Un asesor se pondrá en contacto contigo en breve."
      : "Desplegando recorrido interactivo...";
  ruleFeedback.textContent = message;
}

renderStatus();
animateSensors();
ruleForm.addEventListener("submit", handleFormSubmit);
document.querySelector(".hero__actions").addEventListener("click", handleCTA);
yearEl.textContent = new Date().getFullYear();
