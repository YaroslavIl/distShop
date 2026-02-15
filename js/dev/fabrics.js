import "./popup.min.js";
import { l as lightGallery } from "./lightgallery.min.js";
import "./common.min.js";
const KEY = "7EC452A9-0CFD441C-BD984C7C-17C8456E";
function initFabricsGallery() {
  console.log("🔍 Шукаю [data-fls-fabrics]...");
  const fabricsPage = document.querySelector("[data-fls-fabrics]");
  console.log("Знайдено fabricsPage:", fabricsPage);
  if (fabricsPage) {
    const fabricsContainer = document.querySelector(".fabrics__category");
    console.log("Знайдено fabricsContainer:", fabricsContainer);
    if (fabricsContainer) {
      lightGallery(fabricsContainer, {
        selector: ".fabric-card__img",
        licenseKey: KEY,
        speed: 500,
        download: false,
        counter: true
      });
      console.log("✅ Галерея тканин ініціалізована");
    }
  }
}
window.addEventListener("load", initFabricsGallery);
