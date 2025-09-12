import { slideLeftSidebar } from "./ui.js";
import { copyUrlToClipboard } from "./utils.js";

window.slideLeftSidebar = slideLeftSidebar;
window.copyUrlToClipboard = copyUrlToClipboard;

document.addEventListener("DOMContentLoaded", function () {
    const areaEl = document.getElementById("right-area");
    const barEl = document.getElementById("top-bar");
    if (!areaEl || !barEl) return;

    // rAF-based throttling to reduce work on frequent scroll events
    let ticking = false;
    areaEl.addEventListener(
        "scroll",
        function () {
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(function () {
                    // read scrollTop here so we get the latest value at frame time
                    const scrollTop = areaEl.scrollTop;
                    if (scrollTop >= 45) {
                        barEl.classList.add("hide");
                    } else {
                        barEl.classList.remove("hide");
                    }
                    ticking = false;
                });
            }
        },
        { passive: true }
    );
});