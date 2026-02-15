import "./popup.min.js";
import { l as lightGallery } from "./lightgallery.min.js";
import "./common.min.js";
const KEY = "7EC452A9-0CFD441C-BD984C7C-17C8456E";
function initFabricsGallery() {
  const fabricsPage = document.querySelector("[data-fls-fabrics]");
  if (fabricsPage) {
    const fabricsContainer = document.querySelector(".fabrics__category");
    if (fabricsContainer) {
      lightGallery(fabricsContainer, {
        selector: ".fabric-card__img",
        licenseKey: KEY,
        speed: 500,
        download: false,
        counter: true,
        controls: true
      });
    }
  }
}
window.addEventListener("load", initFabricsGallery);
