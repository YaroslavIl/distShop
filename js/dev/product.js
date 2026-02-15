import "./popup.min.js";
import { l as lightGallery } from "./lightgallery.min.js";
import "./common.min.js";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lgThumbnail_min$1 = { exports: {} };
var lgThumbnail_min = lgThumbnail_min$1.exports;
var hasRequiredLgThumbnail_min;
function requireLgThumbnail_min() {
  if (hasRequiredLgThumbnail_min) return lgThumbnail_min$1.exports;
  hasRequiredLgThumbnail_min = 1;
  (function(module, exports$1) {
    !(function(t, e) {
      module.exports = e();
    })(lgThumbnail_min, (function() {
      var t = function() {
        return (t = Object.assign || function(t2) {
          for (var e2, i2 = 1, s2 = arguments.length; i2 < s2; i2++) for (var h2 in e2 = arguments[i2]) Object.prototype.hasOwnProperty.call(e2, h2) && (t2[h2] = e2[h2]);
          return t2;
        }).apply(this, arguments);
      }, e = { thumbnail: true, animateThumb: true, currentPagerPosition: "middle", alignThumbnails: "middle", thumbWidth: 100, thumbHeight: "80px", thumbMargin: 5, appendThumbnailsTo: ".lg-components", toggleThumb: false, enableThumbDrag: true, enableThumbSwipe: true, thumbnailSwipeThreshold: 10, loadYouTubeThumbnail: true, youTubeThumbSize: 1, thumbnailPluginStrings: { toggleThumbnails: "Toggle thumbnails" } }, i = "lgContainerResize", s = "lgUpdateSlides", h = "lgBeforeOpen", n = "lgBeforeSlide";
      return (function() {
        function o(t2, e2) {
          return this.thumbOuterWidth = 0, this.thumbTotalWidth = 0, this.translateX = 0, this.thumbClickable = false, this.core = t2, this.$LG = e2, this;
        }
        return o.prototype.init = function() {
          this.settings = t(t({}, e), this.core.settings), this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin), this.translateX = 0, this.setAnimateThumbStyles(), this.core.settings.allowMediaOverlap || (this.settings.toggleThumb = false), this.settings.thumbnail && (this.build(), this.settings.animateThumb ? (this.settings.enableThumbDrag && this.enableThumbDrag(), this.settings.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = false) : this.thumbClickable = true, this.toggleThumbBar(), this.thumbKeyPress());
        }, o.prototype.build = function() {
          var t2 = this;
          this.setThumbMarkup(), this.manageActiveClassOnSlideChange(), this.$lgThumb.first().on("click.lg touchend.lg", (function(e2) {
            var i2 = t2.$LG(e2.target);
            i2.hasAttribute("data-lg-item-id") && setTimeout((function() {
              if (t2.thumbClickable && !t2.core.lgBusy) {
                var e3 = parseInt(i2.attr("data-lg-item-id"));
                t2.core.slide(e3, false, true, false);
              }
            }), 50);
          })), this.core.LGel.on(n + ".thumb", (function(e2) {
            var i2 = e2.detail.index;
            t2.animateThumb(i2);
          })), this.core.LGel.on(h + ".thumb", (function() {
            t2.thumbOuterWidth = t2.core.outer.get().offsetWidth;
          })), this.core.LGel.on(s + ".thumb", (function() {
            t2.rebuildThumbnails();
          })), this.core.LGel.on(i + ".thumb", (function() {
            t2.core.lgOpened && setTimeout((function() {
              t2.thumbOuterWidth = t2.core.outer.get().offsetWidth, t2.animateThumb(t2.core.index), t2.thumbOuterWidth = t2.core.outer.get().offsetWidth;
            }), 50);
          }));
        }, o.prototype.setThumbMarkup = function() {
          var t2 = "lg-thumb-outer ";
          this.settings.alignThumbnails && (t2 += "lg-thumb-align-" + this.settings.alignThumbnails);
          var e2 = '<div class="' + t2 + '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
          this.core.outer.addClass("lg-has-thumb"), ".lg-components" === this.settings.appendThumbnailsTo ? this.core.$lgComponents.append(e2) : this.core.outer.append(e2), this.$thumbOuter = this.core.outer.find(".lg-thumb-outer").first(), this.$lgThumb = this.core.outer.find(".lg-thumb").first(), this.settings.animateThumb && this.core.outer.find(".lg-thumb").css("transition-duration", this.core.settings.speed + "ms").css("width", this.thumbTotalWidth + "px").css("position", "relative"), this.setThumbItemHtml(this.core.galleryItems);
        }, o.prototype.enableThumbDrag = function() {
          var t2 = this, e2 = { cords: { startX: 0, endX: 0 }, isMoved: false, newTranslateX: 0, startTime: /* @__PURE__ */ new Date(), endTime: /* @__PURE__ */ new Date(), touchMoveTime: 0 }, i2 = false;
          this.$thumbOuter.addClass("lg-grab"), this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb", (function(s2) {
            t2.thumbTotalWidth > t2.thumbOuterWidth && (s2.preventDefault(), e2.cords.startX = s2.pageX, e2.startTime = /* @__PURE__ */ new Date(), t2.thumbClickable = false, i2 = true, t2.core.outer.get().scrollLeft += 1, t2.core.outer.get().scrollLeft -= 1, t2.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
          })), this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, (function(s2) {
            t2.core.lgOpened && i2 && (e2.cords.endX = s2.pageX, e2 = t2.onThumbTouchMove(e2));
          })), this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, (function() {
            t2.core.lgOpened && (e2.isMoved ? e2 = t2.onThumbTouchEnd(e2) : t2.thumbClickable = true, i2 && (i2 = false, t2.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")));
          }));
        }, o.prototype.enableThumbSwipe = function() {
          var t2 = this, e2 = { cords: { startX: 0, endX: 0 }, isMoved: false, newTranslateX: 0, startTime: /* @__PURE__ */ new Date(), endTime: /* @__PURE__ */ new Date(), touchMoveTime: 0 };
          this.$lgThumb.on("touchstart.lg", (function(i2) {
            t2.thumbTotalWidth > t2.thumbOuterWidth && (i2.preventDefault(), e2.cords.startX = i2.targetTouches[0].pageX, t2.thumbClickable = false, e2.startTime = /* @__PURE__ */ new Date());
          })), this.$lgThumb.on("touchmove.lg", (function(i2) {
            t2.thumbTotalWidth > t2.thumbOuterWidth && (i2.preventDefault(), e2.cords.endX = i2.targetTouches[0].pageX, e2 = t2.onThumbTouchMove(e2));
          })), this.$lgThumb.on("touchend.lg", (function() {
            e2.isMoved ? e2 = t2.onThumbTouchEnd(e2) : t2.thumbClickable = true;
          }));
        }, o.prototype.rebuildThumbnails = function() {
          var t2 = this;
          this.$thumbOuter.addClass("lg-rebuilding-thumbnails"), setTimeout((function() {
            t2.thumbTotalWidth = t2.core.galleryItems.length * (t2.settings.thumbWidth + t2.settings.thumbMargin), t2.$lgThumb.css("width", t2.thumbTotalWidth + "px"), t2.$lgThumb.empty(), t2.setThumbItemHtml(t2.core.galleryItems), t2.animateThumb(t2.core.index);
          }), 50), setTimeout((function() {
            t2.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
          }), 200);
        }, o.prototype.setTranslate = function(t2) {
          this.$lgThumb.css("transform", "translate3d(-" + t2 + "px, 0px, 0px)");
        }, o.prototype.getPossibleTransformX = function(t2) {
          return t2 > this.thumbTotalWidth - this.thumbOuterWidth && (t2 = this.thumbTotalWidth - this.thumbOuterWidth), t2 < 0 && (t2 = 0), t2;
        }, o.prototype.animateThumb = function(t2) {
          if (this.$lgThumb.css("transition-duration", this.core.settings.speed + "ms"), this.settings.animateThumb) {
            var e2 = 0;
            switch (this.settings.currentPagerPosition) {
              case "left":
                e2 = 0;
                break;
              case "middle":
                e2 = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                break;
              case "right":
                e2 = this.thumbOuterWidth - this.settings.thumbWidth;
            }
            this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * t2 - 1 - e2, this.translateX > this.thumbTotalWidth - this.thumbOuterWidth && (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth), this.translateX < 0 && (this.translateX = 0), this.setTranslate(this.translateX);
          }
        }, o.prototype.onThumbTouchMove = function(t2) {
          return t2.newTranslateX = this.translateX, t2.isMoved = true, t2.touchMoveTime = (/* @__PURE__ */ new Date()).valueOf(), t2.newTranslateX -= t2.cords.endX - t2.cords.startX, t2.newTranslateX = this.getPossibleTransformX(t2.newTranslateX), this.setTranslate(t2.newTranslateX), this.$thumbOuter.addClass("lg-dragging"), t2;
        }, o.prototype.onThumbTouchEnd = function(t2) {
          t2.isMoved = false, t2.endTime = /* @__PURE__ */ new Date(), this.$thumbOuter.removeClass("lg-dragging");
          var e2 = t2.endTime.valueOf() - t2.startTime.valueOf(), i2 = t2.cords.endX - t2.cords.startX, s2 = Math.abs(i2) / e2;
          return s2 > 0.15 && t2.endTime.valueOf() - t2.touchMoveTime < 30 ? ((s2 += 1) > 2 && (s2 += 1), s2 += s2 * (Math.abs(i2) / this.thumbOuterWidth), this.$lgThumb.css("transition-duration", Math.min(s2 - 1, 2) + "settings"), i2 *= s2, this.translateX = this.getPossibleTransformX(this.translateX - i2), this.setTranslate(this.translateX)) : this.translateX = t2.newTranslateX, Math.abs(t2.cords.endX - t2.cords.startX) < this.settings.thumbnailSwipeThreshold && (this.thumbClickable = true), t2;
        }, o.prototype.getThumbHtml = function(t2, e2, i2) {
          var s2, h2 = this.core.galleryItems[e2].__slideVideoInfo || {};
          s2 = h2.youtube && this.settings.loadYouTubeThumbnail ? "//img.youtube.com/vi/" + h2.youtube[1] + "/" + this.settings.youTubeThumbSize + ".jpg" : t2;
          var n2 = document.createElement("div");
          n2.setAttribute("data-lg-item-id", e2 + ""), n2.className = "lg-thumb-item " + (e2 === this.core.index ? "active" : ""), n2.style.cssText = "width: " + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + "; margin-right: " + this.settings.thumbMargin + "px;";
          var o2 = document.createElement("img");
          return o2.alt = i2 || "", o2.setAttribute("data-lg-item-id", e2 + ""), o2.src = s2, n2.appendChild(o2), n2;
        }, o.prototype.setThumbItemHtml = function(t2) {
          for (var e2 = 0; e2 < t2.length; e2++) {
            var i2 = this.getThumbHtml(t2[e2].thumb, e2, t2[e2].alt);
            this.$lgThumb.append(i2);
          }
        }, o.prototype.setAnimateThumbStyles = function() {
          this.settings.animateThumb && this.core.outer.addClass("lg-animate-thumb");
        }, o.prototype.manageActiveClassOnSlideChange = function() {
          var t2 = this;
          this.core.LGel.on(n + ".thumb", (function(e2) {
            var i2 = t2.core.outer.find(".lg-thumb-item"), s2 = e2.detail.index;
            i2.removeClass("active"), i2.eq(s2).addClass("active");
          }));
        }, o.prototype.toggleThumbBar = function() {
          var t2 = this;
          this.settings.toggleThumb && (this.core.outer.addClass("lg-can-toggle"), this.core.$toolbar.append('<button type="button" aria-label="' + this.settings.thumbnailPluginStrings.toggleThumbnails + '" class="lg-toggle-thumb lg-icon"></button>'), this.core.outer.find(".lg-toggle-thumb").first().on("click.lg", (function() {
            t2.core.outer.toggleClass("lg-components-open");
          })));
        }, o.prototype.thumbKeyPress = function() {
          var t2 = this;
          this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, (function(e2) {
            t2.core.lgOpened && t2.settings.toggleThumb && (38 === e2.keyCode ? (e2.preventDefault(), t2.core.outer.addClass("lg-components-open")) : 40 === e2.keyCode && (e2.preventDefault(), t2.core.outer.removeClass("lg-components-open")));
          }));
        }, o.prototype.destroy = function() {
          this.settings.thumbnail && (this.$LG(window).off(".lg.thumb.global" + this.core.lgId), this.core.LGel.off(".lg.thumb"), this.core.LGel.off(".thumb"), this.$thumbOuter.remove(), this.core.outer.removeClass("lg-has-thumb"));
        }, o;
      })();
    }));
  })(lgThumbnail_min$1);
  return lgThumbnail_min$1.exports;
}
var lgThumbnail_minExports = requireLgThumbnail_min();
const lgThumbnail = /* @__PURE__ */ getDefaultExportFromCjs(lgThumbnail_minExports);
const KEY$1 = "7EC452A9-0CFD441C-BD984C7C-17C8456E";
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));
const getImagePath = (path) => path;
async function loadProduct() {
  try {
    let switchToThumb = function(index) {
      const thumbs = document.querySelectorAll(".gallery__thumb");
      if (thumbs[index]) {
        thumbs.forEach((t) => t.classList.remove("active"));
        thumbs[index].classList.add("active");
        mainImage.src = thumbs[index].dataset.src;
        thumbs[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    };
    const response = await fetch("./files/products.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    const product = products.find((p) => p.id === productId);
    if (!product) {
      window.location.href = "index.html";
      return;
    }
    document.getElementById("productTitle").textContent = product.name;
    document.getElementById("productPrice").innerHTML = `
            <data value="${product.price}">${product.price.toLocaleString("uk-UA")} грн</data>
        `;
    document.getElementById("productDescription").textContent = product.description;
    const featuresList = document.getElementById("characteristicFeatures");
    featuresList.innerHTML = product.features.map((feature) => `
            <div>
                <dt>${feature.name}</dt>
                <dd>${feature.value}</dd>
            </div>
        `).join("");
    const mainImage = document.getElementById("mainImage");
    const firstImagePath = getImagePath(product.image);
    mainImage.src = firstImagePath;
    mainImage.alt = product.name;
    const thumbsContainer = document.getElementById("thumbs");
    thumbsContainer.innerHTML = product.gallery.map((img, index) => {
      const src = getImagePath(img);
      return `
        <button 
            type="button"
            class="gallery__thumb ${index === 0 ? "active" : ""}"
            data-index="${index}"
            data-src="${src}"
            aria-label="Переглянути зображення ${index + 1}">
            <img src="${src}" alt="${product.name}">

        </button>
    `;
    }).join("");
    const prevArrow = document.getElementById("prevArrow");
    const nextArrow = document.getElementById("nextArrow");
    if (prevArrow && nextArrow) {
      prevArrow.addEventListener("click", () => {
        const activeThumb = document.querySelector(".gallery__thumb.active");
        const currentIndex = parseInt(activeThumb.dataset.index);
        const newIndex = currentIndex > 0 ? currentIndex - 1 : product.gallery.length - 1;
        switchToThumb(newIndex);
      });
      nextArrow.addEventListener("click", () => {
        const activeThumb = document.querySelector(".gallery__thumb.active");
        const currentIndex = parseInt(activeThumb.dataset.index);
        const newIndex = currentIndex < product.gallery.length - 1 ? currentIndex + 1 : 0;
        switchToThumb(newIndex);
      });
    }
    const galleryElement = document.querySelector("[data-fls-gallery]");
    let lgInstance;
    if (galleryElement) {
      if (lgInstance) lgInstance.destroy();
      lgInstance = lightGallery(galleryElement, {
        plugins: [lgThumbnail],
        licenseKey: KEY$1,
        speed: 500,
        thumbnail: true,
        animateThumb: true,
        download: false,
        dynamic: true,
        dynamicEl: product.gallery.map((img) => {
          const src = getImagePath(img);
          return {
            src,
            thumb: src
          };
        })
      });
    }
    document.querySelectorAll(".gallery__thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const index = Number(thumb.dataset.index);
        switchToThumb(index);
      });
    });
    mainImage.addEventListener("click", () => {
      const activeThumb = document.querySelector(".gallery__thumb.active");
      const index = activeThumb ? Number(activeThumb.dataset.index) : 0;
      if (lgInstance) {
        lgInstance.openGallery(index);
      }
    });
  } catch (error) {
    console.error("Помилка завантаження товару:", error);
  }
}
loadProduct();
const KEY = "7EC452A9-0CFD441C-BD984C7C-17C8456E";
const fabricsPage = document.querySelector("[data-fls-fabrics]");
console.log(fabricsPage);
function initFabricsGallery() {
  console.log("🔍 Шукаю [data-fls-fabrics]...");
  const fabricsPage2 = document.querySelector("[data-fls-fabrics]");
  console.log("Знайдено fabricsPage:", fabricsPage2);
  if (fabricsPage2) {
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
    } else {
      console.error("❌ .fabrics__category не знайдено!");
    }
  } else {
    console.log("ℹ️ [data-fls-fabrics] не знайдено (можливо, це не сторінка тканин)");
  }
}
window.addEventListener("load", initFabricsGallery);
