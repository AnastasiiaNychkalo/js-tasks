"use strict";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then((reg) => console.log("SW зареєстрований:", reg.scope))
      .catch((err) => console.error("Помилка реєстрації:", err));
  });
}

function clearCache() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage("clearCache");
  }
}
