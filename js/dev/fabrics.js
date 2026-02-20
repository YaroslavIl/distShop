import "./popup.min.js";
import { l as lightGallery } from "./lightgallery-bundle.min.js";
import "./common.min.js";
const KEY = "7EC452A9-0CFD441C-BD984C7C-17C8456E";
function initFabricsGallery() {
  const fabricsPage = document.querySelector("[data-fls-fabrics]");
  if (fabricsPage) {
    const fabricsContainer = document.querySelector(".fabrics__category");
    if (fabricsContainer) {
      lightGallery(fabricsContainer, {
        selector: ".fabric-card",
        licenseKey: KEY,
        speed: 500,
        download: false,
        counter: true,
        controls: true,
        showCloseIcon: true,
        mobileSettings: {
          controls: true,
          showCloseIcon: true,
          download: false
        }
      });
    }
  }
}
document.addEventListener("DOMContentLoaded", initFabricsGallery);
